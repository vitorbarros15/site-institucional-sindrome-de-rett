import { Router } from "./router.js"

console.log(window.location);

const router = new Router()
router.add('/', "pages/home.html") 
router.add("/sobrerett", "/pages/sobrerett.html")
router.add("/abrete", "/pages/abrete.html")
router.add(404, "/pages/404.html")

router.handle()
    
window.onpopstate = () => router.handle()
window.route = () => router.route()
/*
const routes = {
    "/": "/pages/home.html",
    "/about": "/pages/about.html",
    "/contact": "/pages/contact.html",
    404: "/pages/404.html",
}
*/
