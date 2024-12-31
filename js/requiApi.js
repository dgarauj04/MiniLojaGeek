async function listaProdutos() {
    const conexao = await fetch('http://localhost:3000/produtos');
    const convert = await conexao.json();
    console.log(convert);

    return convert;
}

async function criaProduto(nome, preco, imagem) {
    const conexao = await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });
    const convert = await conexao.json();
    console.log(convert);

    return convert;
}

export const requiApi = {
    criaProduto,
    listaProdutos
}