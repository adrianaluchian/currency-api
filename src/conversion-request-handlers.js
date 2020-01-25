const conversionService = require('./conversion-service');

async function handleGetCurrencies (req, res) {
  try {
    const currencies = await conversionService.getCurrencies();
    res.send(currencies);
  } catch (error) {
    console.log('Error getting currencies', error);
    return [];
  }
}

module.exports = {
  handleGetCurrencies
};
