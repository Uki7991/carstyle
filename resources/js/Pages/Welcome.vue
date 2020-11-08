<template>
    <div>
        <vs-dialog
            blur
            v-model="dialogActive"
        >
            <template #header>
                <p class="text-2xl font-bold">Ожидайте звонка</p>
            </template>
            <p class="font-medium text-center">Наш специалист свяжется с вами <br> в течение 10 мин.</p>
            <template #footer>
                <div class="flex mt-9 justify-center">
                    <button class="font-semibold py-3 px-9 bg-blue-600 rounded-md text-white" @click="dialogActive = false">
                        Вернуться на сайт
                    </button>
                </div>
            </template>
        </vs-dialog>
        <div class="fixed top-0 w-screen xl:hidden right-0 z-20 bg-white site-header">
            <div class="flex justify-between items-center px-4 py-5">
                <div class="text-logo uppercase">
                    Car style
                </div>
                <img @click="openMenu" class="w-12" v-if="!menuActive" src="/assets/icons/menu.svg" alt="">
            </div>
        </div>
        <transition name="fade" mode="out-in" duration="300">
            <nav class="transition duration-300 fixed top-0 w-screen xl:w-full h-screen xl:h-auto z-50 site-header" v-show="menuActive">
                <div
                    class="xl:max-w-screen-xl lg:px-4 xl:px-0 py-5 flex pl-4 xl:pl-0 flex-col xl:flex-row h-full justify-between xl:justify-start xl:items-center mx-auto">
                    <div class="flex justify-between items-center">
                        <div class="">
                            <a class="text-logo uppercase" href="#main">Car style</a>
                        </div>
                        <img @click="closeMenu" class="block xl:hidden w-12" v-if="menuActive"
                             src="/assets/icons/close.svg" alt="">

                    </div>
                    <ul class="flex pl-0 xl:pl-9 xl:space-x-9 menu font-bold xl:font-normal text-4xl xl:text-base flex-col xl:flex-row">
                        <li class="hover:text-on-hover transition duration-300">
                            <a href="#services">Услуги</a>
                        </li>
                        <li class="hover:text-on-hover transition duration-300">
                            <a href="#materials">Материалы</a>
                        </li>
                        <li class="hover:text-on-hover transition duration-300">
                            <a href="#work">Наши работы</a>
                        </li>
                        <li class="hover:text-on-hover transition duration-300">
                            <a href="#contacts">Контакты</a>
                        </li>
                    </ul>

                    <ul class="flex menu xl:space-x-9 flex-col xl:flex-row xl:items-center xl:ml-auto flex-col-reverse">
                        <li class="">
                            <ul class="flex bottom-0 left-0 mt-5 xl:mt-0 space-x-9">
                                <li v-if="contact.instagram" class="group">
                                    <a :href="contact.instagram" target="_blank" rel="noreferrer" class="icon">
                                        <img class="svg fill-current text-svg group-hover:text-on-hover transition duration-400 w-6 xl:w-auto" src="/assets/icons/instagram.svg" alt="">
                                    </a>
                                </li>
                                <li v-if="contact.whatsapp" class="group">
                                    <a :href="contact.whatsapp" target="_blank" rel="noreferrer" class="icon">
                                        <img class="svg fill-current text-svg group-hover:text-on-hover transition duration-400 w-6 xl:w-auto" src="/assets/icons/whatsapp.svg" alt="">
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul class="flex flex-col xl:items-center xl:space-x-9 space-y-3 xl:space-y-0 xl:flex-row">
                                <li v-if="contact.address" class=" group">
                                    <a href="#contacts" class="icon flex items-center">
                                        <img src="/assets/icons/map.svg" class="mr-1 svg fill-current text-svg group-hover:text-on-hover transition duration-400" alt="">
                                        <span>{{contact.address}}</span>
                                    </a>
                                </li>
                                <li class="lg:hidden block group" v-if="contact.email">
                                    <a :href="'mailto:'+contact.email" class="icon flex items-center">
                                        <img src="/assets/icons/mail.svg" class="mr-1 svg fill-current text-svg group-hover:text-on-hover transition duration-400" alt="">
                                        <span>{{contact.email}}</span>
                                    </a>
                                </li>
                                <li v-if="contact.phone" class=" group">
                                    <a :href="'tel:'+contact.phone" class="icon flex items-center">
                                        <img src="/assets/icons/phone.svg" class="mr-1 svg fill-current text-svg group-hover:text-on-hover transition duration-400" alt="">
                                        <span>{{contact.phone}}</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </transition>

        <main>
            <section id="main" class="first py-32 pt-48 relative px-4">
                <div
                    class="dots_back w-10/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/4"></div>
                <div
                    class="max-w-screen-xl lg:items-center mx-auto flex flex-col lg:flex-row ll:justify-between space-y-9 lg:space-y-0 z-10 relative">
                    <div class="lg:w-6/12 xl:w-5/12 text-center lg:text-left w-full md:w-9/12">
                        <p class="font-bold md:text-5xl lg:text-6xl text-4xl mb-5 leading-tight">Тонирование <br> и оклейка авто</p>
                        <p class="leading-6 text-sm md:text-base mb-10">Качественное тонирование и оклеивание вашего
                            автомобиля <!--<br>--> нашими специалистами.
                            Высококачественные пленки от <!--<br>--> проверенных поставщиков с гарантией выполненной
                            работы 3 <!--<br>--> года.
                            Записывайтесь и получайте <span class="font-bold text-indigo-600">скидку 5%</span>.</p>
                        <form @submit.prevent="submitForm" class="flex flex-col md:flex-row items-center bg-white py-3 px-3 rounded-xl md:space-x-4 md:space-y-0 space-y-4">
                            <div class="flex items-center lg:px-5 lg:py-1 py-5" :class="{'border-red-500 border rounded': form.error('name')}">
                                <img src="/assets/icons/person.svg" class="svg fill-current text-gray-700 w-8 h-7" alt="">
                                <div class="relative">
                                    <label for="name" class="hidden">Name</label>
                                    <input id="name" placeholder="Имя" v-model="form.name" class="w-full ml-2 focus:outline-none" type="text">
                                    <p v-if="form.error('name')" class="text-red-500 text-xs absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-full">{{form.error('name') | translateErrors('name', 'имя')}}</p>
                                </div>
                            </div>
                            <div class="flex items-center lg:px-5 lg:py-1 py-5" :class="{'border-red-500 border rounded': form.error('phone')}">
                                <img src="/assets/icons/phone_black.svg" class="svg fill-current text-gray-700 w-8 h-7" alt="">
                                <div class="relative">
                                    <label for="phone" class="hidden">Phone</label>
                                    <input id="phone" placeholder="Номер" v-model="form.phone" class="w-full ml-2 focus:outline-none" type="text">
                                    <p v-if="form.error('phone')" class="text-red-500 text-xs absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-full">{{form.error('phone') | translateErrors('phone', 'номер')}}</p>
                                </div>
                            </div>
                            <button class="bg-svg hover:bg-on-hover transition duration-300 py-3 px-9 mt-4 lg:mt-0 text-white rounded-md">Записаться</button>
                        </form>
                    </div>
                    <div class="lg:w-6/12 w-full">
                        <img src="/assets/images/car.png" class="max-w-full ll:max-w-none" alt="">
                    </div>
                </div>
            </section>

            <section class="second py-32 relative">
                <div
                    class="dots_back w-10/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/4"></div>
                <div class="absolute w-1/2 top-0 left-1/2 transform -translate-x-1/2">
                    <img class="w-full" src="/assets/images/styler.png" alt="">
                </div>
                <div class="max-w-screen-xl px-4 lg:px-0 mx-auto">
                    <p class="text-indigo-600 text-lg mb-3 font-semibold text-center">Почему мы?</p>
                    <p class="font-bold mb-5 lg:text-4xl text-2xl text-center leading-tight">Более 2000 автомобилей было
                        <br> затонированно и оклеено за время работы <br> нашей студии.</p>
                    <div class="flex lg:w-9/12 w-full mx-auto flex-wrap justify-center">
                        <div v-for="(item, i) in advantages" :data-id="i" class="lg:w-4/12 md:w-4/12 sm:w-6/12 w-full text-center py-7 px-6"
                             :key="i">
                            <div
                                class="rounded-2xl bg-secondary border-2 border-white shadow-advantage w-21 h-21 flex items-center mx-auto justify-center">
                                <img class="lazy svg fill-current text-svg" src="" :data-src="'/storage/files/' + item.image" alt="">
                            </div>
                            <p class="mt-6 mb-5 text-lg font-semibold">{{item.title}}</p>
                            <p>{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" class="third py-32">
                <div class="max-w-screen-xl px-4 lg:px-0 mx-auto">
                    <p class="text-indigo-600 text-lg mb-3 font-semibold">Услуги</p>
                    <p class="font-bold mb-5 lg:text-4xl text-2xl leading-tight">Каталог наших услуг</p>
                    <transition duration="200" name="fade">
                        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4" v-if="!activeTab">
                            <div class="w-full group my-6 cursor-pointer" v-for="(item, i) in services" :key="i"
                                 @click="activeService(item)">
                                <p class="font-semibold group-hover:text-on-hover transition duration-300 text-lg text-gray-800">{{ item.title }}</p>
                                <p class="text-sm text-gray-600 italic">{{ item.description }}</p>
                                <img class="mt-4 lazy rounded-2xl" src="" :data-src="'/storage/large/' + item.image" alt="">
                            </div>
                        </div>

                        <!--                        <custom-tabs :services="services" :tables="computedTables" ></custom-tabs>-->
                        <div v-else class="custom-tabs-component lg:flex-row flex-col">
                            <ul class="custom-tabs-component-tabs lg:w-3/12 pr-4 w-full divide-y divide-gray-200">
                                <li v-for="service in services" :key="service.id" class="custom-tabs-component-tab"
                                    :class="{active: service.activeTab}">
                                    <p @click="activeService(service)">{{service.title}}</p>
                                    <span class="italic hover:line-through cursor-pointer text-description" v-if="service.full_description" @click="showFullDescription(service)">{{service.description}}</span>
                                    <transition name="fade" duration="200">
                                        <ul v-show="service.activeTab" class="mt-4">
                                            <li v-for="table in tables.filter(item => item.service_id === service.id)"
                                                :class="{'is-active': table.active}" class="flex py-1-5 group" :key="table.id">
                                                <span class="hidden group-hover:flex">—&nbsp;</span>
                                                <p class="group-hover:text-indigo-500" @click="showPanel(table)">{{table.title}}</p>
                                            </li>
                                        </ul>
                                    </transition>
                                </li>
                            </ul>

                            <vs-dialog overflow-hidden full-screen v-model="activeDescription">
                                <div class="py-16 px-32">
                                    <p class="font-bold text-4xl mb-10">{{computedService.title}}</p>
                                    <div v-html="computedService.full_description"></div>
                                </div>
                            </vs-dialog>
                            <div class="custom-tabs-component-panels bg-white p-3 rounded-2xl lg:w-9/12 w-full justify-end">
                                <div class="custom-tabs-component-panel" aria-hidden="true" role="tabpanel"
                                     v-for="table in tables" :key="table.id" v-show="table.active">
                                    <vs-table class="custom">
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
                                                    <div class="flex">
                                                        <div class="w-2/3">
                                                            {{table.headings[j].values[i].value}}
                                                        </div>

                                                        <vs-tooltip circle class="group" v-if="table.headings[j].values[i].description">
                                                            <i class='bx bxs-info-circle bx-xs text-non-active group-hover:text-svg' ></i>
                                                            <template #tooltip>
                                                                {{table.headings[j].values[i].description}}
                                                            </template>
                                                        </vs-tooltip>
                                                    </div>
                                                </vs-td>
                                            </vs-tr>
                                        </template>
                                    </vs-table>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </section>

            <section id="materials" class="fourth py-32">
                <div class="max-w-screen-xl px-4 lg:px-0 mx-auto">
                    <p class="text-indigo-600 text-lg mb-3 font-semibold">Материалы</p>
                    <p class="font-bold mb-5 lg:text-4xl text-2xl leading-tight">Характеристики используемых брендов</p>

                    <div class="py-5 justify-between" v-for="materialCategory in materialCategories"
                         :key="materialCategory.id">
                        <div class="w-full mb-7">
                            <p class="text-xl font-bold">{{materialCategory.title}}</p>
                        </div>
                        <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
                            <div class="w-full mb-4" v-for="material in materialCategory.materials"
                                 :key="material.id">
                                <div class="bg-white rounded-3xl py-5 px-6">
                                    <img class="h-12 object-cover lazy" src="" :data-src="'/storage/small/'+material.image"
                                         alt="">
                                    <div class="mt-4 text-sm leading-loose divide-y divide-gray-200 lg:divide-y-0">
                                        <div class="flex flex-col lg:flex-row justify-between"
                                             v-for="property in material.properties" :key="property.id">
                                            <p>{{property.title}}:</p>
                                            <p class="font-medium">{{property.value}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="work" class="fifth py-32">
                <div class="max-w-screen-xl px-4 lg:px-0 mx-auto">
                    <p class="text-indigo-600 text-lg mb-3 font-semibold">Наши работы</p>
                    <div class="flex flex-col lg:flex-row lg:items-end justify-between">
                        <p class="font-bold mb-5 text-4xl text-2xl leading-tight">Фотографии работ</p>
                        <div class="block catogories_slide justify-center relative mb-5 lg:w-5/12 w-full">
                            <splide :options="slideOptions" :slides="galleryCategories">
                                <splide-slide class="group" v-for="category in galleryCategories" :key="category.id">
                                    <span class="text-xs group-hover:text-indigo-600 text-non-active absolute -top-1 -right-2" :class="{'active': category.active}">{{category.galleries_count}}</span>
                                    <p class="cursor-pointer group-hover:text-on-hover text-non-active transition duration-300 py-1" :class="{'active font-bold': category.active}"
                                       @click.stop="galleryCategoriesActive(category)">{{category.title}}</p>
                                </splide-slide>
                            </splide>
                        </div>

                    </div>

                    <cool-light-box
                        :items="filteredCoolImages"
                        :index="coolIndex"
                        :effect="'fade'"
                        @close="coolIndex = null"
                    ></cool-light-box>

                    <div class="hidden lg:grid grid-cols-3 mt-5 grid-rows-2 gap-8 h-80">
                        <div :class="{'row-span-2': i===0 || i===1, 'row-span-1': i===3 || i===4, 'relative': true}"
                             v-for="(gallery, i) in filteredImages.slice(0, 4)" :key="gallery.id">
                            <div v-if="i===3 || filteredImages.slice(0, 4).length - 1 === i"
                                 class="h-full w-full absolute rounded-2xl bg-gray-100 opacity-75"></div>
                            <div v-if="i===3 || filteredImages.slice(0, 4).length - 1 === i"
                                 class="h-full w-full absolute rounded-2xl backdrop-blur-3"></div>
                            <button v-if="i===3 || filteredImages.slice(0, 4).length - 1 === i"
                                    @click="coolIndex = i"
                                    class="border border-indigo-100 text-gray-600 text-sm bg-gray-200 hover:bg-indigo-400 hover:text-white transition duration-300 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-5">
                                Смотреть все
                            </button>
                            <img class="w-full h-full object-cover rounded-2xl lazy cursor-pointer hover:shadow-xl hover:-translate-y-2 transition duration-300" :class="{transform: i!==3}" @click="coolIndex = i" src=""
                                 :data-src="'/storage/medium/'+gallery.image" alt="">
                        </div>
                    </div>
                    <div class="lg:hidden mt-5">
                        <splide :options="imageSlideOptions" :slides="filteredImages.slice(0, 5)">
                            <splide-slide v-for="(image, i) in filteredImages.slice(0, 5)" :key="image.id" @click.native="coolIndex = i" class="rounded-2xl">
                                <div v-if="i===4 || filteredImages.slice(0, 5).length - 1 === i"
                                     class="h-full w-full absolute rounded-2xl bg-gray-100 opacity-75"></div>
                                <div v-if="i===4 || filteredImages.slice(0, 5).length - 1 === i"
                                     class="h-full w-full absolute rounded-2xl backdrop-blur-3"></div>
                                <button v-if="i===4 || filteredImages.slice(0, 5).length - 1 === i"
                                        @click="coolIndex = i"
                                        class="border border-indigo-100 text-gray-600 text-sm bg-gray-200 hover:bg-indigo-400 hover:text-white transition duration-300 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-5">
                                    Смотреть все
                                </button>
                                <img class="cursor-pointer hover:shadow-xl hover:-translate-y-2 transition duration-300" :class="{transform: i!==4}" @click="clickedImage(i)" :src="'/storage/small/'+image.image" alt="">
                            </splide-slide>
                        </splide>
                    </div>
                </div>
            </section>

            <section id="contacts" class="sixth bg-white lg:bg-transparent py-32 relative">
                <div class="max-w-screen-xl px-4 lg:px-0 mx-auto bg-transparent z-10 relative">
                    <p class="text-indigo-600 text-lg mb-3 font-semibold">Контакты</p>
                    <p class="font-bold mb-5 lg:text-4xl text-2xl leading-tight">Как нас найти?</p>

                    <div class="flex flex-col space-y-5 py-5">
                        <a href="#contacts" v-if="contact.address" class="flex items-center group">
                            <img class="mr-1 svg fill-current text-svg group-hover:text-on-hover transition duration-400" src="/assets/icons/map.svg" alt="">
                            <p>{{contact.address}}</p>
                        </a>
                        <a :href="'mailto:'+contact.email" v-if="contact.email" class="flex items-center group">
                            <img class="mr-1 svg fill-current text-svg group-hover:text-on-hover transition duration-400" src="/assets/icons/mail.svg" alt="">
                            <p>{{contact.email}}</p>
                        </a>
                        <a :href="'tel:'+contact.phone" v-if="contact.phone" class="flex items-center group">
                            <img class="mr-1 svg fill-current text-svg group-hover:text-on-hover transition duration-400" src="/assets/icons/phone.svg" alt="">
                            <p>{{contact.phone}}</p>
                        </a>
                    </div>

                    <div class="flex space-x-5 py-5">
                        <a :href="contact.instagram" class="group" target="_blank" rel="noreferrer" v-if="contact.instagram">
                            <img class="lg:w-9 w-6 cursor-pointer svg fill-current text-svg group-hover:text-on-hover transition duration-400" src="/assets/icons/instagram.svg" alt="">
                        </a>
                        <a :href="contact.whatsapp" class="group" v-if="contact.whatsapp" target="_blank" rel="noreferrer">
                            <img class="lg:w-9 w-6 cursor-pointer svg fill-current text-svg group-hover:text-on-hover transition duration-400" src="/assets/icons/whatsapp.svg" alt="">
                        </a>
                    </div>
                </div>
                <div class="flex lg:absolute top-0 min-w-full">
                    <div class="lg:w-5/12 w-full bg-white lg:block hidden lg:absolute h-202">
                    </div>
                    <div class="lg:w-8/12 z-10 w-full lg:map-shadow lg:absolute right-0 top-7">
                        <iframe title="yandex_map" src="" class="lg:h-202 h-72" width="100%" frameborder="1" allowfullscreen="true"
                                style="position:relative;"></iframe>
                    </div>
                </div>

            </section>

            <footer class="pb-12 pt-24">
                <div class="max-w-screen-xl flex lg:block justify-between items-center px-4 lg:px-4 mx-auto">
                    <div class="flex  items-center lg:mb-5">
                        <div class="lg:mr-9">
                            <a href="#main" class="text-logo uppercase">
                                Car style
                            </a>
                        </div>

                        <ul class="menu lg:space-x-9 hidden lg:flex">
                            <li class="hover:text-on-hover transition duration-300">
                                <a href="#services">Услуги</a>
                            </li>
                            <li class="hover:text-on-hover transition duration-300">
                                <a href="#materials">Материалы</a>
                            </li>
                            <li class="hover:text-on-hover transition duration-300">
                                <a href="#work">Наши работы</a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col lg:flex-row items-center justify-between">
                        <div class="flex lg:space-x-9">
                            <a :href="contact.instagram" class=" hidden lg:block group">
                                <img src="/assets/icons/instagram.svg" class="svg fill-current text-svg group-hover:text-on-hover transition duration-400" alt="">
                            </a>
                            <a :href="contact.whatsapp" class=" hidden lg:block group">
                                <img src="/assets/icons/whatsapp.svg" class="svg fill-current text-svg group-hover:text-on-hover transition duration-400" alt="">
                            </a>
                            <a :href="'tel:'+contact.phone" class="flex items-center space-x-1 group">
                                <img src="/assets/icons/phone.svg" class="svg fill-current text-svg group-hover:text-on-hover transition duration-400" alt="">
                                <p>{{contact.phone}}</p>
                            </a>
                            <a href="#contacts" class=" space-x-1 hidden lg:flex items-center group">
                                <img src="/assets/icons/map.svg" class="svg fill-current text-svg group-hover:text-on-hover transition duration-400" alt="">
                                <p>{{contact.address}}</p>
                            </a>
                            <a :href="'mailto:'+contact.address" class=" space-x-1 hidden lg:flex items-center group">
                                <img src="/assets/icons/mail.svg" class="svg fill-current text-svg group-hover:text-on-hover transition duration-400" alt="">
                                <p>{{contact.email}}</p>
                            </a>
                        </div>
                        <p class="hidden xl:block lg:text-sm text-xs text-center text-gray-500">Все права защищены —
                            2020 © CAR STYLE</p>
                    </div>
                </div>
                <p class="lg:text-sm mt-4 xl:hidden text-xs text-center text-gray-500">Все права защищены — 2020 © CAR
                    STYLE</p>
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
                form: this.$inertia.form({
                    name: '',
                    phone: '',
                }, {
                    bag: 'default',
                    resetOnSuccess: true,
                }),
                slideOptions: {
                    // type: 'loop',
                    rewind: true,
                    arrows: 'slider',
                    perPage: 3,
                    perMove: 1,
                    autoWidth: true,
                    gap: 40,
                    pagination: false,
                    width: '90%',
                    padding: {
                        left: '1rem',
                        right: '1rem',
                    },
                    breakpoints: {
                        1024: {
                            arrows: false,
                            width: '100%',
                        }
                    }
                },
                imageSlideOptions: {
                    // type: 'loop',
                    rewind: true,
                    arrows: 'slider',
                    perPage: 1,
                    fixedHeight: '182px',
                    gap: 10,
                    cover: true,
                    perMove: 1,
                    pagination: false,
                    width: '90%',
                    padding: {
                        left: '1rem',
                        right: '1rem',
                    },
                    breakpoints: {
                        1024: {
                            arrows: false,
                            width: '100%',
                        }
                    }
                },
                advantages: this.$page.advantages,
                services: this.$page.services,
                materialCategories: this.$page.materialCategories,
                tables: this.$page.tables,
                menuActive: false,
                galleries: this.$page.galleries,
                galleryCategories: this.$page.galleryCategories,
                contact: this.$page.contact,
                dialogActive: false,
                coolIndex: null,
                activeDescription: false,
                computedService: {},
            }
        },
        computed: {
            activeTab() {
                let service = this.services.find(item => item.activeTab === true);
                return service ? service.activeTab : false;
            },
            filteredImages() {
                return this.galleries.filter(item => {
                    if (this.galleryCategories.filter(cat => cat.active ?? cat)[0].id === 0) {
                        return item;
                    }
                    if (item.gallery_category_id === this.galleryCategories.filter(cat => cat.active ?? cat)[0].id) {
                        return item;
                    }
                });
            },
            filteredCoolImages() {
                return this.filteredImages.map(item => {
                    return {
                        src: '/storage/large/'+item.image,
                    };
                })
            },
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
            },
            galleryCategoriesActive(category) {
                this.galleryCategories = this.galleryCategories.map(cat => {
                    cat.active = false
                    return cat;
                });
                category.active = true;
                this.lazyLoad();
                window.scrollBy(0, 10);
            },

            lazyLoad(active) {
                let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

                if (active === false) {
                    active = true;

                    setTimeout(function () {

                        lazyImages.forEach(function (lazyImage) {
                            if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0)) {
                                lazyImage.src = lazyImage.dataset.src;
                                lazyImage.classList.remove("lazy");

                                lazyImages = lazyImages.filter(function (image) {
                                    return image !== lazyImage;
                                });

                                if (lazyImages.length === 0) {
                                    // document.removeEventListener("scroll", lazyLoad);
                                    // window.removeEventListener("resize", lazyLoad);
                                    // window.removeEventListener("orientationchange", lazyLoad);
                                }
                            }
                        });

                        active = false;
                    }, 200);
                }
            },
            replaceSvg() {
                document.querySelectorAll('img.svg').forEach(item => {
                    const imgUrl = item.src;
                    const classes = item.getAttribute('class');
                    const id = item.getAttribute('id');
                    if (imgUrl !== null || imgUrl !== '' || imgUrl !== undefined) {
                        if (this.route().ziggy.baseUrl !== imgUrl) {
                            window.axios.get(imgUrl)
                                .then(data => {
                                    const span = document.createElement('span');
                                    span.innerHTML = data.data;
                                    const svg = span.firstChild;
                                    svg.setAttribute('class', classes);
                                    svg.setAttribute('id', id);
                                    item.parentNode.replaceChild(svg, item);
                                })
                                .catch(error => {
                                })
                        }
                    }
                });
            },
            openMenu() {
                document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
                this.menuActive = true;
            },
            closeMenu() {
                document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
                this.menuActive = false;
            },
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
            },
            submitForm() {
                this.$inertia.post(this.route('bids.store'), this.form, {
                    preserveScroll: true,
                    onSuccess: (data) => {
                        if (this.$page.form_post && this.$page.form_post.status) {
                            this.form.reset();
                            this.dialogActive = true;
                        }
                    }
                })
            },
            clickedImage(i) {
                console.log(i);
            },
            showFullDescription(service) {
                this.activeDescription = true;
                this.computedService = service;
            }
        },
        filters: {
            translateErrors(value, type, translate) {
                return value.replace(type, translate);
            }
        },
        mounted() {
            if (window.innerWidth > 1024) {
                this.menuActive = true;
            }

            let last_known_scroll_position = 0;
            let contactsTop = 0;
            let contact = this.contact;

            let prevScroll = window.scrollY || document.scrollTop;
            let curScroll;
            let direction = 0;
            let prevDirection = 0;

            let header = document.getElementsByClassName('site-header');

            let checkScroll = function() {

                /*
                ** Find the direction of scroll
                ** 0 - initial, 1 - up, 2 - down
                */

                curScroll = window.scrollY || document.scrollTop;
                if (curScroll > prevScroll) {
                    //scrolled up
                    direction = 2;
                }
                else if (curScroll < prevScroll) {
                    //scrolled down
                    direction = 1;
                }

                if (direction !== prevDirection) {
                    toggleHeader(direction, curScroll);
                }

                prevScroll = curScroll;
            };

            let toggleHeader = function(direction, curScroll) {
                if (direction === 2 && curScroll > 52) {

                    //replace 52 with the height of your header in px

                    header[0].classList.add('hide');
                    header[1].classList.add('hide');
                    prevDirection = direction;
                }
                else if (direction === 1) {
                    header[0].classList.remove('hide');
                    header[1].classList.remove('hide');
                    prevDirection = direction;
                }
            };

            window.addEventListener('scroll', checkScroll);

            let isSet = false;
            window.addEventListener('scroll', function (e) {
                last_known_scroll_position = window.scrollY;
                contactsTop = document.getElementById('contacts').offsetTop;
                if (last_known_scroll_position > contactsTop - 500) {
                    if (!isSet) {
                        document.getElementsByTagName('iframe')[0].setAttribute('src', contact.yandex);
                        isSet = true;
                    }
                }

                document.getElementsByTagName('nav')[0].classList.toggle('xl:bg-white', last_known_scroll_position > document.getElementsByTagName('nav')[0].offsetHeight);
            });

            let active = false;

            document.addEventListener("scroll", () => {
                this.lazyLoad(active);
                this.replaceSvg();
            });
            window.addEventListener("resize", () => {
                this.lazyLoad(active);
                this.replaceSvg();
                document.getElementsByTagName('nav')[0].classList.toggle('bg-white', window.innerWidth <= 1280);
            });
            window.addEventListener("orientationchange", () => {
                this.lazyLoad(active);
                this.replaceSvg();
            });

            const closeMenu = () => this.closeMenu();
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    if (window.innerWidth < 1280) {
                        setTimeout(function() {
                            closeMenu();
                        }, 600);
                    }
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            document.getElementsByTagName('nav')[0].classList.toggle('bg-white', window.innerWidth <= 1280);

            this.replaceSvg();
        },
    }
</script>

<style scoped>

</style>
