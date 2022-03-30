const express = require('express')
const connectDB = require('./config/db')

const app = express()

connectDB()

app.use(express.json({extended: false}))

app.use('/api/data', require('./routes/api/data'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started on Port ${PORT}`))