// Smooth Scrolling
$("nav a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Form Validation
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    nameInput.focus();
  } else if (emailInput.value.trim() === "") {
    alert("Please enter your email address.");
    emailInput.focus();
  } else if (messageInput.value.trim() === "") {
    alert("Please enter your message.");
    messageInput.focus();
  } else {
    alert("Your message has been sent. Thank you!");
    form.reset();
  }
});
