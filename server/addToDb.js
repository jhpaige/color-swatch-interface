// SQL to add colors to DB

const db = require('./swatchifyModel');

// FIGURE OUT HOW TO POPULATE DATABASE

// Creating tables for all swatch labels and color categories
const queryString = `
  CREATE TABLE labels (
    label_id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(255),
    color_id,
    code varchar(255)
  );
  CREATE TABLE colors (
    color_id INT AUTO_INCREMENT PRIMARY KEY,
    name carchar(255)
  );
`;

db.query(queryString).then((data) => {
  if (!data.rows.length){
    console.log('additions failed');
    return next();
  }
  return next();
}).catch((err) => next({
  log: `Error in addToDb: ${err}`,
  status: 400,
  message: 'Query to add color tables unsuccessful, check server',
}));