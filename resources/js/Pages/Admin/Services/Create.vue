<template>
    <app-layout>
        <div class="container mx-auto py-16">
            <div class="mb-5">
                <back-to :href="route('services.index')" title="Назад"></back-to>
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

                <div>
                    <file-pond
                        name="test"
                        ref="pond"
                        label-idle="Drop files here..."
                        :files="myFiles"
                        @processfile="processFile($event)"
                        :server="route('services.post-image').url()"
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
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from "@/Layouts/AppLayout";
    import BackTo from "@/Components/Buttons/BackTo";
    import VueFilePond from 'vue-filepond';
    import 'filepond/dist/filepond.min.css';
    // Import image preview plugin styles
    import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

    // Import image preview and file type validation plugins
    // import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

    const FilePond = VueFilePond(FilePondPluginImagePreview);

    export default {
        components: {
            AppLayout,
            BackTo,
            FilePond,
        },
        data() {
            return {
                myFiles: [],
                form: this.$inertia.form({
                    title: '',
                    description: '',
                    image: '',
                }, {
                    bag: 'default',
                    resetOnSuccess: true,
                }),
            }
        },
        methods: {
            create() {
                this.form.post(this.$page.store_url);
            },
            processFile(e) {
                this.form.image = JSON.parse(this.$refs.pond.getFile().serverId).filename;
            }
        }
    }
</script>

<style scoped>

</style>
