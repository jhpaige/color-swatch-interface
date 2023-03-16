// Script to add colors to DB
const db = require('./swatchifyModel');

const addToDb = async () => {
  // Storing color data in array
  const colorNames = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray'];
  let colorsValuesString = '';

  // Queries db to add color table
  const colorTableQueryString = `
    CREATE TABLE colors (
      id SERIAL PRIMARY KEY,
      name varchar(255) NOT NULL
    );
  `;
  await db.query(colorTableQueryString).then((data) => {
  }).catch((err) => console.log(`Error in addToDb CREATE TABLE colors: ${err}`));

  // Queries db to add color table values
  for (let i = 0; i < colorNames.length; i++) {
    colorsValuesString += `('${colorNames[i]}')`;
    if (i != colorNames.length - 1) {
      colorsValuesString += ','
    }
  }
  const colorInsertQueryString = `
    INSERT INTO colors (name)
    VALUES ${colorsValuesString};
  `;
  await db.query(colorInsertQueryString).then((data) => {
  }).catch((err) => console.log(`Error in addToDb INSERT INTO colors: ${err}`));

  // Queries db to add labels table
  const labelTableQueryString = `
    CREATE TABLE labels (
      id SERIAL PRIMARY KEY,
      color_id INT NOT NULL,
      code varchar(255) NOT NULL
    );
  `;
  await db.query(labelTableQueryString).then((data) => {
  }).catch((err) => console.log(`Error in addToDb CREATE TABLE labels: ${err}`));

  // Storing labels data in array and converts to query string
  let labelsValuesString = '';
  let currColorId = 1;
  const redLabelCodes = ['D0312D','990F02','E3242B','60100B','610C04','B90E0A','900603','900D09','4E0707','7E2811','A91B0D','710C04','5E1916'];
  const orangeLabelCodes = ['ED7014','FA8128','FCAE1E','B56727','8D4004','BE5504','FC6A03','DD571C','B2560D','FDA172','ED820E','80400B','EC9706'];
  const yellowLabelCodes = [];
  const greenLabelCodes = [];
  const blueLabelCodes = [];
  const purpleLabelCodes = [];
  const brownLabelCodes = [];
  const grayLabelCodes = [];
  const labelCodes = [...redLabelCodes, ...orangeLabelCodes];
  // Creates values string for labels insert
  for (let i = 1; i <= labelCodes.length; i++) {
    labelsValuesString += `('${labelCodes[i - 1]}', ${currColorId})`;
    if (i != labelCodes.length) {
      labelsValuesString += ','
    }
    if (currColorId * 13 - i == 0)  currColorId++
  }

  // Queries db to add labels table values
  const labelInsertQueryString = `
    INSERT INTO labels (code, color_id)
    VALUES ${labelsValuesString};
  `;
  await db.query(labelInsertQueryString).then((data) => {
  }).catch((err) => console.log(`Error in addToDb INSERT INTO colors: ${err}`));

  return;

}

addToDb();