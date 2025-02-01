// URL of the API endpoint
const url = 'https://the-trivia-api.com/v2/questions/';

//async function to fetch data from the API
function fetchJSON() {
    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {   
            return data;
        })
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}
// const getQuestions = fetchJSON();
// console.table(getQuestions);

// function processQuestions(data) {
//         console.log(data);
//         let output = '';

//         for(let i = 0; i < data.length; i++){
//             output += "<h2>" + data[i].category + '<h2>';
//             output += data[i].difficulty + '<br>';
//             output += data[i].question.text + '<br>\n';
//             output += "<strong>" + data[i].correctAnswer + '</strong><br>\n';
//             for (let y = 0; y < data[i].incorrectAnswers.length; y++) {    
//                 output += data[i].incorrectAnswers[y] + '<br>\n';
//             }
//             output += data[i].id + '<hr>\n';
//         }
//     console.log(output);
// }
// let myQuestions = processQuestions(tenQuestions);

// console.table(myQuestions);


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
    console.log('Processing JSON data:');
    //console.log(jsonData);
    let output = '';

    for(let i = 0; i < data.length; i++){
        thisCategory = data[i].category.replace(/_/g, ' ');
        //thisCategory = thisCategory.charAt(0).toUpperCase() + thisCategory.slice(1);

        output += "<h2>" + thisCategory + '</h2>';
        output += data[i].difficulty + '<br>';
        output += data[i].question.text + '<br>\n';
        output += "<strong>" + data[i].correctAnswer + '</strong><br>\n';
        for (let y = 0; y < data[i].incorrectAnswers.length; y++) {    
            output += data[i].incorrectAnswers[y] + '<br>\n';
        }
        output += data[i].id + '<hr>\n';
    
    }
    
    document.getElementById("newQuizForm").innerHTML = output;
}
  
  // Fetch the data and then pass it to processData function
  fetchData().then(jsonData => processData(jsonData)).catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
  