<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
      <v-list>
        <v-list-tile
          value="false"
          v-for="(item, i) in items"
          :key="i"
          :to="item.url"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app >
      <v-toolbar-side-icon
        @click.native.stop="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="(item, i) in items"
          :key="item.title"
          :to="item.url"
          exact
        >
        <v-icon>{{ item.icon }}</v-icon>
        {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>
    <v-footer fixed app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [
          {
            icon: 'home',
            title: 'Home',
            url: '/'
          },
          {
            icon: 'lightbulb_outline',
            title: 'Spotlight',
            url: '/spotlight'
          },
          {
            icon: 'timeline',
            title: 'Timeline',
            url: '/timeline'
          },
          {
            icon: 'insert_chart',
            title: 'Stats',
            url: '/stats'
          }
        ],
        title: 'Women in Tech FTW'
      }
    }
  }

</script>
