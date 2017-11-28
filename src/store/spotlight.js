import business from '@/assets/business.jpg'
import repo from '@/assets/repo.jpg'
import school from '@/assets/school.png'
import camp from '@/assets/camp.jpg'

const spotlightStore = {
  namespaced: true,
  state: {
    entrepreneurs: {
      image: business,
      title: 'Entrepreneurs',
      url: '/spotlight/entrepreneurs',
      content: [{ title: 'test', description: 'I am testing', url: '/spotlight' }]
    },
    repos: {
      image: repo,
      title: 'Repos',
      url: '/spotlight/repos',
      content: [{ title: 'test', description: 'I am testing', url: '/spotlight' }]
    },
    universities: {
      image: school,
      title: 'Universities',
      url: '/spotlight/universities',
      content: [{ title: 'test', description: 'I am testing', url: '/spotlight' }]
    },
    codecamps: {
      image: camp,
      title: 'Code Camps',
      url: '/spotlight/codecamps',
      content: [{ title: 'test', description: 'I am testing', url: '/spotlight' }]
    }
  },
  actions: {},
  mutations: {},
  getters: {
    entrepreneurs (state) {
      return state.entrepreneurs
    },
    repos (state) {
      return state.repos
    },
    universities (state) {
      return state.universities
    },
    codecamps (state) {
      return state.codecamps
    }
  }
}

export default spotlightStore
