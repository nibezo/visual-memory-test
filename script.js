function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function initMatrix(btn) {
    if (getRandomInt(2) === 1) {
        btn.classList.add("active");
        console.log(getRandomInt(2)); 
    }
    else {
        btn.classList.add("inactive");
    }
}
var btn_1 = document.getElementById('btn_1');
var btn_2 = document.getElementById('btn_2');
var btn_3 = document.getElementById('btn_3');
var btn_4 = document.getElementById('btn_4');
var btn_5 = document.getElementById('btn_5');
var btn_6 = document.getElementById('btn_6');
var btn_7 = document.getElementById('btn_7');
var btn_8 = document.getElementById('btn_8');
var btn_9 = document.getElementById('btn_9');
var btn_10 = document.getElementById('btn_10');
var btn_11 = document.getElementById('btn_11');
var btn_12 = document.getElementById('btn_12');
var btn_13 = document.getElementById('btn_13');
var btn_14 = document.getElementById('btn_14');
var btn_15 = document.getElementById('btn_15');
var btn_16 = document.getElementById('btn_16');
let change = new Boolean(false);
initMatrix(btn_1);
initMatrix(btn_2);
initMatrix(btn_3);
initMatrix(btn_4);
initMatrix(btn_5);
initMatrix(btn_6);
initMatrix(btn_7);
initMatrix(btn_8);
initMatrix(btn_9);
initMatrix(btn_10);
initMatrix(btn_11);
initMatrix(btn_12);
initMatrix(btn_13);
initMatrix(btn_14);
initMatrix(btn_15);
initMatrix(btn_16);

// btn_1.addEventListener("click", function() {
//   if (change === false) {
//       this.classList.add("active");
//       change = true;
//   }
//   else {
//       this.classList.remove("active");
//       change = false;
//   }
// });
// btn_1.addEventListener("click", function() {
//     this.classList.add("active");
// });
// btn_2.addEventListener("click", function() {
//   this.classList.add("active");
// });
// btn_3.addEventListener("click", function() {
//   this.classList.add("active");
// });
// btn_4.addEventListener("click", function() {
//   this.classList.add("active");
// });
// btn_5.addEventListener("click", function() {
//   this.classList.add("active");
// });
// btn_6.addEventListener("click", function() {
//   this.classList.add("active");
// });
// btn_7.addEventListener("click", function() {
//   this.classList.add("active");
// });
// btn_8.addEventListener("click", function() {
//   this.classList.add("active");
// });
// btn_9.addEventListener("click", function() {
//   this.classList.add("active");
// });
// btn_10.addEventListener("click", function() {
//   this.classList.add("active");
// });
// btn_11.addEventListener("click", function() {
//   this.classList.add("active");
// });
// btn_12.addEventListener("click", function() {
//   this.classList.add("active");
// });
// btn_13.addEventListener("click", function() {
//   this.classList.add("active");
// });
// btn_14.addEventListener("click", function() {
//   this.classList.add("active");
// });
// btn_15.addEventListener("click", function() {
//   this.classList.add("active");
// });
// btn_16.addEventListener("click", function() {
//   this.classList.add("active");
// });