import mongoose, { ConnectionOptions } from 'mongoose'

const dbOptions: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}

mongoose.Promise = Promise

mongoose.connect(
  <string>(
    'mongodb+srv://ErixMV:Podder2021@poddercluster.umzlm.mongodb.net/Podder?retryWrites=true&w=majority'
  ),
  dbOptions
)

const connection = mongoose.connection

connection.once('open', () => {
  console.log('MongoDB connection stablished')
})

connection.on('error', err => {
  console.log(err)
  process.exit(0)
})
