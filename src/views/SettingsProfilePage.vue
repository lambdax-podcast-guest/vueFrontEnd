<template>
  <div class="settings page">
    <div class="header">
      <h1>Hello, </h1>
      <p>Profile Preview</p>
    </div>
    <div class="settings-content">
      <router-link :to="{name: 'Settings'}">Basic Settings</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style scoped>
</style>