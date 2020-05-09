<template>
  <div class="settings page">
    <div class="header">
      <SettingsHeader>
        <p>Advanced Settings</p>
      </SettingsHeader>
    </div>
    <div class="settings-content">
      <router-link :to="{name: 'BasicSettings'}">Basic Settings</router-link>
    </div>
  </div>
</template>

<script>
import SettingsHeader from "@/components/SettingsHeader.vue";

export default {
  name: "AdvancedSettings",
  components: { SettingsHeader }
};
</script>

<style scoped>
</style>