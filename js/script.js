function validate() {
  var contact = document.getElementById("contact").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;

  var formValid = false;
  // console.log(contact, name, email, age);

  var contactBool = validateContact(contact, formValid);
  var nameBool = validateName(name, formValid);
  var emailBool = validateEmail(email, formValid);
  var ageBool = validateAge(age, formValid);

  if (contactBool && nameBool && emailBool && ageBool) {
    alert("Form is submitted");
    document.getElementById("contact").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
  } else {
    alert("Please check all the fields");
  }
}

function validateContact(contact, formValid) {
  var pattern = /[0-9]/;
  if (contact.trim() === "") {
    formValid = false;
    document.getElementById("contact-error").innerHTML =
      "This field is required";
  } else if (contact.trim().length != 10) {
    formValid = false;
    document.getElementById("contact-error").innerHTML =
      "This field is invalid";
  } else if (!pattern.test(contact)) {
    formValid = false;
    document.getElementById("contact-error").innerHTML =
      "This field is invalid";
  } else {
    formValid = true;
    document.getElementById("contact-error").innerHTML = "";
  }

  return formValid;
}

function validateName(name, formValid) {
  if (name.trim() == "") {
    formValid = false;
    document.getElementById("name-error").innerHTML = "This field is required";
  } else if (name.trim().length < 3) {
    formValid = false;
    document.getElementById("name-error").innerHTML = "This field is invalid";
  } else {
    formValid = true;
    document.getElementById("name-error").innerHTML = "";
  }

  return formValid;
}

function validateEmail(email, formValid) {
  var pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.trim() == "") {
    formValid = false;
    document.getElementById("email-error").innerHTML =
      "This field is required.";
  } else if (!pattern.test(email)) {
    formValid = false;
    document.getElementById("email-error").innerHTML = "This field is invalid.";
  } else {
    formValid = true;
    document.getElementById("email-error").innerHTML = "";
  }

  return formValid;
}

function validateAge(age, formValid) {
  if (age.trim() == "") {
    formValid = false;
    document.getElementById("age-error").innerHTML = "This field is required";
  } else if (age.trim().length > 3) {
    formValid = false;
    document.getElementById("age-error").innerHTML = "This field is invalid";
  } else {
    formValid = true;
    document.getElementById("age-error").innerHTML = "";
  }

  return formValid;
}

//password validation
// var pattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/


// This keyword
// Alone
var x = this;
console.log(x); //to window object

//inside function
function add() {
  console.log(this);//window
}
window.add();

//object
var obj = {
  name: "alina",
  last: this.name + "joe",//this is referring to obj
  fullName: function () {
    //this refer to obj
    console.log(this.name + " " + this.last);
  },
};

console.log(obj);
obj.fullName();


