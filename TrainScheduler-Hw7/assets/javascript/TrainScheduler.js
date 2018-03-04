$(document).ready(function(){
  //firebase key//
    
var config = {
    apiKey: "AIzaSyDaDLnloqGyJfOhA4GJ0arlA0qa66vS-tc",
    authDomain: "trainscheduler-hw7.firebaseapp.com",
    databaseURL: "https://trainscheduler-hw7.firebaseio.com",
    projectId: "trainscheduler-hw7",
    storageBucket: "",
    messagingSenderId: "954594649521"
};
 // Initialize Firebase
firebase.initializeApp(config);
// When adding trains, administrators should be able to submit the following:
var trainData=firebase.database();

$('#addTrainName').on("click", function(){
    //user input//
// Train Name
    var trainName=$("#TrainName-input").val();
// Destination
    var destination=$("#Destination-input").val();
// First Train Time -- in military time
    var firstTrain=$("#Time-input").val();
// Frequency -- in minutes
    var frecuency=$("#Frecuency-input").val();
}


);


//train data
//object?
var newTrainData={
 name=$( "trainName"),
 destination=$("destination"),
firstTrain=$("time"),
frecuency=$('frecuency'),

};


// Code this app to calculate when the next train will arrive; this should be relative to the current time.

// Users from many different machines must be able to view same train times.
$(document).ready(function(){
    $("button").click(function(){
        alert("Value: " + $("#test").val());
    }
)
}
)})