// Script to add colors to DB
const db = require('../swatchifyModel');

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
  console.log(colorTableQueryString);
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
  console.log(colorInsertQueryString);
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
  console.log(labelTableQueryString);
  await db.query(labelTableQueryString).then((data) => {
  }).catch((err) => console.log(`Error in addToDb CREATE TABLE labels: ${err}`));

  // Storing labels data in array and converts to query string
  let labelsValuesString = '';
  let currColorId = 1;
  const redLabelCodes = ['d0312d','990f02','e3242b','60100b','610c04','b90e0a','900603','900d09','4e0707','7e2811','a91b0d','710c04','5e1916'];
  const orangeLabelCodes = ['ed7014','fa8128','fcae1e','b56727','8d4004','be5504','fc6a03','dd571c','b2560d','fda172','ed820e','80400b','ec9706'];
  const yellowLabelCodes = ['fec20c', 'fca510', 'febe00', 'ffd300', 'fdd128', 'dffe00', 'ffef00', 'fefbbd', 'fee135', 'cdaa6e', 'cc7722', 'f9e075', 'fbe106'];
  const greenLabelCodes = ['3cb043', 'b0fc38', '3a5311', '728c69', 'aef359', '5dbb63', '98bf64', '028a0f', '74b72e', '466d1d', '03ac13', '3dec97', '234f1e'];
  const blueLabelCodes = ['3944bc', '63c5da', '757c88', '0a1172', '281e5d', '1338be', '48aaad', '016064', '022d36', '1520a6', '0492c2', '2832c2', '82eefd'];
  const purpleLabelCodes = ['b200ed', 'b43757', '784b84', 'c64b8c', 'e4a0f7', 'af69ee', 'b660cd', '8f00ff', 'b284be', '6f2da8', '9966cb', '702963', 'b5338a'];
  const brownLabelCodes = ['231709', '4b371c', '3c280d', '795c34', '362511', '371d10', '3f301d', '4a2511', '432616', '65350f', '5e2c04', '481f02', '2e1503'];
  const grayLabelCodes = ['828282', '787276', '88807b', 'd9dddc', 'd6cfc7', 'c7c6c1', 'bebdb8', 'bdb7ab', '999da0', '777b7e', '877f7d', '48494b', 'b9bbb6'];
  const labelCodes = [...redLabelCodes, ...orangeLabelCodes, ...yellowLabelCodes, ...greenLabelCodes, ...blueLabelCodes, ...purpleLabelCodes, ...brownLabelCodes, ...grayLabelCodes];
  console.log(labelCodes);
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
  console.log(labelInsertQueryString);
  await db.query(labelInsertQueryString).then((data) => {
  }).catch((err) => console.log(`Error in addToDb INSERT INTO colors: ${err}`));

  return;

}

addToDb();