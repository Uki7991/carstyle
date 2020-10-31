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
        <vs-sidebar-item @click.native="clickSidebar('/admin/dashboard')" id="dashboard">
            <template #icon>
                <i class='bx bx-home'></i>
            </template>
            Dashboard
        </vs-sidebar-item>
        <vs-sidebar-item @click.native="clickSidebar('/admin/services')" id="services">
            <template #icon>
                <i class='bx bx-grid-alt'></i>
            </template>
            Сервисы
        </vs-sidebar-item>
        <vs-sidebar-item id="materials" @click.native="clickSidebar('/admin/materials')">
            <template #icon>
                <i class='bx bxs-layer-plus'></i>
            </template>
            Материалы
        </vs-sidebar-item>
        <vs-sidebar-item id="categories" @click.native="clickSidebar('/admin/gallery')">
            <template #icon>
                <i class='bx bx-images'></i>
            </template>
            Галерея
        </vs-sidebar-item>
        <vs-sidebar-group>
            <template #header>
                <vs-sidebar-item arrow>
                    <template #icon>
                        <i class='bx bx-group'></i>
                    </template>
                    Social media
                </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="Instagram">
                <template #icon>
                    <i class='bx bxl-instagram'></i>
                </template>
                Instagram
            </vs-sidebar-item>
            <vs-sidebar-item id="twitter">
                <template #icon>
                    <i class='bx bxl-twitter' ></i>
                </template>
                Twitter
            </vs-sidebar-item>
            <vs-sidebar-item id="Facebook">
                <template #icon>
                    <i class='bx bxl-facebook' ></i>
                </template>
                Facebook
            </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-group>
            <template #header>
                <vs-sidebar-item arrow>
                    <template #icon>
                        <i class='bx bx-code-alt' ></i>
                    </template>
                    Coding
                </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="github">
                <template #icon>
                    <i class='bx bxl-github' ></i>
                </template>
                Github
            </vs-sidebar-item>
            <vs-sidebar-item id="codepen">
                <template #icon>
                    <i class='bx bxl-codepen'></i>
                </template>
                Codepen
            </vs-sidebar-item>
            <vs-sidebar-item id="discord">
                <template #icon>
                    <i class='bx bxl-discord'></i>
                </template>
                Discord
            </vs-sidebar-item>
            <vs-sidebar-item id="Javascript">
                <template #icon>
                    <i class='bx bxl-javascript' ></i>
                </template>
                Javascript
            </vs-sidebar-item>
            <vs-sidebar-item id="git">
                <template #icon>
                    <i class='bx bxl-git' ></i>
                </template>
                Git
            </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-item id="donate">
            <template #icon>
                <i class='bx bxs-donate-heart' ></i>
            </template>
            Donate
        </vs-sidebar-item>
        <vs-sidebar-item id="drink">
            <template #icon>
                <i class='bx bx-drink'></i>
            </template>
            Drink
        </vs-sidebar-item>
        <vs-sidebar-item id="shopping">
            <template #icon>
                <i class='bx bxs-shopping-bags'></i>
            </template>
            Shopping
        </vs-sidebar-item>
        <vs-sidebar-item id="chat" @click.native="clickPostRoute('/logout')">
            <template #icon>
                <i class='bx bx-exit bx-rotate-180' ></i>
            </template>
            Logout
        </vs-sidebar-item>
        <template #footer>
            <vs-row justify="space-between">
                <vs-avatar badge-color="danger" badge-position="top-right">
                    <i class='bx bx-bell' ></i>

                    <template #badge>
                        28
                    </template>
                </vs-avatar>

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
    import {Inertia} from '@inertiajs/inertia'
    import {pathToRegexp} from 'path-to-regexp/dist'
    import {bus} from "../app";

    export default {
        data() {
            return {
                active: 'dashboard',
                reduce: null,
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
                bus.$emit('sidebar-reduce', this.reduce);
            }
        },
        methods: {
            clickSidebar(route) {
                Inertia.visit(route);
            },
            clickPostRoute(route) {
                Inertia.post('/logout');
            },
            clickReduce() {
                this.reduce = !this.reduce;
            }
        },
        created() {
            const current = window.location.pathname + window.location.search + window.location.hash
            this.active = pathToRegexp('/:admin/:menu/(.*)*').exec(current)[2];
            // console.log(pathToRegexp('/:admin/:menu/(.*)*').exec(current));
            if (localStorage.getItem('sidebarReduce') === null) {
                localStorage.setItem('sidebarReduce', false);
            } else {
                this.reduce = (localStorage.getItem('sidebarReduce') === 'true');
            }
        }
    }
</script>
