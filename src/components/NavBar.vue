<template>
  <div class="header">
    <div class="logo">
      <router-link to="/" exact>Podcast Guest List</router-link>
    </div>
    <div v-if="!loggedIn" class="nav">
      <router-link to="/signin">Sign in</router-link>
      <router-link to="/register">Register</router-link>
    </div>
    <div v-else class="nav">
      <router-link to="/guestlist">Guest List</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/settings/basic">Settings</router-link>
      <div @click="signOut" class="sign-out">Sign Out</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    loggedIn() {
      return this.$store.state.signedIn;
    }
  },
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
      this.$router.push("/");
    }
  }
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

a,
.sign-out {
  text-align: center;
  font-size: 1.2rem;
  padding: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
}

.sign-out {
  cursor: pointer;
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