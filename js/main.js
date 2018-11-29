

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDfSfoY2z8o9m40mIRgWf45AEjMh7XsTuU",
    authDomain: "contact-form-6f9fd.firebaseapp.com",
    databaseURL: "https://contact-form-6f9fd.firebaseio.com",
    projectId: "contact-form-6f9fd",
    storageBucket: "contact-form-6f9fd.appspot.com",
    messagingSenderId: "1076596989352"
  };
  firebase.initializeApp(config);

//reference message collection
let messagesRef = firebase.database().ref('messages');
// list for submit

//function to get form values
const getInputVal = id => {
    return document.getElementById(id).value;
}

//save message to firebase
const saveMessage = (name, email, message) => {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name,
        email,
        message
    })
}

// submit form
const submitForm = e => {
    e.preventDefault();

    // get all values
    let name = getInputVal('name');
    let email = getInputVal('email');
    let message = getInputVal('message');

    //save message
    saveMessage(name, email, message);

    //show alert
    document.querySelector('.contact__green').style.display = "block";
    // hide alert
    setTimeout(() => {
        document.querySelector('.contact__green').style.display = "none";
    }, 3000)

    //clear form
    document.getElementById('contactForm').reset();

}


document.getElementById('contactForm').addEventListener('submit', submitForm);



AOS.init({
    disable: 'mobile'
  });