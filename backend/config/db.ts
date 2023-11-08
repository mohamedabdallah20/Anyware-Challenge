import mongoose, { Connection, Error } from 'mongoose'
import 'colors'

async function connectDB(): Promise<void> {
  try {
    const conn: Connection = await mongoose.createConnection(
      process.env.MONGO_URL as string
    )

    console.log(`MongoDB Connected : ${conn.host}`.cyan.underline)
  } catch (error: Error | any) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
