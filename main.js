require("dotenv").config()
const axios = require("axios")

const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (request, response) => {
  axios({
    method: "get",
    url: "https://dummyjson.com/todos/random",
  })
    .then((res) => {
      return response.status(200).json(res.data)
    })
    .catch((err) => {
      return response.status(500).json({ err })
    })
})

app.get("/test", (req, res) => {
  res.status(200).json({ message: `The server is running...` })
})

// server up
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}...`)
})
