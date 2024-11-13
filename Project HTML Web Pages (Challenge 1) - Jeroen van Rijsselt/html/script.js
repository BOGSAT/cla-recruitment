const swiper = new Swiper(".swiper", {
  // Optional parameters
  effect: "fade",
  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const yearSpan = document.querySelector("#currentYear");
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();
//text email

const name = document.getElementById("name");
const email = document.getElementById("email");
const textBox = document.getElementById("textbox");

function checkForm(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let textBox = document.getElementById("textbox").value;
  if (
    name.trim().length > 0 &&
    email.includes("@") &&
    textBox.trim().length > 0
  ) {
    Swal.fire({
      title: "Good job!",
      text: "You're email is sent!",
      icon: "success",
    });
    return;
  } else if (name.trim().length === 0) {
    let fillName = document.querySelector("#fillname");
    fillName.innerText = "Name is required";
    fillName.style.color = "red";
    setTimeout(function () {
      document.querySelector("#fillname").innerHTML = "";
    }, 3000);
    return;
  } else if (!email.includes("@")) {
    let fillEmail = document.querySelector("#fillmail");
    fillEmail.innerText = "Email is required";
    fillEmail.style.color = "red";
    setTimeout(function () {
      document.querySelector("#fillmail").innerHTML = "";
    }, 3000);
    return;
  } else if (textBox.trim().length === 0) {
    let fillMessage = document.querySelector("#fillmessage");
    fillMessage.innerText = "Message is required";
    fillMessage.style.color = "red";
    setTimeout(function () {
      document.querySelector("#fillmessage").innerHTML = "";
    }, 3000);
  }
  return;
}
