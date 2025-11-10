document.getElementById('buscar-btn').addEventListener('click', () => {

    const cepDigitado = document.getElementById('cep-input').value;
        if(cepDigitado) {
            buscarCep(cepDigitado);
        } else {
            document.getElementById('erro-mensagem').textContent = "Por favor, digite um CEP.";
        }
});

async function buscarCep(cepDigitado) {

    const logradouroHtml = document.getElementById('logradouro');
    const bairroHtml = document.getElementById('bairro');
    const cidadeHtml = document.getElementById('cidade');
    const ufHtml = document.getElementById('uf');
    const dddHtml = document.getElementById('ddd');
    const erroHtml = document.getElementById('erro-mensagem');

    logradouroHtml.textContent = '';
    bairroHtml.textContent = '';
    cidadeHtml.textContent = '';
    ufHtml.textContent = '';
    dddHtml.textContent = '';
    erroHtml.textContent = '';

    try {
        const url = `https://viacep.com.br/ws/${cepDigitado}/json/`;
        const response = await fetch(url);
        const data = await response.json();

        if(data.erro) {
            erroHtml.textContent = "CEP não encontrado ou inválido";
            return;
        }

        logradouroHtml.textContent = data.logradouro;
        bairroHtml.textContent = data.bairro;
        cidadeHtml.textContent = data.localidade;
        ufHtml.textContent = data.uf;
        dddHtml.textContent = data.ddd;

    } catch(error) {
        
        erroHtml.textContent = "Houve um erro ao tentar buscar o CEP.(Verifique sua conexão ou tente mais tarde).";
    }
}

