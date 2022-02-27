var y=Object.defineProperty,v=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(e,t,a)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,B=(e,t)=>{for(var a in t||(t={}))k.call(t,a)&&g(e,a,t[a]);if(b)for(var a of b(t))I.call(t,a)&&g(e,a,t[a]);return e},E=(e,t)=>v(e,x(t));import{a as $,d as M,O as S,N as T,P as U,Z as N,Q as P,R as j,S as R,W as X,V as z,o as F,x as C,n as o,w as l,a2 as O,Y as r,B as w,a3 as Q,a4 as W,v as Y}from"./vendor.5c6f306b.js";import{_ as Z,X as _}from"./index.4d889815.js";let n=$({active_name:"connectInfo",host_list:[],is_login:!1,password:"",old_password:"",new_password_a:"",new_password_b:""});function q(e,t){new _().delete(`/api/status?session_id=${t.session_id}`).then(p=>p.json()).then(p=>{p.code===0&&V()})}function V(){new _().get("/api/status").then(t=>(t.status===401&&(n.is_login=!1),t.json())).then(t=>{t.code===0&&(n.is_login=!0,n.host_list=t.data)})}function G(){let e=new FormData;e.append("pwd",n.password),new _().post("/api/login",{body:e}).then(a=>{if(a.status===401){r.error("\u5BC6\u7801\u9519\u8BEF");return}return a.json()}).then(a=>{a.code===0&&(n.is_login=!0,V())})}function H(){if(n.old_password.length===0){r.error("\u65E7\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A");return}if(n.new_password_a.length===0){r.error("\u65B0\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A");return}if(n.new_password_b.length===0){r.error("\u786E\u8BA4\u65B0\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A");return}if(n.new_password_a!==n.new_password_b){r.error("\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4");return}let e=new FormData;e.append("old_pwd",n.old_password),e.append("new_pwd",n.new_password_a),new _().patch("/api/login",{body:e}).then(a=>a.json()).then(a=>{a.code===0&&(r.success("\u5BC6\u7801\u4FEE\u6539\u6210\u529F"),n.is_login=!1)})}const J=M({name:"manage",setup(e,t){return E(B({},O(n)),{login:G,disconnect:q,changePassword:H})}}),K=e=>(Q("data-v-159ebc8c"),e=e(),W(),e),L={key:0},ee=w("\u65AD\u5F00"),te=w("\u63D0\u4EA4"),oe={key:1},ae=K(()=>Y("h3",{class:"login-title"},"\u8BF7\u767B\u5F55",-1)),le=w("\u767B\u5F55");function ne(e,t,a,p,ue,se){const s=S,m=T,A=U,f=N,i=P,d=j,c=R,h=X,D=z;return e.is_login?(F(),C("div",L,[o(D,{modelValue:e.active_name,"onUpdate:modelValue":t[3]||(t[3]=u=>e.active_name=u),type:"card"},{default:l(()=>[o(f,{label:"\u8FDE\u63A5\u72B6\u6001",name:"connectInfo"},{default:l(()=>[o(A,{data:e.host_list,style:{width:"100%"}},{default:l(()=>[o(s,{fixed:"",prop:"ip",label:"\u5730\u5740",width:"250"}),o(s,{prop:"username",label:"\u7528\u6237\u540D",width:"180"}),o(s,{prop:"port",label:"\u7AEF\u53E3"}),o(s,{prop:"shell",label:"shell"}),o(s,{prop:"session_id",label:"\u4F1A\u8BDDID",width:"200"}),o(s,{prop:"start_time",label:"\u8FDE\u63A5\u521B\u5EFA\u65F6\u95F4",width:"150"}),o(s,{fixed:"right",label:"\u64CD\u4F5C"},{default:l(u=>[o(m,{size:"small",type:"danger",onClick:de=>e.disconnect(u.$index,u.row)},{default:l(()=>[ee]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),o(f,{label:"\u7BA1\u7406\u5BC6\u7801",name:"second"},{default:l(()=>[o(h,null,{default:l(()=>[o(c,{"label-width":"100px"},{default:l(()=>[o(d,{label:"\u65E7\u5BC6\u7801"},{default:l(()=>[o(i,{type:"password",minlength:"1",maxlength:"64",modelValue:e.old_password,"onUpdate:modelValue":t[0]||(t[0]=u=>e.old_password=u),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),o(d,{label:"\u65B0\u5BC6\u7801"},{default:l(()=>[o(i,{type:"password",minlength:"1",maxlength:"64",modelValue:e.new_password_a,"onUpdate:modelValue":t[1]||(t[1]=u=>e.new_password_a=u),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),o(d,{label:"\u65B0\u5BC6\u7801"},{default:l(()=>[o(i,{type:"password",minlength:"1",maxlength:"64",modelValue:e.new_password_b,"onUpdate:modelValue":t[2]||(t[2]=u=>e.new_password_b=u),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),o(d,null,{default:l(()=>[o(m,{type:"primary",onClick:e.changePassword},{default:l(()=>[te]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])):(F(),C("div",oe,[o(h,null,{default:l(()=>[o(c,{"label-width":"80px",class:"login-box"},{default:l(()=>[ae,o(d,{label:"\u5BC6\u7801"},{default:l(()=>[o(i,{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",modelValue:e.password,"onUpdate:modelValue":t[4]||(t[4]=u=>e.password=u)},null,8,["modelValue"])]),_:1}),o(d,null,{default:l(()=>[o(m,{type:"primary",onClick:e.login},{default:l(()=>[le]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]))}var _e=Z(J,[["render",ne],["__scopeId","data-v-159ebc8c"]]);export{_e as default};
