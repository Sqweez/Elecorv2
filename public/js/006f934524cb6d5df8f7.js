(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+F2W":function(e,t,n){"use strict";var a={props:{state:{type:Boolean,default:!1},title:{type:String,default:"Подтвердите действие"},message:{type:String,required:!0},okMessage:{type:String,default:"ОК"},cancelMessage:{type:String,default:"Отмена"}},methods:{onConfirm:function(){this.$emit("confirm")},onCancel:function(){this.$emit("cancel")}}},r=(n("dXLZ"),n("KHd+")),i=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[n("span",{staticClass:"white--text"},[e._v(e._s(e.title))]),e._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[n("v-icon",{attrs:{color:"white"},on:{click:e.onCancel}},[e._v("\n                        mdi-close\n                    ")])],1)],1),e._v(" "),n("v-card-text",{staticClass:"modal-text"},[e._v("\n                "+e._s(e.message)+"\n            ")]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:e.onCancel}},[e._v("\n                    "+e._s(e.cancelMessage)+"\n                ")]),e._v(" "),n("v-btn",{attrs:{color:"success",text:""},on:{click:e.onConfirm}},[e._v("\n                    "+e._s(e.okMessage)+"\n                    "),n("v-icon",[e._v("mdi-check")])],1)],1)],1)],1)],1)}),[],!1,null,"2adaa561",null);t.a=i.exports},F3ox:function(e,t,n){var a=n("toHN");"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,r);a.locals&&(e.exports=a.locals)},dXLZ:function(e,t,n){"use strict";n("F3ox")},toHN:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".modal-text[data-v-2adaa561]{margin-top:15px!important;font-size:16px}",""])},"ztL/":function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),i=n("BWV3");function s(e,t,n,a,r,i,s){try{var o=e[i](s),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(a,r)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){s(i,a,r,o,l,"next",e)}function l(e){s(i,a,r,o,l,"throw",e)}o(void 0)}))}}String.prototype.replaceAll=function(e,t){return this.split(e).join(t)};var l={props:{state:{type:Boolean,default:!1},id:{type:Number,default:null}},computed:{message:function(){var e=this.body;return this.variables.forEach((function(t){e=e.replaceAll(t.key,t.example)})),e}},watch:{state:function(){if(this.name="",this.title="",this.body="",null!==this.id){var e=this.$store.getters.mailing_template(this.id);this.name=e.name,this.title=e.title,this.body=e.body}}},data:function(){return{loading:!1,name:"",title:"",body:"",variables:[{key:"%ИМЯ%",name:"Имя клиента",example:"Александр Андреевич"}]}},methods:{onSubmit:function(){var e=this;return o(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading=!0,null!==e.id){t.next=6;break}return t.next=4,e.createTemplate();case 4:t.next=8;break;case 6:return t.next=8,e.editTemplate();case 8:e.$emit("onClose"),e.loading=!1;case 11:case"end":return t.stop()}}),t)})))()},createTemplate:function(){var e=this;return o(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={title:e.title,body:e.body,name:e.name},t.next=3,e.$store.dispatch("createMailingTemplates",n);case 3:Object(i.a)("Шаблон успешно создан!");case 4:case"end":return t.stop()}}),t)})))()},editTemplate:function(){var e=this;return o(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={id:e.id,title:e.title,body:e.body,name:e.name},t.next=3,e.$store.dispatch("editMailingTemplates",n);case 3:Object(i.a)("Шаблон успешно отредактирован!");case 4:case"end":return t.stop()}}),t)})))()},addVariableToTemplate:function(e){this.body+=e.key}}},c=n("KHd+"),u=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"800",persistent:""},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"blue darken-1 d-flex justify-content-between"},[n("span",{staticClass:"white--text"},[e._v(e._s(null===e.id?"Добавление":"Редактирование")+" шаблона")]),e._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$emit("onClose")}}},[n("v-icon",{attrs:{color:"white"}},[e._v("mdi-close")])],1)],1),e._v(" "),n("v-card-text",[e.loading?e._e():n("v-form",{staticClass:"p-3"},[n("v-text-field",{attrs:{label:"Наименование шаблона"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("v-text-field",{attrs:{label:"Заголовок"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),n("v-textarea",{attrs:{"auto-grow":"",rows:"5",counter:"",label:"Текст"},model:{value:e.body,callback:function(t){e.body=t},expression:"body"}}),e._v(" "),n("v-flex",{staticClass:"mb-2"},[n("h4",{staticClass:"ml-1"},[e._v("Переменные:")]),e._v(" "),e._l(e.variables,(function(t,a){return n("v-btn",{key:a,staticClass:"m-1",attrs:{small:"",color:"primary"},on:{click:function(n){return e.addVariableToTemplate(t)}}},[e._v("\n                        "+e._s(t.name)+"\n                    ")])}))],2),e._v(" "),n("v-divider"),e._v(" "),n("v-flex",{staticClass:"mt-2"},[n("h3",[e._v("Предпросмотр шаблона:")]),e._v(" "),n("h4",[e._v(e._s(this.title))]),e._v(" "),n("p",[e._v(e._s(this.message))])])],1)],1),e._v(" "),n("v-divider"),e._v(" "),e.loading?e._e():n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:function(t){return e.$emit("onClose")}}},[e._v("Отмена")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"success"},on:{click:e.onSubmit}},[e._v("\n                Сохранить\n                "),n("v-icon",[e._v("mdi-check")])],1)],1),e._v(" "),n("v-progress-linear",{attrs:{indeterminate:"",active:e.loading,color:"green",absolute:"",bottom:""}})],1)],1)}),[],!1,null,"7d46370f",null).exports,d=n("+F2W");function v(e,t,n,a,r,i,s){try{var o=e[i](s),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(a,r)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function s(e){v(i,a,r,s,o,"next",e)}function o(e){v(i,a,r,s,o,"throw",e)}s(void 0)}))}}var p={components:{ConfirmationModal:d.a,AddMailingTemplateModal:u},methods:{onEdit:function(){var e=this;return m(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.showEditModal=!1,Object(i.a)("","Шаблон успешно изменен!");case 2:case"end":return t.stop()}}),t)})))()},onSave:function(){var e=this;return m(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.showAddModal=!1,Object(i.a)("","Шаблон успешно добавлен!");case 2:case"end":return t.stop()}}),t)})))()}},computed:{templates:function(){return this.$store.getters.mailing_templates}},data:function(){return{id:null,showEditModal:!1,showAddModal:!1,showDeleteModal:!1,headers:[{text:"Наименование шаблона",value:"title",sortable:!1},{text:"Текст шаблона",value:"body",sortable:!1},{text:"Действие",value:"action",sortable:!1}],search:""}}},f=Object(c.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-3"},[n("div",{staticClass:"d-flex justify-content-end"},[n("v-btn",{staticClass:"mb-2",attrs:{color:"primary"},on:{click:function(t){e.showAddModal=!0}}},[e._v("Добавить шаблон")])],1),e._v(" "),n("v-data-table",{attrs:{"no-results-text":"Нет результатов","no-data-text":"Нет данных","footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:e.headers,items:e.templates,search:e.search},scopedSlots:e._u([{key:"item.action",fn:function(t){var a=t.item;return[n("v-btn",{attrs:{icon:""},on:{click:function(t){e.id=a.id,e.showAddModal=!0}}},[n("v-icon",[e._v("mdi-pencil")])],1),e._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-delete")])],1)]}},{key:"footer.page-text",fn:function(t){var n=t.pageStart,a=t.pageStop,r=t.itemsLength;return[e._v("\n            "+e._s(n)+"-"+e._s(a)+" из "+e._s(r)+"\n        ")]}}])}),e._v(" "),n("AddMailingTemplateModal",{attrs:{state:e.showAddModal,id:e.id},on:{onClose:function(t){e.id=null,e.showAddModal=!1}}}),e._v(" "),n("ConfirmationModal",{attrs:{state:e.showDeleteModal,message:"Вы действительно хотите удалить выбранный шаблон?"},on:{confirm:function(t){e.showDeleteModal=!1},cancel:function(t){e.showDeleteModal=!1}}})],1)}),[],!1,null,"17d90edc",null).exports,h=n("C3xL"),_=n("wq7B");function b(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function x(e,t,n,a,r,i,s){try{var o=e[i](s),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(a,r)}String.prototype.replaceAll=function(e,t){return this.split(e).join(t)};var y={components:{ConfirmationModal:d.a},methods:{addVariableToTemplate:function(e){this.body+=e.key},sendMailing:function(){var e,t=this;return(e=r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={title:t.title,body:t.body,clients:t.selected.map((function(e){return e.id})),sendType:t.sendType},t.showModal=!1,e.next=4,Object(h.g)(n);case 4:Object(i.a)("Рассылка была отправлена");case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function s(e){x(i,a,r,s,o,"next",e)}function o(e){x(i,a,r,s,o,"throw",e)}s(void 0)}))})()}},data:function(){return{showModal:!1,sendingTypes:[{id:0,name:"Все"},{id:1,name:"SMS"},{id:"2",name:"Пуш-уведомления"}],sendType:2,variables:[{key:"%ИМЯ%",name:"Имя клиента",example:"Александр Андреевич"}],methods:{addVariableToTemplate:function(e){this.body+=e.key}},search:"",selected:[],currentTemplate:null,headers:[{text:"Контрагент",align:"left",sortable:!1,value:"name"},{text:"Лицевой счет",value:"personal_accounts",sortable:!1},{text:"Адрес",value:"addresses",sortable:!1},{text:"Торговое наименование",value:"trademarks",sortable:!1}],isFreeTemplate:!1,clientGroup:null,clientGroups:[{id:-1,name:"Все"},{id:1,name:"Должники"},{id:2,name:"Клиенты с МТК"}],title:"",body:""}},watch:{currentTemplate:function(){var e=this.$store.getters.mailing_template(this.currentTemplate);return this.body=e.body,this.title=e.title,e}},computed:{clients:function(){var e=[];switch(this.clientGroup){case-1:e=this.$store.getters.allClients;break;case 1:e=this.$store.getters.debts;break;case 2:e=this.$store.getters[_.a.CLIENT_WITH_MTK]}return this.selected=b(e),e},message:function(){var e=this.body;return this.variables.forEach((function(t){e=e.replaceAll(t.key,t.example)})),e},templates:function(){return this.$store.getters.mailing_templates}}},w=Object(c.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[0===e.$store.getters.debts.length?n("div",{staticClass:"text-center d-flex align-items-center justify-content-center",staticStyle:{"min-height":"651px"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"65",color:"primary"}})],1):n("v-form",{staticClass:"p-3"},[n("v-select",{attrs:{"item-value":"id","item-text":"name",label:"Тип отправки",items:e.sendingTypes},model:{value:e.sendType,callback:function(t){e.sendType=t},expression:"sendType"}}),e._v(" "),n("v-flex",[e.isFreeTemplate?e._e():n("v-select",{attrs:{label:"Шаблон",items:e.templates,"item-text":"name","item-value":"id"},model:{value:e.currentTemplate,callback:function(t){e.currentTemplate=t},expression:"currentTemplate"}}),e._v(" "),n("v-checkbox",{attrs:{label:"Произвольный шаблон"},model:{value:e.isFreeTemplate,callback:function(t){e.isFreeTemplate=t},expression:"isFreeTemplate"}})],1),e._v(" "),n("v-text-field",{attrs:{label:"Заголовок"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),n("v-textarea",{attrs:{label:"Текст","auto-grow":"",rows:"5",counter:""},model:{value:e.body,callback:function(t){e.body=t},expression:"body"}}),e._v(" "),n("v-flex",{staticClass:"mb-2"},[n("h4",{staticClass:"ml-1"},[e._v("Переменные:")]),e._v(" "),e._l(e.variables,(function(t,a){return n("v-btn",{key:a,staticClass:"m-1",attrs:{small:"",color:"primary"},on:{click:function(n){return e.addVariableToTemplate(t)}}},[e._v("\n                "+e._s(t.name)+"\n            ")])}))],2),e._v(" "),n("v-select",{attrs:{label:"Группа клиентов",items:e.clientGroups,"item-text":"name","item-value":"id"},model:{value:e.clientGroup,callback:function(t){e.clientGroup=t},expression:"clientGroup"}}),e._v(" "),e.clientGroup?n("v-data-table",{attrs:{"item-key":"id","show-select":"","no-results-text":"Нет результатов","no-data-text":"Нет данных","footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:e.headers,items:e.clients,search:e.search},scopedSlots:e._u([{key:"item.personal_accounts",fn:function(t){var a=t.item;return[n("ul",e._l(a.connections,(function(t,a){return n("li",{key:a},[e._v(e._s(t.personal_account))])})),0)]}},{key:"item.addresses",fn:function(t){var a=t.item;return[n("ul",e._l(a.connections,(function(t,a){return n("li",{key:a},[e._v(e._s(t.address))])})),0)]}},{key:"item.trademarks",fn:function(t){var a=t.item;return[n("ul",e._l(a.connections,(function(t,a){return n("li",{key:a},[e._v(e._s(t.trademark))])})),0)]}},{key:"footer.page-text",fn:function(t){var n=t.pageStart,a=t.pageStop,r=t.itemsLength;return[e._v("\n                "+e._s(n)+"-"+e._s(a)+" из "+e._s(r)+"\n            ")]}}],null,!1,3255566678),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}):e._e(),e._v(" "),e.clientGroup?n("div",{staticClass:"d-flex"},[n("h4",[e._v("Количество получателей: "+e._s(e.selected.length))])]):e._e(),e._v(" "),n("v-divider"),e._v(" "),n("v-flex",{staticClass:"mt-2"},[n("h3",[e._v("Предпросмотр шаблона:")]),e._v(" "),n("h4",[e._v(e._s(this.title))]),e._v(" "),n("p",[e._v(e._s(this.message))])]),e._v(" "),e.selected.length?n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.showModal=!0}}},[e._v("Отправить рассылку")]):e._e()],1),e._v(" "),n("ConfirmationModal",{attrs:{state:e.showModal,message:"Вы действительно хотите отправить эту рассылку?"},on:{cancel:function(t){e.showModal=!1},confirm:e.sendMailing}})],1)}),[],!1,null,"b20404cc",null).exports;function k(e,t,n,a,r,i,s){try{var o=e[i](s),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(a,r)}function M(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function s(e){k(i,a,r,s,o,"next",e)}function o(e){k(i,a,r,s,o,"throw",e)}s(void 0)}))}}var T={components:{ConfirmationModal:d.a},mounted:function(){var e=this;return M(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.e)();case 2:e.items=t.sent;case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{showDeleteModal:!1,search:"",items:[],id:null,headers:[{text:"Заголовок",value:"title",sortable:!1},{text:"Текст",value:"body",sortable:!1},{text:"Дата рассылки",value:"date"},{text:"Количество получателей",value:"recipient_count"},{text:"Автор",value:"user",sortable:!1},{text:"Действие",value:"action",sortable:!1}]}},computed:{},methods:{deleteHistory:function(){var e=this;return M(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.b)(e.id);case 2:e.items=e.items.filter((function(t){return t.id!==e.id})),e.id=null,e.showDeleteModal=!1,Object(i.a)("Рассылка успешно удалена!");case 6:case"end":return t.stop()}}),t)})))()}}},C=Object(c.a)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-2"},[n("v-text-field",{attrs:{label:"Поиск",clearable:"","single-line":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("v-data-table",{attrs:{"no-data-text":"Нет данных","no-results-text":"Нет результатов",items:e.items,"footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:e.headers,search:e.search},scopedSlots:e._u([{key:"item.body",fn:function(t){var a=t.item;return[n("i",[e._v(e._s(a.body))])]}},{key:"item.action",fn:function(t){var a=t.item;return[n("v-btn",{attrs:{icon:""},on:{click:function(t){e.id=a.id,e.showDeleteModal=!0}}},[n("v-icon",[e._v("mdi-delete")])],1)]}},{key:"footer.page-text",fn:function(t){var n=t.pageStart,a=t.pageStop,r=t.itemsLength;return[e._v("\n            "+e._s(n)+"-"+e._s(a)+" из "+e._s(r)+"\n        ")]}}])}),e._v(" "),n("ConfirmationModal",{attrs:{state:e.showDeleteModal,message:"'Вы действительно хотите удалить данную рассылку из истории?"},on:{cancel:function(t){e.id=null,e.showDeleteModal=!1},confirm:e.deleteHistory}})],1)}),[],!1,null,"04279ec4",null).exports,S=n("6cC8");function j(e,t,n,a,r,i,s){try{var o=e[i](s),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(a,r)}var $={components:{MailingHistorySegment:C,MailingSegment:w,MailingTemplateSegment:f},data:function(){return{currentSegment:"mailing"}},mounted:function(){var e,t=this;return(e=r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getDebts");case 2:return e.next=4,t.$store.dispatch(S.a.GET_CLIENTS);case 4:return e.next=6,t.$store.dispatch("getMailingTemplates");case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function s(e){j(i,a,r,s,o,"next",e)}function o(e){j(i,a,r,s,o,"throw",e)}s(void 0)}))})()}},A=Object(c.a)($,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",[n("v-card-title",[e._v("\n            Рассылка\n        ")]),e._v(" "),n("v-card-text",[n("div",{staticClass:"p-3"},[n("v-btn",{attrs:{depressed:"",color:"mailing"===e.currentSegment?"primary":""},on:{click:function(t){e.currentSegment="mailing"}}},[e._v("\n                    Рассылка\n                ")]),e._v(" "),n("v-btn",{attrs:{depressed:"",color:"mailing_history"===e.currentSegment?"primary":""},on:{click:function(t){e.currentSegment="mailing_history"}}},[e._v("\n                    История рассылок\n                ")]),e._v(" "),n("v-btn",{attrs:{depressed:"",color:"mailing_template"===e.currentSegment?"primary":""},on:{click:function(t){e.currentSegment="mailing_template"}}},[e._v("\n                    Шаблоны\n                ")]),e._v(" "),"mailing"===e.currentSegment?n("MailingSegment"):e._e(),e._v(" "),"mailing_history"===e.currentSegment?n("MailingHistorySegment"):e._e(),e._v(" "),"mailing_template"===e.currentSegment?n("MailingTemplateSegment"):e._e()],1)])],1)],1)}),[],!1,null,"14dff0ec",null);t.default=A.exports}}]);