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

const botaoDesfazer = document.getElementById("desfazer");
botaoDesfazer.addEventListener("click", function () {
  if (passado.length === 0) {
    return;
  }
  futuro.push();
  atual = passado.pop();
  render();
});

const botaoRefazer = document.getElementById("refazer");
botaoRefazer.addEventListener("click", function () {
  if (futuro.length === 0) {
    return;
  }
  passado.push();
  atual = futuro.pop();
  render();
});

render();
