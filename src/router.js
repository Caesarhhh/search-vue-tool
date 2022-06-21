import Search from './components/search.vue'
import Search_result from './components/Search_result.vue'
import Login from './components/login.vue'
import Search_summary from './components/Search_summary.vue'
import Welcome from './components/Welcome.vue'
const routers=[
    {
        path: '/login',name:"login",component:Login
    },
    {
        path: '/Search',name:"Search",component:Search
    },
    {
        path:'/Search_summary',name:"Search_summary",component:Search_summary
    },
    {
        path:'/Search_result',name:"Search_result",component:Search_result
    },
    {
        path:'/Welcome',name:"Welcome",component:Welcome
    },
    {path: '',name:"Welcome",component:Welcome}
]
export default routers