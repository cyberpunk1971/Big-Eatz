const API_KEY = "f1a96b38bc3a8c9083b0667edd9a7cad";
const SEARCH_URL = "http://food2fork.com/api/search";

function getDataFromApi(searchTerm, callback) {
  const query = {
    url: SEARCH_URL,
    data: {
      q:`${searchTerm}in:name`,
      crossDomain:true,
      key: API_KEY
    },
    dataType: 'json',
    type: 'GET',
    success: callback,

  };


  $.ajax(query).done(function(data){console.log(data)});

}
function displayData(data) {
  const results = data.search.map((item, index) => renderResult(item));
}
getDataFromApi('steak', displayData);

// function displayData(data) {
//   const results =
// }
