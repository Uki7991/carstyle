<template>
    <app-layout>
        <div class="container mx-auto py-16">
            <div class="mb-5">
                <back-to :href="route('materails.index')" title="Назад"></back-to>
            </div>
            <form @submit.prevent="create" class="space-y-6 w-3/12 bg-white rounded-2xl px-4 py-7 conform">
                <vs-input
                    v-model="form.title"
                    label-placeholder="Название"
                    primary>
                    <template #message-danger v-if="form.error('title')">
                        {{form.error('title')}}
                    </template>
                </vs-input>
                <vs-input
                    v-model="form.description"
                    label-placeholder="Описание"
                    primary>
                    <template #message-danger v-if="form.error('description')">
                        {{form.error('description')}}
                    </template>
                </vs-input>
                <vs-button
                    gradient
                    block
                    success>
                    Создать</vs-button>
            </form>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from "@/Layouts/AppLayout";
    import BackTo from "@/Components/Buttons/BackTo";

    export default {
        components: {
            AppLayout,
            BackTo,
        },
        data() {
            return {
                form: this.$inertia.form({
                    title: this.$page.materail.title,
                    description: this.$page.materail.description,
                }, {
                    bag: 'default',
                    resetOnSuccess: true,
                }),
            }
        },
        methods: {
            create() {
                this.form.put(route('materails.update', [this.$page.materail.id]));
            }
        }
    }
</script>

<style scoped>

</style>
