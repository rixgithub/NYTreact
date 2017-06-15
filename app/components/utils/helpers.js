var axios = require('axios');

var APIkey = "154f315c7bec4ae8826924ea42930d23";

var helpers = {

		runQuery: function(term, start, end) {

			var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIkey + "&q=" + term + "&begin_date=" + start + "0101&end_date=" + end + "1231";

				// Make a request for articles
				return axios.get(queryURL)
				  .then(function (results) {
				    return(results.data.response.docs);
				  })
				  .catch(function (error) {
				    console.log(error);
				  });

		},

}

module.exports = helpers;
