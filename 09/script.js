$(function() {
  $(".toggle").on("click", function() {
    if ($(".item").hasClass("active")) {
      $(".item").removeClass("active");
      $(this).find("a").html("<i class='fas fa-bars'></i>");
    } else {
      $(".item").addClass("active");
      $(this).find("a").html("<i class='fas fa-times'></i>");
    }
  });
});

/*function toggleMenu() {
  let x = document.querySelector(".navbar");
  if (x.className === "navbar") {
    x.className += " phone";
  } else {
    x.className = "navbar";
  }
}*/
