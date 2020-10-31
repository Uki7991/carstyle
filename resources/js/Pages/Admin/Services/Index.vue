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
                            </vs-tr>
                        </template>
                        <template #tbody>
                            <vs-tr v-for="service in $page.services" :key="service.id">
                                <vs-td>{{service.title}}</vs-td>
                            </vs-tr>
                        </template>
                    </vs-table>
                </div>
                <no-data v-else title="Тут нет данных!" :href="$page.create_url" btn-text="Создать"></no-data>

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
        methods: {
        }
    }
</script>

<style scoped>

</style>
