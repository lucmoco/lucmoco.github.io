(this.webpackJsonpboussole=this.webpackJsonpboussole||[]).push([[0],[,,function(e,t,a){e.exports={taskList:"Tasks_taskList__1j01R",tasksFilter:"Tasks_tasksFilter__SByHK",visible:"Tasks_visible__2gUcH",tasksFilterInner:"Tasks_tasksFilterInner__37v1d",taskFilterText:"Tasks_taskFilterText__1lomt",tasks:"Tasks_tasks__4y0vu",tasksButtons:"Tasks_tasksButtons__XJ-pN",task:"Tasks_task__3bw5D",title:"Tasks_title__1CtZZ",taskForm:"Tasks_taskForm__oi8da",button:"Tasks_button__25aul",taskStateIndicator:"Tasks_taskStateIndicator__3zudG",notCurrent:"Tasks_notCurrent__21dv8",clickable:"Tasks_clickable__fAQfc",thickBorder:"Tasks_thickBorder__3vSP1",small:"Tasks_small__eHZhy",created:"Tasks_created__3OKBO","in-backlog":"Tasks_in-backlog__1cBRA",active:"Tasks_active__c-6hh",finished:"Tasks_finished__dGaVL",abandoned:"Tasks_abandoned__-2J94",taskStateClosed:"Tasks_taskStateClosed__2ySBA"}},,,,,,,,,,,,,function(e,t,a){e.exports={tag:"TagComponent_tag__O9Do5",noTag:"TagComponent_noTag__2j8yO",clickable:"TagComponent_clickable__lE7XX",active:"TagComponent_active__2nCyq",remove:"TagComponent_remove__2SJVD"}},,function(e,t,a){e.exports={app:"App_app__32N6G",saveButton:"App_saveButton__1Y4GW",saving:"App_saving__19u3L",blinker:"App_blinker__3O4-b"}},function(e,t,a){e.exports={dialog:"Dialog_dialog__2jZTN",title:"Dialog_title__1r951",content:"Dialog_content__3EOpS",buttons:"Dialog_buttons__1OnQ6"}},function(e,t,a){e.exports={iconDesigner:"IconDesigner_iconDesigner__FdLiT",iconPreview:"IconDesigner_iconPreview__2680x"}},function(e,t,a){e.exports={button:"Button_button___qM3V",wide:"Button_wide__3ejWw",light:"Button_light__2KPpW"}},,function(e,t,a){e.exports={field:"Field_field__1UM57",label:"Field_label__2F_cw"}},,,function(e,t,a){e.exports={loadStatus:"LoadStatus_loadStatus__2d1fD",loadBar:"LoadStatus_loadBar__eTTVa"}},,,,,,,function(e,t,a){e.exports={overlay:"Overlay_overlay__3WkJQ"}},function(e,t,a){e.exports={spaceOutVerticalComponents:"Spacing_spaceOutVerticalComponents__x2Ed8"}},,,function(e,t,a){e.exports=a.p+"static/media/boussole.b5a6f5f8.svg"},,,function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),i=(a(44),a(14)),s=a(17),l=a.n(s),u=a(11),d=a(9),v=a(13),m=a(37),f=a(30),h=a(38),p=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(f.a)(t).call(this,e))).state={isError:!1,error:null},a}return Object(h.a)(t,e),Object(v.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({isError:!0,error:t})}},{key:"render",value:function(){return this.state.isError?n.createElement("div",null,this.state.error.componentStack):this.props.children}}]),t}(n.Component),g=a(1),k=a(2),_=a.n(k),b=a(5);function E(e){for(var t="",a=0;a<e;a++)t+="0123456789abcdef".charAt(Math.floor(Math.random()*"0123456789abcdef".length));return t}var C=function e(t){var a=this;Object(d.a)(this,e),this.store=void 0,this.createTask=function(e){a.store.updateState((function(t){var a="".concat(E(8),"-").concat(E(4),"-").concat(E(4),"-").concat(E(4),"-").concat(E(12)),n=new Date;return t[a]=Object(b.a)({},e,{id:a,created:n,modified:n}),Object(b.a)({},t)}))},this.updateTask=function(e,t){a.store.updateState((function(a){var n=a[e];if(!n)throw new Error("No task found with id {id}");return a[e]=Object(b.a)({},n,{},t),Object(b.a)({},a)}))},this.store=t},x=a(3),w=a.n(x),O=a(7),T=function(){function e(t){Object(d.a)(this,e),this.authManager=void 0,this.authManager=t}return Object(v.a)(e,[{key:"loadData",value:function(){var e=Object(O.a)(w.a.mark((function e(){var t,a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authManager.acquireToken();case 2:return t=e.sent,e.next=5,fetch("https://graph.microsoft.com/v1.0/me/drive/root:/boussole-data-files/notes.json:/content",{headers:{Authorization:"Bearer "+t}});case 5:return a=e.sent,e.next=8,a.json();case 8:return n=e.sent,e.abrupt("return",S(n));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"saveData",value:function(){var e=Object(O.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=j(t),e.next=3,this.authManager.acquireToken();case 3:return n=e.sent,e.next=6,fetch("https://graph.microsoft.com/v1.0/me/drive/root:/boussole-data-files/notes.json:/content",{method:"PUT",headers:{"Content-Type":"text/plain",Authorization:"Bearer "+n},body:JSON.stringify(a,null,"  ")});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function j(e){var t,a=[];for(var n in e)a.push({state:"created"===(t=e[n]).state?void 0:t.state,tagId:t.tagId||void 0,id:t.id,title:t.title,description:t.description||void 0,created:t.created,modified:t.modified,dateClosed:t.dateClosed});return{tasks:a}}function S(e){var t={};return e.tasks.forEach((function(e){return t[e.id]=function(e){return{state:e.state||"created",tagId:e.tagId||null,id:e.id,title:e.title,description:e.description||"",created:e.created,modified:e.modified,dateClosed:e.dateClosed}}(e)})),t}var y=a(31),N=["https://graph.microsoft.com/Files.ReadWrite"],I=function(){function e(){Object(d.a)(this,e),this.account=void 0,this.application=new y.a({auth:{clientId:"c1fef6c7-2dd3-425b-aa1e-e9c94ca00c63",authority:"https://login.microsoftonline.com/consumers/"}})}return Object(v.a)(e,[{key:"authenticate",value:function(){var e=Object(O.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.application.handleRedirectPromise();case 2:if(0!==(t=this.application.getAllAccounts()).length){e.next=6;break}return e.next=6,this.application.loginRedirect();case 6:this.account=t[0];case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"acquireToken",value:function(){var e=Object(O.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authenticate();case 2:return e.next=4,this.application.acquireTokenSilent({scopes:N,account:this.account});case 4:return t=e.sent,e.abrupt("return",t.accessToken);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),B=r.a.createContext(void 0),D=function(e){var t=e.getNotAuthenticatedComponents,a=e.getAuthenticatedComponents,n=r.a.useMemo((function(){return new I}),[]),c=r.a.useState(!1),o=Object(g.a)(c,2),i=o[0],s=o[1];return r.a.useEffect((function(){Object(O.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.authenticate();case 2:s(!0);case 3:case"end":return e.stop()}}),e)})))()}),[n]),r.a.createElement(B.Provider,{value:n},i?a():t())},P=r.a.createContext(void 0),A=function(e){var t=e.children,a=function(){var e=r.a.useContext(B);if(!e)throw new Error("Please define an AuthManagerProvider upper in the component tree.");return e}(),n=r.a.useMemo((function(){return new T(a)}),[a]);return r.a.createElement(P.Provider,{value:n},t)},F=function(){var e=r.a.useContext(P);if(!e)throw new Error("Please define a BoussoleDataStoreProvider upper in the component tree.");return e},M=function e(t){var a=this;Object(d.a)(this,e),this.state=void 0,this.callbacks=void 0,this.getState=function(){return a.state},this.setState=function(e){a.state=e,a.notify()},this.updateState=function(e){var t=e(a.state);t!==a.state&&(a.state=t,a.notify())},this.subscribe=function(e){if(a.callbacks.indexOf(e)>=0)throw new Error("The callback is already registered.");return a.callbacks.push(e),function(){a.callbacks=a.callbacks.filter((function(t){return t!==e}))}},this.notify=function(){var e=a.state,t=!0,n=!1,r=void 0;try{for(var c,o=a.callbacks[Symbol.iterator]();!(t=(c=o.next()).done);t=!0){var i=c.value;if(a.state!==e)return;a.callbacks.indexOf(i)<0||i(e)}}catch(s){n=!0,r=s}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}},this.state=t,this.callbacks=[]},R=r.a.createContext(void 0),z=function(e){var t=e.getNotReadyComponents,a=e.getReadyComponents,n=F(),c=r.a.useState(void 0),o=Object(g.a)(c,2),i=o[0],s=o[1];return r.a.useEffect((function(){Object(O.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.loadData();case 2:t=e.sent,s(new M(t));case 4:case"end":return e.stop()}}),e)})))()}),[n]),void 0===i?r.a.createElement(r.a.Fragment,null,t()):r.a.createElement(R.Provider,{value:i},a())},V=function(){var e=r.a.useContext(R);if(!e)throw new Error("Please define a BoussoleDataStateProvider upper in the component tree.");return e},L=r.a.createContext(void 0),W=function(e){var t=e.children,a=V(),n=r.a.useMemo((function(){return new C(a)}),[a]);return r.a.createElement(L.Provider,{value:n},t)},H=function(){var e=r.a.useContext(L);if(!e)throw new Error("Please define a BoussoleDataServiceProvider upper in the component tree.");return e},J=function(e){return{state:e,dateClosed:"finished"===e||"abandoned"===e?new Date:void 0}},q=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return!!e})).join(" ")},G=function(e){switch(e){case"created":return"En attente";case"in-backlog":return"Dans le radar";case"active":return"En cours";case"finished":return"Termin\xe9e";case"abandoned":return"Abandonn\xe9e"}},Q=function(e){var t=e.state,a=e.showText,n=e.showCurrentBorder,c=e.showNotCurrent,o=e.onClick;return r.a.createElement("div",{title:a?void 0:G(t),className:q(_.a.taskStateIndicator,_.a[t],!a&&_.a.small,n&&_.a.thickBorder,c&&_.a.notCurrent,o&&_.a.clickable),onClick:o?function(e){e.stopPropagation(),o()}:void 0},a&&G(t))},X=a(18),Z=a.n(X),K=a(32),U=a.n(K),Y=function(e){var t=e.children;return r.a.createElement("div",{className:U.a.overlay},t)},$=a(20),ee=a.n($),te=function(e){var t=e.isLight,a=e.isWide,n=e.title,c=e.onClick,o=e.children;return r.a.createElement("div",{className:q(ee.a.button,t&&ee.a.light,a&&ee.a.wide),title:n,onClick:c},o)},ae=function(e){var t=e.title,a=e.buttons,n=e.children;return r.a.createElement(Y,null,r.a.createElement("div",{className:Z.a.dialog},t&&r.a.createElement("div",{className:Z.a.title},t),r.a.createElement("div",{className:Z.a.content},n),a&&r.a.createElement("div",{className:Z.a.buttons},a.map((function(e){return r.a.createElement(te,{isWide:!0,onClick:e.onclick},e.text)})))))},ne=a(33),re=a.n(ne),ce=function(e){var t=e.state,a=e.onChange,n=r.a.useCallback((function(e){return r.a.createElement(Q,{state:e,showText:!0,showCurrentBorder:e===t,showNotCurrent:e!==t,onClick:e===t?void 0:function(){a(e)}})}),[t,a]);return r.a.createElement("div",{className:re.a.spaceOutVerticalComponents},n("created"),n("in-backlog"),n("active"),r.a.createElement("div",{className:_.a.taskStateClosed},n("finished"),n("abandoned")))},oe=function(e){var t=e.state,a=e.onClose;return r.a.createElement(ae,{buttons:[{text:"Annuler",onclick:function(){a()}}]},r.a.createElement(ce,{state:t,onChange:a}))},ie=a(22),se=a.n(ie),le=function(e){var t=e.label,a=e.children;return r.a.createElement("div",{className:se.a.field},r.a.createElement("div",{className:se.a.label},t),r.a.createElement("div",null,a))},ue=[{id:"cp",name:"Conseil de paroisse"},{id:"scouts",name:"Scouts"},{id:"travaux",name:"Travaux maison"},{id:"achats",name:"Achats"},{id:"jardin",name:"Jardin"}],de=a(15),ve=a.n(de),me=function(e){var t=e.text,a=e.active,n=e.noTag,c=e.onClick,o=e.onRemove;return r.a.createElement("div",{className:q(ve.a.tag,c&&ve.a.clickable,a&&ve.a.active,n&&ve.a.noTag),onClick:c?function(e){e.stopPropagation(),c()}:void 0},t,o&&r.a.createElement("span",{className:ve.a.remove,onClick:function(e){e.stopPropagation(),o()}},"X"))},fe=function(e){var t=e.tagId,a=e.active,n=e.onClick,c=e.onRemove,o=ue.find((function(e){return e.id===t}));return r.a.createElement(me,{text:o?o.name:"Pas de cat\xe9gorie",active:a,noTag:null===t,onClick:n?function(){return n(t)}:void 0,onRemove:c})},he=a(26),pe=function(e){var t=e.tagId,a=e.onChange,n=e.onClose,c=r.a.useMemo((function(){var e=ue.map((function(e){return e.id}));return null===t||void 0===t?[null].concat(Object(he.a)(e)):[t,null].concat(Object(he.a)(e.filter((function(e){return e!==t}))))}),[t]);return r.a.createElement(ae,{buttons:[{text:"Annuler",onclick:function(){n()}}]},c.map((function(e){return r.a.createElement(fe,{tagId:e,active:e===t,onClick:e===t?void 0:a})})))},ge=function(e){var t=e.task,a=e.onChange,n=r.a.useState(!1),c=Object(g.a)(n,2),o=c[0],i=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{state:t.state,onChange:function(e){return a(Object(b.a)({},t,{},J(e)))}}),r.a.createElement(le,{label:"titre"},r.a.createElement("input",{type:"text",value:t.title,onChange:function(e){return a(Object(b.a)({},t,{title:e.target.value}))}})),r.a.createElement(le,{label:"cat\xe9gorie"},r.a.createElement(fe,{tagId:t.tagId,active:!0,onClick:function(){i(!0)}})),r.a.createElement(le,{label:"description"},r.a.createElement("textarea",{value:t.description,onChange:function(e){return a(Object(b.a)({},t,{description:e.target.value}))}})),o&&r.a.createElement(pe,{tagId:t.tagId,onChange:function(e){a(Object(b.a)({},t,{tagId:e})),i(!1)},onClose:function(){return i(!1)}}))};function ke(e){var t=Object(n.useMemo)((function(){return e.task?e.task.id:void 0}),[e.task]),a=Object(n.useState)(e.task||{id:"",tagId:null,state:"created",title:"",description:"",created:new Date,modified:new Date}),c=Object(g.a)(a,2),o=c[0],i=c[1],s=H(),l=s.createTask,u=s.updateTask;return r.a.createElement(ae,{title:t?"Modifier une t\xe2che":"Nouvelle t\xe2che",buttons:[{text:"Valider",onclick:function(){t?u(t,o):l(o),e.onClose()}},{text:"Annuler",onclick:e.onClose}]},r.a.createElement(ge,{task:o,onChange:i}))}var _e=function(e){var t=e.task,a=H().updateTask,n=r.a.useState(!1),c=Object(g.a)(n,2),o=c[0],i=c[1],s=r.a.useState(!1),l=Object(g.a)(s,2),u=l[0],d=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:function(){return i(!0)},className:_.a.task},r.a.createElement("div",{className:_.a.title},t.title),r.a.createElement(Q,{state:t.state,onClick:function(){return d(!0)}})),o&&r.a.createElement(ke,{task:t,onClose:function(){return i(!1)}}),u&&r.a.createElement(oe,{state:t.state,onClose:function(e){d(!1),e&&a(t.id,J(e))}}))},be=r.a.createContext(void 0),Ee=function(e){var t=e.children,a=V(),n=r.a.useState(a.getState()),c=Object(g.a)(n,2),o=c[0],i=c[1];return r.a.useEffect((function(){return a.subscribe(i)}),[a]),r.a.createElement(be.Provider,{value:o},t)},Ce=function(e){return r.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd",viewBox:"0 0 640 640"},e),r.a.createElement("path",{d:"M626.689 15.414zm-55.654 574.472v.011H459.336c-2.09 0-3.79-1.689-3.79-3.767V416.97l-.013-.508c0-4.701-.862-8.599-2.575-11.587a23.657 23.657 0 0 0-1.05-1.618 13.646 13.646 0 0 0-1.23-1.394l-.105-.13c-1.571-1.559-3.544-2.764-5.859-3.59l-1.287-.39-.201-.071h-.035c-2.15-.579-4.571-.874-7.205-.886h-.26l-.402-.012H204.262c-4.618 0-8.433.886-11.35 2.528l-.095.07-1.382.875-.212.189c-.485.354-.957.791-1.394 1.193l-.083.094-.035.036c-3.213 3.271-4.82 8.197-4.82 14.705l-.023.2V586.13h-.012c0 2.08-1.724 3.756-3.78 3.756h-63.874a3.744 3.744 0 0 1-2.681-1.11l-62.906-62.894a3.901 3.901 0 0 1-1.512-3.083V69.474l-.024-.402c0-4.323.78-7.949 2.292-10.795h.011c.284-.555.58-1.016.898-1.5l.13-.166a9.743 9.743 0 0 1 1.3-1.535l.046-.083.13-.13h.012c1.323-1.322 2.965-2.35 4.82-3.094l.188-.095.095-.035.082-.06.945-.318v.012l.071-.036c2.197-.708 4.713-1.05 7.512-1.11l.46-.035h54.202c2.079 0 3.791 1.689 3.791 3.767v227.436c0 2.729.237 5.35.697 7.796a36.732 36.732 0 0 0 2.02 6.992l.07.106.013.036v.012a38.87 38.87 0 0 0 3.472 6.52c1.347 2.019 2.894 4.027 4.713 5.905l.118.094.023.036.036.012a38.841 38.841 0 0 0 8.433 6.638l.06.011.07.024.07.035 1.678.886.024.012 2.09.933v.012l.036.012.012.012h.035v.011c1.713.709 3.472 1.347 5.232 1.784h.036l.165.023.047.012h.178l1.346.284v.012c2.362.448 4.854.708 7.382.732l.106-.012h309.181c5.386 0 10.323-.933 14.847-2.787l.07-.048c4.536-1.866 8.682-4.677 12.473-8.421l.142-.177c1.866-1.878 3.579-3.91 4.996-6.024a36.432 36.432 0 0 0 3.45-6.342l.011-.06.035-.059.036-.118a35.794 35.794 0 0 0 2.138-6.98l.023-.142c.46-2.457.685-5.067.685-7.772V53.871c0-2.079 1.725-3.78 3.827-3.78h53.765c3.047 0 5.693.367 8.008 1.075 2.492.78 4.618 2.032 6.26 3.674 1.346 1.334 2.433 3.023 3.189 4.972l-.024.012.07.095.32.909h-.024l.06.13c.72 2.138 1.05 4.654 1.11 7.406l.047.448v.284l-.024.082v501.727c0 2.906-.378 5.587-1.075 7.855l-.059.165v.012l-.012.118-.413 1.122h-.012l-.118.296-.472 1.039-.071.2-.13.213-.012-.012-.154.308-.755 1.169h-.012l-.26.401-.732.898-.32.354c-.767.815-1.7 1.56-2.74 2.186a17.6 17.6 0 0 1-2.881 1.358l-.331.118c-.839.283-1.76.52-2.74.72l-.095.012-.059.012-.094.024-.45.07-.106.024h-.023l-.083.012c-1.17.165-2.54.283-3.957.307h-.696zM467.912 51.155l-296.248-1.063V262.42h-.024c0 2.386.295 4.465.886 6.272.154.295.224.543.343.78a10.107 10.107 0 0 0 2.078 3.153l.154.142v.011c.295.296.59.544.874.768.307.26.697.496 1.063.709 2.055 1.193 4.795 1.76 8.232 1.76v.011l269 1.312v-.012h.023v.012c4.724 0 8.197-1.099 10.346-3.308 2.186-2.22 3.284-5.716 3.296-10.535h-.024V51.155zM221.177 426.502h79.23v.023c1.842 0 3.377 1.5 3.377 3.343V586.53c0 1.843-1.535 3.367-3.378 3.367h-79.23v-.012c-1.83 0-3.365-1.512-3.365-3.355V429.868c0-1.842 1.535-3.366 3.366-3.366zm405.596 197.672zm-576.15-622h543.55c6.355 0 12.237 1.122 17.67 3.342l2.646 1.17c4.394 2.137 8.469 5.066 12.272 8.799l3.39 3.85 2.929 4.075c4.594 7.217 6.933 15.425 6.933 24.591v543.538c0 6.33-1.122 12.225-3.354 17.693-2.21 5.445-5.516 10.418-9.922 14.988a46.306 46.306 0 0 1-7.724 6.32l-1.323.885a40.453 40.453 0 0 1-5.823 2.989c-5.457 2.29-11.35 3.413-17.705 3.413H90.475l-1.276-1.287-83.576-83.576-5.48-3.638V47.846C-1.7 27.544 14.683 7.89 32.907 5.493c5.469-2.209 11.374-3.319 17.717-3.319z"}))},xe=function(e){var t=e.headerControls,a=e.children,n=function(){var e=F(),t=V(),a=r.a.useRef({}),n=r.a.useState("all-saved"),c=Object(g.a)(n,2),o=c[0],i=c[1],s=r.a.useCallback((function(t){a.current.modelBeingSaved?a.current.modelToSave=t:Object(O.a)(w.a.mark((function n(){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.current={modelBeingSaved:t},i("saving"),n.next=4,e.saveData(t);case 4:if(!a.current.modelToSave){n.next=10;break}return a.current={modelBeingSaved:t},n.next=8,e.saveData(t);case 8:n.next=4;break;case 10:a.current={},i("all-saved");case 12:case"end":return n.stop()}}),n)})))()}),[e]);return r.a.useEffect((function(){return t.subscribe(s)}),[t,s]),o}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(i.b,{to:"/home"},"Home"),r.a.createElement(i.b,{to:"/tasks"},"T\xe2ches"),r.a.createElement("span",{title:"saving"===n?"En cours d'enregistrement...":"Toutes les donn\xe9es sont sauvegard\xe9es."},r.a.createElement(Ce,{className:q(l.a.saveButton,"saving"===n&&l.a.saving),height:20,width:20})),t),r.a.createElement("section",null,a))},we=function(e){return r.a.createElement("svg",Object.assign({},e,{viewBox:"0 0 10 10"}),r.a.createElement("path",{d:"M 0.25,1.5 4.25,6 v 3.75 H 5.75 V 6 l 4,-4.5 v -1.25 l -9.5,0 z",fill:"none",strokeWidth:.5,strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:4}))},Oe=function(e){var t=e.visible,a=e.value,n=e.onChange,c=r.a.useRef(null),o=r.a.useState(!1),i=Object(g.a)(o,2),s=i[0],l=i[1];return r.a.useEffect((function(){t&&c.current&&c.current.focus()}),[t]),r.a.createElement("div",{className:q(_.a.tasksFilter,t&&_.a.visible)},r.a.createElement("div",{className:_.a.tasksFilterInner},r.a.createElement("input",{ref:c,className:_.a.taskFilterText,value:a.text,onChange:function(e){return n(Object(b.a)({},a,{text:e.target.value}))}}),void 0===a.tagId?r.a.createElement(me,{text:"...",noTag:!0,onClick:function(){return l(!0)}}):r.a.createElement(fe,{tagId:a.tagId,active:!0,onClick:function(){return l(!0)},onRemove:function(){return n(Object(b.a)({},a,{tagId:void 0}))}})),s&&r.a.createElement(pe,{tagId:a.tagId,onChange:function(e){n(Object(b.a)({},a,{tagId:e})),l(!1)},onClose:function(){return l(!1)}}))};function Te(e){switch(e){case"active":return 0;case"in-backlog":return 1;case"created":return 2;case"finished":return 3;case"abandoned":return 4}}function je(e,t){return e.state!==t.state?Te(e.state)<Te(t.state)?-1:1:e.title.localeCompare(t.title)}function Se(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function ye(){var e=function(){var e=r.a.useContext(be);if(!e)throw new Error("Please define a BoussoleDataProvider upper in the component tree.");return e}(),t=r.a.useState(!1),a=Object(g.a)(t,2),n=a[0],c=a[1],o=r.a.useState({text:"",tagId:void 0}),i=Object(g.a)(o,2),s=i[0],l=i[1],u=r.a.useState(!1),d=Object(g.a)(u,2),v=d[0],m=d[1];return r.a.createElement(xe,{headerControls:r.a.createElement(te,{onClick:function(){return c(!n)},isLight:!0,title:"Filtrer"},r.a.createElement(we,{height:20,width:20,stroke:"white"}))},r.a.createElement("div",{className:_.a.taskList},r.a.createElement(Oe,{visible:n,value:s,onChange:l}),r.a.createElement("div",{className:_.a.tasks},function(e,t){var a=Object.keys(e).map((function(t){return e[t]})).sort(je);if(t){var n=t.text?Se(t.text):void 0;a=a.filter((function(e){return!(n&&!Se(e.title).includes(n)&&!Se(e.description).includes(n))&&(void 0===t.tagId||e.tagId===t.tagId)}))}return a}(e,n?s:void 0).map((function(e){return r.a.createElement(_e,{key:e.id,task:e})}))),r.a.createElement("div",{className:_.a.tasksButtons},r.a.createElement(te,{isWide:!0,onClick:function(){return m(!0)}},"+")),v&&r.a.createElement(ke,{task:void 0,onClose:function(){return m(!1)}})))}var Ne=a(19),Ie=a.n(Ne),Be=function(e){var t=e.svg,a=e.size;return r.a.createElement("div",{className:Ie.a.iconPreview},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t},style:{height:a,width:a}}))},De=function(){var e=r.a.useState(""),t=Object(g.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:Ie.a.iconDesigner},r.a.createElement("textarea",{value:a,onChange:function(e){return n(e.target.value)}}),r.a.createElement(Be,{svg:a,size:200}),r.a.createElement(Be,{svg:a,size:100}),r.a.createElement(Be,{svg:a,size:50}),r.a.createElement(Be,{svg:a,size:32}),r.a.createElement(Be,{svg:a,size:25}))};function Pe(){var e=Object(u.g)();return r.a.createElement(r.a.Fragment,null,"Invalid path: \xab ",e.pathname," \xbb")}var Ae=function(){return r.a.createElement("div",{className:l.a.app},r.a.createElement(p,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0},r.a.createElement(u.a,{to:"/tasks"})),r.a.createElement(u.b,{path:"/home",exact:!0},r.a.createElement(xe,null,"Home page",r.a.createElement(De,null))),r.a.createElement(u.b,{path:"/tasks",exact:!0},r.a.createElement(ye,null)),r.a.createElement(u.b,{path:"*"},r.a.createElement(Pe,null)))))},Fe=a(25),Me=a.n(Fe),Re=a(36),ze=a.n(Re),Ve=function(e){for(var t=e.done,a=e.total,n=e.message,c=[],o=0;o<a;o++)c.push(r.a.createElement("rect",{x:120*o,y:"2.5",width:"95",height:"95",rx:"25",ry:"25",style:{fill:o<t?"rgb(125, 160, 191)":"rgb(255, 255, 255)",strokeWidth:5,stroke:"rgb(67, 106, 140)"}}));return r.a.createElement("div",{className:Me.a.loadStatus},r.a.createElement("img",{src:ze.a,alt:"logo"}),r.a.createElement("svg",{className:Me.a.loadBar,viewBox:"0 0 ".concat(120*a-20," 100")},c),n)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){return r.a.createElement(D,{getNotAuthenticatedComponents:function(){return r.a.createElement(Ve,{done:0,total:2,message:"Authentification en cours..."})},getAuthenticatedComponents:function(){return r.a.createElement(A,null,r.a.createElement(z,{getNotReadyComponents:function(){return r.a.createElement(Ve,{done:1,total:2,message:"Chargement des donn\xe9es..."})},getReadyComponents:function(){return r.a.createElement(Ee,null,r.a.createElement(W,null,r.a.createElement(i.a,null,r.a.createElement(Ae,null))))}}))}})}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[39,1,2]]]);
//# sourceMappingURL=main.b16c706b.chunk.js.map