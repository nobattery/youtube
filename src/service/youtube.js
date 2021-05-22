//네트워크 부분 App -> Youtube Class(new) - mostPopular, search API 제공
//에러 처리를 삭제한 이유 : 서비스 API를 소비하는 쪽(컴포넌트 쪽)에서 에러 처리하는 편이 좋기 때문.
// fetch -> axios로 변환
class Youtube {
  //this.key : .env 파일에 정의
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  //Youtube Most Popular API Request
  async mostPopular() {
    //Json 변환 생략, 가독성 증가, 이전 브라우저 지원 가능
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  //Youtube Search API Request
  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: query,
      },
    });
    return response.data.items;
  }
}

export default Youtube;
