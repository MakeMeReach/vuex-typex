"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const vuex_1 = require("vuex");
const vue_1 = require("vue");
const delay = (duration) => new Promise((c, e) => setTimeout(c, duration));
vue_1.default.use(vuex_1.default);
const storeBuilder = index_1.getStoreBuilder();
const moduleBuilder = storeBuilder.module("basket", { items: [] });
var basket;
(function (basket) {
    const appendItemMutation = (state, payload) => state.items.push(payload.item);
    const delayedAppendAction = (context) => __awaiter(this, void 0, void 0, function* () {
        yield delay(1000);
        basket.commitAppendItem({ item: { id: "abc123", name: "ABC Item" } });
    });
    basket.commitAppendItem = moduleBuilder.commit(appendItemMutation);
    basket.dispatchDelayedAppend = moduleBuilder.dispatch(delayedAppendAction);
})(basket || (basket = {}));
exports.default = basket;
//# sourceMappingURL=single-file.js.map