//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBIagiUd9vOuIb1FlPZg-19bIOgsLn9gxo",
      authDomain: "kwitter-945fa.firebaseapp.com",
      databaseURL: "https://kwitter-945fa-default-rtdb.firebaseio.com",
      projectId: "kwitter-945fa",
      storageBucket: "kwitter-945fa.appspot.com",
      messagingSenderId: "355872741137",
      appId: "1:355872741137:web:c67ac74c9e2c2e5456deb0",
      measurementId: "G-N5K6FTBM5C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      /*firebase:is used to set the reference for adding data to the data
      Database():means we want to add data to database
      Ref():Reference
      /:to add user name in the root as main folder
      Child(room_name):Child is the function which is used to give name to the main folder
      room_name:It is the name of the main folder
      Update:it is an inbuilt firebase function used to update the database*/
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name: " + room_name);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'># " + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}