const API_KEY = "f1a96b38bc3a8c9083b0667edd9a7cad";
const SEARCH_URL = "http://food2fork.com/api/search";

function getDataFromApi(searchTerm, callback) {
  const query = {
    key: API_KEY,
    q: `${searchTerm} in:name`,
    count: 5,
    

  }
  $.getJSON(SEARCH_URL, query, callback);

}
getDataFromApi('steak');

// function displayData(data) {
//   const results =
// }
