const db = require('./swatchifyModel');

const colorsController = {};

// GET FOR COLORS REQUEST
colorsController.getColors = (req, res, next) => {
  
  const queryString = `
    SELECT (label_id, labels.name AS label, colors.name AS color, code)
    FROM labels
    LEFT JOIN colors
    ON labels.color_id = colors.name;
  `;
  db.query(queryString).then((data) => {
    if (!data.rows.length){
      console.log('no colors');
      res.locals.colors= false
      return next();
    }
    // Array to Store colors, codes, and labels
    const dataArr = [];
    for (let i = 0; i < data.rows.length; i++) {
      dataArr.push(data.rows[i]);
    }
    
    res.locals.colors = { dataArr };
    return next();
  }).catch((err) => next({
    log: `Error in colorsController.getColors: ${err}`,
    status: 400,
    message: 'Query for colors unsuccessful, check server',
  }));
}

module.exports = colorsController;