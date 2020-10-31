<template>
    <app-layout>
        <div class="container mx-auto py-16">
            <div class="mb-5">
                <back-to :href="route('galleries.index')" title="Назад"></back-to>
            </div>
            <admin-component-div>
                <form @submit.prevent="create" class="space-y-6 w-3/12 px-4 py-7 conform">
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
                    <div>
                        <h2>Можно выбрать несколько картинок</h2>
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
            </admin-component-div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from "@/Layouts/AppLayout";
    import BackTo from "@/Components/Buttons/BackTo";
    import AdminComponentDiv from "@/Components/AdminComponentDiv";
    import MultiSelect from 'vue-multiselect'
    import VueFilePond from 'vue-filepond';
    import 'filepond/dist/filepond.min.css';
    // Import image preview plugin styles
    import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
    import 'vue-multiselect/dist/vue-multiselect.min.css';

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
                form: this.$inertia.form({
                    images: [],
                    gallery_category: '',
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
                    return {image: JSON.parse(item.serverId).filename};
                });
            },
            processFile() {
                this.form.images.push({image: JSON.parse(this.$refs.pond.getFile().serverId).filename});
            },
            addTag(newTag) {
                newTag = {title: newTag};
                this.values.push(newTag);
                this.form.gallery_category = newTag;
            },
            selecting(val, id) {
                this.form.gallery_category = val.title;
            }
        },
    }
</script>

<style scoped>

</style>
