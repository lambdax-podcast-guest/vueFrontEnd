<template>
  <div class="settings page">
    <div class="header">
      <h1>Hello, </h1>
      <p>Advanced Settings</p>
    </div>
    <div class="settings-content">
      <router-link :to="{name: 'Settings'}">Basic Settings</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvancedSettings"
};
</script>

<style scoped>
</style>