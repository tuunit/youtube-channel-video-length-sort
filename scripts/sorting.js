function ascending() {
    let channelVideos = document.querySelectorAll("ytd-two-column-browse-results-renderer[page-subtype='channels'] span.ytd-thumbnail-overlay-time-status-renderer");

    l = [].map.call(channelVideos, function (e) {
        l = e.innerHTML.trim()
            .split(":")
            .map(function (t) { return parseInt(t); })
            .reduce(function (p, c) { return p * 60 + c; });
        return { a: e.parentElement.parentElement.parentElement, l: l };
    }).sort(function (a, b) { return a.l - b.l; });

    ctn = "YTD-CONTINUATION-ITEM-RENDERER";
    i = document.querySelector("#primary #items");

    if (i && i.childElementCount) {
        c = i.lastElementChild;
        if (c.tagName == ctn) {
            c.remove();
        } else {
            c = null;
        }

        l.forEach(function (o) {
            i.appendChild(o.a.parentElement.parentElement.parentElement);
        });

        if (c) i.appendChild(c);
    } else {
        i = document.querySelector("ytd-two-column-browse-results-renderer[page-subtype='channels'] #contents");
        c = i.lastElementChild;

        if (c.tagName == ctn) {
            c.remove();
        } else {
            c = null;
        }

        l.forEach(function (o) {
            i.appendChild(o.a.parentElement.parentElement.parentElement.parentElement.parentElement);
        });

        if (c) i.appendChild(c);
    }

    sortDirection = false;
    document.getElementById("video-length-sort").innerText = "Video length ↓";
}

function descending() {
    let channelVideos = document.querySelectorAll("ytd-two-column-browse-results-renderer[page-subtype='channels'] span.ytd-thumbnail-overlay-time-status-renderer");

    l = [].map.call(channelVideos, function (e) {
        l = e.innerHTML.trim()
            .split(":")
            .map(function (t) { return parseInt(t); })
            .reduce(function (p, c) { return p * 60 + c; });
        return { a: e.parentElement.parentElement.parentElement, l: l };
    }).sort(function (a, b) { return b.l - a.l; });

    ctn = "YTD-CONTINUATION-ITEM-RENDERER";
    i = document.querySelector("#primary #items");

    if (i && i.childElementCount) {
        c = i.lastElementChild;
        if (c.tagName == ctn) {
            c.remove();
        } else {
            c = null;
        }

        l.forEach(function (o) {
            i.appendChild(o.a.parentElement.parentElement.parentElement);
        });

        if (c) i.appendChild(c);
    } else {
        i = document.querySelector("ytd-two-column-browse-results-renderer[page-subtype='channels'] #contents");
        c = i.lastElementChild;

        if (c.tagName == ctn) {
            c.remove();
        } else {
            c = null;
        }

        l.forEach(function (o) {
            i.appendChild(o.a.parentElement.parentElement.parentElement.parentElement.parentElement);
        });

        if (c) i.appendChild(c);
    }
    sortDirection = true;
    document.getElementById("video-length-sort").innerText = "Video length ↑";
}