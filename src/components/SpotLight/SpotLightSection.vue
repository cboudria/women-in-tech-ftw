<template>
<v-container grid-list-lg>
  <v-card
    flat
    tile
  >
    <v-card-media
      :src="thisSection.image"
      height="200"
    >
    </v-card-media>
    <v-card-title>
      <h2>
        {{ thisSection.title }}
      </h2>
    </v-card-title>
  </v-card>
  <v-layout
    row
    wrap
  >
    <v-flex
      v-for="(content, index) in thisSection.content"
      :key="thisSection.title + index"
      lg3
      md6
      sm12
    >
      <v-card>
        <v-card-title>
          {{ content.title }}
        </v-card-title>
        <v-card-text>
          {{ content.description }}
        </v-card-text>
        <v-card-actions
          v-if="content.url"
        >
          <v-btn
            :to="content.url"
          >
            Go
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>

export default {
  props: [
    'section'
  ],
  computed: {
    thisSection () {
      return this.$store.getters['spotlightStore/' + this.section]
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
