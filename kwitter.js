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
 
 function addUser(){
   user_name=document.getElementById("user_name").value;
   firebase.database().ref("/").child(user_name).update({
      Username:user_name
   });
localStorage.setItem("user_name",user_name);
   window.location="kwitter_room.html";
}