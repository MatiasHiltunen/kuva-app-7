import { createRouter, createWebHistory } from 'vue-router'
import PublicationViewAll from './components/publication/PublicationViewAll.vue'
import UsersView from './components/user/UsersView.vue'
import PublicationCreate from './components/publication/PublicationCreate.vue'
import PublicationViewDetails from './components/publication/PublicationViewDetails.vue'
import registrationViewVue from './components/registration/registrationView.vue'
import { isAuth } from './store'

export const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'Julkaisut',
            component: PublicationViewAll
        },
        {
            path: '/users',
            name: 'Käyttäjät',
            component: UsersView
        },
        {
            path: '/create',
            name: 'Uusi Postaus',
            component: PublicationCreate
        },
        {
            path: '/publication/:publicationId',
            name: 'Yksittäinen postaus',
            component: PublicationViewDetails,
            props: true
        },
        {
            path: '/register',
            name: 'Rekisteröidy',
            component: registrationViewVue
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path === '/users' && !isAuth.value) {
        next("/")
    } else {
        next()
    }
})