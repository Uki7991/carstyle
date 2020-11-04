<template>
    <app-layout>
        <div class="flex justify-center">
            <admin-component-div>
                <div v-if="$page.services.length">
                    <div class="flex items-center justify-between mb-5">
                        <h2 class="font-bold">Сервисы</h2>
                        <vs-button
                            success
                            gradient
                            @click="link(route('services.create'))"
                        >
                            Создать
                        </vs-button>
                    </div>
                    <vs-table striped>
                        <template #thead>
                            <vs-tr>
                                <vs-th>Название</vs-th>
                                <vs-th>Картинка</vs-th>
                                <vs-th>Активность</vs-th>
                                <vs-th>Действие</vs-th>
                            </vs-tr>
                        </template>
                        <template #tbody>
                            <vs-tr v-for="service in $page.services" :key="service.id">
                                <vs-td>{{service.title}}</vs-td>
                                <vs-td><img class="h-12 object-cover" :src="'/storage/small/'+service.image" alt=""></vs-td>
                                <vs-td>
                                    <div class="w-8">
                                        <vs-switch :val="1" :not-value="0" @input="switchChanged($event, service)" v-model="service.active"></vs-switch>
                                    </div>
                                </vs-td>
                                <vs-td>
                                    <i class="bx bxs-edit cursor-pointer p-2 text-lg" @click="link(route('services.edit', [service.id]))"></i>
                                    <i class="bx bx-trash text-red-700 cursor-pointer p-2 text-lg" @click="link(route('services.destroy', [service.id]))"></i>
                                </vs-td>
                            </vs-tr>
                        </template>
                    </vs-table>
                </div>
                <no-data v-else title="Тут нет данных!" :href="route('services.create')" btn-text="Создать"></no-data>

            </admin-component-div>

        </div>
    </app-layout>
</template>

<script>
    import AppLayout from "@/Layouts/AppLayout";
    import NoData from "@/Components/NoData";
    import AdminComponentDiv from "@/Components/AdminComponentDiv";

    export default {
        components: {
            AppLayout,
            NoData,
            AdminComponentDiv,
        },
        data() {
            return {
                form: this.$inertia.form({
                    active: false,
                }),
            }
        },
        methods: {
            switchChanged(event, service) {
                this.form.active = event;
                this.form.put(this.route('services.status', {service: service.id}))
            }
        }
    }
</script>

<style scoped>

</style>
