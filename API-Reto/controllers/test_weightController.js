const mysql = require("../database/db");

class MainController {

    async getTest_weight(req, res) {
        console.log("Get Test_weight");
        console.log(req.params.id);
        if (req.params.id != null) {
            let test_weightID = req.params.id;
            var sql = `call sp_get_test_weight('${test_weightID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    var test_weight = data[0];
                    res.json({
                        test_weight,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async updateTest_weight(req, res) {
        if (
            req.params.id != null && 
            req.body.min_weight != null &&
            req.body.max_weight != null &&
            req.body.description != null &&
            req.body.color != null
        ) {
            let test_weightID = req.params.id;
            let min_weight = req.body.min_weight;
            let max_weight = req.body.max_weight;
            let description = req.body.description;
            let color = req.body.color;
            let test_id = req.body.test_id;
            let gender_id = req.body.gender_id;
            var sql = `call sp_update_test_weight(${test_weightID}, ${test_id}, ${min_weight}, ${max_weight}, '${description}', '${color}', ${gender_id});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status : 200,
                        message: "Test_weight updated successfully!",
                        affectedRows: data.affectedRows
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async deleteTest_weight(req, res) {
        console.log(req.params.id);
        if (
            req.params.id != null
        ) {
            let test_weightID = req.params.id;
            var sql = `call sp_delete_test_weight(${test_weightID})`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Test_weight deleted successfully",
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

const test_weightController = new MainController();
module.exports = test_weightController;