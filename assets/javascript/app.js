// DROP DOWN LINKS
$(".dropbtn").on("click", function () {
  let dropId = $(this).data("id");
  $(`.dropdown-content[dropdown-id='${dropId}']`).toggleClass("show");
})

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

