<template>
    <div class="custom-tabs-component lg:flex-row flex-col">
        <ul class="custom-tabs-component-tabs lg:w-3/12 w-full">
            <li v-for="service in services" :key="service.id" class="custom-tabs-component-tab" :class="{active: service.activeTab}">
                <p @click="activeService(service)">{{service.title}}</p>
                <span>{{service.description}}</span>
                <transition name="fade" duration="200">
                    <ul v-show="service.activeTab">
                        <li v-for="table in tables.filter(item => item.service_id === service.id)" :class="{'is-active': table.active}" :key="table.id">
                            <span @click="showPanel(table)">{{table.title}}</span>
                        </li>
                    </ul>
                </transition>
            </li>
        </ul>
        <div class="custom-tabs-component-panels lg:w-9/12 w-full flex justify-end">
            <transition-group duration="200" name="fade">
                <div class="custom-tabs-component-panel" aria-hidden="true" role="tabpanel" v-for="table in tables" :key="table.id" v-show="table.active">
                    <vs-table>
                        <template #thead>
                            <vs-tr>
                                <vs-th v-for="heading in table.headings" :key="heading.id">
                                    {{heading.title}}
                                </vs-th>
                            </vs-tr>
                        </template>
                        <template #tbody>
                            <vs-tr v-for="(item, i) in table.headings[0].values.length" :key="i">
                                <vs-td v-for="(jtem, j) in table.headings.length" :key="j">
                                    {{table.headings[j].values[i].value}}
                                </vs-td>
                            </vs-tr>
                        </template>
                    </vs-table>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['tables', 'services'],
        methods: {
            showPanel(table) {
                this.tables = this.tables.map(item => {
                    return {
                        ...item,
                        active: table.id === item.id
                    };
                })
                this.services = this.services.map(item => {
                    return {
                        ...item,
                        activeTab: table.service_id === item.id
                    };
                })
            },
            activeService(service) {
                this.services = this.services.map(item => {
                    return {
                        ...item,
                        activeTab: item.id === service.id,
                    }
                });
                let table = this.tables.find(item => item.service_id === service.id);
                this.tables = this.tables.map(item => {
                    return {
                        ...item,
                        active: table.id === item.id,
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>
