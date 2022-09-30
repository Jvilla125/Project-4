(this["webpackJsonpjwt-boilerplate"]=this["webpackJsonpjwt-boilerplate"]||[]).push([[0],{156:function(e,t,n){},157:function(e,t,n){},161:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(54),o=n.n(a),s=(n(155),n(156),n(12)),c=n(10),i=(n(157),n(14)),l=n(41),u=n(37),j=n(8),h=n.n(j),p=n(2);function d(e){return Object(p.jsx)("span",{className:"error",children:e.error})}n(161);function g(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var b={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:g,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=g();return e?JSON.parse(atob(e.split(".")[1])).user:null}},f="/api/users/";var m={signup:function(e){return fetch(f+"signup",{method:"POST",body:e}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return b.setToken(t)}))},logout:function(){b.removeToken()},login:function(e){return fetch(f+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return b.setToken(t)}))},getUser:function(){return b.getUserFromToken()},getProfile:function(e){return console.log("getProfile calling"),fetch(f+e,{headers:{Authorization:"Bearer "+b.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error("Error from getProfile Request, check the server terminal!")}))}},O=n(19),x=n(207),v=n(203),k=n(209),w=n(205);function y(e){var t=Object(r.useState)({message:"",passwordError:!1}),n=Object(s.a)(t,2),a=n[0],o=n[1],j=Object(r.useState)({username:"",email:"",password:"",passwordConf:""}),g=Object(s.a)(j,2),b=g[0],f=g[1],y=Object(r.useState)(""),L=Object(s.a)(y,2),C=L[0],S=L[1],U=Object(c.g)();function E(e){f(Object(u.a)(Object(u.a)({},b),{},Object(l.a)({},e.target.name,e.target.value)))}function P(e,t){return e===t}function I(){return(I=Object(i.a)(h.a.mark((function t(n){var r,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),P(b.password,b.passwordConf)){t.next=3;break}return t.abrupt("return",o({message:"Passwords Must Match!",passwordError:!0}));case 3:for(a in o({message:"",passwordError:!1}),(r=new FormData).append("photo",C),b)r.append(a,b[a]);return console.log(r.forEach((function(e){return console.log(e)})),"<- this is each value in the formData"),t.prev=8,t.next=11,m.signup(r);case 11:e.handleSignUpOrLogin(),U("/"),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(8),o({message:t.t0.message,passwordError:!1});case 18:case"end":return t.stop()}}),t,null,[[8,15]])})))).apply(this,arguments)}return Object(p.jsx)(x.a,{className:"test",textAlign:"center",style:{height:"100vh",width:"100vw"},verticalAlign:"middle",children:Object(p.jsxs)(x.a.Column,{className:"SignUpColumn",style:{maxWidth:450},inverted:!0,children:[Object(p.jsxs)(v.a,{className:"SignUpForm",onSubmit:function(e){return I.apply(this,arguments)},inverted:!0,children:[Object(p.jsxs)(k.a,{inverted:!0,stacked:!0,children:[Object(p.jsx)("h1",{as:"h2",children:"Please Sign Up"}),Object(p.jsx)(v.a.Input,{name:"username",placeholder:"username",value:b.username,onChange:E,required:!0}),Object(p.jsx)(v.a.Input,{type:"email",name:"email",placeholder:"email",value:b.email,onChange:E,required:!0}),Object(p.jsx)(v.a.Input,{type:"password",name:"password",placeholder:"password",value:b.password,onChange:E,required:!0}),Object(p.jsx)(v.a.Input,{type:"password",name:"passwordConf",placeholder:"password Confirmation",value:b.passwordConf,onChange:E,required:!0}),Object(p.jsx)(v.a.Input,{type:"file",name:"photo",placeholder:"upload image",onChange:function(e){console.log(e.target.files,"<-- this is the image upload"),S(e.target.files[0])},required:!0}),Object(p.jsx)(w.a,{type:"submit",children:"Sign up"})]}),a.message?Object(p.jsx)(d,{error:a.message}):null]}),Object(p.jsx)(k.a,{inverted:!0,children:Object(p.jsxs)("h3",{children:["If you have an account, please ",Object(p.jsx)(O.b,{to:"/login",children:"Log In"})]})})]})})}n(167);function L(e){var t=Object(r.useState)(""),n=Object(s.a)(t,2),a=n[0],o=n[1],j=Object(r.useState)({username:"",password:""}),g=Object(s.a)(j,2),b=g[0],f=g[1],y=Object(c.g)();function L(e){f(Object(u.a)(Object(u.a)({},b),{},Object(l.a)({},e.target.name,e.target.value)))}function C(){return(C=Object(i.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,m.login(b);case 4:e.handleSignUpOrLogin(),y("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),o(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(p.jsx)(x.a,{className:"LoginGrid",textAlign:"center",style:{height:"100vh",width:"100vw"},verticalAlign:"middle",children:Object(p.jsxs)(x.a.Column,{style:{maxWidth:450},className:"LoginColumn",inverted:!0,children:[Object(p.jsxs)(v.a,{onSubmit:function(e){return C.apply(this,arguments)},className:"LoginForm",inverted:!0,children:[Object(p.jsxs)(k.a,{inverted:!0,children:[Object(p.jsx)("h1",{as:"h2",children:"Please log in below"}),Object(p.jsx)(v.a.Input,{type:"username",name:"username",placeholder:"username",value:b.username,onChange:L,required:!0}),Object(p.jsx)(v.a.Input,{type:"password",name:"password",placeholder:"password",value:b.password,onChange:L,required:!0}),Object(p.jsx)(w.a,{type:"submit",children:"Log in"})]}),a.message?Object(p.jsx)(d,{error:a.message}):null]}),Object(p.jsx)(k.a,{inverted:!0,children:Object(p.jsxs)("h3",{children:["If you do you have an account, please ",Object(p.jsx)(O.b,{to:"/Signup",children:"Sign up."})]})})]})})}var C=n(124),S=(n(168),n(210)),U=n(136),E=n(202),P=n(80),I=(n(169),"/api/");function T(e){return fetch("".concat(I,"posts/").concat(e,"/likes"),{method:"POST",headers:{Authorization:"Bearer "+b.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error(e.error)}))}function A(e){return fetch("".concat(I,"likes/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer "+b.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error(e.error)}))}n(170);var z="/api/";function D(e){return fetch("".concat(z,"posts/").concat(e,"/listenlater"),{method:"POST",headers:{Authorization:"Bearer "+b.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error(e.error)}))}function F(e){return fetch("".concat(z,"listenlater/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer "+b.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error(e.error)}))}var N=n(204),q="/api/posts";function B(e){return fetch(q,{method:"POST",body:e,headers:{Authorization:"Bearer "+b.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))}function W(){return fetch(q,{headers:{Authorization:"Bearer "+b.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))}function _(e){var t=e.posts,n=e.loggedUser,r=e.isProfile,a=e.addLike,o=e.removeLike,s=e.listenLater,c=e.removeListenLater,i=t.likes.findIndex((function(e){return e.username===n.username})),l=i>-1?"blue":"grey",u=i>-1?function(){return o(t.likes[i]._id)}:function(){return a(t._id)},j=t.listenlater.findIndex((function(e){return e.username===n.username})),h=j>-1?"blue":"grey",d=j>-1?function(){return c(t.listenlater[j]._id)}:function(){return s(t._id)};return Object(p.jsxs)(N.a,{style:{maxWidth:300,maxHeight:600},color:"green",raised:!0,children:[r?"":Object(p.jsx)(N.a.Content,{children:Object(p.jsx)(N.a.Header,{children:Object(p.jsxs)(O.b,{to:"/".concat(t.user.username),children:[Object(p.jsx)(U.a,{size:"large",avatar:!0,src:t.user.photoUrl?t.user.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png"}),t.user.username]})})}),Object(p.jsx)(U.a,{size:"medium",src:"".concat(null===t||void 0===t?void 0:t.photoUrl),bordered:!0}),Object(p.jsxs)(N.a.Content,{children:[Object(p.jsxs)(N.a.Description,{children:["Artist: ",t.artist]}),Object(p.jsxs)(N.a.Description,{children:["Genre: ",t.genre]}),Object(p.jsxs)(N.a.Description,{children:["Song: ",t.song]}),Object(p.jsxs)(N.a.Description,{children:["Mood: ",t.mood]})]}),Object(p.jsxs)(N.a.Content,{children:[Object(p.jsx)(P.a,{name:"thumbs up",color:l,onClick:u}),t.likes.length," Likes"]}),Object(p.jsxs)(N.a.Content,{children:[Object(p.jsx)(P.a,{name:"heart",color:h,onClick:d})," ",t.listenlater.length," Listen to later"]}),Object(p.jsx)(N.a.Content,{children:t.user.username===n.username?Object(p.jsx)("button",{onClick:function(){var e;e=t._id,fetch("/api/posts/"+e,{method:"DELETE",headers:{Authorization:"Bearer "+b.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))},children:"Delete"}):" "})]},t._id)}var J=n(208),R=n(201);function G(){return Object(p.jsx)(R.a,{size:"medium",active:!0,children:"Loading"})}function H(e){var t=e.posts,n=e.isProfile,r=e.loggedUser,a=e.loading,o=e.addLike,s=e.removeLike,c=e.listenLater,i=e.removeListenLater;return Object(p.jsxs)(N.a.Group,{itemsPerRow:3,stackable:!0,children:[a?Object(p.jsxs)(k.a,{children:[Object(p.jsx)(J.a,{active:!0,inverted:!0,children:Object(p.jsx)(G,{size:"small",children:"Loading"})}),Object(p.jsx)(U.a,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"})]}):null,t.map((function(e){return Object(p.jsx)(_,{style:{maxWidth:300,maxHeight:600},posts:e,loggedUser:r,isProfile:n,addLike:o,removeLike:s,listenLater:c,removeListenLater:i},e._id)}))]})}function M(e){var t=e.loggedUser,n=Object(r.useState)([]),a=Object(s.a)(n,2),o=a[0],l=a[1],u=Object(r.useState)({}),j=Object(s.a)(u,2),d=(j[0],j[1]),g=Object(r.useState)(""),b=Object(s.a)(g,2),f=(b[0],b[1]),O=Object(c.h)().username;function x(){return(x=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T(t);case 3:n=e.sent,console.log(n,"<-- adding a like"),y(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f("Cannot add a like, try again");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(){return(v=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A(t);case 3:n=e.sent,console.log(n,"<- Removing a like"),y(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f("Cannot remove a like, try again");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function k(){return(k=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D(t);case 3:n=e.sent,console.log(n,"<-- favoriting"),y(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f("Cannot save for later, try again");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function w(){return(w=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F(t);case 3:n=e.sent,console.log(n,"<- removing"),y(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f("Cannot remove, try again");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var y=Object(r.useCallback)(Object(i.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.getProfile(O);case 3:t=e.sent,d(t.data.user),l(t.data.posts),console.log(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),f("Profile does not exist! You are in the wrong place");case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),[O]);return Object(r.useEffect)((function(){console.log("It is working!!"),y()}),[O,y]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Y,{loggedUser:t}),Object(p.jsx)(H,{posts:o,numPhotosCol:1,isProfile:!0,loggedUser:t,addLike:function(e){return x.apply(this,arguments)},removeLike:function(e){return v.apply(this,arguments)},listenLater:function(e){return k.apply(this,arguments)},removeListenLater:function(e){return w.apply(this,arguments)}})]})}function Y(e){var t=e.loggedUser;e.handleLogout;return Object(p.jsxs)(k.a,{id:"header",children:[Object(p.jsx)(S.a,{className:"header-text",as:"h2",floated:"left",children:Object(p.jsxs)(O.b,{to:"/".concat(null===t||void 0===t?void 0:t.username),children:[Object(p.jsx)(U.a,{circular:!0,src:null!==t&&void 0!==t&&t.photoUrl?null===t||void 0===t?void 0:t.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png",avatar:!0,size:"tiny"}),Object(p.jsxs)("span",{children:[" ",null===t||void 0===t?void 0:t.username]})]})}),Object(p.jsxs)(S.a,{className:"links",textAlign:"center",children:[Object(p.jsx)("h3",{children:Object(p.jsx)(E.a,{content:"Profile",trigger:Object(p.jsx)(O.b,{to:"/".concat(null===t||void 0===t?void 0:t.username),children:Object(p.jsx)(P.a,{name:"user outline",color:"blue"})}),inverted:!0})}),Object(p.jsx)("h3",{children:Object(p.jsx)(O.b,{to:"/listenlater",children:"Listen to Later"})}),Object(p.jsx)("h3",{children:Object(p.jsx)(O.b,{to:"/",children:"Feed"})}),Object(p.jsx)("h3",{children:Object(p.jsx)(O.b,{to:"/Login",children:Object(p.jsx)(P.a,{name:"log out",color:"blue"})})})]})]})}function $(e){var t=Object(r.useState)({song:"",artist:"",genre:"",mood:""}),n=Object(s.a)(t,2),a=n[0],o=n[1],c=Object(r.useState)(""),i=Object(s.a)(c,2),j=i[0],h=i[1];function d(e){o(Object(u.a)(Object(u.a)({},a),{},Object(l.a)({},e.target.name,e.target.value)))}function g(t){t.preventDefault();var n=new FormData;for(var r in n.append("photo",j),a)n.append(r,a[r]);console.log(n.forEach((function(e){return console.log(e)})),"<- this is each value"),e.handleAddPost(n)}return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(E.a,{content:Object(p.jsx)(k.a,{style:{maxWidth:450},position:"center",children:Object(p.jsxs)(v.a,{onSubmit:g,children:[Object(p.jsx)(v.a.Input,{name:"song",value:a.song,placeholder:"Song",onChange:d}),Object(p.jsx)(v.a.Input,{name:"artist",value:a.artist,placeholder:"Artist",onChange:d}),Object(p.jsx)(v.a.Input,{name:"genre",value:a.genre,placeholder:"Genre",onChange:d}),Object(p.jsx)(v.a.Input,{name:"mood",value:a.mood,placeholder:"mood",onChange:d}),Object(p.jsx)(v.a.Field,{children:Object(p.jsx)(v.a.Input,{type:"file",name:"photo",placeholder:"upload image",onChange:function(e){h(e.target.files[0])}})}),Object(p.jsx)(w.a,{type:"submit",onClick:g,children:"Submit Post!"})]})}),on:"click",positionFixed:!0,trigger:Object(p.jsxs)(w.a,{animated:"vertical",size:"large",children:[Object(p.jsx)(w.a.Content,{visible:!0,children:Object(p.jsx)(P.a,{name:"add square",color:"blue",size:"large"})}),Object(p.jsx)(w.a.Content,{hidden:!0,children:"Add a Post!"})]})})})}function K(e){var t=e.loggedUser,n=e.handleLogout,a=Object(r.useState)([]),o=Object(s.a)(a,2),c=o[0],l=o[1],u=Object(r.useState)(!0),j=Object(s.a)(u,2),d=j[0],g=j[1],b=Object(r.useState)(""),f=Object(s.a)(b,2),m=f[0],O=f[1];function x(){return(x=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T(t);case 3:n=e.sent,console.log(n,"<-- adding a like"),L(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),O("Cannot add a like, try again");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(){return(v=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A(t);case 3:n=e.sent,console.log(n,"<- Removing a like"),L(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),O("Cannot remove a like, try again");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function k(){return(k=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D(t);case 3:n=e.sent,console.log(n,"<-- favoriting"),L(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),O("Cannot save for later, try again");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function w(){return(w=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F(t);case 3:n=e.sent,console.log(n,"<- removing"),L(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),O("Cannot remove, try again");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function y(){return y=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,B(t);case 4:n=e.sent,console.log(n),l([n.data].concat(Object(C.a)(t))),g(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),O("Error creating post, please try again");case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),y.apply(this,arguments)}function L(){return S.apply(this,arguments)}function S(){return(S=Object(i.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W();case 3:t=e.sent,l(Object(C.a)(t.data)),g(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),g(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){L()}),[]),m?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(Y,{handleLogout:n,loggedUser:t})}):d?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Y,{handleLogout:n,loggedUser:t}),Object(p.jsx)(G,{})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Y,{loggedUser:t}),Object(p.jsx)($,{handleAddPost:function(e){return y.apply(this,arguments)}}),Object(p.jsx)(H,{posts:c,loggedUser:t,loading:d,isProfile:!1,addLike:function(e){return x.apply(this,arguments)},removeLike:function(e){return v.apply(this,arguments)},listenLater:function(e){return k.apply(this,arguments)},removeListenLater:function(e){return w.apply(this,arguments)},setPost:!0})]})}function Q(e){var t=e.loggedUser,n=Object(r.useState)([]),a=Object(s.a)(n,2),o=a[0],l=a[1],u=Object(r.useState)({}),j=Object(s.a)(u,2),d=(j[0],j[1]),g=Object(r.useState)(""),b=Object(s.a)(g,2),f=(b[0],b[1]),O=Object(c.h)().username;function x(){return(x=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T(t);case 3:n=e.sent,console.log(n,"<-- adding a like"),y(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f("Cannot add a like, try again");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(){return(v=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A(t);case 3:n=e.sent,console.log(n,"<- Removing a like"),y(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f("Cannot remove a like, try again");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function k(){return(k=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D(t);case 3:n=e.sent,console.log(n,"<-- favoriting"),y(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f("Cannot save for later, try again");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function w(){return(w=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F(t);case 3:n=e.sent,console.log(n,"<- removing"),y(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f("Cannot remove, try again");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var y=Object(r.useCallback)(Object(i.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.getProfile(O);case 3:t=e.sent,d(t.data.user),l(t.data.posts),console.log(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),f("Profile does not exist! You are in the wrong place");case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),[O]);return Object(r.useEffect)((function(){console.log("It is working!!"),y()}),[O,y]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Y,{loggedUser:t}),Object(p.jsx)(H,{posts:o,numPhotosCol:1,isProfile:!0,loggedUser:t,addLike:function(e){return x.apply(this,arguments)},removeLike:function(e){return v.apply(this,arguments)},listenLater:function(e){return k.apply(this,arguments)},removeListenLater:function(e){return w.apply(this,arguments)}}),Object(p.jsx)("h1",{children:"Listen to these songs later"})]})}var V=function(){var e=Object(r.useState)(m.getUser()),t=Object(s.a)(e,2),n=t[0],a=t[1];function o(){a(m.getUser())}function i(){m.logout(),a(null)}return n?Object(p.jsxs)(c.d,{children:[Object(p.jsx)(c.b,{path:"/",element:Object(p.jsx)(K,{loggedUser:n,handleLogout:i})}),Object(p.jsx)(c.b,{path:"/login",element:Object(p.jsx)(L,{handleSignUpOrLogin:o})}),Object(p.jsx)(c.b,{path:"/signup",element:Object(p.jsx)(y,{handleSignUpOrLogin:o})}),Object(p.jsx)(c.b,{path:"/listenlater",element:Object(p.jsx)(Q,{loggedUser:n,handleLogout:i})}),Object(p.jsx)(c.b,{path:"/:username",element:Object(p.jsx)(M,{loggedUser:n,handleLogout:i})})]}):Object(p.jsxs)(c.d,{children:[Object(p.jsx)(c.b,{path:"/login",element:Object(p.jsx)(L,{handleSignUpOrLogin:o})}),Object(p.jsx)(c.b,{path:"/signup",element:Object(p.jsx)(y,{handleSignUpOrLogin:o})}),Object(p.jsx)(c.b,{path:"/*",element:Object(p.jsx)(c.a,{to:"/login"})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(p.jsx)(O.a,{children:Object(p.jsx)(V,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[186,1,2]]]);
//# sourceMappingURL=main.ef14887a.chunk.js.map