"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("colors");
async function connectDB() {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URL);
        // console.log(conn)
        console.log(`MongoDB Connected`.cyan.underline);
    }
    catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}
exports.default = connectDB;
