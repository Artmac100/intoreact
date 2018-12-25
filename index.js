var sendRequest = function(url) {
  $.ajax({
    type:  "GET",
    url:   url.replace(/\{.+\}/g, ''),
    error: function(xhr, status, error) {
      $("#response").html("Got error: " + error);
    },
    success: function(data) {
      data = Array.isArray(data) ? data : [data];
      var html = "";

      data.forEach(function(item) {
        for (var key in item) {
          if (/\_url/.test(key)) {
            html += "<div>" + key + ": " + "<a class='more-data' href>" + item[key] + "</a></div>";
          } else {
            html += "<div>" + key + ": " + item[key] + "</div>";
          }
        }
        html += "<br />";
      });
      $("#response").html(html);
    }
  });
};

$("#search").click(function() {
  var username = $("#username-input").val().trim();
  sendRequest("https://api.github.com/usавers/" + username);
});

$(document).on("click", "a.more-data", function(event) {
  event.preventDefault();
  sendRequest($(this).text());
});
