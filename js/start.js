
/*Variáveis sub menu*/
const btnVoltar = document.getElementById('btnVoltar');
const navegationSobreRett = document.getElementById('navegationSobreRett');
const subNavegation = document.getElementById('subNavegation');

const homeLink = document.getElementById('home');
const sobrerettLink = document.getElementById('sobrerett');
const abreteLink = document.getElementById('abrete');
const profissionaisLink = document.getElementById('profissionais');

const body = document.getElementById('body');
const app = document.getElementById('app');



function limparSubMenu() {
    navegationSobreRett.classList.add('hide')
    navegationSobreRett.classList.remove('show')

    btnVoltar.classList.add('hide')
    btnVoltar.classList.remove('show')

    subNavegation.classList.add('hide')
    subNavegation.classList.remove('show')
}

let routes = {};
/*Paginas principais */
add('/', "/pages/home.html")
add("/sobrerett", "/pages/sobrerett.html")
add("/abrete", "/pages/abrete.html")
add("/profissionais", "/pages/profissionais.html")
add(404, "/pages/404.html")

/*SubPaginas Sobre Rett */
add("/sobrerett/o-que-e-a-sindrome-de-rett/", "/pages/sobrerett/oQueSindromeRett.html")
add("/sobrerett/diagnostico/", "/pages/sobrerett/diagnostico.html")
add("/sobrerett/manistacoes/", "/pages/sobrerett/manistacoes.html")


function add(routeName, page) {
    routes[routeName] = page;
}


window.addEventListener('DOMContentLoaded', () => {

    function carregamentoConteudo(url, pushState = true) {
        fetch(url).then(response => response.text()).then(html => {
            document.getElementById('app').innerHTML = html;
           
            const btnCarregarHTMLOQueE = document.getElementById('btnOqueRett');
            const btnCarregarHTMLDiagnostico = document.getElementById('btnDiagnostico');
            const btnCarregarHTMLManifestacao = document.getElementById('btnManifestacoes');



                btnCarregarHTMLOQueE.addEventListener('click', () => {
                    fetch('pages/sobrerett/oQueSindromeRett.html').then(response => response.text()).then(html => {
                        document.getElementById('app').innerHTML = html;
                    })
                    .catch(error => {
                        console.error('Erro ao carregar o conteúdo de oQueSindromeRett.html:', error);
                    });

                    subNavegation.innerHTML = `<h1>- O que é a Sindrome de Rett?</h1>`;
                    btnVoltar.classList.add('show');
                    subNavegation.classList.add('show');
                });


                btnCarregarHTMLDiagnostico.addEventListener('click', () => {
                    fetch('pages/sobrerett/diagnostico.html').then(response => response.text()).then(html => {document.getElementById('app').innerHTML = html;})
                    .catch(error => {
                        console.error('Erro ao carregar o conteúdo de diagnostico.html:', error);
                    });

                    subNavegation.innerHTML = `<h1>- Diagnóstico</h1>`;
                    btnVoltar.classList.add('show')
                    subNavegation.classList.add('show')
                    
                });

                btnCarregarHTMLManifestacao.addEventListener('click', () => {
                    fetch('pages/sobrerett/manifestacoes.html').then(response => response.text()).then(html => {document.getElementById('app').innerHTML = html;})
                    .catch(error => {
                        console.error('Erro ao carregar o conteúdo de manifestacao.html:', error);
                    });

                    subNavegation.innerHTML = `<h1>- Manifestações</h1>`;
                    btnVoltar.classList.add('show')
                    subNavegation.classList.add('show')
                });


                

            if(url == 'pages/home.html') {
                window.history.pushState({url}, '', '/');
            }
       
        }).catch(error => {
            console.log.error('Erro ao carregar o conteúdo:', error);
        });
    }

    function handleNavigation(event) {
        event = event || window.event
        event.preventDefault();

        window.history.pushState({}, "", event.target.href)

        const route = event.target.getAttribute('href');
        const url = routes[route] || routes[404]
       
        carregamentoConteudo(url)
    }

    document.getElementById('home').addEventListener('click', () => {
        handleNavigation();
        limparSubMenu();

        body.classList.remove('bodyAbrete')
        app.classList.remove('appAbrete')
        homeLink.style.color = 'white';
        sobrerettLink.style.color = 'black';
        abreteLink.style.color = 'black';
        profissionaisLink.style.color = 'black';
    });

    document.getElementById('sobrerett').addEventListener('click', () => {
        handleNavigation();
        limparSubMenu();

        body.classList.remove('bodyAbrete')
        app.classList.remove('appAbrete')
        navegationSobreRett.classList.add('show');
        homeLink.style.color = 'black';
        sobrerettLink.style.color = 'white';
        abreteLink.style.color = 'black';
        profissionaisLink.style.color = 'black';
    });

    document.getElementById('abrete').addEventListener('click', () => {
        limparSubMenu();
        handleNavigation();

        body.classList.add('bodyAbrete');
        app.classList.add('appAbrete');
        homeLink.style.color = 'black';
        sobrerettLink.style.color = 'black';
        abreteLink.style.color = 'white';
        profissionaisLink.style.color = 'black';
    });

    document.getElementById('profissionais').addEventListener('click', () => {
        limparSubMenu();
        handleNavigation() 

        body.classList.remove('bodyAbrete')
        app.classList.remove('appAbrete')
        homeLink.style.color = 'black';
        sobrerettLink.style.color = 'black';
        abreteLink.style.color = 'black';
        profissionaisLink.style.color = 'white';
    });

    btnVoltar.addEventListener('click', function() {
        carregamentoConteudo('pages/sobrerett.html')
        limparSubMenu();
        navegationSobreRett.classList.add('show');
      });
    
    // Obtém a URL atual
    let urlCarregada = window.location.href
    
    // Verifica qual página deve ser carregada com base na URL
    if (urlCarregada.endsWith("/") || urlCarregada.endsWith("/index.html")) {
        carregamentoConteudo('pages/home.html')
        homeLink.style.color = 'white';


  } else if (urlCarregada.endsWith("/sobrerett")) {
        carregamentoConteudo('pages/sobrerett.html')

  } else if (urlCarregada.endsWith("/abrete")) {
        carregamentoConteudo('pages/abrete.html')

  } else if (urlCarregada.endsWith("/profissionais")) {
    carregamentoConteudo('pages/profissionais.html')
  } else {
    carregamentoConteudo('pages/404.html')

  }
});


  