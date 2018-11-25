package util

import (
	"fmt"
	"os"
	"runtime"
)

func Stack(err error) {
	fmt.Fprintf(os.Stderr, "[Error] %s \n", err)

	pt, file, line, ok := runtime.Caller(1)
	if !ok {
		fmt.Fprintln(os.Stderr, "[Error] Failed stack")
		return
	}
	funcName := runtime.FuncForPC(pt).Name()

	fmt.Fprintf(os.Stderr, "[Error] --> file: %s:%v\n", file, line)
	fmt.Fprintf(os.Stderr, "[Error] --> func: %s\n", funcName)
}
