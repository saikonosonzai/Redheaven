let active = document.getElementById("moreInfo0")

function show(index) {
    let inactive = active;
    active = document.getElementById("moreInfo" + index);

    active.style.minHeight = "5rem"
    if (active !== inactive) {
        inactive.style.minHeight = "0";
    }

}