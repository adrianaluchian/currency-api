const conversionRateCatalog = require('./conversion-rate-catalog.json');

function getCurrencies () {
  return Object.keys(conversionRateCatalog.rates || []);
}

module.exports = {
  getCurrencies
};
