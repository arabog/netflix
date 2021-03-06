const express = require("express")
const app = express()
const dotenv = require("dotenv")


const connectDB = require("./db/db")

dotenv.config({path: "./db/.env"})


const port = process.env.port || 9090


// routes
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies")
const listRoute = require("./routes/lists")


// db
connectDB()


// middleware
app.use(express.json())


app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/movies", movieRoute)
app.use("/api/lists", listRoute)



app.listen(port, () => {
          console.log(`Backend server is running on port ${port}`);
})
