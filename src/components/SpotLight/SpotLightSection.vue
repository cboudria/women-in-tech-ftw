<template>
  <v-layout>
    <v-flex
      v-for="section in thisSection"
      :key="section.title"
    >
      <v-card>
        <v-card-media
          :src="section.image"
        >

        </v-card-media>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  props: [
    'section'
  ],
  computed: {
    thisSection () {
      return this.$store.getters('spotlightStore/' + [this.section])
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
