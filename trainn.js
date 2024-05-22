//  == TASK = A 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi 
// letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

function countLetter(letter,word){
    let count = 0;
    letter = letter.toLowerCase();
    word = word.toLowerCase();

for (let char of word ) {
  if(char === letter){
        count++;
  }

}
return count;

}
console.log(countLetter("e", "apple"));







// // Call Back 21- LEsson

// console.log("Jack Ma maslaxatlari");

// const list = [
// "Yaxshi Talaba Boling ",// 0-20
// "Togri boshliq tanlang va koproq hato qling ",// 20-30
// "O`zingizni ishlaringizni boshlang ",// 30-40
// "siz kuchli bolgan narsalarni qling",// 40-50
// "yoshlarga investitsiya qling",// 50-60
// "endi dam oling foydasi yoq",// 60
// ];

// function maslaxatBering(a,callback) {
//     if(typeof a !== "number") callback("insert number", null);
//     else if (a <= 20 ) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null,list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60)callback(null, list[4]);
//     else{
//         setInterval(function () {
//             callback(null, list[5]);
            
//           }, 1000)
//     }
 
// }
// console.log("passed here 0");

// maslaxatBering(65, (err, data ) => {
// if (err) console.log("ERROR", err);
// else{
// console.log("JAVOB", data);

// }

// });

// console.log("passed here 1");




// Lesson 22 = Async function qollash

// console.log("Jack Ma maslaxatlari");

// const list = [
// "Yaxshi Talaba Boling ",// 0-20
// "Togri boshliq tanlang va koproq hato qling ",// 20-30
// "O`zingizni ishlaringizni boshlang ",// 30-40
// "siz kuchli bolgan narsalarni qling",// 40-50
// "yoshlarga investitsiya qling",// 50-60
// "endi dam oling foydasi yoq",// 60
// ];

// async function maslaxatBering (a){
// if (typeof a !== "number") throw new Error ("insert number"); 
// else if(a <= 20 ) return list[0];
// else if (a > 20 && a <= 30 ) return list[1];
// else if(a > 30 && a <= 40) return list[2];
// else if(a > 40 && a <= 50) return list [3];
// else if (a > 50 && a <= 60) return list [4]
// else{
//    return new Promise ((resolve, reject )=>{
//        setTimeout (() =>{
//            resolve(list[5]);
           
//     },5000);
//    })
// }
    
// }
// Call via Then / catch
// console.log("passed here 0");
// maslaxatBering(10) 
// .then((data)=>{
//     console.log("JAVOb", data);
// }) .catch((err)=>{
//     console.log("ERROR", err);
// })

// console.log("passed here 1");


// call via async / await

// async function run(){
//     let javob = await maslaxatBering(20);
//     console.log(javob);
//     javob = await maslaxatBering(65);
//     console.log(javob);
//     javob = await maslaxatBering(56);
//     console.log(javob);
// }
// run();
















