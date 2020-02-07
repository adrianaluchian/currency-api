const conversionRateCatalog = require('./conversion-rate-catalog.json');

function getCurrencies () {
  return Object.keys(conversionRateCatalog.rates || []);
}

function isSupportedCurrency (currency) {
  return !!(conversionRateCatalog.rates || [])[currency];
}

function convert ({ from, to, value } = {}) {
  const fromRate = conversionRateCatalog.rates[from] || 0;
  const toRate = conversionRateCatalog.rates[to] || 0;

  const convertedValue = (value / fromRate) * toRate;

  if (isNaN(convertedValue) || !isFinite(convertedValue)) {
    return 0;
  }

  return Number(convertedValue.toFixed(2));
}

module.exports = {
  getCurrencies,
  convert,
  isSupportedCurrency
};
