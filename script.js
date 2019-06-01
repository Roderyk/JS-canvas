var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.font = "28px Arial";
var currentTime
var czas2
var czas = setInterval(function () {
    currentTime = new Date
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    czas2 = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
    ctx.fillText(czas2, 50, 50);
}, 1000)

var canvas2 = document.getElementById("myCanvas2");
var ctx2 = canvas2.getContext("2d");

ctx2.lineWidth = 4
ctx2.fillStyle = "#cc0"
//ctx2.fillRect(10, 180, 10, -100)
//ctx2.fillRect(30, 180, 10, -100)
var wartosci = [100, 30, 50, 70, 35, 123, 134, 15, 30, 126]
var kolory = ["#800000", "#00FF00", "#FFFF00", "#000080", "#0000FF", "#00FFFF", "#000000", "#C0C0C0", "#009999"]

for (let i = 0; i < wartosci.length; i++) {
    ctx2.fillStyle = kolory[Math.floor(Math.random() * 9)]
    ctx2.fillRect(20 * i + 20, 180, 10, -wartosci[i])
}

var canvas3 = document.getElementById("myCanvas3");
var ctx3 = canvas3.getContext("2d");

var color = "#f6b73c"
var stroke = 3
const inColor = document.getElementById("color");
const inStroke = document.getElementById("stroke")
const btnOk = document.getElementById("ok");

btnOk.onclick = function() {
    
    color = inColor.value;
    stroke = parseInt(inStroke.value);
}


var odcinek = null;
var rect = null;
var Tryb = 0;
var BtnTryb = document.getElementById("tryb");

BtnTryb.onclick = function () {
    if (Tryb == 0){
        Tryb = 1
    }
    else {
        Tryb = 0
    }
}

canvas3.onmousedown = function (ev) {
    if(Tryb == 0) {
    odcinek = {}
    odcinek.x0 = ev.pageX - this.offsetLeft;
    odcinek.y0 = ev.pageY - this.offsetTop;
    }
    else {
        Tryb = 11
    }
};
canvas3.onmousemove = function (ev) {
    if (odcinek) {
        odcinek.x1 = ev.pageX - this.offsetLeft;
        odcinek.y1 = ev.pageY - this.offsetTop;
        ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
        ctx3.strokeStyle = color;
        ctx3.lineWidth = stroke;
        ctx3.beginPath();
        ctx3.moveTo(odcinek.x0, odcinek.y0);
        ctx3.lineTo(odcinek.x1, odcinek.y1);
        ctx3.stroke();
    }
    else if (Tryb == 11) {
        
        rect = {}
        rect.x0 = ev.pageX - this.offsetLeft;
        rect.y0 = ev.pageY - this.offsetTop;
       
        ctx3.fillStyle = color;
        ctx3.lineWidth = 1; 
        ctx3.fillRect(rect.x0, rect.y0, stroke, stroke);
        rect = null;
        
        
        
    }
};
canvas3.onmouseup = function (ev) {
    if (Tryb == 0) {
    ctx3.strokeStyle = color;
    ctx3.lineWidth = stroke;
    ctx3.beginPath();
    ctx3.moveTo(odcinek.x0, odcinek.y0);
    ctx3.lineTo(odcinek.x1, odcinek.y1);
    ctx3.stroke();
    odcinek = null
    }
    else {
        Tryb = 1
    }
}

// ctx3.strokeStyle = "Blue";
// ctx3.lineWidth = 2;
// ctx3.beginPath();
// ctx3.moveTo(40, 40);
// ctx3.lineTo(170, 100);
// ctx3.stroke();