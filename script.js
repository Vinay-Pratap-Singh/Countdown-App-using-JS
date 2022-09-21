let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");
let id;
let flag = true;

function runCounter(event){
    event.preventDefault();
    if(flag){
        flag = false;
        startBtn.innerText = "STOP";
        id = setInterval(() => {       
            let hr = hour.value;
            let min = minute.value;
            let sec = second.value;
        
            if(hr == 0 && min == 0 && sec == 0){
                alert("Count Down Over");
                clearInterval(id);
                flag = true;
            }
            else{
                if(sec != 0){
                    sec--;
                }
                else if(min != 0){
                    min--;
                    sec = 60;
                }
                else if(hr != 0){
                    hr--;
                    min = 60;
                }
            }

            hour.value = hr;
            minute.value = min;
            second.value = sec;
        }, 1000);
    }
    else{
        startBtn.innerText = "START";
        flag = true;
        clearInterval(id);
    }
}

resetBtn.addEventListener("click", ()=>{
    clearInterval(id);
    flag = true;
    startBtn.innerText = "START";  
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
})