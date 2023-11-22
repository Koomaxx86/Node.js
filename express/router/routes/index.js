const express = require('express')

const router = express.Router()


router.get('/', (req, res) => {
    res.send('Main')
})


module.exports = router