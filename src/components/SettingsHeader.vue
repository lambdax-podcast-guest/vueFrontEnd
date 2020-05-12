<template>
  <div>
    <h1>Hello, {{ username }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SettingsHeader",
  computed: {
    username() {
      // Can pull from Vuex
      return "USERNAME";
    }
  }
};
</script>

<style scoped>
h1 {
  font-weight: normal;
  font-size: 3rem;
}
</style>