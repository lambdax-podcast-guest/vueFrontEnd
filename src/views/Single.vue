<template>
  <section class="container" v-if="user.name!=undefined">
    <section class="name">Name: {{user.name}}</section>
    <section class="email">Email: {{user.email}}</section>
  </section>
  <section class="container" v-else>Loading...</section>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    user: state => state.current,
    userAlias: "user"
  }),
  mounted: function() {
    this.$store.dispatch("getSingle", { id: this.$route.params.id });
  }
};
</script>

<style scoped>
  .container{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .name{
    font-size: 2rem;
  }
  .email{
    font-size:1.25rem;
  }
  .container > section{
    margin:.5rem;
  }
</style>