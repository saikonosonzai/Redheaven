let active = document.getElementById("moreInfo0")

function show(index) {
    let inactive = active;
    active = document.getElementById("moreInfo" + index);

    active.style.height = (active.scrollHeight + 10) + "px";
    if (active !== inactive) {
        inactive.style.height = "0";
    }

}