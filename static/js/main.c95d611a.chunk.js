(this.webpackJsonpboussole=this.webpackJsonpboussole||[]).push([[0],{174:function(e,t,a){e.exports=a(350)},179:function(e,t,a){},180:function(e,t,a){},211:function(e,t){},213:function(e,t){},234:function(e,t){},236:function(e,t){},267:function(e,t){},268:function(e,t){},350:function(e,t,a){"use strict";a.r(t);var n,r,o=a(0),c=a.n(o),i=a(169),u=a.n(i),s=(a(179),a(173)),l=(a(180),a(28)),h=a(53),d=a(10),m=a.n(d),f=a(170),g=a(89);!function(e){e.AuthRequired="AuthRequired",e.CodeReceived="CodeReceived",e.Authenticated="Authenticated"}(n||(n={})),function(e){e.Error="Error"}(r||(r={}));var p=new g.OAuth2Client({clientId:"186913784324-m1t1kuq00ppjb91tfgon8sid139dm7sd.apps.googleusercontent.com",redirectUri:"".concat(window.location.origin)});p.transporter.configure();var w=["https://www.googleapis.com/auth/userinfo.profile","https://www.googleapis.com/auth/drive"];function v(e,t){return e?e.status===r.Error&&t.status===r.Error?e.errorMessage===t.errorMessage?e:t:e.status===t.status?e:t:t}function E(e){var t=e.setAuthInfo,a=e.authInfo,o=Object(l.f)();if("/auth"===o.pathname){var c=new URLSearchParams(window.location.search),i=c.get("code"),u=c.get("state");if(!i)return t(v(a,{status:r.Error,errorMessage:"'code' parameter is missing."})),null;localStorage.setItem("auth-code",i),window.location.href=u||"/",t(v(a,{status:n.CodeReceived}))}else{var s=localStorage.getItem("auth-codeVerifier"),h=localStorage.getItem("auth-code");if(s&&h)return t(v(a,{status:n.Authenticated})),null;t(v(a,{status:n.AuthRequired})),Object(f.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.generateCodeVerifierAsync();case 2:t=e.sent,localStorage.setItem("auth-codeVerifier",t.codeVerifier),a=p.generateAuthUrl({scope:w,code_challenge:t.codeChallenge,code_challenge_method:g.CodeChallengeMethod.S256,login_hint:"lucmoco@gmail.com",state:o.pathname}),window.location.href=a;case 6:case"end":return e.stop()}}),e)})))()}return null}function A(){var e=Object(l.f)();return c.a.createElement(c.a.Fragment,null,"Invalid path: \xab ",e.pathname," \xbb")}var b=function(){var e=c.a.useState(void 0),t=Object(s.a)(e,2),a=t[0],n=t[1];return c.a.createElement(h.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(h.b,{to:"/"},"Home"),c.a.createElement(h.b,{to:"/page"},"Page"),c.a.createElement(E,{setAuthInfo:n,authInfo:a}),c.a.createElement("div",null,"Authentication Status: ",a&&a.status),a&&a.status===r.Error&&c.a.createElement("div",null,'Error: "',a.errorMessage,'"'),c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/auth",exact:!0},"Authentication"),c.a.createElement(l.a,{path:"/",exact:!0},"Home"),c.a.createElement(l.a,{path:"/page",exact:!0},"Some page"),c.a.createElement(l.a,{path:"*"},c.a.createElement(A,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},86:function(e,t){}},[[174,1,2]]]);
//# sourceMappingURL=main.c95d611a.chunk.js.map