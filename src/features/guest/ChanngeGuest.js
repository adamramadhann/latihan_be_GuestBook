const { Chance } = require("chance")
const { request, response, json } = require("express")
const db = require("../../connector")

const chance = new Chance()

async function ChangeGuest(req = request, res = response) {
    try {
        const dataChance = Array.from({length : 10}, () => ({
            name : chance.name(),
            address : chance.address(),
            message : chance.sentence({ words : 5})
        }))

        const dataChangeGuest = await db.guest.createMany({
            data : dataChance
        })

        res.status(200).json({message : `data succes generete ${dataChance} `, data : dataChangeGuest })

    } catch (error) {
        console.error(error)
        res.status(500).json({message : "data chance in falid", error})
    } 
}

module.exports = ChangeGuest