<template>
    <div v-if="error.length>0">
        <p>
            {{error}}, please try again at a later time.
        </p>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed:mapState({
            error:state=>state.error,
            errorAlias:'error'
        })
    }
</script>

<style scoped>
    p{
        color:red;
    }
</style>