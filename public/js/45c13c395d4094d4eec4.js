(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{FN2t:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".text-white[data-v-4fd369fa]{color:#fff}",""])},Uz4x:function(t,e,a){"use strict";a("XCVA")},XCVA:function(t,e,a){var n=a("FN2t");"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,o);n.locals&&(t.exports=n.locals)},lwUq:function(t,e,a){"use strict";a.r(e);var n=a("o0o1"),o=a.n(n),r=a("BWV3"),s=a("wq7B"),i=a("hlRy"),c=a("6cC8");function l(t,e,a,n,o,r,s){try{var i=t[r](s),c=i.value}catch(t){return void a(t)}i.done?e(c):Promise.resolve(c).then(n,o)}var d={props:{state:{type:Boolean,default:!0}},components:{VTextField:i.a},data:function(){return{valid:!1,promoCode:{},loading:!1}},methods:{create:function(){var t,e=this;return(t=o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loading=!0,e.clearForm(),e.loading=!1,e.$emit("onSubmit");case 4:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(n,o){var r=t.apply(e,a);function s(t){l(r,n,o,s,i,"next",t)}function i(t){l(r,n,o,s,i,"throw",t)}s(void 0)}))})()},clearForm:function(){this.valid=!1,this.promoCode={}},closeModal:function(){this.clearForm(),this.$emit("onClose")}}},u=(a("Uz4x"),a("KHd+"));function v(t,e,a,n,o,r,s){try{var i=t[r](s),c=i.value}catch(t){return void a(t)}i.done?e(c):Promise.resolve(c).then(n,o)}var p={components:{AddManagerModal:Object(u.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"900",persistent:""},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[a("v-card",[a("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[a("span",{staticClass:"text-white"},[t._v("\n                Регистрация менеджера\n            ")]),t._v(" "),a("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""},on:{click:t.closeModal}},[a("v-icon",{attrs:{color:"white"}},[t._v("\n                    mdi-close\n                ")])],1)],1),t._v(" "),a("v-card-text",[t.loading?t._e():a("v-form",{staticClass:"p-2",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}})],1),t._v(" "),t.loading?t._e():a("v-card-actions",{staticClass:"p-2"},[a("v-btn",{attrs:{text:""},on:{click:t.closeModal}},[t._v("Отмена")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{text:"",color:"success",disabled:!t.valid},on:{click:t.create}},[a("b",[t._v("Создать")]),t._v(" "),a("v-icon",[t._v("mdi-check")])],1)],1),t._v(" "),a("v-progress-linear",{attrs:{indeterminate:"",active:t.loading,color:"green",absolute:"",bottom:""}})],1)],1)}),[],!1,null,"4fd369fa",null).exports},computed:{managers:function(){return this.$store.getters[s.a.MANAGERS]}},data:function(){return{search:"",overlay:!1,addModal:!1,headers:[{text:"ФИО",value:"name"},{text:"Телефон",value:"phone"},{text:"Дата рождения",value:"birthday"},{text:"Дата регистрации",value:"created_at"}]}},methods:{rowClick:function(t){return(e=o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(n,o){var r=e.apply(t,a);function s(t){v(r,n,o,s,i,"next",t)}function i(t){v(r,n,o,s,i,"throw",t)}s(void 0)}))})();var e},updatePage:function(t){this.$store.commit("setCurrentPage",t)},submitForm:function(){this.closeModal(),Object(r.a)("Менеджер успешно добавлен!")},closeModal:function(){this.addModal=!1},showModal:function(){this.addModal=!0}}},m={mounted:function(){this.$store.dispatch(c.a.GET_MANAGERS)},components:{ManagersTable:Object(u.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[t._v("\n        Менеджеры\n    ")]),t._v(" "),a("v-overlay",{model:{value:t.overlay,callback:function(e){t.overlay=e},expression:"overlay"}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"48",color:"primary"}})],1),t._v(" "),a("v-card-text",[a("h4",[t._v("Всего менеджеров: "+t._s(t.managers?t.managers.length:0))]),t._v(" "),a("v-btn",{staticClass:"my-3",attrs:{color:"primary"},on:{click:t.showModal}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-account-plus")]),t._v("\n            Добавить менеджера\n        ")],1),t._v(" "),a("v-spacer"),t._v(" "),t.managers?t._e():a("div",{staticClass:"text-center d-flex align-items-center justify-content-center",staticStyle:{"min-height":"651px"}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"65",color:"primary"}})],1),t._v(" "),t.managers?a("v-text-field",{attrs:{outlined:"",solo:"",clearable:"","append-icon":"mdi-account-search",label:"Поиск менеджера","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}):t._e(),t._v(" "),t.managers?a("v-data-table",{attrs:{"no-results-text":"Нет результатов","no-data-text":"Нет данных","footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:t.headers,items:t.managers,search:t.search},on:{"click:row":t.rowClick,"update:page":t.updatePage},scopedSlots:t._u([{key:"footer.page-text",fn:function(e){var a=e.pageStart,n=e.pageStop,o=e.itemsLength;return[t._v("\n                "+t._s(a)+"-"+t._s(n)+" из "+t._s(o)+"\n            ")]}}],null,!1,2127685872)}):t._e()],1),t._v(" "),a("add-manager-modal",{attrs:{state:t.addModal},on:{onSubmit:t.submitForm,onClose:t.closeModal}})],1)}),[],!1,null,null,null).exports}},f=Object(u.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("managers-table")}),[],!1,null,null,null);e.default=f.exports}}]);