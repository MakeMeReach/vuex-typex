"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Vue = require("vue");
const Vuex = require("vuex");
const store_1 = require("./store");
const index_1 = require("../index");
describe("Output the store", () => {
    let store;
    beforeEach(() => {
        Vue.use(Vuex);
        store = store_1.buildStore();
        store.replaceState({
            birthday: { birthdays: [] },
            auth: { isLoggedIn: false, userID: "" }
        });
    });
    describe("then try to add another module", () => {
        it("should fail", () => {
            chai_1.expect(() => index_1.getStoreBuilder().module("blah", {})).to.throw();
        });
    });
    describe("then create a different store and try to add a module", () => {
        it("should succeed", () => {
            chai_1.expect(() => {
                const anotherStore = index_1.getStoreBuilder("another");
                anotherStore.module("another-module", {});
            }).to.not.throw();
        });
    });
});
//# sourceMappingURL=wrong-order.spec.js.map