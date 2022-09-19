// 변수 선언 방법

var X
// 변수로 선언 + 값을 초기화한다.


//하지만 사용하지 않음 


//이유 
var n = 1;

function test() {
  console.log(n)
  var n = 2;
  console.log(n);
}

test();

// 2 


//변수 호이스팅 

var n = 1;

function test() {
  // 이유 1
  var n // hoisiting  // undefined
  console.log(n)
  n = 2;
  console.log(n)
}


let X 
//지역 변수를 선언하고 추가로 동시에 값을 초기화한다.  = 변할 수 있는 값 



//const = 변하지 않는 값 

//1. 변수는 문자와 숫자, $와 _만 사용 가능
//2. 첫글자는 숫자가 될수 없다.
//3. 예약어는 사용할 수 없다.
//주요 예약어 public, class , return , void ,this , This();
//4. 가급적 상수는 대문자로 선언
//5. 변수명은 읽기 쉽고 이해할 수 있게 선언