function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length < 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "imagens");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade <= 10) {
        img.setAttribute("src", "/MENINO CRIANÇAII.png");
      } else if (idade <= 25) {
        img.setAttribute("src", "/HOMEM JOVEMII.png");
      } else if (idade <= 50) {
        img.setAttribute("src", "/HOMEM ADULTOII.png");
      } else if (idade <= 65) {
        img.setAttribute("src", "/HOMEM IDOSOII.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade <= 10) {
        img.setAttribute("src", "/MENINA CRIANÇAII.png");
      } else if (idade <= 25) {
        img.setAttribute("src", "/MULHER JOVEMII.png");
      } else if (idade <= 50) {
        img.setAttribute("src", "/MULHER ADULTAII.png");
      } else if (idade <= 65) {
        img.setAttribute("src", "/MULHER IDOSAII.png");
      }
    }
    res.computedStyleMap.textAlign = "center";
    res.innerHTML = `Detectado ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
