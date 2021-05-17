import React, { useEffect, useState } from "react";
import "./App.css";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //Most Popular Api- GET - fetch Code from PostMan
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    //Warning ! Youtube API Key을 다른 사람이 사용시 과금이 발생할 수 있다.
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=MyKey",
      requestOptions
    )
      .then((response) => response.json()) //text -> json : 시각적인 이유
      .then((result) => setVideos(result.items)) //result 중 item을 화면에 보여줌
      .catch((error) => console.log("error", error)); //에러를 log에 표시
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
