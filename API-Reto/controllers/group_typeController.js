const mysql = require("../database/db");

class MainController {

    async getGroup_type(req, res) {
        console.log("Get Group_type");
        console.log(req.params.id);
        if (req.params.id != null) {
            let group_typeID = req.params.id;
            var sql = `call sp_get_group_type('${group_typeID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    var group_type = data[0];
                    res.json({
                        group_type,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async updateGroup_type(req, res) {
        if (
            req.params.id != null &&
            req.body.group_type != null
        ) {
            let group_typeID = req.params.id;
            let group_type = req.body.group_type;
            let parent_group_type_id = req.body.parent_group_type_id;
            var sql = `call sp_update_group_type(${group_typeID}, '${group_type}', ${parent_group_type_id});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Group_type updated successfully",
                        affectedRows: data.affectedRows,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async deleteGroup_type(req, res) {
        console.log(req.params.id);
        if (
            req.params.id != null
        ) {
            let group_typeID = req.params.id;
            var sql = `call sp_delete_group_type(${group_typeID});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Group_type deleted successfully",
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

const group_typeController = new MainController();
module.exports = group_typeController;