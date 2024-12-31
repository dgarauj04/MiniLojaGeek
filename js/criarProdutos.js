import { requiApi } from "./requiApi.js";

const formulario = document.querySelector('[data-form]');
const mensageEnvio = document.getElementById('mensage-envio');

async function criarProduto(evento) {
  evento.preventDefault();

  const nome = document.querySelector('[data-nome]').value;
  const preco = document.querySelector('[data-preco]').value;
  const imagem = document.querySelector('[data-image]').value;

  await requiApi.criaProduto(nome, preco, imagem);

   mensageEnvio.style.display = 'block'; setTimeout(() => { mensageEnvio.style.display = 'none'; }, 4000); 
  
}

formulario.addEventListener('submit', evento => criarProduto(evento)); 