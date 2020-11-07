<template>
    <app-layout>
        <div class="container mx-auto py-16">
            <div class="mb-5">
                <back-to :href="route('advantages.index')" title="Назад"></back-to>
            </div>
            <admin-component-div class="py-8 flex">
                <form @submit.prevent="create" class="space-y-6 w-3/12 px-4 py-7 conform">
                    <vs-input
                        v-model="form.title"
                        label-placeholder="Название"
                        primary>
                        <template #message-danger v-if="form.error('title')">
                            {{form.error('title')}}
                        </template>
                    </vs-input>

                    <div>
                        <textarea class="border p-2 w-full rounded" placeholder="Описание" rows="4" v-model="form.description"></textarea>
                        <p class="text-red-500 text-xs" v-if="form.error('description')">{{form.error('description')}}</p>
                    </div>

                    <div>
                        <file-pond
                            name="test"
                            ref="pond"
                            label-idle="Drop files here..."
                            @processfile="processFile($event)"
                            :server="route('images.post-image', {dir: 'advantages', prefix: 'advantage'}).url()"
                        ></file-pond>
                        <p v-if="form.error('image')" class="text-xs px-1 -mt-4 text-red-500">
                            {{form.error('image')}}
                        </p>
                    </div>
                    <vs-button
                        gradient
                        block
                        success>
                        Создать</vs-button>
                </form>
            </admin-component-div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from "@/Layouts/AppLayout";
    import BackTo from "@/Components/Buttons/BackTo";
    import AdminComponentDiv from "@/Components/AdminComponentDiv";
    import VueFilePond from 'vue-filepond';
    import 'filepond/dist/filepond.min.css';
    import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

    const FilePond = VueFilePond(FilePondPluginImagePreview);

    export default {
        components: {
            AppLayout,
            BackTo,
            FilePond,
            AdminComponentDiv,
        },
        data() {
            return {
                form: this.$inertia.form({
                    title: '',
                    image: '',
                    description: '',
                }, {
                    bag: 'default',
                    resetOnSuccess: true,
                }),
            }
        },
        methods: {
            create() {
                this.form.post(this.route('advantages.store'));
            },
            processFile(e) {
                this.form.image = JSON.parse(this.$refs.pond.getFile().serverId).filename;
            },
        }
    }
</script>

<style scoped>

</style>
