<template>
    <app-layout>

        <div class="container mx-auto">
            <admin-component-div class="py-12">
                <div class="flex mb-5 justify-end">
                    <vs-button
                        success
                        gradient
                        @click="create"
                    >
                        Сохранить
                    </vs-button>
                </div>
                <form @submit.prevent="create" class="conform grid grid-cols-3 gap-2 w-full">
                    <div class="flex flex-col space-y-6 border border-gray-200 rounded-xl p-3">
                        <p class="font-bold text-xl mb-4">SEO элементы</p>
                        <vs-input
                            label-placeholder="Title"
                            primary
                            class="w-full"
                            v-model="form.title"
                        >
                            <template #message-danger v-if="form.error('title')">{{form.error('title')}}</template>
                        </vs-input>

                        <div>
                            <label for="description">Описание</label>
                            <textarea id="description" v-model="form.description" class="w-full border rounded-2xl px-4 py-2" rows="4"></textarea>
                            <p class="text-xs text-red-500" v-if="form.error('description')">{{form.error('description')}}</p>
                        </div>
                        <div>
                            <label for="keywords">Ключевые слова</label>
                            <textarea id="keywords" v-model="form.keywords" class="w-full border rounded-2xl px-4 py-2" rows="4"></textarea>
                            <p class="text-xs text-red-500" v-if="form.error('keywords')">{{form.error('keywords')}}</p>
                        </div>
                    </div>
                    <div class="flex flex-col space-y-8 border border-gray-200 rounded-xl p-3">
                        <p class="font-bold text-xl mb-4">Контакты</p>
                        <vs-input
                            label-placeholder="Телефон"
                            primary
                            class="w-full"
                            v-model="form.phone"
                        >
                            <template #message-danger v-if="form.error('phone')">{{form.error('phone')}}</template>
                        </vs-input>
                        <vs-input
                            label-placeholder="email"
                            primary
                            class="w-full"
                            v-model="form.email"
                        >
                            <template #message-danger v-if="form.error('email')">{{form.error('email')}}</template>
                        </vs-input>
                        <div>
                            <label for="address">Адрес</label>
                            <textarea
                                id="address"
                                class="w-full border rounded-2xl px-4 py-2"
                                v-model="form.address"
                            >
                        </textarea>
                            <p class="text-xs text-red-500" v-if="form.error('address')">{{form.error('address')}}</p>
                        </div>
                        <vs-input
                            label-placeholder="Instagram"
                            primary
                            class="w-full"
                            v-model="form.instagram"
                        >
                            <template #message-danger v-if="form.error('instagram')">{{form.error('instagram')}}</template>
                        </vs-input>
                        <vs-input
                            label-placeholder="Whatsapp"
                            primary
                            class="w-full"
                            v-model="form.whatsapp"
                        >
                            <template #message-danger v-if="form.error('whatsapp')">{{form.error('whatsapp')}}</template>
                        </vs-input>
                        <vs-input
                            label-placeholder="Карта"
                            primary
                            class="w-full"
                            v-model="form.yandex"
                        >
                            <template #message-danger v-if="form.error('yandex')">{{form.error('yandex')}}</template>
                        </vs-input>
                    </div>
                    <div class="flex flex-col space-y-8 border border-gray-200 rounded-xl p-3">
                        <p class="font-bold text-xl mb-4">Скрипты</p>
                        <div>
                            <label for="google_script">Google скрипты</label>
                            <textarea id="google_script" class="w-full border rounded-xl px-4 py-2" v-model="form.google_script" rows="4"></textarea>
                            <p class="text-xs text-red-500" v-if="form.error('google_script')">{{form.error('google_script')}}</p>
                        </div>
                        <div>
                            <label for="yandex_script">Yandex скрипты</label>
                            <textarea id="yandex_script" class="w-full border rounded-xl px-4 py-2" v-model="form.yandex_script" rows="4"></textarea>
                            <p class="text-xs text-red-500" v-if="form.error('yandex_script')">{{form.error('yandex_script')}}</p>
                        </div>
                        <div>
                            <label for="other_script">Другие скрипты</label>
                            <textarea id="other_script" class="w-full border rounded-xl px-4 py-2" v-model="form.other_script" rows="4"></textarea>
                            <p class="text-xs text-red-500" v-if="form.error('other_script')">{{form.error('other_script')}}</p>
                        </div>
                    </div>
                    <div class="flex flex-col space-y-8 border border-gray-200 rounded-xl p-3">
                        <p class="font-bold text-xl mb-4">Заявки</p>
                        <vs-input
                            label-placeholder="Email для запросов"
                            primary
                            v-model="form.mail_to"
                        >
                            <template #message-danger v-if="form.error('mail_to')">
                                {{form.error('mail_to')}}
                            </template>
                        </vs-input>
                    </div>
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
    import 'vue-multiselect/dist/vue-multiselect.min.css';

    export default {
        components: {
            AppLayout,
            AdminComponentDiv,
            BackTo,
            MultiSelect,
        },
        data() {
            return {
                form: this.$inertia.form({
                    'title': this.$page.contact.title,
                    'description': this.$page.contact.description,
                    'keywords': this.$page.contact.keywords,
                    'phone': this.$page.contact.phone,
                    'email': this.$page.contact.email,
                    'address': this.$page.contact.address,
                    'instagram': this.$page.contact.instagram,
                    'whatsapp': this.$page.contact.whatsapp,
                    'yandex': this.$page.contact.yandex,
                    'yandex_script': this.$page.contact.yandex_script,
                    'google_script': this.$page.contact.google_script,
                    'other_script': this.$page.contact.other_script,
                    'mail_to': this.$page.contact.mail_to,
                }, {
                    bag: 'default',
                    resetOnSuccess: true,
                }),
            }
        },
        methods: {
            create() {
                this.form.put(this.route('contacts.update', {contact: this.$page.contact.id}));
            }
        },
    }
</script>

<style scoped>

</style>
