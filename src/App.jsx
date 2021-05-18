import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

//! 문제점 ! 조회에 필요한 Key가 소스상에서 보이고, 조회 처리를 App안해서 해주고있다. 개선할 예정!
function App() {
  //useState(초기값) : 초기값 선언 주의! 에러 발생 가능
  const [videos, setVideos] = useState([]);
  //입력한 검색어로 Search Request 보낸다.
  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    //Warning ! Youtube API Key을 다른 사람이 사용시 과금이 발생할 수 있다.
    //query 부분은 입력값으로 변경
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=Mykey`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    //Most Popular Api- GET - fetch Code from PostMan
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    //Warning ! Youtube API Key을 다른 사람이 사용시 과금이 발생할 수 있다.
    //git 올릴 때 마다 key 확인!
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyAiwoVC130ScwuVVz-MppNA0SdTLPLV3a0&part=snippet&chart=mostPopular&maxResults=25&key=Mykey",
      requestOptions
    )
      .then((response) => response.json()) //text -> json : 시각적인 이유
      .then((result) => setVideos(result.items)) //result 중 item을 화면에 보여줌
      .catch((error) => console.log("error", error)); //에러를 log에 표시
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
