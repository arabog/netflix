const express = require("express")
const app = express()
const dotenv = require("dotenv")
const connectDB = require("./db/db")

dotenv.config({path: "./db/.env"})

const port = process.env.port || 9090


connectDB()


app.use(express.json())


app.listen(port, () => {
          console.log(`Backend server is running on port ${port}`);
})
