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
const index_1 = require("./store/index");
const birthday_1 = require("./store/birthday/birthday");
describe("Run an action", () => {
    let store;
    beforeEach(() => {
        Vue.use(Vuex);
        store = index_1.buildStore();
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
    });
    describe("that removes first 2 birthdays with delays", () => {
        it("should show Bertram after removing first two birthdays", () => __awaiter(this, void 0, void 0, function* () {
            chai_1.expect(birthday_1.default.oldestName).equal("Erlich");
            yield birthday_1.default.dispatchRemoveFirstAfterDelay(5);
            yield birthday_1.default.dispatchRemoveFirstAfterDelay(5);
            chai_1.expect(birthday_1.default.oldestName).equal("Bertram");
        }));
        it("DOB for Betram should be defined", () => __awaiter(this, void 0, void 0, function* () {
            chai_1.expect(birthday_1.default.dateOfBirthFor("Bertram")).to.not.be.undefined;
        }));
        it("DOB for Betram should be 14-Aug-1985", () => __awaiter(this, void 0, void 0, function* () {
            chai_1.expect(birthday_1.default.dateOfBirthFor("Bertram").getTime()).to.equal(new Date(1985, 7, 14).getTime());
        }));
        it("DOB for Joe Bloggs should be undefined", () => __awaiter(this, void 0, void 0, function* () {
            chai_1.expect(birthday_1.default.dateOfBirthFor("Joe Bloggs")).to.be.undefined;
        }));
        it("oldestName should be undefined when no birthdays", () => __awaiter(this, void 0, void 0, function* () {
            birthday_1.default.commitClearBirthdays();
            chai_1.expect(birthday_1.default.oldestName).to.be.undefined;
        }));
        it("oldestName should be Nancy when birthday added from empty", () => __awaiter(this, void 0, void 0, function* () {
            birthday_1.default.commitClearBirthdays();
            birthday_1.default.commitAddBirthday({ birthday: { dob: new Date(2017, 5, 15), name: "Nancy" } });
            chai_1.expect(birthday_1.default.oldestName).to.equal("Nancy");
        }));
    });
});
//# sourceMappingURL=complete.spec.js.map