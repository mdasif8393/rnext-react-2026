// return actual path of image url
function getImgUrl(name) {
    return new URL(`../assets/movie-covers/${name}`, import.meta.url);
}

export { getImgUrl };