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
import { circupantApi } from "./apis/tests/circupantApi";
import { frailApi } from "./apis/tests/frailApi";
import { fuerzaApi } from "./apis/tests/fuerzaApi";
import { gdsApi } from "./apis/tests/gdsApi";
import { gijonApi } from "./apis/tests/gijonApi";
import { katzApi } from "./apis/tests/katzApi";
import { lbApi } from "./apis/tests/lbApi";
import { mmseApi } from "./apis/tests/mmseApi";
import { relojApi } from "./apis/tests/relojApi";
import { sarcfApi } from "./apis/tests/sarcfApi";
import { sspbApi } from "./apis/tests/sspbApi";
import { upandgoApi } from "./apis/tests/upandgoApi";
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
  resetPamValues,
} from './slices/pamSlice';

import {
  personReducer,
  changeFirstName,
  changeLastName,
  changeGenderId,
  changeRoleId,
  changePhone,
  changeEmail,
  changeCountry,
  changeState,
  changeCity,
  changeAddress1,
  changeAddress2,
  changeZipCode,
  changePerson,
  resetPersonValues,
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
        [circupantApi.reducerPath]: circupantApi.reducer,
        [frailApi.reducerPath]: frailApi.reducer,
        [fuerzaApi.reducerPath]: fuerzaApi.reducer,
        [gdsApi.reducerPath]: gdsApi.reducer,
        [gijonApi.reducerPath]: gijonApi.reducer,
        [katzApi.reducerPath]: katzApi.reducer,
        [lbApi.reducerPath]: lbApi.reducer,
        [mmseApi.reducerPath]: mmseApi.reducer,
        [relojApi.reducerPath]: relojApi.reducer,
        [sarcfApi.reducerPath]: sarcfApi.reducer,
        [sspbApi.reducerPath]: sspbApi.reducer,
        [upandgoApi.reducerPath]: upandgoApi.reducer,
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
      .concat(circupantApi.middleware)
      .concat(frailApi.middleware)
      .concat(fuerzaApi.middleware)
      .concat(gdsApi.middleware)
      .concat(gijonApi.middleware)
      .concat(katzApi.middleware)
      .concat(lbApi.middleware)
      .concat(mmseApi.middleware)
      .concat(relojApi.middleware)
      .concat(sarcfApi.middleware)
      .concat(sspbApi.middleware)
      .concat(upandgoApi.middleware)
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
  changeFirstName,
  changeLastName,
  changeGenderId,
  changeRoleId,
  changePhone,
  changeEmail,
  changeCountry,
  changeState,
  changeCity,
  changeAddress1,
  changeAddress2,
  changeZipCode,
  changePerson,
  resetPersonValues
}

export { 
  useFetchPamsQuery, 
  useAddPamMutation, 
  useFetchPamTestsQuery,
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
  useFetchPanQuery,
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

export {
  useFetchCircupantQuery,
  useFetchAnswersCircupantQuery,
} from './apis/tests/circupantApi';

export {
  useFetchFrailQuery,
  useFetchAnswersFrailQuery,
} from './apis/tests/frailApi';

export {
  useFetchFuerzaQuery,
  useFetchAnswersFuerzaQuery,
} from './apis/tests/fuerzaApi';

export {
  useFetchGdsQuery,
  useFetchAnswersGdsQuery,
} from './apis/tests/gdsApi';

export {
  useFetchGijonQuery,
  useFetchAnswersGijonQuery,
} from './apis/tests/gijonApi';

export {
  useFetchKatzQuery,
  useFetchAnswersKatzQuery,
} from './apis/tests/katzApi';

export {
  useFetchLbQuery,
  useFetchAnswersLbQuery,
} from './apis/tests/lbApi';

export {
  useFetchMmseQuery,
  useFetchAnswersMmseQuery,
} from './apis/tests/mmseApi';

export {
  useFetchRelojQuery,
  useFetchAnswersRelojQuery,
} from './apis/tests/relojApi';

export {
  useFetchSarcfQuery,
  useFetchAnswersSarcfQuery,
} from './apis/tests/sarcfApi';

export {
  useFetchSspbQuery,
  useFetchAnswersSspbQuery,
} from './apis/tests/sspbApi';

export {
  useFetchUpandgoQuery,
  useFetchAnswersUpandgoQuery,
} from './apis/tests/upandgoApi';