'use strict';

// Bindings on load.
window.addEventListener('load', function () {

  var containerElement = document.getElementById("js-local");

  // Get a reference to the database service
  var mentorsRef = firebase.database().ref('/mentors/');
  mentorsRef.on('child_added', function (data) {
    // console.log("name: " + data.val().name);
    // console.log("name: " + data.val().title);
    // console.log("name: " + data.val().profile);
    // console.log("name: " + data.val().image);

    var out = "";
    out += '<div class="col-sm-4">'
    out += '<div class="team-member">';
    out += '  <img class="mx-auto rounded-circle" src="' + data.val().image + '" alt="">';
    out += '  <h4>' + data.val().name + '</h4>';
    out += '  <p class="text-primary">' + data.val().title + '</p>';
    out += '  <p class="text-muted">';
    out += data.val().profile;
    out += '  </p>';
    out += '</div>';
    out += '</div>';

    containerElement.innerHTML += out;
  });


  var pollRef = firebase.database().ref('/poll/');
  pollRef.on('value', function (data) {
    console.log("service: " + data.val().service);
    console.log("url: " + data.val().url);

    if (data.val().service == true) {
      var pollContainerElement = document.getElementById("js-poll");
      
      var out = "";
      out += '<div class="mt-4 col-md-12 text-center">';
      out += '<a class="btn btn-danger text-uppercase js-scroll-trigger" href="' + data.val().url + '">GO TO POLL</a>';
      out += '</div>';
 
      pollContainerElement.innerHTML = out;
    }
    else if (data.val().service == false) {
      var pollContainerElement = document.getElementById("js-poll");
      pollContainerElement.innerHTML = "";
    }
  });
}, false);
