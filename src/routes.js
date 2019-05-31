import listing from './components/pages/Listing.vue'
import addUser from './components/pages/AddUser.vue'

export default [
    {
        path: '/',
        component: listing
    },
    {
        path: '/add',
        component: addUser
    },
]