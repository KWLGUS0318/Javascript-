String 
// 문자열 

const name = 'jihyeon'
const age = '25'
const city = 'deajeon'

console.log(`저의 이름은 ${name} 이며 나이는 ${age} 이고 ${city} 에 살고 있습니다.`)



Number

//숫자형(Int)


const one = 1;
const i = 3.14;

console.log(1+1) //더하기
console.log(1-1) //빼기
console.log(1*1) //곱하기
console.log(1/1) //나누기
console.log(1%1) //나머지


Nan // Not a number 


Boolean 

//불리언 

const IsState = true;
const Notstate = false;

null // 존재하지 않는 값 
undefined // 할당되지 않은 값 


typeof 

// 변수의 자료형을 알 수 있는 도구

console.log(typeof 'null')          //object
console.log(typeof 'undefined')    // undefined



//형변환
//type conversion


let member = '30'

console.log(Number(member))

console.log(Number(null)) // 0
console.log(Number(undefined)) //NaN


console.log(Number(0))   //false 
console.log(Number('0')) //true


//  ** 거듭제곱
//  ++ 증가 연산자 (무조건 1 증가)
//  -- 감소 연산자 (무조건 1 감소)


//    == 왼쪽 피연산자와 오른쪽 피연산자의 값이 같으면 참을 반환

//    === 왼쪽 피연산자와 오른쪽 피연산자의 값이 같고, 같은 타입이면 참을 반환

//    != 왼쪽 피연산자와 오른쪽 피연산자의 값이 같지 않으면 참을 반환

//    !== 왼쪽 피연산자와 오른쪽 피연산자의 값이 같지 않거나, 타입이 다르면 참을 반환

//    > 왼쪽 피연산자의 값이 오른쪽 피연산자의 값보다 크면 참을 반환

//    >= 왼쪽 피연산자의 값이 오른쪽 피연산자의 값보다 크거나 같으면 참을 반환

//    < 왼쪽 피연산자의 값이 오른쪽 피연산자의 값보다 작으면 참을 반환

//    <= 왼쪽 피연산자의 값이 오른쪽 피연산자의 값보다 작거나 같으면 참을 반환