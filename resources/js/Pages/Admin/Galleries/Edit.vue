<template>
    <app-layout>
        <div class="container mx-auto py-16">
            <div class="mb-5">
                <back-to :href="route('galleries.index')" title="Назад"></back-to>
            </div>
            <admin-component-div class="py-12 flex flex-row space-x-5">
                <form @submit.prevent="create" class="space-y-6 w-3/12 conform">
                    <multi-select
                        v-model="form.gallery_category"
                        tag-placeholder="Добавить новую категорию картинок"
                        placeholder="Поиск категорий картинок"
                        :options="values"
                        :multiple="false"
                        :taggable="true"
                        label="title"
                        value="title"
                        @tag="addTag"
                        @select="selecting"
                    ></multi-select>
                    <file-pond
                        name="test"
                        ref="pond"
                        label-idle="Drop files here..."
                        @processfile="processFile($event)"
                        :server="route('images.post-image', {dir: 'galleries', prefix: 'gallery'}).url()"
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
    import MultiSelect from 'vue-multiselect'
    import 'vue-multiselect/dist/vue-multiselect.min.css';
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
            MultiSelect,
        },
        data() {
            return {
                values: this.$page.categories,
                file: '/storage/medium/'+this.$page.gallery.image,
                form: this.$inertia.form({
                    image: this.$page.gallery.image,
                    gallery_category: this.$page.gallery.category,
                }, {
                    bag: 'default',
                    resetOnSuccess: true,
                }),
            }
        },
        methods: {
            create() {
                this.form.put(route('galleries.update', [this.$page.gallery.id]));
            },
            processFile(e) {
                this.form.image = JSON.parse(this.$refs.pond.getFile().serverId).filename;
            },
            addTag(newTag) {
                newTag = {title: newTag};
                this.values.push(newTag);
                this.form.gallery_category = newTag;
            },
            selecting(val, id) {
                this.form.gallery_category = val.title;
            }
        }
    }
</script>

<style scoped>

</style>
