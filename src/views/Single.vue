<template>
  <section class="container" v-if="user.name!=undefined">
    <section class="name">Name: {{user.name}}</section>
    <section class="email">Email: {{user.email}}</section>
  </section>
  <section v-else-if="error.length>0">
    <error />
  </section>
  <section class="container" v-else>Loading...</section>
</template>

<script>
import { mapState } from "vuex";
import Error from '@/components/Error.vue'
export default {
  components:{
    Error
  },
  computed: mapState({
    user: state => state.current,
    userAlias: "user",
    error:state=>state.error,
    errorAlias:'error'
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