//1.manejo de rutas
//configuro el router(general para toda la app)
//dos metodos
//desestrutrucro
import { createRouter,createWebHashHistory } from "vue-router";

const routes=[
    {
        path:"/",
        component:()=>import('../modules/pokemon/pages/BienvenidaPage')
    },

    {
        path:"/juego",
        component:()=>import('../modules/pokemon/pages/JuegoPage')
    },

    {
        path:"/premios",
        component:()=>import('../modules/pokemon/pages/PremiosPage')
    },


    {
        path:"/pokemon",
        component:()=>import('../modules/pokemon/pages/PokemonPages')
    },


    {
        path:"/:pathmach(.*)*",
        component:()=>import('../modules/pokemon/pages/PaginaNoEncontradaPage')
    }

]
//Creo una constante
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
//defincion de  las rutas de mi aplicacion
export default router