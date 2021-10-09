const mongoose = require("mongoose")


const connectDB =  async () => {
          try {
                    await mongoose.connect(process.env.MONGO_URL, {
                              useNewUrlParser: true,
                              useUnifiedTopology: true,
                              // useCreateIndex: true,
                              // useFindAndModify: true,
                    })
                    
                    console.log("DB connection successful")
                    
          } catch (err) {
                    console.error(err);
          }
}


module.exports = connectDB