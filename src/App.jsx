import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

//key를 다른 파일에 옮겼고, App에서는 직접 Request하지않고, 따로 선언한 API를 사용.
function App({ youtube }) {
  //useState(초기값) : 초기값 선언 주의! 에러 발생 가능
  const [videos, setVideos] = useState([]);
  //Select a Video  -> Remember Selected Video -> Show Video Details
  const [selectedVideo, setSelectedVideo] = useState(null); //초기값 null

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };
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
      <section className={styles.content}>
        {/**SelectedVideo가 있다면 div를 보여주고, SideVideo가 한줄에 하나씩 나오도록 해준다.*/}
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
