<template>
    <div @click="link(href)" class="group cursor-pointer"><i class='bx bx-left-arrow-alt transform group-hover:-translate-x-2 transition ease-out duration-300'></i> {{ title }}</div>
</template>

<script>
    export default {
        props: ['href', 'title']
    }
</script>

<style scoped>

</style>
