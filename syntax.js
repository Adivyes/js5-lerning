// var x = 10;
// x = 20;
// x = 30;

// let y = 20;
// y = 30;
// y = "hello world";

// const z = 30;

// if (y.length > 3) {
//     consol.log("it's a long string");
// }else {
//     console.log("not that long")
// }

// for (let i=0; i < 10; i++) {
//     console.log(i);
// }


// let num = 9123;
// while (num > 0) {
//     console.log(num);
//     num = Math.floor(num / 10);
// }

// var x=56
//     x = prompt("enter any number from 1 to 100");

//     alert 
// -------------------------------------------------------------------------
// let age = parseFloat(prompt("Please enter your age"));
			
			
			
// 			if ( age >= 18 || age < 60 ) {
// 				alert("you can enter");
// 			} 
// 			else {
// 				alert("you cannot enter");
//             }
// --------------------------------------------------------------------------

        // let hour = 10;
        //     if (hour >= 6 && hour < 12){
        //             console.log('good morning');
        //     }
        //     else if (hour >= 12 && hour < 18){
        //             console.log('good afternoon');
        //     }
        //     else if(hour >= 18 && hour < 24){
        //         console.log('good night');

        //     }
        //     else
        //         console.log('Invalid time! This is a 24 hours clock.');
// 
// -----------------------------------------------

        // let name= prompt("hello mamadosako");
        // var length=name.length; 
      

        //     for (let i=0; i<length; i++){

        //     }
        
        
            
            
            // console.log (name.charCodeAt(i) )//

     

        
// ----------------------------------------------------------                                                                                                  
//         function whatsmymmutherfuckingname(){
//             document.writeln("HELLO R-U-L-E");
//         }      
//         whatsmymmutherfuckingname();
// // ------------------------------------------------
//         function sum(numone, numtwo){
//             document.writeln(numone + numtwo);
//         }
//         sum(5,5);
// // ------------------------------------------------------        

// function multi(numone, numtwo){
//     document.writeln(numone * numtwo);
// }
// multi(5,5);
// // -------------------------------------------------------

// function divide(numOne, numTwo){
//     document.writeln(numOne/numTwo)
//     return numOne/numTwo;
// }
// var numberOne = 10;
// var numberTwo = 10;

// var divide = divide(numberOne, numberTwo);//
// ---------------------------------------------------------

// function nicename(param){
//     if (param == 9){
//         document.write("Adiv");
//     } else {
//         alert("number not 9");
//     }
// }
// nicename(9);
// -------------------------------------------------------------

// function bigman(num1, num2){
//     // document.writeln(num1 + num2)
//     return num1 + num2;
 
// }
// let adiv = bigman (10,10);
// ---------------------------------------------------------------

// function bonbon(bin1, bin2){
    
//         let sum = (bin1 + bin2);
//         let mul = (bin1 * bin2);
//         document.writeln("result" + mul)
        
//     return (sum);
// }
// var bing1= 10
// var bing2= 10
// var bingo = bonbon(bing1, bing2);
// // console.log(bingo);
// // --------------------------------------------------------------------

// function boombal(lin1, lin2){
//     var divid = (lin1 / lin2);
//     var min = (lin1 - lin2);
//     document.write ("boomshakalak" + divid)
//     return (min);
// }
// var bmin = boombal(100, 100);
// console.log(bmin);
// --------------------------------------------------------------
// var stuff = ["red", 12, 54, "onepice", false]
// stuff 
// stuff[2]= 16;
// document.writeln(stuff);
// -----------------------------------------------------------------YACOVHOMEWORK

// 6. פונקציה שמקבלת מערך ומחזירה מערך של מספרים עם תוספת של שלוש

// 

// function arryfunction(array){


//     for (let i=0; i< array.length; i++){
//         array[i] += 3;
//     }
   
//     return array;
// }
// var arr = [1, 2, 3, 4, 5];
// document.writeln(arryfunction(arr));

// ------------------------------------------------------YACOVHOMEWORK

// function arryfunction(){
//     let array = [];
//     var arr = [1, 2, 3, 4, 5];
    
//     for (let i=0; i< arr.length; i++){
//         if(arr[i]%2 !=0){
//             console.log(arr[i]);
//             document.writeln(arr[i]);
//         }
      
//     }
//     }

// arryfunction();


// ------------------------------------------------ZIV HOMEWORK
// var text = prompt ("enter text")

// for (var i=0; i<text.length; i++){

//     var name = text.charCodeAt(i);

//     if(name >= 65 && name <=90){
//     var nice = text.toLowerCase();
//         console.log (nice);
//     }
//     else if (name >= 97 && name <=122){
//         var nice2 = text.toUpperCase();
//         console.log (nice2);
//     }
    
// }
// -----------------------------------------------------------


// function arryfunction(array){
    
//     for (let i=0; i< array.length; i++){
//         if(array[i]%2 !=0){
//          array[i] +=6;
            
//         }
//         if(array[0] == "hello"){
//                 document.writeln(array);

//         }
//       return array;    
//     }
//     }
// var arr = ["hello", 1, 2, 3, 4, 5];
// document.writeln(arryfunction(arr));
// ---------------------------------------------------------

// let myString = 'Hello World';

// console.log(myString.indexOf('o')); // => 4
// console.log(myString.indexOf('k')); // => -1
// console.log(myString.lastIndexOf('o')); // => 7
// console.log(myString.match('o')); // => o 
// console.log(myString.toLowerCase()); // hello world
// console.log(myString.toUpperCase()); // HELLO WORLD


// --------------------------------------------------------
// פונקציה שמקבלת 4 מספרים 


//   פונקציה שמקבלת 4 מספרים
//     ומחזירה מערך
//    במידה ואחד המשתנים הוא לא מספר

//   ומדפיסה הודעה למשתמש

// function adiv(num1, num2, num3, num4){
//         var numbers = [num1, num2, num3, num4]
//         for(i=0; i<numbers.length; i++){
//               if(numbers[i]/1 == numbers[i]){
//                       document.writeln(numbers[i]  )
//               } 
//               else document.writeln(numbers[i] + " -it's not a number"); 
//         }

//         return numbers;
// }

// var num = adiv ("nice", 2, 3, "hello")
// document.writeln(num);
// ------------------------------------------------------------------

// כתבו פונקציה בשם random שמקבלת שני מספרים ומחזירה מספר אקראי ביניהם, כלומר שיהיה גדול או שווה לראשון וקטן מהשני.

// לאחר מכן כתבו תוכנית שמגרילה 3 מספרים בין 1 ל-100 ומדפיסה את הגדול מביניהם.

// function random(billi1){
//         var billran = Math.floor (Math.random() * 100) + 1;
//         for(i=0; i<billi1.length; i++){
//                 if(billran == billi1[i]){
                        
//                 }
//         }
// if(billiran >= billi1 && billiran < billi2){
//         document.writeln(billiran)
// }
// else billiran = 



// return billiran
// }
// var bingo = random (100, 200)

//  

// 
// let age = parseFloat(prompt("Please enter a number 1-100"));
// if (billran == age){
//  document.writeln(billran + "winner") 
// }
// else document.writeln(billran + " -mybe next time")

// ----------------------------------------------------------------------

// var ixigool = [
//         ['o','x','x'],
//         ['x','o','x'],
//         ['x','x','o']
// ]
// ---------------------------------------------------------------------------



// var fastcars = [
//         {name:'mercedes',color:'green',speed:200},
//         {name:'toyota', color:'silver',speed:560},
//         {name:'peugeot', color:'yellow',speed:480},
//         {name:'bmw', color:'white',speed:360},
//         {name:'volvo', color:'red', speed:300},
//         {name:'bmw', color:'black', speed:200},
//         {name:'wv', color:'blue', speed:250}
// ]

// function fastesCar(winner){
//         var max = 0
//         var index = 0

//         for(var i=0; i<winner.length; i++){
//                 if(winner[i].speed > max){
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
//         function checkPassword(passwordToCheck) {
//             var isPasswordStrong = false;
//             if(passwordToCheck.length>=7){
//                 if(passwordToCheck[0]/1 != passwordToCheck[0] && passwordToCheck[1]/1 != passwordToCheck[1]){
//                     for(i=2; i< passwordToCheck.length;i++){
//                         if(1<=passwordToCheck[i] && passwordToCheck[i]<=8){
//                             isPasswordStrong = true;
//                         }
//                         else{
//                             return false;
//                         }
//                     }
//                 }
//             }
//             return isPasswordStrong;
//         }
//         document.writeln("IT IS A STRONG PASSWORD : " + checkPassword(password))

var password = "ps259823"
function passwordcheck(pass){
        var passcheck = false
        if(pass.length>=7){
                if(pass[0]/1 != pass[0] && pass[1]/1 != pass[1]){
                        for(i=2; i)
                        if(1<pass[i] && pass[i]>8){
                                passcheck = true
                        }
                }
        }
        return passcheck;
}
document.writeln(passwordcheck(password))



