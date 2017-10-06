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
const chai_1 = require("chai");
const Vue = require("vue");
const Vuex = require("vuex");
const store_1 = require("./store");
const birthday_1 = require("./store/birthday/birthday");
let store;
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        Vue.use(Vuex);
        store = store_1.buildStore();
        store.replaceState({
            birthday: {
                birthdays: [
                    { name: "Richard", dob: new Date(1995, 10, 11) },
                    { name: "Erlich", dob: new Date(1983, 1, 17) },
                    { name: "Nelson", dob: new Date(1996, 3, 28) },
                    { name: "Dinesh", dob: new Date(1989, 1, 7) },
                    { name: "Bertram", dob: new Date(1985, 7, 14) },
                    { name: "Donald", dob: new Date(1994, 5, 31) },
                    { name: "Monica", dob: new Date(1996, 8, 26) },
                ]
            },
            auth: { isLoggedIn: false, userID: "" }
        });
        chai_1.expect(birthday_1.default.oldestName).equal("Erlich");
        yield birthday_1.default.dispatchRemoveFirstAfterDelay(20);
        yield birthday_1.default.dispatchRemoveFirstAfterDelay(20);
        chai_1.expect(birthday_1.default.oldestName).equal("Bertram");
    });
}
test();
//# sourceMappingURL=main.js.map