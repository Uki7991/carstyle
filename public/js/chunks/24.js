(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{BAG1:function(s,e,r){"use strict";r.r(e);var o={data:function(){return{visiblePassword:!1,form:this.$inertia.form({email:"",password:""},{bag:"default",resetOnSuccess:!0})}},methods:{login:function(){this.form.post("/login")}}},t=r("KHd+"),a=Object(t.a)(o,(function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("div",{staticClass:"flex h-screen justify-end bg-cover bg-no-repeat",staticStyle:{"background-image":"url(/assets/images/back.jpg)"}},[r("div",{staticClass:"h-screen bg-white flex items-center justify-center w-3/12"},[r("form",{staticClass:"flex flex-col space-y-6",on:{submit:function(e){return e.preventDefault(),s.login(e)}}},[r("vs-input",{attrs:{"label-placeholder":"Email"},scopedSlots:s._u([s.form.error("email")?{key:"message-danger",fn:function(){return[s._v("\n                    "+s._s(s.form.error("email"))+"\n                ")]},proxy:!0}:null],null,!0),model:{value:s.form.email,callback:function(e){s.$set(s.form,"email",e)},expression:"form.email"}}),s._v(" "),r("vs-input",{attrs:{type:"password","icon-after":"","label-placeholder":"Password",visiblePassword:s.visiblePassword},on:{"click-icon":function(e){s.visiblePassword=!s.visiblePassword}},scopedSlots:s._u([s.form.error("password")?{key:"message-danger",fn:function(){return[s._v("\n                    "+s._s(s.form.error("password"))+"\n                ")]},proxy:!0}:null,{key:"icon",fn:function(){return[s.visiblePassword?r("i",{staticClass:"bx bx-hide"}):r("i",{staticClass:"bx bx-show-alt"})]},proxy:!0}],null,!0),model:{value:s.form.password,callback:function(e){s.$set(s.form,"password",e)},expression:"form.password"}}),s._v(" "),r("vs-button",[s._v("Вход")])],1)])])}),[],!1,null,"2ea06252",null);e.default=a.exports}}]);