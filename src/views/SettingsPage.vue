<template>
  <div class="settings page">
    <div class=header>
      <h1>Hello, </h1>
      <p>Tell us a little about yourself!</p>
    </div>
    <div class="settings-content">
      <router-link to="settings/advanced">Advanced Settings</router-link>
      <router-link to="settings/profilepreview">Profile Preview</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings"
};
</script>

<style>
.settings {
  max-width: 90rem;
  margin: 0 auto;
}

h1 {
  font-weight: normal;
  font-size: 3rem;
}

.settings .header p {
  font-size: 1.5rem;
}

.settings-content {
  width: 100%;
  background-color: #f0f0ff;
  margin-top: 2rem;
  border-radius: 1rem;
  padding: 2rem;
}
</style>