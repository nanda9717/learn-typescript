"use strict";
// object type
let student;
student = {
    name: 'Nane',
    age: 25,
    isActive: true
};
console.log("Object : " + JSON.stringify(student) + " and type :" + (typeof student) + " and entry type : " + typeof student.name);
// Output - Object : {"name":"Nane","age":25,"isActive":true} and type :object and entry type : string
let studentNew = {
    name: 'Nane S',
    age: 22,
    isActive: false
};
console.log("Object : " + JSON.stringify(studentNew) + " and type :" + (typeof studentNew) + " and entry type: " + typeof studentNew.age);
let student1 = {
    name: 'John Doe',
    age: 25,
    isActive: true
};
console.log("Object : " + JSON.stringify(student1) + " and type :" + (typeof student1) + " and entry type: " + typeof student1.age);
// Object : {"name":"John Doe","age":25,"isActive":true} and type :object and entry type: number
let student2 = {
    name: 'Nane',
    age: 22,
    isActive: false
};
console.log("Object : " + JSON.stringify(student2) + " and type :" + (typeof student2) + " and entry type: " + typeof student2.age);
// Object : {"name":"Nane","age":22,"isActive":false} and type :object and entry type: number
// Optional
let user = {
    name: "Narendra",
    email: "nane@yopmail.com",
    age: 28
};
console.log("Object with optinal : " + JSON.stringify(user));
// Object with optinal : {"name":"Narendra","email":"nane@yopmail.com","age":28}
