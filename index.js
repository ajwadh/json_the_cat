const { fetchBreedDescription } = require('./breedFetcher');
const breed = process.argv[2];

fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});