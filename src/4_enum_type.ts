// enum

enum Weekdays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
console.log("Enum: "+Weekdays+" == "+Weekdays.Monday+" == "+Weekdays.Sunday+" == "+Weekdays[2]);
// Output - Enum: [object Object] == 0 == 6 == Wednesday

enum Weekdays2 {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
console.log("Enum: "+Weekdays2+" == "+Weekdays2.Monday+" == "+Weekdays2.Sunday+" == "+Weekdays2[2]);
// Output - Enum: [object Object] == 1 == 7 == Tuesday

enum Weekdays3 {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday = 0
}
console.log("Enum: "+Weekdays3+" == "+Weekdays3.Monday+" == "+Weekdays3.Sunday+" == "+Weekdays3[2]);
// Output - Enum: [object Object] == 1 == 0 == Tuesday 

enum Weekdays4 {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
console.log("Enum: "+Weekdays4+" == "+Weekdays4.NotFound+" == "+Weekdays4.Success);
// Output - Enum: [object Object] == 404 == 200

enum Weekdays5 {
    Monday = 'mon',
    Tuesday = 'tues',
    Wednesday = 'wed',
    Thursday = 'thur',
    Friday = 'fri',
    Saturday = 'sat',
    Sunday = 'sun'
}
console.log("Enum: "+Weekdays5+" == "+Weekdays5.Monday+" == "+Weekdays5.Sunday);
// Output - Enum: [object Object] == mon == sun
