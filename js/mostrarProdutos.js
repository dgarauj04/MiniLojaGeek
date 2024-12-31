import { requiApi } from "./requiApi.js";  

const lista = document.querySelector("[data-produtos]");

function constroiCard(nome, preco, imagem) {
    const card = document.createElement('li');
    card.className = 'card';
    card.innerHTML = `
    <img src="${imagem}" alt="Imagem do Produto">
    <div class="card-info">
        <p>${nome}</p>
        <div class="card-valor">
            <p>$ ${preco}.00</p>
            <button id="apagar"><ion-icon name="trash"></ion-icon></button>
        </div>
    </div>
`;

const botaoApagar = card.querySelector('#apagar');
    botaoApagar.addEventListener('click', () => {
        card.remove(card); 
    });

    return card;
}

async function listaProduto() {
    const listaApi = await requiApi.listaProdutos();
    listaApi.forEach(tipo => 
        lista.appendChild(constroiCard(tipo.nome, tipo.preco, tipo.imagem)));
}

listaProduto();