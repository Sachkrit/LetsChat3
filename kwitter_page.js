// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAlPv57tBGDaUT83tGNHwvnWHoHZRmOvoQ",
      authDomain: "kwittr-96cf0.firebaseapp.com",
      databaseURL: "https://kwittr-96cf0-default-rtdb.firebaseio.com",
      projectId: "kwittr-96cf0",
      storageBucket: "kwittr-96cf0.appspot.com",
      messagingSenderId: "803233990103",
      appId: "1:803233990103:web:0993dc9836f5d2b8953792"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0   
      });
      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code



//End code
      } });  }); }
getData();

