(function(e){function t(t){for(var n,s,i=t[0],l=t[1],u=t[2],m=0,d=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/E-commerce-platform/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"04a5":function(e,t,r){"use strict";r("0597")},"0597":function(e,t,r){},"0a68":function(e,t,r){"use strict";r("f1b4")},1331:function(e,t,r){},"13da":function(e,t,r){"use strict";r("dfbe")},"23be":function(e,t,r){},3673:function(e,t,r){"use strict";r("f598")},"464e":function(e,t,r){"use strict";r("98ca")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("5c96"),o=r.n(a);r("0fae");n["default"].use(o.a);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],l=r("2877"),u={},c=Object(l["a"])(u,s,i,!1,null,null,null),m=c.exports,d=r("1da1"),p=(r("96cf"),r("b0c0"),r("8c4f")),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("el-container",[r("el-aside",{ref:"aside"},[r("AsideNavMenu",{attrs:{isCollapse:e.isCollapse,menu:e.menu}})],1),r("el-main",[r("Breadcrumb",{attrs:{breadMenu:e.breadMenu},on:{hiddenMenu:e.handleHidden}}),r("router-view")],1)],1)],1)},b=[],g=(r("159b"),r("4de4"),r("d81d"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"aside-nav-menu"},[r("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.meta.navItem,collapse:e.isCollapse,"background-color":"#001529","text-color":"#fff","active-text-color":"#ffd04b","collapse-transition":!1}},e._l(e.menu,(function(t,n){return r("el-submenu",{key:t.title,attrs:{index:t.title}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-location"}),r("span",[e._v(e._s(t.title))])]),t.children?e._l(t.children,(function(t,n){return r("el-menu-item-group",{key:t.title},[t.canHidden&&"admin"!==e.role?e._e():r("router-link",{attrs:{to:t.path}},[r("el-menu-item",{attrs:{index:t.title}},[r("i",{staticClass:"el-icon-location"}),r("span",[e._v(e._s(t.title))])])],1)],1)})):e._e()],2)})),1)],1)}),h=[],v={created:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("loginUser/whoAmI");case 2:e.role=e.$store.state.loginUser.loginUser.role;case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{role:"admin"}},props:["isCollapse","menu"]},w=v,x=(r("04a5"),Object(l["a"])(w,g,h,!1,null,null,null)),F=x.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bread-crumb"},[r("div",{staticClass:"container"},[r("div",{staticClass:"left"},[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:e.handleHidden}}),r("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.breadMenu,(function(t,n){return r("el-breadcrumb-item",{key:n},[e._v(e._s(t))])})),1)],1),r("el-dropdown",{on:{command:e.handleClick}},[r("span",{staticClass:"el-dropdown-link"},[e._v(" 欢迎您，"+e._s(e.username)),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"home"}},[e._v("个人中心")]),r("el-dropdown-item",{attrs:{command:"exit"}},[e._v("退出")])],1)],1)],1)])},k=[],$=r("5530"),y=r("2f62"),O={computed:Object($["a"])({},Object(y["b"])("loginUser",{username:function(e){return e.loginUser?e.loginUser.username:""}})),props:["breadMenu"],created:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("loginUser/whoAmI");case 2:case"end":return t.stop()}}),t)})))()},methods:{handleHidden:function(){this.$emit("hiddenMenu")},handleClick:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if("exit"!==e){r.next=6;break}return r.next=3,t.$store.dispatch("loginUser/loginOut");case 3:t.$router.push("/login"),r.next=7;break;case 6:"UserInfo"!==t.$route.name&&t.$router.push({name:"UserInfo"});case 7:case"end":return r.stop()}}),r)})))()}}},j=O,C=(r("13da"),Object(l["a"])(j,_,k,!1,null,null,null)),R=C.exports,I={data:function(){return{isCollapse:!1,menu:[]}},created:function(){var e=function e(t){if(t){var r=[];return t.forEach((function(t){var n={};t.meta&&t.meta.navItem&&(n.title=t.meta.navItem,n.path=t.path,n.canHidden=!!t.meta.canHidden&&t.meta.canHidden,n.children=e(t.children),r.push(n))})),r}};this.menu=e(this.$router.options.routes)},computed:{breadMenu:function(){return this.$route.matched.map((function(e){return e.meta?e.meta.navItem:""})).filter((function(e){return e}))}},components:{AsideNavMenu:F,Breadcrumb:R},methods:{handleHidden:function(){this.isCollapse=!this.isCollapse,this.$refs.aside.$el.classList.toggle("hidden")}}},U=I,E=(r("0a68"),Object(l["a"])(U,f,b,!1,null,"015aa976",null)),L=E.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"登录",name:"login"}},[r("Login")],1),r("el-tab-pane",{attrs:{label:"注册",name:"register"}},[r("Register",{on:{login:function(t){e.activeName="login"}}})],1)],1)],1)},P=[],M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-input-container"},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"邮箱",prop:"email",required:""}},[r("el-input",{model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password",required:""}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),r("div",{staticClass:"find_password"},[r("router-link",{attrs:{to:{name:"FindPass"}}},[e._v("找回密码")])],1),r("el-form-item",[r("el-button",{attrs:{disabled:e.loading,type:"primary"},on:{click:function(t){return e.submitForm("ruleForm",e.handleSubmit)}}},[e._v(e._s(e.loading?"登录中":"登录"))]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},q=[],H=r("bc3a"),A=r.n(H),G=A.a.create({baseURL:"https://mallapi.duyiedu.com/"}),T=G;function N(e){return z.apply(this,arguments)}function z(){return z=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.post("/passport/getCode",{email:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}var B=function(){return{data:function(){var e=this,t=function(e,t,r){""===t?r(new Error("请输入用户名")):r()},r=function(e,t,r){""===t?r(new Error("请输入密码")):r()},n=function(t,r,n){if(""===r)n(new Error("请输入邮箱"));else{var a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;a.test(e.ruleForm.email)?n():n(new Error("邮箱格式不正确"))}},a=function(e,t,r){""===t?r(new Error("验证码不能为空")):r()};return{ruleForm:{username:"",email:"",password:"",newPassword:"",code:"",role:""},rules:{username:[{validator:t,trigger:"blur"}],password:[{validator:r,trigger:"blur"}],email:[{validator:n,trigger:"blur"}],code:[{validator:a,trigger:"blur"}]},isSendCode:!1,btnText:"获取验证码"}},computed:Object($["a"])({},Object(y["b"])("loginUser",["loading"])),methods:{submitForm:function(e,t){var r=this;this.$refs[e].validate(function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}return r.$store.commit("loginUser/setLoading",!0),e.next=4,t();case 4:r.$store.commit("loginUser/setLoading",!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()},handleGetCode:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isSendCode){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,N(e.ruleForm.email);case 4:r=t.sent,"success"===r.status?(e.$message.success("验证码发送成功"),e.isSendCode=!0,n=20,a=setInterval((function(){0===n&&(clearInterval(a),e.isSendCode=!1),e.btnText="获取验证码"+(n?"(".concat(n--,"s)"):"")}),1e3)):e.$message.error(r.msg);case 6:case"end":return t.stop()}}),t)})))()}}}},J={mixins:[B()],methods:{handleSubmit:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("loginUser/login",{email:e.ruleForm.email,password:e.ruleForm.password});case 2:"success"===e.$store.state.loginUser.loginInfo.status?(e.$message.success(e.$store.state.loginUser.loginInfo.msg),e.$router.push("/")):e.$message.error(e.$store.state.loginUser.loginInfo.msg);case 3:case"end":return t.stop()}}),t)})))()}}},Z=J,D=(r("3673"),Object(l["a"])(Z,M,q,!1,null,"d891f0b6",null)),K=D.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register-input-container"},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username",required:""}},[r("el-input",{model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),r("el-form-item",{attrs:{label:"用户邮箱",prop:"email",required:""}},[r("el-input",{model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password",required:""}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),r("el-form-item",{attrs:{label:"验证码",prop:"code",required:""}},[r("el-row",[r("el-col",{attrs:{span:15}},[r("el-input",{model:{value:e.ruleForm.code,callback:function(t){e.$set(e.ruleForm,"code",t)},expression:"ruleForm.code"}})],1),r("el-col",{attrs:{span:9}},[r("el-button",{attrs:{size:"",disabled:e.isSendCode},on:{click:e.handleGetCode}},[e._v(e._s(e.btnText))])],1)],1)],1),r("el-form-item",{attrs:{label:"用户角色",prop:"role"}},[r("el-radio-group",{model:{value:e.ruleForm.role,callback:function(t){e.$set(e.ruleForm,"role",t)},expression:"ruleForm.role"}},[r("el-radio",{attrs:{label:"admin"}},[e._v("管理员用户")]),r("el-radio",{attrs:{label:"coustomer"}},[e._v("普通用户")])],1)],1),r("el-form-item",[r("el-button",{attrs:{disabled:e.loading,type:"primary"},on:{click:function(t){return e.submitForm("ruleForm",e.handleSubmit)}}},[e._v(e._s(e.loading?"注册中":"注册"))])],1)],1)],1)},V=[];function W(e){return X.apply(this,arguments)}function X(){return X=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.post("/passport/logon",t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)}))),X.apply(this,arguments)}var Y={mixins:[B()],created:function(){this.ruleForm.role="admin"},methods:{handleSubmit:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,W(e.ruleForm);case 2:r=t.sent,"success"===r.status?(e.$message.success(r.msg),e.$emit("login")):e.$message.warning(r.msg);case 4:case"end":return t.stop()}}),t)})))()}}},ee=Y,te=Object(l["a"])(ee,Q,V,!1,null,null,null),re=te.exports,ne={components:{Login:K,Register:re},data:function(){return{activeName:"login"}},methods:{}},ae=ne,oe=(r("464e"),Object(l["a"])(ae,S,P,!1,null,"93587f34",null)),se=oe.exports,ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"findPass-input-container"},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"80px"}},[r("div",{staticClass:"title"},[e._v("找回密码")]),r("el-form-item",{attrs:{label:"邮箱",prop:"email",required:""}},[r("el-input",{model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password",required:""}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),r("el-form-item",{attrs:{label:"验证码",prop:"code",required:""}},[r("el-row",[r("el-col",{attrs:{span:15}},[r("el-input",{model:{value:e.ruleForm.code,callback:function(t){e.$set(e.ruleForm,"code",t)},expression:"ruleForm.code"}})],1),r("el-col",{attrs:{span:9}},[r("el-button",{attrs:{size:"",disabled:e.isSendCode},on:{click:e.handleGetCode}},[e._v(e._s(e.btnText))])],1)],1)],1),r("el-form-item",[r("el-button",{attrs:{disabled:e.loading,type:"primary"},on:{click:function(t){return e.submitForm("ruleForm",e.handleSubmit)}}},[e._v(e._s(e.loading?"提交中":"提交"))])],1)],1)],1)},le=[];function ue(e){return ce.apply(this,arguments)}function ce(){return ce=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.post("/passport/findBack",t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)}))),ce.apply(this,arguments)}function me(e){return de.apply(this,arguments)}function de(){return de=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.put("/passport/changeUserInfo",t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)}))),de.apply(this,arguments)}var pe={mixins:[B()],methods:{handleSubmit:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ue(e.ruleForm);case 2:r=t.sent,"success"===r.status?(e.$message.success(r.msg),e.$store.dispatch("loginUser/loginOut"),e.$router.push("/login")):e.$message.warning(r.msg);case 4:case"end":return t.stop()}}),t)})))()}}},fe=pe,be=(r("5b12"),Object(l["a"])(fe,ie,le,!1,null,"50a41c7e",null)),ge=be.exports,he=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"statistics-container"},[e._v(" 统计页面 ")])},ve=[],we={},xe=we,Fe=Object(l["a"])(xe,he,ve,!1,null,null,null),_e=Fe.exports,ke=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-info-container"},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username",required:e.isEditing}},[r("el-input",{attrs:{disabled:!e.isEditing},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),r("el-form-item",{attrs:{label:"用户邮箱",prop:"email"}},[r("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),r("el-form-item",{attrs:{label:"用户角色",prop:"role"}},[r("el-radio-group",{attrs:{disabled:""},model:{value:e.ruleForm.role,callback:function(t){e.$set(e.ruleForm,"role",t)},expression:"ruleForm.role"}},[r("el-radio",{attrs:{label:"admin"}},[e._v("管理员用户")]),r("el-radio",{attrs:{label:"coustomer"}},[e._v("普通用户")])],1)],1),e.isEditing?[r("el-form-item",{attrs:{label:"密码",prop:"password",required:""}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),r("div",{staticClass:"find_password"},[r("router-link",{attrs:{to:{name:"FindPass"}}},[e._v("找回密码")])],1),r("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.newPassword,callback:function(t){e.$set(e.ruleForm,"newPassword",t)},expression:"ruleForm.newPassword"}})],1),r("el-form-item",{attrs:{label:"验证码",prop:"code",required:""}},[r("el-row",[r("el-col",{attrs:{span:15}},[r("el-input",{model:{value:e.ruleForm.code,callback:function(t){e.$set(e.ruleForm,"code",t)},expression:"ruleForm.code"}})],1),r("el-col",{attrs:{span:9}},[r("el-button",{attrs:{size:"",disabled:e.isSendCode},on:{click:e.handleGetCode}},[e._v(e._s(e.btnText))])],1)],1)],1)]:e._e(),r("el-form-item",[e.isEditing?r("el-button",{attrs:{disabled:e.loading,type:"primary"},on:{click:function(t){return e.submitForm("ruleForm",e.handleSubmit)}}},[e._v(e._s(e.loading?"提交中":"提交"))]):r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.isEditing=!0}}},[e._v("修改")])],1)],2)],1)},$e=[],ye=r("a78e"),Oe=r.n(ye),je={mixins:[B()],created:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("loginUser/whoAmI");case 2:r=t.sent,e.ruleForm.username=r.username,e.ruleForm.email=r.email,e.ruleForm.role=r.role;case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{isEditing:!1}},methods:{handleSubmit:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.ruleForm.newPassword=e.ruleForm.newPassword?e.ruleForm.newPassword:e.ruleForm.password,t.next=3,me(e.ruleForm);case 3:if(r=t.sent,"success"!==r.status){t.next=15;break}return e.$message.success(r.msg),Oe.a.set("username",e.ruleForm.username,{expires:3}),t.next=9,e.$store.dispatch("loginUser/whoAmI");case 9:e.isEditing=!1,e.ruleForm.password="",e.ruleForm.newPassword="",e.ruleForm.code="",t.next=16;break;case 15:e.$message.warning(r.msg);case 16:case"end":return t.stop()}}),t)})))()}}},Ce=je,Re=(r("e041"),Object(l["a"])(Ce,ke,$e,!1,null,"54ca651c",null)),Ie=Re.exports,Ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"add-goods-container"},[e._v(" 添加商品 ")])},Ee=[],Le={},Se=Le,Pe=Object(l["a"])(Se,Ue,Ee,!1,null,null,null),Me=Pe.exports,qe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"goods-list-container"},[e._v(" 商品列表 ")])},He=[],Ae={},Ge=Ae,Te=Object(l["a"])(Ge,qe,He,!1,null,null,null),Ne=Te.exports,ze=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"goods-manage-container"},[e._v(" 管理商品 ")])},Be=[],Je={},Ze=Je,De=Object(l["a"])(Ze,ze,Be,!1,null,null,null),Ke=De.exports,Qe=[{path:"/",redirect:{path:"Home"}},{path:"/home",name:"Home",component:L,redirect:{name:"Statistics"},meta:{navItem:"首页"},children:[{path:"/home/userInfo",component:Ie,name:"UserInfo",meta:{navItem:"个人中心"}},{path:"/home/statistics",component:_e,name:"Statistics",meta:{navItem:"统计"}}]},{path:"/goods",name:"Home",component:L,redirect:{name:"GoodsList"},meta:{navItem:"商品"},children:[{path:"/goods/add",component:Me,name:"AddGoods",meta:{navItem:"添加商品"}},{path:"/goods/list",component:Ne,name:"GoodsList",meta:{navItem:"商品列表"}},{path:"/goods/manage",component:Ke,name:"GoodsManage",meta:{navItem:"类目管理",canHidden:!0}}]},{path:"/login",name:"Login",component:se},{path:"/findPass",name:"FindPass",component:ge}],Ve=r("b85c"),We=(r("4fad"),["username","email","appkey","role"]);function Xe(e,t){return Ye.apply(this,arguments)}function Ye(){return Ye=Object(d["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,s,i,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.post("/passport/login",{email:t,password:r});case 2:if(n=e.sent,a=n.data,"success"===a.status)for(o=Object.entries(a.data),s=0,i=o;s<i.length;s++)l=i[s],We.push(l[0]),Oe.a.set(l[0],l[1],{expires:3});return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)}))),Ye.apply(this,arguments)}function et(){var e=Oe.a.get("appkey");if(!e)return null;var t,r={},n=Object(Ve["a"])(We);try{for(n.s();!(t=n.n()).done;){var a=t.value;r[a]=Oe.a.get(a)}}catch(o){n.e(o)}finally{n.f()}return r}function tt(){var e,t=Object(Ve["a"])(We);try{for(t.s();!(e=t.n()).done;){var r=e.value;Oe.a.remove(r)}}catch(n){t.e(n)}finally{t.f()}return!0}n["default"].use(p["a"]);var rt=new p["a"]({mode:"history",routes:Qe});rt.beforeEach(function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,r,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"Login"!==t.name&&"FindPass"!==t.name?(a=et(),a?"GoodsManage"===t.name?"admin"!==a.role&&(alert("非管理员身份不能进行商品类目管理"),n(r.path)):n():n("/login")):n();case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}());var nt=rt,at={namespaced:!0,state:{loading:!1,loginUser:null,loginInfo:null},mutations:{setLoading:function(e,t){e.loading=t},setLoginUser:function(e,t){e.loginUser=t},setLoginInfo:function(e,t){e.loginInfo=t}},actions:{login:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,n("setLoading",!0),r.next=4,Xe(t.email,t.password);case 4:a=r.sent,n("setLoginUser",a.data),n("setLoginInfo",{msg:a.msg,status:a.status}),n("setLoading",!1);case 8:case"end":return r.stop()}}),r)})))()},whoAmI:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("setLoading",!0),t.next=4,et();case 4:return n=t.sent,r("setLoginUser",n),r("setLoading",!1),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})))()},loginOut:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("setLoading",!0),t.next=4,tt();case 4:r("setLoginUser",null),r("setLoginInfo",null),r("setLoading",!1);case 7:case"end":return t.stop()}}),t)})))()}}};n["default"].use(y["a"]);var ot=new y["a"].Store({modules:{loginUser:at},strict:!0});r("23be");n["default"].config.productionTip=!1,new n["default"]({router:nt,store:ot,render:function(e){return e(m)}}).$mount("#app")},"5b12":function(e,t,r){"use strict";r("1331")},"98ca":function(e,t,r){},c77d:function(e,t,r){},dfbe:function(e,t,r){},e041:function(e,t,r){"use strict";r("c77d")},f1b4:function(e,t,r){},f598:function(e,t,r){}});
//# sourceMappingURL=app.ee430766.js.map