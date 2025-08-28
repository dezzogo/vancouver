function() {
  try {
    var form = document.querySelector('ID-FORM');
    if (!form) return false;

    var campos = [
      form.querySelector('[name=name]'),
      form.querySelector('[type=email]'),
      form.querySelector('.js-field-cf_selecione_uma_unidade_3'),
      form.querySelector('.js-field-cf_ano_letivo'),
      form.querySelector('.js-field-cf_selecione_um_nivel_4'),
      form.querySelector('[name=cf_escola_de_origem]'),
      form.querySelector('.js-field-cf_onde_conheceu_o_crb')
    ];

    for (var i = 0; i < campos.length; i++) {
      if (!campos[i] || !campos[i].value || campos[i].value.trim() === '') {
        return false;
      }
    }

    return true;
  } catch (e) {
    return false;
  }
}