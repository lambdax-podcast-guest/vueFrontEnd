<template>
  <div class="guest-list page">
    <h1>Guest List</h1>
    <div v-if="users.length > 0" >
      <card v-for="user in users" :key="user.id" :name="user.name" :email="user.email" :id="user.id" />
    </div>
    <div v-else-if="error.length>0">
      <error />
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card.vue";
import Error from "@/components/Error.vue";

export default {
  name: "GuestList",
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
.guest-list {
  max-width: 90rem;
  margin: 0 auto;
}
</style>