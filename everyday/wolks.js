var emailEC = //copiar apenas abaixo
  function () {
    var regex = /\S+@\S+\.\S+/;
    var email = document.querySelector(
      "#wpcf7-f294-o2 > form > p > span:nth-child(4) > input"
    );
    if (!email) return;
    if (!regex.test(email.value)) return;
    return email.value;
  };

var phoneEC = //copiar apenas abaixo
  function () {
    var g_countryCode = "55";
    var g_getPhone = document.querySelector(
      "#wpcf7-f294-o2 > form > p > span:nth-child(5) > input"
    ).value;
    g_getPhone = g_countryCode + g_getPhone;
    g_getPhone = g_getPhone.replace(/\D/g, "");
    if (g_getPhone.length >= 11 && g_getPhone.length <= 15) {
      return "+" + g_getPhone;
    }
  };


//CUSTOM HTML

// Novos
var formNovos = document.querySelector("#wpcf7-f213-o1 > form");
formNovos.addEventListener("submit", function () {
  if (window.location.href.includes("veiculos")) {
    dataLayer.push({
      event: "novos_form_submit",
    });
  }
});

// Lateral
var formLateral = document.querySelector("#wpcf7-f213-o1 > form");
formLateral.addEventListener("submit", function () {
  if (window.location.href.includes(!"veiculos")) {
    dataLayer.push({
      event: "lateral_form_submit",
    });
  }
});

// Seminovos
var formSeminovos = document.querySelector("#wpcf7-f294-o2 > form");
formSeminovos.addEventListener("submit", function () {
  dataLayer.push({
    event: "seminovos_form_submit",
  });
});

// Contato
var formContato = document.querySelector("#wpcf7-f52-p13-o1 > form");
formContato.addEventListener("submit", function () {
  dataLayer.push({
    event: "contato_form_submit",
  });
});
