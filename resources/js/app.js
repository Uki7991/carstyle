require('./bootstrap');

import Vue from 'vue';

import { InertiaApp } from '@inertiajs/inertia-vue';
import { InertiaForm } from 'laravel-jetstream';
import PortalVue from 'portal-vue';
import Vuesax from 'vuesax'
import Link from "@/Mixins/Link";
import Tabs from 'vue-tabs-component';

import 'vuesax/dist/vuesax.css'

Vue.mixin({ methods: { route } });
Vue.mixin(Link);
Vue.use(InertiaApp);
Vue.use(InertiaForm);
Vue.use(PortalVue);
Vue.use(Vuesax);
Vue.use(Tabs);

const app = document.getElementById('app');
export const bus = new Vue();

new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => import(`./Pages/${name}`).then(module => module.default),
            },
        }),
}).$mount(app);
