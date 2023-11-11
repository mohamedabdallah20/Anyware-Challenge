"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const quizController_1 = require("../controller/quizController");
const quizRouter = express_1.default.Router();
// Create a new quiz
quizRouter.post('/', (0, express_async_handler_1.default)(quizController_1.createQuiz));
// Get all quizzes
quizRouter.get('/', (0, express_async_handler_1.default)(quizController_1.getAllQuizzes));
// Get a specific quiz by ID
quizRouter.get('/:id', (0, express_async_handler_1.default)(quizController_1.getQuizById));
// Update a quiz by ID
quizRouter.put('/:id', (0, express_async_handler_1.default)(quizController_1.updateQuiz));
// Delete a quiz by ID
quizRouter.delete('/:id', (0, express_async_handler_1.default)(quizController_1.deleteQuiz));
exports.default = quizRouter;
