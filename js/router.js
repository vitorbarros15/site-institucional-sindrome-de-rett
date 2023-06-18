// Orientação a Objetos no JS 
export class Router {
    routes = {};
    routeName = "";
    add(routeName, page) {
        this.routeName = routeName;
        this.routes[routeName] = page;
    }

    
    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }
    
    handle() {
        //outra formar const {pathname} = window.location isso se chama destruct/destruturar
        // ex02 const { pathname, href, host, port} = window.location
        const pathname = window.location.pathname
        const route = this.routes[pathname] || this.routes[404]
        /*fetch(route).then(function(data) {
            return data.text()
        })
        */
        this.routeName = pathname;
        console.log(typeof pathname, pathname);

        console.log(typeof this.routeName, this.routeName);

        fetch(route).
        then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })

        console.log(typeof "/sobrerett");

        console.log(this.routeName == "/sobrerett");

        if (this.routeName == "/sobrerett") {
            const codeJS = "/buttons.js";
            fetch(codeJS)
            .then(response => response.text())
            .then(codigo => {
            const scriptElement = document.getElementById("code");
            scriptElement.textContent = codigo;
            })
            .catch(error => {
            console.error("Erro ao carregar o arquivo:", error);
            });

            console.log(codeJS);
        }
    }
}
