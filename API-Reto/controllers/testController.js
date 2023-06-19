const mysql = require("../database/db");

class MainController {

    async getTest(req, res) {
        console.log("Get Test");
        console.log(req.params.id);
        if (req.params.id != null) {
            let testID = req.params.id;
            var sql = `call sp_get_test('${testID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    var test = data[0];
                    res.json({
                        test,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async addTest(req, res) {
        if (
            req.body.test_name != null &&
            req.body.self_test != null 
        ) {
            let test_name = req.body.test_name;
            let self_test = req.body.self_test;
            let dimension_id = req.body.dimension_id;
            var sql = `call sp_add_test(${dimension_id}, '${test_name}', '${self_test}');`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status : 200,
                        message: "Test uploaded successfully!",
                        affectedRows: data.affectedRows
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async updateTest(req, res) {
        if (
            req.params.id != null &&
            req.body.test_name != null &&
            req.body.self_test != null
        ) {
            let testID = req.params.id;
            let test_name = req.body.test_name;
            let self_test = req.body.self_test;
            let dimension_id = req.body.dimension_id;
            var sql = `call sp_update_test(${testID}, ${dimension_id}, '${test_name}', ${self_test});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status : 200,
                        message: "Test updated successfully!",
                        affectedRows: data.affectedRows
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async deleteTest(req, res) {
        console.log(req.params.id);
        if (
            req.params.id != null
        ) {
            let testID = req.params.id;
            var sql = `call sp_delete_test(${testID});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status : 200,
                        message: "Test deleted successfully!",
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

const testController = new MainController();
module.exports = testController;