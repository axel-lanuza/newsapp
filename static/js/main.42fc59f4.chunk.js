(this.webpackJsonplareact=this.webpackJsonplareact||[]).push([[0],{55:function(e,t,a){e.exports=a(85)},85:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),s=a.n(r),o=a(12),i=a(13),l=a(3),u=a(15),h=a(14),m=a(9),v=a(7),b=a(16),f=a(20),p=(a(28),function(e){var t=e.message;return c.a.createElement("h2",null,t)}),S=a(18),d=a(91),E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.input.focus()}},{key:"render",value:function(){var e=this,t=this.props,a=t.onChange,n=t.value,r=t.children,s=t.onSubmit;return c.a.createElement("form",{onSubmit:s},c.a.createElement(d.a,null,c.a.createElement("h1",{style:{fontWeight:"bold"}},r),c.a.createElement("hr",{style:{border:"2px solid black",width:"100%"}}),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{className:"form-control width100 searchForm",type:"text",value:n,onChange:a,ref:function(t){e.input=t}}),c.a.createElement("span",{className:"input-group-btn"},c.a.createElement("button",{className:"btn btn-primary searchBtn",type:"submit"},"Search")))))}}]),a}(n.Component),T=function(e){var t=e.sortKey,a=e.onSort,n=e.children,r=(e.className,e.activeSortKey),s=["btn btn-default sortBtn"];return t===r&&s.push("btn btn-primary"),c.a.createElement(g,{className:s.join(" "),onClick:function(){return a(t)}},n)},g=function(e){var t=e.onClick,a=e.children,n=e.className,r=void 0===n?"":n;return c.a.createElement("button",{className:r,onClick:t},a)};g.defaultProps={className:""};var j={NONE:function(e){return e},TITLE:function(e){return Object(S.sortBy)(e,"title")},AUTHOR:function(e){return Object(S.sortBy)(e,"author")},COMMENTS:function(e){return Object(S.sortBy)(e,"num_comments").reverse()},POINTS:function(e){return Object(S.sortBy)(e,"points").reverse()}},y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={sortKey:"NONE",isSortReverse:!1},n.onSort=n.onSort.bind(Object(l.a)(n)),n}return Object(i.a)(a,[{key:"onSort",value:function(e){var t=this.state.sortKey===e&&!this.state.isSortReverse;this.setState({sortKey:e,isSortReverse:t})}},{key:"render",value:function(){var e=this.props,t=e.list,a=e.removeItem,n=this.state,r=n.sortKey,s=n.isSortReverse,o=j[r](t),i=s?o.reverse():o;return c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"text-center"},c.a.createElement("hr",null),c.a.createElement(T,{className:"btn btn-xs btn-default sortBtn",sortKey:"NONE",onSort:this.onSort,activeSortKey:r},"Default"),c.a.createElement(T,{className:"btn btn-xs btn-default sortBtn",sortKey:"TITLE",onSort:this.onSort,activeSortKey:r},"Title"),c.a.createElement(T,{className:"btn btn-xs btn-default sortBtn",sortKey:"AUTHOR",onSort:this.onSort,activeSortKey:r},"Author"),c.a.createElement(T,{className:"btn btn-xs btn-default sortBtn",sortKey:"COMMENTS",onSort:this.onSort,activeSortKey:r},"Num of comments"),c.a.createElement(T,{className:"btn btn-xs btn-default sortBtn",sortKey:"POINTS",onSort:this.onSort,activeSortKey:r},"Points"),c.a.createElement("hr",null)),i.map((function(e){return c.a.createElement("div",{key:e.objectID},c.a.createElement("h1",null,c.a.createElement("a",{href:e.url},e.title)),c.a.createElement("h4",null,e.author," | ",e.num_comments," Comments | ",e.points," Points",c.a.createElement(g,{className:"btn btn-xs",type:"button",onClick:function(){return a(e.objectID)}},"Remove"))," ",c.a.createElement("hr",null))})))}}]),a}(n.Component),O=a(87),k=a(88),N="http://hn.algolia.com/api/v1/",K="hitsPerPage=",L="".concat(N).concat("/search","?").concat("query=").concat("react","&").concat("page=").concat(0,"&").concat(K).concat(100);console.log(L);var C,I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={results:null,searchKey:"",searchTerm:"react",isLoading:!1},n.removeItem=n.removeItem.bind(Object(l.a)(n)),n.searchValue=n.searchValue.bind(Object(l.a)(n)),n.fetchTopStories=n.fetchTopStories.bind(Object(l.a)(n)),n.setTopStories=n.setTopStories.bind(Object(l.a)(n)),n.onSubmit=n.onSubmit.bind(Object(l.a)(n)),n.checkTopStoriesSearchTerm=n.checkTopStoriesSearchTerm.bind(Object(l.a)(n)),n}return Object(i.a)(a,[{key:"checkTopStoriesSearchTerm",value:function(e){return!this.state.results[e]}},{key:"setTopStories",value:function(e){var t=e.hits,a=e.page;this.setState(function(e,t){return function(a){var n=a.searchKey,c=a.results,r=c&&c[n]?c[n].hits:[],s=[].concat(Object(b.a)(r),Object(b.a)(e));return{results:Object(v.a)(Object(v.a)({},c),{},Object(m.a)({},n,{hits:s,page:t})),isLoading:!1}}}(t,a))}},{key:"fetchTopStories",value:function(e,t){var a=this;this.setState({isLoading:!0}),fetch("".concat(N).concat("/search","?").concat("query=").concat(e,"\n    &").concat("page=").concat(t,"&").concat(K).concat(100)).then((function(e){return e.json()})).then((function(e){return a.setTopStories(e)})).catch((function(e){return e}))}},{key:"componentDidMount",value:function(){var e=this.state.searchTerm;this.setState({searchKey:e}),this.fetchTopStories(e,0)}},{key:"onSubmit",value:function(e){var t=this.state.searchTerm;this.setState({searchKey:t}),this.checkTopStoriesSearchTerm(t)&&this.fetchTopStories(this.state.searchTerm,0),e.preventDefault()}},{key:"removeItem",value:function(e){var t=this.state,a=t.results,n=t.searchKey,c=a[n],r=c.hits,s=c.page,o=r.filter((function(t){return t.objectID!==e}));this.setState({results:Object(v.a)(Object(v.a)({},a),{},Object(m.a)({},n,{hits:o,page:s}))})}},{key:"searchValue",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,a=t.results,n=t.searchTerm,r=t.searchKey,s=t.isLoading,o=a&&a[r]&&a[r].page||0,i=a&&a[r]&&a[r].hits||[];return c.a.createElement("div",null,c.a.createElement(O.a,{fluid:!0},c.a.createElement(k.a,null,c.a.createElement("div",{className:"jumbotron text-center"},c.a.createElement(E,{onChange:this.searchValue,value:n,onSubmit:this.onSubmit},"NEWSAPP")))),c.a.createElement(O.a,null,c.a.createElement(k.a,null,c.a.createElement(y,{list:i,removeItem:this.removeItem}))),c.a.createElement(O.a,null,c.a.createElement(k.a,null,c.a.createElement("div",{className:"text-center alert"},c.a.createElement(w,{isLoading:s,className:"btn btn-success",onClick:function(){return e.fetchTopStories(n,o+1)}},"Load More Entries")))))}}]),a}(n.Component),w=(C=g,function(e){var t=e.isLoading,a=Object(f.a)(e,["isLoading"]);return t?c.a.createElement(p,{message:"Loading data..."}):c.a.createElement(C,a)}),x=I,P=a(89),D=a(90),V=a(54),A=a(23),B=a(6),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var R="".concat(N).concat("/search","?").concat("query=").concat("react","&").concat("page=").concat(0,"&").concat(K).concat(100);console.log(R);var q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={results:null,searchKey:"",searchTerm:"JavaScript",isLoading:!1},n.removeItem=n.removeItem.bind(Object(l.a)(n)),n.searchValue=n.searchValue.bind(Object(l.a)(n)),n.fetchTopStories=n.fetchTopStories.bind(Object(l.a)(n)),n.setTopStories=n.setTopStories.bind(Object(l.a)(n)),n.onSubmit=n.onSubmit.bind(Object(l.a)(n)),n.checkTopStoriesSearchTerm=n.checkTopStoriesSearchTerm.bind(Object(l.a)(n)),n}return Object(i.a)(a,[{key:"checkTopStoriesSearchTerm",value:function(e){return!this.state.results[e]}},{key:"setTopStories",value:function(e){var t=e.hits,a=e.page;this.setState(function(e,t){return function(a){var n=a.searchKey,c=a.results,r=c&&c[n]?c[n].hits:[],s=[].concat(Object(b.a)(r),Object(b.a)(e));return{results:Object(v.a)(Object(v.a)({},c),{},Object(m.a)({},n,{hits:s,page:t})),isLoading:!1}}}(t,a))}},{key:"fetchTopStories",value:function(e,t){var a=this;this.setState({isLoading:!0}),fetch("".concat(N).concat("/search","?").concat("query=").concat(e,"\n    &").concat("page=").concat(t,"&").concat(K).concat(100)).then((function(e){return e.json()})).then((function(e){return a.setTopStories(e)})).catch((function(e){return e}))}},{key:"componentDidMount",value:function(){var e=this.state.searchTerm;this.setState({searchKey:e}),this.fetchTopStories(e,0)}},{key:"onSubmit",value:function(e){var t=this.state.searchTerm;this.setState({searchKey:t}),this.checkTopStoriesSearchTerm(t)&&this.fetchTopStories(this.state.searchTerm,0),e.preventDefault()}},{key:"removeItem",value:function(e){var t=this.state,a=t.results,n=t.searchKey,c=a[n],r=c.hits,s=c.page,o=r.filter((function(t){return t.objectID!==e}));this.setState({results:Object(v.a)(Object(v.a)({},a),{},Object(m.a)({},n,{hits:o,page:s}))})}},{key:"searchValue",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,a=t.results,n=t.searchTerm,r=t.searchKey,s=t.isLoading,o=a&&a[r]&&a[r].page||0,i=a&&a[r]&&a[r].hits||[];return c.a.createElement("div",null,c.a.createElement(O.a,{fluid:!0},c.a.createElement(k.a,null,c.a.createElement("div",{className:"jumbotron text-center"},c.a.createElement(E,{onChange:this.searchValue,value:n,onSubmit:this.onSubmit},"NEWSAPP")))),c.a.createElement(O.a,null,c.a.createElement(k.a,null,c.a.createElement(y,{list:i,removeItem:this.removeItem}))),c.a.createElement(O.a,null,c.a.createElement(k.a,null,c.a.createElement("div",{className:"text-center alert"},c.a.createElement(U,{isLoading:s,className:"btn btn-success",onClick:function(){return e.fetchTopStories(n,o+1)}},"Load More Entries")))))}}]),a}(n.Component),U=function(e){return function(t){var a=t.isLoading,n=Object(f.a)(t,["isLoading"]);return a?c.a.createElement(p,{message:"Loading data..."}):c.a.createElement(e,n)}}(g),H=q,J="".concat(N).concat("/search","?").concat("query=").concat("react","&").concat("page=").concat(0,"&").concat(K).concat(100);console.log(J);var _=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={results:null,searchKey:"",searchTerm:"Python",isLoading:!1},n.removeItem=n.removeItem.bind(Object(l.a)(n)),n.searchValue=n.searchValue.bind(Object(l.a)(n)),n.fetchTopStories=n.fetchTopStories.bind(Object(l.a)(n)),n.setTopStories=n.setTopStories.bind(Object(l.a)(n)),n.onSubmit=n.onSubmit.bind(Object(l.a)(n)),n.checkTopStoriesSearchTerm=n.checkTopStoriesSearchTerm.bind(Object(l.a)(n)),n}return Object(i.a)(a,[{key:"checkTopStoriesSearchTerm",value:function(e){return!this.state.results[e]}},{key:"setTopStories",value:function(e){var t=e.hits,a=e.page;this.setState(function(e,t){return function(a){var n=a.searchKey,c=a.results,r=c&&c[n]?c[n].hits:[],s=[].concat(Object(b.a)(r),Object(b.a)(e));return{results:Object(v.a)(Object(v.a)({},c),{},Object(m.a)({},n,{hits:s,page:t})),isLoading:!1}}}(t,a))}},{key:"fetchTopStories",value:function(e,t){var a=this;this.setState({isLoading:!0}),fetch("".concat(N).concat("/search","?").concat("query=").concat(e,"\n    &").concat("page=").concat(t,"&").concat(K).concat(100)).then((function(e){return e.json()})).then((function(e){return a.setTopStories(e)})).catch((function(e){return e}))}},{key:"componentDidMount",value:function(){var e=this.state.searchTerm;this.setState({searchKey:e}),this.fetchTopStories(e,0)}},{key:"onSubmit",value:function(e){var t=this.state.searchTerm;this.setState({searchKey:t}),this.checkTopStoriesSearchTerm(t)&&this.fetchTopStories(this.state.searchTerm,0),e.preventDefault()}},{key:"removeItem",value:function(e){var t=this.state,a=t.results,n=t.searchKey,c=a[n],r=c.hits,s=c.page,o=r.filter((function(t){return t.objectID!==e}));this.setState({results:Object(v.a)(Object(v.a)({},a),{},Object(m.a)({},n,{hits:o,page:s}))})}},{key:"searchValue",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,a=t.results,n=t.searchTerm,r=t.searchKey,s=t.isLoading,o=a&&a[r]&&a[r].page||0,i=a&&a[r]&&a[r].hits||[];return c.a.createElement("div",null,c.a.createElement(O.a,{fluid:!0},c.a.createElement(k.a,null,c.a.createElement("div",{className:"jumbotron text-center"},c.a.createElement(E,{onChange:this.searchValue,value:n,onSubmit:this.onSubmit},"NEWSAPP")))),c.a.createElement(O.a,null,c.a.createElement(k.a,null,c.a.createElement(y,{list:i,removeItem:this.removeItem}))),c.a.createElement(O.a,null,c.a.createElement(k.a,null,c.a.createElement("div",{className:"text-center alert"},c.a.createElement(F,{isLoading:s,className:"btn btn-success",onClick:function(){return e.fetchTopStories(n,o+1)}},"Load More Entries")))))}}]),a}(n.Component),F=function(e){return function(t){var a=t.isLoading,n=Object(f.a)(t,["isLoading"]);return a?c.a.createElement(p,{message:"Loading data..."}):c.a.createElement(e,n)}}(g),$=_,z="".concat(N).concat("/search","?").concat("query=").concat("react","&").concat("page=").concat(0,"&").concat(K).concat(100);console.log(z);var G=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={results:null,searchKey:"",searchTerm:"PHP",isLoading:!1},n.removeItem=n.removeItem.bind(Object(l.a)(n)),n.searchValue=n.searchValue.bind(Object(l.a)(n)),n.fetchTopStories=n.fetchTopStories.bind(Object(l.a)(n)),n.setTopStories=n.setTopStories.bind(Object(l.a)(n)),n.onSubmit=n.onSubmit.bind(Object(l.a)(n)),n.checkTopStoriesSearchTerm=n.checkTopStoriesSearchTerm.bind(Object(l.a)(n)),n}return Object(i.a)(a,[{key:"checkTopStoriesSearchTerm",value:function(e){return!this.state.results[e]}},{key:"setTopStories",value:function(e){var t=e.hits,a=e.page;this.setState(function(e,t){return function(a){var n=a.searchKey,c=a.results,r=c&&c[n]?c[n].hits:[],s=[].concat(Object(b.a)(r),Object(b.a)(e));return{results:Object(v.a)(Object(v.a)({},c),{},Object(m.a)({},n,{hits:s,page:t})),isLoading:!1}}}(t,a))}},{key:"fetchTopStories",value:function(e,t){var a=this;this.setState({isLoading:!0}),fetch("".concat(N).concat("/search","?").concat("query=").concat(e,"\n    &").concat("page=").concat(t,"&").concat(K).concat(100)).then((function(e){return e.json()})).then((function(e){return a.setTopStories(e)})).catch((function(e){return e}))}},{key:"componentDidMount",value:function(){var e=this.state.searchTerm;this.setState({searchKey:e}),this.fetchTopStories(e,0)}},{key:"onSubmit",value:function(e){var t=this.state.searchTerm;this.setState({searchKey:t}),this.checkTopStoriesSearchTerm(t)&&this.fetchTopStories(this.state.searchTerm,0),e.preventDefault()}},{key:"removeItem",value:function(e){var t=this.state,a=t.results,n=t.searchKey,c=a[n],r=c.hits,s=c.page,o=r.filter((function(t){return t.objectID!==e}));this.setState({results:Object(v.a)(Object(v.a)({},a),{},Object(m.a)({},n,{hits:o,page:s}))})}},{key:"searchValue",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,a=t.results,n=t.searchTerm,r=t.searchKey,s=t.isLoading,o=a&&a[r]&&a[r].page||0,i=a&&a[r]&&a[r].hits||[];return c.a.createElement("div",null,c.a.createElement(O.a,{fluid:!0},c.a.createElement(k.a,null,c.a.createElement("div",{className:"jumbotron text-center"},c.a.createElement(E,{onChange:this.searchValue,value:n,onSubmit:this.onSubmit},"NEWSAPP")))),c.a.createElement(O.a,null,c.a.createElement(k.a,null,c.a.createElement(y,{list:i,removeItem:this.removeItem}))),c.a.createElement(O.a,null,c.a.createElement(k.a,null,c.a.createElement("div",{className:"text-center alert"},c.a.createElement(Q,{isLoading:s,className:"btn btn-success",onClick:function(){return e.fetchTopStories(n,o+1)}},"Load More Entries")))))}}]),a}(n.Component),Q=function(e){return function(t){var a=t.isLoading,n=Object(f.a)(t,["isLoading"]);return a?c.a.createElement(p,{message:"Loading data..."}):c.a.createElement(e,n)}}(g),X=G,Y=function(){return c.a.createElement(A.a,{basename:"/newsapp/"},c.a.createElement("div",null,c.a.createElement(P.a,null,c.a.createElement(D.a,null,c.a.createElement(P.a.Brand,null,c.a.createElement(A.b,{className:"nav-link",to:"/"},"News App")),c.a.createElement(P.a.Toggle,null)),c.a.createElement(P.a.Collapse,null,c.a.createElement(D.a,null,c.a.createElement(V.a,{exact:!0,activeClassName:"active"},c.a.createElement(A.b,{className:"nav-link",to:"/about"},"About")),c.a.createElement(V.a,{activeClassName:"active"},c.a.createElement(A.b,{className:"nav-link",activeClassName:"active",to:"/javascript"},"Javascript")),c.a.createElement(V.a,{activeClassName:"active"},c.a.createElement(A.b,{className:"nav-link",activeClassName:"active",to:"/python"},"Python")),c.a.createElement(V.a,{activeClassName:"active"},c.a.createElement(A.b,{className:"nav-link",activeClassName:"active",to:"/php"},"PHP"))))),c.a.createElement(B.a,{exact:!0,path:"/",component:x}),c.a.createElement(B.a,{exact:!0,path:"/about",component:Z}),c.a.createElement(B.a,{exact:!0,path:"/javascript",component:H}),c.a.createElement(B.a,{exact:!0,path:"/python",component:$}),c.a.createElement(B.a,{exact:!0,path:"/php",component:X})))},Z=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"This is about page..."))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/newsapp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/newsapp","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):W(t,e)}))}}()}},[[55,1,2]]]);
//# sourceMappingURL=main.42fc59f4.chunk.js.map