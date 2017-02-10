<template>
	<TopBar v-bind:title="title">
	</TopBar>
	<div id="ct">
		<ListItem v-for="(item, items) of ListData" :payType=item.payType :payNum=item.payNum :payDate=item.payDate></ListItem>
	</div>



</template>

<script>
	import TopBar from './TopBar.vue';   
	import ListItem from './ListItem.vue';
	import {mapState} from 'vuex';

	export default {
		name:"index",
		components:{
			TopBar,
			ListItem
		},
		data(){
			return {}
		},
		computed: mapState([
			'ListData'
		])

	}
</script>