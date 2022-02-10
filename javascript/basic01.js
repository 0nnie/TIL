console.log("hello");

/* 변수 :
*       1. 변수 : const
*       2. 상수 : let
*   업데이트 전에 var 라는 변수 예약어가 있었지만 의미전달을 위해 const와 let을 사용하자
*/


const unchanged1 = 3.14;
const unchanged2 = "pi";
const unchanged3 = true;

let mutable1 = 20;
let mutable2 = "content";
let mutable3 = true;

console.log("\nTest01-1\n상수 : 1.[%d] | 2.[%s] | 3. [",unchanged1,unchanged2,unchanged3,"]");
console.log("변수 : 1.[%d] | 2.[%s] | 3. [%s]",mutable1,mutable2, mutable3);
/*unchanged1=1;     ->에러남*/
mutable1 =100;
mutable2 = "title";
mutable3 =false;
console.log("Test01-2\n상수 : 1.[%d] | 2.[%s] | 3.[%s]",unchanged1,unchanged2,unchanged3);
console.log("변수 : 1.[%d] | 2.[%s] | 3.[%s]",mutable1,mutable2,mutable3);

console.log("\nTest02");
/* 비어있다기보다, 아무것도 없는 상태로 채워줬다.
*  메모리(공간)는 존재하고, 값도 존재한다. 값=비어있어용 */
const nullIs = null;
console.log("Type : ",nullIs);


/* 변수는 생성했지만, 정의되지 않은 변수이다.
*  메모리(공간)는 존재하지만, 값이 없다.
*/
let undefinedIs;
console.log("Type : ",undefinedIs);
console.log("Type : ",true);
console.log("Type : ",false);

console.log("\nTest03");
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1, mutable1, unchanged1, "content1", true, false, undefined, null, "졸려"];
console.log(daysOfWeek, nonsense);
console.log(daysOfWeek[1]," : 2번째 ")
daysOfWeek.push("sun");
console.log("sun을 push",daysOfWeek);
daysOfWeek.pop();
console.log("sun을 push",daysOfWeek);



const player = {
    name : "nico",
    points : 121212,
    handsome : true,
};

console.log("\nTest04. object 활용")
console.log(player,"player name : ",player.name);
player.lastName = "potato";
player.points = 15;
console.log(player);


console.log("\nTest04. function");
function sayHello(name, age) {
    console.log("hello! my name is ",name);
    console.log("my age is ", age+50)
}

sayHello("dd", 35);
sayHello("25", "15");
sayHello("kk", 55);







const title = document.getElementById("title");
console.dir(title);
title.innerText="Got you";
console.log(title.id);
console.log(title.className);

if(title.id == "title"){
    title.innerText="if title change";
}

//array 를 반환
const hellos = document.getElementsByClassName("hello");
console.log(hellos);


// hello list 안의 div안에 h1함수 뽑아내기
//h1에 대한 태그이름을 전부 뽑아낸다
const grabMe = document.getElementsByTagName("h1");
console.log("is?? get Element By TagName?? ",grabMe);

//css 방법으로 뽑아내는 querySelector
//Returns the first element that is a descendant of node that matches selectors.
//첫번째 쿼리만 가져온다
const grabMeCss = document.querySelector(".hello h1");
console.log("is css 방법" , grabMeCss);

//전부 가져오는 방법
console.log("is All select css : ",document.querySelectorAll(".hello h1") );

//css방법
console.log("is first child : ",document.querySelector(".hello h1:first-child"));
const titleEvent = document.querySelector(".hello h1:first-child");




// function handleTitleOver(){

//     console.log("mouse in");
//     titleEvent.style.color = "blue";
// }
// titleEvent.addEventListener("mouseover", handleTitleOver);

// function handleTitleOut(){
//     console.log("mouse over");
//     titleEvent.style.color = "black";
// }
// titleEvent.addEventListener("mouseout", handleTitleOut);


function handleTitleClick(){
    console.log("mouse click");
    titleEvent.style.color = "blue";
}

function handleTitleMouseEnter(){
    console.log("mouse is here!");
    titleEvent.style.color = "red";
}

function handleTitleMouseLeave(){
    console.log("mouse is gone!");
    titleEvent.style.color = "black";
}




titleEvent.onclick = handleTitleClick;
//titleEvent.addEventListener("click", handleTitleClick);
//titleEvent.removeEventListener 로 없앨수도 있음


titleEvent.addEventListener("mouseenter", handleTitleMouseEnter);
titleEvent.addEventListener("mouseleave", handleTitleMouseLeave);
console.dir(titleEvent);

window.addEventListener("resize",handleWindowResize);