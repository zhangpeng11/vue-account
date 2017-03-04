<template>
  <div id="ct">
    <TopBar></TopBar>
	  <ListItem v-for="item in items" :payType=item.payType :payNum=item.payNum :payDate=item.payDate @click=updateActiveItem(item)></ListItem>
  </div>
</template>

<script>
  import TopBar from './TopBar.vue'
  import ListItem from './ListItem.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'index',
    components: {
      TopBar,
      ListItem
    },
    computed: {
      ...mapGetters({
        items: 'getListData'
      })
    },
    mounted () {
      debugger
      this.updataActiveItem()
    },
    methods: {
      updataActiveItem () {
        debugger
        this.$store.dispatch('activeItem', {})
      },
      deleteItem () {
        this.$store.dispatch('deleteItem')
      }
    }
  }
</script>

<style>
  .active {
    color: red
  }
</style>
