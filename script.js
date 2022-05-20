function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
function initMatrix(btn) {
    if (getRandomInt(2) === 1) {
        btn.classList.add("active");
        matrix[index] = 1;
        index = index + 1;
    }
    else {
        btn.classList.add("inactive");
        matrix[index] = 0;
        index = index + 1;
    }
    console.log(matrix);
}
function init() {
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

}
function deleteColors(btn) {
    btn.classList.remove("active");
}
function sleepforMatrix() {
    sleep(4000).then(() => {
        deleteColors(btn_1);
        deleteColors(btn_2);
        deleteColors(btn_3);
        deleteColors(btn_4);
        deleteColors(btn_5);
        deleteColors(btn_6);
        deleteColors(btn_7);
        deleteColors(btn_8);
        deleteColors(btn_9);
        deleteColors(btn_10);
        deleteColors(btn_11);
        deleteColors(btn_12);
        deleteColors(btn_13);
        deleteColors(btn_14);
        deleteColors(btn_15);
        deleteColors(btn_16);
    });
    change = true;
    console.log(change);
}
const matrix = [];
index = 0;
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
init();
sleepforMatrix();
btn_1.addEventListener("click", function() {
  if (change === false) {
      this.classList.add("active");
      change = true;
  }
  else {
      this.classList.remove("active");
      change = false;
  }
});