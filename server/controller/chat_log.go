package controller

import (
	"database/sql"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sea-kun/dev_re-chat-app_by_gin_react_redux/server/model"
)

type ChatLogEnv struct {
	DB *sql.DB
}

func (env ChatLogEnv) GetChatLog(c *gin.Context) {
	chatLogs, err := model.GetChatLog(env.DB)
	if err != nil {
		c.PureJSON(http.StatusInternalServerError, "failed get chatlog")
		return
	}

	c.PureJSON(http.StatusOK, chatLogs)
}
