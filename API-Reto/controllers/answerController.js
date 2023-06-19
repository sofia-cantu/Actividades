const mysql = require("../database/db");

class MainController {

    async getAnswer(req, res) {
        console.log("Get Answer");
        console.log(req.params.id);
        if (req.params.id != null) {
            let answerID = req.params.id;
            var sql = `call sp_get_answer('${answerID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    var answer = data[0];
                    res.json({
                        answer,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async addAnswer(req, res) {
        if (
            req.body.answer != null &&
            req.body.weight != null 
        ) {
            let answer = req.body.answer;
            let weight = req.body.weight;
            let question_id = req.body.question_id;
            var sql = `call sp_add_answer(${question_id}, '${answer}', ${weight});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status : 200,
                        message: "Answer uploaded successfully!",
                        affectedRows: data.affectedRows
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async updateAnswer(req, res) {
        if (
            req.params.id != null &&
            req.body.answer != null &&
            req.body.weight != null
        ) {
            let answerID = req.params.id;
            let answer = req.body.answer;
            let weight = req.body.weight;
            let question_id = req.body.question_id;
            var sql = `call sp_update_answer(${answerID}, ${question_id}, '${answer}', ${weight});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status : 200,
                        message: "Answer updated successfully!",
                        affectedRows: data.affectedRows
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async deleteAnswer(req, res) {
        console.log(req.params.id);
        if (
            req.params.id != null
        ) {
            let answerID = req.params.id;
            var sql = `call sp_delete_answer(${answerID});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status : 200,
                        message: "Answer deleted successfully!",
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

const answerController = new MainController();
module.exports = answerController;