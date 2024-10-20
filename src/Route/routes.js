const { Router } = require("express")
const { guest_create } = require("../features/guest/create")
const deleteIdGuest = require("../features/guest/deleteIdGuest")
const listAll = require("../features/guest/list")
const updateGuest = require("../features/guest/update")
const ChangeGuest = require("../features/guest/ChanngeGuest")


const guest_Route = Router()
guest_Route.post("/api/guest/create", guest_create)
guest_Route.delete("/api/guest/delete/:id", deleteIdGuest )
guest_Route.get("/api/guest/list", listAll)
guest_Route.put("/api/guest/update", updateGuest )
guest_Route.post("/api/guest/chance", ChangeGuest )


module.exports = guest_Route