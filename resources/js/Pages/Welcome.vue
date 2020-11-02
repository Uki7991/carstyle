<template>
    <div>
        <nav class="sticky top-0 bg-white z-50">
            <div class="container nav-header flex items-center mx-auto">
                <div class="text-logo uppercase">
                    Car style
                </div>
                <ul class="flex menu">
                    <li>
                        <a href="#services">Услуги</a>
                    </li>
                    <li>
                        <a href="#materials">Материалы</a>
                    </li>
                    <li>
                        <a href="#work">Наши работы</a>
                    </li>
                    <li>
                        <a href="#contacts">Контакты</a>
                    </li>
                </ul>

                <ul class="flex menu items-center ml-auto">
                    <li>
                        <a href="" class="icon">
                            <img src="/assets/icons/instagram.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="" class="icon">
                            <img src="/assets/icons/whatsapp.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="" class="icon flex">
                            <img src="/assets/icons/map.svg" class="mr-1" alt="">
                            <span>Краснобогатырская ул., 13, с1 </span>
                        </a>
                    </li>
                    <li>
                        <a href="" class="icon flex">
                            <img src="/assets/icons/phone.svg" class="mr-1" alt="">
                            <span>+74957556983</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <main>
            <section class="first py-32 relative">
                <div class="dots_back w-10/12 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
                <div class="container mx-auto flex justify-end z-10 relative">
                    <div class="w-6/12">
                        <p class="font-bold text-6xl mb-5 leading-tight">Тонирование <br> и оклейка авто</p>
                        <p class="leading-6 mb-10">Качественное тонирование и оклеивание  вашего автомобиля <br> нашими специалистами.
                            Высококачественные пленки от <br> проверенных поставщиков с гарантией выполненной работы 3 <br> года.
                            Записывайтесь и получайте <span class="font-bold text-indigo-600">скидку 5%</span>.</p>
                        <form class="flex items-center bg-white py-3 px-3 rounded-xl">
                            <div class="flex px-5">
                                <img src="/assets/icons/person.svg" alt="">
                                <input placeholder="Имя" class="w-full ml-2 focus:outline-none" type="text">
                            </div>
                            <div class="flex px-5">
                                <img src="/assets/icons/phone_black.svg" alt="">
                                <input placeholder="Номер" class="w-full ml-2 focus:outline-none" type="text">
                            </div>
                            <button class="bg-blue-600 py-3 px-9 text-white rounded-md">Записаться</button>
                        </form>
                    </div>
                    <div class="w-6/12">
                        <img src="/assets/images/car.png" class="max-w-none" alt="">
                    </div>
                </div>
            </section>

            <section class="second py-32 relative">
                <div class="absolute w-1/2 top-0 left-1/2 transform -translate-x-1/2">
                    <img class="w-full" src="/assets/images/styler.png" alt="">
                </div>
                <div class="container mx-auto">
                    <p class="text-indigo-600 text-lg mb-3 font-semibold text-center">Почему мы?</p>
                    <p class="font-bold mb-5 text-4xl text-center leading-tight">Более 2000 автомобилей было <br> затонированно и оклеено за время работы <br> нашей студии.</p>
                    <div class="flex w-9/12 mx-auto flex-wrap justify-center">
                        <div v-for="(item, i) in advantages" :data-id="i" class="w-4/12 text-center py-7 px-6" :key="i">
                            <div class="rounded-2xl border-2 border-white shadow-2xl w-21 h-21 flex items-center mx-auto justify-center">
                                <img :src="'/assets/icons/' + item.icon" alt="">
                            </div>
                            <p class="mt-6 mb-5 text-lg font-semibold">{{item.title}}</p>
                            <p>{{ item.text }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" class="third py-32">
                <div class="container mx-auto">
                    <p class="text-indigo-600 text-lg mb-3 font-semibold">Услуги</p>
                    <p class="font-bold mb-5 text-4xl leading-tight">Каталог наших услуг</p>
                    <transition duration="200" name="fade">
                        <div class="flex flex-wrap" v-if="!activeTab">
                            <div class="w-3/12 px-5 my-6" v-for="(item, i) in services" :key="i" @click="activeService(item)">
                                <p class="font-semibold text-lg text-gray-800">{{ item.title }}</p>
                                <p class="text-sm text-gray-600 italic">{{ item.description }}</p>
                                <img class="mt-4" :src="'/storage/large/' + item.image" alt="">
                            </div>
                        </div>

                        <custom-tabs :services="services" :tables="tables" v-else></custom-tabs>
                    </transition>
                </div>
            </section>

            <section id="materials" class="fourth py-32">
                <div class="container mx-auto">
                    <p class="text-indigo-600 text-lg mb-3 font-semibold">Материалы</p>
                    <p class="font-bold mb-5 text-4xl leading-tight">Характеристики используемых брендов</p>

                    <div class="flex py-5 flex-wrap" v-for="materialCategory in materialCategories" :key="materialCategory.id">
                        <div class="w-full mb-7">
                            <p class="text-xl font-bold">{{materialCategory.title}}</p>
                        </div>
                        <div class="w-1/2 px-3 mb-4" v-for="material in materialCategory.materials" :key="material.id">
                            <div class="bg-white rounded-3xl py-5 px-6">
                                <img class="h-12 object-cover" :src="'/storage/small/'+material.image" alt="">
                                <div class="mt-4 text-sm leading-loose">
                                    <div class="flex justify-between" v-for="property in material.properties" :key="property.id">
                                        <p>{{property.title}}:</p>
                                        <p class="font-medium">{{property.value}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="work" class="fifth py-32">
                <div class="container mx-auto">
                    <p class="text-indigo-600 text-lg mb-3 font-semibold">Наши работы</p>
                    <div class="flex items-end justify-between">
                        <p class="font-bold mb-5 text-4xl leading-tight">Фотографии работ</p>
                        <div class="flex mb-5">
                            <img src="/assets/icons/left_arrow.svg" alt="">
                            <div class="mx-3 px-3 flex">
                                <div class="relative mr-6">
                                    <span class="text-xs text-indigo-600 absolute -top-1 -right-4">421</span>
                                    <p>Все</p>
                                </div>
                                <div class="relative mr-6">
                                    <span class="text-xs text-indigo-600 absolute -top-1 -right-4">23</span>
                                    <p>Атермальная тонировка</p>
                                </div>
                                <div class="relative mr-6">
                                    <span class="text-xs text-indigo-600 absolute -top-1 -right-4">121</span>
                                    <p>Тонирование стекол</p>
                                </div>
                                <div class="relative mr-6">
                                    <span class="text-xs text-indigo-600 absolute -top-1 -right-4">72</span>
                                    <p>Защита лобового стекла</p>
                                </div>
                            </div>
                            <img src="/assets/icons/right_arrow.svg" alt="">
                        </div>
                    </div>

                    <div class="grid grid-cols-3 grid-rows-2 gap-3 h-80">
                        <div :class="{'row-span-2': i===1 || i===2, 'row-span-1': i===3 || i===4, 'relative': true}" v-for="i in 4" :key="i">
                            <div v-if="i===4" class="h-full w-full absolute rounded-2xl bg-gray-100 opacity-75"></div>
                            <div v-if="i===4" class="h-full w-full absolute rounded-2xl backdrop-blur-3"></div>
                            <button v-if="i===4" class="border border-indigo-100 text-gray-600 text-sm bg-indigo-200 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-5">Смотреть все</button>
                            <img class="w-full h-full object-cover rounded-2xl" :src="'/assets/images/'+i+'.jpg'" alt="">
                        </div>
                    </div>
                </div>
            </section>

            <section id="contacts" class="sixth py-32 relative">
                <div class="container mx-auto bg-transparent z-10 relative">
                    <p class="text-indigo-600 text-lg mb-3 font-semibold">Контакты</p>
                    <p class="font-bold mb-5 text-4xl leading-tight">Как нас найти?</p>

                    <div class="flex flex-col space-y-5 py-5">
                        <a href="" class="flex">
                            <img class="mr-1" src="/assets/icons/map.svg" alt="">
                            <p>Краснобогатырская ул., 13, с1 </p>
                        </a>
                        <a href="" class="flex">
                            <img class="mr-1" src="/assets/icons/mail.svg" alt="">
                            <p>carstyle@gmail.com</p>
                        </a>
                        <a href="" class="flex">
                            <img class="mr-1" src="/assets/icons/phone.svg" alt="">
                            <p>+74957556983</p>
                        </a>
                    </div>

                    <div class="flex space-x-5 py-5">
                        <a href="">
                            <img class="w-9 cursor-pointer" src="/assets/icons/instagram.svg" alt="">
                        </a>
                        <a href="">
                            <img class="w-9 cursor-pointer" src="/assets/icons/whatsapp.svg" alt="">
                        </a>
                    </div>
                </div>
                <div class="flex absolute top-0 w-full">
                    <div class="w-5/12 bg-white absolute h-202">
                    </div>
                    <div class="w-8/12 map-shadow absolute right-0 top-7">
                        <iframe src="https://yandex.ru/map-widget/v1/-/CCQ~nEg3tD" width="100%" height="566" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
                    </div>
                </div>

            </section>

            <footer class="pb-12 pt-24">
                <div class="container mx-auto">
                    <div class="flex items-center mb-5">
                        <div class="text-logo uppercase">
                            Car style
                        </div>

                        <ul class="flex menu">
                            <li>
                                <a href="#services">Услуги</a>
                            </li>
                            <li>
                                <a href="#materials">Материалы</a>
                            </li>
                            <li>
                                <a href="#work">Наши работы</a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex space-x-9">
                            <a href="">
                                <img src="/assets/icons/instagram.svg" alt="">
                            </a>
                            <a href="">
                                <img src="/assets/icons/whatsapp.svg" alt="">
                            </a>
                            <a href="" class="flex space-x-1">
                                <img src="/assets/icons/phone.svg" alt="">
                                <p>+74957556983</p>
                            </a>
                            <a href="" class="flex space-x-1">
                                <img src="/assets/icons/map.svg" alt="">
                                <p>Краснобогатырская ул., 13, с1 </p>
                            </a>
                            <a href="" class="flex space-x-1">
                                <img src="/assets/icons/mail.svg" alt="">
                                <p>carstyle@gmail.com</p>
                            </a>
                        </div>
                        <p class="text-sm text-gray-500">Все права защищены — 2020 © CAR STYLE</p>
                    </div>
                </div>
            </footer>
        </main>
    </div>
</template>

<script>
    import AppLayout from "../Layouts/AppLayout";
    import CustomTabs from "@/Components/CustomTabs";

    export default {
        components: {
            CustomTabs,
            AppLayout,
        },
        data() {
            return {
                advantages: [
                    {
                        icon: 'warranty.svg',
                        title: 'Даем гарантию',
                        text: 'Получайте гарантию 3 года на проделаную работу'
                    },
                    {
                        icon: 'price.svg',
                        title: 'Низкие цены',
                        text: 'Платите приятные цены за качественную работу'
                    },
                    {
                        icon: 'material.svg',
                        title: 'Лучшые материалы',
                        text: 'Оригинальные пленки Llumar, Suntek, SPECTROLL, KPMF'
                    },
                    {
                        icon: 'card.svg',
                        title: 'Удобная оплата',
                        text: 'Принимаем к оплате карты, а также безналичный расчет'
                    },
                    {
                        icon: 'time.svg',
                        title: 'Трепетное отношение',
                        text: 'Сохраняем заводскую гарантию на автомобиль'
                    },
                    {
                        icon: 'wifi.svg',
                        title: 'Клиентская зона',
                        text: 'Скоротать время ожидания с кофе и бесплатным WI-FI'
                    },
                ],
                services: this.$page.services,
                materialCategories: this.$page.materialCategories,
                tables: this.$page.tables,
            }
        },
        computed: {
            activeTab() {
                let service = this.services.find(item => item.activeTab === true);
                return service ? service.activeTab : false;
            }
        },
        methods: {
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
        mounted() {
        }
    }
</script>

<style scoped>

</style>
