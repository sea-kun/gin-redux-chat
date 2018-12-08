package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sea-kun/dev_re-chat-app_by_gin_react_redux/server/controller"
	"github.com/sea-kun/dev_re-chat-app_by_gin_react_redux/server/db"
)

func main() {
	r := gin.Default()

	db := db.InitDB()
	defer db.Close()

	r.LoadHTMLGlob("client/dist/template/*")
	r.StaticFS("/js/", http.Dir("client/dist/js"))

	/* templates */
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title":  "chat_log",
			"script": "chat_log.js",
		})
	})

	/* api */
	chatLogEnv := controller.ChatLogEnv{DB: db}
	r.GET("/chatLog/", chatLogEnv.GetChatLog)

	r.Run()
}
