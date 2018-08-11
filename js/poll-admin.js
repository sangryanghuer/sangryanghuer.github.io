(function($) {
  "use strict"; // Start of use strict

    var pollStaticRef = firebase.database().ref('/poll-static/');
    
    pollStaticRef.on('child_added', function (data) {
      // console.log("id: " + data.val().id);
      // console.log("enable: " + data.val().enable);
      // console.log("url: " + data.val().url);
      // console.log("ref: " + data.ref);
      // console.log("enable ref: " + data.ref+"/enable/");

      var htmlString = "";
      htmlString += '<div class="col-sm-4">';
      htmlString += '<div class="team-member">';
      htmlString += `<h5>${data.val().name}</h5>`;
      htmlString += '<p>';
      htmlString += `<a id="btn-enable-${data.val().id}" class="m-1 btn btn-secondary text-white text-uppercase js-scroll-trigger">ON</a>`;
      htmlString += `<a id="btn-disable-${data.val().id}" class="m-1 btn btn-secondary text-white text-uppercase js-scroll-trigger">OFF</a>`;
      htmlString += '</p>';
      if (data.val().enable) {
        htmlString += `<a id="${data.val().id}" class="visible btn btn-danger text-uppercase js-scroll-trigger" href="${data.val().url}" target="_blank">POLL</a>`;
      }
      else {
        htmlString += `<a id="${data.val().id}" class="invisible btn btn-danger text-uppercase js-scroll-trigger" href="${data.val().url}" target="_blank">POLL</a>`;
      }
      htmlString += '<div>';
      htmlString += '</div>';

      $("#js-poll").append(htmlString);

      $(`#btn-enable-${data.val().id}`).on("click", function(){
        console.log(`Enabling ${data.val().id}...`);

        firebase.database().ref('poll-static/' + data.key).update({
          enable: true
        });

      });

      $(`#btn-disable-${data.val().id}`).on("click", function(){
        console.log(`Disabling ${data.val().id}...`);

        firebase.database().ref('poll-static/' + data.key).update({
          enable: false
        });
      });

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