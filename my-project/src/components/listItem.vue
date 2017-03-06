<template>
  <li>
    <span class="pay_type">{{payType}}</span>
    <span class="pay_num">{{payNum}}</span>
    <span class="pay_date">{{payDate}}</span>
  </li>
</template>

<script>
  export default {
    name: 'listItem',
    props: ['payType', 'payNum', 'payDate']
  }
</script>

<style>
  .active {
    color: red
  }
</style>
