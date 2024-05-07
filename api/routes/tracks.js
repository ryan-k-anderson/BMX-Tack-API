const express = require('express');
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /tracks'
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /tracks'
    })
});

router.get('/:trackId', (req, res, next) => {
    const id = req.params.trackId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:trackId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated Track'
    })
});

router.delete('/:trackId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted Track'
    })
});
module.exports = router;