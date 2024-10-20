const { request, response, query } = require("express")
const db = require("../../connector")

async function listAll (req = request, res = response) {
    try {
        const {page = 1, limit = 10} = req.query
        const take = parseInt(limit)
        const skip = (parseInt(page) -1) * take

        const response = await db.guest.findMany({
            take : take,
            skip : skip
        })


        const total_data = await db.guest.count()

        res.status(202).json(
           { sucsess : true,
            current_page : parseInt(page),
            total_page : Math.ceil(total_data / limit),
            total_data : total_data,
            query : response
           }

        )
    } catch (error) {
        console.error(error)
        res.status(500).json({
            sucsess : false,
            message : "ada warna cinta niii"
        })
    }
}

module.exports = listAll    