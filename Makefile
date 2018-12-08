webpack:
	npx webpack --config client/webpack/webpack.config.js
run:
	go run server/server.go
wrun: webpack run
db:
	mysql -u go -ppassword -D chat_db
