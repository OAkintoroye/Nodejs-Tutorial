//basic syntax for java script
/*var name = 'Max';
var age = 29;
var hashobby = true;

const name = 'Max';
let age = 29;
const hashobby = true;

age = 30;

console.log(name);

// => is called an arrow function

const summerizeUser = (username,userage,userhashobby) =>{
    return 'Name is ' + username + ' , age is ' + userage + ' and the user has hobbies '+ userhashobby;
};
//both functions above and below perform the same thing
function summariseUser(username, userage, userhashobby){
    return 'Name is ' + username + ' , age is ' + userage + ' and the user has hobbies '+ userhashobby;
};
console.log(summariseUser(name,age,hashobby));

const add = (a,b) =>{return a+b;};
//both are the same :D
const add2 = (a,b) =>a+b;
console.log(add(1,2));
console.log(add2(1,2));

const addOne = a => a + 1;
console.log(addOne(1));

//function with no arguements must have an empty partenthesis
const addRandom = () => 1 + 2;
*/
//***************************************** */

//Working with objects

const person = {
//key-value pairs
    name : 'Max',
    age : 29,
    //cannot user arrow function with the below key:value
    //'this' will have a global scope, instead of a scope of just
    // the function

    //use either of the following below:
    // greet(){} or greet: function(){}
    greet: function(){
        console.log('Hi, I am '+ this.name);
    }
};

//using {} is called destructoring, this is used to directly
//target certian attributes of an object

//for example below, the person object is passed into the printName function
// the print name function uses ({name}) to directly access the name attribute stored
// within the person object


const printName = ({name}) =>{
    console.log(name);
}
printName(person);
//this method of destructoring can also be used to access more than
//one attribute of an object

//syntax : const {list of attributes} = object ; 
//the value in the attributes are then stored in the same name!
const {name, age} = person;
console.log(name,age);
//this can also be done for arrays (destructoring)
const hobbies = ['Sports','Cooking'];
const [hobby1,hobby2] = hobbies;
console.log(hobby1,hobby2);

//person.greet();

/******************************* */

//arrays


//const hobbies = ['Sports','Cooking'];
/*for(let hobby of hobbies){
    console.log(hobby);
}

console.log(hobbies.map(hobby=>'Hobby: ' + hobby));
console.log(hobbies);
*/
//hobbies.push('Programming');
//console.log(hobbies);
//const copiedarray = hobbies.slice();
//console.log(copiedarray);

/***************************** */

//rest and spread
//const copiedArray = [hobbies]; //creates a nested array :(

// "..."  is a spread and rest operator, name differs depending on where it is placed

//spread = pull elements or properties out of arrays or objects
//rest = merge multiple arguments into an array and is used in an argument list of a function

//const copiedArray = [...hobbies]; // copy an existing array into another array
//console.log(copiedArray);

//although hobbies is constant, we are not modifing hobbies, but what it is pointing to

//works with objects too!
//const copiedPerson = {...person};
//console.log(copiedPerson);

/*const toArray = (arg1,arg2,arg3) =>{

    return[arg1,arg2,arg3];
};

console.log(toArray(1,2,3));
*/
//but what if we want to pass an additional number into the toArray function

// we can use rest!!
/*const toArray = (...args) =>{

    return args;
};

console.log(toArray(1,2,3,4,5));

*/


