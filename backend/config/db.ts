import mongoose, { Connection, Error } from 'mongoose'
import 'colors'

async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(process.env.MONGO_URL as string)

    // console.log(conn)
    console.log(`MongoDB Connected`.cyan.underline)
  } catch (error: Error | any) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
