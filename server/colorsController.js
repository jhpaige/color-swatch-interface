const db = require('./swatchifyModel');

const colorsController = {};

// GET FOR COLORS REQUEST
colorsController.getColors = (req, res, next) => {
  
  const queryString = `
    SELECT labels.id, colors.name AS color, code
    FROM labels
    LEFT JOIN colors
    ON labels.color_id = colors.id;
  `;
  db.query(queryString).then((data) => {
    if (!data.rows.length){
      console.log('No colors in db');
      res.locals.colorsInfo= false
      return next();
    }
    // Array to Store colors, codes, and labels
    const colorsArr = [];
    for (let i = 0; i < data.rows.length; i++) {
      colorsArr.push(data.rows[i]);
    }
    
    res.locals.colorsInfo = { colorsArr };
    return next();
  }).catch((err) => next({
    log: `Error in colorsController.getColors: ${err}`,
    status: 400,
    message: 'Query for colors unsuccessful, check server',
  }));
}

module.exports = colorsController;