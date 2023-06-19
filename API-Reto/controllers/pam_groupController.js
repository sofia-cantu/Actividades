const mysql = require("../database/db");

class MainController {

    async getPam_group(req, res) {
        console.log("Get Pam_group");
        console.log(req.params.id);
        if (req.params.id != null) {
            let pam_groupID = req.params.id;
            var sql = `call sp_get_pam_group('${pam_groupID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    var pam_group = data[0];
                    res.json({
                        pam_group,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async updatePam_group(req, res) {
        if (
            req.params.id != null &&
            req.body.group_name != null 
        ) {
            let pam_groupID = req.params.id;
            let group_name = req.body.group_name;
            let group_type_id = req.body.group_type_id;
            let group_parent_id = req.body.group_parent_id;
            var sql = `call sp_update_pam_group(${pam_groupID}, ${group_type_id}, '${group_name}', ${group_parent_id});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Pam_group updated successfully",
                        affectedRows: data.affectedRows,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async deletePam_group(req, res) {
        console.log(req.params.id);
        if (
            req.params.id != null
        ) {
            let pam_groupID = req.params.id;
            var sql = `call sp_delete_pam_group(${pam_groupID});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Pam_group deleted successfully",
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

const pam_groupController = new MainController();
module.exports = pam_groupController;