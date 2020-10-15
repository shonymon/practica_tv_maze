// Componentes
import Login from './login'
import Register from './register'

export default [
    {
        name: 'Login',
        path: '/login',
        component: Login,
        meta: { isGuest: true }
    },
    {
        name: 'Register',
        path: '/register',
        component: Register,
        meta: { isGuest: true }
    }
]