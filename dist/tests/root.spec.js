"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../index");
describe("Create a store", () => {
    let storeBuilder;
    beforeEach(() => {
        storeBuilder = index_1.getStoreBuilder("root");
        storeBuilder.reset();
    });
    describe("that has no modules (root-only)", () => {
        it("should access root state value", () => {
            const stateReader = storeBuilder.state();
            const store = storeBuilder.vuexStore({
                state: { name: "david" }
            });
            chai_1.expect(stateReader().name).to.equal("david");
        });
        it("should support getters", () => {
            const uppercaseName = (state) => state.name.toUpperCase();
            const uppercaseNameGetter = storeBuilder.read(uppercaseName);
            const store = storeBuilder.vuexStore({
                state: { name: "david" }
            });
            chai_1.expect(uppercaseNameGetter()).to.equal("DAVID");
        });
    });
});
//# sourceMappingURL=root.spec.js.map