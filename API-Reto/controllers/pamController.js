const mysql = require("../database/db");

class MainController {

    async getPam(req, res) {
        console.log("Get Pam");
        console.log(req.params.id);
        if (req.params.id != null) {
            let pamID = req.params.id;
            var sql = `call sp_get_pam('${pamID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    var pam = data[0];
                    res.json({
                        pam,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async getPamTests(req, res) {
        console.log("Get Pam Tests");
        console.log(req.params.id);
        if (req.params.id != null) {
            let pamID = req.params.id;
            var sql = `call sp_get_pam_tests('${pamID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    var pam_tests = data[0];
                    res.json({
                        pam_tests,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async addPam(req, res) {
        if (
            req.body.birth_date != null &&
            req.body.deceased_date != null &&
            req.body.belongs_to_archdiocese != null 
        ) {
            let birth_date = req.body.birth_date;
            let deceased_date = req.body.deceased_date;
            let belongs_to_archdiocese = req.body.belongs_to_archdiocese;
            let person_id = req.body.person_id;
            let guardian_id = req.body.guardian_id;
            let doctor_id = req.body.doctor_id;
            let pam_group_id = req.body.pam_group_id;
            var sql = `call sp_add_pam(${person_id}, '${birth_date}', '${deceased_date}', ${guardian_id}, ${doctor_id}, ${belongs_to_archdiocese}, ${pam_group_id});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Pam uploaded successfully",
                        affectedRows : data.affectedRows
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async updatePam(req, res) {
        if (
            req.params.id != null &&
            req.body.birth_date != null &&
            req.body.deceased_date != null &&
            req.body.belongs_to_archdiocese != null 
        ) {
            let pamID = req.params.id;
            let birth_date = req.body.birth_date;
            let deceased_date = req.body.deceased_date;
            let belongs_to_archdiocese = req.body.belongs_to_archdiocese;
            let person_id = req.body.person_id;
            let guardian_id = req.body.guardian_id;
            let doctor_id = req.body.doctor_id;
            let pam_group_id = req.body.pam_group_id;
            var sql = `call sp_update_pam(${pamID}, ${person_id}, '${birth_date}', '${deceased_date}', ${guardian_id}, ${doctor_id}, ${belongs_to_archdiocese}, ${pam_group_id});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Pam updated successfully",
                        affectedRows: data.affectedRows,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async deletePam(req, res) {
        console.log(req.params.id);
        if (
            req.params.id != null
        ) {
            let pamID = req.params.id;
            var sql = `call sp_delete_pam(${pamID});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Pam deleted successfully",
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

const pamController = new MainController();
module.exports = pamController;