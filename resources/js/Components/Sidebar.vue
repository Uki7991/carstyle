<template>
    <vs-sidebar class="min-h-screen fixed" style="position: fixed !important;"
        absolute
        :reduce="reduce"
        open
        v-model="active"
    >
        <template #logo>
            <!-- ...img logo -->
        </template>
        <vs-sidebar-item @click.native="link(route('dashboard'))" id="dashboard">
            <template #icon>
                <i class='bx bx-home'></i>
            </template>
            Dashboard
        </vs-sidebar-item>
        <vs-sidebar-item @click.native="link(route('services.index'))" id="services">
            <template #icon>
                <i class='bx bx-grid-alt'></i>
            </template>
            Сервисы
        </vs-sidebar-item>
        <vs-sidebar-item id="materials" @click.native="link(route('materials.index'))">
            <template #icon>
                <i class='bx bxs-layer-plus'></i>
            </template>
            Материалы
        </vs-sidebar-item>
        <vs-sidebar-item id="galleries" @click.native="link(route('galleries.index'))">
            <template #icon>
                <i class='bx bx-images'></i>
            </template>
            Галерея
        </vs-sidebar-item>
        <vs-sidebar-item id="contacts" @click.native="link(route('contacts.edit', {contact: $page.contact}))">
            <template #icon>
                <i class='bx bx-slider-alt'></i>
            </template>
            Настройки
        </vs-sidebar-item>
        <vs-sidebar-item id="logout" @click.native="link(route('logout'))">
            <template #icon>
                <i class='bx bx-exit bx-rotate-180' ></i>
            </template>
            Logout
        </vs-sidebar-item>
        <template #footer>
            <vs-row justify="space-between">
                <vs-avatar>
                    <img :src="$page.user.profile_photo_url" alt="">
                </vs-avatar>
                <vs-col w="12" class="mt-3">
                    <vs-button
                        circle
                        icon
                        floating
                        @click.native="clickReduce"
                    >
                        <i  :class="sidebarIcon"></i>
                    </vs-button>
                </vs-col>
            </vs-row>


        </template>
    </vs-sidebar>
</template>

<script>
    import {pathToRegexp} from 'path-to-regexp/dist'
    import {bus} from "../app";

    export default {
        data() {
            return {
                active: 'dashboard',
                reduce: null,
                pathRegex: pathToRegexp('/:admin/:menu/(.*)*'),
            }
        },
        computed: {
            sidebarIcon() {
                return this.reduce
                    ? 'bx bx-right-arrow-alt'
                    : 'bx bx-left-arrow-alt'
            }
        },
        watch: {
            reduce: function(val) {
                localStorage.setItem('sidebarReduce', this.reduce);
                bus.$emit('reduce', this.reduce);
            }
        },
        methods: {
            clickReduce() {
                this.reduce = !this.reduce;
                bus.$emit('reduce', this.reduce);
            }
        },
        created() {
            const current = window.location.pathname + window.location.search + window.location.hash
            console.log(this.pathRegex.exec(current));
            this.active = this.pathRegex.exec(current) ? this.pathRegex.exec(current)[2] : 'dashboard';
            if (localStorage.getItem('sidebarReduce') === null) {
                localStorage.setItem('sidebarReduce', false);
            } else {
                this.reduce = (localStorage.getItem('sidebarReduce') === 'true');
            }
        },
    }
</script>
