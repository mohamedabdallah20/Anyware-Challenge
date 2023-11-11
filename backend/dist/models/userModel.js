"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const quizModel_1 = require("./quizModel");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    quizzes: [quizModel_1.quizSchema], // Embed quiz documents within the user
});
const UserModel = (0, mongoose_1.model)('User', userSchema);
exports.default = UserModel;
