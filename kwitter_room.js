
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCccfwafHXnuMPLua2ZW-wfU4_8yI0UyOY",
      authDomain: "classtest-810a8.firebaseapp.com",
      databaseURL: "https://classtest-810a8-default-rtdb.firebaseio.com",
      projectId: "classtest-810a8",
      storageBucket: "classtest-810a8.appspot.com",
      messagingSenderId: "557542276095",
      appId: "1:557542276095:web:a3accb02dc2f73bf9e45ca",
      measurementId: "G-QL5YV80MMZ"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
    


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
 