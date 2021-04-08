const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  //console.log(typeof body);
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('Breed not found');
  } else {
    // console.log(data[0]);
    // console.log(typeof data);
    console.log("Description: " + data[0].description);
  }
});

