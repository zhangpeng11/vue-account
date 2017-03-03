<template>
  <div id="app">
    <TopBar></TopBar>
    <ul>
      <ListItem v-for="item in items" :payType="item.payType" :payNum="item.payNum" :payDate="item.payDate"></ListItem>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import TopBar from './components/TopBar'
import ListItem from './components/ListItem'
export default {
  name: 'app',
  components: {
    ListItem,
    TopBar
  },
  computed: {
    ...mapGetters({
      items: 'getListData'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
