
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

// Click event for the search button ("#seach-button")
$("#search-button").on("click", function() {
    event.preventDefault();
    userInput = $("#user-input").val().trim();
    console.log(userInput);

    // And pushed into the database
    database.ref().push({
        userInput : userInput,
    });

    return false;
});

database.ref().on("child_added", function(snap) {
    console.log(snap.val());
});

//var userSearch = $("#userSearch")

// Click event for entering "Enter" key to start search ("#search-enter")
// Reloads a new page and a search within 

// Nasa API return description to populate the id ("#description-box)

// Click event Thumbs-up increasing voting rate for specific image ("#thumbs-up")

// AJAX call for Nasa API

// 



// AJAX call for the Youtube API

// Media queries need to be implemented





