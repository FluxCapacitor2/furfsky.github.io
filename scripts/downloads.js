(() => {
  let container = document.getElementById("downloadContainer");

  data.downloads.forEach((download) => {
    let text = document.createElement("h2");
    let wrapper = document.createElement("section");
    let FLButton = document.createElement("div");
    let OVButton = document.createElement("div");
    let OVPButton = document.createElement("div");
    text.className = "downloadText";
    text.innerHTML = `${download.version} ${
      download.name ? `- ${download.name}` : ""
    }`;
    FLButton.className = "downloadButton";
    if (download.fileFull)
      FLButton.innerHTML = `<a href="${download.fileFull.toString()}" download>${
        download.version
      } Full</a>`;
    OVButton.className = "downloadButton";
    if (download.fileOverlay)
      OVButton.innerHTML = `<a href="${download.fileOverlay.toString()}" download>${
        download.version
      } Overlay</a>`;
    OVPButton.className = "downloadButton";
    if (download.fileOverlayPlus)
      OVPButton.innerHTML = `<a href="${download.fileOverlayPlus.toString()}" download>${
        download.version
      } Overlay+</a>`;
    wrapper.className = "downloadButtons";
    wrapper.appendChild(text);

    if (download.fileFull) wrapper.appendChild(FLButton);
    if (download.fileOverlay) wrapper.appendChild(OVButton);
    if (download.fileOverlayPlus) wrapper.appendChild(OVPButton);
    container.appendChild(wrapper);
  }); //FIXME, move the a tag outside, so restructure this
})();
