// Componentes
import Index from './index'

export default [
    {
        path: '/show/:id',
        component: Index,
        name: 'Show',
        meta: { checkAuth: true } 
    }
]
