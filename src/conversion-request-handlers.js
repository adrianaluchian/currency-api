const conversionService = require('./conversion-service');

function handleGetCurrencies (req, res) {
  try {
    const currencies = conversionService.getCurrencies();
    res.send(currencies);
  } catch (error) {
    console.log('Error getting currencies', error);

    res.status(500).send('Can not provide currencies.');
  }
}

function handlePostConvert (req, res) {
  try {
    const { from, to, value } = req.body;
    const convertedValue = conversionService.convert({ from, to, value });

    res.send({
      convertedValue
    });

  } catch (error) {
    console.log('Error converting value', error);

    res.status(500).send('Can not convert value.');
  }
}

module.exports = {
  handleGetCurrencies,
  handlePostConvert
};
