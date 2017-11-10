import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
// import _ from 'lodash'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    error: null,
    loading: null,
    authProviders: {
      'google': new firebase.auth.GoogleAuthProvider(),
      'github': new firebase.auth.GithubAuthProvider()
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    clearError ({commit}) {
      commit('setError', null)
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {...user.user}
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {...user.user}
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
          }
        )
    },
    signUserInWithProvider ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithPopup(this.state.authProviders[payload.provider])
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {...user.user}
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
          }
        )
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    error (state) {
      return state.error
    },
    loading (state) {
      return state.loading
    }
  }
})
