const db = require('./swatchifyModel');

const colorsController = {};

// GET FOR COLORS REQUEST
colorsController.getColors = (req, res, next) => {
  
  const queryString = `
    SELECT * FROM colors;
  `;
  db.query(queryString).then((data) => {
    if (!data.rows.length){
      console.log('no colors');
      res.locals.colors= false
      return next();
    }
    const { username, bio } = data.rows[0];
    res.locals.userInfo = { username, bio };
    res.locals.foundUser = true;
    return next();
  }).catch((err) => next({
    log: `Error in colorsController.getColors: ${err}`,
    status: 400,
    message: 'Query for colors unsuccessful, check server',
  }));
}

module.exports = colorsController;