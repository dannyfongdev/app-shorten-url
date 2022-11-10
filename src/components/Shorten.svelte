<script>
  let urls = [];

  $: totalUrls = urls.length;
  let newId;
  $: {
    if (totalUrls === 0) {
      newId = 1;
    } else {
      newId = Math.max(...urls.map((u) => u.id)) + 1;
    }
  }

  let searchString = "";

  const shorty = new Shorten();

  function getShortUrl(url) {
    shorty
      .getShortUrl(url)
      .then((result) => {
        paintUrl(url, result);
      })
      .catch((err) => console.log(err));
  }

  function paintUrl(longUrl, shortUrl) {
    urls = [
      ...urls,
      { id: newId, long: longUrl, short: shortUrl, isCopied: false },
    ];
    searchString = "";
  }

  function copyToClipboard(url) {
    try {
      navigator.clipboard.writeText(url.short);
      url.isCopied = true;
      urls = urls; // triggers refresh, isCopied styling
    } catch(err) {
      console.log("error copying text")
    }
  }
</script>

<section class="section-shorten">
  <div class="shorten">
    <div class="shorten-bar">
      <input
        id="shorten-string"
        type="text"
        placeholder="Shorten a link here..."
        bind:value={searchString}
      />
      <!-- <p id="shorten-alert"><em>Please add a link</em></p> -->
      <a
        href="/"
        on:click|preventDefault={() => getShortUrl(searchString)}
        class="btn btn-square">Shorten It!</a
      >
    </div>
    {#each urls as url (url.id)}
      <div class="shorten-result">
        <p class="long-link">{url.long}</p>
        <div>
          <p class="short-link">{url.short}</p>
          <a
            on:click|preventDefault={() => copyToClipboard(url)}
            href="/"
            class="btn btn-square"
            class:is-copied={url.isCopied}
            >{url.isCopied ? "Copied!" : "Copy"}</a
          >
        </div>
      </div>
    {/each}
  </div>
</section>
