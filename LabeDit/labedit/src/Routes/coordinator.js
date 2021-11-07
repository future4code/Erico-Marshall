
export const goToLogin = (history) => {
    history.push("/login");
};

export const goToFeed = (history) => {
    history.push("/");
};

export const goToPostDetail = (history, id) => {
    history.push(`/post/${id}`);
};

export const goToSignUp = (history) => {
    history.push("/cadastro");
}