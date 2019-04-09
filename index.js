const seconds = function*() {
    const data = new Date();
    const sec = data.getSeconds();
    document.getElementById("seconds").innerHTML = sec.toString().padStart(2, "0");
    minutes().next(sec);
    setInterval(() => {
        seconds().next();
    }, 1000); 
      
}


const minutes = function*(sec) {
    (sec === 59) ? min++ : min;
    document.getElementById("minutes").innerHTML = min.toString().padStart(2, "0");
    hours().next(min);
}

const hours = function*(min) {
    (min === 59) ? hour++ : hour;
    document.getElementById("hours").innerHTML = hour.toString().padStart(2, "0");
}

const data = new Date();
let min = data.getMinutes();
document.getElementById("minutes").innerHTML = min.toString().padStart(2, "0");
let hour = data.getHours();
document.getElementById("hours").innerHTML = hour.toString().padStart(2, "0");
const sec = seconds();
sec.next();


