<template>
    <app-layout>
        <div class="container mx-auto py-16">
            <div class="mb-5">
                <back-to :href="route('services.index')" title="Назад"></back-to>
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
                            :server="route('images.post-image', {dir: 'services', prefix: 'service'}).url()"
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

                <div class="items-center w-9/12 justify-center flex flex-col">
                    <div class="admin-service-tabs" v-if="form.tables.length">
                        <tabs ref="tabsComponent">
                            <tab :name="formTable.title" v-for="(formTable, index) in form.tables" :key="index" class="custom" :error="formTable.error">
                                <div class="flex items-center">
                                    <vs-input
                                        primary
                                        label="Название таблицы"
                                        v-model="formTable.title"
                                        class="py-4"
                                    >
                                        <template #message-danger style="height: unset!important;" v-if="form.error('tables.'+index+'.title')">
                                            {{form.error('tables.'+index+'.title')}}
                                        </template>
                                    </vs-input>
                                    <vs-button
                                        danger
                                        @click="removeTable(index)"
                                    >
                                        <i class="bx bx-x"></i> Удалить таблицу
                                    </vs-button>
                                </div>
                                <vs-table class="max-w-full">
                                    <template #thead>
                                        <vs-tr>
                                            <vs-th v-for="(heading, headingIndex) in formTable.headings" :key="headingIndex" class="py-5">
                                                <vs-input
                                                    primary
                                                    placeholder="Пустое название колонки"
                                                    border
                                                    v-model="heading.title"
                                                >
                                                    <template #message-danger style="height: unset!important;" v-if="form.error('tables.'+index+'.headings.'+headingIndex+'.title')">
                                                        {{form.error('tables.'+index+'.headings.'+headingIndex+'.title')}}
                                                    </template>
                                                </vs-input>
                                                <vs-button
                                                    icon
                                                    danger
                                                    @click="removeColumn(headingIndex, index)"
                                                    v-if="headingIndex !== 0"
                                                >
                                                    <i class="bx bx-x"></i>
                                                </vs-button>
                                            </vs-th>
                                            <vs-th>
                                                <vs-button
                                                    flat
                                                    primary
                                                    @click="addColumn(formTable)"
                                                >Добавить колонку</vs-button>
                                            </vs-th>
                                        </vs-tr>
                                    </template>
                                    <template #tbody>
                                        <vs-tr v-for="(item, i) in formTable.headings[0].values.length" :key="i">
                                            <vs-td v-for="(jtem, j) in formTable.headings.length" :key="j">
                                                {{i}} {{j}}
                                                <vs-input
                                                    primary
                                                    border
                                                    placeholder="Пустое значение"
                                                    v-model="formTable.headings[j].values[i].value"
                                                >
                                                    <template style="height: unset!important;" #message-danger v-if="form.error('tables.'+index+'.headings.'+j+'.values.'+i+'.value')">
                                                        {{form.error('tables.'+index+'.headings.'+j+'.values.'+i+'.value')}}
                                                    </template>
                                                </vs-input>
                                            </vs-td>
                                            <vs-td>
                                                <vs-button
                                                    icon
                                                    danger
                                                    @click="removeRow(i, index)"
                                                    v-if="i !== 0"
                                                >
                                                    <i class="bx bx-x"></i>
                                                </vs-button>
                                            </vs-td>
                                        </vs-tr>
                                        <vs-tr>
                                            <vs-td>
                                                <vs-button
                                                    primary
                                                    flat
                                                    @click.stop="addRow(formTable)"
                                                >
                                                    Добавить строку
                                                </vs-button>
                                            </vs-td>
                                        </vs-tr>
                                    </template>
                                </vs-table>
                            </tab>
                        </tabs>
                    </div>
                    <vs-button @click="addTable">
                        Создать таблицу
                    </vs-button>
                    <p v-if="form.error('tables')" class="text-red-500 text-xs">
                        {{form.error('tables')}}
                    </p>
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
                myFiles: [],
                table: {
                    title: 'Новая таблица',
                    headings: [],
                    error: false,
                },
                heading: {
                    title: '',
                    values: [''],
                },
                value: {value: ''},
                form: this.$inertia.form({
                    title: '',
                    description: '',
                    image: '',
                    tables: [],
                }, {
                    bag: 'default',
                    resetOnSuccess: false,
                }),
            }
        },
        methods: {
            create() {
                this.form.post(this.route('services.store'));
            },
            processFile(e) {
                this.form.image = JSON.parse(this.$refs.pond.getFile().serverId).filename;
            },
            addTable() {
                this.form.tables.push({
                    ...this.table,
                    title: Date.now().toString(),
                    error: false,
                    headings: [{
                        ...this.heading,
                        values: [{
                            ...this.value,
                        }],
                    }]
                });
            },
            addColumn(formTable) {
                formTable.headings.push({
                    ...this.heading,
                    values: [{
                        ...this.value,
                    }],
                });

                formTable.headings[formTable.headings.length - 1].values.length = formTable.headings[0].values.length;
            },
            addRow(formTable) {
                for (let i = 0; i < formTable.headings.length; i++) {
                    formTable.headings[i].values.push({
                        ...this.value,
                    });
                }

            },
            filteredErrors(index) {
                const selector = '[href="#'+this.form.tables[index].title.toLowerCase().replaceAll(' ', '-')+'"]';

                for (let key in this.$page.errors) {
                    let reg = new RegExp(`tables\.`+index, 'g');
                    if (this.$page.errors.hasOwnProperty(key) && key.match(reg)) {
                        this.form.tables[index].error = true;
                        document.querySelectorAll(selector)[0].parentElement.classList.add('error');

                        return true;
                    }
                }
                this.form.tables[index].error = false;
                document.querySelectorAll(selector)[0].parentElement.classList.remove('error');

                return false;
            },
            removeColumn(headingIndex, index) {
                this.form.tables[index].headings.splice(headingIndex, 1);
            },
            removeRow(i, index) {
                this.form.tables[index].headings.forEach(item => {
                    item.values.splice(i, 1);
                })
            },
            removeTable(index) {
                this.form.tables.splice(index, 1);
                if (document.getElementsByClassName('tabs-component-tab').length === 2) {
                    document.getElementsByClassName('tabs-component-tab')[0].classList.add('is-active');
                    document.getElementsByClassName('tabs-component-panel')[0].style.display = 'block';
                }
            }
        },
        updated() {
            this.form.tables.forEach((item, index) => {
                this.filteredErrors(index);
            });
        }
    }
</script>

<style scoped>

</style>
