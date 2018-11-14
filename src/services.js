
const services = require ('./help');


module.exports = (_, res) => {
    //res.setHeader('Content-type', 'application/json');
    res.send(services)
  };