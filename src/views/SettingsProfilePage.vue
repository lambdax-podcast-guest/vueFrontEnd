<template>
  <div class="settings page">
    <div class="header">
      <SettingsHeader>
        <p>Profile Preview</p>
      </SettingsHeader>
    </div>
    <div class="settings-content">
      <router-link :to="{name: 'Settings'}">Basic Settings</router-link>
    </div>
  </div>
</template>

<script>
import SettingsHeader from "@/components/SettingsHeader.vue";

export default {
  name: "Profile",
  components: { SettingsHeader }
};
</script>

<style scoped>
</style>