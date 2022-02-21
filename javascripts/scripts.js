var skillsList = [13];
skillsList[0] = "/images/Java.png";
skillsList[1] = "/images/Python.png";
skillsList[2] = "/images/C.png";
skillsList[3] = "/images/Js.png";
skillsList[4] = "/images/Oracle.png";
skillsList[5] = "/images/Sqlserver.png";
skillsList[6] = "/images/Postgres.jpeg";
skillsList[7] = "/images/Mongo.jpeg";
skillsList[8] = "/images/R.jpeg";
skillsList[9] = "/images/Pentaho.png";
skillsList[10] = "/images/Sap.png";
skillsList[11] = "/images/Linux.png";
skillsList[12] = "/images/Windows.png";

c = document.getElementById('skills');

var i = 0;
if (c) {
    loop = function () {
        var j = i % 13;
        c.src = skillsList[j];
        i++;
    };
    speed = 2000;
    var timer = setInterval(loop, speed);
}