(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"D9K+":function(t,e,n){"use strict";function r(t,e){void 0===e&&(e={});for(var n=function(t){for(var e=[],n=0;n<t.length;){var r=t[n];if("*"!==r&&"+"!==r&&"?"!==r)if("\\"!==r)if("{"!==r)if("}"!==r)if(":"!==r)if("("!==r)e.push({type:"CHAR",index:n,value:t[n++]});else{var i=1,s="";if("?"===t[o=n+1])throw new TypeError('Pattern cannot start with "?" at '+o);for(;o<t.length;)if("\\"!==t[o]){if(")"===t[o]){if(0===--i){o++;break}}else if("("===t[o]&&(i++,"?"!==t[o+1]))throw new TypeError("Capturing groups are not allowed at "+o);s+=t[o++]}else s+=t[o++]+t[o++];if(i)throw new TypeError("Unbalanced pattern at "+n);if(!s)throw new TypeError("Missing pattern at "+n);e.push({type:"PATTERN",index:n,value:s}),n=o}else{for(var a="",o=n+1;o<t.length;){var l=t.charCodeAt(o);if(!(l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||95===l))break;a+=t[o++]}if(!a)throw new TypeError("Missing parameter name at "+n);e.push({type:"NAME",index:n,value:a}),n=o}else e.push({type:"CLOSE",index:n,value:t[n++]});else e.push({type:"OPEN",index:n,value:t[n++]});else e.push({type:"ESCAPED_CHAR",index:n++,value:t[n++]});else e.push({type:"MODIFIER",index:n,value:t[n++]})}return e.push({type:"END",index:n,value:""}),e}(t),r=e.prefixes,i=void 0===r?"./":r,s="[^"+a(e.delimiter||"/#?")+"]+?",o=[],l=0,u=0,c="",d=function(t){if(u<n.length&&n[u].type===t)return n[u++].value},f=function(t){var e=d(t);if(void 0!==e)return e;var r=n[u],i=r.type,s=r.index;throw new TypeError("Unexpected "+i+" at "+s+", expected "+t)},p=function(){for(var t,e="";t=d("CHAR")||d("ESCAPED_CHAR");)e+=t;return e};u<n.length;){var v=d("CHAR"),h=d("NAME"),g=d("PATTERN");if(h||g){var m=v||"";-1===i.indexOf(m)&&(c+=m,m=""),c&&(o.push(c),c=""),o.push({name:h||l++,prefix:m,suffix:"",pattern:g||s,modifier:d("MODIFIER")||""})}else{var x=v||d("ESCAPED_CHAR");if(x)c+=x;else if(c&&(o.push(c),c=""),d("OPEN")){m=p();var b=d("NAME")||"",_=d("PATTERN")||"",y=p();f("CLOSE"),o.push({name:b||(_?l++:""),pattern:b&&!_?s:_,prefix:m,suffix:y,modifier:d("MODIFIER")||""})}else f("END")}}return o}function i(t,e){void 0===e&&(e={});var n=o(e),r=e.encode,i=void 0===r?function(t){return t}:r,s=e.validate,a=void 0===s||s,l=t.map((function(t){if("object"==typeof t)return new RegExp("^(?:"+t.pattern+")$",n)}));return function(e){for(var n="",r=0;r<t.length;r++){var s=t[r];if("string"!=typeof s){var o=e?e[s.name]:void 0,u="?"===s.modifier||"*"===s.modifier,c="*"===s.modifier||"+"===s.modifier;if(Array.isArray(o)){if(!c)throw new TypeError('Expected "'+s.name+'" to not repeat, but got an array');if(0===o.length){if(u)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var d=0;d<o.length;d++){var f=i(o[d],s);if(a&&!l[r].test(f))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but got "'+f+'"');n+=s.prefix+f+s.suffix}}else if("string"!=typeof o&&"number"!=typeof o){if(!u){var p=c?"an array":"a string";throw new TypeError('Expected "'+s.name+'" to be '+p)}}else{f=i(String(o),s);if(a&&!l[r].test(f))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+f+'"');n+=s.prefix+f+s.suffix}}else n+=s}return n}}function s(t,e,n){void 0===n&&(n={});var r=n.decode,i=void 0===r?function(t){return t}:r;return function(n){var r=t.exec(n);if(!r)return!1;for(var s=r[0],a=r.index,o=Object.create(null),l=function(t){if(void 0===r[t])return"continue";var n=e[t-1];"*"===n.modifier||"+"===n.modifier?o[n.name]=r[t].split(n.prefix+n.suffix).map((function(t){return i(t,n)})):o[n.name]=i(r[t],n)},u=1;u<r.length;u++)l(u);return{path:s,index:a,params:o}}}function a(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function o(t){return t&&t.sensitive?"":"i"}function l(t,e,n){void 0===n&&(n={});for(var r=n.strict,i=void 0!==r&&r,s=n.start,l=void 0===s||s,u=n.end,c=void 0===u||u,d=n.encode,f=void 0===d?function(t){return t}:d,p="["+a(n.endsWith||"")+"]|$",v="["+a(n.delimiter||"/#?")+"]",h=l?"^":"",g=0,m=t;g<m.length;g++){var x=m[g];if("string"==typeof x)h+=a(f(x));else{var b=a(f(x.prefix)),_=a(f(x.suffix));if(x.pattern)if(e&&e.push(x),b||_)if("+"===x.modifier||"*"===x.modifier){var y="*"===x.modifier?"?":"";h+="(?:"+b+"((?:"+x.pattern+")(?:"+_+b+"(?:"+x.pattern+"))*)"+_+")"+y}else h+="(?:"+b+"("+x.pattern+")"+_+")"+x.modifier;else h+="("+x.pattern+")"+x.modifier;else h+="(?:"+b+_+")"+x.modifier}}if(c)i||(h+=v+"?"),h+=n.endsWith?"(?="+p+")":"$";else{var w=t[t.length-1],k="string"==typeof w?v.indexOf(w[w.length-1])>-1:void 0===w;i||(h+="(?:"+v+"(?="+p+"))?"),k||(h+="(?="+v+"|"+p+")")}return new RegExp(h,o(n))}function u(t,e,n){return t instanceof RegExp?function(t,e){if(!e)return t;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,i=n.exec(t.source);i;)e.push({name:i[1]||r++,prefix:"",suffix:"",modifier:"",pattern:""}),i=n.exec(t.source);return t}(t,e):Array.isArray(t)?function(t,e,n){var r=t.map((function(t){return u(t,e,n).source}));return new RegExp("(?:"+r.join("|")+")",o(n))}(t,e,n):function(t,e,n){return l(r(t,n),e,n)}(t,e,n)}Object.defineProperty(e,"__esModule",{value:!0}),e.pathToRegexp=e.tokensToRegexp=e.regexpToFunction=e.match=e.tokensToFunction=e.compile=e.parse=void 0,e.parse=r,e.compile=function(t,e){return i(r(t,e),e)},e.tokensToFunction=i,e.match=function(t,e){var n=[];return s(u(t,n,e),n,e)},e.regexpToFunction=s,e.tokensToRegexp=l,e.pathToRegexp=u},hAWA:function(t,e,n){"use strict";var r=n("KHd+"),i=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"}}),this._v(" "),e("path",{attrs:{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"}})])}),[],!1,null,null,null).exports,s={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}}},data:function(){return{open:!1}},created:function(){var t=this,e=function(e){t.open&&27===e.keyCode&&(t.open=!1)};this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",e)})),document.addEventListener("keydown",e)},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"==this.align?"origin-top-left left-0":"right"==this.align?"origin-top-right right-0":"origin-top"}}},a=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("div",{on:{click:function(e){t.open=!t.open}}},[t._t("trigger")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"fixed inset-0 z-40",on:{click:function(e){t.open=!1}}}),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition ease-out duration-200","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"absolute z-50 mt-2 rounded-md shadow-lg",class:[t.widthClass,t.alignmentClasses],staticStyle:{display:"none"},on:{click:function(e){t.open=!1}}},[n("div",{staticClass:"rounded-md shadow-xs",class:t.contentClasses},[t._t("content")],2)])])],1)}),[],!1,null,null,null).exports,o={props:["href","as"]},l=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["button"==this.as?e("button",{staticClass:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{type:"submit"}},[this._t("default")],2):e("inertia-link",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{href:this.href}},[this._t("default")],2)],1)}),[],!1,null,null,null).exports,u={props:["href","active"],computed:{classes:function(){return this.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"}}},c=Object(r.a)(u,(function(){var t=this.$createElement;return(this._self._c||t)("inertia-link",{class:this.classes,attrs:{href:this.href}},[this._t("default")],2)}),[],!1,null,null,null).exports,d={props:["active","href","as"],computed:{classes:function(){return this.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"}}},f=Object(r.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["button"==this.as?e("button",{staticClass:"w-full text-left",class:this.classes},[this._t("default")],2):e("inertia-link",{class:this.classes,attrs:{href:this.href}},[this._t("default")],2)],1)}),[],!1,null,null,null).exports,p=n("D9K+"),v=n("bUC5"),h={data:function(){return{active:"dashboard",reduce:null,pathRegex:Object(p.pathToRegexp)("/:admin/:menu/(.*)*")}},computed:{sidebarIcon:function(){return this.reduce?"bx bx-right-arrow-alt":"bx bx-left-arrow-alt"}},watch:{reduce:function(t){localStorage.setItem("sidebarReduce",this.reduce),v.bus.$emit("reduce",this.reduce)}},methods:{clickReduce:function(){this.reduce=!this.reduce,v.bus.$emit("reduce",this.reduce)}},created:function(){var t=window.location.pathname+window.location.search+window.location.hash;console.log(this.pathRegex.exec(t)),this.active=this.pathRegex.exec(t)?this.pathRegex.exec(t)[2]:"dashboard",null===localStorage.getItem("sidebarReduce")?localStorage.setItem("sidebarReduce",!1):this.reduce="true"===localStorage.getItem("sidebarReduce")}},g={components:{JetApplicationMark:i,JetDropdown:a,JetDropdownLink:l,JetNavLink:c,JetResponsiveNavLink:f,Sidebar:Object(r.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vs-sidebar",{staticClass:"min-h-screen fixed",staticStyle:{position:"fixed !important"},attrs:{absolute:"",reduce:t.reduce,open:""},scopedSlots:t._u([{key:"logo",fn:function(){},proxy:!0},{key:"footer",fn:function(){return[n("vs-row",{attrs:{justify:"space-between"}},[n("vs-avatar",[n("img",{attrs:{src:t.$page.user.profile_photo_url,alt:""}})]),t._v(" "),n("vs-col",{staticClass:"mt-3",attrs:{w:"12"}},[n("vs-button",{attrs:{circle:"",icon:"",floating:""},nativeOn:{click:function(e){return t.clickReduce(e)}}},[n("i",{class:t.sidebarIcon})])],1)],1)]},proxy:!0}]),model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._v(" "),n("vs-sidebar-item",{attrs:{id:"dashboard"},nativeOn:{click:function(e){t.link(t.route("dashboard"))}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"bx bx-home"})]},proxy:!0}])},[t._v("\n        Dashboard\n    ")]),t._v(" "),n("vs-sidebar-item",{attrs:{id:"services"},nativeOn:{click:function(e){t.link(t.route("services.index"))}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"bx bx-grid-alt"})]},proxy:!0}])},[t._v("\n        Сервисы\n    ")]),t._v(" "),n("vs-sidebar-item",{attrs:{id:"materials"},nativeOn:{click:function(e){t.link(t.route("materials.index"))}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"bx bxs-layer-plus"})]},proxy:!0}])},[t._v("\n        Материалы\n    ")]),t._v(" "),n("vs-sidebar-item",{attrs:{id:"galleries"},nativeOn:{click:function(e){t.link(t.route("galleries.index"))}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"bx bx-images"})]},proxy:!0}])},[t._v("\n        Галерея\n    ")]),t._v(" "),n("vs-sidebar-item",{attrs:{id:"contacts"},nativeOn:{click:function(e){t.link(t.route("contacts.edit",{contact:t.$page.contact_id}))}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"bx bx-slider-alt"})]},proxy:!0}])},[t._v("\n        Настройки\n    ")]),t._v(" "),n("vs-sidebar-item",{attrs:{id:"logout"},nativeOn:{click:function(e){t.link(t.route("logout"))}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("i",{staticClass:"bx bx-exit bx-rotate-180"})]},proxy:!0}])},[t._v("\n        Logout\n    ")])],1)}),[],!1,null,null,null).exports},computed:{widthStyle:function(){return this.reduce?"width: 60px;":"width: 270px;"}},data:function(){return{showingNavigationDropdown:!1,reduce:!1}},methods:{logout:function(){axios.post(route("logout").url()).then((function(t){window.location="/"}))}},updated:function(){this.$page.form_post&&this.$vs.notification({position:"top-right",color:this.$page.form_post.status?"success":"danger",title:this.$page.form_post.title,text:this.$page.form_post.text,duration:1e4,sticky:!0,progress:"auto"})},mounted:function(){var t=this;v.bus.$on("reduce",(function(e){t.reduce=e}))}},m=Object(r.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen bg-gray-100"},[n("nav",{staticClass:"bg-white border-b border-gray-100"},[n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[n("div",{staticClass:"flex justify-between h-16"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"flex-shrink-0 flex items-center"},[n("inertia-link",{attrs:{href:t.route("dashboard")}},[n("jet-application-mark",{staticClass:"block h-9 w-auto"})],1)],1),t._v(" "),n("div",{staticClass:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},[n("jet-nav-link",{attrs:{href:t.route("dashboard"),active:t.route().current("dashboard")}},[t._v("\n                            Dashboard\n                        ")])],1)]),t._v(" "),n("div",{staticClass:"hidden sm:flex sm:items-center sm:ml-6"},[n("div",{staticClass:"ml-3 relative"},[n("jet-dropdown",{attrs:{align:"right",width:"48"},scopedSlots:t._u([{key:"trigger",fn:function(){return[t.$page.jetstream.managesProfilePhotos?n("button",{staticClass:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"},[n("img",{staticClass:"h-8 w-8 rounded-full object-cover",attrs:{src:t.$page.user.profile_photo_url,alt:t.$page.user.name}})]):n("button",{staticClass:"flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"},[n("div",[t._v(t._s(t.$page.user.name))]),t._v(" "),n("div",{staticClass:"ml-1"},[n("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])]},proxy:!0},{key:"content",fn:function(){return[n("div",{staticClass:"block px-4 py-2 text-xs text-gray-400"},[t._v("\n                                    Manage Account\n                                ")]),t._v(" "),n("jet-dropdown-link",{attrs:{href:t.route("profile.show")}},[t._v("\n                                    Profile\n                                ")]),t._v(" "),t.$page.jetstream.hasApiFeatures?n("jet-dropdown-link",{attrs:{href:t.route("api-tokens.index")}},[t._v("\n                                    API Tokens\n                                ")]):t._e(),t._v(" "),n("div",{staticClass:"border-t border-gray-100"}),t._v(" "),t.$page.jetstream.hasTeamFeatures?[n("div",{staticClass:"block px-4 py-2 text-xs text-gray-400"},[t._v("\n                                        Manage Team\n                                    ")]),t._v(" "),n("jet-dropdown-link",{attrs:{href:t.route("teams.show",t.$page.user.current_team)}},[t._v("\n                                        Team Settings\n                                    ")]),t._v(" "),t.$page.jetstream.canCreateTeams?n("jet-dropdown-link",{attrs:{href:t.route("teams.create")}},[t._v("\n                                        Create New Team\n                                    ")]):t._e(),t._v(" "),n("div",{staticClass:"border-t border-gray-100"}),t._v(" "),n("div",{staticClass:"block px-4 py-2 text-xs text-gray-400"},[t._v("\n                                        Switch Teams\n                                    ")]),t._v(" "),t._l(t.$page.user.all_teams,(function(e){return[n("form",{key:e.id,on:{submit:function(n){return n.preventDefault(),t.switchToTeam(e)}}},[n("jet-dropdown-link",{attrs:{as:"button"}},[n("div",{staticClass:"flex items-center"},[e.id==t.$page.user.current_team_id?n("svg",{staticClass:"mr-2 h-5 w-5 text-green-400",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})]):t._e(),t._v(" "),n("div",[t._v(t._s(e.name))])])])],1)]})),t._v(" "),n("div",{staticClass:"border-t border-gray-100"})]:t._e(),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.logout(e)}}},[n("jet-dropdown-link",{attrs:{as:"button"}},[t._v("\n                                        Logout\n                                    ")])],1)]},proxy:!0}])})],1)]),t._v(" "),n("div",{staticClass:"-mr-2 flex items-center sm:hidden"},[n("button",{staticClass:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",on:{click:function(e){t.showingNavigationDropdown=!t.showingNavigationDropdown}}},[n("svg",{staticClass:"h-6 w-6",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[n("path",{class:{hidden:t.showingNavigationDropdown,"inline-flex":!t.showingNavigationDropdown},attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}}),t._v(" "),n("path",{class:{hidden:!t.showingNavigationDropdown,"inline-flex":t.showingNavigationDropdown},attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])])]),t._v(" "),n("div",{staticClass:"sm:hidden",class:{block:t.showingNavigationDropdown,hidden:!t.showingNavigationDropdown}},[n("div",{staticClass:"pt-2 pb-3 space-y-1"},[n("jet-responsive-nav-link",{attrs:{href:t.route("dashboard"),active:t.route().current("dashboard")}},[t._v("\n                    Dashboard\n                ")])],1),t._v(" "),n("div",{staticClass:"pt-4 pb-1 border-t border-gray-200"},[n("div",{staticClass:"flex items-center px-4"},[n("div",{staticClass:"flex-shrink-0"},[n("img",{staticClass:"h-10 w-10 rounded-full",attrs:{src:t.$page.user.profile_photo_url,alt:t.$page.user.name}})]),t._v(" "),n("div",{staticClass:"ml-3"},[n("div",{staticClass:"font-medium text-base text-gray-800"},[t._v(t._s(t.$page.user.name))]),t._v(" "),n("div",{staticClass:"font-medium text-sm text-gray-500"},[t._v(t._s(t.$page.user.email))])])]),t._v(" "),n("div",{staticClass:"mt-3 space-y-1"},[n("jet-responsive-nav-link",{attrs:{href:t.route("profile.show"),active:t.route().current("profile.show")}},[t._v("\n                        Profile\n                    ")]),t._v(" "),t.$page.jetstream.hasApiFeatures?n("jet-responsive-nav-link",{attrs:{href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")}},[t._v("\n                        API Tokens\n                    ")]):t._e(),t._v(" "),n("form",{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.logout(e)}}},[n("jet-responsive-nav-link",{attrs:{as:"button"}},[t._v("\n                            Logout\n                        ")])],1),t._v(" "),t.$page.jetstream.hasTeamFeatures?[n("div",{staticClass:"border-t border-gray-200"}),t._v(" "),n("div",{staticClass:"block px-4 py-2 text-xs text-gray-400"},[t._v("\n                            Manage Team\n                        ")]),t._v(" "),n("jet-responsive-nav-link",{attrs:{href:t.route("teams.show",t.$page.user.current_team),active:t.route().current("teams.show")}},[t._v("\n                            Team Settings\n                        ")]),t._v(" "),n("jet-responsive-nav-link",{attrs:{href:t.route("teams.create"),active:t.route().current("teams.create")}},[t._v("\n                            Create New Team\n                        ")]),t._v(" "),n("div",{staticClass:"border-t border-gray-200"}),t._v(" "),n("div",{staticClass:"block px-4 py-2 text-xs text-gray-400"},[t._v("\n                            Switch Teams\n                        ")]),t._v(" "),t._l(t.$page.user.all_teams,(function(e){return[n("form",{key:e.id,on:{submit:function(n){return n.preventDefault(),t.switchToTeam(e)}}},[n("jet-responsive-nav-link",{attrs:{as:"button"}},[n("div",{staticClass:"flex items-center"},[e.id==t.$page.user.current_team_id?n("svg",{staticClass:"mr-2 h-5 w-5 text-green-400",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})]):t._e(),t._v(" "),n("div",[t._v(t._s(e.name))])])])],1)]}))]:t._e()],2)])])]),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"relative",style:t.widthStyle},[n("sidebar")],1),t._v(" "),n("main",{staticClass:"flex-auto px-4 py-4"},[t._t("default")],2)]),t._v(" "),n("portal-target",{attrs:{name:"modal",multiple:""}})],1)}),[],!1,null,null,null);e.a=m.exports},pUxE:function(t,e,n){"use strict";n.r(e);var r=n("x7Mh"),i=n("hAWA"),s=n("CxDH"),a={props:["tokens","availablePermissions","defaultPermissions"],components:{ApiTokenManager:r.default,AppLayout:i.a,JetSectionBorder:s.a}},o=n("KHd+"),l=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[n("h2",{staticClass:"font-semibold text-xl text-gray-800 leading-tight"},[t._v("\n            API Tokens\n        ")])]},proxy:!0}])},[t._v(" "),n("div",[n("div",{staticClass:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},[n("api-token-manager",{attrs:{tokens:t.tokens,"available-permissions":t.availablePermissions,"default-permissions":t.defaultPermissions}})],1)])])}),[],!1,null,null,null);e.default=l.exports}}]);