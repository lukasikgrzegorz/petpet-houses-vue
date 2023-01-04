webpackJsonp([1],{"0KuB":function(e,t){},"3GbV":function(e,t){},BSCN:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),o=r("mvHQ"),i=r.n(o),s=r("Gu7T"),a=r.n(s),c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"logo"},[this._v("Pet🦊Houses")])])}]};var u=r("VU/8")({name:"Logo"},c,!1,function(e){r("S46q")},"data-v-fac5e52e",null).exports,l={name:"Button",props:{value:String}},p={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{on:{click:function(t){return e.$emit("action")}}},[e._v(e._s(e.value))])},staticRenderFns:[]};var d=r("VU/8")(l,p,!1,function(e){r("a8Z0")},"data-v-24c9d131",null).exports,v={name:"Modal",components:{Button:d},data:function(){return{houseType:"ground",housePet:"",housePrice:null}}},h={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"backdrop"},[r("div",{staticClass:"modal"},[r("button",{staticClass:"close-btn",on:{click:function(t){return e.$emit("close")}}},[e._v("X")]),e._v(" "),r("h2",{staticClass:"title"},[e._v("Create new position")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.$emit("response",{type:e.houseType,pet:e.housePet,price:e.housePrice})}}},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.houseType,expression:"houseType"}],attrs:{type:"radio",id:"ground",name:"house_type",value:"ground"},domProps:{checked:e._q(e.houseType,"ground")},on:{change:function(t){e.houseType="ground"}}}),e._v(" "),r("label",{attrs:{for:"ground"}},[e._v("Ground")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.houseType,expression:"houseType"}],attrs:{type:"radio",id:"above",name:"house_type",value:"above"},domProps:{checked:e._q(e.houseType,"above")},on:{change:function(t){e.houseType="above"}}}),e._v(" "),r("label",{attrs:{for:"above"}},[e._v("Above")])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.housePet,expression:"housePet"}],staticClass:"input",attrs:{type:"text",placeholder:"Pet",required:""},domProps:{value:e.housePet},on:{input:function(t){t.target.composing||(e.housePet=t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.housePrice,expression:"housePrice"}],staticClass:"input",attrs:{type:"number",placeholder:"Price PLN",required:""},domProps:{value:e.housePrice},on:{input:function(t){t.target.composing||(e.housePrice=t.target.value)}}}),e._v(" "),r("Button",{attrs:{value:"Add New Item"}})],1)])])},staticRenderFns:[]};var m={name:"Filters",components:{Button:d},data:function(){return{filterPet:"",filterType:""}}},f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"filters",on:{submit:function(t){return t.preventDefault(),e.$emit("response",{pet:e.filterPet,type:e.filterType})}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filterPet,expression:"filterPet"}],attrs:{type:"text",placeholder:"Find Pet"},domProps:{value:e.filterPet},on:{input:function(t){t.target.composing||(e.filterPet=t.target.value)}}}),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.filterType,expression:"filterType"}],attrs:{name:"houseTypeSelect",id:"houseTypeSelect"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.filterType=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[e._v("Any")]),e._v(" "),r("option",{attrs:{value:"ground"}},[e._v("Ground")]),e._v(" "),r("option",{attrs:{value:"above"}},[e._v("Above")])]),e._v(" "),r("Button",{attrs:{value:"Search"}})],1)},staticRenderFns:[]};var y={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"info"},[this._v("There are no items. Add a new one or change your query.")])},staticRenderFns:[]};var _=0,g=[{name:"ZŁ",value:1},{name:"€",value:4},{name:"$",value:5}],I={name:"App",components:{Logo:u,Button:d,Modal:r("VU/8")(v,h,!1,function(e){r("BSCN")},null,null).exports,Filters:r("VU/8")(m,f,!1,function(e){r("iEix")},"data-v-10372703",null).exports,Info:r("VU/8")({name:"Info"},y,!1,function(e){r("3GbV")},"data-v-00618438",null).exports},data:function(){return{showModal:!1,sortIsActive:!1,sortType:{id:!1,type:!1,pet:!1,price:!1},items:[],filterItems:[],currencyIndex:0,currency:"ZŁ",exchangeRate:1}},mounted:function(){var e=JSON.parse(localStorage.getItem("Items"));e&&(this.items=[].concat(a()(e)),this.filterItems=[].concat(a()(this.items)),_=this.items.length)},methods:{toogleModal:function(){this.showModal=!this.showModal},handleFilters:function(e){var t=this.items.filter(function(t){return t.pet.includes(e.pet)}),r=[];r=e.type?t.filter(function(t){return t.type===e.type}):[].concat(a()(t)),this.filterItems=[].concat(a()(r))},sortFoo:function(e){switch(e.target.id){case"id":this.sortType.id=!this.sortType.id,this.sortType.id?this.filterItems.sort(function(e,t){return t.id-e.id}):this.filterItems.sort(function(e,t){return e.id-t.id});break;case"price":this.sortType.price=!this.sortType.price,this.sortType.price?this.filterItems.sort(function(e,t){return t.price-e.price}):this.filterItems.sort(function(e,t){return e.price-t.price});break;case"type":this.sortType.type=!this.sortType.type,this.sortType.type?this.filterItems.sort(function(e,t){return t.type.localeCompare(e.type)}):this.filterItems.sort(function(e,t){return e.type.localeCompare(t.type)});break;case"pet":this.sortType.pet=!this.sortType.pet,this.sortType.pet?this.filterItems.sort(function(e,t){return t.pet.localeCompare(e.pet)}):this.filterItems.sort(function(e,t){return e.pet.localeCompare(t.pet)})}},resetSort:function(){this.sortIsActive=!1,this.filterPet="",this.filterType="",this.sortType={id:!1,type:!1,pet:!1,price:!1},this.filterItems=[].concat(a()(this.items))},handleNewItem:function(e){this.toogleModal(),this.items.push({id:_++,type:e.type,pet:e.pet,price:e.price}),localStorage.setItem("Items",i()(this.items)),this.filterItems=[].concat(a()(this.items)),this.resetSort()},changeCurrency:function(){this.currencyIndex===g.length-1?this.currencyIndex=0:this.currencyIndex++,this.currency=g[this.currencyIndex].name,this.exchangeRate=g[this.currencyIndex].value}}},T={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e.showModal?r("Modal",{on:{response:function(t){return e.handleNewItem(t)},close:e.toogleModal}}):e._e(),e._v(" "),r("Logo"),e._v(" "),r("div",{staticClass:"btn-holder"},[r("Button",{attrs:{value:"Add New Item"},on:{action:e.toogleModal}}),e._v(" "),r("Button",{attrs:{value:"Reset Filters"},on:{action:e.resetSort}}),e._v(" "),r("Button",{attrs:{value:"Change Currency"},on:{action:e.changeCurrency}})],1),e._v(" "),r("Filters",{on:{response:function(t){return e.handleFilters(t)}}}),e._v(" "),this.filterItems.length>0?r("table",[r("tr",[r("th",{attrs:{id:"id"},on:{click:e.sortFoo}},[e._v("Id")]),e._v(" "),r("th",{attrs:{id:"pet"},on:{click:e.sortFoo}},[e._v("Pet")]),e._v(" "),r("th",{attrs:{id:"type"},on:{click:e.sortFoo}},[e._v("Type")]),e._v(" "),r("th",{attrs:{id:"price"},on:{click:e.sortFoo}},[e._v(e._s("Price ("+this.currency+")"))])]),e._v(" "),e._l(e.filterItems,function(t){return r("tr",{key:t.id},[r("td",[e._v(e._s(t.id))]),e._v(" "),r("td",[e._v(e._s(t.pet))]),e._v(" "),r("td",[e._v(e._s(t.type))]),e._v(" "),r("td",[e._v(e._s(t.price*e.exchangeRate+" "+e.currency))])])})],2):e._e(),e._v(" "),0===this.filterItems.length?r("Info"):e._e()],1)},staticRenderFns:[]};var P=r("VU/8")(I,T,!1,function(e){r("0KuB")},null,null).exports,b=r("/ocq");n.a.use(b.a);var x=new b.a({routes:[{path:"/"}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:x,components:{App:P},template:"<App/>"})},S46q:function(e,t){},a8Z0:function(e,t){},iEix:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ebea435b50212a9a19bc.js.map