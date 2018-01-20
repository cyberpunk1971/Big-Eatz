const API_KEY = "8f4f8a684459af2852013466a60ed3ec";
const SEARCH_URL = "https://api.edamam.com/search";
const APP_ID = "b5c71b52";

function getDataFromApi(searchTerm, callback) {
  const query = {
    url: SEARCH_URL,
    data: {
      q:`${searchTerm}`,
      app_id: APP_ID,
      app_key: API_KEY,
      from: 0,
      to: 5
    },
    dataType: 'jsonp',
    type: 'GET',
    success: callback,
    jsonp: 'callback'
};
  // $.ajax(query);
  $.getJSON(SEARCH_URL, query.data, displayData);

}
function displayData(data) {
  data.hits.forEach(item =>{
    console.log(item.recipe.label);
    console.log(item.recipe.image);
    console.log(item.recipe.ingredientLines.join(","));
  });
}

getDataFromApi('steak', displayData);
