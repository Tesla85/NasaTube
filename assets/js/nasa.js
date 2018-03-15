// Initializing Firebase
var config = {
  apiKey: "AIzaSyDn7AW0NT2Rd5mvGgf4WVeYT8ov4aVd2IA",
  authDomain: "nasatube-6866e.firebaseapp.com",
  databaseURL: "https://nasatube-6866e.firebaseio.com",
  projectId: "nasatube-6866e",
  storageBucket: "",
  messagingSenderId: "1031253820980"
};

firebase.initializeApp(config);

// Global NASA URL Variables
var searchURL = "https://images-api.nasa.gov/search?q=" + userInput;
// var nasaURL = "https://images-assets.nasa.gov/image/" + nasaId + "/" + nasaId + "~thumb.jpg";
var userInput = "";
var queryParam = document.location.search
console.log(queryParam)

if (queryParam) {
  displayImages(queryParam)
}
else {
};

// AJAX call to get the images from the NASA API
function displayImages(queryParam) {

  var queryURL = "https://images-api.nasa.gov/search" + queryParam;

  $.ajax({
    url: queryURL,
    method: "GET"
  })

  // The images from the NASA API to show up on the results page
  .then(function (response) {
    console.log(response.collection.items[1].links[0].href);

    for (var i = 0; i < 5; i++) {

      var nasaImageDiv = $("<div>");
      var nasaImageResult = $("<img>");
      nasaImageResult.attr("src", response.collection.items[i].links[0].href);  //

      $(".results-image").append(nasaImageResult);
    };
  });
};

gapi.load('client', function () {
  gapi.client.init({
    "apiKey": "AIzaSyDmUrAQsG5BGpvJOlVy8Ch4Odkg8anh2I4"
  });
});

/*
$("button[type=submit]").click(function (event) {
  event.preventDefault();

  var keyword = $("#user-input").val().trim();
  if (!keyword) {
    alert("Do I look like a mind reader? Please enter a keyword.");
    return;
  }

  gapi.client.request({
    "path": "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + keyword
  }).then(function (response) {
    console.log(response);
  })
});
*/

// Click event for the search button to register the user input
$("#search-button").on("click", function () {
  event.preventDefault();
  userInput = $("#user-input").val().trim();
  console.log(userInput);

  window.location.href="./results.html?q=" + userInput;

  gapi.client.request({
    "path": "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + keyword
  }).then(function (response) {
    console.log(response);
  })

  $("#user-input").val("");
});

// Click event for the search button to register the user input
$("#voting-button").on("click", function () {
  event.preventDefault();

  var clickCounter = 0;
  clickCounter++;

  // Push the user like in to the Firebase database
  database.ref().push({
    clickCount: clickCounter,
  });

  return false;
});

// User input added in the Firebase database
database.ref().on("child_added", function (snap) {
  console.log(snap.val());
});
