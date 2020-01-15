<template>
  <div v-if="users.length>0" >
    <card v-for="user in users" :key="user.id" :name="user.name" :email="user.email" :id="user.id" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card.vue";
export default {
  components: {
    Card
  },
  computed: mapState({
    users: state => state.all,
    usersAlias: "users"
  }),
  mounted: function() {
    this.$store.dispatch("getPeople");
  },
  updated: function() {}
};
</script>

<style scoped>
</style>