<template>
    <app-layout>
        <div class="flex justify-center">
            <admin-component-div>
                <div v-if="$page.galleries.length">
                    <div class="flex items-center justify-between mb-5">
                        <h2 class="font-bold">Галерея</h2>
                        <vs-button
                            success
                            gradient
                            @click="link(route('galleries.create'))"
                        >
                            Создать
                        </vs-button>
                    </div>
                    <vs-table striped>
                        <template #thead>
                            <vs-tr>
                                <vs-th>Картинка</vs-th>
                                <vs-th>Категория</vs-th>
                                <vs-th>Действие</vs-th>
                            </vs-tr>
                        </template>
                        <template #tbody>
                            <vs-tr v-for="gallery in $page.galleries" :key="gallery.id">
                                <vs-td><img class="h-12 object-cover" :src="'/storage/small/'+gallery.image" alt=""></vs-td>
                                <vs-td>{{gallery.category.title}}</vs-td>
                                <vs-td>
                                    <i class="bx bxs-edit cursor-pointer p-2 text-lg" @click="link(route('galleries.edit', [gallery.id]))"></i>
                                    <i class="bx bx-trash text-red-700 cursor-pointer p-2 text-lg" @click="link(route('galleries.destroy', [gallery.id]))"></i>
                                </vs-td>
                            </vs-tr>
                        </template>
                    </vs-table>
                </div>
                <no-data v-else title="Тут нет данных!" :href="route('galleries.create')" btn-text="Создать"></no-data>

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
            switchChanged(event, gallery) {
                this.form.active = event;
                this.form.put(this.route('galleries.status', {gallery: gallery.id}))
            }
        }
    }
</script>

<style scoped>

</style>
