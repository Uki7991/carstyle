(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{FoS3:function(e,t,r){"use strict";var s={},a=r("KHd+"),i=Object(a.a)(s,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"rounded-2xl w-full bg-white py-6 px-4"},[this._t("default")],2)}),[],!1,null,"5a5e7338",null);t.a=i.exports},OrRN:function(e,t,r){"use strict";r.r(t);var s=r("hAWA"),a=r("biP3"),i=r("FoS3"),l=r("jl8+"),o=r.n(l),n=r("FQHZ"),c=r.n(n),u=(r("TtPJ"),r("V8i/"),r("5gfu"),r("LPyF")),f=r.n(u),p=c()(f.a),m={components:{AppLayout:s.a,BackTo:a.a,FilePond:p,AdminComponentDiv:i.a,MultiSelect:o.a},data:function(){return{values:this.$page.categories,form:this.$inertia.form({images:[],gallery_category:""},{bag:"default",resetOnSuccess:!0})}},methods:{create:function(){this.form.post(this.route("galleries.store"))},processFiles:function(){this.form.images=this.$refs.pond.getFiles().map((function(e){return{image:JSON.parse(e.serverId).filename}}))},processFile:function(){this.form.images.push({image:JSON.parse(this.$refs.pond.getFile().serverId).filename})},addTag:function(e){e={title:e},this.values.push(e),this.form.gallery_category=e},selecting:function(e,t){this.form.gallery_category=e.title}}},g=r("KHd+"),d=Object(g.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app-layout",[r("div",{staticClass:"container mx-auto py-16"},[r("div",{staticClass:"mb-5"},[r("back-to",{attrs:{href:e.route("galleries.index"),title:"Назад"}})],1),e._v(" "),r("admin-component-div",[r("form",{staticClass:"space-y-6 w-3/12 px-4 py-7 conform",on:{submit:function(t){return t.preventDefault(),e.create(t)}}},[r("multi-select",{attrs:{"tag-placeholder":"Добавить новую категорию картинок",placeholder:"Поиск категорий картинок",options:e.values,multiple:!1,taggable:!0,label:"title",value:"title"},on:{tag:e.addTag,select:e.selecting},model:{value:e.form.gallery_category,callback:function(t){e.$set(e.form,"gallery_category",t)},expression:"form.gallery_category"}}),e._v(" "),r("div",[r("h2",[e._v("Можно выбрать несколько картинок")]),e._v(" "),r("file-pond",{ref:"pond",attrs:{name:"test","allow-multiple":"true","label-idle":"Drop files here...",server:e.route("images.post-image",{dir:"galleries",prefix:"gallery"}).url()},on:{processfiles:e.processFiles,processfile:e.processFile}}),e._v(" "),e.form.error("image")?r("p",{staticClass:"text-xs px-1 -mt-4 text-red-500"},[e._v("\n                        "+e._s(e.form.error("image"))+"\n                    ")]):e._e()],1),e._v(" "),r("vs-button",{attrs:{gradient:"",block:"",success:""}},[e._v("\n                    Создать")])],1)])],1)])}),[],!1,null,"648049fb",null);t.default=d.exports},biP3:function(e,t,r){"use strict";var s={props:["href","title"]},a=r("KHd+"),i=Object(a.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"group cursor-pointer",on:{click:function(t){return e.link(e.href)}}},[r("i",{staticClass:"bx bx-left-arrow-alt transform group-hover:-translate-x-2 transition ease-out duration-300"}),e._v(" "+e._s(e.title))])}),[],!1,null,"7d80c7fd",null);t.a=i.exports}}]);