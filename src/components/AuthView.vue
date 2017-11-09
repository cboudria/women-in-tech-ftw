<template>
  <v-container
    fill-height
  >
    <v-layout
      row
      justify-space-around
      align-center
    >
      <v-flex
      md4
      >
        <v-card>
          <v-alert
            v-if="error"
            color="error"
            dismissible
            @input="clearError"
            :value="error !== null"
          >
            {{ error.message }}
          </v-alert>
          <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
          <v-card-title>
            <h5>Authorize Yourself <span class="subheading">Login/Signup</span></h5>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="email"
              type="email"
              label="Email"
            ></v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="Password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-layout>
              <v-btn
                block
                color="info"
                @click="signUpWithEmail"
              >
                <v-icon>new_releases</v-icon> Sign Up
              </v-btn>
              <v-btn
                block
                color="info"
                @click="signInWithEmail"
              >
                <v-icon>lock_open</v-icon> Sign In
              </v-btn>
            </v-layout>
            <v-layout>
              <v-btn
                v-for="provider in providers"
                :key="provider"
                @click="signInWithProvider(provider)"
                block
                color="primary"
              >
                {{ capitalize(provider) }}
              </v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'AuthView',
  data () {
    return {
      email: '',
      password: '',
      providers: [
        'google',
        'github'
      ]
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    },
    user () {
      return this.$store.getters.user
    },
    creds () {
      return {email: this.email, password: this.password}
    }
  },
  methods: {
    signUpWithEmail () {
      this.$store.dispatch('signUserUp', this.creds)
    },
    signInWithEmail () {
      this.$store.dispatch('signUserIn', this.creds)
    },
    signInWithProvider (val) {
      this.$store.dispatch('signUserInWithProvider', {provider: val})
    },
    capitalize (str) {
      return _.capitalize(str)
    },
    clearError () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style>

</style>
