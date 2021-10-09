const express = require("express")
const app = express()
const dotenv = require("dotenv")

// routes
const authRoute = require("./routes/auth")

const connectDB = require("./db/db")

dotenv.config({path: "./db/.env"})


const port = process.env.port || 9090


connectDB()


app.use(express.json())


app.use("/api/auth", authRoute)


app.listen(port, () => {
          console.log(`Backend server is running on port ${port}`);
})
