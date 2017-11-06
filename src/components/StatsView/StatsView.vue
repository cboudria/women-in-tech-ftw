<template>
  <v-layout>
    <span v-if="error != ''">
      <pre>{{ error }}</pre>
    </span>
    <v-flex xs12 v-if="loadChart">
      <stats-chart
        :chart-data="this.chartData"
      ></stats-chart>
    </v-flex>
  </v-layout>
</template>

<script>
import * as firebase from 'firebase'
import _ from 'lodash'
import StatsChart from '@/components/StatsView/StatsChart.js'
export default {
  components: {
    StatsChart
  },
  data () {
    return {
      chartData: null,
      error: '',
      loadChart: false
    }
  },
  mounted () {
    this.getStatsData()
  },
  methods: {
    getStatsData () {
      // this.formatData(StatsData)
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
      let tempLabels = []
      _.forEach(data, (val) => {
        if (val.company !== 'company') {
          tempData.push(parseInt(val['percent_female_eng']))
          tempLabels.push(val.company)
        }
      })
      let dataObj = {
        labels: tempLabels,
        datasets: [
          {
            label: 'percent female',
            backgroundColor: '#000000',
            data: tempData
          }
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
