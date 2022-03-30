const express = require('express')
const router = express.Router()
const Data = require('../../model/data')

router.get('/', async (req, res) =>{
    
    try {
        // const data = await Data.findById("62444c1a7a5f6fcef511ab64")
        // res.json(data)
        res.send("working")
    } catch (error) {
        console.log(error.message)
    }
})



router.post('/', async (req, res) =>{
    
   try {
        const {data} = req.body
       const newEntry = await Data.findById("62444c1a7a5f6fcef511ab64")
       newEntry.data = data
       await newEntry.save()
       res.send("sent")
       console.log("data sent")
   } catch (error) {
       console.log(error)
   }
})

module.exports = router