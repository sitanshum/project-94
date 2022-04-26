var firebaseConfig = {
      apiKey: "AIzaSyDUEWbyTH69hzM1UBRpo5jeH4Ua0d83l4g",
      authDomain: "kwitter-project-88654.firebaseapp.com",
      databaseURL: "https://kwitter-project-88654-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-88654",
      storageBucket: "kwitter-project-88654.appspot.com",
      messagingSenderId: "510778951895",
      appId: "1:510778951895:web:56208127bc897773774892"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
