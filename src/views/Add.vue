<template>
    <div>
        <new-user/>
    </div>
</template>

<script>
    import NewUser from '@/components/NewUser.vue'
    
    export default {
        components:{
            newUser:NewUser
        },
        mounted:function(){
            console.log('here');
        }       
    }
</script>

<style scoped>

</style>