let overviewImage = document.getElementById("overview_image");
let overviewImages = [["resources/Screenshot 2024-12-09 001800.png", "Space and Mars"], ["resources/Screenshot 2025-01-15 003942.png", "Logo"]]
overviewImage.src = overviewImages[0][0];
overviewImage.alt = overviewImages[0][1];

let imageIndex = 0;

function rotateImages() {
    if (imageIndex === overviewImages.length){
        imageIndex = 0;
    }
    overviewImage.src = overviewImages[imageIndex][0];
    overviewImage.alt = overviewImages[imageIndex][1];

    imageIndex++;
}

setInterval(rotateImages, 6000);