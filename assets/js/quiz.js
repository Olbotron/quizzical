// URL of the API endpoint
const url = 'https://the-trivia-api.com/v2/questions?byCategory=music&limit=10'; //'https://the-trivia-api.com/api/questions?categories=music&region=GB&difficulty=easy&tags=rock';//

// Function that fetches JSON data from an API
function fetchData() {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        return data;
      });
  }
  
  // Function that processes the JSON data
  function processData(data) {
    console.log('Processing JSON data:')
    let output = '';

    for(let i = 0; i < data.length; i++){
        thisCategory = data[i].category.replace(/_/g, ' ');

        output += "<div class='question'><h2>" + fixCategory(thisCategory) + ': ';
        output += data[i].difficulty + '</h2>';
        output += "<h3>" + data[i].question.text + '</h3>\n';
        output += "<input type='radio' name='" +  data[i].id + "' value='true'> <strong>" + data[i].correctAnswer + '</strong><br>\n';
        for (let y = 0; y < data[i].incorrectAnswers.length; y++) {    
            output += "<input type='radio' name='" +  data[i].id + "' value='false'> " + data[i].incorrectAnswers[y] + '<br>\n';
        }
        output += "<span class='hide'>" + data[i].id + '</span></div>\n';
    }
    
    document.getElementById("newQuizForm").innerHTML = output;
}

function shuffleAnswers() {
    for (let i = 0; i < data.length; i++) {
        }
}

//Deal with category names with underscores and tv in lowercase
function fixCategory(categoryName){
    switch(categoryName){        
        case "music":
            return "<h2 class='music'>Music";
        case "sport and leisure":
            return "<h2 class='sport_leisure'>Sport and Leisure";
        case "film and tv":
            return "<h2 class='film_tv'>Film and TV";
        case "arts and literature":
            return "<h2 class='arts_literature'>Arts and Literature";
        case "history":
            return "<h2 class='history'>History";
        case "society and culture":
            return "<h2 class='society_culture'>Society and Culture";
        case "science":
            return "<h2 class='science'>Science";
        case "geography":
            return "<h2 class='geography'>Geography";
        case "food and drink":
            return "<h2 class='food_drink'>Food and Drink";
        case "general knowledge":
            return "<h2 class='general_knowledge'>General Knowledge";
        default:
            return "<h2 class='unknown'>Unknown";
    }
}

function capitalizeCategory(category) {
    if (typeof category !== 'string' || category.length === 0) {
      return '';
    }
    
    return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
}  

// Fetch the data and then pass it to processData function
fetchData().then(jsonData => processData(jsonData)).catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
});
  