<template>
  <v-layout>
    <v-flex xs12 sm12>
      <v-card>
        <v-card-actions>
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
                    <router-link :to="section.url"><h3 class="headline mb-0" v-text="section.title"></h3></router-link>
                  </div>
                </v-card-title>
                 <v-card-actions>
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
      sections: [{
        image: business,
        title: 'Entrepreneurs',
        url: '/spotlight/entrepreneurs'
      },
      {
        image: repo,
        title: 'Repos',
        url: '/spotlight/repos'
      },
      {
        image: school,
        title: 'Universities',
        url: '/spotlight/universities'
      },
      {
        image: camp,
        title: 'Code Camps',
        url: '/spotlight/codecamps'
      }],
      title: 'Spotlight Home'
    }
  }
}
</script>