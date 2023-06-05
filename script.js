function Calcular() {

  // Pedir quatidades e armazenar
  var elementoCervejas = document.getElementById("cervejasCalculo");
  var cervejas = elementoCervejas.value;
  var valorCervejas = parseFloat(cervejas);

  var elementoCopos = document.getElementById("coposCalculo");
  var copos = elementoCopos.value;
  var valorCopos = parseFloat(copos);

  var elementoKits = document.getElementById("kitsCalculo");
  var kits = elementoKits.value;
  var valorKits = parseFloat(kits);

  var elementoKitsDuplo = document.getElementById("kitsDuploCalculo");
  var kitsDuplo = elementoKitsDuplo.value;
  var valorKitsDuplo = parseFloat(kitsDuplo);

  var elementoPack = document.getElementById("packCalculo");
  var pack = elementoPack.value;
  var valorPack = parseFloat(pack);

  var elementoPackDuplo = document.getElementById("packDuploCalculo");
  var packDuplo = elementoPackDuplo.value;
  var valorPackDuplo = parseFloat(packDuplo);

  // calcular custo total
  var custoTotal = (
    (valorCervejas * 20) +
    (valorCopos * 15) + (valorKits * 135) + (valorKitsDuplo * 260) + (valorPack * 110) + (valorPackDuplo * 210));

  // arredondar 1 casa decimal
  var total = custoTotal.toFixed(1);

  // checar media no console
  console.log(total);

  if (isNaN(total) || (total < 0)) {
    console.log("Not a number");
    var exibicaoFinal = "Por favor insira um número maior ou igual a zero";

  } else {
    console.log(total);
    var exibicaoFinal = "Seu custo total será de " + total + " reais";

  }

  // exibir no html (troca de valores)
  elementoTotal.innerHTML = exibicaoFinal;

  // checar condicao no console
  console.log(exibicaoFinal);
}