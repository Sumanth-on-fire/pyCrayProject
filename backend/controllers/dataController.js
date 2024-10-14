const db = require('../db/db');

exports.getProperties = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM pc.properties');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Server Error ${err}`);
  }
};

exports.getOccupancyData = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM pc.occupancy');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getFinancialData = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM pc.financial_records');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
