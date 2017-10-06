import { BareActionContext } from "../../../../index";
import { BirthdayState } from "../state";
import { RootState } from "../../index";
export default function removeFirstAfterDelay(context: BareActionContext<BirthdayState, RootState>, delay: number): Promise<void>;
