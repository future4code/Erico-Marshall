
export const goToMenu = (history) => {
    history.push("/");
};

export const goToMovieDetail = (history, id) => {
    history.push(`/movie/${id}`);
};