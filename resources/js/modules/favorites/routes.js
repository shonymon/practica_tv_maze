// Componentes
import Index from './index'

export default [
    {
        path: '/favorites',
        component: Index,
        name: 'Favoritos',
        meta: { checkAuth: true } 
    }
]
