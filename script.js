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
        btn.classList.add("none");
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
function btn_1_Check() {
    if (matrix[0] == 1) {
        btn_1.classList.add("active");
    }
    else {
        btn_1.classList.add('inactive')
        incorrect = incorrect + 1;
    }
}
function btn_2_Check() {
    if (matrix[1] == 1) {
        btn_2.classList.add("active");
    }
    else {
        btn_2.classList.add('inactive')
        incorrect = incorrect + 1;
    }
}
function btn_3_Check() {
    if (matrix[2] == 1) {
        btn_3.classList.add("active");
    }
    else {
        btn_3.classList.add('inactive')
        incorrect = incorrect + 1;
    }
}
function btn_4_Check() {
    if (matrix[3] == 1) {
        btn_4.classList.add("active");
    }
    else {
        btn_4.classList.add('inactive')
        incorrect = incorrect + 1;
    }
}
function btn_5_Check() {
    if (matrix[4] == 1) {
        btn_5.classList.add("active");
    }
    else {
        btn_5.classList.add('inactive')
        incorrect = incorrect + 1;
    }
}
function btn_6_Check() {
    if (matrix[5] == 1) {
        btn_6.classList.add("active");
    }
    else {
        btn_6.classList.add('inactive')
        incorrect = incorrect + 1;
    }
}
function btn_7_Check() {
    if (matrix[6] == 1) {
        btn_7.classList.add("active");
    }
    else {
        btn_7.classList.add('inactive')
        incorrect = incorrect + 1;
    }
}
function btn_8_Check() {
    if (matrix[7] == 1) {
        btn_8.classList.add("active");
    }
    else {
        btn_8.classList.add('inactive')
        incorrect = incorrect + 1;
    }
}
function btn_9_Check() {
    if (matrix[8] == 1) {
        btn_9.classList.add("active");
    }
    else {
        btn_9.classList.add('inactive')
        incorrect = incorrect + 1;
    }
}
function btn_10_Check() {
    if (matrix[9] == 1) {
        btn_10.classList.add("active");
    }
    else {
        btn_10.classList.add('inactive')
        incorrect = incorrect + 1;
    }
}
function btn_11_Check() {
    if (matrix[10] == 1) {
        btn_11.classList.add("active");
    }
    else {
        btn_11.classList.add('inactive')
        incorrect = incorrect + 1;
    }
}
function btn_12_Check() {
    if (matrix[11] == 1) {
        btn_12.classList.add("active");
    }
    else {
        btn_12.classList.add('inactive')
        incorrect = incorrect + 1;
    }
}
function btn_13_Check() {
    if (matrix[12] == 1) {
        btn_13.classList.add("active");
    }
    else {
        btn_13.classList.add('inactive')
        incorrect = incorrect + 1;
    }
}
function btn_14_Check() {
    if (matrix[13] == 1) {
        btn_14.classList.add("active");
    }
    else {
        btn_14.classList.add('inactive')
        incorrect = incorrect + 1;
    }
}
function btn_15_Check() {
    if (matrix[14] == 1) {
        btn_15.classList.add("active");
    }
    else {
        btn_15.classList.add('inactive')
        incorrect = incorrect + 1;
    }
}
function btn_16_Check() {
    if (matrix[15] == 1) {
        btn_16.classList.add("active");
    }
    else {
        btn_16.classList.add('inactive')
        incorrect = incorrect + 1;
    }
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
let incorrect = 0;
init();
sleepforMatrix();
addEventListener("click", function() {
    console.log('click');
});
// btn_2.addEventListener("click", function() {
//       this.classList.add("active");
// });
// btn_3.addEventListener("click", function() {
//       this.classList.add("active");
// });
// btn_4.addEventListener("click", function() {
//       this.classList.add("active");
// });
// btn_5.addEventListener("click", function() {
//       this.classList.add("active");
// });
// btn_6.addEventListener("click", function() {
//       this.classList.add("active");
// });
// btn_7.addEventListener("click", function() {
//       this.classList.add("active");
// });
// btn_8.addEventListener("click", function() {
//       this.classList.add("active");
// });
// btn_9.addEventListener("click", function() {
//       this.classList.add("active");
// });
// btn_10.addEventListener("click", function() {
//       this.classList.add("active");
// });
// btn_11.addEventListener("click", function() {
//       this.classList.add("active");
// });
// btn_12.addEventListener("click", function() {
//       this.classList.add("active");
// });
// btn_13.addEventListener("click", function() {
//       this.classList.add("active");
// });
// btn_14.addEventListener("click", function() {
//       this.classList.add("active");
// });
// btn_15.addEventListener("click", function() {
//       this.classList.add("active");
// });
// btn_16.addEventListener("click", function() {
//       this.classList.add("active");
// });