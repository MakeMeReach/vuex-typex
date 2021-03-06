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
const birthday_1 = require("../birthday");
function removeFirstAfterDelay(context, delay) {
    return __awaiter(this, void 0, void 0, function* () {
        if (context.state.birthdays.length > 2) {
            yield new Promise((resolve, _) => setTimeout(resolve, delay)); // second delay
            birthday_1.default.commitRemoveFirstBirthday();
        }
        return;
    });
}
exports.default = removeFirstAfterDelay;
//# sourceMappingURL=removeFirstAfter.js.map