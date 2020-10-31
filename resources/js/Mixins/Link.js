export default {
    methods: {
        link(route) {
            const method = route.urlBuilder.route.methods[0].toLowerCase();
            this.$inertia.visit(route, {
                method: method,
            });
        }
    }
}
