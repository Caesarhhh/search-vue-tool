import Login from "./components/login"
import Search from "./components/search"
const routers=[{
        path: '/',name:"login",component:Login
    },
    {
        path: '/login',name:"login",component:Login
    },
    {
        path: '/search',name:"search",component:Search
    }
]
export default routers