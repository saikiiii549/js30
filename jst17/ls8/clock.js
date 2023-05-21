// class Clock {
//     $date
//     constructor(min, sec) {
//         this.$date = new Date(2023, 1, 1, 0, min, sec);
//     }

//     getSecond() {
//         return this.$date.getSeconds();
//     }

//     getMinute() {
//         return this.$date.getMinutes();
//     }

//     setSecond(second) {
//         this.$date.setSeconds(second);
//     }

//     setMinute(minute) {
//         this.$date.setMinutes(minute);
//     }

//     // start = setInterval(
//     //     this.setSecond(1), 1000);
//     handleStartNtn = null;

//     start(index) {
//         setInterval(function(){
//             this.setSecond(this.getMinute()+1);
//         }, 1000)

//         console.log(index);
//     }

//     stop(index) {
//         this.setSecond(0);
//         this.setMinute(0);
//         //  clearInterval(handleStartBtn);
//         //onsole.log(index);
//     }
// }

//----- Create data--------
const clockList = [
    {"index": 1, "date": new Date (2023, 1, 2, 3, 4, 0) }, 
    {"index": 1, "date": new Date (2023, 1, 2, 3, 5, 87), }, 
    {"index": 1, "date": new Date (2023, 1, 2, 0, 7, 9) }, 
    {"index": 1, "date": new Date (2023, 1, 2, 3, 4, 0) }, 

];
//start
const start = setInterval(function(index)  { 
    const element = clockList.filter(Clock =>  Clock);
    console.log(element);

    
}, 1000);

//------- Code font end ----------
const ol = document.getElementById('clock-list');
function setfontend() {
    for (let index = 0; index < clockList.length; index++) {
        const element = clockList[index];
    
        const li = document.createElement('li');
    
        let time = element.getMinute() + ":" + element.getSecond();
    
        const startbtn = document.createElement('button');
        startbtn.innerHTML = "Start";
        startbtn.addEventListener("click", element.start(index));
    
        const stopbtn = document.createElement('button');
        stopbtn.innerHTML = "Stop";
        stopbtn.addEventListener("click", element.stop(index));
    
        li.innerHTML = time;
        li.appendChild(startbtn);
        li.appendChild(stopbtn);
        ol.appendChild(li);
    }
}

//stop all
function stopAll() {
    for(let index = 0; index < clockList.length; index++)
    clockList[index] = new Clock (0, 0);
    setfontend();
}