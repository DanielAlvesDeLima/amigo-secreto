//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Variável para armazenar a lista de amigos
let listaAmigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
  // Recupera o input de texto
  const inputAmigo = document.getElementById('amigo');
  
  // Recupera o valor do input de texto
  const nomeAmigo = inputAmigo.value.trim();
  
  // Verifica se o nome do amigo não está vazio
  if (nomeAmigo !== '') {
    // Adiciona o nome do amigo à lista
    listaAmigos.push(nomeAmigo);
    
    // Limpa o input de texto
    inputAmigo.value = '';
    
    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();
  }
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
  // Recupera a lista de amigos na tela
  const listaAmigosTela = document.getElementById('listaAmigos');
  
  // Limpa a lista de amigos na tela
  listaAmigosTela.innerHTML = '';
  
  // Percorre a lista de amigos e adiciona cada um à lista na tela
  listaAmigos.forEach((amigo, indice) => {
    const itemLista = document.createElement('li');
    itemLista.textContent = `${indice + 1}. ${amigo}`;
    listaAmigosTela.appendChild(itemLista);
  });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
  // Verifica se a lista de amigos não está vazia
  if (listaAmigos.length > 0) {
    // Sorteia um índice aleatório da lista de amigos
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    
    // Recupera o nome do amigo sorteado
    const amigoSorteado = listaAmigos[indiceSorteado];
    
    // Exibe o resultado do sorteio na tela
    exibirResultadoSorteio(amigoSorteado);
  } else {
    alert('Adicione amigos à lista antes de sortear!');
  }
}

// Função para exibir o resultado do sorteio na tela
function exibirResultadoSorteio(amigoSorteado) {
  // Recupera a lista de resultados na tela
  const listaResultados = document.getElementById('resultado');
  
  // Limpa a lista de resultados na tela
  listaResultados.innerHTML = '';
  
  // Cria um item de lista com o resultado do sorteio
  const itemResultado = document.createElement('li');
  itemResultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
  itemResultado.style.fontWeight = 'bold';
  itemResultado.style.fontSize = '1.2rem';
  itemResultado.style.color = '#00698f';
  
  // Adiciona o item de lista à lista de resultados na tela
  listaResultados.appendChild(itemResultado);
}