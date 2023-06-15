
 // Função para carregar o conteúdo do arquivo HTML externo e inserir na divApp
 function carregarHTMLExterno() {
    var divApp = document.getElementById('app');
    
    // Caminho para o arquivo HTML externo
    var url = 'pages/home.html';

    fetch(url)
        .then(response => response.text())
        .then(data => {
            divApp.innerHTML = data;
        })
        .catch(error => {
            console.log('Erro ao carregar o arquivo HTML:', error);
        });
}

// Chama a função para carregar o HTML externo quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    carregarHTMLExterno();
});