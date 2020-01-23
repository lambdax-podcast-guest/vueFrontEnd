<template>
    <div id="app">
            <div class="logo">
                Podcast Guest
            </div>
        <div id="nav">
            <div>
                <router-link to="/" exact>Home</router-link>
            </div>
            <div>
                <router-link to="/all">List</router-link>
            </div>
            <div>
                <router-link to="/new">New</router-link>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            home:true
        }
    }
}
</script>

<style>
    #nav {
        display: flex;
        justify-content: center;
        padding:1rem;
        border-bottom:1px solid black;
    }
    #app {
        width: 100vw;
        margin: 0;
        position: relative;
    }
    * {
        box-sizing: border-box;
    }
    #nav > div {
        width:5rem;
        height:4rem;
        text-align: center;
        padding-top:1.25rem;
        border:1px solid black;
    }
</style>
