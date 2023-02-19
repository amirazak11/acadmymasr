let navButton = document.getElementById("navbutton");
let cardsContainer = document.getElementById("cards-container");
let priceContainer = document.getElementById("price-container");
let feedbackContainer = document.getElementById("feedback-container");

let categorycards = [
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},

]
let pricecards = [
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},
  { img: "", label: " هذا النص هو مثال", text: "مده الدراسة 4 سنوات "},

]
let feedbackcards = [
  { img: "", name: " هذا   ",category: "التخصص", text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد "},

]

let cartona = ``;
for (let i = 0; i < categorycards.length; i++) {
  cartona += `   
    <div class="col-lg-4  col-sm-12 ">
    <div class="card ">
<div class="w-100 d-flex justify-content-center about-section">

</div>
<div class=" text-about-section">


<h6>${categorycards[i].label}</h6>
<p>${categorycards[i].text}</p>
</div>

</div>
</div>
    `
}

cardsContainer.innerHTML = cartona;
let pricecartona = ``;
for (let i = 0; i < categorycards.length; i++) {
  pricecartona += `   
  <div class="col-lg-4  col-sm-12 ">
  <div class="card-price ">
<h3>التخصص</h3>
<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص</p>
<h2>15000 <span>/جنيها</span></h2>
<div class="list">
<h4>تشمل المصاريف</h4>
<ul>
 <li>
<i class="fa-solid fa-check"></i>
هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،</li>
 <li>
 <i class="fa-solid fa-check"></i>
 هذا النص هو مثال لنص يمكن أن </li>
 <li>
 <i class="fa-solid fa-check"></i>
 هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،</li>
 <li>
 <i class="fa-solid fa-check"></i>
هذا النص هو مثال لنص يمكن أن </li>
 <li>
 <i class="fa-solid fa-check"></i>
هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،</li>
</ul>

</div>
</div>
</div>
    `
}

priceContainer.innerHTML = pricecartona;
let feedbackcartona = ``;
for (let i = 0; i < categorycards.length; i++) {
  feedbackcartona +=`
  <div class="col-lg-4 col-md-6  col-sm-12 ">
  <div class="feedback-card">
  <div class="ID">
    <img src="../acadmymasr/imgs/PHOTO.svg">
    <div class="id-inf">
      <h4>نبيل الصاوى</h4>
      <span>التخصص</span>
    </div>
  </div>
  <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد .</p>
</div>
</div> 
  `}

feedbackContainer.innerHTML = feedbackcartona;

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
