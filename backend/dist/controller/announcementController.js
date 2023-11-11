"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAnnouncement = exports.updateAnnouncement = exports.getAnnouncementById = exports.createAnnouncement = exports.getAllAnnouncements = void 0;
const announcementModel_1 = __importDefault(require("../models/announcementModel"));
// Get all announcements
const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await announcementModel_1.default.find().sort({ createdAt: 'asc' });
        res.status(200).json(announcements);
    }
    catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
};
exports.getAllAnnouncements = getAllAnnouncements;
// Create a new announcement
const createAnnouncement = async (req, res) => {
    try {
        const { title, userName, content, course, createdAt } = req.body;
        const ann = new announcementModel_1.default({
            title,
            userName,
            course,
            content,
            createdAt,
        });
        const savedAnn = await ann.save();
        res.status(201).json(savedAnn);
    }
    catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
};
exports.createAnnouncement = createAnnouncement;
// Get specific announcement by ID
const getAnnouncementById = async (req, res) => {
    try {
        const Announcement = await announcementModel_1.default.findById(req.params.id);
        if (!Announcement) {
            res.status(404).json({ error: 'Announcement not found' });
            throw new Error('Announcement not found');
        }
        res.status(200).json(Announcement);
    }
    catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
};
exports.getAnnouncementById = getAnnouncementById;
// Update an announcement by ID
const updateAnnouncement = async (req, res) => {
    try {
        const updatedAnnouncement = await announcementModel_1.default.findByIdAndUpdate(req.params.id, req.body);
        if (!updatedAnnouncement) {
            res.status(404).json({ error: 'Announcement not found' });
            throw new Error('Announcement not found');
        }
        res.status(200).json(updatedAnnouncement);
    }
    catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
};
exports.updateAnnouncement = updateAnnouncement;
// Delete a Announcement by ID
const deleteAnnouncement = async (req, res) => {
    try {
        const deletedAnnouncement = await announcementModel_1.default.findByIdAndRemove(req.params.id);
        if (!deletedAnnouncement) {
            res.status(404).json({ error: 'Announcement not found' });
            throw new Error('Announcement not found');
        }
        res.status(204).end();
    }
    catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
};
exports.deleteAnnouncement = deleteAnnouncement;
