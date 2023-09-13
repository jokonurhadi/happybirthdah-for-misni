let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

const hitungMundur = setInterval(function(){

    let countDown = () => {
        let futureDate = new Date("29 Dec 2023 08:00:00");
        let currentDate = new Date();
        let myDate = futureDate - currentDate;
        //console.log(myDate);
      
        let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
      
        let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
      
        let min = Math.floor(myDate / 1000 / 60) % 60;
      
        let sec = Math.floor(myDate / 1000) % 60;
      
        daysItem.innerHTML = days;
        hoursItem.innerHTML = hours;
        minItem.innerHTML = min;
        secItem.innerHTML = sec;

        if (myDate <= 0) {
          clearInterval(hitungMundur);
          redirectToNextPage(); // Panggil fungsi untuk mengarahkan ke halaman berikutnya setelah countdown habis.
        }
      };

      countDown();
    }, 1000);

    // Fungsi untuk mengarahkan ke halaman berikutnya
    function redirectToNextPage() {
      window.location.href = "pembuka.html"; // Ganti "halaman2.html" dengan URL halaman berikutnya yang ingin Anda tuju.
    }

