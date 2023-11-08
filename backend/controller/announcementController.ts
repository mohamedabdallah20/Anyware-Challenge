import AnnouncementModel, {
  AnnouncementDocument,
} from '../models/announcementModel'
import { Request, Response } from 'express'

// Get all announcements
export const getAllAnnouncements = async (req: Request, res: Response) => {
  try {
    const announcements: AnnouncementDocument[] = await AnnouncementModel.find()
    res.status(200).json(announcements)
  } catch (error: Error | any) {
    res.status(500)
    throw new Error(error.message)
  }
}

// Create a new announcement
export const createAnnouncement = async (req: Request, res: Response) => {
  try {
    const { title, name, content, createdAt } = req.body
    const ann = new AnnouncementModel({ title, name, content, createdAt })
    const savedAnn = await ann.save()
    res.status(201).json(savedAnn)
  } catch (error: Error | any) {
    res.status(400)
    throw new Error(error.message)
  }
}

// Get specific announcement by ID
export const getAnnouncementById = async (req: Request, res: Response) => {
  try {
    const Announcement = await AnnouncementModel.findById(req.params.id)
    if (!Announcement) {
      res.status(404).json({ error: 'Announcement not found' })
      throw new Error('Announcement not found')
    }
    res.status(200).json(Announcement)
  } catch (error: Error | any) {
    res.status(500)
    throw new Error(error.message)
  }
}

// Update an announcement by ID
export const updateAnnouncement = async (req: Request, res: Response) => {
  try {
    const updatedAnnouncement: AnnouncementDocument | null =
      await AnnouncementModel.findByIdAndUpdate(req.params.id, req.body)
    if (!updatedAnnouncement) {
      res.status(404).json({ error: 'Announcement not found' })
      throw new Error('Announcement not found')
    }
    res.status(200).json(updatedAnnouncement)
  } catch (error: Error | any) {
    res.status(500)
    throw new Error(error.message)
  }
}

// Delete a Announcement by ID
export const deleteAnnouncement = async (req: Request, res: Response) => {
  try {
    const deletedAnnouncement: AnnouncementDocument | null =
      await AnnouncementModel.findByIdAndRemove(req.params.id)
    if (!deletedAnnouncement) {
      res.status(404).json({ error: 'Announcement not found' })
      throw new Error('Announcement not found')
    }
    res.status(204).end()
  } catch (error: Error | any) {
    res.status(500)
    throw new Error(error.message)
  }
}
