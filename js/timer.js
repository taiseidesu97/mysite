const display = document.getElementById("display");

setInterval(() => {
    const date= new Date(); //날짜 객체 생성
    let time = date.toLocaleTimeString(); //시간 포맷으로 변환
    display.textContent = time;
},1000)