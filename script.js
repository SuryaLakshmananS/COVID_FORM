const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyDC1vQ4oG2-KpOa1M7tivJUokmVmvgYpiE",
    authDomain: "covid-300ef.firebaseapp.com",
    databaseURL: "https://covid-300ef-default-rtdb.firebaseio.com",
    projectId: "covid-300ef",
    storageBucket: "covid-300ef.appspot.com",
    messagingSenderId: "1086778635402",
    appId: "1:1086778635402:web:232e83d59731e6f03a2973",
    measurementId: "G-Y52ZXRE6KZ"
};
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email = getElementVal("email");
    var age=getElementVal("age")
    var phone=getElementVal("phone")
    var gender=getElementVal("gender")
    var year=getElementVal("year")
    var branch=getElementVal("branch")
    var section=getElementVal("section")
    var vaccine=getElementVal("vaccine")
    var dose1taken=getElementVal("dose1taken")
    var dose1type=getElementVal("dose1type")
    var dose1side=getElementVal("dose1sideeff")
    var covidafdose1=getElementVal("covidafdose1")
    var dose2taken=getElementVal("dose2taken")
    var dose2side=getElementVal("dose2sideeff")
    var covidafdose2=getElementVal("covidafdose2")
    var booster = getElementVal("booster");
  
    saveMessages(name, email, age, phone, gender, year, branch, section, vaccine, dose1taken, dose1type, dose1side, covidafdose1, dose2taken, dose2side, covidafdose2, booster);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, email, age, phone, gender, year, branch, section, vaccine, dose1taken, dose1type, dose1side, covidafdose1, dose2taken, dose2side, covidafdose2, booster) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      email:email, 
      age:age, 
      phone:phone, 
      gender:gender, 
      year:year, 
      branch:branch, 
      section:section, 
      vaccine:vaccine, 
      dose1taken:dose1taken, 
      dose1type:dose1type, 
      dose1side:dose1side, 
      covidafdose1:covidafdose1, 
      dose2taken:dose2taken, 
      dose2side:dose2side, 
      covidafdose2:covidafdose2, 
      booster:booster
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  function enableBrand(answer){
    console.log(answer.value);
    if(answer.value=="Yes"){
        document.getElementById('carbrand').classList.remove('form-hide');
        
    }
    else{
        document.getElementById('carbrand').classList.add('form-hide'); 
    }
};

function enableBrand1(answer){
  console.log(answer.value);
  if(answer.value=="Yes"){
      document.getElementById('carbrand1').classList.remove('form-hide1');
      
  }
  else{
      document.getElementById('carbrand1').classList.add('form-hide1'); 
  }
};