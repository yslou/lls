package server

import (
    "net/http"
    "fmt"
    "encoding/json"
)

//go:generate go-bindata-assetfs -pkg server www/

var (
    Stop = make(chan int)
)

func init_gui() {
    mux := http.NewServeMux()
    mux.HandleFunc("/api", handler)
    mux.Handle("/", http.FileServer(assetFS()))

    http.Handle("/", mux)
//    <- Stop
}

func handler(w http.ResponseWriter, r *http.Request) {
    //w.Write([]byte("{hello!!}"))
    fmt.Fprint(w, "{ Hello, world! }")
}

func httpSendJSON(w http.ResponseWriter, v interface{}) {
    w.Header().Set("Content-Type", "application/json; charset=utf-8")
    json.NewEncoder(w).Encode(v)
}
