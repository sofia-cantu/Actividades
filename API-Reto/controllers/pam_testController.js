const mysql = require("../database/db");

class MainController {

    async getPam_test(req, res) {
        console.log("Get Pam_test");
        console.log(req.params.id);
        if (req.params.id != null) {
            let pam_testID = req.params.id;
            var sql = `call sp_get_pam_test('${pam_testID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    var pam_test = data[0];
                    res.json({
                        pam_test,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async updatePam_test(req, res) {
        if (
            req.params.id != null &&
            req.body.test_date != null &&
            req.body.is_completed != null 
        ) {
            let pam_testID = req.params.id;
            let test_date = req.body.test_date;
            let is_completed = req.body.is_completed;
            let pam_id = req.body.pam_id;
            var sql = `call sp_update_pam_test(${pam_testID}, ${pam_id}, '${test_date}', ${is_completed});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Pam_test updated successfully",
                        affectedRows: data.affectedRows,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async deletePam_test(req, res) {
        console.log(req.params.id);
        if (
            req.params.id != null
        ) {
            let pam_testID = req.params.id;
            var sql = `call sp_delete_pam_test(${pam_testID});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Pam_test deleted successfully",
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

const pam_testController = new MainController();
module.exports = pam_testController;