(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{FoS3:function(e,t,r){"use strict";var i={},s=r("KHd+"),a=Object(s.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"rounded-2xl w-full bg-white py-6 px-4"},[this._t("default")],2)}),[],!1,null,"5a5e7338",null);t.a=a.exports},biP3:function(e,t,r){"use strict";var i={props:["href","title"]},s=r("KHd+"),a=Object(s.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"group cursor-pointer",on:{click:function(t){return e.link(e.href)}}},[r("i",{staticClass:"bx bx-left-arrow-alt transform group-hover:-translate-x-2 transition ease-out duration-300"}),e._v(" "+e._s(e.title))])}),[],!1,null,"7d80c7fd",null);t.a=a.exports},peLK:function(e,t,r){"use strict";r.r(t);var i=r("hAWA"),s=r("biP3"),a=r("FoS3"),n=r("FQHZ"),l=r.n(n),o=(r("TtPJ"),r("V8i/"),r("LPyF")),c=r.n(o),u=l()(c.a),p={components:{AppLayout:i.a,BackTo:s.a,FilePond:u,AdminComponentDiv:a.a},data:function(){return{file:"/storage/medium/"+this.$page.gallery.image,form:this.$inertia.form({title:this.$page.gallery.title,description:this.$page.gallery.description,image:this.$page.gallery.image},{bag:"default",resetOnSuccess:!0})}},methods:{create:function(){this.form.put(route("galleries.update",[this.$page.gallery.id]))},processFile:function(e){this.form.image=JSON.parse(this.$refs.pond.getFile().serverId).filename}}},f=r("KHd+"),d=Object(f.a)(p,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app-layout",[r("div",{staticClass:"container mx-auto py-16"},[r("div",{staticClass:"mb-5"},[r("back-to",{attrs:{href:e.route("galleries.index"),title:"Назад"}})],1),e._v(" "),r("admin-component-div",{staticClass:"py-12 flex flex-row space-x-5"},[r("form",{staticClass:"space-y-6 w-3/12 conform",on:{submit:function(t){return t.preventDefault(),e.create(t)}}},[r("vs-input",{attrs:{"label-placeholder":"Название",primary:""},scopedSlots:e._u([e.form.error("title")?{key:"message-danger",fn:function(){return[e._v("\n                        "+e._s(e.form.error("title"))+"\n                    ")]},proxy:!0}:null],null,!0),model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}}),e._v(" "),r("vs-input",{attrs:{"label-placeholder":"Описание",primary:""},scopedSlots:e._u([e.form.error("description")?{key:"message-danger",fn:function(){return[e._v("\n                        "+e._s(e.form.error("description"))+"\n                    ")]},proxy:!0}:null],null,!0),model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._v(" "),r("file-pond",{ref:"pond",attrs:{name:"test","label-idle":"Drop files here...",server:e.route("images.post-image",{dir:"galleries",prefix:"gallery"}).url()},on:{processfile:function(t){return e.processFile(t)}}}),e._v(" "),r("vs-button",{attrs:{gradient:"",block:"",success:""}},[e._v("\n                    Обновить\n                ")])],1),e._v(" "),r("div",{staticClass:"w-3/12"},[r("img",{attrs:{src:e.file,alt:""}})])])],1)])}),[],!1,null,"7eabcc56",null);t.default=d.exports}}]);