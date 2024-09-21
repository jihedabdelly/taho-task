const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const spendingRoutes = require('./routes/spendingRoutes')
const pool = require('./database/db');

const app = express();
const port = 5050;

// Read SQL file to create the table
const createTableSql = fs.readFileSync(path.join(__dirname, './database/create_table.sql')).toString();

pool.query(createTableSql)
  .then(() => {
    console.log('Table created successfully');
  })
  .catch(err => {
    console.error('Error creating table:', err);
  });

app.use(express.json());
app.use(bodyParser.json());
app.use('/', spendingRoutes);
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
