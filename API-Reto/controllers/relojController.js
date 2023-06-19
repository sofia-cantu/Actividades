const mysql = require("../database/db");

class MainController {
    
    async getQuestions(req, res) {
        console.log("Get Questions");
        var sql = `call sp_get_questions_reloj()`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
                console.log(error.message);
            } else {
                console.log(data);
                var questions = data[0];
                res.json({
                    questions,
                });
            }
        });
    }

    async getAnswers(req, res) {
        console.log("Get Answers");
        var sql = `call sp_answers_reloj()`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
                console.log(error.message);
            } else {
                console.log(data);
                var answers = data[0];
                res.json({
                    answers,
                });
            }
        });
    }

}

const relojController = new MainController();
module.exports = relojController;