const API_KEY = "8f4f8a684459af2852013466a60ed3ec";
const SEARCH_URL = "https://api.edamam.com/search";
const APP_ID = "b5c71b52";
const state = {
  from: 0,
  to: 6
};
function getDataFromApi(input, callback) {
  const query = {
    url: SEARCH_URL,
    data: {
      q: `${input}`,
      app_id: APP_ID,
      app_key: API_KEY,
      from: state.from,
      to: state.to

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
  $('#js-results').empty();
  data.hits.forEach(item => {
    let html = $(`<div class="container">

        <div class="col s12 m4">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class=" activator js-img" src="${item.recipe.image}">
              <span class="card-title">${item.recipe.label}</span>
            </div>
            <div class="card-content">
               <span class="card-title activator grey-text text-darken-4"><i class="material-icons right">more_vert</i></span>


            </div>
            <div class="card-reveal">
      <span class="card-title grey-text text-darken-4"><i class="small material-icons right">close</i></span>
      <p class="card-txt">${item.recipe.dietLabels}</p>

      <p class="card-txt" id="card-cal">${Math.round(item.recipe.calories)} Calories</p>
      <p class="card-txt" id="card-carb">${Math.round(item.recipe.totalNutrients.CHOCDF.quantity)}<span>${item.recipe.totalNutrients.CHOCDF.unit} Carbs per serving</span></p>
        <p class="card-txt-lines">${item.recipe.ingredientLines}</p>
    </div>
            <div class="card-action">
              <a href="${item.recipe.url}" target="_blank">Try It!</a>
            </div>
          </div>
        </div>

      </div>`);


    $('#js-results').append(html);
    console.log(item.recipe.label);
    console.log(item.recipe.image);
    console.log(item.recipe.ingredientLines.join(","));
    console.log(item.recipe.url);
    console.log(item.recipe.calories);
    // ${Math.round(item.recipe.totalNutrients.CHOCDF.quantity)}
    // ${item.recipe.totalNutrients.CHOCDF.unit}
  });
  $('.js-buttons').show();
}

function eventHandler() {
  $('#js-form').submit(function(event) {
    event.preventDefault();
    state.input = $("#js-textfield").val();
    getDataFromApi(state.input);
    console.log(input);
  });
  $('#next-btn').click(function() {
    state.from = state.from + 6;
    state.to = state.to + 6;
    getDataFromApi(state.input);
  });
  $('#prev-btn').click(function() {
    state.from = state.from - 6;
    state.to = state.to - 6;
    getDataFromApi(state.input);
  });
}
$(document).ready(eventHandler);

$(document).ready(function() {
  $('.js-buttons').hide();
  $('#js-textfield').focus(function() {
    $(this).val('');
  });
});




// <div class="container">
// <div class="col s12 m7 l6">
// <div class="card">
//   <div class="card-image waves-effect waves-block waves-light">
//     <img class="activator" src="${item.recipe.image}">
//   </div>
//   <div class="card-content">
//   <span class="card-title activator grey-text text-darken-4 col s12 m7 l6">${item.recipe.label}<i class="material-icons right col s12 m7 l6">more_vert</i></span>
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
// </div>
//













// getDataFromApi('chicken', displayData);
