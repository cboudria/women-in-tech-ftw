import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  name: 'stats-chart',
  props: ['data'],
  mounted () {
    this.renderChart(this.data)
  }
}
