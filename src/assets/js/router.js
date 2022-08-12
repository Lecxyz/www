// 引入组件
// import 文件名字 from 地址
import VueRouter from 'vue-router'
import footer from '../../components/footer.vue'
import index from '../../components/index.vue'
import list from '../../components/list.vue'

import my from '../../components/my.vue'
import car from '../../components/car.vue'
import login from '../../components/login.vue'
import part from '../../components/part.vue'
import details from '../../components/details.vue'
// export default 导出文件
var router= new VueRouter({
  routes:[
      {
          path:'/',
          component:footer,
          children:[
              {
                  path:'/index',
                  component:index
              },
              {
                path:'/part',
                component:part
              },
              {
                path:'/car',
                component:car
              },
              {
                path:'/my',
                component:my
              },
          ],
          redirect:'/index'
      },
      {
        path:'/list',
        component:list
      },
      {
        path:'/details',
        component:details
      },
      {
          path:'/my',
          component:my
      },
      {
          path:'/login',
          component:login
      },
      {
        path:'/car',
        component:car
      },
      {
          path:"/*",
          redirect:'/index'
      }
      
  ]
})
// 导出
export default router;