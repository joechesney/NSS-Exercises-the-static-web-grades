var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var a = 0; /// obv counters for each grade letter
var b = 0;
var c = 0;
var d = 0;
var f = 0;
var low = 101; // set this to higher than possible, to make logic work below
var high = 0;
for (var i = 0; i < scores.length; i++) {
    var g = scores[i];
    if ((g <= 60) && (g >= 50)) {
        f++;
    } else if ((g <= 70) && (g >= 61)) {
        d++
    } else if ((g <= 80) && (g >= 71)) {
        c++;
    } else if ((g <= 90) && (g >= 81)) {
        b++;
    }else if ((g <= 100) && (g >= 91)) {
        a++;
    }
    if(g < low) {
        low = g;
    } 
    if (g > high) {
        high = g;
    }

}



console.log("There were " + a + " grades of A.")
console.log("There were " + b + " grades of B.")
console.log("There were " + c + " grades of C.")
console.log("There were " + d + " grades of D.")
console.log("There were " + f + " grades of F.")
console.log("The highest grade was " + high + ".")
console.log("The lowest grade was " + low + ".")

