package db

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql"
	_ "github.com/sea-kun/dev_re-chat-app_by_gin_react_redux/server/.env"
)

func InitDB() *sql.DB {
	dbinfo := fmt.Sprintf("%s:%s@/%s?parseTime=true",
		os.Getenv("DBUSER"),
		os.Getenv("DBPASSWORD"),
		os.Getenv("DBNAME"),
	)

	db, err := sql.Open("mysql", dbinfo)
	if err != nil {
		panic(err)
	}

	return db
}
