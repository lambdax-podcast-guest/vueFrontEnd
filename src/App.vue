<template>
    <div id="app">
        <NavBar></NavBar>
        <div class="page-wrapper">
            <router-view />
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: { NavBar }
};
</script>

<style>
/* These styles are global and aren't only scoped to this component */

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

/* #app {
  width: 100vw;
  margin: 0;
  position: relative;
} */

.page-wrapper {
  padding: 2rem;
}

button {
  background-color: #636cff;
  color: white;
  padding: 1rem 3rem;
  margin: 1rem 0 0.5rem;
  border-radius: 1.9rem;
  border: none;
  font-family: inherit;
  cursor: pointer;
}
</style>
