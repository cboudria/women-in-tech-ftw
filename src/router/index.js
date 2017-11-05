import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SpotLight from '@/components/SpotLight/SpotLight'
import SpotLightSection from '@/components/SpotLight/SpotLightSection'
import TimeLine from '@/components/TimeLine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/spotlight',
      name: 'Spotlight',
      component: SpotLight
    },
    {
      path: '/spotlight/:section',
      name: 'Spotlight Section',
      component: SpotLightSection,
      props: true
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: TimeLine
    }
  ]
})
