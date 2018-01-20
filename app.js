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
  let html =  $(`<div class="card col-4">
      <div class="card-image">
        <img src="${item.recipe.image}" class="js-image">
        <span class="card-title">${item.recipe.label}</span>
      </div>
      <div class="card-content">

        <p>${item.recipe.ingredientLines}</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>`);
    $('#js-results').append(html);
    console.log(item.recipe.label);
    console.log(item.recipe.image);
    console.log(item.recipe.ingredientLines.join(","));
  });
}

getDataFromApi('steak', displayData);
