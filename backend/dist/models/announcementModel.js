"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define an announcement schema
const announcementSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
// Create a model for Announcement
const AnnouncementModel = (0, mongoose_1.model)('Announcement', announcementSchema);
exports.default = AnnouncementModel;
