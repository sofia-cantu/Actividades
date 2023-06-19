const mysql = require("../database/db");

class MainController {

    async getPam_test_answer(req, res) {
        console.log("Get Pam_test_answer");
        console.log(req.params.id);
        if (req.params.id != null) {
            let pam_test_answerID = req.params.id;
            var sql = `call sp_get_pam_test_answer('${pam_test_answerID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    var pam_test_answer = data[0];
                    res.json({
                        pam_test_answer,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async updatePam_test_answer(req, res) {
        if (
            req.params.id != null 
        ) {
            let pam_test_answerID = req.params.id;
            let pam_test_result_id = req.body.pam_test_result_id;
            let answer_id = req.body.answer_id;
            var sql = `call sp_update_pam_test_answer(${pam_test_answerID}, ${pam_test_result_id}, ${answer_id});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Pam_test_answer updated successfully",
                        affectedRows: data.affectedRows,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async deletePam_test_answer(req, res) {
        console.log(req.params.id);
        if (
            req.params.id != null
        ) {
            let pam_test_answerID = req.params.id;
            var sql = `call sp_delete_pam_test_answer(${pam_test_answerID});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Pam_test_answer deleted successfully",
                        affectedRows: data.affectedRows,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

}

const pam_test_answerController = new MainController();
module.exports = pam_test_answerController;