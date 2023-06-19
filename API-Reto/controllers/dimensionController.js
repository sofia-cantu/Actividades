const mysql = require("../database/db");

class MainController {

    async getDimension(req, res) {
        console.log("Get Dimension");
        console.log(req.params.id);
        if (req.params.id != null) {
            let dimensionID = req.params.id;
            var sql = `call sp_get_dimension('${dimensionID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    var dimension = data[0];
                    res.json({
                        dimension,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async updateDimension(req, res) {
        if (
            req.params.id != null &&
            req.body.dimension != null 
        ) {
            let dimensionID = req.params.id;
            let dimension = req.body.dimension;
            var sql = `call sp_update_dimension(${dimensionID}, '${dimension}');`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Dimension updated successfully",
                        affectedRows: data.affectedRows,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async deleteDimension(req, res) {
        console.log(req.params.id);
        if (
            req.params.id != null
        ) {
            let dimensionID = req.params.id;
            var sql = `call sp_delete_dimension(${dimensionID});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Dimension deleted successfully",
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

const dimensionController = new MainController();
module.exports = dimensionController;