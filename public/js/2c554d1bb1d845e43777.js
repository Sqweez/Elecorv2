(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"0xq3":function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".date-container[data-v-05c01ebe]{display:flex;-moz-column-gap:8px;column-gap:8px}.date-container>div[data-v-05c01ebe]:first-child{width:250px}.attention[data-v-05c01ebe]{text-align:center;font-size:18px}.attention--error[data-v-05c01ebe]{color:red}.attention--success[data-v-05c01ebe]{color:green}",""])},"15pd":function(e,t,n){"use strict";n("aLhr")},Nqaf:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),i=n.n(r),a=n("uzyW"),s=n("vDqi"),o=n.n(s),c=(n("wd/R"),n("wq7B"));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f={data:function(){return{selectedServices:[],fromProgramStart:!1,toToday:!1,startDate:null,finishDate:null}},mounted:function(){var e;(e=this.selectedServices).push.apply(e,v(this.services.map((function(e){return e.id}))))},methods:{selectAllServices:function(){var e=this;this.$nextTick((function(){e.allServicesSelected?e.selectedServices=[]:e.selectedServices=e.services.map((function(e){return e.id})).slice()}))},onSubmit:function(){var e={services:this.selectedServices,startDate:this.startDate,finishDate:this.finishDate};this.allServicesSelected&&delete e.services;var t=new URLSearchParams(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)).toString();this.$emit("submit",t)}},watch:{state:function(){this.selectedServices=[],this.fromProgramStart=!1,this.toToday=!1,this.startDate=null,this.finishDate=null},fromProgramStart:function(e){this.startDate=e?new Date(0).toJSON().slice(0,10):null},toToday:function(e){this.finishDate=e?(new Date).toJSON().slice(0,10):null}},computed:{services:function(){return this.$store.getters[c.a.SERVICES]},allServicesSelected:function(){return this.selectedServices.length===this.services.length},someServicesSelected:function(){return this.selectedServices.length>0&&!this.allServicesSelected},icon:function(){return this.allServicesSelected?"mdi-close-box":this.someServicesSelected?"mdi-minus-box":"mdi-checkbox-blank-outline"},allFieldsFilled:function(){return!!(this.selectedServices.length&&this.startDate&&this.finishDate)}},props:{state:{type:Boolean,default:!1}}},p=(n("15pd"),n("KHd+"));function m(e,t,n,r,i,a,s){try{var o=e[a](s),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(r,i)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function s(e){m(a,r,i,s,o,"next",e)}function o(e){m(a,r,i,s,o,"throw",e)}s(void 0)}))}}var b={components:{ExportDebtsModal:Object(p.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"800",persistent:""},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[n("span",{staticClass:"white--text"},[e._v("Экспорт дебиторской задолженности v2")]),e._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[n("v-icon",{attrs:{color:"white"},on:{click:function(t){return e.$emit("cancel")}}},[e._v("\n                    mdi-close\n                ")])],1)],1),e._v(" "),n("v-card-text",[n("v-select",{staticClass:"my-2",attrs:{label:"Услуги",items:e.services,"item-value":"id","item-text":"name",multiple:""},scopedSlots:e._u([e.allServicesSelected?{key:"selection",fn:function(t){t.item;return[0===t.index?n("span",[e._v("\n                        Все услуги\n                    ")]):e._e()]}}:null,{key:"prepend-item",fn:function(){return[n("v-list-item",{attrs:{ripple:""},on:{click:e.selectAllServices}},[n("v-list-item-action",[n("v-icon",{attrs:{color:e.selectedServices.length>0?"indigo darken-4":""}},[e._v("\n                                "+e._s(e.icon)+"\n                            ")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("\n                                Выбрать все\n                            ")])],1)],1),e._v(" "),n("v-divider",{staticClass:"mt-2"})]},proxy:!0}],null,!0),model:{value:e.selectedServices,callback:function(t){e.selectedServices=t},expression:"selectedServices"}}),e._v(" "),n("div",{staticClass:"date-container"},[n("v-checkbox",{attrs:{label:"С начала работы программы"},model:{value:e.fromProgramStart,callback:function(t){e.fromProgramStart=t},expression:"fromProgramStart"}}),e._v(" "),e.fromProgramStart?e._e():n("v-text-field",{attrs:{label:"Дата начала",type:"date"},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1),e._v(" "),n("div",{staticClass:"date-container"},[n("v-checkbox",{attrs:{label:"По сегодняшний день"},model:{value:e.toToday,callback:function(t){e.toToday=t},expression:"toToday"}}),e._v(" "),e.toToday?e._e():n("v-text-field",{attrs:{label:"Дата начала",type:"date"},model:{value:e.finishDate,callback:function(t){e.finishDate=t},expression:"finishDate"}})],1),e._v(" "),e.allFieldsFilled?e._e():n("p",{staticClass:"attention attention--error"},[e._v("\n                Для экспорта дебиторской задолженности заполните все поля!\n            ")]),e._v(" "),e.allFieldsFilled?n("p",{staticClass:"attention attention--success"},[e._v("\n                Все поля заполнены!\n            ")]):e._e()],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:function(t){return e.$emit("cancel")}}},[e._v("Отмена")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"success",disabled:!e.allFieldsFilled},on:{click:e.onSubmit}},[e._v("\n                Экспорт\n                "),n("v-icon",[e._v("mdi-check")])],1)],1)],1)],1)}),[],!1,null,"05c01ebe",null).exports},mounted:function(){var e=this;return h(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.h)();case 2:n=t.sent,e.clients=n.debts,e.total_debt=n.total_debt;case 5:case"end":return t.stop()}}),t)})))()},computed:{user:function(){return this.$store.getters.user}},data:function(){return{clients:null,overlay:!1,search:"",total_debt:0,exportModal:!1,headers:[{text:"Контрагент",align:"left",sortable:!1,value:"name"},{text:"Лицевой счет",value:"personal_account",sortable:!1},{text:"Адрес",value:"address",sortable:!1},{text:"Торговое наименование",value:"trademark",sortable:!1},{text:"Задолженность",value:"debt",sortable:!1},{text:"лиц счета",value:"_personalAccounts",visible:!1,align:" d-none"},{text:"адреса",value:"_addresses",visible:!1,align:" d-none"},{text:"торговые наименования",value:"_trademarks",visible:!1,align:" d-none"}]}},methods:{rowClick:function(e){window.open(window.origin+"/clients/"+e.id,"_blank")},openInNewTab:function(e){this.$router.push({name:"clients.show",params:{userId:e.id}})},exportDebts:function(){var e=arguments,t=this;return h(i.a.mark((function n(){var r,a,s,c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:"",t.overlay=!0,t.exportModal=!1,n.next=5,o.a.get("/api/export/debts?".concat(r));case 5:a=n.sent,s=a.data,(c=document.createElement("a")).href=s,c.click(),t.overlay=!1;case 11:case"end":return n.stop()}}),n)})))()}}},_={components:{ReceivableTable:Object(p.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-overlay",{model:{value:e.overlay,callback:function(t){e.overlay=t},expression:"overlay"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"48",color:"primary"}})],1),e._v(" "),n("v-card",[n("v-card-title",[e._v("\n            Дебиторская задолженность\n        ")]),e._v(" "),n("v-card-text",{staticClass:"p-3"},[null===e.clients?n("div",{staticClass:"text-center d-flex align-items-center justify-content-center",staticStyle:{"min-height":"651px"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"65",color:"primary"}})],1):e._e(),e._v(" "),null!==e.clients?n("div",[n("h3",[e._v("Общая задолженность: "+e._s(e._f("money")(-1*e.total_debt)))]),e._v(" "),n("v-divider",{staticClass:"mt-4"}),e._v(" "),2!==e.user.role_id?n("v-btn",{attrs:{color:"primary mt-4"},on:{click:function(t){e.exportModal=!0}}},[e._v("Экспорт данных\n                    "),n("v-icon",[e._v("mdi-file-excel-box")])],1):e._e(),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{staticClass:"p-3",attrs:{clearable:"","append-icon":"mdi-account-search",label:"Поиск","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("v-data-table",{attrs:{"no-results-text":"Нет результатов","no-data-text":"Нет данных","footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:e.headers,items:e.clients,search:e.search},on:{"click:row":e.rowClick},scopedSlots:e._u([{key:"item.personal_account",fn:function(t){var r=t.item;return[n("ul",e._l(r.connections,(function(t,r){return n("li",{key:r},[e._v(e._s(t.personal_account))])})),0)]}},{key:"item.address",fn:function(t){var r=t.item;return[n("ul",e._l(r.connections,(function(t,r){return n("li",{key:r},[e._v(e._s(t.address))])})),0)]}},{key:"item.trademark",fn:function(t){var r=t.item;return[n("ul",e._l(r.connections,(function(t,r){return n("li",{key:r},[e._v(e._s(t.trademark))])})),0)]}},{key:"item.debt",fn:function(t){var r=t.item;return[n("ul",e._l(r.connections,(function(t,r){return n("li",{key:r},[e._v(e._s(e._f("money")(t.debt)))])})),0)]}},{key:"item._personalAccounts",fn:function(t){var r=t.item;return e._l(r.connections,(function(t,r){return n("p",{key:r},[e._v("\n                            "+e._s(t.personal_account)+"\n                        ")])}))}},{key:"footer.page-text",fn:function(t){var n=t.pageStart,r=t.pageStop,i=t.itemsLength;return[e._v("\n                        "+e._s(n)+"-"+e._s(r)+" из "+e._s(i)+"\n                    ")]}}],null,!1,1337630013)})],1):e._e()])],1),e._v(" "),n("ExportDebtsModal",{attrs:{state:e.exportModal},on:{cancel:function(t){e.exportModal=!1},submit:e.exportDebts}})],1)}),[],!1,null,"1491c82d",null).exports}},x=Object(p.a)(_,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("ReceivableTable")],1)}),[],!1,null,"25c23218",null);t.default=x.exports},aLhr:function(e,t,n){var r=n("0xq3");"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,i);r.locals&&(e.exports=r.locals)},vl5K:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="vl5K"}}]);