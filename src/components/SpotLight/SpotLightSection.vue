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
          <h6>
            {{ content.title }}
          </h6>
        </v-card-title>
        <v-card-text>
          {{ content.description }}

          {{ content.url }}
        </v-card-text>
        <v-card-actions
          v-if="content.url"
        >
          <v-btn
            :href="content.url"
            exact
            color="secondary"
            block
          >
            go
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
