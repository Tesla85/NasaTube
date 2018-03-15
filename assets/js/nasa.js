
var config = {
    apiKey: "AIzaSyDn7AW0NT2Rd5mvGgf4WVeYT8ov4aVd2IA",
    authDomain: "nasatube-6866e.firebaseapp.com",
    databaseURL: "https://nasatube-6866e.firebaseio.com",
    projectId: "nasatube-6866e",
    storageBucket: "",
    messagingSenderId: "1031253820980"
  };
    firebase.initializeApp(config);


    var searchURL="https://images-api.nasa.gov/search?q=" + userInput;
    var nasaURL = "https://images-assets.nasa.gov/image/" + nasaId + "/" + nasaId + "~thumb.jpg";
    var database = firebase.database();
    var userInput = "";
    
    gapi.load('client', function () {
        gapi.client.init({
        "apiKey": "AIzaSyDmUrAQsG5BGpvJOlVy8Ch4Odkg8anh2I4"
        });
    });
    
    $("button[type=submit]").click(function (event) {
        event.preventDefault();
    
        var keyword = $("#keyword").val().trim();
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

    

//   $.ajax({
//     url: url,
//     success: function(result){
//     if("copyright" in result) {
//       $("#copyright").text("Image Credits: " + result.copyright);
//     }
//     else {
//       $("#copyright").text("Image Credits: " + "Public Domain");
//     }
    
//     if(result.media_type == "video") {
//       $("#apod_img_id").css("display", "none"); 
//       $("#apod_vid_id").attr("src", result.url);
//     }
//     else {
//       $("#apod_vid_id").css("display", "none"); 
//       $("#apod_img_id").attr("src", result.url);
//     }
//     $("#reqObject").text(url);
//     $("#returnObject").text(JSON.stringify(result, null, 4));  
//     $("#apod_explaination").text(result.explanation);
//     $("#apod_title").text(result.title);
//   }
// });

    // Click event for the search button to register the user input
    $("#search-button").on("click", function() {
        event.preventDefault();
        userInput = $("#user-input").val().trim();
        console.log(userInput);

        // Push the user input in to the Firebase database
        database.ref().push({
            userInput : userInput,
        });

        $("#user-input").val("");
        return false;
    });

    // User input added in the Firebase database
    database.ref().on("child_added", function(snap) {
        console.log(snap.val());
    });
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



   




// Global variables

// Reloads a new page and a search within 

// Nasa API return description to populate the id ("#description-box)

// Click event Thumbs-up increasing voting rate for specific image ("#thumbs-up")

// AJAX call for Nasa API

// AJAX call for the Youtube API

// Media queries need to be implemented