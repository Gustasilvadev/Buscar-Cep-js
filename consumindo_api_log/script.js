async function buscarCep(cep) {
    console.log(`--- Buscando dados para o CEP: ${cep}...`);
    
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const reponse = await fetch(url);
        const data = await reponse.json();

        if(data.erro) {
            console.error("CEP não encontrado ou inválido.");
            return; // -> Faz com que a função pare nesse momento.
        }

        console.log('--- ➡️ Endereço Encontrado ---');
        console.log('Logradouro:', data.logradouro);
        console.log('Bairro:', data.bairro);
        console.log('Cidade:', data.localidade);
        console.log('Estado (UF):', data.uf);
        console.log('DDD:', data.ddd);
        console.log('-------------------------------');

    } catch(error) {
        console.error("Houve um erro ao tentar buscar o CEP:", error)
    }
}

buscarCep('01001000');


// fetch await async
// Criar uma função chamada buscarUsuario() onde você

// async -> Marca que a função será assíncrona. 
// await -> É quando aquela ação será assíncrona.
// fetch -> Você passa a URL para que seja tratada pelo js.
// .json() -> Realiza a conversão de json -> objeto do js.

// Try / Catch
// Erro -> É do viacep (é um tratamento específico) 