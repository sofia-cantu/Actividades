const mysql = require("../database/db");

class MainController {

    async getQuestion(req, res) {
        console.log("Get Question");
        console.log(req.params.id);
        if (req.params.id != null) {
            let questionID = req.params.id;
            var sql = `call sp_get_question('${questionID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    var question = data[0];
                    res.json({
                        question,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async addQuestion(req, res) {
        if(
            req.body.question != null &&
            req.body.sub_question != null 
        ) {
            let question = req.body.question;
            let sub_question = req.body.sub_question;
            let test_id = req.body.test_id;
            var sql = `call sp_add_question(${test_id}, '${question}', '${sub_question}');`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status : 200,
                        message: "Question uploaded successfully!",
                        affectedRows: data.affectedRows
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async updateQuestion(req, res) {
        if (
            req.params.id != null &&
            req.body.question != null &&
            req.body.sub_question != null
        ) {
            let questionID = req.params.id;
            let question = req.body.question;
            let sub_question = req.body.sub_question;
            let test_id = req.body.test_id;
            var sql = `call sp_update_question(${questionID}, ${test_id}, '${question}', '${sub_question}');`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status : 200,
                        message: "Question updated successfully!",
                        affectedRows: data.affectedRows
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async deleteQuestion(req, res) {
        console.log(req.params.id);
        if (
            req.params.id != null
        ) {
            let questionID = req.params.id;
            var sql = `call sp_delete_question(${questionID});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status : 200,
                        message: "Question deleted successfully!",
                        affectedRows: data.affectedRows
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

}

const questionController = new MainController();
module.exports = questionController;