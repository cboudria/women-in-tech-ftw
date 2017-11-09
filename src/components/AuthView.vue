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
          <v-alert v-model="error" color="error" :text="error" dismissible></v-alert>
          <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
          <v-card-title>
            Get Authorized
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'AuthView',
  data () {
    return {
      email: '',
      password: '',
      providers: [
        'google',
        'github',
        'facebook',
        'twitter'
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
    }
  },
  methods: {
    signUpWithEmail () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    }
  }
}
</script>

<style>

</style>
