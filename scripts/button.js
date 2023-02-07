function createButton(chips) {
    let sortBtn = document.createElement("button");

    sortBtn.id = "video-length-sort";
    sortBtn.className = "ytb-vl-btn"
    sortBtn.innerText = "Video length ↑";

    sortBtn.addEventListener('click', () => {
        sortBtn.setAttribute("selected", "");

        //if (chips !== null && chips.length > 0) {
        //    chips.forEach(chip => {
        //        chip.removeAttribute("selected");
        //    });
        //}

        if (sortDirection) ascending();
        else descending();
    });

    addButtonStyle();

    return sortBtn;
}

function addButtonStyle() {
    style.replace(`
    .ytb-vl-btn {
        border: none; 
        border-radius: 8px;
        color: var(--yt-spec-text-primary);
        height: 32px;
        align-items: center;
        display: inline-flex;
        margin-left: 12px;
        padding: 0 var(--ytd-margin-3x);
        background-color: var(--yt-spec-badge-chip-background);
        font-family: var(--ytd-user-comment-font-family);
        font-size: var(--ytd-user-comment-font-size);
        font-weight: var(--ytd-user-comment-font-weight);
        line-height: var(--ytd-user-comment-line-height);
        letter-spacing: var(--ytd-user-comment-letter-spacing);
    }
    .ytb-vl-btn:hover {
        cursor: pointer;
    }
    .ytb-vl-btn[selected] {
        background-color: var(--yt-spec-text-primary);
        color: var(--yt-spec-text-primary-inverse);
    }
    .ytb-vl-btn:not([selected]):hover {
        background-color: var(--yt-spec-button-chip-background-hover);
    }
    `);
}