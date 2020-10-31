<template>
    <app-layout>
        <div class="container py-32 mx-auto">
            <div class="flex justify-center">
                <div class="rounded-2xl w-full bg-white py-6 px-4">
                    <vs-table striped v-if="$page.services.length">
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
                    <no-data v-else title="Тут нет данных!" :href="$page.create_url" btn-text="Создать"></no-data>

                </div>

            </div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from "@/Layouts/AppLayout";
    import NoData from "@/Components/NoData";

    export default {
        components: {
            AppLayout,
            NoData,
        }
    }
</script>

<style scoped>

</style>
