
// Initialize Firebase
/*
var config = {
apiKey: "AIzaSyDn7AW0NT2Rd5mvGgf4WVeYT8ov4aVd2IA",
authDomain: "nasatube-6866e.firebaseapp.com",
databaseURL: "https://nasatube-6866e.firebaseio.com",
projectId: "nasatube-6866e",
storageBucket: "nasatube-6866e.appspot.com",
messagingSenderId: "1031253820980"
};
firebase.initializeApp(config);

var database = firebase.database();
*/

// Initialize Firebase
var config = {
apiKey: "AIzaSyDDRY_l7TeyfrM3LCeC8EU2PFs3fRCwa2o",
authDomain: "project-1-fc61e.firebaseapp.com",
databaseURL: "https://project-1-fc61e.firebaseio.com",
projectId: "project-1-fc61e",
storageBucket: "project-1-fc61e.appspot.com",
messagingSenderId: "935964167504"
};

firebase.initializeApp(config);

// Global variables
var database = firebase.database();
var userInput = "";
var queryParam = document.location.search

if (queryParam){ 
//    queryapi(queryParam) // queryapi is a placeholder for Brandt's variable for this
} 
else {
};



// Click event for the search button to register the user input
$("#search-button").on("click", function() {
    event.preventDefault();
    userInput = $("#user-input").val().trim();
    console.log(userInput);

    // Push the user input in to the Firebase database
    database.ref().push({
        userInput : userInput,
    });

    window.location.href="./results.html?q=" + userInput

    $("#user-input").val("");
    return false;
});

// User input added in the Firebase database
database.ref().on("child_added", function(snap) {
    console.log(snap.val());
});

/*
// Click event for the search button to register the user input
$("#voting-button").on("click", function() {
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
database.ref().on("child_added", function(snap) {
    console.log(snap.val());
});
*/


// Reloads a new page and a search within 

// Nasa API return description to populate the id ("#description-box)

// Click event Thumbs-up increasing voting rate for specific image ("#thumbs-up")

// AJAX call for Nasa API

// 



// AJAX call for the Youtube API

// Media queries need to be implemented





