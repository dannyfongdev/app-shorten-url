/*

https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html

*/

class Shorten {
  // Fetch shortened URL from API
  async getShortUrl(url) {
    /* build url */
    const fetchUrl = "https://api.shrtco.de/v2/shorten?url=" + url;

    const response = await fetch(fetchUrl);
    const responseData = await response.json();
    // console.log(responseData);
    if (responseData.ok) {
      return responseData.result.full_short_link;
    } else {
      throw responseData.error;
    }
  }
}