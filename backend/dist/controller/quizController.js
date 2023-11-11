"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuiz = exports.updateQuiz = exports.getQuizById = exports.getAllQuizzes = exports.createQuiz = void 0;
const quizModel_1 = __importDefault(require("../models/quizModel"));
// Create a new quiz
const createQuiz = async (req, res) => {
    try {
        const { title, course, topic, dueTo, type, questions } = req.body;
        const newQuiz = new quizModel_1.default({
            title,
            type,
            course,
            topic,
            dueTo,
            questions,
        });
        const savedQuiz = await newQuiz.save();
        res.status(201).json(savedQuiz);
    }
    catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
};
exports.createQuiz = createQuiz;
// Get all quizzes
const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await quizModel_1.default.find();
        res.status(200).json(quizzes);
    }
    catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
};
exports.getAllQuizzes = getAllQuizzes;
// Get a specific quiz by ID
const getQuizById = async (req, res) => {
    try {
        const quiz = await quizModel_1.default.findById(req.params.id);
        if (!quiz) {
            res.status(404).json({ error: 'Quiz not found' });
            throw new Error('Quiz not found');
        }
        res.status(200).json(quiz);
    }
    catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
};
exports.getQuizById = getQuizById;
// Update a quiz by ID
const updateQuiz = async (req, res) => {
    try {
        const updatedQuiz = await quizModel_1.default.findByIdAndUpdate(req.params.id, req.body);
        if (!updatedQuiz) {
            res.status(404).json({ error: 'Quiz not found' });
            throw new Error('Quiz not found');
        }
        res.status(200).json(updatedQuiz);
    }
    catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
};
exports.updateQuiz = updateQuiz;
// Delete a quiz by ID
const deleteQuiz = async (req, res) => {
    try {
        const deletedQuiz = await quizModel_1.default.findByIdAndRemove(req.params.id);
        if (!deletedQuiz) {
            res.status(404).json({ error: 'Quiz not found' });
            throw new Error('Quiz not found');
        }
        res.status(204).end();
    }
    catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
};
exports.deleteQuiz = deleteQuiz;
