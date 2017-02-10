import Vue from 'vue';
import store from './store';
import comment from './components';

let vm = new Vue({
    el: '#app',
    store,
    render: h => h(comment)
});
