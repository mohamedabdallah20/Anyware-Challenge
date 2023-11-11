import express from 'express'
import asyncHandler from 'express-async-handler'
import {
  createAnnouncement,
  deleteAnnouncement,
  getAllAnnouncements,
  getAnnouncementById,
  updateAnnouncement,
} from '../controller/announcementController'

const announcementRouter = express.Router()

// Get all announcements
announcementRouter.get('/', asyncHandler(getAllAnnouncements))

// Get a specific announcement by ID
announcementRouter.get('/:id', asyncHandler(getAnnouncementById))

// Create a new announcement
announcementRouter.post('/', asyncHandler(createAnnouncement))

// Update an announcement by ID
announcementRouter.put('/:id', asyncHandler(updateAnnouncement))

// Delete an announcement by ID
announcementRouter.delete('/:id', asyncHandler(deleteAnnouncement))

export default announcementRouter
