# Java Script Basic

## 01. script 위치
브라우저는 HTML을 순서대로 읽으면서 (parsing HTML) css와 병합해서 DOM요소로 변환한다.

<br>

### 1.1 head tag 안에 위치할 경우

   ``<script src="main.js"></script>``


> 실행순서<br>
 : HTML 순서대로 읽기 -> [ js 다운- js 실행 ]-> 나머지 HTML 읽기

 단점1 : script가 대용량일 경우 [ js를 다운하고 실행하는 데에 ] 많은 시간이 소요된다. 
사용자가 화면을 보기까지 많은 시간이 걸릴수도 있다.

단점2 : 하단에 js를 사용해야할 경우 js를 이미 실행해버렸으므로 동작에 문제가 생긴다.



### 1.2 body tag 닫기 직전

    <script src="main.js"></script>
> 실행순서<br>
: HTML 순서대로 읽기 -> [ js 다운- js 실행 ]

장점1 : 사용자가 내용을 비교적 빨리 볼 수 있다.

단점1 : javascript와 매우 의존적인 경우라면, 사용자가 해당 의미있는 내용을 보기 위하여 
[ js 다운 - js 실행 ]하는 과정을 기다려야 한다.

### 1.3 head tag + async 속성 사용~~~~

    <script async src="main.js"></script>
> 실행순서<br>
: HTML 순서대로 읽기 -> [ js 다운 ] + HTML 순서대로 읽기 (병렬)->
[ 다운 완료 후 js 실행 ] -> 나머지 HTML 읽기

장점1 : 1.2 body tag 닫기 직전에 위치와 달리 HTML 읽어오는 것과 병렬적으로 js 다운로드가 이루어지기 때문에 시간 절약이 된다 .<br>

단점1 : js 내부에 HTML에서 쿼리를 조작하는, 해당 HTML 코드가 나중에 나온다면 문제가 생길 수 있다.사용자가 해당 의미있는 내용을 보기 위하여
[ js 다운 - js 실행 ]하는 과정을 기다려야 한다.


> * async은 boolean 속성이다. 존재하면 참 / 없다면 거짓
> 
### 1.4 head tag + defer 속성 사용

    <script defer src="main.js"></script>
> 실행순서<br>
: HTML 순서대로 읽기 + [ js 다운] -> [ js 실행 ]

장점1 : HTML 코드를 읽어 오는 동안 script 다운을 완료하고, 사용자가 화면을 볼 때 바로 해당 파일이 실행된다.



<hr/>

## 02. javascript 용어 

### 2.1 변수
1. 상수 : const
2. 변수 : let
업데이트 전에 var 라는 변수 예약어가 있었지만 의미전달을 위해 const와 let을 더 사용한다.

### 2.2 type 문자 
""와 ''로 표현

### 2.2 type 숫자

### 2.3 type null
비어있다기보다, 아무것도 없는 상태로 채워줬다.
메모리(공간)는 존재하고, 값도 존재한다. 값=비어있어용
` const nullIs = null; `

### 2.4 type defined
변수는 생성했지만, 정의되지 않은 변수이다.
메모리(공간)는 존재하지만, 값이 없다.
`  let undefinedIs; `

### 2.5 type boolean 
true 와 false

### 2.6 배열
1) 선언

```   var arr = [element0, element1, element2, ..., elementN];```
2) 문법

`arr.concat(arr2);`  - 배열 결합
`arr.push(elementN);`
``
``

### 2.7 객체 

1) 선언

`const player = {
name : "nico",
points : 121212,
handsome : true,
};
`

2) 호출

 객체이름.속성;

