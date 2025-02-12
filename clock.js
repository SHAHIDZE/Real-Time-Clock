// html file ni run qiling


function liveClock() {
    let realTime = new Date();

    let result = (realTime.getHours()+":"+realTime.getMinutes()+":"+realTime.getSeconds()).padStart(2, "0");
    // document.querySelector("h1").innerHTML = result;
    console.log(result);

}


setInterval(liveClock, 1000);