import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { pamsApi } from "./apis/pamsApi";
import { answerApi } from "./apis/answerApi";
import { dimensionApi } from "./apis/dimensionApi";
import { group_typeApi } from "./apis/group_typeApi";
import { health_dataApi } from "./apis/health_dataApi";
import { pam_groupApi } from "./apis/pam_groupApi";
import { pam_test_answerApi } from "./apis/pam_test_answerApi";
import { pam_test_resultApi } from "./apis/pam_test_resultApi";
import { pam_testApi } from "./apis/pam_testApi";
import { personApi } from "./apis/personApi";
import { questionApi } from "./apis/questionApi";
import { test_instructionsApi } from "./apis/test_instructionsApi";
import { test_weightApi } from "./apis/test_weightApi";
import { testApi } from "./apis/testApi";
import {
  pamReducer,
  changePersonId,
  changeBirthDate,
  changeDeceasedDate,
  changeGuardianId,
  changeDoctorId,
  changeBelongsToArchdiocese,
  changePamGroupId,
  changePam,
  resetPamValues
} from './slices/pamSlice';
import {
  personReducer,
  changeFirstName,
  changeLastName,
  changeGender,
  changeBirthDate,
  changeDeceasedDate,
  changeGuardianId,
  changeDoctorId,
  changeBelongsToArchdiocese,
  changePamGroupId,
  changePerson,
  resetPersonValues
} from './slices/personSlice';


const store = configureStore({
    reducer: {
        pam: pamReducer,
        person: personReducer,
        [pamsApi.reducerPath]: pamsApi.reducer,
        [answerApi.reducerPath]: answerApi.reducer,
        [dimensionApi.reducerPath]: dimensionApi.reducer,
        [group_typeApi.reducerPath]: group_typeApi.reducer,
        [health_dataApi.reducerPath]: health_dataApi.reducer,
        [pam_groupApi.reducerPath]: pam_groupApi.reducer,
        [pam_test_answerApi.reducerPath]: pam_test_answerApi.reducer,
        [pam_test_resultApi.reducerPath]: pam_test_resultApi.reducer,
        [pam_testApi.reducerPath]: pam_testApi.reducer,
        [personApi.reducerPath]: personApi.reducer,
        [questionApi.reducerPath]: questionApi.reducer,
        [test_instructionsApi.reducerPath]: test_instructionsApi.reducer,
        [test_weightApi.reducerPath]: test_weightApi.reducer,
        [testApi.reducerPath]: testApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
      .concat(pamsApi.middleware)
      .concat(answerApi.middleware)
      .concat(dimensionApi.middleware)
      .concat(group_typeApi.middleware)
      .concat(health_dataApi.middleware)
      .concat(pam_groupApi.middleware)
      .concat(pam_test_answerApi.middleware)
      .concat(pam_test_resultApi.middleware)
      .concat(pam_testApi.middleware)
      .concat(personApi.middleware)
      .concat(questionApi.middleware)
      .concat(test_instructionsApi.middleware)
      .concat(test_weightApi.middleware)
      .concat(testApi.middleware)
    },
});

setupListeners(store.dispatch);

export {
  store,
  changePersonId,
  changeBirthDate,
  changeDeceasedDate,
  changeGuardianId,
  changeDoctorId,
  changeBelongsToArchdiocese,
  changePamGroupId,
  changePam,
  resetPamValues
}

export { 
  useFetchPamsQuery, 
  useAddPamMutation, 
  useEditPamMutation, 
  useDeletePamMutation 
} from './apis/pamsApi';

export {
  useFetchAnswerQuery,
  useAddAnswerMutation,
  useEditAnswerMutation,
  useDeleteAnswerMutation
} from './apis/answerApi';

export {
  useFetchDimensionQuery,
  useEditDimensionMutation,
  useDeleteDimensionMutation 
} from './apis/dimensionApi';

export {
  useFetchGroup_typeQuery,
  useEditGroup_typeMutation,
  useDeleteGroup_typeMutation
} from './apis/group_typeApi';

export {
  useFetchHealth_dataQuery,
  useEditHealth_dataMutation,
  useDeleteHealth_dataMutation
} from './apis/health_dataApi';

export {
  useFetchPam_groupQuery,
  useEditPam_groupMutation,
  useDeletePam_groupMutation
} from './apis/pam_groupApi';

export {
  useFetchPam_test_answerQuery,
  useEditPam_test_answerMutation,
  useDeletePam_test_answerMutation
} from './apis/pam_test_answerApi';

export {
  useFetchPam_test_resultQuery,
  useEditPam_test_resultMutation,
  useDeletePam_test_resultMutation
} from './apis/pam_test_resultApi';

export {
  useFetchPam_testQuery,
  useEditPam_testMutation,
  useDeletePam_testMutation
} from './apis/pam_testApi';

export {
  useFetchPersonQuery,
  useAddPersonMutation,
  useEditPersonMutation,
  useDeletePersonMutation
} from './apis/personApi';

export {
  useFetchQuestionQuery,
  useAddQuestionMutation,
  useEditQuestionMutation,
  useDeleteQuestionMutation
} from './apis/questionApi';

export {
  useFetchTest_instructionsQuery,
  useEditTest_instructionsMutation,
  useDeleteTest_instructionsMutation
} from './apis/test_instructionsApi';

export {
  useFetchTest_weightQuery,
  useEditTest_weightMutation,
  useDeleteTest_weightMutation
} from './apis/test_weightApi';

export {
  useFetchTestQuery,
  useAddTestMutation,
  useEditTestMutation,
  useDeleteTestMutation
} from './apis/testApi';