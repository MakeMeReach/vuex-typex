"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../index");
describe("Create an anon store", () => {
    let moduleBuilder;
    beforeEach(() => {
        const anonStore = index_1.getStoreBuilder("anon");
        anonStore.reset();
        moduleBuilder = anonStore.module("anon", { age: 36 });
    });
    describe("try to create a getter with anon function", () => {
        it("should fail", () => {
            chai_1.expect(() => {
                const readApproxDaysAlive = moduleBuilder.read((state) => Math.round(state.age * 365.25));
            }).to.throw();
        });
    });
    describe("try to create a getter with explicit name", () => {
        it("should succeed", () => {
            chai_1.expect(() => {
                const readApproxDaysAlive = moduleBuilder.read((state) => Math.round(state.age * 365.25), "daysAlive");
            }).to.not.throw();
        });
    });
    const daysAliveGetter = (state) => Math.round(state.age * 365.25); // <-- named function
    describe("try to create a getter with named function", () => {
        it("should succeed", () => {
            chai_1.expect(() => {
                const readApproxDaysAlive = moduleBuilder.read(daysAliveGetter);
            }).to.not.throw();
        });
    });
});
//# sourceMappingURL=anon-handler.spec.js.map