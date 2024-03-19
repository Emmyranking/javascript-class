// const firstName = "jonas";
// const job = "teacher";
// const birthday = "1991";
// const year = 2037;

// console.log("my name is " + firstName + " and i am a " + job + " by profession " + " i was born in the year " + birthday );


// const jonasNew = `my name is ${firstName}, i am a ${job} and i am ${year - birthday} years old`;
// console.log(jonasNew);

// console.log(`just a regular string....`)

// console.log(`multiple
// lines
// strings`)

// const age = 15;

// if (age >= 18){
//     console.log(`sarah can start driving license`);
// }
// else{
//     const yearsLeft = 18 - age;
//     console.log(`sarah is too youg. wait another ${yearsLeft} years`)
// }

// const johnMass = 1.95;
// const johnHeight = 92;
// const markMass = 78;
// const markHeight = 1.69;

// const BMIMark = markMass / (markHeight * markHeight);

// const BMIJohn  = johnMass / (johnHeight * johnHeight);

// console.log(
//     BMIJohn, BMIMark
// )

// if (BMIJohn >= BMIMark){
//     console.log("cool");
// }
// else{
//     console.log("great")
// }


// const inputYear = "1991";

// console.log(Number(inputYear));
// console.log(inputYear + 18);
// console.log(Number(inputYear + 18));
// console.log(Number(inputYear) + 18);

// console.log("i am " + 23 + " yearls old")
// console.log("23" - "10" +3);
// console.log("20" / "4");

// let n = "1" + 1;
// n = n - 1;

// console.log("1" + 1);
// console.log(n);

// console.log(2 + 3 + 4 + "5");
// console.log("10"-"3" - 2 +"5")

// const age = "15";
// console.log(Number(age) -6);

// console.log(Boolean (0));
// console.log(Boolean ("jonah"));
// console.log(Boolean({}));
// console.log(Boolean(''));


// const money = 1;
// if (money){
//     console.log("don't spend it all;");
// }
// else{
//     console.log("you should get a job!");
// }
// ;

// let height = 0.4;
// if (height){
//     console.log("YAY height is defined");

// }
// else {
//     console.log("height is undefined");
// }


// const age = 18;

// if(age === 18){
//     console.log("you just became an adult :;");
// }
// else{
//     console.log("you are not yet an adult :D")
// };


// console.log(18 == 18);
// console.log(18 === 19);
// console.log("18" == 18);

// const age = "18";
// if (age === 18){
//     console.log("you just becamme an adult    strict " )
// }
// if(age == 18){
//     console.log("you have also became an adult loose")
// }
// ;

// const favourite = prompt("what's your favorite number");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23){
//     console.log("cool! 23 is amazing");
// }

// else if (favourite == 7){
//     console.log("7 is also amzing");
// }
// else{
//     console.log("number is not 23 or 7");
// }
// if (favourite !==23){
//     console.log("why not 23");
// }

// const age =16;

// if (age >= 20){
//     console.log("that is incorrect");
// }
// else if(age <= 30){
//     console.log("it is true");
// }
// else{
//     console.log("otherwise");
// }


// const hasDriverLicense = true;
// const hasGoodVision = false;

// console.log(hasDriverLicense && hasGoodVision);

// console.log(hasDriverLicense || hasGoodVision);

// console.log(!hasDriverLicense);


// if (hasDriversLicense && hasGoodVision){
//     console.log("sarah is able to drive");
// }
// else{
//     console.log("someone else should drive");
// }

// const driverLincense = true;
// const goodVision = true;
// const tired = false;

// // console.log(driverLincense && goodVision && !tired);

// if (driverLincense && goodVision && !tired){
//     console.log("sarah is able to drive");
// }
// else{
//     console.log("someone else should drive");
// }

//assessment

// const scoreA = (96 + 108 + 89) / 3;
// const scoreB = (88 + 91 + 110) / 3;
// if(scoreA > scoreB){
//     console.log("scoreA win's the trophy");

// }
// else if (scoreB > scoreA){
//     console.log("scoreB win's the trophy");
// }
// else{
//     console.log("draw");
// }

// const day = "monday";
// switch(day){
//     case 'monday':

//     console.log("plan course structure");
//     console.log("go to coding meetup")
//     break;
//     case 'tuesday':
//         console.log("prepare theory video");
//         break;
//         case 'wednesday':
//           case 'thursday':
//             console.log("write code examples");
//             break;
//             case 'friday':
//                 console.log("record videos");
//                 break;
//                 case 'saturday':
//                     console.log("play video games");
//                     break;
//                     case 'sunday':
//                         console.log("enjoy the vibe");
//                         break;
//                         default: 
//                         console.log("not a valid day")
// };


// let day = wednesday;
// const day = "tuesday";

// switch (day){
//     case "monday":
//         console.log("plan course structure");
//         console.log("go to coding meet up");
//         break;

//         case "tuesday":
//             console.log("prepare theroy videos");
//             break;
//             case 'wednesday':
//                 case "thursday":
//                     console.log("write code example");
//                     break;
//                     case "friday":
//                         console.log("record videos");
//                         break;
//                         case "saturday":
//                             case "sunday":
//                                 console.log("enjoy the weekend :D");
//                                 break;
//                                 default:
//                                     console.log("not a valid day");

//                                     if (day === "monday"){
//                                         console.log(
//                                             "plan a course structure"
//                                         );
//                                         console.log(
//                                             "go to coding meetup"
//                                         );
//                                     }
//                                     else if(day==="tuesday"){
//                                         console.log("prepare theroy videos");
//                                     }
//                                     else if(day == "wednesday"){
//                                         console.log("write code examples")
//                                     }
//                                     else if(day === "thursday"){
//                                         console.log("engage in coding");
//                                     }
//                                     else if(day === "friday"){
//                                         console.log("record videos");
//                                     }
//                                     else if(day === "saturday" || "sunday"){
//                                         console.log("enjoy the weekend");
//                                     }
//                                     else{
//                                         console.log("not a valid day");
//                                     }
// }

// const age = 15;
// if(age >= 18){
//     console.log("its fine")
// }
// else{
//     console.log("not sure");
// }
// 'use strict';
// let hasDriverLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriverLicense){
//     console.log("i can drive :D");
// }

// const private = 543;

// function logger(){
//     console.log("my name is jonas");
// }
// logger();
// logger();
// logger();

// function fruitProcessor(apple,orange){
//     console.log(apple,orange);
//     const juice = `juice with ${apple} apple and  ${orange} oranges`;

//     return juice;
// }

// const applejuice = fruitProcessor(5,0);
// console.log(applejuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice)

// function fruitProcessor(apple, orange){
//     console.log(apple,orange);
//     const juice = `juice with ${apple} apples and ${orange} orange`;

//     return juice;
// }
// fruitProcessor(4,5);
// const applejuice = fruitProcessor(5,1);
// console.log(applejuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);


// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }

// const age1= calcAge1(1991);
// console.log(age1);

// function calcAge2(birthYear){
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1,age2)


// const calcAge3 = birthYear => 2037 -birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);


// const yearOfRetirement(birthYear , firstName) => {
//     const age = 2037 -birthYear;
//     const retirement = 65 - age;

//     return `${firstName} retires ${birthYear}`;
// }

// const validation = yearOfRetirement(1991, jonah);
// console.log(validation);


// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearOfRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;

//     return retirement;
// }
// console.log(yearOfRetirement(1991));

// const yearOfRetirement = (birthYear, firstName) =>{
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires ${birthYear} years time` ;


// }
// console.log(yearOfRetirement(1991, "jonah"));


// const yearOfRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearOfRetirement(1991));

// const yearOfRetirement = (birthYear, firstName) =>{
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;

//     return `${firstName} retires in ${retirement} years time`;

// }

// console.log(yearOfRetirement(1991, "jonah"))

// function calcAge1(birthYear){
//     const age = 2037 -birthYear;
//     return age;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// function calcAge1(birthYear){
//     const age1 = 2037 - birthYear;
//     return age1;
// }
// const valid = calcAge1(1991);
// console.log(valid);



// function cutFruit(fruit){
//     return fruit * 4;
// }
// function processor(apple, orange){
//     const applepices = cutFruit(apple);
//     const orangePices = cutFruit(orange);

//     // const juice = `juice with ${applepices} peces of apples and ${orangePices} of oranges`;

//     return `juice with ${applepices} pices of apples and ${orangePices} pices of oranges`;
// }
// console.log(processor(2,3));


// function cutFruit(fruit){
//     return fruit * 4;
// }

// function machine(apple, orange){
//     const applePices  = cutFruit(apple);
//     const orangePices = cutFruit(orange);

//     const juice = `juice with ${applePices} pices of apple and ${orangePices} pices of oranges`;
//     return juice;
// }

// console.log(machine(2,3));


// const calcAverage = (a,b,c) => (a + b+ c)/3;
// console.log(calcAverage(3,4,5));

// const scoreDolphins = calcAverage(44,23,71);
// const scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphins,scoreKoalas);

// const checkWinner = function(avgDolphins,avgKoalas){
//     if(avgDolphins <= 2 * scoreKoalas){
//         console.log("dolphin win's the trophy");
//     }
//     else if(avgKoalas <= 2 * scoreDolphins){
//         console.log("koalas win's the trophy");
//     }
//     else{
//         console.log("draw");
//     }
// }
// console.log(checkWinner(scoreDolphins,scoreKoalas));


// const calcAverage = (a,b,c) => (a+b+c)/3;
// console.log(calcAverage(3,4,5));

// const scoreDolphins = calcAverage(44,23,71);
// const scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphins,scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas){
//     if(avgDolphins >= 2 * scoreKoalas){
//         console.log("dolphin wins's the trophy");
//     }
//     else if(avgKoalas >= 2 * scoreKoalas){
//         console.log("koalas win's the trophy");
//     }
//     else{
//         console.log("draw");
//     }

// }
// console.log(checkWinner(scoreDolphins,scoreKoalas));

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas)

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * scoreKoalas) {
//         console.log("dolphins win's the trophy");
//     }
//     else if (avgKoalas >= 2 * scoreDolphins) {
//         console.log("koalas win's the trophy");
//     }
//     else {
//         console.log("draw");
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);


// const calcAverage = (a,b,c) => (a+ b+ c)/3;
// console.log(calcAverage(3,4,5));

// const scoreDolphins = calcAverage(44,23,71);
// const scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphins,scoreKoalas);

// const checkWinner = function (avgDolphins,avgKoalas){
//     if(avgDolphins >= 2 * scoreKoalas){
//         return `dolphins win the trophy`;
//     }
//     else if(avgKoalas >= 2* scoreDolphins){
//         return `koalas wins the trophy`;
//     }
//     else{
//         return `no team won`;
//     }
// }
// console.log(checkWinner(scoreDolphins,scoreKoalas));


// const friends = ["michael", "steven", "peter"];
// console.log(friends);
// console.log(friends.length);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends[1]);
// console.log(friends.length - 1);


// const firstName = "jonas";
// const jonas = [firstName, "joshua", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const years = [1990,1967,2002,2010,2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// const age4 = calcAge(years[3]);
// const age5 = calcAge(years[years.length - 1]);

// console.log(age1,age2,age3,age4,age5);

// const friends = ["michael","steven","peter"];

// friends.push("jack");
// console.log(friends);
// console.log(friends.length);

// friends.unshift("jay");
// console.log(friends);
// console.log(friends.length);

// friends.pop();
// console.log(friends);

// friends.pop();
// console.log(friends);
// console.log(friends.length);

// friends.shift();
// console.log(friends);
// console.log(friends.length);

// console.log(friends.indexOf("steven"));

// console.log(friends.includes("bob"));
// console.log(friends.length);

// if(friends.includes("peter")){
//     return `you have a friend called peter`;
// }
// else{
//     return `intruder`;
// }

// const jonas = {
//     firstname: "jonas",
//     lastname: "schedtmat",
//     age: 2037 - 1991,
//     job: "teacher",
//     friends: ["micheal", "peter", "steven"]
// };

// console.log(jonas);
// console.log(jonas["job"]);

// const nameKey = "name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);


// const interestedIn = prompt(`what do you want to know about jonas ? choose between firstname, lastname, age, job, and friends`);

// if (jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// }
// else{
//     console.log(`!!wrong!! "." choose between firstname, lastname, age, job, and friends`);
// }


// const jonas = {
//     friends: ["michael", "peter", "paul"],
//     firstName: "jonas"
// };
// // console.log(jonas.friends[0]);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and the name of his best friend is ${jonas.friends[0]}`);

// const jonas = {
//     firstName: "jonas",
//     lastName: "schedtman",
//     birthYear: 1991,
//     job: "teacher",
//     friends: ["michael", "peter", "steven"],
//     hasDriversLicense: true,



//     calcAge: function(birthYear){
//         return 2037 - birthYear;
//     }
// };
// console.log(jonas.calcAge(1991));



// const jonas = {
//     firstName: "jonas",
//     lastName: "schetman",
//     birthYear: 1991,
//     job: "teacher",
//     friend: ["michael", "peter", "steven"],
//     hasDriverLicense: true,




//     calcAge : function(birthYear){
//         return 2037 - birthYear;
//     }
// };
// console.log(jonas.calcAge(jonas.birthYear));

//assessment
//formula  : BMI = mass / (height * height).


// const mark = {
//     firstName: "mark",
//     lastName: "miller",
//     mass: 78,
//     height: 1.69,

//     calcbmi: function(){
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };

// const john = {
//     firstName: "john",
//     lastName: "smith",
//     mass: 92,
//     height: 1.95,

//     calcbmi: function(){
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }


// };

// mark.calcbmi();
// john.calcbmi();

// console.log(mark.bmi, john.bmi);

// // const calcBMI = function(mass,height){
// //     return mass / (height * height);
// // }


// // console.log(calcBMI(mark.mass,mark.height));
// // console.log(calcBMI(john.mass,john.height));


// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,


//     calcBMI : function(){
//         totalbmi = mark.mass / (mark.height * mark.height);
//         return totalbmi;
//     }
// }

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,

//     calcBMI : function(){
//         totalbmi = john.mass / (john.height * john.height);
//         return totalbmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.calcBMI(), john.calcBMI());


// if(`${john.fullName} ${mark.calcBMI} is ` > `${mark.fullName}` ){
//     console.log(`bravo great work`);
// }
// else if(`${mark.fullName} is ` > `${john.fullName}`){
//     console.log(`keep it up Mark`);
// }
// else{
//     console.log(`you all tried`);
// }


// for (let rep = 1; rep <= 10; rep++){
//     console.log(`lifting weight repetition ${rep}`);
// }


// const jonas = [
//     "jonas",
//     "schmedtman",
//     2037 - 1991,
//     "teacher",
//     ["michael", "peter", "steven"],
//     true
// ]

// for(i = 0; i < jonas.length; i++){
//     console.log(jonas[i], typeof jonas[i]);
// }

// const years = [1991,2007,1969,2020];
// const ages = [];

// for(let i = 0; i < years.length; i++){
//    ages.push( 2037 - years[i]);
// }
// console.log(ages);

// const years = [1991,2007,1969,2020];
// const ages = [];

// for (i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
// }
// console.log(ages);


// const jonas = [
//     "jonas",
//     "schmedtman",
//     2037 -1991,
//     ["michael","peter", "steven"],
//     true
// ];

// for (let i = jonas.length - 1; i>= 0; i--){
//     console.log(i,jonas[i]);
// }


// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`starting exercise ${exercise}`);

//     for(let rep = 1; rep < 6; rep++){
//         console.log(`lifting weight repetition ${rep}`);
//     }
// }



// for(let i = 0; i <= 10; i++){
//     console.log(`lifting repetition ${i}`);
// }


// const jonas = [
//     "james",
//     "jay",
//     2037 -1991,
//     "teacher",
//     ["micheal","peter","steven"],
//     true
// ];

// let i = 1;
// while(i <= jonas.length -1){
//    console.log(i, jonas[i]);
//    i++;
// }


// let dice = Math.trunc(Math.random() * 6) + 1;

// while(dice !== 6){
//     console.log(`you rolled a ${dice}`);
//      dice = Math.trunc(Math.random() * 6) + 1;

//      if (dice === 6) console.log(`loop is about to end`);
// }


// const calcTips = function (bill) {
//     // return bill >= 50 && bill <= 300 ? bill * 0.15 :
//     // bill * 0.2;
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15
//     } else return bill * 0.2

// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const Tips = [];
// const Totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTips(bills[i]);

//     Tips.push(tip);
//     Totals.push(tip + bills[i]);
// }
// console.log(bills, Tips, Totals);

// const calcTips = function(bills){
//     return bills >= 50 && bills <= 300 ? bills * 0.15 :
//     bills * 0.2;
// }

// const bills = [22,295,176,440,37,105,10,1100,86,52];
// const Tips = [];
// const Totals = [];

// for(let i = 0; i < bills.length; i++){
//     const tips = calcTips(bills[i]);

//     Tips.push(tips);
//     Totals.push(tips + bills);
// }
// console.log(Tips,bills,Totals);

// const calcTips = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 :
//     bill * 0.2;
// }

// const bill = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const Tips = [];
// const Totals = [];

// for(i = 0; i < bill.length; i++){
//     const tips = calcTips(bill[i]);

//     Tips.push(tips);
//     Totals.push(tips + bill);
// }
// console.log(Tips, Totals, bill);


const calcTips = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2;
}

const bill = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const Tips = [];
const Totals = [];

for(i = 0; i < bill.length; i++){
    const tips = calcTips(bill[i]);

    Tips.push(tips);
    Totals.push(tips + bill);

}
console.log(bill, Tips, Totals);