<template>
    <app-layout>
        <div class="container mx-auto py-16">
            <div class="mb-5">
                <back-to :href="route('services.index')" title="Назад"></back-to>
            </div>
            <admin-component-div class="py-12 flex flex-row space-x-5">
                <form @submit.prevent="create" class="space-y-6 w-3/12 conform">
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
                    <file-pond
                        name="test"
                        ref="pond"
                        label-idle="Drop files here..."
                        @processfile="processFile($event)"
                        :server="route('services.post-image').url()"
                    ></file-pond>
                    <vs-button
                        gradient
                        block
                        success
                    >
                        Обновить
                    </vs-button>
                </form>
                <div class="w-3/12">
                    <img :src="file" alt="">
                </div>
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
            AdminComponentDiv,
        },
        data() {
            return {
                file: '/storage/medium/'+this.$page.service.image,
                form: this.$inertia.form({
                    title: this.$page.service.title,
                    description: this.$page.service.description,
                    image: this.$page.service.image,
                }, {
                    bag: 'default',
                    resetOnSuccess: true,
                }),
            }
        },
        methods: {
            create() {
                this.form.put(route('services.update', [this.$page.service.id]));
            },
            processFile(e) {
                this.form.image = JSON.parse(this.$refs.pond.getFile().serverId).filename;
            }
        }
    }
</script>

<style scoped>

</style>
