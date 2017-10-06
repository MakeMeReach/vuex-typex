declare const auth: {
    commitSetUserID: (payload: {
        userID: string;
    }) => void;
    commitSetIsLoggedIn: (payload: {
        isLoggedIn: boolean;
    }) => void;
    dispatchLogin: () => Promise<void>;
};
export default auth;
