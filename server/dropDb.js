// SQL to drop everything in DB

const db = require('./swatchifyModel');

// Dropping tables from database to reset
const queryString = `
  DROP TABLE labels;
  DROP TABLE colors;
`;

db.query(queryString).then((data) => {
  if (!data.rows.length){
    console.log('dropping successful');
    return next();
  }
  return next();
}).catch((err) => next({
  log: `Error in dropDb: ${err}`,
  status: 400,
  message: 'Query to drop tables unsuccessful, check server',
}));