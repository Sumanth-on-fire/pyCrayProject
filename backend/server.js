const express = require('express');
app = express()
const router = express.Router();
const dataController = require('./controllers/dataController');

router.get('/properties', dataController.getProperties);
router.get('/occupancy', dataController.getOccupancyData);
router.get('/financial', dataController.getFinancialData);

module.exports = router;

router.get('/', (req, res) => {
    res.send('App is running...')
})