"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../index");
describe("Create a store", () => {
    let moduleBuilder;
    let storeBuilder;
    let log = [];
    let commitIncrease;
    let commitDecrease;
    beforeEach(() => {
        storeBuilder = index_1.getStoreBuilder("plugin-store");
        moduleBuilder = storeBuilder.module("pluggy", { age: 36 });
        commitIncrease = moduleBuilder.commit((state, payload) => { state.age++; }, "increase");
        commitDecrease = moduleBuilder.commit((state, payload) => { state.age--; }, "decrease");
    });
    describe("that includes a logger plugin", () => {
        it("should log each mutation", () => {
            const loggerPlugin = (store) => {
                store.subscribe((mutation, state) => {
                    log.push(mutation.type);
                });
            };
            storeBuilder.vuexStore({ plugins: [loggerPlugin] });
            commitIncrease();
            commitDecrease();
            chai_1.expect(log.length).to.eq(2);
            chai_1.expect(log).to.deep.equal(["pluggy/increase", "pluggy/decrease"]);
        });
    });
});
//# sourceMappingURL=plugin.spec.js.map