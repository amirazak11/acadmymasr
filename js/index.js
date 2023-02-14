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
