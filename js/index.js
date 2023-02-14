let navButton = document.getElementById("navbutton");
let cardsContainer = document.getElementById("cards-container");
let cards = [
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},

]

let cartona = ``;
for (let i = 0; i < cards.length; i++) {
  cartona += `   
    <div class="col-lg-4  col-sm-12 ">
    <div class="card ">
<div class="w-100 d-flex justify-content-center about-section">

</div>
<div class=" text-about-section">


<h6>${cards[i].label}</h6>
<p>${cards[i].text}</p>
</div>

</div>
</div>
    `
}

cardsContainer.innerHTML = cartona;

$(".navbar-toggler").click(function () {
  $(".nav-item-res").animate({
    opacity: "1",
    marginBottom: "15px"
  }, 1000)
})

$(".closebtn").click(function () {
  $(".nav-item-res").animate({
    opacity: "0",
    marginBottom: "0px"
  },0);
})
$("#greyDiv").click(function () {
  $(".nav-item-res").animate({
    opacity: "0",
    marginBottom: "0px"
  },0);
})
$(document).ready(function () {
  $(".nav-item-res a").click(function (){
    $(".nav-item-res a.active").removeClass("active");
    $(this).addClass("active");
  });
});
document.getElementById("greyDiv").style.display = "none ";


function openNav() {
  document.getElementById("mySidenav").style.width = "65%";
  document.getElementById("greyDiv").style.display = "block";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0%";
  document.getElementById("greyDiv").style.display = "none ";


}
