(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{GI42:function(e,t,r){"use strict";r.r(t);var o=r("hAWA"),s=r("biP3"),a=r("FoS3"),i=r("FQHZ"),n=r.n(i),l=(r("TtPJ"),r("V8i/"),r("LPyF")),c=r.n(l),p=n()(c.a),d={components:{AppLayout:o.a,BackTo:s.a,FilePond:p,AdminComponentDiv:a.a},data:function(){return{form:this.$inertia.form({title:"",image:"",description:""},{bag:"default",resetOnSuccess:!0})}},methods:{create:function(){this.form.post(this.route("advantages.store"))},processFile:function(e){this.form.image=JSON.parse(this.$refs.pond.getFile().serverId).filename}}},m=r("KHd+"),f=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app-layout",[r("div",{staticClass:"container mx-auto py-16"},[r("div",{staticClass:"mb-5"},[r("back-to",{attrs:{href:e.route("advantages.index"),title:"Назад"}})],1),e._v(" "),r("admin-component-div",{staticClass:"py-8 flex"},[r("form",{staticClass:"space-y-6 w-3/12 px-4 py-7 conform",on:{submit:function(t){return t.preventDefault(),e.create(t)}}},[r("vs-input",{attrs:{"label-placeholder":"Название",primary:""},scopedSlots:e._u([e.form.error("title")?{key:"message-danger",fn:function(){return[e._v("\n                        "+e._s(e.form.error("title"))+"\n                    ")]},proxy:!0}:null],null,!0),model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}}),e._v(" "),r("div",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.description,expression:"form.description"}],staticClass:"border p-2 w-full rounded",attrs:{placeholder:"Описание",rows:"4"},domProps:{value:e.form.description},on:{input:function(t){t.target.composing||e.$set(e.form,"description",t.target.value)}}}),e._v(" "),e.form.error("description")?r("p",{staticClass:"text-red-500 text-xs"},[e._v(e._s(e.form.error("description")))]):e._e()]),e._v(" "),r("div",[r("file-pond",{ref:"pond",attrs:{name:"test","label-idle":"Drop files here...",server:e.route("images.post-image",{dir:"advantages",prefix:"advantage"}).url()},on:{processfile:function(t){return e.processFile(t)}}}),e._v(" "),e.form.error("image")?r("p",{staticClass:"text-xs px-1 -mt-4 text-red-500"},[e._v("\n                        "+e._s(e.form.error("image"))+"\n                    ")]):e._e()],1),e._v(" "),r("vs-button",{attrs:{gradient:"",block:"",success:""}},[e._v("\n                    Создать")])],1)])],1)])}),[],!1,null,"676db8db",null);t.default=f.exports}}]);