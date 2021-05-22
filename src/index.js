import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Youtube from "./service/youtube";
import axios from "axios";
import "@fortawesome/fontawesome-free/js/all.js";

//point ! index.js 호출시 한번만 Youtube class가 생성되도록 한다.
//API Key : .env 파일에 정의, git에 올라가지 않도록 .gitignore에 .env 추가했다.
const httpClient = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

const youtube = new Youtube(httpClient);
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
