function main() {
  const menuButton = document.querySelector(".button_barras");
  const buttonCerrar = document.querySelector(".button_header-oculto-cerrar");
  const hiddenHeader = document.querySelector(".header_oculto");
  const header = document.querySelector(".header");
  const btnHeaderContacto = document.querySelector(".button_header-contacto");
  const btnHeaderContactoOculto = document.querySelector(
    ".text_header-oculto-w"
  );
  const btnHeaderBeneficios = document.querySelector(".text_header-beneficios");
  const btnHeaderBeneficiosOculto = document.querySelector(
    ".text_header-oculto-beneficios"
  );
  const btnHeaderAlert = document.querySelector(".text_header-alert");
  const btnHeaderAlertOculto = document.querySelector(
    ".text_header-oculto-alert"
  );
  const btnHeaderInfo = document.querySelector(".text_header-info");
  const btnHeaderInfoOculto = document.querySelector(
    ".text_header-oculto-info"
  );

  const formSection = document.querySelector("#contacto");
  const beneficiosSection = document.querySelector("#beneficios");
  const alertaSection = document.querySelector("#alertas");
  const infoSection = document.querySelector("#info");

  menuButton.addEventListener("click", function () {
    hiddenHeader.classList.remove("cerrar");
    hiddenHeader.classList.toggle("mostrar");
    header.classList.remove("mostrar");
    header.classList.toggle("cerrar");
  });

  buttonCerrar.addEventListener("click", function () {
    hiddenHeader.classList.remove("mostrar");
    hiddenHeader.classList.add("cerrar");
    header.classList.remove("cerrar");
    header.classList.add("mostrar");
  });

  btnHeaderContacto.addEventListener("click", function () {
    formSection.scrollIntoView({ behavior: "smooth" });
  });

  btnHeaderContactoOculto.addEventListener("click", function () {
    formSection.scrollIntoView({ behavior: "smooth" });
    hiddenHeader.classList.remove("mostrar");
    hiddenHeader.classList.add("cerrar");
    header.classList.remove("cerrar");
    header.classList.add("mostrar");
  });

  btnHeaderBeneficios.addEventListener("click", function () {
    beneficiosSection.scrollIntoView({ behavior: "smooth" });
  });

  btnHeaderBeneficiosOculto.addEventListener("click", function () {
    beneficiosSection.scrollIntoView({ behavior: "smooth" });
    hiddenHeader.classList.remove("mostrar");
    hiddenHeader.classList.add("cerrar");
    header.classList.remove("cerrar");
    header.classList.add("mostrar");
  });

  btnHeaderAlert.addEventListener("click", function () {
    alertaSection.scrollIntoView({ behavior: "smooth" });
  });

  btnHeaderAlertOculto.addEventListener("click", function () {
    alertaSection.scrollIntoView({ behavior: "smooth" });
    hiddenHeader.classList.remove("mostrar");
    hiddenHeader.classList.add("cerrar");
    header.classList.remove("cerrar");
    header.classList.add("mostrar");
  });

  btnHeaderInfo.addEventListener("click", function () {
    infoSection.scrollIntoView({ behavior: "smooth" });
  });

  btnHeaderInfoOculto.addEventListener("click", function () {
    infoSection.scrollIntoView({ behavior: "smooth" });
    hiddenHeader.classList.remove("mostrar");
    hiddenHeader.classList.add("cerrar");
    header.classList.remove("cerrar");
    header.classList.add("mostrar");
  });
}

main();
