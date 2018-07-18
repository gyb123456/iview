import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test1 from '@/components/test/test1'
import test10 from '@/components/test/test10'
// import test11 from '@/components/test/test11'
import test12 from '@/components/test/test12'

Vue.use(Router)
// Vue Router 测试页面
// GYB 20180718
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test1',
      component: test1,
      children: [
        {
          // 设置默认页面
          path: '',
          component: test10
        },
        {
          path: 'test11',
          // 路由懒加载,实现浏览器按需下载文件
          component: () => import('@/components/test/test11'),
          // 别名
          alias: 'test111'
        },
        {
          // 重定向
          // 注意导航守卫beforeEach 或 beforeLeave并没有应用在跳转路由上，而仅仅应用在其目标上
          path: 'test12',
          component: test12,
          redirect: 'test11'
          // redirect也可以是一个函数
          // redirect: to => {
          //   // 方法接收 目标路由 作为参数
          //   // return 重定向的 字符串路径/路径对象
          // }}
        }
      ]
    }
  ]
})
