(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{kkrb:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),o=t("vOnD"),i=o.b.div.withConfig({componentId:"sc-1i59ox-0"})(['display:flex;justify-content:center;align-items:center;margin-top:90px;margin-bottom:15px;h2{font-family:"Montserrat",sans-serif;font-size:18px;color:#444;font-weight:300;}']),l=t("s7Dq"),c=t("FtNa"),m=t("o0o1"),u=t.n(m),s=(t("ls82"),t("HaE+")),b=t("U5My"),f=t("3Z9Z"),d=t("JI6e"),p=t("UGp+"),g=t("Wbzz"),E=t("7vrA"),v=Object(o.b)(E.a).withConfig({componentId:"sc-4514er-0"})(['margin-bottom:56px;input[type="checkbox"],input[type="radio"]{margin-right:8px;}label{font-weight:600;font-family:"Montserrat",sans-serif;margin-bottom:0;}.row{margin-bottom:16px;}p{margin:16px 0 4px 0;font-weight:600;font-family:"Montserrat",sans-serif;}']),O=o.b.button.withConfig({componentId:"sc-4514er-1"})(["width:100%;font-size:17px;font-weight:600;color:#fff;background:#ff700e;border:0;border-radius:5px;padding:none;height:60px;margin-top:5px;outline:0 !important;"]),j=t("Ns3g"),h=t("uMP+"),x=t("yr4J"),y=t("gE6j"),C=t("jORr"),k=t("vihv"),w=function(){var e=Object(n.useRef)(null),a=Object(n.useState)(!1),t=a[0],o=a[1],i=(Object(c.a)("form.Administração"),Object(c.a)("form.Analista de Controle da Qualidade"),Object(c.a)("form.Analista da Garantia da Qualidade"),Object(c.a)("form.Projetista - Arquitetura AutoCAD"),Object(c.a)("form.Ministrante de Cursos"),Object(c.a)("form.Comercial"),Object(c.a)("form.Serviços Gerais/Limpeza"),Object(c.a)("form.Supervisão/Gestão"),Object(c.a)("form.Recepção/Atendimento"),Object(c.a)("form.Outro"),[{id:"reasonOp1",value:"Sugestão",label:Object(c.a)("form.Sugestão")},{id:"reasonOp2",value:"Reclamação, Melhorias",label:Object(c.a)("form.Reclamação, Melhorias")},{id:"reasonOp3",value:"Dúvidas",label:Object(c.a)("form.Dúvidas")}]),l=[{id:"concordoFormulario",value:"Eu aceito receber e-mails com noticias, conteúdos e contatos da Kivalita Consulting",label:Object(c.a)("form.i agree form")}],m=Object(n.useCallback)(function(){var a=Object(s.a)(u.a.mark((function a(t){var n,r,i,l;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,null===(n=e.current)||void 0===n||n.setErrors({}),r=p.b().shape({nome:p.c().required("Nome obrigatório"),email:p.c().required("E-mail obrigatório").email("Digite um e-mail válido"),empresa:p.c().required("Empresa obrigatória"),telefone:p.c().required("Telefone obrigatória"),mensagem:p.c().required("Mensagem obrigatória"),motivoContato:p.c().required("Campo obrigatório"),concordoFormulario:p.c().required("Campo obrigatório")}),a.next=5,r.validate(t,{abortEarly:!1});case 5:return o(!0),a.next=8,Object(C.a)(t);case 8:Object(g.navigateTo)("/thank-you"),a.next=19;break;case 11:if(a.prev=11,a.t0=a.catch(0),o(!1),!(a.t0 instanceof p.a)){a.next=18;break}return l=Object(x.a)(a.t0),null===(i=e.current)||void 0===i||i.setErrors(l),a.abrupt("return");case 18:Object(g.navigateTo)("/thank-you");case 19:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}(),[]);return r.a.createElement(b.a,{ref:e,onSubmit:m},r.a.createElement(v,{className:"containerForm"},r.a.createElement(f.a,null,r.a.createElement(d.a,{xs:"12",md:"6",lg:"6"},r.a.createElement("label",null,Object(c.a)("form.Nome Completo")),r.a.createElement(j.a,{name:"nome"})),r.a.createElement(d.a,{xs:"12",md:"6",lg:"6"},r.a.createElement("label",null,Object(c.a)("form.E-mail")),r.a.createElement(j.a,{type:"email",name:"email"}))),r.a.createElement(f.a,null,r.a.createElement(d.a,{xs:"12",md:"6",lg:"6"},r.a.createElement("label",null,Object(c.a)("form.Empresa")),r.a.createElement(j.a,{name:"empresa"})),r.a.createElement(d.a,{xs:"12",md:"6",lg:"6"},r.a.createElement("label",null,Object(c.a)("form.Telefone")),r.a.createElement(j.a,{name:"telefone"}))),r.a.createElement(f.a,null,r.a.createElement(d.a,{xs:"12"},r.a.createElement("p",null,Object(c.a)("suggestion.reasonContact")),r.a.createElement(k.a,{name:"motivoContato",options:i}))),r.a.createElement(f.a,null,r.a.createElement(d.a,{xs:"12"},r.a.createElement("label",null,Object(c.a)("form.comments")),r.a.createElement(h.a,{name:"mensagem"}))),r.a.createElement(f.a,null,r.a.createElement(d.a,{xs:"12"},r.a.createElement(y.a,{name:"concordoFormulario",options:l}))),r.a.createElement(O,{type:"submit"},t?Object(c.a)("form.Enviando"):Object(c.a)("form.button"))))};function q(){return r.a.createElement("div",null,r.a.createElement(l.a,{titlePage:Object(c.a)("suggestion.headLine")}),r.a.createElement(i,{className:"container"},r.a.createElement("h2",null,Object(c.a)("suggestion.introduction"))),r.a.createElement(w,null))}var M=t("VXBa"),A=t("tLx4");a.default=function(){var e=[{url:"/",name:"Home",isActive:!0},{url:"suggestion",name:Object(c.a)("breadCrumb.suggestion"),isActive:!1}];return r.a.createElement(M.a,{breadCrumbList:e},r.a.createElement(A.a,{title:"Sugestões, reclamações e Melhorias",description:"Sugestões, reclamações e Melhorias"}),r.a.createElement(q,null))}},vihv:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),o=t("nkKJ");a.a=function(e){var a=e.name,t=e.options,i=Object(n.useRef)([]),l=Object(o.c)(a),c=l.fieldName,m=l.registerField,u=l.defaultValue;return Object(n.useEffect)((function(){m({name:c,ref:i.current,getValue:function(e){var a=e.find((function(e){return e.checked}));return a?a.value:null},setValue:function(e,a){var t=e.find((function(e){return e.value===a}));t&&(t.checked=!0)}})}),[c,m]),r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement("label",{key:e.id,style:{marginRight:"16px"}},r.a.createElement("input",{ref:function(e){i.current[a]=e},type:"radio",name:c,value:e.value,defaultChecked:u===e.id}),r.a.createElement("span",null,e.label))})))}}}]);
//# sourceMappingURL=component---src-pages-sugestoes-tsx-3d96c13a385d4c66b6fa.js.map