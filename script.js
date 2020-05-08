let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    document.getElementById("gitHub").innerHTML = gitObject[0].owner.login;
    document.getElementById("gitHub1").innerHTML = gitObject[1].name;
    document.getElementById("gitHub2").innerHTML = gitObject[2].name;
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/tega33/repos", true);
gitHubRequest.send();

$(document).ready(function(){
  $(".social").hover(function(){
  $(this).css("height", "150px").css("width", "150px");
},
  function(){
    $(this).css("height","100px").css("width", "100px");
  })});