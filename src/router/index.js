import Vue from 'vue'
import Router from 'vue-router'
import SpotLight from '@/components/SpotLight/SpotLight'
import SpotLightSection from '@/components/SpotLight/SpotLightSection'
import TimeLine from '@/components/TimeLine'
import AuthView from '@/components/AuthView'
import StatsView from '@/components/StatsView/StatsView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    },
    {
      path: '/stats',
      name: 'Stats',
      component: StatsView
    },
    {
      path: '/auth',
      name: 'Auth',
      component: AuthView
    }
  ],
  mode: 'history'
})
