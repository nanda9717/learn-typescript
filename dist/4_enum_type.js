"use strict";
// enum
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 0] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 1] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 2] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 3] = "Thursday";
    Weekdays[Weekdays["Friday"] = 4] = "Friday";
    Weekdays[Weekdays["Saturday"] = 5] = "Saturday";
    Weekdays[Weekdays["Sunday"] = 6] = "Sunday";
})(Weekdays || (Weekdays = {}));
console.log("Enum: " + Weekdays + " == " + Weekdays.Monday + " == " + Weekdays.Sunday + " == " + Weekdays[2]);
// Output - Enum: [object Object] == 0 == 6 == Wednesday
var Weekdays2;
(function (Weekdays2) {
    Weekdays2[Weekdays2["Monday"] = 1] = "Monday";
    Weekdays2[Weekdays2["Tuesday"] = 2] = "Tuesday";
    Weekdays2[Weekdays2["Wednesday"] = 3] = "Wednesday";
    Weekdays2[Weekdays2["Thursday"] = 4] = "Thursday";
    Weekdays2[Weekdays2["Friday"] = 5] = "Friday";
    Weekdays2[Weekdays2["Saturday"] = 6] = "Saturday";
    Weekdays2[Weekdays2["Sunday"] = 7] = "Sunday";
})(Weekdays2 || (Weekdays2 = {}));
console.log("Enum: " + Weekdays2 + " == " + Weekdays2.Monday + " == " + Weekdays2.Sunday + " == " + Weekdays2[2]);
// Output - Enum: [object Object] == 1 == 7 == Tuesday
var Weekdays3;
(function (Weekdays3) {
    Weekdays3[Weekdays3["Monday"] = 1] = "Monday";
    Weekdays3[Weekdays3["Tuesday"] = 2] = "Tuesday";
    Weekdays3[Weekdays3["Wednesday"] = 3] = "Wednesday";
    Weekdays3[Weekdays3["Thursday"] = 4] = "Thursday";
    Weekdays3[Weekdays3["Friday"] = 5] = "Friday";
    Weekdays3[Weekdays3["Saturday"] = 6] = "Saturday";
    Weekdays3[Weekdays3["Sunday"] = 0] = "Sunday";
})(Weekdays3 || (Weekdays3 = {}));
console.log("Enum: " + Weekdays3 + " == " + Weekdays3.Monday + " == " + Weekdays3.Sunday + " == " + Weekdays3[2]);
// Output - Enum: [object Object] == 1 == 0 == Tuesday 
var Weekdays4;
(function (Weekdays4) {
    Weekdays4[Weekdays4["NotFound"] = 404] = "NotFound";
    Weekdays4[Weekdays4["Success"] = 200] = "Success";
    Weekdays4[Weekdays4["Accepted"] = 202] = "Accepted";
    Weekdays4[Weekdays4["BadRequest"] = 400] = "BadRequest";
})(Weekdays4 || (Weekdays4 = {}));
console.log("Enum: " + Weekdays4 + " == " + Weekdays4.NotFound + " == " + Weekdays4.Success);
// Output - Enum: [object Object] == 404 == 200
var Weekdays5;
(function (Weekdays5) {
    Weekdays5["Monday"] = "mon";
    Weekdays5["Tuesday"] = "tues";
    Weekdays5["Wednesday"] = "wed";
    Weekdays5["Thursday"] = "thur";
    Weekdays5["Friday"] = "fri";
    Weekdays5["Saturday"] = "sat";
    Weekdays5["Sunday"] = "sun";
})(Weekdays5 || (Weekdays5 = {}));
console.log("Enum: " + Weekdays5 + " == " + Weekdays5.Monday + " == " + Weekdays5.Sunday);
// Output - Enum: [object Object] == mon == sun
