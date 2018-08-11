(function($) {
  "use strict"; // Start of use strict

    var pollStaticRef = firebase.database().ref('/poll-static/');

    pollStaticRef.on('child_added', function (data) {
      // console.log("id: " + data.val().id);
      // console.log("enable: " + data.val().enable);
      // console.log("url: " + data.val().url);

      var htmlString = "";
      htmlString += '<div class="col-sm-4">';
      htmlString += '<div class="team-member">';
      htmlString += `<h5>${data.val().name}</h5>`;
      if (data.val().enable) {
        htmlString += `<a id="${data.val().id}" class="visible btn btn-danger text-uppercase js-scroll-trigger" href="${data.val().url}" target="_blank">POLL</a>`;
      }
      else {
        htmlString += `<a id="${data.val().id}" class="invisible btn btn-danger text-uppercase js-scroll-trigger" href="${data.val().url}" target="_blank">POLL</a>`;
      }
      htmlString += '<div>';
      htmlString += '</div>';

      $("#js-poll").append(htmlString);
    });

    pollStaticRef.on('child_changed', function (data) {
      // console.log("id: " + data.val().id);
      // console.log("enable: " + data.val().enable);
      // console.log("url: " + data.val().url);

      $('#'+data.val().id).attr("href", data.val().url)
 
      if (data.val().enable) {
        $('#'+data.val().id).removeClass("invisible");
        $('#'+data.val().id).addClass("visible");
      }
      else {
        $('#'+data.val().id).removeClass("visible");
        $('#'+data.val().id).addClass("invisible");
      }
    });

})(jQuery); // End of use strict