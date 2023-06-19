const express = require('express');
const personController = require('../controllers/personController');
const answerController = require('../controllers/answerController');
const questionController = require('../controllers/questionController');
const testController = require('../controllers/testController');
const pamController = require('../controllers/pamController');
const dimensionController = require('../controllers/dimensionController');
const group_typeController = require('../controllers/group_typeController');
const health_dataController = require('../controllers/health_dataController');
const pam_groupController = require('../controllers/pam_groupController');
const pam_testController = require('../controllers/pam_testController');
const pam_test_answerController = require('../controllers/pam_test_answerController');
const pam_test_resultController = require('../controllers/pam_test_resultController');
const test_instructionsController = require('../controllers/test_instructionsController');
const test_weightController = require('../controllers/test_weightController');
const mmseController = require('../controllers/mmseController');
const relojController = require('../controllers/relojController');
const gdsController = require('../controllers/gdsController');
const lbController = require('../controllers/lbController');
const katzController = require('../controllers/katzController');
const sarcfController = require('../controllers/sarcfController');
const sspbController = require('../controllers/sspbController');
const circupantController = require('../controllers/circupantController');
const upandgoController = require('../controllers/upandgoController');
const frailController = require('../controllers/frailController');
const fuerzaController = require('../controllers/fuerzaController');
const gijonController = require('../controllers/gijonController');
const router = express.Router();

// Person routes
router.post('/api/addPerson', personController.addPerson);
router.get('/api/getPerson/:id', personController.getPerson);
router.get('/api/getPan', personController.getPersonaAdultoMayor);
router.put('/api/updatePerson/:id', personController.updatePerson);
router.delete('/api/deletePerson/:id', personController.deletePerson);

// Answer routes
router.post('/api/addAnswer', answerController.addAnswer);
router.get('/api/getAnswer/:id', answerController.getAnswer);
router.put('/api/updateAnswer/:id', answerController.updateAnswer);
router.delete('/api/deleteAnswer/:id', answerController.deleteAnswer);

// Question routes
router.post('/api/addQuestion', questionController.addQuestion);
router.get('/api/getQuestion/:id', questionController.getQuestion);
router.put('/api/updateQuestion/:id', questionController.updateQuestion);
router.delete('/api/deleteQuestion/:id', questionController.deleteQuestion);

// Test routes
router.post('/api/addTest', testController.addTest);
router.get('/api/getTest/:id', testController.getTest);
router.put('/api/updateTest/:id', testController.updateTest);
router.delete('/api/deleteTest/:id', testController.deleteTest);

// PAM routes
router.post('/api/addPam', pamController.addPam); 
router.get('/api/getPam/:id', pamController.getPam);
router.get('/api/getPamTests/:id', pamController.getPamTests);
router.put('/api/updatePam/:id', pamController.updatePam);
router.delete('/api/deletePam/:id', pamController.deletePam);

// Dimension routes
router.get('/api/getDimension/:id', dimensionController.getDimension);
router.put('/api/updateDimension/:id', dimensionController.updateDimension);
router.delete('/api/deleteDimension/:id', dimensionController.deleteDimension);

// Group_type routes
router.get('/api/getGroup_type/:id', group_typeController.getGroup_type);
router.put('/api/updateGroup_type/:id', group_typeController.updateGroup_type);
router.delete('/api/deleteGroup_type/:id', group_typeController.deleteGroup_type);

// Health_data routes
router.get('/api/getHealth_data/:id', health_dataController.getHealth_data);
router.put('/api/updateHealth_data/:id', health_dataController.updateHealth_data);
router.delete('/api/deleteHealth_data/:id', health_dataController.deleteHealth_data);

// Pam_group routes
router.get('/api/getPam_group/:id', pam_groupController.getPam_group);
router.put('/api/updatePam_group/:id', pam_groupController.updatePam_group);
router.delete('/api/deletePam_group/:id', pam_groupController.deletePam_group);

// Pam_test routes
router.get('/api/getPam_test/:id', pam_testController.getPam_test);
router.put('/api/updatePam_test/:id', pam_testController.updatePam_test);
router.delete('/api/deletePam_test/:id', pam_testController.deletePam_test);

// Pam_test_answer routes
router.get('/api/getPam_test_answer/:id', pam_test_answerController.getPam_test_answer);
router.put('/api/updatePam_test_answer/:id', pam_test_answerController.updatePam_test_answer);
router.delete('/api/deletePam_test_answer/:id', pam_test_answerController.deletePam_test_answer);

// Pam_test_result routes
router.get('/api/getPam_test_result/:id', pam_test_resultController.getPam_test_result);
router.put('/api/updatePam_test_result/:id', pam_test_resultController.updatePam_test_result);
router.delete('/api/deletePam_test_result/:id', pam_test_resultController.deletePam_test_result);

// Test_instructions routes
router.get('/api/getTest_instructions/:id', test_instructionsController.getTest_instructions);
router.put('/api/updateTest_instructions/:id', test_instructionsController.updateTest_instructions);
router.delete('/api/deleteTest_instructions/:id', test_instructionsController.deleteTest_instructions);

// Test_weight routes
router.get('/api/getTest_weight/:id', test_weightController.getTest_weight);
router.put('/api/updateTest_weight/:id', test_weightController.updateTest_weight);
router.delete('/api/deleteTest_weight/:id', test_weightController.deleteTest_weight);

// Mmse routes
router.get('/api/getQuestionsMMSE', mmseController.getQuestions);
router.get('/api/getAnswersMMSE', mmseController.getAnswers);

// Reloj routes
router.get('/api/getQuestionsReloj', relojController.getQuestions);
router.get('/api/getAnswersReloj', relojController.getAnswers);

// Gds routes
router.get('/api/getQuestionsGDS', gdsController.getQuestions);
router.get('/api/getAnswersGDS', gdsController.getAnswers);

// Lb routes
router.get('/api/getQuestionsLB', lbController.getQuestions);
router.get('/api/getAnswersLB', lbController.getAnswers);

// Katz routes
router.get('/api/getQuestionsKatz', katzController.getQuestions);
router.get('/api/getAnswersKatz', katzController.getAnswers);

// Sarcf routes
router.get('/api/getQuestionsSARCF', sarcfController.getQuestions);
router.get('/api/getAnswersSARCF', sarcfController.getAnswers);
//router.post('/api/postAnswersSARCF', sarcfController.postAnswers);

// Sspb routes
router.get('/api/getQuestionsSSPB', sspbController.getQuestions);
router.get('/api/getAnswersSSPB', sspbController.getAnswers);

// Circupant routes
router.get('/api/getQuestionsCircupant', circupantController.getQuestions);
router.get('/api/getAnswersCircupant', circupantController.getAnswers);

// Upandgo routes
router.get('/api/getQuestionsUpandgo', upandgoController.getQuestions);
router.get('/api/getAnswersUpandgo', upandgoController.getAnswers);

// Frail routes
router.get('/api/getQuestionsFrail', frailController.getQuestions);
router.get('/api/getAnswersFrail', frailController.getAnswers);

// Fuerza routes
router.get('/api/getQuestionsFuerza', fuerzaController.getQuestions);
router.get('/api/getAnswersFuerza', fuerzaController.getAnswers);

// Gijon routes
router.get('/api/getQuestionsGijon', gijonController.getQuestions);
router.get('/api/getAnswersGijon', gijonController.getAnswers);



module.exports = router;