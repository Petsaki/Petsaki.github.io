"use strict";(self["webpackChunklottery_app"]=self["webpackChunklottery_app"]||[]).push([[841],{191:function(t,e,s){s.d(e,{Z:function(){return p}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col items-center text-center gap-2"},[s("label",{class:t.classProp},[t._v(t._s(t.labelProp)+" ")]),t._t("default")],2)},r=[],n={props:{labelProp:{text:String},classProp:{type:String}}},o=n,i=s(1001),l=(0,i.Z)(o,a,r,!1,null,null,null),p=l.exports},7841:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return this.$store.getters.IS_LOGGEDIN?t._e():a("div",{staticClass:"min-h-screen flex justify-center items-center sm:items-start sm:pt-36"},[a("form",{staticClass:"flex flex-col h-fit justify-start items-center gap-5 bg-white px-5 sm:px-12  rounded-md border-2 border-black pt-5 pb-8",on:{submit:function(e){return e.preventDefault(),t.signUpFun.apply(null,arguments)}}},[a("img",{staticClass:"app-img-logo",attrs:{alt:"Logo Image",src:s(6949)}}),a("base-input",{attrs:{labelProp:"Enter your email:"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"app-input",attrs:{type:"email",required:"",autofocus:"",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),a("base-input",{attrs:{labelProp:"Enter your password:"}},[a("input",{staticClass:"app-input",attrs:{type:"password",required:"",minlength:"8",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",name:"password",title:"Must be 8 length at least and has 1 [A-Z], 1 [a-z], 1 [0-9]."}})]),a("base-input",{attrs:{labelProp:"Confirm password:"}},[a("input",{staticClass:"app-input",attrs:{type:"password",required:"",minlength:"8",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",name:"confirmpass",title:"Must be 8 length at least and has 1 [A-Z], 1 [a-z], 1 [0-9]."}})]),a("div",{staticClass:"flex justify-center flex-col gap-4 w-fit pt-3"},[a("base-button",{staticClass:"bg-green-400 text-white",attrs:{tagProp:"input",typeProp:"submit",valueProp:"Sign up"}}),a("base-button",{staticClass:"text-blue-500 underline decoration-blue-500",attrs:{tagProp:"router-link",toProp:"/login"}},[t._v("Log in")])],1),a("circle-loading",{attrs:{loadingProp:t.loading}})],1)])},r=[],n=s(6198),o=(s(8975),s(7589)),i=s(6926),l=s(4137),p=s(191),u=s(4498),c={components:{"base-button":l.Z,"base-input":p.Z,"circle-loading":u.Z},data:function(){return{form:{email:"",password:"",confirmpass:""},loading:!1}},methods:{signUpFun:function(t){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:e.form.email=t.target.elements.email.value,e.form.password=t.target.elements.password.value,e.form.confirmpass=t.target.elements.confirmpass.value,e.$store.dispatch("SET_TOAST",{show:!1,msg:"",type:""}),e.form.password===e.form.confirmpass?(e.loading=!0,a=(0,o.v0)(),(0,o.Xb)(a,e.form.email,e.form.password).then((function(s){var a=s.user;try{(0,i.pl)((0,i.JU)((0,i.ad)(),"users",a.uid),{drawRunning:!1,currentNums:[],currentDraw:[],email:a.email},{merge:!0})}catch(t){console.error("Error adding document: ",t)}e.loading=!1,e.$store.dispatch("SET_TOAST",{show:!0,msg:"Making a account was successfully!",type:"success"}),e.$router.push({path:"/"})})).catch((function(t){e.loading=!1,e.$store.dispatch("SET_TOAST",{show:!0,msg:"Failed to sign up.",type:"error"});var s=t.code,a=t.message;console.log(s,a)}))):setTimeout((function(){e.$store.dispatch("SET_TOAST",{show:!0,msg:"Passwords do not match!",type:"error"})}),100);case 5:case"end":return s.stop()}}),s)})))()}}},m=c,d=s(1001),f=(0,d.Z)(m,a,r,!1,null,null,null),g=f.exports}}]);
//# sourceMappingURL=841-legacy.83e6507e.js.map