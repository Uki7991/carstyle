(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{FoS3:function(e,t,r){"use strict";var s={},a=r("KHd+"),i=Object(a.a)(s,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"rounded-2xl w-full bg-white py-6 px-4"},[this._t("default")],2)}),[],!1,null,"5a5e7338",null);t.a=i.exports},biP3:function(e,t,r){"use strict";var s={props:["href","title"]},a=r("KHd+"),i=Object(a.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"group cursor-pointer",on:{click:function(t){return e.link(e.href)}}},[r("i",{staticClass:"bx bx-left-arrow-alt transform group-hover:-translate-x-2 transition ease-out duration-300"}),e._v(" "+e._s(e.title))])}),[],!1,null,"7d80c7fd",null);t.a=i.exports},qW1g:function(e,t,r){"use strict";r.r(t);var s=r("hAWA"),a=r("biP3"),i=r("FoS3"),o=r("FQHZ"),l=r.n(o),n=(r("TtPJ"),r("V8i/"),r("5gfu"),r("LPyF")),c=r.n(n),p=r("jl8+"),u=r.n(p),f=l()(c.a),m={components:{AppLayout:s.a,BackTo:a.a,FilePond:f,AdminComponentDiv:i.a,MultiSelect:u.a},data:function(){return{values:this.$page.categories,form:this.$inertia.form({title:"",image:"",category:"",properties:[]},{bag:"default",resetOnSuccess:!0})}},methods:{create:function(){this.form.post(this.route("materials.store"))},processFile:function(e){this.form.image=JSON.parse(this.$refs.pond.getFile().serverId).filename},addProperty:function(){this.form.properties.push({title:"",value:""})},removeProperty:function(e){this.form.properties.splice(e,1)},addTag:function(e){e={title:e},this.values.push(e),this.form.category=e},selecting:function(e,t){this.form.category=e.title}}},v=r("KHd+"),d=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app-layout",[r("div",{staticClass:"container mx-auto py-16"},[r("div",{staticClass:"mb-5"},[r("back-to",{attrs:{href:e.route("materials.index"),title:"Назад"}})],1),e._v(" "),r("admin-component-div",{staticClass:"py-8 flex"},[r("form",{staticClass:"space-y-6 w-3/12 px-4 py-7 conform",on:{submit:function(t){return t.preventDefault(),e.create(t)}}},[r("div",[r("multi-select",{attrs:{"tag-placeholder":"Добавить новую категорию материала",placeholder:"Поиск категорий материала",options:e.values,multiple:!1,taggable:!0,label:"title",value:"title"},on:{tag:e.addTag,select:e.selecting},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}}),e._v(" "),e.form.error("category")?r("p",{staticClass:"text-xs text-red-500"},[e._v(e._s(e.form.error("category")))]):e._e()],1),e._v(" "),r("vs-input",{attrs:{"label-placeholder":"Название",primary:""},scopedSlots:e._u([e.form.error("title")?{key:"message-danger",fn:function(){return[e._v("\n                        "+e._s(e.form.error("title"))+"\n                    ")]},proxy:!0}:null],null,!0),model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}}),e._v(" "),r("div",[r("file-pond",{ref:"pond",attrs:{name:"test","label-idle":"Drop files here...",server:e.route("images.post-image",{dir:"materials",prefix:"material"}).url()},on:{processfile:function(t){return e.processFile(t)}}}),e._v(" "),e.form.error("image")?r("p",{staticClass:"text-xs px-1 -mt-4 text-red-500"},[e._v("\n                        "+e._s(e.form.error("image"))+"\n                    ")]):e._e()],1),e._v(" "),r("vs-button",{attrs:{gradient:"",block:"",success:""}},[e._v("\n                    Создать")])],1),e._v(" "),r("div",{staticClass:"flex flex-col justify-center items-center flex-grow space-y-7"},[r("h2",[e._v("Свойства материала:")]),e._v(" "),e._l(e.form.properties,(function(t,s){return r("div",{key:s,staticClass:"flex items-center"},[r("div",[r("vs-input",{staticClass:"mx-4",attrs:{"label-placeholder":"Название",primary:""},model:{value:t.title,callback:function(r){e.$set(t,"title",r)},expression:"property.title"}}),e._v(" "),e.form.error("properties."+s+".title")?r("p",{staticClass:"text-xs text-red-500"},[e._v(e._s(e.form.error("properties."+s+".title")))]):e._e()],1),e._v("\n                    :\n                    "),r("div",[r("vs-input",{staticClass:"mx-4",attrs:{"label-placeholder":"Значение",primary:""},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"property.value"}}),e._v(" "),e.form.error("properties."+s+".value")?r("p",{staticClass:"text-xs text-red-500"},[e._v(e._s(e.form.error("properties."+s+".value")))]):e._e()],1),e._v(" "),r("vs-button",{attrs:{icon:"",danger:""},on:{click:function(t){return e.removeProperty(s)}}},[r("i",{staticClass:"bx bx-x"})])],1)})),e._v(" "),r("div",{staticClass:"flex flex-col justify-center"},[r("vs-button",{on:{click:e.addProperty}},[r("i",{staticClass:"bx bx-plus"}),e._v(" Добавить\n                    ")]),e._v(" "),e.form.error("properties")?r("p",{staticClass:"text-xs text-red-500"},[e._v(e._s(e.form.error("properties")))]):e._e()],1)],2)])],1)])}),[],!1,null,"61fc9696",null);t.default=d.exports}}]);