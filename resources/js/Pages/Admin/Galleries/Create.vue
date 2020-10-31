<template>
    <app-layout>
        <div class="container mx-auto py-16">
            <div class="mb-5">
                <back-to :href="route('galleries.index')" title="Назад"></back-to>
            </div>
            <form @submit.prevent="create" class="space-y-6 w-3/12 bg-white rounded-2xl px-4 py-7 conform">
                <div>
                    <file-pond
                        name="test"
                        ref="pond"
                        allow-multiple="true"
                        label-idle="Drop files here..."
                        @processfiles="processFiles"
                        @processfile="processFile"
                        :server="route('images.post-image', {dir: 'galleries', prefix: 'gallery'}).url()"
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
                form: this.$inertia.form({
                    images: [],
                }, {
                    bag: 'default',
                    resetOnSuccess: true,
                }),
            }
        },
        methods: {
            create() {
                this.form.post(this.route('galleries.store'));
            },
            processFiles() {
                this.form.images = this.$refs.pond.getFiles().map((item) => {
                    return {image: JSON.parse(item.serverId).filename,
                        gallery_category_id: 1,
                    };
                });
            },
            processFile() {
                this.form.images.push({image: JSON.parse(this.$refs.pond.getFile().serverId).filename,
                    gallery_category_id: 1,
                });
            }
        }
    }
</script>

<style scoped>

</style>
