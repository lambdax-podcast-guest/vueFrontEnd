<template>
    <section>
        <p>
            Test
        </p>
        <ul>
            <div v-for="forecast in text" :key="forecast.date">
                <li>{{forecast.date}}</li>
            </div>
        </ul>
    </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:mapState({
        text:state=>state.weather,
        textAlias:'text'
    }),
    mounted:function(){
        this.$store.dispatch('getWeather')
    }
}
</script>