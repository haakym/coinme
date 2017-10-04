const axios = require('axios');

exports.index = async (req, res) => {
	const coin = req.params.coin;
    const response = await axios.get(`https://api.coinmarketcap.com/v1/ticker/${coin}`);
    const data = response.data[0];
    res.render('coin', { title: 'Coin Me!', data });
};
