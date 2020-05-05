<template>
    <div id="app">
        <NavBar></NavBar>
        <router-view />
    </div>
</template>

<script>
import NavBar from "../src/components/NavBar.vue";

export default {
  components: { NavBar },
  data: function() {
    return {
      home: true
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
}

html {
  font-size: 62.5%;
}

body {
  line-height: 1.5;
  font-family: "Open Sans", sans-serif;
}

#app {
  width: 100vw;
  margin: 0;
  position: relative;
}
</style>
