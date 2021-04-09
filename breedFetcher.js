const request = require('request');


const fetchBreedDescription = function (breed, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} Response: ${body}`;
      callback(`Error (${msg})`, null);
      return;
    }

    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback('not available', null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
