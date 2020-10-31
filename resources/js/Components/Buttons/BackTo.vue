<template>
    <inertia-link :href="href" class="group"><i class='bx bx-left-arrow-alt transform group-hover:-translate-x-2 transition ease-out duration-300'></i> {{ title }}</inertia-link>
</template>

<script>
    export default {
        props: ['href', 'title']
    }
</script>

<style scoped>

</style>
