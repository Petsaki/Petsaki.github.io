"use strict";(self["webpackChunklottery_app"]=self["webpackChunklottery_app"]||[]).push([[217],{3562:function(e,t,s){s.d(t,{Z:function(){return c}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-ball",attrs:{tabindex:"0"}},[e._t("default",(function(){return[e._v(" "+e._s(e.numProp)+" ")]}))],2)},n=[],l=(s(9653),{props:{numProp:{number:Number,require:!0}}}),r=l,i=s(1001),o=(0,i.Z)(r,a,n,!1,null,null,null),c=o.exports},7217:function(e,t,s){s.r(t),s.d(t,{default:function(){return x}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return this.$store.getters.IS_LOGGEDIN?s("div",{staticClass:"max-w-7xl mx-auto"},[s("div",{staticClass:"flex flex-col py-5 px-3"},[s("base-button",{staticClass:"pl-8 mb-5 flex",nativeOn:{click:function(t){return e.goBack.apply(null,arguments)}}},[e._v("❮ Go back")]),s("circle-loading",{staticClass:"mx-auto",attrs:{loadingProp:e.loading}}),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"relative w-full flex flex-col items-center box-border bg-white rounded-md shadow-md"},[s("div",{staticClass:"flex flex-col items-center z-30"},[s("span",{staticClass:"font-semibold flex-1 flex justify-end items-center"},[e._v("Draw date:")]),s("div",{staticClass:"flex-1"},[e._v(" "+e._s(e.drawTime?e.drawTime:""))]),s("span",{staticClass:"font-semibold flex-1 flex justify-end items-center"},[e._v("Status:")]),s("div",{staticClass:"flex-1"},[e._v(" "+e._s(0!==e.moneyWon?"Won":"Lost"))]),s("span",{staticClass:"font-semibold flex-1 flex justify-end items-center"},[e._v("Money won:")]),s("div",{staticClass:"flex-1"},[e._v(" "+e._s(e.moneyWon>0?e.moneyWon:"-"))])]),s("div",{staticClass:"flex gap-5 mt-5 w-full relative md:absolute bg-white rounded-md shadow-md"},[s("div",{staticClass:"flex flex-col items-center flex-1 "},[s("span",{staticClass:"font-semibold mb-3 text-center"},[e._v("Drawed Numbers:")]),e._l(e.drawedNums,(function(e){return s("div",{key:e,staticClass:"flex flex-col mb-3"},[s("base-ball",{attrs:{numProp:e}})],1)}))],2),s("div",{staticClass:"flex flex-col items-center flex-1"},[s("span",{staticClass:"font-semibold mb-3 text-center"},[e._v("Your Numbers:")]),e._l(e.selectedNums,(function(t){return s("div",{key:t,staticClass:"flex flex-col mb-3"},[s("base-ball",{class:[e.drawedNums.includes(t)?"shadow-3d-match sm:shadow-3d-match-sm":"shadow-3d sm:shadow-3d-sm"],attrs:{numProp:t}})],1)}))],2)])])],1)]):e._e()},n=[],l=s(6198),r=(s(8975),s(9600),s(7042),s(4916),s(3123),s(6926)),i=s(4498),o=s(3562),c=s(4137),d={components:{"circle-loading":i.Z,"base-ball":o.Z,"base-button":c.Z},data:function(){return{id:this.$route.params,selectedNums:this.$store.getters.GET_HISTORY_PLAYERNUMS,drawedNums:this.$store.getters.GET_HISTORY_DRAWEDNUMS,moneyWon:this.$store.getters.GET_HISTORY_MONEYWON,drawTime:this.$store.getters.GET_HISTORY_DRAWTIME,loading:!0}},methods:{goBack:function(){history.back()}},created:function(){var e=this;return(0,l.Z)(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.selectedNums.length<5)){t.next=16;break}if(!e.$user){t.next=16;break}return console.log("FIREBASE CALL"),t.prev=3,t.next=6,(0,r.QT)((0,r.JU)((0,r.ad)(),"users",e.$user.uid,"history",e.id.id));case 6:s=t.sent,e.selectedNums=s.data().playerNums,e.drawedNums=s.data().drawNums,e.moneyWon=s.data().totalWon,e.drawTime=s.data().drawTime.toDate().toUTCString().split(" ").slice(0,5).join(" "),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),e.$router.push({path:"/history"});case 16:e.loading=!1;case 17:case"end":return t.stop()}}),t,null,[[3,13]])})))()},beforeDestroy:function(){this.$store.dispatch("REMOVE_HISTORYDETAILS")}},u=d,m=s(1001),f=(0,m.Z)(u,a,n,!1,null,null,null),x=f.exports}}]);
//# sourceMappingURL=217-legacy.f5f52313.js.map