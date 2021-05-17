import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

//Video Item에 Video List를 전달
//key : PostMan - Response - Item마다 고유한 동영상 id
//문제 발견) 하루 API 할당량을 넘어가면 이곳에서 TYPE 에러가 뜬다. KEY를 2개 사용할 필요가 있다.
const VideoList = (props) => (
  <ul className={styles.videos}>
    {props.videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
