<template>
    <div>

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed:mapState({
            user:state=>state.list,
            userAlias:'user'
        }),
        mounted:function(){
            this.$store.dispatch('getPeople')
        }
    }
</script>

<style scoped>

</style>