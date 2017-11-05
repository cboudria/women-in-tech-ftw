import { Line, mixins } from 'vue-chartjs'
const { chartData } = mixins

export default {
  extends: Line,
  mixins: [chartData],
  name: 'stats-chart',
  props: ['chartData'],
  mounted () {
    this.renderChart(this.chartData)
  }
}
