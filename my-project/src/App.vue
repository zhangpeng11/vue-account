<template>
  <div id="app">
    <TopBar v-bind:title="title"></TopBar>
    <ul>
      <ListItem v-for="item in items" :payType="item.payType" :payNum="item.payNum" :payDate="item.payDate"></ListItem>
    </ul>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import ListItem from './components/ListItem'
export default {
  name: 'app',
  data: function () {
    return {
      title: 'account',
      items: [
        {
          payType: '住宿',
          payNum: '100',
          payDate: '201611012'
        },
        {
          payType: '住宿',
          payNum: '100',
          payDate: '201611012'
        },
        {
          payType: '住宿',
          payNum: '100',
          payDate: '201611012'
        }
      ]
    }
  },
  components: {
    ListItem,
    TopBar
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
