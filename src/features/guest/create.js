const {request, response} = require("express")
const db = require("../../connector")

async function guest_create(req = request, res = response) {
    try {
        const {name, address, message } = req.body
        const response = await db.guest.create({
            data : {name, address, message}
        })
        res.status(201).json({
            success : true,
            message : "berhasil tambah guest "
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success : false,
            error : error
        })
    }
}

module.exports = {
    guest_create
}