import React, { useCallback, useEffect, useState } from "react";
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

  //Header Re-render를 방지하기위해 useCallback 사용.
  //메모리에 영향을 주기 때문에 usecallback 사용주의! 자식 컴포넌트에 props를 전달할 때 위주로 사용.
  const search = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
          //Videos가 검색됐다면 다시 null로 지정(다시 video 검색하면 목록으로 이동하기 위함)
          setSelectedVideo(null);
        });
    },
    [youtube]
  );
  const mostPopular = () => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
    setSelectedVideo(null);
  };
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} mostPopular={mostPopular} />
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
