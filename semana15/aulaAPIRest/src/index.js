"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var data_1 = require("./data");
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(cors_1["default"]());
//ENDPOINT DE BUSCAR TODOS OS USUÁRIOS COM O MÉTODO HTTP GET
app.get("/users", function (req, res) {
    var codeError = 404;
    try {
        res.send(data_1.users);
    }
    catch (error) {
        res.status(codeError).send('Lista de usuários não encontrada');
    }
});
//ENDPOINT DE BUSCAR USUÁRIO PELO NOME (exercício 3)
//a)Query params.
app.get("/users/search", function (req, res) {
    var codeError = 400;
    try {
        var name_1 = req.query.name;
        var user = data_1.users.find(function (user) { return user.name === name_1; });
        //b) Lógica para retornar mensagem de erro caso nenhum usuário tenha sido encontrado.
        if (!user) {
            codeError = 404;
            throw new Error('Usuário não encontrado');
        }
        res.status(200).send(user);
    }
    catch (error) {
        res.status(codeError).send({ message: error.message });
    }
});
//ENDPOINT PARA BUSCAR USUÁRIO PELO ID COM PARAMS
app.get("/users/search/:id", function (req, res) {
    var codeError = 400;
    try {
        var id_1 = Number(req.params.id);
        if (isNaN(id_1)) {
            codeError = 422; //unprocessable entity
            throw new Error("Valor inválido para a ID. Por favor, mande um número.");
        }
        var user = data_1.users.find(function (user) {
            return user.id === id_1;
        });
        if (!user) {
            codeError = 404;
            throw new Error("Usuário não encontrado");
        }
        res.status(200).send(user);
    }
    catch (error) {
        res.status(codeError).send({ message: error.message });
    }
});
//ENDPOINT PARA CRIAR UM NOVO USUÁRIO (exercício 4)
app.post("/users", function (req, res) {
    var codeError = 400;
    try {
        // const id = req.body.id
        // const name = req.body.name
        var _a = req.body, id = _a.id, name_2 = _a.name, email = _a.email, type = _a.type, age = _a.age;
        if (!id || !name_2 || !email || !type || !age) {
            codeError = 422;
            throw new Error("Por favor, verifique os campos");
        }
        var newUser = {
            id: id,
            name: name_2,
            email: email,
            type: type,
            age: age
        };
        data_1.users.push(newUser);
        res.status(201).send("Usuário criado com sucesso!");
    }
    catch (error) {
        res.status(codeError).send({ message: error.message });
    }
});
//ENDPOINT PARA ATUALIZAR UM USUÁRIO (exercício 4a)
app.put("/users", function (req, res) {
    var codeError = 400;
    try {
        var _a = req.body, id = _a.id, name_3 = _a.name, email = _a.email, type = _a.type, age = _a.age;
        if (!id || !name_3 || !email || !type || !age) {
            codeError = 422;
            throw new Error("Por favor, verifique os campos");
        }
        var newUser = {
            id: id,
            name: name_3,
            email: email,
            type: type,
            age: age
        };
        data_1.users.push(newUser);
        res.status(201).send("Usuário atualizado com sucesso!");
    }
    catch (error) {
        res.status(codeError).send({ message: error.message });
    }
});
// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", function (req, res) {
    res.status(200).send("pong!");
});
app.listen(3003, function () {
    console.log('Server is running at port 3003');
});
