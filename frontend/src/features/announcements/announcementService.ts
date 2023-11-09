import axios from 'axios'

const API_URL = '/api/announcements'

// Fetch All Announcements
const getAllAnnouncements = async () => {
  const response = await axios.get(API_URL)
  return response.data
}
const announcementService = {
  getAllAnnouncements,
}
export default announcementService
