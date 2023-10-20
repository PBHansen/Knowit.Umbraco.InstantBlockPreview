(function(){"use strict";var t={9551:function(t,e,n){n(7658);var a=n(9242),r=n(3396);function o(t,e,n,a,o,i){const s=(0,r.up)("router-view"),c=(0,r.up)("PreviewLayout");return(0,r.wg)(),(0,r.iD)(r.HY,null,[t.isBackoffice?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(s,{key:0})),t.isBackoffice&&t.previewData?((0,r.wg)(),(0,r.j4)(c,{key:1,data:t.previewData},null,8,["data"])):(0,r.kq)("",!0)],64)}const i={key:0};function s(t,e,n,a,o,s){return t.formattedData?((0,r.wg)(),(0,r.iD)("div",i,[((0,r.wg)(),(0,r.j4)((0,r.LL)(s.getComponentName(t.formattedData.content.contentType)),{data:t.formattedData},null,8,["data"]))])):(0,r.kq)("",!0)}var c=n(7139);const u=["src"],d=(0,r._)("br",null,null,-1);function l(t,e,n,a,o,i){return(0,r.wg)(),(0,r.iD)("div",{style:(0,c.j5)("background-color:#"+i.settings.backgroundColor)},[(0,r._)("h2",null,(0,c.zw)(i.content.text),1),i.content.image&&i.content.image.length?((0,r.wg)(),(0,r.iD)("img",{key:0,id:"image",src:i.content.image[0].url},null,8,u)):(0,r.kq)("",!0),d,(0,r.Uk)(" "+(0,c.zw)(i.content.date)+" Hejsa! ",1)],4)}var p={props:{data:Object},computed:{content(){return this.data.content.properties},settings(){return this.data.settings.properties}}},f=n(89);const g=(0,f.Z)(p,[["render",l]]);var h=g;function m(t,e,n,a,o,i){return(0,r.wg)(),(0,r.iD)("h1",null,(0,c.zw)(i.content.headline),1)}var w={props:{data:Object},computed:{content(){return this.data.content.properties},settings(){return this.data.settings.properties}}};const v=(0,f.Z)(w,[["render",m]]);var D=v;const k=["innerHTML"];function y(t,e,n,a,o,i){return(0,r.wg)(),(0,r.iD)("div",{innerHTML:i.content.richText.markup},null,8,k)}var b={props:{data:Object},computed:{content(){return this.data.content.properties},settings(){return this.data.settings.properties}}};const j=(0,f.Z)(b,[["render",y]]);var C=j,O={props:{data:Object},components:{UmbBlockGridDemoHeadlineBlock:D,UmbBlockGridDemoRichTextBlock:C,GridTest:h},data:function(){return{formattedData:null}},watch:{data:function(){this.formattedData=this.convertJson(this.data)}},methods:{lowerCaseKeys(t){return t instanceof Array?t.map((t=>this.lowerCaseKeys(t))):null!==t&&t.constructor===Object?Object.fromEntries(Object.entries(t).map((([t,e])=>[t.charAt(0).toLowerCase()+t.slice(1),this.lowerCaseKeys(e)]))):t},convertJson(t){const e=t.Items[0],n=this.lowerCaseKeys(e.Content),a=this.lowerCaseKeys(e.Settings);return{content:n,settings:a}},getComponentName(t){const e=t.charAt(0).toUpperCase()+t.slice(1);return e}},mounted(){this.formattedData=this.convertJson(this.data)}};const L=(0,f.Z)(O,[["render",s]]);var B=L,_={name:"App",data:function(){return{isBackoffice:!0,previewData:null}},mounted(){console.log("mount",this.isBackoffice),console.log("seed",this.$seed),this.isBackoffice&&window.addEventListener(`event-${this.$seed}`,(t=>{this.reloadPreview(JSON.parse(t.detail))}))},methods:{reloadPreview(t){this.previewData=t}},components:{PreviewLayout:B}};const T=(0,f.Z)(_,[["render",o]]);var x=T,H=n(2483);const P={key:0};function K(t,e,n,a,o,i){return o.pageData&&o.pageData.properties?((0,r.wg)(),(0,r.iD)("div",P,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.pageData.properties,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{key:e},[((0,r.wg)(),(0,r.j4)((0,r.LL)(i.getComponentName(e)),{data:t},null,8,["data"]))])))),128))])):(0,r.kq)("",!0)}const q={key:0},E={key:0,class:"grid"};function N(t,e,n,a,o,i){const s=(0,r.up)("DynamicContent");return n.data?((0,r.wg)(),(0,r.iD)("div",q,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.data.items,(t=>((0,r.wg)(),(0,r.iD)("section",{class:"grid",key:t},[(0,r._)("div",{class:(0,c.C_)("grid-col-"+t.columnSpan)},[(0,r.Wm)(s,{data:t},null,8,["data"]),t.areas.length?((0,r.wg)(),(0,r.iD)("section",E,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.areas,(t=>((0,r.wg)(),(0,r.iD)("div",{class:(0,c.C_)("grid-col-"+t.columnSpan),key:t},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.items,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t},[(0,r.Wm)(s,{data:t},null,8,["data"])])))),128))],2)))),128))])):(0,r.kq)("",!0)],2)])))),128))])):(0,r.kq)("",!0)}const U={key:0};function Z(t,e,n,a,o,i){return o.pageData&&o.pageData.content?((0,r.wg)(),(0,r.iD)("div",U,[((0,r.wg)(),(0,r.j4)((0,r.LL)(i.getComponentName(o.pageData.content.contentType)),{data:o.pageData},null,8,["data"]))])):(0,r.kq)("",!0)}var G={components:{UmbBlockGridDemoHeadlineBlock:D,UmbBlockGridDemoRichTextBlock:C,GridTest:h},props:{data:Object},data(){return{pageData:null}},mounted(){this.pageData=this.data},methods:{getComponentName(t){const e=t.charAt(0).toUpperCase()+t.slice(1);return e}}};const $=(0,f.Z)(G,[["render",Z]]);var A=$,S={components:{DynamicContent:A},props:{data:Object}};const Y=(0,f.Z)(S,[["render",N],["__scopeId","data-v-0b8ef952"]]);var J=Y;async function M(t){try{const e=await fetch(`/umbraco/delivery/api/v1/content/item/${t}`);if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return await e.json()}catch(e){return console.error("Fetch error: ",e),null}}var z={components:{Grid:J},props:{url:{type:String},data:Object},data(){return{pageData:null}},created(){this.pageData=this.$route.params.data},watch:{async $route(t,e){t.fullPath!==e.fullPath&&(this.pageData=await M(t.href))}},methods:{getComponentName(t){const e=t.charAt(0).toUpperCase()+t.slice(1);return e}}};const F=(0,f.Z)(z,[["render",K]]);var I=F;const R=[{path:"/:pathMatch(.*)*",name:"DynamicLayout",component:I,beforeEnter:async(t,e,n)=>{try{t.params.data=await M(t.path),n()}catch(a){console.error(a),n(a)}}}];(0,H.p7)({history:(0,H.PO)("/"),routes:R});window.addEventListener("init-preview-app",(t=>{const e=t.detail,n=(0,a.ri)(x);n.config.globalProperties.$seed=e.seed;let r=new CustomEvent("ready-to-load-preview-app"+e.seed);window.dispatchEvent(r),window["init-preview-app"+e.seed]=function(t){t&&n.mount(t)}}))}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,o){if(!a){var i=1/0;for(d=0;d<t.length;d++){a=t[d][0],r=t[d][1],o=t[d][2];for(var s=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(s=!1,o<i&&(i=o));if(s){t.splice(d--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,o,i=a[0],s=a[1],c=a[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var d=c(n)}for(e&&e(a);u<i.length;u++)o=i[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(d)},a=self["webpackChunkvue_headless_umbraco"]=self["webpackChunkvue_headless_umbraco"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9551)}));a=n.O(a)})();
//# sourceMappingURL=app.js.map