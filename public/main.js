const navToggle = document.querySelector(".menu-icon");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  console.log(primaryNav);
  primaryNav.toggleAttribute("data-visible");
});

const shorty = new Shorten();

function getShortUrl(url) {
  shorty.getShortUrl(url)
    .then(result => {
      paintUrl(url, result);
    })
    .catch(err => console.log(err));
}

const longUrl = "https://redeemersf.org/welcome-form";
getShortUrl(longUrl);

function paintUrl(longUrl, shortUrl) {
  console.log(longUrl, shortUrl);
}