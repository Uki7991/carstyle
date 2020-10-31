<template>
    <div class="flex flex-row justify-center items-center h-full ">

        <div class="text-center">
            <div class="mb-5">
                <img src="/assets/icons/no_data.svg" class="w-56" alt="no data">
                <h1 class="font-semibold">{{title}}</h1>
                <p class="mb-3" v-if="text">{{text}}</p>
            </div>
            <vs-button class="focus:outline-none" size="large" success gradient block @click="link">{{btnText}}</vs-button>

        </div>

    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true,
            },
            text: {
                type: String,
                required: false,
            },
            href: {
                type: String,
                required: true,
            },
            btnText: {
                type: String,
                required: true,
            },
        },
        methods: {
            link() {
                this.$inertia.visit(this.href);
            }
        }
    }
</script>

<style scoped>

</style>
