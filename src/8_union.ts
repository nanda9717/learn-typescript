// union

let userId: number | string;
userId = 2893;
userId = '3892';
// userId = true; // Type 'boolean' is not assignable to type 'string | number'.

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');
// Output - 
// My status code is 404.
// My status code is 404.
