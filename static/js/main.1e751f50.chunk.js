(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,t,a){e.exports=a(177)},176:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);a(139),a(164);var n=a(0),c=a.n(n),i=a(15),r=a.n(i),l=a(28),o=a.n(l),s=a(67),m=a(68),u=a(77),d=a(69),p=a(78),h=a(6),f=(a(175),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(h.h,{id:t},c.a.createElement(h.i,null,"Example"),n&&c.a.createElement(h.d,{title:"User Data Fetched with VK Connectnnnn"},c.a.createElement(h.g,{before:n.photo_200?c.a.createElement(h.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(h.d,{title:"Navigation Example"},c.a.createElement(h.c,null,c.a.createElement(h.b,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me tmmmmmmmmhe Persik, please"))))}),E=a(74),b=a.n(E),k=(a(176),a(75)),g=a.n(k),v=a(76),w=a.n(v),y=Object(h.k)(),P=function(e){return c.a.createElement(h.h,{id:e.id},c.a.createElement(h.i,{left:c.a.createElement(h.e,{onClick:e.go,"data-to":"home"},y===h.f?c.a.createElement(g.a,null):c.a.createElement(w.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:b.a,alt:"Persik The Cat"}))},U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement(h.j,{activePanel:this.state.activePanel},c.a.createElement(f,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),c.a.createElement(P,{id:"persik",go:this.go}))}}]),t}(c.a.Component);o.a.send("VKWebAppInit",{}),r.a.render(c.a.createElement(U,null),document.getElementById("root"))},74:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[138,1,2]]]);
//# sourceMappingURL=main.1e751f50.chunk.js.map