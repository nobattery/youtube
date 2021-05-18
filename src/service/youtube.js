//네트워크 부분 App -> Youtube Class(new) - mostPopular, search API 제공
//에러 처리를 삭제한 이유 : 서비스 API를 소비하는 쪽(컴포넌트 쪽)에서 에러 처리하는 편이 좋기 때문.
class Youtube {
  //this.key : .env 파일에 정의
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  //Youtube Most Popular API Request
  async mostPopular() {
    //Most Popular Api- GET - fetch Code from PostMan
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }

  //Youtube Search API Request
  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
