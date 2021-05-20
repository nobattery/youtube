import React, { memo } from "react";
import styles from "./video_item.module.css";

//사용할 데이터의 위치는 PostMan에서 Request -> Response 항목에서 확인 가능하다.
//thumbnail Image Source : Response-Items-snippet-thumbnail-medium-url(img)
//props.video.snippet.(   ) : 반복사용 되는 부분. (props) 대신 ({video : {snippet}}) 사용시 단축 가능
//CSS : PostCSS로 구현
//VideoList에서 전달받은 onVideoClick을 onClick event로 video 전달
const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === "list" ? styles.list : styles.grid;
    return (
      <li
        className={`${styles.container} ${displayType}`}
        onClick={() => onVideoClick(video)}
      >
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={snippet.thumbnails.medium.url}
            alt="video thumbnail"
          />
          <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
