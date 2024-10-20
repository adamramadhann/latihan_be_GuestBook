const { request, response } = require("express");
const db = require("../../connector");

async function updateGuest(req = request, res = response) {
    try {
        // Mengonversi id menjadi integer
        const id = parseInt(req.body.id, 10);
        const data = req.body.data;

        // Validasi jika id tidak valid
        if (isNaN(id)) {
            return res.status(400).json({ success: false, message: "ID must be a number." });
        }

        const updateData = await db.guest.update({
            where: { 
                id: id 
            },
            data: data
        });

        res.status(201).json({
            success: true,
            data: updateData
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
}

module.exports = updateGuest;
