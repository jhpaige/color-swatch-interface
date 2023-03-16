const express = require("express");
const cors = require("cors");
const controller = require("./colorsController");

const router = express.Router();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/', router);

router.get('/colors', controller.getColors, (req, res) => {
  res.status(200).json(res.locals.colorsInfo);
});

// Local error handler
app.use((req,res) => res.status(404).send('This page does not exist.'));

// Global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caughtunknown middleware error',
        status: 500,
        message: { err: 'An error occurred'},
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`)
});

module.exports = app;