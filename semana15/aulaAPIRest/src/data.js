"use strict";
exports.__esModule = true;
exports.users = void 0;
var types_1 = require("./types");
exports.users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: types_1.userType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: types_1.userType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: types_1.userType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: types_1.userType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: types_1.userType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: types_1.userType.ADMIN,
        age: 60
    }
];
