function fetchGitHubInformation(event) {

    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="loader.gif" alt="loading..." />
        </div>`);

  $.when(
    $.getJSON(`https://api.github.com/users/${username}`)
  ).then(
    function(response) {
        var userData = response;
        $("#gh-user-data").html(userInformationHTML(userData));
    })
}

