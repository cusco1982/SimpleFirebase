var config = {
    apiKey: "AIzaSyDkBMPVQRvEMk448DFEnKJZ7EDeWd7SEnA",
    authDomain: "cannabisstand-dfdcb.firebaseapp.com",
    databaseURL: "https://cannabisstand-dfdcb-default-rtdb.firebaseio.com",
    storageBucket: "cannabisstand-dfdcb.appspot.com"
};

firebase.initializeApp(config);

var database = firebase.database();

document.getElementById("add-user-btn").onclick = function() {
    
    event.preventDefault();

    var x = document.getElementById("user-name-input").value.trim();
    console.log(x);

    var newUser = {
        username: x,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    };

    database.ref().push(newUser)
};