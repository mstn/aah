(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"469l":function(e,t,r){"use strict";var n=r("wx14"),a=r("Ff2n"),o=r("q1tI"),i=(r("17x9"),r("iuhU")),c=r("H2TA"),s=r("As0B"),l=Object(s.a)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var u=o.forwardRef((function(e,t){var r=e.alt,c=e.children,s=e.classes,u=e.className,f=e.component,p=void 0===f?"div":f,h=e.imgProps,d=e.sizes,v=e.src,m=e.srcSet,g=e.variant,y=void 0===g?"circle":g,b=Object(a.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),w=null,E=function(e){var t=e.src,r=e.srcSet,n=o.useState(!1),a=n[0],i=n[1];return o.useEffect((function(){if(t||r){i(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=r,n.onload=function(){e&&i("loaded")},n.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,r]),a}({src:v,srcSet:m}),x=v||m,k=x&&"error"!==E;return w=k?o.createElement("img",Object(n.a)({alt:r,src:v,srcSet:m,sizes:d,className:s.img},h)):null!=c?c:x&&r?r[0]:o.createElement(l,{className:s.fallback}),o.createElement(p,Object(n.a)({className:Object(i.a)(s.root,s.system,s[y],u,!k&&s.colorDefault),ref:t},b),w)}));t.a=Object(c.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(u)},QzAA:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/favorites",function(){return r("edzJ")}])},SLcR:function(e,t,r){"use strict";var n=r("wx14"),a=r("Ff2n"),o=r("q1tI"),i=(r("17x9"),r("iuhU")),c=r("H2TA"),s=r("MquD"),l=o.forwardRef((function(e,t){var r=e.classes,c=e.className,l=Object(a.a)(e,["classes","className"]),u=o.useContext(s.a);return o.createElement("div",Object(n.a)({className:Object(i.a)(r.root,c,"flex-start"===u.alignItems&&r.alignItemsFlexStart),ref:t},l))}));t.a=Object(c.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(l)},YFqc:function(e,t,r){e.exports=r("cTJO")},bByR:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("q1tI"),a=r.n(n),o=r("YFqc"),i=r.n(o),c=r("eD//"),s=r("tVbE"),l=r("IsqK"),u=r("SLcR"),f=r("469l"),p=r("nACs"),h=a.a.createElement;function d(e){var t=e.data;return e.loading?h("span",null,"Loading..."):0===t.length?h("span",null,"No items"):h(a.a.Fragment,null,h(c.a,null,t.map((function(e,t){return h(i.a,{key:t,href:"/companies/".concat(e.id),as:"".concat("/aah","/companies/").concat(e.id),passHref:!0},h(s.a,null,h(u.a,null,h(f.a,null,h(p.a,e))),h(l.a,{primary:e.name,secondary:e.address})))}))))}},cTJO:function(e,t,r){"use strict";var n=r("/GRZ"),a=r("i2R6"),o=r("tCBg"),i=r("T0f4"),c=r("48fX");function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var l=r("AroE"),u=r("7KCV");t.__esModule=!0,t.default=void 0;var f,p=u(r("q1tI")),h=r("QmWs"),d=r("g/15"),v=l(r("nOHt"));function m(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var g=new Map,y=window.IntersectionObserver,b={};function w(){return f||(y?f=new y((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var E=function(e){c(u,e);var t,l=(t=u,function(){var e,r=i(t);if(s()){var n=i(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return o(this,e)});function u(e){var t;return n(this,u),(t=l.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,r=null,n=null;return function(a,o){if(n&&a===t&&o===r)return n;var i=e(a,o);return t=a,r=o,n=i,i}}((function(e,t){return{href:m(e),as:t?m(t):t}})),t.linkClicked=function(e){var r=e.currentTarget,n=r.nodeName,a=r.target;if("A"!==n||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=t.formatUrls(t.props.href,t.props.as),i=o.href,c=o.as;if(function(e){var t=(0,h.parse)(e,!1,!0),r=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var s=window.location.pathname;i=(0,h.resolve)(s,i),c=c?(0,h.resolve)(s,c):i,e.preventDefault();var l=t.props.scroll;null==l&&(l=c.indexOf("#")<0),v.default[t.props.replace?"replace":"push"](i,c,{shallow:t.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return a(u,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,a=(0,h.resolve)(e,r);return[a,n?(0,h.resolve)(e,n):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=w();return r?(r.observe(e),g.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),c={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==i.type||"href"in i.props)||(c.href=o||a);var s=r("P5f7").rewriteUrlForNextExport;return c.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(c.href=s(c.href)),p.default.cloneElement(i,c)}}]),u}(p.Component);t.default=E},edzJ:function(e,t,r){"use strict";r.r(t);var n=r("ODXe"),a=r("q1tI"),o=r.n(a),i=r("bByR"),c=o.a.createElement;t.default=function(){var e=o.a.useState({companies:[],loading:!0}),t=Object(n.a)(e,2),r=t[0],a=t[1];return o.a.useEffect((function(){var e=function(){var e={},t=localStorage.getItem("companies");if(t)try{e=JSON.parse(t)}catch(r){console.error("currupted local storage: it should contain a json")}return Object.values(e).filter((function(e){return!0===e.isFavorite}))}();a({companies:e,loading:!1})}),[]),c(i.a,{data:r.companies,loading:r.loading})}}},[["QzAA",0,1,2,3,5]]]);