(this.webpackJsonpboussole=this.webpackJsonpboussole||[]).push([[0],{158:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},160:function(e,t,n){e.exports=n(332)},165:function(e,t,n){},166:function(e,t,n){},197:function(e,t){},199:function(e,t){},220:function(e,t){},222:function(e,t){},253:function(e,t){},254:function(e,t){},332:function(e,t,n){"use strict";n.r(t);var o=n(18),r=n.n(o),a=n(157),c=n.n(a),s=(n(165),n(158)),i=n.n(s),l=(n(166),n(8)),u=n.n(l),p=n(80),g=new(n(159).OAuth2Client)({clientId:"186913784324-m1t1kuq00ppjb91tfgon8sid139dm7sd.apps.googleusercontent.com",redirectUri:"https://localhost:3000"}),d=new URLSearchParams(window.location.search).get("code");if(!d){console.log("No code yet. Retrieving one...");var f=g.generateAuthUrl({scope:["https://www.googleapis.com/auth/userinfo.profile","https://www.googleapis.com/auth/drive"]});window.location.href=f}console.log("A code has been retrieved: ",d);var h=function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getting token..."),e.next=3,g.getToken(d);case 3:t=e.sent,console.log("Credentials: ",t),g.setCredentials(t.tokens);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function w(){return(w=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("executing x..."),e.next=3,h();case 3:return console.log("retrieving access token..."),e.next=6,g.getAccessToken();case 6:return t=e.sent,console.log("retrieved access token",t),"https://www.googleapis.com/drive/v2/files",e.next=11,g.request({url:"https://www.googleapis.com/drive/v2/files"});case 11:return n=e.sent,e.abrupt("return",n.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return w.apply(this,arguments)})().then((function(e){console.log("data retrieved",e)}));var m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.tsx")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},77:function(e,t){}},[[160,1,2]]]);
//# sourceMappingURL=main.57cb1aef.chunk.js.map