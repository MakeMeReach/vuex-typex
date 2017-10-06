"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../../..");
const initialState = {
    userID: "b6c8185c6d0af2f5d968",
    isLoggedIn: true
};
const storeBuilder = __1.getStoreBuilder();
const moduleBuilder = storeBuilder.module("auth", initialState);
const auth = {
    commitSetUserID: moduleBuilder.commit((state, payload) => state.userID = payload.userID, "setUserID"),
    commitSetIsLoggedIn: moduleBuilder.commit((state, payload) => state.isLoggedIn = payload.isLoggedIn, "isLoggedIn"),
    dispatchLogin: moduleBuilder.dispatch((context) => {
        return;
    }, "login")
};
exports.default = auth;
//# sourceMappingURL=auth.js.map