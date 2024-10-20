const express = require("express")
const cors = require("cors")
const env = require("dotenv")
const db = require("./connector")
const guest_Route = require("./Route/routes")


// kita jalankan env nya 
env.config()

// kita jalankan  express nya dengan variuabel app
const app = express()
const PORT = process.env.PORT

// default middleware 
app.use(cors())
app.use(express.json({
    limit : "100mb"
}))
app.use(express.urlencoded({
    extended : true
}))




// kita buat route nya 
app.get("/api/test", async (req, res) => {
    console.log("ada request baruu....")

    res.json({
        name : "adam azaaa",
        message : "xixixixxxi"
    })
})


// routes untuk get all data
app.get("/api/guest", async (req, res) => {
    try {
        let result = await db.guest.findMany()
        res.json(result)
    } catch (error) {
        console.error(error)
        res.send("error broo....",error)
    }
})


app.post("/api/guest/create/query", async (req, res) => {
    try {
        const {name, address, message} = req.query
        const result = await db.guest.create({
            data : {
                name, message, address
            }
        })
        res.json({
            message : "data aman broo...",
            data : result
        })
    } catch (error) {
        console.error(error)
        res.json(error)
    }
})

app.post("/api/guest/create/params/:name/:address/:message", async (req, res) => {
    try {
        const { name, address, message } = req.params
        const result = await db.guest.create({
            data : { name, address, message}
        })
        res.json({
            message : "data aman broo....",
            data : result
        })
    } catch (error) {
        console.error(error)
        res.send(error)
    }
})


app.post("/api/guest/create/body", async (req, res) => {
    try {
        const { name, address, message } = req.body
        const result = await db.guest.create({
            data : { name, address, message }
        })
        res.json({
            message : "data aman broo....",
            data : result
        })
    } catch (error) {
        console.error(error)
        res.json(error)
    }
})


app.use(guest_Route)


app.listen(PORT, () => {
    console.log(`
        =====================
        SERVER GUEST APP ${PORT}
        =====================
        `)
})