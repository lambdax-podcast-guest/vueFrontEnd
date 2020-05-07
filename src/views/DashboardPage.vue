<template>
  <div class="dashboard page">
    <div class="header">
      <h1>Dashboard</h1>
      <p>Next airdate: {{date}}</p>
    </div>
    <h2>Upcoming Appearances</h2>
    <div class="podcasts">
      <div class="podcast" v-for="(podcast, index) in podcasts" v-bind:key="index">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      podcasts: [0, 0, 0, 0, 0, 0]
    };
  },
  computed: {
    date() {
      return new Date();
    }
  }
};
</script>

<style scoped>
.dashboard {
  max-width: 90rem;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

h1 {
  font-weight: normal;
  font-size: 3rem;
}

.header p {
  font-weight: normal;
  font-size: 2rem;
}

h2 {
  font-weight: normal;
  font-size: 2.4rem;
  margin-bottom: 1rem;
}

.podcasts {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.podcast {
  width: 10rem;
  height: 10rem;
  background-color: silver;
  margin-right: 2rem;
}
</style>