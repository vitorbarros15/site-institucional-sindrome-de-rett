/*Variáveis menu principal */
const homeLink = document.getElementById('home');
const sobrerettLink = document.getElementById('sobrerett');
const abreteLink = document.getElementById('abrete');
const profissionaisLink = document.getElementById('profissionais');
const depoimentosLink = document.getElementById('depoimentos')

/*Variáveis sub menu "Sobre Rett" */
const btnVoltar = document.getElementById('btnVoltar');
const navegationSobreRett = document.getElementById('navegationSobreRett');
const subNavegation = document.getElementById('subNavegation');

/*Variaveis sub menu "Qual Profissional Procurar?" */
const textTitleFisio = document.getElementById("textTitleFisio");

/*Variaveis Divs de preenchimento de conteúdo */
const body = document.getElementById('body');
const app = document.getElementById('app');

let routes = {};

/*Paginas principais */
add('/', "/pages/home.html")
add("/sobrerett", "/pages/sobrerett.html")
add("/abrete", "/pages/abrete.html")
add("/profissionais", "/pages/profissionais.html")
add("/depoimentos", "/pages/depoimentos.html")
add(404, "/pages/404.html")

/*SubPaginas Sobre Rett */
add("/sobrerett/o-que-e-a-sindrome-de-rett/", "/pages/sobrerett/oQueSindromeRett.html")
add("/sobrerett/diagnostico/", "/pages/sobrerett/diagnostico.html")
add("/sobrerett/manistacoes/", "/pages/sobrerett/manistacoes.html")

add("/profissionais/fisioterapia", "/pages/profissionais/fisioterapia.html")


function limparSubMenu() {
    navegationSobreRett.classList.add('hide')
    navegationSobreRett.classList.remove('show')

    btnVoltar.classList.add('hide')
    btnVoltar.classList.remove('show')

    subNavegation.classList.add('hide')
    subNavegation.classList.remove('show')
}

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

                    /*Pagina 'Qual Profissional Procurar?' */
                    /*Acompanhamento Fisio */
                    const btnTitleFisio = document.getElementById("titleFisio");
                    let visibleTextFisio = false;

                    btnTitleFisio.addEventListener("click", function(event) {
                        event.preventDefault(); // Prevent the default link behavior
                    
                        if(visibleTextFisio == false) {
                            fetch("pages/profissionais/fisioterapia.html")
                            .then(response => response.text())
                            .then(content => {
                                // Update the innerHTML of the target <div> with the retrieved content
                                document.getElementById('textTitleFisio').innerHTML = content;
                                visibleTextFisio = true;
                            })
                            .catch(error => {
                                console.error("Error loading fisioterapia.html:", error);
                            });
                        } else {
                            document.getElementById('textTitleFisio').innerHTML = "";
                            visibleTextFisio = false;
                        }
                    });

                    /*Acompanhamento Nutri */
                    const btnTitleNutri = document.getElementById("submenu-nutri");
                    let visibleTextNutri = false;

                    btnTitleNutri.addEventListener("click", function(event) {
                        event.preventDefault(); // Prevent the default link behavior
                    
                        if(visibleTextNutri == false) {
                            fetch("pages/profissionais/nutricionista.html")
                            .then(response => response.text())
                            .then(content => {
                                // Update the innerHTML of the target <div> with the retrieved content
                                document.getElementById('text-nutri').innerHTML = content;
                                visibleTextNutri = true;
                            })
                            .catch(error => {
                                console.error("Error loading fisioterapia.html:", error);
                            });
                        } else {
                            document.getElementById('text-nutri').innerHTML = "";
                            visibleTextNutri = false;
                        }
                    });

                    /*Fonoaudiológa*/
                    const btnSubMenuFono = document.getElementById('submenu-fono');
                    let visibleTextFono = false;

                    btnSubMenuFono.addEventListener('click', function(event) {
                        event.preventDefault();

                        if(visibleTextFono == false) {
                            fetch("pages/profissionais/fono.html")
                            .then(response => response.text())
                            .then(content => {
                                // Update the innerHTML of the target <div> with the retrieved content
                                document.getElementById('text-fono').innerHTML = content;
                                visibleTextFono = true;
                            })
                            .catch(error => {
                                console.error("Error loading fono.html:", error);
                            });
                        } else {
                            document.getElementById('text-fono').innerHTML = "";
                            visibleTextFono = false;
                        }
                    })

                    /*Odontologia*/
                    const btnSubMenuOdonto = document.getElementById('submenu-odonto');
                    let visibleTextOdonto = false;

                    btnSubMenuOdonto.addEventListener('click', function(event) {
                        event.preventDefault();

                        if(visibleTextOdonto == false) {
                            fetch("pages/profissionais/odonto.html")
                            .then(response => response.text())
                            .then(content => {
                                // Update the innerHTML of the target <div> with the retrieved content
                                document.getElementById('text-odonto').innerHTML = content;
                                visibleTextOdonto = true;
                            })
                            .catch(error => {
                                console.error("Error loading odonto.html:", error);
                            });
                        } else {
                            document.getElementById('text-odonto').innerHTML = "";
                            visibleTextOdonto = false;
                        }
                    })

                    /*Acompanhamento Medico */
                    const btnTitleMedico = document.getElementById('titleMedico');
                    const submenu = document.querySelector(".submenu");

                    btnTitleMedico.addEventListener('click', function(event) {
                        event.preventDefault();

                        submenu.classList.toggle("show");

                    })

                    /*SubMenu Acompanhamento Médico */
                    const btnSubMenuPediatra = document.getElementById('submenu-pediatra');
                    const setaCimaPediatra = document.getElementById('seta-cima-pediatra');
                    const setaDireitaPediatra = document.getElementById('seta-direita-pediatra');
                    let visibleTextPediatra = false;

                    btnSubMenuPediatra.addEventListener('click', function(event) {
                        event.preventDefault();
                        setaCimaPediatra.classList.toggle('show');
                        setaDireitaPediatra.classList.toggle('hide');

                        if(visibleTextPediatra == false) {
                            fetch("pages/profissionais/pediatra.html")
                            .then(response => response.text())
                            .then(content => {
                                // Update the innerHTML of the target <div> with the retrieved content
                                document.getElementById('text-pediatra').innerHTML = content;
                                visibleTextPediatra = true;
                            })
                            .catch(error => {
                                console.error("Error loading pediatra.html:", error);
                            });
                        } else {
                            document.getElementById('text-pediatra').innerHTML = "";
                            visibleTextPediatra = false;
                        }
                    })

                    /*Neurologista */
                    const btnSubMenuNeuro = document.getElementById('submenu-neurologista');
                    const setaCimaNeuro = document.getElementById('seta-cima-neurologista');
                    const setaDireitaNeuro = document.getElementById('seta-direita-neurologista');
                    let visibleTextNeuro = false;

                    btnSubMenuNeuro.addEventListener('click', function(event) {
                        event.preventDefault();

                        setaCimaNeuro.classList.toggle('show');
                        setaDireitaNeuro.classList.toggle('hide');

                        if(visibleTextNeuro == false) {
                            fetch("pages/profissionais/neurologista.html")
                            .then(response => response.text())
                            .then(content => {
                                // Update the innerHTML of the target <div> with the retrieved content
                                document.getElementById('text-neuro').innerHTML = content;
                                visibleTextNeuro = true;
                            })
                            .catch(error => {
                                console.error("Error loading neuro.html:", error);
                            });
                        } else {
                            document.getElementById('text-neuro').innerHTML = "";
                            visibleTextNeuro = false;
                        }
                    })

                    /*Ortopedista*/
                    const btnSubMenuOrto = document.getElementById('submenu-orto');
                    const setaCimaOrto = document.getElementById('seta-cima-orto');
                    const setaDireitaOrto = document.getElementById('seta-direita-orto');
                    let visibleTextOrto = false;

                    btnSubMenuOrto.addEventListener('click', function(event) {
                        event.preventDefault();

                        setaCimaOrto.classList.toggle('show');
                        setaDireitaOrto.classList.toggle('hide');

                        if(visibleTextOrto == false) {
                            fetch("pages/profissionais/ortopedista.html")
                            .then(response => response.text())
                            .then(content => {
                                // Update the innerHTML of the target <div> with the retrieved content
                                document.getElementById('text-orto').innerHTML = content;
                                visibleTextOrto = true;
                            })
                            .catch(error => {
                                console.error("Error loading orto.html:", error);
                            });
                        } else {
                            document.getElementById('text-orto').innerHTML = "";
                            visibleTextOrto = false;
                        }
                    })

                    /*Gastrologista*/
                    const btnSubMenuGastro = document.getElementById('submenu-gastro');
                    const setaCimaGastro = document.getElementById('seta-cima-gastro');
                    const setaDireitaGastro = document.getElementById('seta-direita-gastro');
                    let visibleTextGastro = false;

                    btnSubMenuGastro.addEventListener('click', function(event) {
                        event.preventDefault();

                        setaCimaGastro.classList.toggle('show');
                        setaDireitaGastro.classList.toggle('hide');

                        if(visibleTextGastro == false) {
                            fetch("pages/profissionais/gastrologista.html")
                            .then(response => response.text())
                            .then(content => {
                                // Update the innerHTML of the target <div> with the retrieved content
                                document.getElementById('text-gastro').innerHTML = content;
                                visibleTextGastro = true;
                            })
                            .catch(error => {
                                console.error("Error loading gastro.html:", error);
                            });
                        } else {
                            document.getElementById('text-gastro').innerHTML = "";
                            visibleTextGastro = false;
                        }
                    })


                    /*Pneumologista*/
                    const btnSubMenuPneu = document.getElementById('submenu-pneu');
                    const setaCimaPneu = document.getElementById('seta-cima-pneu');
                    const setaDireitaPneu = document.getElementById('seta-direita-pneu');
                    let visibleTextPneu = false;

                    btnSubMenuPneu.addEventListener('click', function(event) {
                        event.preventDefault();

                        setaCimaPneu.classList.toggle('show');
                        setaDireitaPneu.classList.toggle('hide');

                        if(visibleTextPneu == false) {
                            fetch("pages/profissionais/pneumologista.html")
                            .then(response => response.text())
                            .then(content => {
                                // Update the innerHTML of the target <div> with the retrieved content
                                document.getElementById('text-pneu').innerHTML = content;
                                visibleTextPneu = true;
                            })
                            .catch(error => {
                                console.error("Error loading pneu.html:", error);
                            });
                        } else {
                            document.getElementById('text-pneu').innerHTML = "";
                            visibleTextPneu = false;
                        }
                    })

                    /*Caridologista*/
                    const btnSubMenuCardio = document.getElementById('submenu-cardio');
                    const setaCimaCardio = document.getElementById('seta-cima-cardio');
                    const setaDireitaCardio = document.getElementById('seta-direita-cardio');
                    let visibleTextCardio = false;
                    btnSubMenuCardio.addEventListener('click', function(event) {
                        event.preventDefault();

                        setaCimaCardio.classList.toggle('show');
                        setaDireitaCardio.classList.toggle('hide');

                        if(visibleTextCardio == false) {
                            fetch("pages/profissionais/cardiologista.html")
                            .then(response => response.text())
                            .then(content => {
                                // Update the innerHTML of the target <div> with the retrieved content
                                document.getElementById('text-cardio').innerHTML = content;
                                visibleTextCardio = true;
                            })
                            .catch(error => {
                                console.error("Error loading cardio.html:", error);
                            });
                        } else {
                            document.getElementById('text-cardio').innerHTML = "";
                            visibleTextCardio = false;
                        }
                    })

                    /*Endocrinologista*/
                    const btnSubMenuEndo = document.getElementById('submenu-endo');
                    const setaCimaEndo = document.getElementById('seta-cima-endo');
                    const setaDireitaEndo = document.getElementById('seta-direita-endo');
                    let visibleTextEndo = false;

                    btnSubMenuEndo.addEventListener('click', function(event) {
                        event.preventDefault();

                        setaCimaEndo.classList.toggle('show');
                        setaDireitaEndo.classList.toggle('hide');

                        if(visibleTextEndo == false) {
                            fetch("pages/profissionais/endocrinologista.html")
                            .then(response => response.text())
                            .then(content => {
                                // Update the innerHTML of the target <div> with the retrieved content
                                document.getElementById('text-endo').innerHTML = content;
                                visibleTextEndo = true;
                            })
                            .catch(error => {
                                console.error("Error loading endo.html:", error);
                            });
                        } else {
                            document.getElementById('text-endo').innerHTML = "";
                            visibleTextEndo = false;
                        }
                    })

            if(url == 'pages/home.html') {
                window.history.pushState({url}, '', '/');
            }
       
        }).catch(error => {
            console.error('Erro ao carregar o conteúdo:', error);
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
        depoimentosLink.style.color = 'black';
    });

    document.getElementById('sobrerett').addEventListener('click', () => {
        limparSubMenu();
        handleNavigation();

        body.classList.remove('bodyAbrete')
        app.classList.remove('appAbrete')
        navegationSobreRett.classList.add('show');
        homeLink.style.color = 'black';
        sobrerettLink.style.color = 'white';
        abreteLink.style.color = 'black';
        profissionaisLink.style.color = 'black';
        depoimentosLink.style.color = 'black';
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
        depoimentosLink.style.color = 'black';
    });

    document.getElementById('profissionais').addEventListener('click', () => {
        limparSubMenu();
        handleNavigation() 

        body.classList.add('bodyAbrete')
        app.classList.add('appAbrete')
        homeLink.style.color = 'black';
        sobrerettLink.style.color = 'black';
        abreteLink.style.color = 'black';
        profissionaisLink.style.color = 'white';
        depoimentosLink.style.color = 'black';
    });

    document.getElementById('depoimentos').addEventListener('click', () => {
        limparSubMenu();
        handleNavigation() 

        body.classList.add('bodyAbrete')
        app.classList.add('appAbrete')
        homeLink.style.color = 'black';
        sobrerettLink.style.color = 'black';
        abreteLink.style.color = 'black';
        profissionaisLink.style.color = 'black';
        depoimentosLink.style.color = 'white';
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
    
  } else if (urlCarregada.endsWith("/depoimentos")) {
    carregamentoConteudo('pages/depoimentos.html')
  } else {
    carregamentoConteudo('pages/404.html')
}
});


  