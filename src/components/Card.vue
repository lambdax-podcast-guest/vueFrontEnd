<template>
    <section class="container">
        <section class="name">
            <p>
                {{name}}
            </p>
        </section>
        <section class="email">
            <p>
                {{email}}
            </p>
        </section>
    </section>
</template>

<script>
    export default {
        props:{
            name:[String],
            email:[String]
        }
    }
</script>

<style scoped>

</style>