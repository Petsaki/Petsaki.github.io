"use strict";(self["webpackChunklottery_app"]=self["webpackChunklottery_app"]||[]).push([[181],{3562:function(e,t,s){s.d(t,{Z:function(){return u}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-ball",attrs:{tabindex:"0"}},[e._t("default",(function(){return[e._v(" "+e._s(e.numProp)+" ")]}))],2)},a=[],l={props:{numProp:{number:Number,require:!0}}},i=l,o=s(1001),n=(0,o.Z)(i,r,a,!1,null,null,null),u=n.exports},8248:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return this.$store.getters.IS_LOGGEDIN?s("div",[s("div",{staticClass:"flex flex-col max-w-7xl mx-auto py-5"},[s("div",{staticClass:"flex flex-col md:flex-row"},[s("div",{staticClass:"bg-white rounded-md shadow-md m-3 md:flex-[1_1_70%] py-5 px-3"},[s("div",{staticClass:"grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-y-6 sm:gap-y-8 align-middle self-center justify-items-center font-semibold"},e._l(30,(function(t){return s("div",{key:t},[s("base-ball",{ref:"boardNum"+t,refInFor:!0,staticClass:"app-ball cursor-pointer hover:scale-105",attrs:{numProp:t},nativeOn:{click:function(s){return e.choosedNum(t)}}})],1)})),0)]),s("div",{ref:"playerNums",staticClass:"md:flex-[1_1_30%] bg-white rounded-md shadow-md m-3 py-5 px-3",class:[e.selectedNums.length>0?"block":"hidden md:block"]},[s("div",{staticClass:"grid grid-cols-4 sm:grid-cols-5 md:grid-rows-1 md:grid-cols-1 md:grid-flow-row gap-y-8 align-middle self-center justify-items-center text-lg font-semibold"},e._l(e.selectedNums,(function(t){return s("div",{key:t,staticClass:"relative flex justify-center items-center"},[s("base-ball",{staticClass:"app-ball",attrs:{numProp:t}}),s("span",{staticClass:"absolute -top-2 -right-2 cursor-pointer text-sm sm:text-base text-gray-900",attrs:{tabindex:"0"},on:{click:function(s){return e.removeNum(t)},keypress:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.removeNum(t)}}},[e._v("✕")])],1)})),0)])]),s("div",{staticClass:"flex flex-col-reverse md:flex-row"},[s("div",{staticClass:"md:flex-[1_1_70%]"}),s("div",{ref:"playerNums",staticClass:"md:flex-[1_1_30%] relative py-5 px-3 flex justify-start gap-5 items-center text-white flex-wrap xl:flex-nowrap"},[s("base-button",{staticClass:"bg-blue-700 flex justify-start items-start relative group after:absolute after:cursor-default after:pointer-events-none outline-none focus-visible:outline-black focus-visible:outline-2 \n                    after:content-['It_will_fill_the_remaining_numbers.'] after:text-white  after:w-full after:h-full after:text-sm  after:bg-gray-600/80 after:-translate-y-[123%] after:py-5 after:px-[2px] after:top-0 after:rounded-md after:flex after:justify-center after:items-center after:whitespace-pre-wrap after:right-1/2 after:translate-x-1/2\n                    before:content[''] before:absolute  before:right-1/2 before:translate-x-1/2 before:bg-transparent before:cursor-default before:top-0 before:pointer-events-none before:-translate-y-[120%] before:border-r-8 before:border-l-8 before:border-t-8 before:border-r-transparent before:border-l-transparent before:border-t-gray-600/80\n                    after:delay-[.15s] hover:after:delay-500 focus-visible:after:delay-500 after:transition-opacity after:opacity-0 hover:after:opacity-100 focus-visible:after:opacity-100\n                    before:delay-[.15s] hover:before:delay-500 focus-visible:before:delay-500 before:transition-opacity before:opacity-0 hover:before:opacity-100 focus-visible:before:opacity-100",nativeOn:{click:function(t){return e.addRandomNums.apply(null,arguments)}}},[e._v(" Random Numbers ")]),s("base-button",{directives:[{name:"show",rawName:"v-show",value:this.selectedNums.length,expression:"this.selectedNums.length"}],staticClass:"bg-blue-700",nativeOn:{click:function(t){return e.clearSelectedNums.apply(null,arguments)}}},[e._v(" Clear all ")]),e.showBtn?s("base-button",{staticClass:"bg-orange-500 xl::absolute right-5",nativeOn:{click:function(t){return e.goAtDraw.apply(null,arguments)}}},[e._v(" Play! ")]):e._e()],1)])])]):e._e()},a=[],l=(s(6699),s(3562)),i=s(4137),o={name:"AppHome",components:{"base-button":i.Z,"base-ball":l.Z},data(){return{selectedNums:[],showBtn:!1}},methods:{choosedNum(e){if(!this.selectedNums.includes(e)){if(this.$store.dispatch("SET_TOAST",{show:!1,msg:"",type:""}),this.selectedNums.length<5)return this.$refs["boardNum"+e][0].$el.classList.value="app-ball grayscale",this.selectedNums.push(e),5===this.selectedNums.length&&(this.showBtn=!0),void this.$store.commit("ADD_PLAYERNUMS",this.selectedNums);setTimeout((()=>{this.$store.dispatch("SET_TOAST",{show:!0,msg:"Only 5 numbers you can choose!",type:"warning"})}),100)}},removeNum(e){this.$store.dispatch("SET_TOAST",{show:!1,msg:"",type:""}),this.showBtn=!1,this.selectedNums=this.selectedNums.filter((t=>t!==e)),this.$store.commit("ADD_PLAYERNUMS",this.selectedNums),this.$refs["boardNum"+e][0].$el.classList.value="app-ball cursor-pointer hover:scale-105"},goAtDraw(){this.$root.$emit("headerComponent")},addRandomNums(){while(this.selectedNums.length<5){var e=Math.ceil(29*Math.random()+1);while(this.selectedNums.includes(e))e=Math.ceil(29*Math.random()+1);this.choosedNum(e)}},clearSelectedNums(){while(this.selectedNums.length)this.removeNum(this.selectedNums.pop())}},created(){this.selectedNums=this.$store.getters.GET_PLAYERNUMS,null!==this.selectedNums&&5===this.selectedNums.length&&(this.showBtn=!0)},mounted(){this.$nextTick((function(){this.$store.getters.GET_DRAWINPROG&&this.$router.push({path:"/liveDraw"}),this.selectedNums&&this.selectedNums.map((e=>{this.$refs["boardNum"+e][0].$el.classList.value="app-ball grayscale"}))}))}},n=o,u=s(1001),c=(0,u.Z)(n,r,a,!1,null,null,null),d=c.exports}}]);
//# sourceMappingURL=181.c2239743.js.map