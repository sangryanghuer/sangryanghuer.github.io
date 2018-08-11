(function ($) {
  "use strict"; // Start of use strict

  $.getJSON("./data/local.json", function (data) {
    var out = "";
    var i;
    for (i = 0; i < data.length; i++) {
      out += '<div class="col-sm-4">'
      out += '<div class="team-member">';
      out += '  <img class="mx-auto rounded-circle" src="img/team/' + data[i].image + '" alt="">';
      out += '  <h4>' + data[i].name + '</h4>';
      out += '  <p class="text-primary">' + data[i].title + '</p>';
      out += '  <p class="text-muted">';
      out += data[i].profile;
      out += '  </p>';
      out += '</div>';
      out += '</div>';
    }
    document.getElementById("js-local").innerHTML = out;
  });

})(jQuery); // End of use strict