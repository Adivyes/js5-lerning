// var x = 10;
// x = 20;
// x = 30;

// let y = 20;
// y = 30;
// y = "hello world";

// const z = 30;

// if (y.length > 3) {
//         consol.log("it's a long string");
// } else {
//         console.log("not that long")
// }

// for (let i = 0; i < 10; i++) {
//         console.log(i);
// }


// let num = 9123;
// while (num > 0) {
//         console.log(num);
//         num = Math.floor(num / 10);
// }

// var x = 56
// x = prompt("enter any number from 1 to 100");

// alert
// -------------------------------------------------------------------------
//         let age = parseFloat(prompt("Please enter your age"));



// if (age >= 18 || age < 60) {
//         alert("you can enter");
// }
// else {
//         alert("you cannot enter");
// }
// --------------------------------------------------------------------------

//         let hour = 10;
// if (hour >= 6 && hour < 12) {
//         console.log('good morning');
// }
// else if (hour >= 12 && hour < 18) {
//         console.log('good afternoon');
// }
// else if (hour >= 18 && hour < 24) {
//         console.log('good night');

// }
// else
//         console.log('Invalid time! This is a 24 hours clock.');

// -----------------------------------------------

//         let name = prompt("hello mamadosako");
// var length = name.length;


// for (let i = 0; i < length; i++) {

// }




// console.log(name.charCodeAt(i))//




// ----------------------------------------------------------
//         function whatsmymmutherfuckingname() {
//                 document.writeln("HELLO R-U-L-E");
//         }
// whatsmymmutherfuckingname();
// // ------------------------------------------------
// function sum(numone, numtwo) {
//         document.writeln(numone + numtwo);
// }
// sum(5, 5);
// // ------------------------------------------------------        

// function multi(numone, numtwo) {
//         document.writeln(numone * numtwo);
// }
// multi(5, 5);
// // -------------------------------------------------------

// function divide(numOne, numTwo) {
//         document.writeln(numOne / numTwo)
//         return numOne / numTwo;
// }
// var numberOne = 10;
// var numberTwo = 10;

// var divide = divide(numberOne, numberTwo);//
// ---------------------------------------------------------

//         function nicename(param) {
//                 if (param == 9) {
//                         document.write("Adiv");
//                 } else {
//                         alert("number not 9");
//                 }
//         }
// nicename(9);
// -------------------------------------------------------------

//         function bigman(num1, num2) {
//                 // document.writeln(num1 + num2)
//                 return num1 + num2;

//         }
// let adiv = bigman(10, 10);
// ---------------------------------------------------------------

//         function bonbon(bin1, bin2) {

//                 let sum = (bin1 + bin2);
//                 let mul = (bin1 * bin2);
//                 document.writeln("result" + mul)

//                 return (sum);
//         }
// var bing1 = 10
// var bing2 = 10
// var bingo = bonbon(bing1, bing2);
// // console.log(bingo);
// // --------------------------------------------------------------------

// function boombal(lin1, lin2) {
//         var divid = (lin1 / lin2);
//         var min = (lin1 - lin2);
//         document.write("boomshakalak" + divid)
//         return (min);
// }
// var bmin = boombal(100, 100);
// console.log(bmin);
// --------------------------------------------------------------
// var stuff = ["red", 12, 54, "onepice", false]
// stuff
// stuff[2] = 16;
// document.writeln(stuff);
// ----------------------------------------------------------------- YACOVHOMEWORK

// 6. פונקציה שמקבלת מערך ומחזירה מערך של מספרים עם תוספת של שלוש



// function arryfunction(array) {


//         for (let i = 0; i < array.length; i++) {
//                 array[i] += 3;
//         }

//         return array;
// }
// var arr = [1, 2, 3, 4, 5];
// document.writeln(arryfunction(arr));

// ------------------------------------------------------YACOVHOMEWORK

// function arryfunction() {
//         let array = [];
//         var arr = [1, 2, 3, 4, 5];

//         for (let i = 0; i < arr.length; i++) {
//                 if (arr[i] % 2 != 0) {
//                         console.log(arr[i]);
//                         document.writeln(arr[i]);
//                 }

//         }
// }

// arryfunction();


// ------------------------------------------------ZIV HOMEWORK
// var text = prompt("enter text")

// for (var i = 0; i < text.length; i++) {

//         var name = text.charCodeAt(i);

//         if (name >= 65 && name <= 90) {
//                 var nice = text.toLowerCase();
//                 console.log(nice);
//         }
//         else if (name >= 97 && name <= 122) {
//                 var nice2 = text.toUpperCase();
//                 console.log(nice2);
//         }

// }
// -----------------------------------------------------------


//         function arryfunction(array) {

//                 for (let i = 0; i < array.length; i++) {
//                         if (array[i] % 2 != 0) {
//                                 array[i] += 6;

//                         }
//                         if (array[0] == "hello") {
//                                 document.writeln(array);

//                         }
//                         return array;
//                 }
//         }
// var arr = ["hello", 1, 2, 3, 4, 5];
// document.writeln(arryfunction(arr));
// ---------------------------------------------------------

//         let myString = 'Hello World';

// console.log(myString.indexOf('o')); // => 4
// console.log(myString.indexOf('k')); // => -1
// console.log(myString.lastIndexOf('o')); // => 7
// console.log(myString.match('o')); // => o 
// console.log(myString.toLowerCase()); // hello world
// console.log(myString.toUpperCase()); // HELLO WORLD


// --------------------------------------------------------
//         פונקציה שמקבלת 4 מספרים


// פונקציה שמקבלת 4 מספרים
// ומחזירה מערך
// במידה ואחד המשתנים הוא לא מספר

// ומדפיסה הודעה למשתמש

// function adiv(num1, num2, num3, num4) {
//         var numbers = [num1, num2, num3, num4]
//         for (i = 0; i < numbers.length; i++) {
//                 if (numbers[i] / 1 == numbers[i]) {
//                         document.writeln(numbers[i])
//                 }
//                 else document.writeln(numbers[i] + " -it's not a number");
//         }

//         return numbers;
// }

// var num = adiv("nice", 2, 3, "hello")
// document.writeln(num);
// ------------------------------------------------------------------

//         כתבו פונקציה בשם random שמקבלת שני מספרים ומחזירה מספר אקראי ביניהם, כלומר שיהיה גדול או שווה לראשון וקטן מהשני.

// לאחר מכן כתבו תוכנית שמגרילה 3 מספרים בין 1 ל - 100 ומדפיסה את הגדול מביניהם.

// function random(billi1) {
//         var billran = Math.floor(Math.random() * 100) + 1;
//         for (i = 0; i < billi1.length; i++) {
//                 if (billran == billi1[i]) {

//                 }
//         }
//         if (billiran >= billi1 && billiran < billi2) {
//                 document.writeln(billiran)
//         }
//         else billiran = 



// return billiran
// }
// var bingo = random(100, 200)




// let age = parseFloat(prompt("Please enter a number 1-100"));
// if (billran == age) {
//         document.writeln(billran + "winner")
// }
// else document.writeln(billran + " -mybe next time")

// ----------------------------------------------------------------------

// var ixigool = [
//         ['o', 'x', 'x'],
//         ['x', 'o', 'x'],
//         ['x', 'x', 'o']
// ]
// ---------------------------------------------------------------------------



// var fastcars = [
//         { name: 'mercedes', color: 'green', speed: 200 },
//         { name: 'toyota', color: 'silver', speed: 560 },
//         { name: 'peugeot', color: 'yellow', speed: 480 },
//         { name: 'bmw', color: 'white', speed: 360 },
//         { name: 'volvo', color: 'red', speed: 300 },
//         { name: 'bmw', color: 'black', speed: 200 },
//         { name: 'wv', color: 'blue', speed: 250 }
// ]

// function fastesCar(winner) {
//         var max = 0
//         var index = 0

//         for (var i = 0; i < winner.length; i++) {
//                 if (winner[i].speed > max) {
//                         index = i
//                         max = winner[i].speed
//                 }
//         }
//         var theMostFastCar = winner[index].color + ' ' + winner[index].name + ' is the fastes car'
//         return theMostFastCar;

// }
// document.writeln(fastesCar(fastcars))

// -------------------------------------------------------------



// var password = "Sa2165845446";
// function checkPassword(passwordToCheck) {
//         var isPasswordStrong = false;
//         if (passwordToCheck.length >= 7) {
//                 if (passwordToCheck[0] / 1 != passwordToCheck[0] && passwordToCheck[1] / 1 != passwordToCheck[1]) {
//                         for (i = 2; i < passwordToCheck.length; i++) {
//                                 if (1 <= passwordToCheck[i] && passwordToCheck[i] <= 8) {
//                                         isPasswordStrong = true;
//                                 }
//                                 else {
//                                         return false;
//                                 }
//                         }
//                 }
//         }
//         return isPasswordStrong;
// }
// document.writeln("IT IS A STRONG PASSWORD : " + checkPassword(password))
// --------------------------------------------------------------------------------------
// var password = "ps2581231238"
// function passwordcheck(pass) {
//         var passcheck = "weak"
//         if (pass.length >= 7) {
//                 if (pass[0] / 1 != pass[0] && pass[1] / 1 != pass[1]) {
//                         for (i = 2; i < pass.length; i++)
//                                 if (1 <= pass[i] && pass[i] <= 8) {
//                                         passcheck = "strong"
//                                 }
//                                 else {
//                                         return "weak";
//                                 }
//                 }
//         }
//         return passcheck;
// }
// document.writeln("this is a " + passwordcheck(password) + " password")
// // -----------------------------------------------------------------------------------------------

// var fastcars = [
//         { name: 'mercedes', color: 'green', speed: 200 },
//         { name: 'toyota', color: 'silver', speed: 360 },
//         { name: 'peugeot', color: 'yellow', speed: 480 },
//         { name: 'bmw', color: 'white', speed: 360 },
//         { name: 'volvo', color: 'red', speed: 300 },
//         { name: 'bmw', color: 'black', speed: 700 },
//         { name: 'wv', color: 'blue', speed: 950 }
// ]

// function fasTesCar(winner) {
//         var max = 0
//         var index = 0
//         for (var i = 0; i < winner.length; i++) {
//                 if (winner[i].speed > max) {
//                         max = winner[i].speed
//                         index = i
//                 }
//         }
//         var fastes = winner[index].color + " " + winner[index].name + " is the winner"
//         return fastes;
// }

// document.writeln(fasTesCar(fastcars))
// ------------------------------------------------------------------------------------------

// var fastcars = [
//         { name: 'mercedes', color: 'green', speed: 200 },
//         { name: 'toyota', color: 'silver', speed: 360 },
//         { name: 'peugeot', color: 'yellow', speed: 480 },
//         { name: 'bmw', color: 'white', speed: 360 },
//         { name: 'volvo', color: 'red', speed: 300 },
//         { name: 'bmw', color: 'black', speed: 100 },
//         { name: 'wv', color: 'blue', speed: 750 }
// ]

// function fastesCarCompetition(winner) {
//         var max = 0
//         var index = 0

//         for (var i = 0; i < winner.length; i++) { //למה ה"וואר" חייב להופיע בתחילת הלולאה ?י
//                 if (winner[i].speed > max) {
//                         max = winner[i].speed
//                         index = i
//                 }
//         }
//         var fast = winner[index].color + " " + winner[index].name + " is the fastes car"
//         return fast;
// }
// document.writeln(fastesCarCompetition(fastcars))
// -------------------------------------------------------

// var fastcars = [
//         { name: 'mercedes', color: 'green', speed: 200 },
//         { name: 'toyota', color: 'silver', speed: 360 },
//         { name: 'peugeot', color: 'yellow', speed: 480 },
//         { name: 'bmw', color: 'white', speed: 360 },
//         { name: 'volvo', color: 'red', speed: 300 },
//         { name: 'bmw', color: 'black', speed: 100 },
//         { name: 'wv', color: 'blue', speed: 750 }
// ]

// function fastesCar(winner) {
//         var max = 0
//         var index = 0
//         for (var i = 0; i < winner.length; i++) {
//                 if (winner[i].speed > max) {
//                         max = winner[i].speed
//                         index = i
//                 }
//         }

//         var fastes = winner[index].color + " " + winner[index].name + " is the fastes car!"
//         return fastes;

// }
// document.writeln(fastesCar(fastcars))
// ---------------------------------------------------------


// const email = {
//         bob: 'bob@gmail.com',
//         jane: 'jane@gmail.com',
//         bill: 'bill@gmail.com'
// }

// const details = {
//         name: 'adiv shenkor',
//         alias: 'kingpin',
//         appeard: 1990,
//         frinds: ['bigman', 'smallman'],
//         vilan: { mainVilan: 'bob' }
// }

// email.adiv = 'adiv@gmail.com';
// let name = 'or';
// email[name] = `$[name]@hotmail.com`;
// console.log(email)

// const person = {
//         age: 10,
//         id: 23,
//         name: '',
//         address: '',
//         color: '',
//         street: '',
//         game: '',
//         dog: '',
//         tvshow: '',
//         student: '',
// }

// person.age = 30
// person.name = 'adiv'
// person.lastName = 'shenkor'
// person.id = 45
// person.address = 'klahim'
// person.color = 'black'
// person.street = 'first street'
// person.game = 'pubg'
// person.dog = 'kora'
// person.tvshow = 'homland'
// person.student = 'codein'

// for (var key of Object.keys(person)) {
//         var value = person[key];
//         document.writeln(value)
// }
// console.log(person)
// ---------------------------------------------------------



// var user = {
//         name: '',
//         lastName: '',
//         age: 0
// }



// for (var key of Object.keys(user)) {
//         user[key] = prompt(`please enter your ${key}`)
// }

// document.writeln(Date())
// document.writeln(`<br/> Hello There ${user.name} ` + ` ${user.lastName}`);
// -------------------------------------------------------

//         tic tac toe game--------------------------------

//                 function startGame() {
//                         document.turn = "X";
//                         setMessage(document.turn + " - gets to start.");
//                 }
// function setMessage(msg) {
//         document.getElementById("message").innerText = msg;
// }

// function nextMove(square) {
//         if (square.innerText == "") {
//                 square.innerText = document.turn;
//                 switchTurn();
//         }
//         else {
//                 setMessage("that square is allready usde!")
//         }

// }

// function switchTurn() {
//         if (document.turn == "X") {
//                 document.turn = "O";
//         }
//         else {
//                 document.turn = "X";
//         }
//         setMessage("it's " + document.turn + "'s turn!")
// }

// function checkRow(a, b, c, move) {
//         var result = false;
// }
// -------------------------------------------------------

// var mainDiv = document.getElementById("someId")
// var imgClass = document.getElementsByClassName("imgid")

// mainDiv.innerHTML = "<h1>Hello World</h1> <p>hello agine</p> <div>hello there</div> <br/> <div>hello mamadosako</div>"
// imgClass[0].innerHTML = "<div>one pice</div>"
// console.log(imgClass);
// // -----------------------------------------------

// var outerDiv = document.getElementById("outerId")

// outerDiv.innerHTML += '<div id = innerId"><h1>nice and better</h1></div>'

// var innerDiv = document.getElementById("innerId")

// innerDiv.innerHTML += '<h1>I AM THE INNER ID</h1>'






// 1. ליצור אלמנט ראשי עם ID
// 2. בתוכו, ליצור אלמנטים עם ID
// 3. ולתת להם טקסט
// 4. ליצור את האלמנטים אחד בתוך השני



// var inputElement = document.getElementById("inputId");
// var mainDiv = document.getElementById("someIdName");
// var inputValue;

// function clickEvent() {
//     inputValue = inputElement.value;
//     console.log(inputValue);
//     createList()
//     listStyle()
// }
// function createList() {
//     mainDiv.innerHTML += '<ol id="olElement">list : </ol>';
//     var listElement = document.getElementById("olElement");
//     for (let index = 1; index <= inputValue; index++) {
//         listElement.innerHTML +=
//             `<li id="liElemNo${index}">
//         <img class="liElemClass" src="./${index}.jpg"/>            
//     </li>`;
//     }
// }
// function listStyle() {
//     var liElements = document.getElementsByClassName("liElemClass");
//     for (let i = 0; i < liElements.length; i++) {
//         liElements[i].style = "height: 150px;";
//     }
// }
// ------------------------------------------------------------------------







// let inputElement = document.getElementById("idInput");
// let mainDiv = document.getElementById("mainId");


// mainDiv.innerHTML += '<ol id=list ><h1>try</h1></ol>';
// mainDiv.style.color="red";

// function clickEvent(){ 
// let lilist = document.getElementById("list"); 
// let inputnumber = inputElement.value;     
// for(let i=1; i<=inputnumber; i++){
// lilist.innerHTML += `<li><img src='${i}.jpg' class='listyle'></li>`

// }
// liststyle();
// }


// function liststyle(){
// let classStyle = document.getElementsByClassName('listyle');
// for (let i = 0; i < classStyle.length; i++) {
//         classStyle[i].style = "width: 200px; height: 200px";

// }
// }
// -----------------------------------------------------------------------

// let res = ""
// for (let i=1; i<11; i++){
//         res += '<tr>';
//         for(let j=1; j<11; j++){
//                 res += `<td>${i * j}</td>`
//         }
//   res += '</tr>';
// }
// console.log(res);
// let tablebody = document.getElementById("tbody");
// tablebody.innerHTML = res; 

// ----------------------------------------------------------------------

// let twoDiv = document.getElementsByTagName("div")[1];
// for ( i = 0; i < 5; i++) {
//         twoDiv.innerHTML += `<h1> this is no# ${i+1}</h1>`       

// }
// console.log(twoDiv);
// twoDiv.firstChild.style.color = `blue`;

// twoDiv.childNodes[4].innerHTML = `<p>zoro</p> <p>lophi</p> <p>namy</p> <p>osopa</p> <p>brook</p>`;
// ----------------------------------------------------------------------------
// let madness = document.getElementById("Idbutton");
// let secondDiv = document.getElementsByTagName("div")[1];
// let inPutText = document.getElementsByTagName("input")[0];
// let colorsChangeDiv;
// let rancol;
// function clickEvent() {
//         secondDiv.innerHTML = '<div></div><button>replace color</button>'
//         colorsChangeDiv = secondDiv.childNodes[0];
//         colorsChangeDiv.style = `padding: 20px; height: 20px; width: 20px; margin: 20px; border:1px solid black;`
//         for (let i = 0; i < 50; i++){
//                 let rancol = Math.floor(Math.random() * 1000);
//               document.getElementById("therdId").innerHTML += `<div onmouseover=changeColHov(${rancol})></div>`
//               document.getElementById("therdId").childNodes[i].style=`background:#${rancol}; float: left; padding: 20px; height: 20px; width: 20px; margin: 20px; border:1px solid black; `
//         }
//         colorsChangeDiv.style.background =  inPutText.value   
//         colorsChangeDiv.nextElementSibling.addEventListener("click", clickEvent2);
// }                                                                           


// function clickEvent2() {
//         colorsChangeDiv.style.background = 'yellow';

// }


// function changeColHov(x){
//         colorsChangeDiv.style.background = '#' + x;
// }



// var setInter =  setInterval(() => `#${rancol}` (colorsChangeDiv),5000); 

// function stop(){
//         madness = clearInterval(setInter)
// }
// ------------------------------------------------------------------------



// var slider_img = document.querySelector('.slider-img');
// var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
// var i = 0;
// let imgruning = setInterval(next, 3000); 



// function prev(){
// 	if(i <= 0) i = images.length;	
// 	i--;
// 	return setImg();			 
// }

// function next(){
// 	if(i >= images.length-1) i = -1;
// 	i++;
// 	return setImg();			 
// }

// function setImg(){
// 	return slider_img.src = "images/"+images[i];

// }

// function stop() {
//         clearInterval(imgruning)
// }



// ----------------------------------------------------------------------

// let songs = [
//         { name: "Hard day night", singer: "Beatless" },
//         { name: "Help", singer: "Beatless" },
//       ];


//       //  arrayWithAllItems is expected to be an array,
//       //  theSearchFunction is a function that accepts one item from arrayWithAllItems and returns a boolean

//       function search(arrayWithAllItems, theSearchFunction) {
//         for (let i = 0; i < arrayWithAllItems.length; i++) {
//           let oneItemInArray = arrayWithAllItems[i];

//           let isThisAValid = theSearchFunction(oneItemInArray);
//           if (isThisAValid) {
//             console.log("Found " + JSON.stringify(oneItemInArray));
//           }
//         }
//       }

//       function searchClicked() {
//         search(songs, isThisIsTheSongWeLookFor);
//       }

//       function isThisIsTheSongWeLookFor(song , searchTerm) {
//         let inputElement = document.getElementById("songInput");
//         let searchTerm = inputElement.value;
//         searchTerm = searchTerm.trim().toLowerCase();

// let firstDiv = document.getElementsByTagName("div")[0];
// let secondDiv = document.getElementsByTagName("div")[1];

//         let fullSinger = song.singer.toLowerCase();
//         let fullName = song.name.toLowerCase();


//         let isFoundSinger = fullSinger.indexOf(searchTerm) != -1;
//         let isFoundName = fullName.indexOf(searchTerm) != -1;

//         let isFound = isFoundSinger || isFoundName;
//         return isFound;
//       }

// return isFoundSinger || isFoundName;

//     if (isFoundSinger == true && isFoundSinger == true)
//         isFound = true;
//     else if (isFoundSinger == true && isFoundSinger == false)
//         isFound = true;
//     else if (isFoundSinger == false && isFoundSinger == true)
//         isFound = true;
//     else if (isFoundSinger == false && is
//       ---------------------------------------------------------------

// window.onload = () => {}
// function changeToUpperCase() {
//         let inputValue = inputFunname.value;
//         inputFunname.value = inputFunname.value.toUpperCase();
// }

// ------------------------------------------------------------

// var firstPassword = document.getElementById('password');
// var againPassword = document.getElementById('passwordAgain');
// var sumbitBtn = document.getElementById('btnSubmit');
// var photoup = document.getElementById('photo');
// var checkname = document.getElementById('nicename');
// var checkpass = document.getElementById('passwordspan');
// var lastName = document.getElementById('nicelastname');


// window.onload = () => {
//         checkname.addEventListener("change", checkingNames);
//         lastName.addEventListener("change", checkingLastName);
//         againPassword.addEventListener('input', chekaPssword);
// }


// function checkingNames() {
//         if (checkname.value.toLowerCase() != 'adiv') {
//                 document.getElementById('namespan').innerHTML = "this name is not good";

//                 return false;

//         }
//         document.getElementById('namespan').innerHTML = "";
//         return true;
// }


// function chekaPssword() {
//         if (firstPassword.value == againPassword.value) {
//                 checkpass.innerHTML = ""
//                 return true;
//         }
//         checkpass.innerHTML = "this is a bad password"
//         return false;
// }


// function checkingLastName() {
//         if (lastName.value.toLowerCase() != 'shenkor') {
//                 document.getElementById('lastnamespan').innerHTML = "this lastname is not good";

//                 return false;

//         }
//         document.getElementById('lastnamespan').innerHTML = "enter your last-name:";
//         return true;
// }


// photoup.addEventListener('change', function () {

//         if (file.size > 3000000) {
//                 alert(`${file.name} is too big`)
//         }

// });
// -------------------------------------------------------------

// var mainDiv = document.getElementById('mainDiv');
// mainDiv.innerHTML = "<form id=form></form>"
// var formId = document.getElementById('form');

// window.onload = () => {
// let generArray = ['Name', 'Lastname', 'Email'];
// let adivArray = ['adiv', 'shenkor', 'adivshenkor@hotmail.com']
// createInputs(generArray);
// addEvent(generArray);
// }

// function comperArray(){

// }

// function createInputs(inputChange){
        
//         for (let i = 0; i < inputChange.length; i++) {
//                 formId.innerHTML +=  `<br><div id=${inputChange[i]}Div><label id=${inputChange[i]}Label>${inputChange[i]}:</label></br><span style='display: none'>*</span><input id ='${inputChange[i]}Input' required type='text' name='${inputChange[i]}'><span id=${inputChange[i]}span></span></div></br>`  
                
//         }
// }

// function checkNames(checking){
// if(document.getElementById(`NameInput`).value.toLowerCase() == 'adiv'){

//         document.getElementById(`NameInput`).style.background = 'green '
//         document.getElementById(`Namespan`).innerHTML = 'GOOD'
//         return true;
// }
//         document.getElementById(`NameInput`).style.background = 'red'
//         document.getElementById(`Namespan`).innerHTML = 'NOT GOOD'
//      return false;   

// function clickEvent(){
//         secondDiv.innerHTML = '<div id = "innerId"><h1></h1></div><button id= "repCol" onclick="clickEvent2()">replace color</button><div style = "background-color: lightcoral" ></div> <div style = "background-color: lightgreen"></div> <div style = "background-color: lightseagreen"></div>'  
//         let innerDiv = document.getElementById("innerId")
//         let inPutText = document.getElementById("idInput").value  
//         innerDiv.style = `background-color : ${inPutText}; padding: 20px; height: 20px; width: 20px; margin: 20px;`
                
// }

// function clickEvent2(){
//         let innerDiv = document.getElementById("innerId")
//         innerDiv.style.backgroundColor = 'yellow'
//           let threeDivs =  document.getElementById("threediv")
//           threeDivs
// }

// }



// function addEvent(idSerch){
//         for (let i = 0; i < idSerch.length; i++) {
//           document.getElementById(`${idSerch[i]}Input`).addEventListener('change',()=>{checkNames(idSerch[i])} )     
                
//         }

// }

// .style.color = 'blue'
// ------------------------------------
// var pos = 0;
//         var moveInterval;
//         var toggle = false
//         var chaNgnameBtn = document.getElementById('moveBtn')
        
//         function move() {
//             toggle = !toggle
//             toggle?moveFrame():sopbox();
          
//         }   
            
//         function moveFrame() {
//             moveInterval = setInterval(() =>{
//             pos++;
//             smallBox.style.left = pos + 'px';
//             },50);
//             chaNgnameBtn.innerHTML = "Stop";
//             }

//        function sopbox(){
//             clearInterval(moveInterval)
//             chaNgnameBtn.innerHTML = "Play"
//         }
        

        
