import { Schema, model, Document } from 'mongoose'

// Define an announcement schema
const announcementSchema = new Schema({
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

// Define an Announcement document interface
interface AnnouncementDocument extends Document {
  title: string
  name: string
  content: string
  createdAt: Date
}

// Create a model for Announcement
const AnnouncementModel = model<AnnouncementDocument>(
  'Announcement',
  announcementSchema
)

export default AnnouncementModel
