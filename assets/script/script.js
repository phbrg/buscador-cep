// declara elementos
let elements = {
  cep: document.querySelector('.cep'),
  log: document.querySelector('.log'),
  comp: document.querySelector('.comp'),
  bairro: document.querySelector('.bairro'),
  loc: document.querySelector('.loc'),
  uf: document.querySelector('.uf'),
  ibge: document.querySelector('.ibge'),
  gia: document.querySelector('.gia'),
  ddd: document.querySelector('.ddd'),
  siafi: document.querySelector('.siafi'),
  err: document.querySelector('.err'),
  entrada: document.querySelector('.entrada'),
};

function findCep() {
  // pega o cep
  let cep = elements.entrada.value;
  cep.toString();

  // entra em contato com a api
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      if(!response.ok) throw new Error("Erro ao validar CEP!"); // verifica o se o protocolo do contato foi entre 200 a 299
      return response.json();
    })
    .then(data => {
      if(data.erro == true) { // verifica se tem um erro interno da API
        elements.err.style.display = "block"
        elements.err.innerHTML = "Erro ao validar CEP!";
        elements.cep.innerHTML = "";
        elements.log.innerHTML = "";
        elements.comp.innerHTML = "";
        elements.bairro.innerHTML = "";
        elements.loc.innerHTML = "";
        elements.uf.innerHTML = "";
        elements.ibge.innerHTML = "";
        elements.gia.innerHTML = "";
        elements.ddd.innerHTML = "";
        elements.siafi.innerHTML = "";
      } else { // se não ocorreu erro printa os valores
        elements.err.style.display = "none"
        elements.cep.innerHTML = `CEP: ${data.cep}`;
        elements.log.innerHTML = `LOG: ${data.logradouro}`;
        elements.comp.innerHTML = `COMP: ${data.complemento}`;
        elements.bairro.innerHTML = `BAIRRO: ${data.bairro}`;
        elements.loc.innerHTML = `LOC: ${data.localidade}`;
        elements.uf.innerHTML = `UF: ${data.uf}`;
        elements.ibge.innerHTML = `IBGE: ${data.ibge}`;
        elements.gia.innerHTML = `GIA: ${data.gia}`;
        elements.ddd.innerHTML = `DDD: ${data.ddd}`;
        elements.siafi.innerHTML = `SIAFI: ${data.siafi}`;
      }
    })
    .catch(error => { // printa o erro
      elements.err.style.display = "block"
      elements.err.innerHTML = error; 
    })
}