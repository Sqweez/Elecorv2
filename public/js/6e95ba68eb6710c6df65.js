(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+F2W":function(t,e,i){"use strict";var s={props:{state:{type:Boolean,default:!1},title:{type:String,default:"Подтвердите действие"},message:{type:String,required:!0},okMessage:{type:String,default:"ОК"},cancelMessage:{type:String,default:"Отмена"}},methods:{onConfirm:function(){this.$emit("confirm")},onCancel:function(){this.$emit("cancel")}}},n=(i("dXLZ"),i("KHd+")),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[i("v-card",[i("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[i("span",{staticClass:"white--text"},[t._v(t._s(t.title))]),t._v(" "),i("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""}},[i("v-icon",{attrs:{color:"white"},on:{click:t.onCancel}},[t._v("\n                        mdi-close\n                    ")])],1)],1),t._v(" "),i("v-card-text",{staticClass:"modal-text"},[t._v("\n                "+t._s(t.message)+"\n            ")]),t._v(" "),i("v-divider"),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{text:""},on:{click:t.onCancel}},[t._v("\n                    "+t._s(t.cancelMessage)+"\n                ")]),t._v(" "),i("v-btn",{attrs:{color:"success",text:""},on:{click:t.onConfirm}},[t._v("\n                    "+t._s(t.okMessage)+"\n                    "),i("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)],1)}),[],!1,null,"2adaa561",null);e.a=o.exports},"13rT":function(t,e,i){var s=i("tWGx");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(s,n);s.locals&&(t.exports=s.locals)},HKfM:function(t,e,i){"use strict";var s=i("o0o1"),n=i.n(s),o=i("+z1p"),a=i.n(o),r=(i("GVEN"),i("ootA")),c=i("6cC8");function l(t,e,i,s,n,o,a){try{var r=t[o](a),c=r.value}catch(t){return void i(t)}r.done?e(c):Promise.resolve(c).then(s,n)}function d(t){return function(){var e=this,i=arguments;return new Promise((function(s,n){var o=t.apply(e,i);function a(t){l(o,s,n,a,r,"next",t)}function r(t){l(o,s,n,a,r,"throw",t)}a(void 0)}))}}var u,v,h,p,f,m={props:{state:{type:Boolean,default:!1},editMode:{type:Boolean,default:!1},title:{type:String,default:"Добавление новости"},okButton:{type:String,default:"Создать"},serviceId:{type:Number,default:null}},watch:{state:(f=d(n.a.mark((function t(e){var i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!this.editMode||null===this.serviceId){t.next=9;break}return t.next=3,this.$store.getters.stock(this.serviceId);case 3:i=t.sent,this.stock.title=i.title,this.stock.body=i.body||"",this.stock.image=i.image,this.stockType=null==i.service_id?"stock":"banner",this.stock.service_id=i.service_id;case 9:case"end":return t.stop()}}),t,this)}))),function(t){return f.apply(this,arguments)})},data:function(){return{loading:!1,editor:a.a,stockType:"stock",editorConfig:{language:"ru",height:700,autoGrow_minHeight:400},stock:{title:"",body:"",image:null,service_id:null}}},computed:{services:function(){return this.$store.getters.getMobileServices}},methods:{onSubmit:(p=d(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.editMode){t.next=5;break}return t.next=3,this.editStock();case 3:t.next=7;break;case 5:return t.next=7,this.createStock();case 7:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)}),editStock:(h=d(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,this.stock.service_id="banner"===this.stockType?this.stock.service_id:null,this.stock.body="stock"===this.stockType?this.stock.body:null,t.next=5,this.$store.dispatch(c.a.EDIT_STOCK,{id:this.serviceId,image:this.stock.image,body:this.stock.body||null,title:this.stock.title,service_id:this.stock.service_id});case 5:this.$emit("onSave"),this.clearData();case 7:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)}),createStock:(v=d(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,this.stock.service_id="banner"===this.stockType?this.stock.service_id:null,this.stock.body="stock"===this.stockType?this.stock.body:null,t.next=5,this.$store.dispatch(c.a.CREATE_STOCK,{image:this.stock.image,body:this.stock.body,title:this.stock.title,service_id:this.stock.service_id});case 5:this.$emit("onSave"),this.clearData();case 7:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),choosePhoto:function(){this.$refs.fileInput.click()},uploadPhoto:(u=d(n.a.mark((function t(e){var i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(r.a)(e.target.files[0]);case 2:i=t.sent,this.stock.image=i.data;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return u.apply(this,arguments)}),clearData:function(){this.stock={title:"",body:"",image:null,service_id:null},this.stockType="stock",this.loading=!1}}},k=i("KHd+"),_=Object(k.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{"max-width":"800",persistent:""},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[i("v-card",[i("v-card-title",{staticClass:"headline blue darken-1 justify-content-between"},[i("span",{staticClass:"white--text"},[t._v(t._s(t.title))]),t._v(" "),i("v-btn",{staticClass:"float-right",attrs:{icon:"",text:""},on:{click:function(e){return t.$emit("onClose")}}},[i("v-icon",{attrs:{color:"white"}},[t._v("\n                    mdi-close\n                ")])],1)],1),t._v(" "),i("v-card-text",[t.loading?t._e():i("v-form",{staticClass:"p-2"},[i("v-text-field",{attrs:{label:"Заголовок"},model:{value:t.stock.title,callback:function(e){t.$set(t.stock,"title",e)},expression:"stock.title"}}),t._v(" "),i("v-radio-group",{model:{value:t.stockType,callback:function(e){t.stockType=e},expression:"stockType"}},[i("v-radio",{key:"1",attrs:{label:"Акция",value:"stock"}}),t._v(" "),i("v-radio",{key:"2",attrs:{label:"Баннер",value:"banner"}})],1),t._v(" "),"stock"===t.stockType?i("div",[i("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig,rows:"10"},model:{value:t.stock.body,callback:function(e){t.$set(t.stock,"body",e)},expression:"stock.body"}})],1):t._e(),t._v(" "),"banner"===t.stockType?i("v-select",{attrs:{items:t.services,"item-text":"name","item-value":"id"},model:{value:t.stock.service_id,callback:function(e){t.$set(t.stock,"service_id",e)},expression:"stock.service_id"}}):t._e(),t._v(" "),i("input",{ref:"fileInput",staticClass:"d-none",attrs:{type:"file"},on:{change:t.uploadPhoto}}),t._v(" "),t.stock.image?i("img",{staticClass:"mt-2 mb-2",staticStyle:{"max-width":"400px",height:"auto"},attrs:{src:"../storage/"+t.stock.image,alt:""}}):t._e(),t._v(" "),i("div",[i("v-btn",{staticClass:"mt-4",attrs:{color:"primary","max-width":"400"},on:{click:t.choosePhoto}},[t._v("Загрузите фото\n                        "),i("v-icon",{staticClass:"ml-2"},[t._v("mdi-upload")])],1)],1)],1)],1),t._v(" "),i("v-divider"),t._v(" "),t.loading?t._e():i("v-card-actions",[i("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("onClose")}}},[t._v("Отмена")]),t._v(" "),i("v-spacer"),t._v(" "),i("v-btn",{attrs:{text:"",color:"success",disabled:null===t.stock.image},on:{click:t.onSubmit}},[i("b",[t._v(t._s(t.okButton))]),t._v(" "),i("v-icon",[t._v("mdi-check")])],1)],1),t._v(" "),i("v-progress-linear",{attrs:{indeterminate:"",active:t.loading,color:"green",absolute:"",bottom:""}})],1)],1)}),[],!1,null,"d25f9e90",null);e.a=_.exports},dXLZ:function(t,e,i){"use strict";var s=i("13rT");i.n(s).a},kxSr:function(t,e,i){"use strict";var s=i("o0o1"),n=i.n(s),o=i("BWV3"),a=i("HKfM"),r=i("+F2W"),c=i("6cC8");function l(t,e,i,s,n,o,a){try{var r=t[o](a),c=r.value}catch(t){return void i(t)}r.done?e(c):Promise.resolve(c).then(s,n)}function d(t){return function(){var e=this,i=arguments;return new Promise((function(s,n){var o=t.apply(e,i);function a(t){l(o,s,n,a,r,"next",t)}function r(t){l(o,s,n,a,r,"throw",t)}a(void 0)}))}}var u,v,h={components:{ConfirmationModal:r.a,AddNewsModal:a.a},props:{isAdmin:{type:Boolean}},computed:{stocks:function(){return this.$store.getters.stocks},headers:function(){var t=[{text:"Наименование",value:"title",sortable:!1},{text:"Дата создания",value:"date",sortable:!1},{text:"Тип",value:"type",sortable:!1},{text:"Статус",value:"status",sortable:!1},{text:"Баннер",value:"image",sortable:!1,align:"center"}];return this.isAdmin&&t.push({text:"Действие",value:"action",sortable:!1}),t}},data:function(){return{modalKey:0,currentStock:null,modalMessage:"",deleteModal:!1,editId:null,hideModal:!1,addModal:!1,editModal:!1,search:""}},methods:{showDeleteModal:function(t){this.currentStock=t,this.deleteModal=!0},showHideModal:function(t){this.currentStock=t,this.currentStock.is_visible?this.modalMessage="Вы действительно хотите скрыть данную акцию?":this.modalMessage="Вы действительно хотите показать данную акцию?",this.hideModal=!0},showEditModal:function(t){this.editId=t.id,this.editModal=!0},closeDeleteModal:function(){this.deleteModal=!1},closeHideModal:function(){this.hideModal=!1},closeAddModal:function(){this.addModal=!1,this.modalKey++},closeEditModal:function(){this.editModal=!1,this.editId=null},stockCreated:function(){this.addModal=!1,Object(o.a)("Акция успешно добавлена!"),this.modalKey++,this.currentStock=null},stockEdited:function(){this.editModal=!1,Object(o.a)("Акция успешно обновлена!"),this.editId=null},deleteStock:(v=d(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch(c.a.DELETE_STOCK,this.currentStock.id);case 2:this.currentStock=null,this.deleteModal=!1;case 4:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),changeStockStatus:(u=d(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.hideModal=!1,t.next=3,this.$store.dispatch(c.a.CHANGE_STOCK_STATUS,{id:this.currentStock.id,is_visible:!this.currentStock.is_visible});case 3:Object(o.a)("Акция успешно обновлена!"),this.currentStock=null;case 5:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)})}},p=i("KHd+"),f=Object(p.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"d-flex justify-content-between"},[t.isAdmin?i("v-btn",{staticClass:"button-add",attrs:{color:"primary"}},[t._v("\n            Экспорт данных\n            "),i("v-icon",[t._v("mdi-file-excel-box")])],1):t._e(),t._v(" "),t.isAdmin?i("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.addModal=!0}}},[t._v("\n            Добавить баннер\n            "),i("v-icon",[t._v("mdi-plus")])],1):t._e()],1),t._v(" "),i("v-spacer"),t._v(" "),i("v-spacer"),t._v(" "),i("v-text-field",{staticClass:"mb-2",attrs:{clearable:"","append-icon":"mdi-account-search",label:"Поиск","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),t.stocks?i("v-data-table",{attrs:{"no-results-text":"Нет результатов","no-data-text":"Нет данных","footer-props":{"items-per-page-options":[10,15,{text:"Все",value:-1}],"items-per-page-text":"Записей на странице"},headers:t.headers,search:t.search,items:t.stocks},scopedSlots:t._u([{key:"item.image",fn:function(t){var e=t.item;return[i("img",{staticStyle:{"max-width":"200px",height:"auto"},attrs:{src:"../storage/"+e.image,alt:""}})]}},{key:"item.type",fn:function(e){var s=e.item;return[i("span",[t._v(t._s(null===s.service_id?"Акция":"Баннер: "+s.service))])]}},{key:"item.status",fn:function(e){return[e.item.is_visible?i("h4",{staticClass:"green--text"},[t._v("Показывается")]):i("h4",{staticClass:"red--text"},[t._v("Скрыто")])]}},{key:"item.action",fn:function(e){var s=e.item;return[i("v-btn",{attrs:{icon:""},on:{click:function(e){return t.showHideModal(s)}}},[s.is_visible?i("v-icon",[t._v("mdi-eye-off")]):i("v-icon",[t._v("mdi-eye")])],1),t._v(" "),i("v-btn",{attrs:{icon:""},on:{click:function(e){return t.showEditModal(s)}}},[i("v-icon",[t._v("mdi-pencil-outline")])],1),t._v(" "),i("v-btn",{attrs:{icon:""},on:{click:function(e){return t.showDeleteModal(s)}}},[i("v-icon",[t._v("mdi-delete")])],1)]}},{key:"footer.page-text",fn:function(e){var i=e.pageStart,s=e.pageStop,n=e.itemsLength;return[t._v("\n            "+t._s(i)+"-"+t._s(s)+" из "+t._s(n)+"\n        ")]}}],null,!1,2187396637)}):t._e(),t._v(" "),t.isAdmin?i("ConfirmationModal",{attrs:{message:"Вы действительно хотите удалить выбранную акцию?",state:t.deleteModal,"ok-message":"Удалить"},on:{cancel:t.closeDeleteModal,confirm:t.deleteStock}}):t._e(),t._v(" "),t.isAdmin?i("ConfirmationModal",{attrs:{"ok-message":"Скрыть",message:t.modalMessage,state:t.hideModal},on:{cancel:t.closeHideModal,confirm:t.changeStockStatus}}):t._e(),t._v(" "),t.isAdmin?i("AddNewsModal",{attrs:{title:"Добавление баннера",state:t.addModal},on:{onClose:t.closeAddModal,onSave:t.stockCreated}}):t._e(),t._v(" "),t.isAdmin?i("AddNewsModal",{attrs:{title:"Редактирование баннера","service-id":t.editId,"ok-button":"Сохранить","edit-mode":!0,state:t.editModal},on:{onClose:t.closeEditModal,onSave:t.stockEdited}}):t._e()],1)}),[],!1,null,"3eb0e322",null);e.a=f.exports},ootA:function(t,e,i){"use strict";i.d(e,"a",(function(){return l})),i.d(e,"b",(function(){return u}));var s=i("o0o1"),n=i.n(s),o=i("vDqi"),a=i.n(o);function r(t,e,i,s,n,o,a){try{var r=t[o](a),c=r.value}catch(t){return void i(t)}r.done?e(c):Promise.resolve(c).then(s,n)}function c(t){return function(){var e=this,i=arguments;return new Promise((function(s,n){var o=t.apply(e,i);function a(t){r(o,s,n,a,c,"next",t)}function c(t){r(o,s,n,a,c,"throw",t)}a(void 0)}))}}function l(t){return d.apply(this,arguments)}function d(){return(d=c(n.a.mark((function t(e){var i,s,o,r=arguments;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r.length>1&&void 0!==r[1]?r[1]:"file",(s=new FormData).append(i,e),o={headers:{"content-type":"multipart/form-data"}},t.next=6,a.a.post("/api/upload",s,o);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t){return v.apply(this,arguments)}function v(){return(v=c(n.a.mark((function t(e){var i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=new FormData).append("file",e),t.next=4,a.a.post("/api/delete",i);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},tWGx:function(t,e,i){(t.exports=i("I1BE")(!1)).push([t.i,".modal-text[data-v-2adaa561]{margin-top:15px!important;font-size:16px}",""])}}]);