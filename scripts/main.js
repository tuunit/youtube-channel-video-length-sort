'use strict'
console.log("I'm ready");
const style = new CSSStyleSheet(), stgs = {}
document.adoptedStyleSheets.push(style);

let sortDirection = false;

const channelObserver = new MutationObserver(() => {
    if (document.URL.substring(document.URL.lastIndexOf('/') + 1) != "videos") {
        let btn = document.getElementById("video-length-sort");
        if (btn !== null) {
            btn.remove();
            sortDirection = false;
        }
        return;
    }

    if (document.getElementById("video-length-sort")) {
        return;
    }

    const chipsContainer = document.querySelector("ytd-two-column-browse-results-renderer[page-subtype='channels'] #scroll-container");

    if (chipsContainer === null) {
        return;
    }

    const chips = document.querySelectorAll("#chips yt-chip-cloud-chip-renderer");

    chipsContainer.appendChild(createButton(chips));
}).observe(document.documentElement || document.body, { childList: true, subtree: true })
