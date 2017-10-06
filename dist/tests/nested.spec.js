"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../index");
describe("Create a store", () => {
    let outerBuilder;
    let innerBuilder;
    let storeBuilder;
    beforeEach(() => {
        storeBuilder = index_1.getStoreBuilder("nested-store");
        outerBuilder = storeBuilder.module("outer", { str: "hello, world." });
        innerBuilder = outerBuilder.module("inner", { int: 42 });
        // innerBuilder = storeBuilder.module("outer/inner", { int: 42 })
    });
    describe("that includes nested modules", () => {
        it("should access nested value", () => {
            const store = storeBuilder.vuexStore();
            const readState = outerBuilder.state();
            chai_1.expect(readState().inner.int).to.equal(42);
        });
    });
});
//# sourceMappingURL=nested.spec.js.map