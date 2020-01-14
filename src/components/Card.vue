<template>
  <section class="container" @click="navTo">
    <section class="name">
      <p>{{name}}</p>
    </section>
    <section class="email">
      <p>{{email}}</p>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    name: [String],
    email: [String],
    id: [Number]
  },
  mounted: function() {
    console.log("yo");
  },
  methods: {
    navTo: function() {
      console.log(this.$router.push(`/${this.$props.id}`));
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  width: 90%;
  margin: 0.5rem auto;
}
.container > section {
  border: 1px black solid;
  padding: 1rem;
}
.container > .name {
  width: 25%;
}
.container > .email {
  width: 75%;
}
</style>