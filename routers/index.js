const express = require('express')
const router = express.Router()

// The very root of the application
router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router