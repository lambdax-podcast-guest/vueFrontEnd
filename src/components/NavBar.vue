<template>
  <div class="header">
    <div class="logo">
      <router-link to="/" exact>Podcast Guest List</router-link>
    </div>
    <div class="nav">
      <router-link to="/signin">Sign in</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/all">Guest List</router-link>
      <router-link to="/new">New</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/settings">Settings</router-link>
      <router-link to="/" exact>Sign Out</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

.nav {
  display: flex;
}

a {
  text-align: center;
  font-size: 1.2rem;
  padding: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
}

.router-link-active {
  font-weight: bold;
}

.logo a {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>