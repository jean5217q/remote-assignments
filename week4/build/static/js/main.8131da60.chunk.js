(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.be6f5c90.svg"},,,,function(e,t,a){e.exports=a(42)},,,,,,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/lg-hero-01.744d0684.jpg"},function(e,t,a){e.exports=a.p+"static/media/sm-hero-01.5eb43d01.jpg"},function(e,t,a){e.exports=a.p+"static/media/lg-hero-02.c39a3d38.jpg"},function(e,t,a){e.exports=a.p+"static/media/sm-hero-02.b846bf2e.jpg"},function(e,t,a){e.exports=a.p+"static/media/01.9001e8e3.jpg"},function(e,t,a){e.exports=a.p+"static/media/01.38473697.jpg"},function(e,t,a){e.exports=a.p+"static/media/02.630f91a7.jpg"},function(e,t,a){e.exports=a.p+"static/media/02.b2e0fb36.jpg"},function(e,t,a){e.exports=a.p+"static/media/03.b0c1d78e.jpg"},function(e,t,a){e.exports=a.p+"static/media/03.173ecd53.jpg"},function(e,t,a){e.exports=a.p+"static/media/04.21d3400b.jpg"},function(e,t,a){e.exports=a.p+"static/media/04.74734e7b.jpg"},function(e,t,a){e.exports=a.p+"static/media/01.5a9a8424.jpg"},function(e,t,a){e.exports=a.p+"static/media/01.3b4d88eb.jpg"},function(e,t,a){e.exports=a.p+"static/media/02.51022501.jpg"},function(e,t,a){e.exports=a.p+"static/media/02.77be5de8.jpg"},function(e,t,a){e.exports=a.p+"static/media/03.9649f0a5.jpg"},function(e,t,a){e.exports=a.p+"static/media/03.9506e540.jpg"},function(e,t,a){e.exports=a.p+"static/media/04.1e4fd5ab.jpg"},function(e,t,a){e.exports=a.p+"static/media/04.bf45ec03.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(8),l=a.n(i),o=(a(16),a(1)),s=a(2),r=a(4),m=a(3),u=a(5),p=(a(18),a(6)),d=a.n(p),h=function(e){var t=e.navList;return c.a.createElement("nav",{className:"lg-navbar"},c.a.createElement("a",{className:"header-logo",href:"/"},c.a.createElement("img",{src:d.a,alt:"header-logo"})),c.a.createElement("ul",null,t.map(function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("a",{className:"nav-item",href:e.url},e.title))})))},v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={open:!1},a.handleNavToggle=function(){a.setState({open:!a.state.open})},a.handleCloseNav=function(e){e.target.classList.contains("nav-active")||a.setState({open:!1})},a.handleScroll=function(e){e.preventDefault()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleCloseNav)}},{key:"componentDidUpdate",value:function(){this.state.open?document.addEventListener("touchmove",this.handleScroll,{passive:!1}):document.removeEventListener("touchmove",this.handleScroll,{passive:!0})}},{key:"render",value:function(){var e=this.props.navList,t=this.state.open;return c.a.createElement("nav",{className:"sm-navbar"},c.a.createElement("a",{className:"header-logo",href:"a"},c.a.createElement("img",{src:d.a,alt:"header-logo"})),c.a.createElement("div",{className:"menu-btn nav-active",onClick:this.handleNavToggle},c.a.createElement("div",{className:"menu-icon nav-active"},c.a.createElement("span",{className:"nav-active ".concat(t?"active":null)}),c.a.createElement("span",{className:"nav-active ".concat(t?"active":null)}),c.a.createElement("span",{className:"nav-active ".concat(t?"active":null)}))),c.a.createElement("div",{className:"sm-nav-list nav-active ".concat(t?"show-nav":null)},c.a.createElement("ul",{className:"nav-active"},e.map(function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("a",{className:"nav-item",href:e.url},e.title))}))))}}]),t}(n.Component),f=function(e){var t=[{title:"\u9ad4\u9a57\u4eac\u90fd",url:"/experience"},{title:"\u5b63\u7bc0\u7279\u8f2f",url:"/season"},{title:"\u7279\u8272\u4f4f\u5bbf",url:"/stay"},{title:"\u597d\u7269\u5206\u4eab",url:"/share"}];return c.a.createElement("header",null,c.a.createElement(h,{navList:t}),c.a.createElement(v,{navList:t}))},g=a(9),E=a.n(g),b=function(e){function t(){var e,n;Object(o.a)(this,t);for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return(n=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={change:!1,data:[{span:["Let's","visit","in"],desc:"\u8aaa\u8d70\u5c31\u8d70\uff01\u4f86\u5834\u5b8c\u7f8e\u7684\u4eac\u90fd\u306e\u65c5",lgUrl:a(22),smUrl:a(23)},{span:["Things","to","do","in"],desc:"\u73a9\u8f49\u4eac\u90fd\uff0c\u5728\u5730\u4eba\u63a8\u85a6\u7684\u5341\u5927\u73a9\u6cd5",lgUrl:a(24),smUrl:a(25)}]},n.handleHeroImage=function(){n.setState({change:!n.state.change})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.state.data;this.props.mobile?(document.documentElement.style.setProperty("--first","url('".concat(e[0].smUrl,"')")),document.documentElement.style.setProperty("--second","url('".concat(e[1].smUrl,"')"))):(document.documentElement.style.setProperty("--first","url('".concat(e[0].lgUrl,"')")),document.documentElement.style.setProperty("--second","url('".concat(e[1].lgUrl,"')")))}},{key:"render",value:function(){var e=this.state.data,t=this.state.change?e[1]:e[0];return c.a.createElement("div",{className:"top-hero",onClick:this.handleHeroImage},c.a.createElement("div",{className:"top-hero-image ".concat(this.state.change?"changeBgi":"null")}),c.a.createElement("div",{className:"hero-image-title"},c.a.createElement("div",{className:"sub"},t.span.map(function(e,t){return c.a.createElement("span",{key:t},e)})),c.a.createElement("div",{className:"head"},"KYOTO"),c.a.createElement("div",{className:"desc"},c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"text"},t.desc))))}}]),t}(n.Component);b.propsTypes={mobile:E.a.bool.isRequired};var j=b,y=function(e){var t=e.words;return c.a.createElement("div",{className:"section-title"},t.map(function(e){return c.a.createElement("span",{key:e},e)}))},w=function(e){var t=e.array,a=e.mobile;return c.a.createElement("div",{className:"photo-area"},t.map(function(e,t){return c.a.createElement("div",{className:"section-item experience",key:t,style:{backgroundImage:"url('".concat(a?e.lgUrl:e.smUrl,"')")}},c.a.createElement("div",{className:"img-title"},c.a.createElement("span",null,e.title)))}))},N=function(e){var t=e.item,a=e.mobile,n=e.name;return c.a.createElement("div",{className:n},c.a.createElement(y,{words:t.title.split("")}),c.a.createElement(w,{array:t.photo,mobile:a}))},U=function(e){var t=e.showSection,a=e.show,n=e.hide;return c.a.createElement("div",{className:"load-btn ".concat(n?"hide-btn":null),style:{display:"".concat(a?"none":null)},onClick:function(){return t()}},c.a.createElement("span",null,"\u4e86"),c.a.createElement("span",null,"\u89e3"),c.a.createElement("span",null,"\u66f4"),c.a.createElement("span",null,"\u591a"))},x=function(e){function t(){var e,n;Object(o.a)(this,t);for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return(n=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={hide:!1,show:!1,data:[{title:"\u4eac\u90fd\u98a8\u60c5",photo:[{title:"\u6587\u5316\u85dd\u8853",lgUrl:a(26),smUrl:a(27)},{title:"\u9053\u5730\u7f8e\u98df",lgUrl:a(28),smUrl:a(29)},{title:"\u4eba\u6587\u6b77\u53f2",lgUrl:a(30),smUrl:a(31)},{title:"\u81ea\u7136\u98a8\u666f",lgUrl:a(32),smUrl:a(33)}]},{title:"\u56db\u5b63\u7cbe\u9078",photo:[{title:"SPRING / \u6625",lgUrl:a(34),smUrl:a(35)},{title:"SUMMER / \u590f",lgUrl:a(36),smUrl:a(37)},{title:"AUTUMN / \u79cb",lgUrl:a(38),smUrl:a(39)},{title:"WINTER / \u51ac",lgUrl:a(40),smUrl:a(41)}]}]},n.showSection=function(){n.setState({hide:!0}),setTimeout(function(){n.setState({show:!0})},120)},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.data;return c.a.createElement("div",{className:"section-container"},c.a.createElement("div",{className:"section-inner"},c.a.createElement(N,{name:"section-block",mobile:this.props.mobile,item:e[0]}),c.a.createElement(U,{hide:this.state.hide,show:this.state.show,showSection:this.showSection}),c.a.createElement(N,{name:"section-block show-area ".concat(this.state.show?"show":null),mobile:this.props.mobile,item:e[1]})))}}]),t}(n.Component),k=function(e){var t=e.mobile;return c.a.createElement("main",{className:"main-container"},c.a.createElement(j,{mobile:t}),c.a.createElement(x,{mobile:t}))},O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={mobile:!1},a.photoResize=function(){window.matchMedia("(max-width: 500px)").matches?a.setState({mobile:!0}):a.setState({mobile:!1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.photoResize()}},{key:"componentDidUpdate",value:function(){window.onresize=this.photoResize}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(f,null),c.a.createElement(k,{mobile:this.state.mobile}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.8131da60.chunk.js.map