<template>
  <v-tabs
    dark
    grow
    icons
  >
    <v-tabs-bar>
      <v-tabs-item
        href="#cards"
        icon
      >
        <v-icon>view_list</v-icon>
        List
      </v-tabs-item>
      <v-tabs-item
        href="#chart"
      >
        <v-icon dark>show_chart</v-icon>
        Chart
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-items>
      <v-tabs-content
        key="1"
        id="cards"
      >
        <v-data-table
          :headers="headers"
          :items="dataSet"
        >
          <template slot="items" slot-scope="props">
              <td>{{ props.item.company }}</td>
              <td class="text-xs-right">{{ props.item.numEng }}</td>
              <td class="text-xs-right">{{ props.item.numFemaleEng }}</td>
              <td class="text-xs-right">{{ props.item.percentFemaleEng }}</td>
          </template>
        </v-data-table>
      </v-tabs-content>
      <v-tabs-content
        key="2"
        id="chart"
      >
        <v-layout>
          <v-flex>
            <v-flex xs12>
              <span v-if="error != ''">
                <pre>{{ error }}</pre>
              </span>
              <vue-chart
                :data="chartData"
              >
              </vue-chart>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>
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
      dataSet: [
        {
          company: 'x',
          percentFemaleEng: 30,
          numEng: 25,
          numFemaleEng: 30
        },
        {
          company: 'y',
          percentFemaleEng: 43,
          numEng: 25,
          numFemaleEng: 30
        }
      ],
      error: '',
      loadChart: false,
      showChart: false,
      headers: [
        {
          text: 'Company',
          align: 'left',
          sortable: true,
          value: 'company'
        },
        {
          text: '# Engineers',
          value: 'numEng'
        },
        {
          text: '# Female Engineers',
          value: 'numFemaleEng'
        },
        {
          text: '% Female Engineers',
          value: 'percentFemaleEng'
        }
      ]
    }
  },
  computed: {
    chartData () {
      return {
        labels: this.sortedLabels,
        datasets: [
          {
            label: 'Percent Female Engineer',
            backgroundColor: '#f87979',
            data: this.sortedValues
          }
        ]
      }
    },
    sortedDataSet () {
      return _.reverse(
        _.sortBy(this.dataSet, [(o) => {
          return o.percentFemaleEng
        }])
      )
    },
    sortedLabels () {
      let tempArray = []
      _.forEach(this.sortedDataSet, (value, key) => {
        tempArray.push(value['company'])
      })
      return tempArray
    },
    sortedValues () {
      let tempArray = []
      _.forEach(this.sortedDataSet, (value, key) => {
        tempArray.push(value['percentFemaleEng'])
      })
      return tempArray
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
          this.error = error
        })
    },
    formatData (data) {
      let tempData = []
      _.forEach(data, (val) => {
        if (val.company !== 'company') {
          tempData.push({
            company: val.company,
            percentFemaleEng: parseInt(val['percent_female_eng']),
            numEng: parseInt(val['num_eng']),
            numFemaleEng: parseInt(val['num_female_eng']),
            key: val['key'],
            team: val['team']
          })
        }
      })

      this.dataSet = tempData
      this.loadChart = true
    }
  }
}
</script>

<style>

</style>
