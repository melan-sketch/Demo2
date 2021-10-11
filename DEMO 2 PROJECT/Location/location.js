/**navigation */
const menuBtn = document.querySelector(".menu-icon span");
         const cancelBtn = document.querySelector(".cancel-icon");
         const items = document.querySelector(".nav-items");

         menuBtn.onclick = ()=>{
           items.classList.add("active");
           menuBtn.classList.add("hide");
           cancelBtn.classList.add("show");
           document.getElementsByClassName(".caption").style.marginTop = '60px';
          }
         
         cancelBtn.onclick = ()=>{
           items.classList.remove("active");
           menuBtn.classList.remove("hide");
           cancelBtn.classList.remove("show");
           cancelBtn.style.color = "#ff3d00";
         }

         function caption(){
          document.getElementById("caption").style.marginTop = "300px";
         }
         function captionback(){
          document.getElementById("caption").style.marginTop = "190px";
         }

/**Timer */ 
//Countdown from Opening Time
let countDownDate = new Date("January 1, 2022 00:00:00").getTime();
//Countdown Formula
let countdownfunction = setInterval(function () {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("date").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("date").innerHTML = "EXPIRED";
    }
}, 1000);
