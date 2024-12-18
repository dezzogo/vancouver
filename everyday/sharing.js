document
  .querySelector('[type="submit"]')
  .addEventListener("click", function () {
    if (
      window.location.href.includes("c_campaign=614") &&
      !document.body.innerText.includes("Required")
    ) {
      dataLayer.push({ event: "formulario_madeira" });
      console.log("formulario_madeira");
    }
    if (
      window.location.href.includes("c_campaign=613") &&
      !document.body.innerText.includes("Required")
    ) {
      dataLayer.push({ event: "formulario_oeiras" });
      console.log("formulario_oeiras");
    }
  });

if (document.body.innerText.includes("Your event has been scheduled successfully.") && window.location.href.includes("iss-madeira")) {
  dataLayer.push({ event: "madeira_bookatour" });
  console.log("madeira_bookatour");
}
if (document.body.innerText.includes("Your event has been scheduled successfully.") && window.location.href.includes("iss-taguspark")) {
  dataLayer.push({ event: "oeiras_bookatour" });
  console.log("oeiras_bookatour");
}

//once per page
