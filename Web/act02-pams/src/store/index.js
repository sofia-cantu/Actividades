import { configureStore } from "@reduxjs/toolkit";

import {
    pamReducer,
    changeRol,
    changeName,
    changeLastName,
    changeTelephone,
    changeEmail,
    changeSex,
    changePostalCode,
    changeCountry,
    changePassword,
    changeTip,
    changeBloodType,
    changeWeight,
    changeHeight,
    changeBirthDate
} from "./slices/pamSlice";

import { pamsReducer, addPam, editPam, removePam } from "./slices/pamsSlice";

const store = configureStore({
    reducer: {
        pam: pamReducer,
        pams: pamsReducer
    }
});

export { store, changeRol, changeName, changeLastName, changeTelephone, changeEmail, changeSex, changePostalCode, changeCountry, changePassword, changeTip, changeBloodType, changeWeight, changeHeight, changeBirthDate, addPam, editPam, removePam };