console.log("Hello, World!");

let atual = 0;
let passado = [];
let futuro = [];

const valor = document.getElementById("valor");
function render() {
  valor.textContent = atual;
}

const botaoMais = document.getElementById("mais");

botaoMais.addEventListener("click", function () {
  passado.push(atual);
  atual = atual + 1;
  futuro = [];
  render();
});

const botaoMenos = document.getElementById("menos");

botaoMenos.addEventListener("click", function () {
  passado.push(atual);
  atual = atual - 1;
  futuro = [];
  render();
});

render();
