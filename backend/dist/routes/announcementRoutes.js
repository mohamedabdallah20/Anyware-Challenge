"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const announcementController_1 = require("../controller/announcementController");
const announcementRouter = express_1.default.Router();
// Get all announcements
announcementRouter.get('/', (0, express_async_handler_1.default)(announcementController_1.getAllAnnouncements));
// Get a specific announcement by ID
announcementRouter.get('/:id', (0, express_async_handler_1.default)(announcementController_1.getAnnouncementById));
// Create a new announcement
announcementRouter.post('/', (0, express_async_handler_1.default)(announcementController_1.createAnnouncement));
// Update an announcement by ID
announcementRouter.put('/:id', (0, express_async_handler_1.default)(announcementController_1.updateAnnouncement));
// Delete an announcement by ID
announcementRouter.delete('/:id', (0, express_async_handler_1.default)(announcementController_1.deleteAnnouncement));
exports.default = announcementRouter;
