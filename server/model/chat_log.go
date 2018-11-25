package model

import (
	"database/sql"
	"time"

	"github.com/sea-kun/dev_re-chat-app_by_gin_react_redux/server/util"
)

type ResChatLog struct {
	ID        int       `json:id`
	User      string    `json:user`
	Comment   string    `json:comment`
	CreatedAt time.Time `json:created_at`
}

func GetChatLog(db *sql.DB) ([]*ResChatLog, error) {
	rows, err := db.Query("SELECT c.id, u.name, c.comment, c.created_at FROM chat_log c INNER JOIN user u ON c.user_id = u.id")
	if err != nil {
		util.Stack(err)
		return nil, err
	}
	defer rows.Close()

	chatLogs := make([]*ResChatLog, 0)
	for rows.Next() {
		var chatLog ResChatLog
		if err := rows.Scan(&chatLog.ID, &chatLog.User, &chatLog.Comment, &chatLog.CreatedAt); err != nil {
			util.Stack(err)
			return nil, err
		}
		chatLogs = append(chatLogs, &chatLog)
	}

	if err := rows.Err(); err != nil {
		util.Stack(err)
		return nil, err
	}

	return chatLogs, nil
}
