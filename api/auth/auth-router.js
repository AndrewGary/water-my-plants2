const router = require('express').Router();

router.get('/register', (req, res, next) => {
    res.status(200).json({ message: 'TESTTTTT'})
})

module.exports = router;