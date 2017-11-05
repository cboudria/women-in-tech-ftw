<template>
  <v-layout>
    <span v-if="error != ''">
      <pre>{{ error }}</pre>
    </span>
    <v-flex xs12 v-if="loadChart">
      <stats-chart
        :data="this.data"
      ></stats-chart>
    </v-flex>
  </v-layout>
</template>

<script>
// import * as firebase from 'firebase'
import _ from 'lodash'
import StatsData from '@/components/StatsView/StatsData.js'
import StatsChart from '@/components/StatsView/StatsChart.js'
export default {
  data () {
    return {
      title: 'Stats',
      data: {
        labels: ['dummy'],
        datasets: {
          label: 'dummy',
          backgroundColor: '#000000',
          data: [0.5]
        }
      },
      options: [],
      error: '',
      loadChart: false
    }
  },
  mounted () {
    this.getStatsData()
  },
  components: {
    StatsChart
  },
  methods: {
    getStatsData () {
      this.formatData(StatsData)
      // firebase.database().ref('/stats').once('value').then(
      //   (snapshot) => {
      //     console.log(snapshot.val())
      //     this.formatData(snapshot.val())
      //   }).catch((error) => {
      //     console.log(error)
      //     this.error = error
      //   })
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
        datasets: {
          data: tempData
        }
      }
      this.data = dataObj
      console.log(this.data)
      this.loadChart = true
    }
  }
}
</script>

<style>

</style>
