(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7f1e":function(t,e,s){"use strict";var n={props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close:function(){this.closeable&&this.$emit("close")}},watch:{show:{immediate:!0,handler:function(t){document.body.style.overflow=t?"hidden":null}}},created:function(){var t=this,e=function(e){"Escape"===e.key&&t.show&&t.close()};document.addEventListener("keydown",e),this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",e)}))},computed:{maxWidthClass:function(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[this.maxWidth]}}},o=s("KHd+"),a=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("portal",{attrs:{to:"modal"}},[e("transition",{attrs:{"leave-active-class":"duration-200"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"fixed top-0 inset-x-0 px-4 pt-6 sm:px-0 sm:flex sm:items-top sm:justify-center"},[e("transition",{attrs:{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"fixed inset-0 transform transition-all",on:{click:this.close}},[e("div",{staticClass:"absolute inset-0 bg-gray-500 opacity-75"})])]),this._v(" "),e("transition",{attrs:{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full",class:this.maxWidthClass},[this._t("default")],2)])],1)])],1)}),[],!1,null,null,null);e.a=a.exports},F9sF:function(t,e,s){"use strict";var n={props:["message"]},o=s("KHd+"),a=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.message,expression:"message"}]},[e("p",{staticClass:"text-sm text-red-600"},[this._v("\n        "+this._s(this.message)+"\n    ")])])}),[],!1,null,null,null);e.a=a.exports},"H+jo":function(t,e,s){"use strict";s.r(e);var n=s("oPAw"),o=s("V2YS"),a=s("mG0w"),i=s("HEq2"),r=s("F9sF"),l=s("KLIG"),c={components:{JetActionSection:n.a,JetDangerButton:a.a,JetDialogModal:o.a,JetInput:i.a,JetInputError:r.a,JetSecondaryButton:l.a},data:function(){return{confirmingUserDeletion:!1,deleting:!1,form:this.$inertia.form({_method:"DELETE",password:""},{bag:"deleteUser"})}},methods:{confirmUserDeletion:function(){var t=this;this.form.password="",this.confirmingUserDeletion=!0,setTimeout((function(){t.$refs.password.focus()}),250)},deleteUser:function(){var t=this;this.form.post(route("current-user.destroy"),{preserveScroll:!0}).then((function(e){t.form.hasErrors()||(t.confirmingUserDeletion=!1)}))}}},u=s("KHd+"),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("jet-action-section",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Delete Account\n    ")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n        Permanently delete your account.\n    ")]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"max-w-xl text-sm text-gray-600"},[t._v("\n            Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.\n        ")]),t._v(" "),s("div",{staticClass:"mt-5"},[s("jet-danger-button",{nativeOn:{click:function(e){return t.confirmUserDeletion(e)}}},[t._v("\n                Delete Account\n            ")])],1),t._v(" "),s("jet-dialog-modal",{attrs:{show:t.confirmingUserDeletion},on:{close:function(e){t.confirmingUserDeletion=!1}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n                Delete Account\n            ")]},proxy:!0},{key:"content",fn:function(){return[t._v("\n                Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.\n\n                "),s("div",{staticClass:"mt-4"},[s("jet-input",{ref:"password",staticClass:"mt-1 block w-3/4",attrs:{type:"password",placeholder:"Password"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.deleteUser(e)}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),s("jet-input-error",{staticClass:"mt-2",attrs:{message:t.form.error("password")}})],1)]},proxy:!0},{key:"footer",fn:function(){return[s("jet-secondary-button",{nativeOn:{click:function(e){t.confirmingUserDeletion=!1}}},[t._v("\n                    Nevermind\n                ")]),t._v(" "),s("jet-danger-button",{staticClass:"ml-2",class:{"opacity-25":t.form.processing},attrs:{disabled:t.form.processing},nativeOn:{click:function(e){return t.deleteUser(e)}}},[t._v("\n                    Delete Account\n                ")])]},proxy:!0}])})]},proxy:!0}])})}),[],!1,null,null,null);e.default=d.exports},HEq2:function(t,e,s){"use strict";var n={props:["value"],methods:{focus:function(){this.$refs.input.focus()}}},o=s("KHd+"),a=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",staticClass:"form-input rounded-md shadow-sm",domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})}),[],!1,null,null,null);e.a=a.exports},KLIG:function(t,e,s){"use strict";var n={props:{type:{type:String,default:"button"}}},o=s("KHd+"),a=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150",attrs:{type:this.type}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},V2YS:function(t,e,s){"use strict";var n={components:{Modal:s("7f1e").a},props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close:function(){this.$emit("close")}}},o=s("KHd+"),a=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("modal",{attrs:{show:t.show,"max-width":t.maxWidth,closeable:t.closeable},on:{close:t.close}},[s("div",{staticClass:"px-6 py-4"},[s("div",{staticClass:"text-lg"},[t._t("title")],2),t._v(" "),s("div",{staticClass:"mt-4"},[t._t("content")],2)]),t._v(" "),s("div",{staticClass:"px-6 py-4 bg-gray-100 text-right"},[t._t("footer")],2)])}),[],!1,null,null,null);e.a=a.exports},mG0w:function(t,e,s){"use strict";var n={props:{type:{type:String,default:"button"}}},o=s("KHd+"),a=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-600 transition ease-in-out duration-150",attrs:{type:this.type}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},oPAw:function(t,e,s){"use strict";var n={components:{JetSectionTitle:s("xfBN").a}},o=s("KHd+"),a=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"md:grid md:grid-cols-3 md:gap-6"},[s("jet-section-title",{scopedSlots:t._u([{key:"title",fn:function(){return[t._t("title")]},proxy:!0},{key:"description",fn:function(){return[t._t("description")]},proxy:!0}],null,!0)}),t._v(" "),s("div",{staticClass:"mt-5 md:mt-0 md:col-span-2"},[s("div",{staticClass:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"},[t._t("content")],2)])],1)}),[],!1,null,null,null);e.a=a.exports},xfBN:function(t,e,s){"use strict";var n=s("KHd+"),o=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:col-span-1"},[e("div",{staticClass:"px-4 sm:px-0"},[e("h3",{staticClass:"text-lg font-medium text-gray-900"},[this._t("title")],2),this._v(" "),e("p",{staticClass:"mt-1 text-sm text-gray-600"},[this._t("description")],2)])])}),[],!1,null,null,null);e.a=o.exports}}]);