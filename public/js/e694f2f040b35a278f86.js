(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+F2W":function(t,e,n){"use strict";var a={props:{state:{type:Boolean,default:!1},title:{type:String,default:"Подтвердите действие"},message:{type:String,required:!0},okMessage:{type:String,default:"ОК"},cancelMessage:{type:String,default:"Отмена"}},methods:{onConfirm:function(){this.$emit("confirm")},onCancel:function(){this.$emit("cancel")}}},i=(n("dXLZ"),n("KHd+")),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.title))]),t._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[n("v-icon",{attrs:{color:"white"},on:{click:t.onCancel}},[t._v("\n                        mdi-close\n                    ")])],1)],1),t._v(" "),n("v-card-text",{staticClass:"modal-text"},[t._v("\n                "+t._s(t.message)+"\n            ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:t.onCancel}},[t._v("\n                    "+t._s(t.cancelMessage)+"\n                ")]),t._v(" "),n("v-btn",{attrs:{color:"success",text:""},on:{click:t.onConfirm}},[t._v("\n                    "+t._s(t.okMessage)+"\n                    "),n("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)],1)}),[],!1,null,"2adaa561",null);e.a=o.exports},F3ox:function(t,e,n){var a=n("toHN");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,i);a.locals&&(t.exports=a.locals)},Tdfw:function(t,e,n){"use strict";n.r(e);var a=n("o0o1"),i=n.n(a);function o(t,e,n,a,i,o,s){try{var r=t[o](s),c=r.value}catch(t){return void n(t)}r.done?e(c):Promise.resolve(c).then(a,i)}var s={props:{state:{type:Boolean,default:!1}},data:function(){return{title:""}},methods:{onSave:function(){var t,e=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("createField",{alias:e.title});case 2:e.$emit("onClose");case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,i){var s=t.apply(e,n);function r(t){o(s,a,i,r,c,"next",t)}function c(t){o(s,a,i,r,c,"throw",t)}r(void 0)}))})()}}},r=n("KHd+"),c=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"600",persistent:""},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("v-card",[n("v-card-title",{staticClass:"d-flex justify-content-between blue darken-1"},[n("span",{staticClass:"white--text"},[t._v("Добавление поля")]),t._v(" "),n("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""},on:{click:function(e){return t.$emit("onClose")}}},[n("v-icon",{attrs:{color:"white"}},[t._v("\n                    mdi-close\n                ")])],1)],1),t._v(" "),n("v-card-text",[n("v-form",{staticClass:"p-3"},[n("v-text-field",{attrs:{label:"Название поля"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),n("v-divider")],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("onClose")}}},[t._v("Отмена")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",color:"success"},on:{click:t.onSave}},[t._v("Сохранить "),n("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)}),[],!1,null,"04694a44",null).exports;function l(t,e,n,a,i,o,s){try{var r=t[o](s),c=r.value}catch(t){return void n(t)}r.done?e(c):Promise.resolve(c).then(a,i)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function s(t){l(o,a,i,s,r,"next",t)}function r(t){l(o,a,i,s,r,"throw",t)}s(void 0)}))}}var v={components:{ConfirmationModal:n("+F2W").a,AddClientFieldModal:c},computed:{fields:function(){return this.$store.getters.get_fields}},data:function(){return{showModal:!1,delete_id:null,deleteModal:!1}},methods:{changeStatus:function(t){var e=this;return d(i.a.mark((function n(){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={id:t.id,is_active:1==t.is_active?0:1},n.next=3,e.$store.dispatch("changeField",a);case 3:case"end":return n.stop()}}),n)})))()},deleteItem:function(){var t=this;return d(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("deleteField",t.delete_id);case 2:t.delete_id=null,t.deleteModal=!1;case 4:case"end":return e.stop()}}),e)})))()}}},u=Object(r.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-card-title",[t._v("\n            Поля клиента\n        ")]),t._v(" "),n("v-card-text",[n("div",{staticClass:"p-3"},[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.showModal=!0}}},[t._v("Добавить поле")]),t._v(" "),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("Название поля")]),t._v(" "),n("th",[t._v("Статус")]),t._v(" "),n("th",[t._v("Действие")])])]),t._v(" "),n("tbody",t._l(t.fields,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.alias))]),t._v(" "),n("td",[n("span",{class:1==e.is_active?"green--text":"red--text"},[t._v("\n                                        "+t._s(1==e.is_active?"Активно":"Неактивно")+"\n                                    ")])]),t._v(" "),n("td",[n("v-btn",{attrs:{icon:""},on:{click:function(n){return t.changeStatus(e)}}},[0==e.is_active?n("v-icon",[t._v("mdi-eye")]):t._e(),t._v(" "),1==e.is_active?n("v-icon",[t._v("mdi-eye-off")]):t._e()],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(n){t.delete_id=e.id,t.deleteModal=!0}}},[n("v-icon",[t._v("mdi-delete")])],1)],1)])})),0)]},proxy:!0}])})],1)])],1),t._v(" "),n("AddClientFieldModal",{attrs:{state:t.showModal},on:{onClose:function(e){t.showModal=!1}}}),t._v(" "),n("ConfirmationModal",{attrs:{state:t.deleteModal,message:"Вы действительно хотите удалить выбранное поле?"},on:{cancel:function(e){t.deleteModal=!1,t.delete_id=null},confirm:t.deleteItem}})],1)}),[],!1,null,"204012c2",null);e.default=u.exports},dXLZ:function(t,e,n){"use strict";n("F3ox")},toHN:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".modal-text[data-v-2adaa561]{margin-top:15px!important;font-size:16px}",""])}}]);