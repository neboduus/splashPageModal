
function openNav() {
  console.log('item: ', localStorage.getItem("showModal"));
  if (localStorage.getItem("showModal") == null){
    localStorage.setItem("showModal", "showModal");
    document.getElementById("myNav").style.width = "100%";
  }
};

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
};
$(document).ready(function() {
      openNav();
});
