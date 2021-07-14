
var firebaseConfig = {
      apiKey: "AIzaSyB60E3Y-sI2a-Z59UnOMBcYc3zvtKXPcHI",
      authDomain: "kwitter-4dfd2.firebaseapp.com",
      projectId: "kwitter-4dfd2",
      storageBucket: "kwitter-4dfd2.appspot.com",
      messagingSenderId: "845707074213",
      appId: "1:845707074213:web:0b32f961bf44cbbe730b4c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
