<template>
  <v-layout>
    <span v-if="error != ''">
      <pre>{{ error }}</pre>
    </span>
    <v-flex xs12>
      <vue-chart
        :data="chartData"
      >
      </vue-chart>
    </v-flex>
  </v-layout>
</template>

<script>
import * as firebase from 'firebase'
import _ from 'lodash'
import VueChart from 'vue-chart'

export default {
  name: 'StatsView',
  components: {
    VueChart
  },
  data () {
    return {
      chartData: {
        labels: [13, 14],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [43, 98]
          },
          {
            label: 'Data Two',
            backgroundColor: '#7979f8',
            data: [24, 86]
          }
        ]
      },
      error: '',
      loadChart: false
    }
  },
  mounted () {
    this.getStatsData()
  },
  methods: {
    getStatsData () {
      firebase.database().ref('/stats').once('value').then(
        (snapshot) => {
          console.log(snapshot.val())
          this.formatData(snapshot.val())
        }).catch((error) => {
          console.log(error)
          this.error = error
        })
    },
    formatData (data) {
      let tempData = []
      _.forEach(data, (val) => {
        if (val.company !== 'company') {
          tempData[val.company] = parseInt(val['percent_female_eng'])
        }
      })
      let dataObj = {
        labels: _.keys(tempData),
        datasets: [
          {
            label: 'Percent Female Engineers',
            backgroundColor: '#33dd89',
            data: _.values(tempData)
          }
          // {
          //   label: 'Num Female Engineers',
          //   backgroundColor: '#8933dd',
          //   data: numFemale
          // },
          // {
          //   label: 'Num Total Engineers',
          //   backgroundColor: '#dd8933',
          //   data: numTotal
          // }
        ]
      }
      this.chartData = dataObj
      this.loadChart = true
    }
  }
}
</script>

<style>

</style>
