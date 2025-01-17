import { StartFunc as StartFuncToAddOns } from "../../ToDom/ToTable/ToAddOns.js";
import { StartFunc as StartFuncToOrderItems } from "../../ToDom/ToTable/ToOrderItems.js";
import { StartFunc as StartFuncPrepareData } from "./PrepareData.js";
import { StartFunc as StartFuncCheckBeforeSave } from "./CheckBeforeSave.js";

let StartFunc = () => {
    let jVarLocalAddOnInsertButtonId = document.getElementById("AddOnInsertButtonId");

    jVarLocalAddOnInsertButtonId.addEventListener("click", jFLocalButtonClick);
};

let jFLocalButtonClick = () => {
    let jVarLocalFromCheck = StartFuncCheckBeforeSave();

    if (jVarLocalFromCheck) {
        let jVarLocalItemSerial = StartFuncPrepareData();
        StartFuncToAddOns({ inItemSerial: jVarLocalItemSerial });
        StartFuncToOrderItems();
    };
};

export { StartFunc };