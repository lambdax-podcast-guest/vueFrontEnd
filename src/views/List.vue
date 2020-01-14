<template>
  <div>
    <p>Loading List</p>
    <card v-for="user in users" :key="user.id" :name="user.name" :email="user.email" :id="user.id" />
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