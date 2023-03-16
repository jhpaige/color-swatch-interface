// Script to drop tables from DB
const db = require('./swatchifyModel');

const dropDb = async () => {

  await db.query('DROP TABLE colors;').then((data) => {
  }).catch((err) => console.log(`Error dropping colors table: ${err}`));

  await db.query('DROP TABLE labels;').then((data) => {
  }).catch((err) => console.log(`Error dropping labels table: ${err}`));

  return;
  
}

dropDb();