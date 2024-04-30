document.addEventListener("DOMContentLoaded", function () {
  const imgcellphone = document.querySelectorAll(".img-celular ");

  let accountant = 0;

  setInterval(() => {
    accountant = (accountant + 1) % imgcellphone.length;
    update_Carousel();
  }, 5000);

  function update_Carousel() {
    imgcellphone.forEach((imagem) => {
      imagem.style.opacity = 0;
    });
    imgcellphone[accountant].style.opacity = 1;
    imgcellphone[accountant].style.transition = 1;
  }
});
