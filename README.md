# Youtube Clone Project
![React Badge](https://camo.githubusercontent.com/4e4a3b5c3e9c00501ec866e2f2466c5a6032f838aca5f2cf3b14450e39e8a2f0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742532302d2532333230323332612e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642) ![JavaScript Bagde](https://camo.githubusercontent.com/62d37abe760867620e0baea1066303719d630a82936837ba7bff6b0c754e3c9f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742532302d2532333332333333302e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145) ![Postcss Badge](https://camo.githubusercontent.com/d2165a8c1b10c1e9b932d64eb5440fc07d878f1fed0c2ca1b67b4a37d0484c76/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f73746373732d4444334130412e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d706f7374637373266c6f676f436f6c6f723d7768697465) ![Postman Badge](https://camo.githubusercontent.com/2bcaa6a45a44f2fda1f6156da610319e756ce2164e6d41fd7a8350ecb5d0b4ef/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d6666366333372e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d706f73746d616e266c6f676f436f6c6f723d7768697465) ![Yarn Badge](https://camo.githubusercontent.com/15a055bd2c0745c05dbc7c17e583c7ccddcc33c547ee63fce064f0abf388f490/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5961726e2d3263386562622e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d7961726e266c6f676f436f6c6f723d7768697465)

## 개요
![mainpage](https://user-images.githubusercontent.com/17999694/119256317-1d700c80-bbfb-11eb-9aed-886b89787448.png)
Youtube APIS를 활용하여 유튜브의 인기 있는 동영상 목록을 보여주고, 검색시 검색어에 해당하는 동영상 리스트를 보여주며, 동영상 클릭시 해당 영상의 정보를 표시합니다.

강의 링크 => https://academy.dream-coding.com/courses/react-basic , 데모 링크 => https://nobattery.github.io/youtube/

Youtube APIs
- [Videos](https://developers.google.com/youtube/v3/docs/videos)
- [Search](https://developers.google.com/youtube/v3/docs/search)

## Components

- Search Header : icon, input, search button
                   input에서 검색하고, icon 클릭시 인기 동영상페이지로 표시된다.
- VideoList : VideoItem에 key, video, onClick 상태, display 상태(list,grid)를 전달한다.
- VideoItem : display 상태에 맞게 표시하고, video, thumbnail, title, channelTitle을 표시한다.
- VideoDetail : [Youtube IFrame](https://developers.google.com/youtube/youtube_player_demo)을 이용하여 VieoDetail(type,width,height,src,framebroder,allowfullscreen 등)을 설정한다.
- Youtube : fetch or axios를 이용하여 API와 연결. 사용할 API의 파라미터를 설정하고, 응답 결과를 리턴한다. 단, 연결에 사용하는 API Key는 .env파일에 따로 작성(보안 이슈). Dependency Injection을 위해 네트워크 통신부분을 따로 이 곳에 생성했다. 

각 컴포넌트 별 모듈화된 CSS(PostCSS)로 관리

## Search 
![search](https://user-images.githubusercontent.com/17999694/119259295-86aa4c80-bc08-11eb-8a32-0f556a049af0.png)
검색어에 해당하는 영상의 thumbnail, title, channelTitle의 list를 보여준다.

## Details
![detailpage](https://user-images.githubusercontent.com/17999694/119259510-9e360500-bc09-11eb-89a9-72f32e073af7.png)
선택한 Video, Title, ChannelTitle, description을 표시하고, 우측에는 이전 인기 Video list를 표시한다.

## 주의 사항
Youtube Data API는 하루 최대 사용량이 정해져있다. 초과하면 페이지가 보이지 않으니 주의.

