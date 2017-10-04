const axios = require('axios');

exports.index = async (req, res) => {

	const limit = req.params.limit ? `?limit=${req.params.limit}` : '';
    const response = await axios.get(`https://api.coinmarketcap.com/v1/ticker/${limit}`);
    const data = response.data;
    res.render('index', { title: 'Coin Me!', data });
};
