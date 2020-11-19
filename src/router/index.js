import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Public from '@/views/Public'

import Home from '@/views/home/Home'

import About from '@/views/about/About'

import EpcService from '@/views/solution/EpcService'
import NewEnergy from '@/views/solution/NewEnergy'
import BigData from '@/views/solution/BigData'
import MicroNet from '@/views/solution/MicroNet'
import SmartFactory from '@/views/solution/SmartFactory'

import CaseWindFarm from '@/views/case/CaseWindFarm'
import CaseMicroNet from '@/views/case/CaseMicroNet'
import CaseFactory from '@/views/case/CaseFactory'

import Join from '@/views/join/Join'


Vue.use(Router)


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: '网站主页',
      component: Public,
      redirect: '/Home', // 设置默认打开的页面
      leaf: true, //只有一个节点
      children: [
        { path: '/Home', component: Home, name: '网站主页' },
      ]
    },
    {
      path: '/',
      name: '关于量云',
      component: Public,
      leaf: true,//只有一个节点
      children: [
        { path: '/About', component: About, name: '关于量云' },
      ]
    },
    {
      path: '/',
      name: '解决方案',
      component: Public,
      children: [
        { path: '/EpcService', component: NewEnergy, name: 'EPC设计、咨询服务类' },
        { path: '/NewEnergy', component: NewEnergy, name: '新能源场站监控类产品' },
        { path: '/BigData', component: BigData, name: '大数据应用类产品' },
        { path: '/MicroNet', component: MicroNet, name: '微电网储能类产品' },
        { path: '/SmartFactory', component: SmartFactory, name: '智慧工厂' },
      ]
    },
    {
      path: '/',
      name: '产品案例',
      component: Public,
      children: [
        { path: '/CaseWindFarm', component: CaseWindFarm, name: '霍林河智慧风场系统' },
        { path: '/CaseMicroNet', component: CaseMicroNet, name: '微网储能类产品' },
        { path: '/CaseFactory', component: CaseFactory, name: '智慧工厂' },
      ]
    },
    {
      path: '/',
      name: '加入我们',
      component: Public,
      leaf: true,//只有一个节点
      children: [
        { path: '/Join', component: Join, name: '加入我们' },
      ]
    },
  ]
})
