$(document).ready(function(){
  $(".active").removeClass("active")
  $(`#l-${window.location.pathname.substring(1)}`).addClass("active");
})