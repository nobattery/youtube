import React from "react";

//Props에 전달된 title을 return
//title : Response - snippet - title(데이터의 위치 확인 필요)
const VideoItem = (props) => <h1>{props.video.snippet.title}</h1>;

export default VideoItem;
