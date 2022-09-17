class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    return (await fetch(`${this.baseUrl}${path}`)).json();
  }
}

export default HttpClient;
