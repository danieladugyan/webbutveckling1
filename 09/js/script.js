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

// MY CODE

/*function toggleMenu() { // doesn't work properly
  let toggle = document.querySelector(".toggle");
  let item = document.querySelector(".item");

  let i = document.querySelector("i");
  i.classList.add("fas")

  if (item.classList.contains("show")) {
    item.classList.remove("show");
    i.classList.add("fa-bars");
    toggle.children.querySelector("a").appendChild(i);
  } else {
    item.classList.add("show");
    i.classList.add("fa-times");
    toggle.children.querySelector("a").removeChild(i);
  }
}*/

let date = new Date();

let yearsFromNow = 1; // 1 year
let timeFromNow = 1; // 1 month

dateTime =`${date.getFullYear()}-${(date.getMonth()+1).toString().
  padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}T${date.getHours()}:${
  date.getMinutes().toString().padStart(2, 0)}`;

dateTimeMax =`${date.getFullYear()}-${((date.getMonth()+1)+timeFromNow).toString().
  padStart(2, 0)}-${(date.getDate()+1).toString().padStart(2, 0)}T00:00`;

dateMax = `${date.getFullYear()+yearsFromNow}-${(date.getMonth()+1).toString().
  padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;

date = `${date.getFullYear()}-${(date.getMonth()+1).toString().
  padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;

let dateFields = document.querySelectorAll("input[type=date]");
let dateTimeFields = document.querySelectorAll("input[type=datetime-local]");

dateFields.forEach((field) => {
  field.value = date;
  field.min = date;
  field.max = dateMax;
});

dateTimeFields.forEach((field) => {
  field.value = dateTime;
  field.min = dateTime;
  field.max = dateTimeMax;
});
