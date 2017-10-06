import { BirthdayState, Birthday } from "./state";
import { RootState } from "../index";
import { ModuleBuilder } from "../../..";
declare const mb: ModuleBuilder<BirthdayState, RootState>;
declare const birthday: {
    readonly state: BirthdayState;
    readonly oldestName: string | undefined;
    dateOfBirthFor(name: string): Date | undefined;
    commitAddBirthday: (payload: {
        birthday: Birthday;
    }) => void;
    commitRemoveFirstBirthday: () => void;
    commitClearBirthdays: () => void;
    dispatchRemoveFirstAfterDelay: (payload: number) => Promise<void>;
};
export default birthday;
export { mb as birthdayModuleBuilder };
