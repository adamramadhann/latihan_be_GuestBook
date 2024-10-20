const {request, response} = require("express")
const db = require("../../connector")

async function deleteGuest(req = request, res= response) {
    try {
        const { ids } = req.body
        const result = await db.guest.deleteMany({
            where : {
                id : {
                    in : ids,
                    
                }
            }
        })
        res.json({message : `success delete ${result.count} data `})
    } catch (error) {
        console.error(error)
    }
}
module.exports = deleteGuest