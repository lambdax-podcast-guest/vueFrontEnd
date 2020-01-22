<template>
    <div>
        <form @submit="testAndSubmit">
            <input type="text" v-model="name"><br>
            <input type="email" v-model="email">
            <input type="submit" :disabled="disable">
        </form>
    </div>
</template>

<script>
    export default {
        data:function(){
            return{
                name:'',
                email:'',
                disable:false
            }
        },
        methods:{
            testAndSubmit:function(){
                if (this.name!=''&&this.email!=''&&this.email.includes('@')) {
                    this.disable=true;
                    this.$store.dispatch('addUser',)
                }
            }
        }
    }
</script>

<style scoped>

</style>