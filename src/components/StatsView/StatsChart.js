import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  name: 'stats-chart',
  props: ['data'],
  mounted () {
    console.log(this.data)
    this.renderChart(this.data)
  }
}
