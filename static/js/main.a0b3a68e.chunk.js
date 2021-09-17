(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{29:function(e,t,a){},32:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),s=(a(29),a(30),a(4)),l=a.n(s),i=a(14),u=a(6),h=a(7),d=a(8),m=a(10),p=a(9),g=(a(32),a(1));var b=function(e){var t=e.onSubmit;return Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(e.target.elements.searchValue.value)},className:"SearchForm",children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{className:"SearchForm-input",name:"searchValue",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})};var j=function(e){var t=e.item,a=e.onClick;return Object(g.jsx)("li",{className:"ImageGalleryItem",children:Object(g.jsx)("img",{"data-large":t.largeImageURL,onClick:a,src:t.webformatURL,alt:"",className:"ImageGalleryItem-image"})})};var f=function(e){var t=e.gallery,a=e.onClick;return Object(g.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(g.jsx)(j,{onClick:a,item:e},e.id)}))})};var v=function(e){var t=e.onClick,a=e.children;return Object(g.jsx)("button",{className:"Button",onClick:t,children:a})},O=document.querySelector("#modal-root"),y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleOverlayClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e.handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(g.jsx)("div",{onClick:this.handleOverlayClick,className:"Overlay",children:Object(g.jsx)("div",{className:"Modal",children:this.props.children})}),O)}}]),a}(n.Component),x=a(13),k=a.n(x);k.a.defaults.baseURL="https://pixabay.com/api/";var w=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("?q=".concat(t,"&page=").concat(a,"&key=").concat("22496813-a3fbe39786787c712b168fbe4","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.hits);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),S=function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},C=a(15),I=a(24),N=a.n(I),M=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:"",gallery:[],page:1,isModalOpen:!1,reqStatus:"idle,",largeImgUrl:""},e.handleLoadMore=Object(u.a)(l.a.mark((function t(){var a,n,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.searchValue,r=a.page,t.next=3,w(n,r);case 3:c=t.sent,e.setState((function(e){return{gallery:[].concat(Object(i.a)(e.gallery),Object(i.a)(c)),page:e.page+1}})),S();case 6:case"end":return t.stop()}}),t)}))),e.handleSubmit=function(t){e.setState({searchValue:t,page:1})},e.handleLargeImgUrl=function(t){e.setState({isModalOpen:!0,largeImgUrl:t.target.dataset.large})},e.toggleModal=function(){e.setState({isModalOpen:!1})},e}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n,r,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state,r=n.searchValue,c=n.page,e.prev=1,a.searchValue===this.state.searchValue){e.next=9;break}return this.setState({reqStatus:"pending",largeImgUrl:""}),e.next=6,w(r,c);case 6:0===(o=e.sent).length&&C.b.error("Sorry, there are no images matching your search query. Please try again.",{autoClose:3e3}),this.setState((function(e){return{reqStatus:"resolved",gallery:o,page:e.page+1}}));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.reqStatus,n=e.isModalOpen,r=e.largeImgUrl,c=t.length>1;return"pending"===a?Object(g.jsx)(N.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:1e4}):Object(g.jsxs)("div",{className:"Container",children:[Object(g.jsx)(b,{onSubmit:this.handleSubmit}),Object(g.jsx)(f,{onClick:this.handleLargeImgUrl,gallery:t}),c&&Object(g.jsx)(v,{onClick:this.handleLoadMore,children:"Load more"}),n&&Object(g.jsx)(y,{src:r,onClose:this.toggleModal,children:Object(g.jsx)("div",{style:{width:900},children:Object(g.jsx)("img",{src:r,alt:""})})}),Object(g.jsx)(C.a,{})]})}}]),a}(n.Component);o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.a0b3a68e.chunk.js.map