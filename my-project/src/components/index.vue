<template>
  <div id="ct">
    <TopBar></TopBar>
	  <ListItem v-for="item in items" :payType=item.payType :payNum=item.payNum :payDate=item.payDate @click="updataActiveItem" :class="{active:isActive}"></ListItem>
  </div>
</template>

<script>
  import TopBar from './TopBar.vue'
  import ListItem from './ListItem.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'index',
    data () {
      return {
        isActive: false
      }
    },
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
      updataActiveItem (item) {
        console.log(1111)
        debugger
        this.$store.dispatch('activeItem', item)
        this.isActive = true
      },
      deleteItem () {
        this.$store.dispatch('deleteItem')
      }
    }
  }
</script>

<style>
  html,body{
    height: 100%;
    margin: 0;
  }
  .top_bar{
    height:40px;
    line-height:40px;
    background-color:#007722;
    color: #fff;
    text-align: center;
  }
  li{
    line-height:40px;
    height:40px;
    list-style:none;
    border-bottom: 1px solid #f0f0f0;
  }

</style>