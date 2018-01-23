
const API_KEY = "8f4f8a684459af2852013466a60ed3ec";
const SEARCH_URL = "https://api.edamam.com/search";
const APP_ID = "b5c71b52";

function getDataFromApi(input, callback) {
  const query = {
    url: SEARCH_URL,
    data: {
      q:`${input}`,
      app_id: APP_ID,
      app_key: API_KEY,
      from: 0,
      to: 4
    },
    // dataType: 'jsonp',
    // type: 'GET',
    // success: callback,
    // jsonp: 'callback'
};
  // $.ajax(query);
  $.getJSON(SEARCH_URL, query.data, displayData);

}
function displayData(data) {
  data.hits.forEach(item =>{
  let html = $(`<div>
  <div class="col-6 box">
      <h3>${item.recipe.label}</h3>
      <img src="${item.recipe.image}">

      <p>${item.recipe.ingredientLines}</p>

      <p><a href="${item.recipe.url}">Try It!</a></p>
  </div>



      <div class="pop-up">${item.recipe.dietLabels}
          ${Math.round(item.recipe.calories)}
          ${Math.round(item.recipe.totalNutrients.CHOCDF.quantity)}
          ${item.recipe.totalNutrients.CHOCDF.unit}
      </div>

  </div>`);

    $('#js-results').append(html);
    console.log(item.recipe.label);
    console.log(item.recipe.image);
    console.log(item.recipe.ingredientLines.join(","));
    console.log(item.recipe.url);
    console.log(item.recipe.calories);
  });
}
function eventHandler() {
  $('#js-form').submit(function(event) {
    event.preventDefault();
    let input = $( "#js-textfield").val();
    getDataFromApi(input);
    console.log(input);
  });
}
$(document).ready(eventHandler);











// $(`<div class="row">
// <div class="col s12 m6 l4">
// <div class="card">
//   <div class="card-image waves-effect waves-block waves-light">
//     <img class="activator" src="${item.recipe.image}">
//   </div>
//   <div class="card-content">
//   <span class="card-title activator grey-text text-darken-4 col s12 m6 l4">${item.recipe.label}<i class="material-icons right col s12 m6 l4">Nutrition Info</i></span>
//     <p>${item.recipe.ingredientLines}</p>
//   <p><a href="${item.recipe.url}">Try It!</a></p>
//   </div>
//   <div class="card-reveal">
//   <span class="card-title grey-text text-darken-4">${item.recipe.label}<i class="material-icons right">X</i></span>
//   <p><span id="cal-count">Calories:</span> ${Math.round(item.recipe.calories)}</p>
//   <p><span id="cal-count">Diet:</span> ${item.recipe.dietLabels}</p>
//   <p><span id="cal-count">Carbs: </span>
//   ${Math.round(item.recipe.totalNutrients.CHOCDF.quantity)}<span>
//   ${item.recipe.totalNutrients.CHOCDF.unit}
//   </span
//   </p>
//   </div>
//   </div>
//   </div>
// </div>
// </div>`);
//

























// getDataFromApi('chicken', displayData);
