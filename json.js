//clint theke kono kicur jonne request pathai server a and
//server patahai clints er kace.
//jokhon server a kono kicur jonne request kora hoy tokhon
//seti akti text format onosoron kore servere jai.
//text format ti holo JSON string text format.and server
//side theke kono kicu pawar jonne request korle tokhon she
//JSON string format a pai.karon Jason String format k
// all language support kore.
//JSON er meaning holo Javascript object Notation.
//tar mane JSON javascript er object er motoi but object na.
//JASON sob somoy js object er moto kore string return kore.
//JASON er property and value "" er bitore thake without number and boolean.


//example:1
const user = {
    id: 505,
    name: 'Gorib Khan',
    job: 'actor',
    address:'mohakhali dhaka-1212'
}
//example:1 holo akti pure javascript object.
//pure js object tike jodi amra JASON mane object text formate ropantor korte chay tahole.

const objectToJson = JSON.stringify(user);
console.log(objectToJson);
// { "id": 505, "name": "Gorib Khan", "job": "actor", "address": "mohakhali dhaka-1212" }


//example:2 amra jodi JSON text format tike abar pure js objecte ropantor korte chay tahole.
const jsonToObject = JSON.parse(objectToJson);
console.log(jsonToObject);