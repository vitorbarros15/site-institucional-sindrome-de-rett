// Orientação a Objetos no JS 
export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
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
        fetch(route).
        then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}
