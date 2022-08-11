/* var name = prompt("이름을 입력하세요.");
console.log(name + "님, 환영합니다.");
document.write("<b><big>" + name + "</big></b>님, 환영합니다.");
alert(name + "님, 환영합니다."); */

// console.log(`${name}님, 안녕하세요.`);

//변수(variable): 값이 여러 번 달라질 수 있는 데이터

/* var userNumber = prompt("숫자를 입력하세요."); +/

// if(userNumber !== null){ //입력값이 null이 아니면 if~else문을 실행
//     if(userNumber % 3 === 0) {
//         alert("3의 배수입니다.");
//     }
//     else {
//         alert("3의 배수가 아닙니다.");
//     }
// }
// else
//     alert("입력이 취소됐습니다."); //입력값이 null이면 알림창을 보여 줌

/* if(userNumber % 2 == 0) {
    alert("짝수입니다.");
}
else {
    alert("홀수입니다.");
} */

/* var num = parseInt(prompt("2단에서 100단 사이의 단을 입력해주세요"));

if(num < 9){
    for(var i = 1;i<10;i++)
    {
     document.write(num  + " * " + i + " = " + num * i + "<br>");
    }
}
else{
    for(var i = 1;i<=num;i++)
    {
        document.write(num  + "" + i + "=" + num + i + "<br>");
    }
} */

/* function altf4(){
    alert('환영합니다.');
} */

var cover =  document.getElementById("cover");

cover.addEventListener("mouseover", () => {
    cover.src = "YENAtwo.jpg";
});

cover.addEventListener("mouseout", () => {
    cover.src = "YENAone.jpg";
});