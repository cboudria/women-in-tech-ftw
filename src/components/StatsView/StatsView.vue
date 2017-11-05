<template>
</template>

<script>
import * as firebase from 'firebase'
import StatsChart from '@/components/StatsView/StatsChart'
export default {
  data () {
    return {
      title: 'Stats'
    }
  },
  created () {

  },
  components: {
    StatsChart
  },
  methods: {
    getStatsData () {
      firebase.database().
    }
  }
}
</script>

<style>

</style>
