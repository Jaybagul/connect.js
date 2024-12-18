const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get("/getdata", (req, res) => {

    res.send("Hy Welcome to on a home page")

})

app.listen(3000)