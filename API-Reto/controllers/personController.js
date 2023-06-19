const mysql = require("../database/db");

class MainController {

    async getPerson(req, res) {
        console.log("Get Person");
        console.log(req.params.id);
        if (req.params.id != null) {
            let personID = req.params.id;
            var sql = `call sp_get_person('${personID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    var person = data[0];
                    res.json({
                        person,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async getPersonaAdultoMayor(req, res) {
            var sql = `call sp_get_PersonaAdultoMayor()`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    var persons = data[0];
                    res.json({
                        persons,
                    });
                }
        });
    } 

    async addPerson(req, res) {
        if (
            req.body.first_name != null &&
            req.body.last_name != null &&
            req.body.phone != null &&
            req.body.email != null &&
            req.body.country != null &&
            req.body.state != null &&
            req.body.city != null &&
            req.body.address_1 != null &&
            req.body.address_2 != null &&
            req.body.zipcode != null 
        ) {
            let first_name = req.body.first_name;
            let last_name = req.body.last_name;
            let phone = req.body.phone;
            let email = req.body.email;
            let country = req.body.country;
            let state = req.body.state;
            let city = req.body.city;
            let address_1 = req.body.address_1;
            let address_2 = req.body.address_2;
            let zipcode = req.body.zipcode;
            let gender_id = req.body.gender_id;
            let role_id = req.body.role_id;
            var sql = `call sp_add_person('${first_name}', '${last_name}', ${gender_id}, ${role_id}, '${phone}', '${email}', '${country}', '${state}', '${city}', '${address_1}', '${address_2}', '${zipcode}');`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status : 200,
                        message : "Person uploaded successfully",
                        affectedRows : data.affectedRows
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async updatePerson(req, res) {
        if (
            req.params.id != null &&
            req.body.first_name != null &&
            req.body.last_name != null &&
            req.body.phone != null &&
            req.body.email != null &&
            req.body.country != null &&
            req.body.state != null &&
            req.body.city != null &&
            req.body.address_1 != null &&
            req.body.address_2 != null &&
            req.body.zipcode != null
        ) {
            let personID = req.params.id;
            let first_name = req.body.first_name;
            let last_name = req.body.last_name;
            let phone = req.body.phone;
            let email = req.body.email;
            let country = req.body.country;
            let state = req.body.state;
            let city = req.body.city;
            let address_1 = req.body.address_1;
            let address_2 = req.body.address_2;
            let zipcode = req.body.zipcode;
            let gender_id = req.body.gender_id;
            let role_id = req.body.role_id;
            var sql = `call sp_update_person(${personID}, '${first_name}', '${last_name}', ${gender_id}, ${role_id}, '${phone}', '${email}', '${country}', '${state}', '${city}', '${address_1}', '${address_2}', '${zipcode}');`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status : 200,
                        message : "Person updated successfully",
                        affectedRows : data.affectedRows
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async deletePerson(req, res) {
        console.log(req.params.id);
        if (
            req.params.id != null
        ) {
            let personID = req.params.id;
            var sql = `call sp_delete_person(${personID});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status : 200,
                        message : "Person deleted successfully",
                        affectedRows : data.affectedRows
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

}

const personController = new MainController();
module.exports = personController;