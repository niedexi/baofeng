import{_ as p,r as m,c as f,a as t,w as o,b as n,u as v,o as w,d as g,e as V,f as h,g as y,E as b}from"./index-j6xUvDN0.js";const x={class:"login-container"},k={__name:"LoginView",setup(B){const a=m(""),r=v(),l=()=>{a.value==="zhao47dameinv"?(localStorage.setItem("isAuthenticated","true"),r.push("/")):(b.error("密码错误"),a.value="")};return(C,e)=>{const u=n("el-input"),s=n("el-form-item"),_=n("el-button"),d=n("el-form"),i=n("el-card");return w(),f("div",x,[t(i,{class:"login-card"},{default:o(()=>[e[2]||(e[2]=g("h2",null,"保丰后台管理系统",-1)),t(d,{onSubmit:V(l,["prevent"])},{default:o(()=>[t(s,null,{default:o(()=>[t(u,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=c=>a.value=c),type:"password",placeholder:"请输入密码",onKeyup:h(l,["enter"])},null,8,["modelValue"])]),_:1}),t(s,null,{default:o(()=>[t(_,{type:"primary",onClick:l,style:{width:"100%"}},{default:o(()=>e[1]||(e[1]=[y(" 登录 ")])),_:1})]),_:1})]),_:1})]),_:1})])}}},L=p(k,[["__scopeId","data-v-ef3b6a64"]]);export{L as default};
