import { createSlice } from '@reduxjs/toolkit';

const pamSlice = createSlice({
    name: 'pam',
    initialState: {
        person_id: 1,
        birth_date: '',
        deceased_date: '',
        guardian_id: 1,
        doctor_id: 1,
        belongs_to_archdiocese: 0,
        pam_group_id: 1,
    },
    reducers: {
        changePersonId(state, action) {
            state.person_id = action.payload;
        },
        changeBirthDate(state, action) {
            state.birth_date = action.payload;
        },
        changeDeceasedDate(state, action) {
            state.deceased_date = action.payload;
        },
        changeGuardianId(state, action) {
            state.guardian_id = action.payload;
        },
        changeDoctorId(state, action) {
            state.doctor_id = action.payload;
        },
        changeBelongsToArchdiocese(state, action) {
            state.belongs_to_archdiocese = action.payload;
        },
        changePamGroupId(state, action) {
            state.pam_group_id = action.payload;
        },
        changePam(state, action) {
            state.person_id = action.payload.person_id;
            state.birth_date = action.payload.birth_date;
            state.deceased_date = action.payload.deceased_date;
            state.guardian_id = action.payload.guardian_id;
            state.doctor_id = action.payload.doctor_id;
            state.belongs_to_archdiocese = action.payload.belongs_to_archdiocese;
            state.pam_group_id = action.payload.pam_group_id;
        },
        resetPamValues(state, action) {
            state.person_id = 1;
            state.birth_date = '';
            state.deceased_date = '';
            state.guardian_id = 1;
            state.doctor_id = 1;
            state.belongs_to_archdiocese = 0;
            state.pam_group_id = 1;
        }
    }
});

export const {
    changePersonId,
    changeBirthDate,
    changeDeceasedDate,
    changeGuardianId,
    changeDoctorId,
    changeBelongsToArchdiocese,
    changePamGroupId,
    changePam,
    resetPamValues
} = pamSlice.actions;

export const pamReducer = pamSlice.reducer;