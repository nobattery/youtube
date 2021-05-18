import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

//key를 다른 파일에 옮겼고, App에서는 직접 Request하지않고, 따로 선언한 API를 사용.
function App({ youtube }) {
  //useState(초기값) : 초기값 선언 주의! 에러 발생 가능
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
