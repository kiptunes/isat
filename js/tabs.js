

function openTab(evt, tabName) {
  var tab_content, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tab_content = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tab_content.length; i++) {
    tab_content[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
} 

function showSection(evt, section) {

  var gallery_content = document.getElementsByClassName("gallery-content");
  for (var i = 0; i < gallery_content.length; i++) {
   if (section == "all") {
    gallery_content[i].style.display = "block";
   } else {
    gallery_content[i].style.display = "none";
   }
  }

  buttons = document.getElementsByClassName("gallery-label");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(" active", "");
  }

  evt.currentTarget.className += " active";
  document.getElementById("gallery-" + section).style.display = "block";
}