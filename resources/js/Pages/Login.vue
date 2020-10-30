<template>
    <div class="flex h-screen justify-end bg-cover bg-no-repeat" style="background-image: url(/assets/images/back.jpg);">
        <div class="h-screen bg-white flex items-center justify-center w-3/12">
            <form @submit.prevent="login" class="flex flex-col space-y-6">
                <vs-input
                    v-model="form.email"
                    label-placeholder="Email"
                >
                    <template #message-danger v-if="form.error('email')">
                        {{ form.error('email')}}
                    </template>
                </vs-input>
                <vs-input type="password"
                          icon-after
                          label-placeholder="Password"
                          :visiblePassword="visiblePassword"
                          @click-icon="visiblePassword = !visiblePassword"
                          v-model="form.password"
                >
                    <template #message-danger v-if="form.error('password')">
                        {{ form.error('password')}}
                    </template>
                    <template #icon>
                        <i v-if="!visiblePassword" class='bx bx-show-alt'></i>
                        <i v-else class='bx bx-hide'></i>
                    </template>
                </vs-input>
                <vs-button>Вход</vs-button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visiblePassword: false,
                form: this.$inertia.form({
                    email: '',
                    password: '',
                }, {
                    bag: 'default',
                    resetOnSuccess: true,
                }),
            }
        },
        methods: {
            login() {
                this.form.post('/login');
            }
        }
    }
</script>

<style scoped>

</style>
