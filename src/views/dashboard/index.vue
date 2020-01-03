<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ cluster }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data: function() {
    return {
      cluster: "tzk-a.ike.iij.jp"
    }
  }
  /*
  computed: {
    ...mapGetters([
      'name'
    ])
  }
  */
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
