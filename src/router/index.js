import Vue from 'vue'
import Router from 'vue-router'
import YeTestSkin from '@/yezi/YeTestSkin'
import Test from '@/components/Test'
import Jcn from '@/yezi/Jcn'
import Fcn from '@/yezi/Fcn'
import En from '@/yezi/En'
import ListTest from '@/yezi/ListTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'YeTestSKin',
      component: YeTestSkin,
      children:[
        {path:'/Test',component:Test},
        {path:'/Jcn',component:Jcn},
        {path:'/Fcn',component:Fcn},
        {path:'/En',component:En},
        {path:'/list',component:ListTest},
      ]
    },
    // {
    //   path:'/Test',
    //   component:Test
    // }
  ]
})
