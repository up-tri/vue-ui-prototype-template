<template>
  <p>{{msg}}</p>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App",
  data: function() {
    return {
      msg: "hello!",
    };
  },
});
</script>
