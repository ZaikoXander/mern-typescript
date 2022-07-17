import express from "express"
import morgan from "morgan"
import cors from "cors"

import config from "./config"

import videoRoutes from "./routes/videos.routes"

const app = express()

app.set("port", config.PORT || 3333)

app.use(morgan("dev"))

app.use(cors(/* {
  origin: "http://localhost:3000"
} */
))

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use(videoRoutes)

export default app
