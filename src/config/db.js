import mongoose from 'mongoose'

const connectDB = (dburl) => {
  return mongoose
    .connect(dburl)
    .then(() => console.log('Connected to databse'))
    .catch(() => console.error('Connection failed :('))
}
export default connectDB
