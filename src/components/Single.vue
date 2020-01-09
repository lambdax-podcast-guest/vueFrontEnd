<template>
    <section class="container" v-if="user.name!=undefined">
        <section class="name">
            {{user.name}}
        </section>
        <section class="email">
            {{user.email}}
        </section>
    </section>
    <section class="container" v-else="">
        Loading...
    </section>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed:mapState({
            user:state=>state.user,
            userAlias:'user'
        }),
        mounted:function(){
            this.$store.dispatch('getPeople')
        }
    }
</script>

<style scoped>

</style>