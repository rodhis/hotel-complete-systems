import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView'
import AboutView from '@/views/About/AboutView'
import RoomsView from '@/views/Rooms/RoomsView'
import BookView from '@/views/Book/BookView'
import ContactView from '@/views/Contact/ContactView'
import SignView from '@/views/Sign/SignView'
import SignAdminView from '@/views/SignAdmin/SignAdminView'
import DashboardView from '@/views/Dashboard/DashboardView'
import RegisterView from '@/views/Register/RegisterView'
import FeedbackView from '@/views/Feedback/FeedbackView'
import MainHeader from '@/components/commons/MainHeader'
import MainFooter from '@/components/commons/MainFooter'
import AcomodacoesContent from '@/views/Dashboard/Contents/Acomodacoes/AcomodacoesContent'
import UsuariosContent from '@/views/Dashboard/Contents/Usuarios/UsuariosContent'
import HomeContent from '@/views/Dashboard/Contents/Home/HomeContent'

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            header: MainHeader,
            mainpage: HomeView,
            footer: MainFooter,
        },
    },
    {
        path: '/sobre',
        name: 'sobre',
        components: {
            header: MainHeader,
            mainpage: AboutView,
            footer: MainFooter,
        },
    },
    {
        path: '/acomodacoes',
        name: 'acomodacoes',
        components: {
            header: MainHeader,
            mainpage: RoomsView,
            footer: MainFooter,
        },
    },
    {
        path: '/reservar',
        name: 'reservar',
        components: {
            header: MainHeader,
            mainpage: BookView,
            footer: MainFooter,
        },
    },
    {
        path: '/contato',
        name: 'contato',
        components: {
            header: MainHeader,
            mainpage: ContactView,
            footer: MainFooter,
        },
    },
    {
        path: '/avaliacoes',
        name: 'avaliacoes',
        components: {
            header: MainHeader,
            mainpage: FeedbackView,
            footer: MainFooter,
        },
    },
    {
        path: '/acessar',
        name: 'acessar',
        components: {
            login: SignView,
        },
    },
    {
        path: '/acessar-admin',
        name: 'acessar-admin',
        components: {
            login: SignAdminView,
        },
    },
    {
        path: '/cadastrar',
        name: 'cadastro',
        components: {
            header: MainHeader,
            mainpage: RegisterView,
            footer: MainFooter,
        },
    },
    {
        path: '/painel',
        name: 'painel',
        props: true,
        components: {
            painel: DashboardView,
        },

        children: [
            {
                path: 'inicio',
                name: 'painel-inicio',
                component: HomeContent,
            },
            {
                path: 'usuarios',
                name: 'painel-usuarios',
                component: UsuariosContent,
                children: [{ path: '/usuario/:id', name: 'usuario', component: UsuariosContent }],
            },
            {
                path: 'acomodacoes',
                name: 'painel-acomodacoes',
                component: AcomodacoesContent,
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
