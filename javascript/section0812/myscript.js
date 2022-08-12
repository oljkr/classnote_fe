/* myscript. js */
//확장명 js자체가 <script></script>를 포함하고 있기 때문에 <script></script> 안 써도 됨
function hap(a, b) {
  //두수사이의 합을 반환하시오
  let sum = 0;
  if (a <= b) {
    for (let x = a; x <= b; x++) {
      sum += x;
    }
  } else {
    for (let x = b; x <= a; x++) {
      sum += x;
    }
  }
  return sum;
}

// //선생님 풀이
// function hap(a, b){
//     if(a>b){
//         let tmp=a;
//         a=b;
//         b=tmp;
//     }

//     let sum=0;
//     for(let n=a; n<=b; n++){
//         sum += n;
//     }

//     return sum;
// }

// function diff(a, b){ //두수사이의 차이를 반환하시오
//     let cha=(a-b);
//     return Math.abs(cha);
// }

function diff(a, b) {
  return Math.abs(a - b);
}

function leap(year) {
  //윤년 평년을 반환하시오
  let a;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    a = "윤년";
  } else a = "평년";
  return a;
}
