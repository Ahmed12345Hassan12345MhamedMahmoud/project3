/* ==========================
         Skills
   ========================== */

let Section = document.querySelector(".our-skills");
let Spans = document.querySelectorAll(".skill span");

window.onscroll = function () {
  if (window.scrollY >= Section.offsetTop) {
    Spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

/* ==========================
          StatsDate
    ========================== */

let CountDowDate = new Date("Dec 31 , 2023 23:59:59").getTime();

let Counter = setInterval(() => {
  let DateNew = new Date().getTime();

  let DateDiff = CountDowDate - DateNew;

  let Days = Math.floor(DateDiff / (1000 * 60 * 60 * 24));
  let Hours = Math.floor((DateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let Minutes = Math.floor((DateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let Seconds = Math.floor((DateDiff % (1000 * 60)) / 1000);

  document.getElementById("Days").innerHTML = Days;
  document.getElementById("Hours").innerHTML = Hours;
  document.getElementById("Minutes").innerHTML = Minutes;
  document.getElementById("Seconds").innerHTML = Seconds;

  if (DateDiff < 0) {
    clearInterval();
  }
}, 1000);
