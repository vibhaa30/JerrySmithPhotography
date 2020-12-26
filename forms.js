
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB9mU-V8naec0wLmX9KZOjzPzix1MJWov8",
    authDomain: "jerry-smith-photography.firebaseapp.com",
    projectId: "jerry-smith-photography",
    storageBucket: "jerry-smith-photography.appspot.com",
    messagingSenderId: "346607086351",
    appId: "1:346607086351:web:e84212f5fe20fee6756c7a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

    function signUp() {

      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch (e => alert(e.message));

      alert("You have signed up");
    }

    function signIn() {

      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.signInWithEmailAndPassword(email.value, password.value);
      promise.catch (e => alert(e.message));

      alert("Signing you in with " + email.value);

      //Take user to different page

    }
