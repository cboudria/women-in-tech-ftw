<template>
  <v-layout>
    <v-flex xs12 sm12>
      <v-card>
        <v-card-actions>
          <v-select label="Size" :items="items" v-model="size"></v-select>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
          <v-layout row wrap>
            <v-flex
              xs6
              v-for="(section, s) in sections"
              :key="s"
            >
              <v-card flat tile>
                <v-card-media
                  :src="section.image"
                  height="150px">
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0" v-text="section.title"></h3>
                  </div>
                </v-card-title>
                 <v-card-actions>
                  <v-btn :to="section.url" flat color="orange">Read more</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import business from '@/assets/business.jpg'
import repo from '@/assets/repo.jpg'
import school from '@/assets/school.png'
import camp from '@/assets/camp.jpg'

export default {
  data () {
    return {
      size: 'sm',
      items: [
        { text: 'Extra small (1px)', value: 'xs' },
        { text: 'Small (4px)', value: 'sm' },
        { text: 'Medium (8px)', value: 'md' },
        { text: 'Large (16px)', value: 'lg' },
        { text: 'Extra large (24px)', value: 'xl' }
      ],
      sections: [{
        image: business,
        title: 'Entrepeneurs',
        url: '/spotlight/entrepeneurs',
        content: ''
      },
      {
        image: repo,
        title: 'Repos',
        url: '/spotlight/repos',
        content: ''
      },
      {
        image: school,
        title: 'Universities',
        url: '/spotlight/universities',
        content: ''
      },
      {
        image: camp,
        title: 'Code Camps',
        url: '/spotlight/codecamps',
        content: ''
      }],
      title: 'Spotlight Home'
    }
  }
}
</script>

<style>

</style>
