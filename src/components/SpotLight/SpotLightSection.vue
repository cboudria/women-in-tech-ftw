<template>
  <v-layout>
    <v-flex v-for="(section, index) in sections[this.section]" :key="index">
      <pre>{{section}}</pre>
      <h1> {{section.title}} </h1>
    </v-flex>
  </v-layout>
</template>

<script>
import business from '@/assets/business.jpg'
import repo from '@/assets/repo.jpg'
import school from '@/assets/school.png'
import camp from '@/assets/camp.jpg'

export default {
  props: [
    'section'
  ],
  data () {
    return {
      sections: {
        'entrepreneurs': {
          image: business,
          title: 'Entrepreneurs',
          url: '/spotlight/entrepreneurs',
          content: ''
        },
        'repos': {
          image: repo,
          title: 'Repos',
          url: '/spotlight/repos',
          content: ''
        },
        'universities': {
          image: school,
          title: 'Universities',
          url: '/spotlight/universities',
          content: ''
        },
        'codecamps': {
          image: camp,
          title: 'Code Camps',
          url: '/spotlight/codecamps',
          content: ''
        }
      }
    }
  }
}
</script>

<style>

</style>
