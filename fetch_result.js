const axios = require('axios');

function getDetails(countryName, callback) {
    axios.get(`https://corona.lmao.ninja/countries/${countryName}`)
    .then(function (response) {
        // handle success
        callback(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}
// getDetails('Niger', (data) => {
//     console.log(data);
// })
module.exports.getDetails = getDetails;