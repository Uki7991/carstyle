<template>
    <app-layout>
        <div class="flex justify-center">
            <admin-component-div>
                <div v-if="$page.materails.length">
                    <div class="flex items-center justify-between mb-5">
                        <h2 class="font-bold">Материалы</h2>
                        <vs-button
                            success
                            gradient
                            @click="link(route('materails.create'))"
                        >
                            Создать
                        </vs-button>
                    </div>
                    <vs-table striped>
                        <template #thead>
                            <vs-tr>
                                <vs-th>Название</vs-th>
                                <vs-th>Действие</vs-th>
                            </vs-tr>
                        </template>
                        <template #tbody>
                            <vs-tr v-for="materail in $page.materails" :key="materail.id">
                                <vs-td>{{materail.title}}</vs-td>
                                <vs-td>
                                    <i class="bx bxs-edit cursor-pointer p-2 text-lg" @click="link(route('materails.edit', [materail.id]))"></i>
                                    <i class="bx bx-trash text-red-700 cursor-pointer p-2 text-lg" @click="link(route('materails.destroy', [materail.id]))"></i>
                                </vs-td>
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
