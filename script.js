function Converter(){
  let valorDigitado = document.querySelector("input#valor")
  let moedaSelecionada= document.getElementsByName("moeda")

  let valor = Number(valorDigitado.value)
  let valorEmDolar = valor * 5.27 //cotação do dia 19/10/2022
  let valorEmEuro = valor * 5.15 //cotação do dia 19/10/2022
  let elementoValorCovertido = document.querySelector("h2#valorConvertido");
  

  if(moedaSelecionada[0].checked){
    let valorConvertido = (elementoValorCovertido.innerHTML = `Seu valor convertido para Dólar é: ${valorEmDolar.toFixed(2)} USD`)
  } else if(moedaSelecionada[1].checked){
    let valorConvertido = (elementoValorCovertido.innerHTML = `Seu valor convertido para Euro é: ${valorEmEuro.toFixed(2)} EUR`)
  }
}