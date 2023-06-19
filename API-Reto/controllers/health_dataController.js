const mysql = require("../database/db");

class MainController {

    async getHealth_data(req, res) {
        console.log("Get Health_data");
        console.log(req.params.id);
        if (req.params.id != null) {
            let health_dataID = req.params.id;
            var sql = `call sp_get_health_data('${health_dataID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    var health_data = data[0];
                    res.json({
                        health_data,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async updateHealth_data(req, res) {
        if (
            req.params.id != null &&
            req.body.weight != null &&
            req.body.height != null &&
            req.body.blood_type != null 
        ) {
            let health_dataID = req.params.id;
            let weight = req.body.weight;
            let height = req.body.height;
            let blood_type = req.body.blood_type;
            let pam_id = req.body.pam_id;
            var sql = `call sp_update_health_data(${health_dataID},  ${pam_id}, ${weight}, ${height}, '${blood_type}');`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Health_data updated successfully",
                        affectedRows: data.affectedRows,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async deleteHealth_data(req, res) {
        console.log(req.params.id);
        if (
            req.params.id != null
        ) {
            let health_dataID = req.params.id;
            var sql = `call sp_delete_health_data(${health_dataID});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Health_data deleted successfully",
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

const health_dataController = new MainController();
module.exports = health_dataController;