package env

import "os"

func init() {
	os.Setenv("DBUSER", "go")
	os.Setenv("DBPASSWORD", "password")
	os.Setenv("DBNAME", "chat_db")
}
