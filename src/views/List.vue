<template>
  <div v-if="users.length>0" >
    <card v-for="user in users" :key="user.id" :name="user.name" :email="user.email" :id="user.id" />
  </div>
  <div v-else-if="error.length>0">
    <error />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card.vue";
import Error from "@/components/Error.vue";
export default {
  components: {
    Card,
    Error
  },
  computed: mapState({
    users: state => state.all,
    usersAlias: "users",
    error: state => state.error,
    errorAlias: "error"
  }),
  mounted: function() {
    this.$store.dispatch("getPeople");
  },
  updated: function() {}
};
</script>

<style scoped>
</style>