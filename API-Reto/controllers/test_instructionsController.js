const mysql = require("../database/db");

class MainController {

    async getTest_instructions(req, res) {
        console.log("Get Test_instructions");
        console.log(req.params.id);
        if (req.params.id != null) {
            let test_instructionsID = req.params.id;
            var sql = `call sp_get_test_instructions('${test_instructionsID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    var test_instructions = data[0];
                    res.json({
                        test_instructions,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async updateTest_instructions(req, res) {
        if (
            req.params.id != null &&
            req.body.test_instructions_order != null &&
            req.body.test_instructions != null
        ) {
            let test_instructionsID = req.params.id;
            let test_instructions_order = req.body.test_instructions_order;
            let test_instructions = req.body.test_instructions;
            let test_id = req.body.test_id;
            var sql = `call sp_update_test_instructions(${test_instructionsID}, ${test_id}, ${test_instructions_order}, '${test_instructions}');`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Test_instructions updated successfully",
                        affectedRows: data.affectedRows,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async deleteTest_instructions(req, res) {
        console.log(req.params.id);
        if (
            req.params.id != null
        ) {
            let test_instructionsID = req.params.id;
            var sql = `call sp_delete_test_instructions(${test_instructionsID});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Test_instructions deleted successfully",
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

const test_instructionsController = new MainController();
module.exports = test_instructionsController;