"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizSchema = void 0;
const mongoose_1 = require("mongoose");
const quizSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    dueTo: {
        type: Date,
        required: true,
    },
    questions: [
        {
            question: {
                type: String,
                required: true,
            },
            options: [String],
            correctAnswer: {
                type: String,
                required: true,
            },
        },
    ],
});
exports.quizSchema = quizSchema;
const QuizModel = (0, mongoose_1.model)('Quiz', quizSchema);
exports.default = QuizModel;
