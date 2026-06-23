const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

slides[current].classList.remove("active");

current++;

if(current >= slides.length){
current = 0;
}

slides[current].classList.add("active");

},3000);



const reviews = document.querySelectorAll(".review");

let reviewIndex = 0;

setInterval(()=>{

reviews[reviewIndex].classList.remove("active");

reviewIndex++;

if(reviewIndex >= reviews.length){
reviewIndex = 0;
}

reviews[reviewIndex].classList.add("active");

},2500);