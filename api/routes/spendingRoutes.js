const express = require('express');
const pool = require('../database/db');



const router = express.Router();

// create a new spending
router.post('/spendings', async (req, res) => {
	const { userid, count, type, model } = req.body;
	try {
		const result = await pool.query(
			'INSERT INTO spendings (userid, count, type, model) VALUES ($1, $2, $3, $4) RETURNING *',
			[userid, count, type, model]
		);
		res.status(201).json(result.rows[0]);
	} catch (error) {
		res.status(500).json({ error: 'Database error' });
	}
});


// get all spendings or filtered spendings by query params
router.get('/spendings', async (req, res) => {
	const { userid, startdate, enddate, type, model } = req.query;
	let query = 'SELECT * FROM spendings WHERE 1=1';
	const params = [];

	if (userid) {
		query += ' AND userid = $' + (params.length + 1);
		params.push(userid);
	}
	if (startdate && enddate) {
		query += ' AND createdat BETWEEN $' + (params.length + 1) + ' AND $' + (params.length + 2);
		params.push(startdate, enddate);
	}
	if (type) {
		query += ' AND type = $' + (params.length + 1);
		params.push(type);
	}
	if (model) {
		query += ' AND model = $' + (params.length + 1);
		params.push(model);
	}

	try {
		const result = await pool.query(query, params);
		res.status(200).json(result.rows);
	} catch (error) {
		res.status(500).json({ error: 'Database error' });
	}
});


// get a spending by id
router.get('/spendings/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM spendings WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});


// update a spending by id
router.put('/spendings/:id', async (req, res) => {
  const { id } = req.params;
  const { userid, count, type, model } = req.body;
  try {
    const result = await pool.query(
      'UPDATE spendings SET userid = $1, count = $2, type = $3, model = $4 WHERE id = $5 RETURNING *',
      [userid, count, type, model, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});


// delete a spending by id
router.delete('/spendings/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM spendings WHERE id = $1', [id]);
    res.status(200).json({ message: 'Record deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
}); 




module.exports = router;