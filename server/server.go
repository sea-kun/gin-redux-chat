package main

import (
	"github.com/gin-gonic/gin"
	"github.com/sea-kun/dev_re-chat-app_by_gin_react_redux/server/controller"
	"github.com/sea-kun/dev_re-chat-app_by_gin_react_redux/server/db"
)

func main() {
	r := gin.Default()

	db := db.InitDB()
	defer db.Close()

	chatLogEnv := controller.ChatLogEnv{DB: db}
	r.GET("/", chatLogEnv.GetChatLog)

	r.Run()
}
