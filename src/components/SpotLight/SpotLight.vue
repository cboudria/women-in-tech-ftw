<template>
  <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
    <v-layout row wrap>
      <v-flex
        xs12 sm6 md6 lg3
        v-for="(section, s) in sections"
        :key="s"
      >
        <v-card
          :to="'/spotlight/' + section.url"
        >
          <v-card-media
            :src="section.image"
            height="150px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0" v-text="section.title"></h3>
              <span v-text="section.content" class="grey--text"></span>
              <a v-bind:href="section.resource"><h3 class="headline mb-0"></h3>Source</a>
            </div>
          </v-card-title>
            <v-card-actions>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
        url: 'entrepreneurs',
        resource: 'https://www.forbes.com/sites/alisoncoleman/2017/03/08/the-female-tech-entrepreneurs-taking-a-risk-and-reaping-the-rewards/#d88a73c7026d',
        content: '"There are strong communities within technology to support, mentor, and empower women in tech, including initiatives such as Girls Who Code, The Mary Keller Network, and Femtech Global that provide access to meet ups, free courses for women, and online training."'
      },
      {
        image: repo,
        title: 'Repos',
        url: 'repos',
        resource: 'https://github.com/WomenWhoCode',
        content: 'Women Who Code is a global non-profit orginization dedicated to inspiring women to excel in technology careers.'
      },
      {
        image: school,
        title: 'Universities',
        url: 'universities',
        resource: 'https://www.washingtonpost.com/local/education/women-break-barriers-in-engineering-and-computer-science-at-some-top-colleges/2016/09/16/538027a4-7503-11e6-be4f-3f42f2e5a49e_story.html?utm_term=.e2bdaed591fe',
        content: 'Women are making major gains in enrollment in engineering and computer science at some of the nation’s most prominent colleges and universities, a breakthrough that shows that gender parity is possible in technology fields long dominated by men.'
      },
      {
        image: camp,
        title: 'Code Camps',
        url: 'code-camps',
        resource: 'https://learntocodewith.me/posts/13-places-women-learn-code/',
        content: 'Everyone always talks about the lack of women in tech—and I cant argue with the statistics. But it doesn’t have to stay that way!'
      }],
      title: 'Spotlight Home'
    }
  }
}
</script>
