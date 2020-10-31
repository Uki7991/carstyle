<template>
    <app-layout>
        <div class="container mx-auto py-16">
            <div class="mb-5">
                <back-to :href="route('materials.index')" title="Назад"></back-to>
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
                        <file-pond
                            name="test"
                            ref="pond"
                            label-idle="Drop files here..."
                            @processfile="processFile($event)"
                            :server="route('images.post-image', {dir: 'materials', prefix: 'material'}).url()"
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
                <div class="flex flex-col justify-center items-center flex-grow space-y-7">
                    <h2>Свойства материала:</h2>
                    <div class="flex items-center" v-for="(property, index) in form.properties" :key="index">
                        <vs-input
                            label-placeholder="Название"
                            primary
                            v-model="property.title"
                            class="mx-4"
                        ></vs-input>:
                        <vs-input
                            label-placeholder="Значение"
                            primary
                            v-model="property.value"
                            class="mx-4"
                        ></vs-input>
                        <vs-button
                            icon
                            danger
                            @click="removeProperty(index)"
                        >
                            <i class="bx bx-x"></i>
                        </vs-button>
                    </div>
                    <vs-button @click="addProperty">
                        <i class="bx bx-plus"></i> Добавить
                    </vs-button>
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
                form: this.$inertia.form({
                    title: '',
                    image: '',
                    properties: [],
                }, {
                    bag: 'default',
                    resetOnSuccess: true,
                }),
            }
        },
        methods: {
            create() {
                this.form.post(this.route('materials.store'));
            },
            processFile(e) {
                this.form.image = JSON.parse(this.$refs.pond.getFile().serverId).filename;
            },
            addProperty() {
                this.form.properties.push({
                    title: '',
                    value: '',
                });
            },
            removeProperty(index) {
                this.form.properties.splice(index, 1);
            }
        }
    }
</script>

<style scoped>

</style>
