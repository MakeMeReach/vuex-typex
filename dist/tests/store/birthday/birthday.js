"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../../..");
const removeFirstAfter_1 = require("./actions/removeFirstAfter");
const initialState = {
    birthdays: []
};
const mb = __1.getStoreBuilder().module("birthday", initialState);
exports.birthdayModuleBuilder = mb;
const addBirthdayMut = (state, payload) => state.birthdays.push(payload.birthday);
const removeFirstBirthdayMut = (state) => state.birthdays.shift();
const clearBirthdaysMut = (state) => state.birthdays = [];
const oldestNameGetter = mb.read((state) => {
    const oldestBirthday = state.birthdays.slice().sort((a, b) => a.dob.getTime() - b.dob.getTime())[0];
    return oldestBirthday && oldestBirthday.name;
}, "oldestName");
const dateOfBirthForMethod = mb.read((state) => (name) => {
    const matches = state.birthdays.filter(b => b.name === name);
    if (matches.length) {
        return matches[0].dob;
    }
    return;
}, "dob");
const stateReader = mb.state();
const birthday = {
    // getters + methods
    get state() { return stateReader(); },
    get oldestName() { return oldestNameGetter(); },
    dateOfBirthFor(name) { return dateOfBirthForMethod()(name); },
    // mutations    
    commitAddBirthday: mb.commit(addBirthdayMut),
    commitRemoveFirstBirthday: mb.commit(removeFirstBirthdayMut),
    commitClearBirthdays: mb.commit(clearBirthdaysMut),
    // actions
    dispatchRemoveFirstAfterDelay: mb.dispatch(removeFirstAfter_1.default),
};
// birthday.commitAddBirthday({ birthday: { dob: new Date(1980, 2, 3), name: "Louise" } })
// birthday.commitRemoveFirstBirthday()
// birthday.dateOfBirthFor("Louise")
// birthday.dispatchRemoveFirstAfter(1000)
exports.default = birthday;
//# sourceMappingURL=birthday.js.map