import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

//Video Item에 Video List를 전달
//key : PostMan - Response - Item마다 고유한 동영상 id
const VideoList = (props) => (
  <ul className={styles.videos}>
    {props.videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
