const mysql = require("../database/db");

class MainController {

    async getPam_test_result(req, res) {
        console.log("Get Pam_test_result");
        console.log(req.params.id);
        if (req.params.id != null) {
            let pam_test_resultID = req.params.id;
            var sql = `call sp_get_pam_test_result('${pam_test_resultID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    var pam_test_result = data[0];
                    res.json({
                        pam_test_result,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async updatePam_test_result(req, res) {
        if (
            req.params.id != null &&
            req.body.test_result != null &&
            req.body.recommendation != null 
        ) {
            let pam_test_resultID = req.params.id;
            let test_result = req.body.test_result;
            let recommendation = req.body.recommendation;
            let pam_test_id = req.body.pam_test_id;
            let test_id = req.body.test_id;
            var sql = `call sp_update_pam_test_result(${pam_test_resultID}, ${pam_test_id}, ${test_id}, ${test_result}, '${recommendation}');`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Pam_test_result updated successfully",
                        affectedRows: data.affectedRows,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async deletePam_test_result(req, res) {
        console.log(req.params.id);
        if (
            req.params.id != null
        ) {
            let pam_test_resultID = req.params.id;
            var sql = `call sp_delete_pam_test_result(${pam_test_resultID});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Pam_test_result deleted successfully",
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

const pam_test_resultController = new MainController();
module.exports = pam_test_resultController;