(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},258:function(e,t,a){e.exports=a(473)},300:function(e,t){},302:function(e,t){},332:function(e,t){},333:function(e,t){},365:function(e,t){},366:function(e,t){},472:function(e,t,a){},473:function(e,t,a){"use strict";a.r(t);a(259),a(284);var n=a(0),c=a.n(n),i=a(31),r=a.n(i),l=a(60),o=a.n(l),s=a(187),u=a(188),m=a(197),d=a(189),f=a(198),p=a(16),h=(a(295),a(65),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(p.h,{id:t},c.a.createElement(p.i,null,"MSA APP"),n&&c.a.createElement(p.d,{title:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"},c.a.createElement(p.g,{before:n.photo_200?c.a.createElement(p.a,{src:n.photo_200}):null,description:n.id},"".concat(n.first_name," ").concat(n.last_name))),n&&c.a.createElement(p.d,{title:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"},c.a.createElement(p.c,null,c.a.createElement("img",{className:"Persik",src:n.photo_max_orig,alt:"Persik The Cat"}))),c.a.createElement(p.d,{title:"Navigation Example"},c.a.createElement(p.c,null,c.a.createElement(p.b,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u041f\u0435\u0440\u0441\u0438\u043a\u0430 ",void 0))))}),E=a(194),b=a.n(E),g=(a(472),a(195)),k=a.n(g),v=a(196),P=a.n(v),j=Object(p.k)(),w=function(e){return c.a.createElement(p.h,{id:e.id},c.a.createElement(p.i,{left:c.a.createElement(p.e,{onClick:e.go,"data-to":"home"},j===p.f?c.a.createElement(k.a,null):c.a.createElement(P.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:b.a,alt:"Persik The Cat"}))},U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement(p.j,{activePanel:this.state.activePanel},c.a.createElement(h,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),c.a.createElement(w,{id:"persik",go:this.go}))}}]),t}(c.a.Component);o.a.send("VKWebAppInit",{}),r.a.render(c.a.createElement(U,null),document.getElementById("root"))}},[[258,1,2]]]);
//# sourceMappingURL=main.50557513.chunk.js.map