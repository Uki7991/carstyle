<template>
    <app-layout>
        <div class="container mx-auto py-16">
            <div class="mb-5">
                <back-to :href="route('materials.index')" title="Назад"></back-to>
            </div>
            <admin-component-div class="py-8 flex">
                <form @submit.prevent="create" class="space-y-6 w-3/12 px-4 py-7 conform">
                    <div>
                        <multi-select
                            v-model="form.category"
                            tag-placeholder="Добавить новую категорию материала"
                            placeholder="Поиск категорий материала"
                            :options="values"
                            :multiple="false"
                            :taggable="true"
                            label="title"
                            value="title"
                            @tag="addTag"
                            @select="selecting"
                        ></multi-select>
                        <p v-if="form.error('category')" class="text-xs text-red-500">{{form.error('category')}}</p>
                    </div>
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
                        <div>
                            <vs-input
                                label-placeholder="Название"
                                primary
                                v-model="property.title"
                                class="mx-4"
                            ></vs-input>
                            <p v-if="form.error('properties.'+index+'.title')" class="text-xs text-red-500">{{form.error('properties.'+index+'.title')}}</p>
                        </div>
                        :
                        <div>
                            <vs-input
                                label-placeholder="Значение"
                                primary
                                v-model="property.value"
                                class="mx-4"
                            ></vs-input>
                            <p v-if="form.error('properties.'+index+'.value')" class="text-xs text-red-500">{{form.error('properties.'+index+'.value')}}</p>
                        </div>

                        <vs-button
                            icon
                            danger
                            @click="removeProperty(index)"
                        >
                            <i class="bx bx-x"></i>
                        </vs-button>
                    </div>
                    <div class="flex flex-col justify-center">
                        <vs-button @click="addProperty">
                            <i class="bx bx-plus"></i> Добавить
                        </vs-button>
                        <p v-if="form.error('properties')" class="text-xs text-red-500">{{form.error('properties')}}</p>
                    </div>
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
    import 'vue-multiselect/dist/vue-multiselect.min.css';
    // Import image preview and file type validation plugins
    // import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
    import MultiSelect from 'vue-multiselect'

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
                    title: '',
                    image: '',
                    category: '',
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
            },
            addTag(newTag) {
                newTag = {title: newTag};
                this.values.push(newTag);
                this.form.category = newTag;
            },
            selecting(val, id) {
                this.form.category = val.title;
            }
        }
    }
</script>

<style scoped>

</style>
