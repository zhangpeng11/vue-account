<template>
  <div id="ct">
    <TopBar></TopBar>
	<ListItem v-for="item in items" :payType=item.payType :payNum=item.payNum :payDate=item.payDate></ListItem>
  </div>
</template>

<script>
  import TopBar from './TopBar.vue'
  import ListItem from './ListItem.vue'
  import {mapGetters} from 'vuex'

  export default {
    name: 'index',
    components: {
      TopBar,
      ListItem
    },
    computed: {
      ...mapGetters({
        itemsText: 'getActiveText'
      })
    }
  }
</script>
