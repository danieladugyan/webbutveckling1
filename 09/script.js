$(function() {
  $(".toggle").on("click", function() {
    if ($(".item").hasClass("show")) {
      $(".item").removeClass("show");
      $(this).find("a").html("<i class='fas fa-bars'></i>");
    } else {
      $(".item").addClass("show");
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
