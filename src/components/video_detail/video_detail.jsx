import React from "react";
import styles from "./video_detail.module.css";

//Detail : iFrame이 보여야한다.
//https://developers.google.com/youtube/youtube_player_demo
//IFrame Embed Code : https://www.youtube.com/embed/{ID}
const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      type="text/html"
      title="youtube video player"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameborder="0"
      allowfullscreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <h3>{snippet.channelTitle}</h3>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

export default VideoDetail;
