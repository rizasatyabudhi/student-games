webpackJsonp([0xd2a57dc1d883],{"./.cache/api-runner-browser.js":function(e,n){"use strict";function t(e,n,t){var o=s.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function o(e,n,t){return s.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=t,n.apiRunnerAsync=o;var s=[]},"./.cache/async-requires.js":function(e,n,t){"use strict";var o;n.components={"component---src-pages-404-js":t("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js"),"component---src-pages-index-js":t("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js"),"component---src-pages-page-2-js":t("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-page-2-js!./src/pages/page-2.js")},n.json=(o={"layout-index.json":t("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),"404.json":t("./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json")},o["layout-index.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),o["index.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),o["layout-index.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),o["page-2.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---page-2!./.cache/json/page-2.json"),o["layout-index.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),o["404-html.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json"),o),n.layouts={"component---src-layouts-index-js":t("./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js")}},"./.cache/component-renderer.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i=t("./node_modules/react/react.js"),c=o(i),l=t("./node_modules/prop-types/index.js"),d=o(l),m=t("./.cache/loader.js"),p=o(m),f=t("./.cache/emitter.js"),h=o(f),g=function(e){var n=e.children;return c.default.createElement("div",null,n())},b=function(e){function n(t){s(this,n);var o=a(this,e.call(this));return o.state={location:t.location,pageResources:p.default.getResourcesForPathname(t.location.pathname)},o}return r(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=p.default.getResourcesForPathname(e.location.pathname);t?this.setState({location:e.location,pageResources:t}):p.default.getResourcesForPathname(e.location.pathname,function(t){n.setState({location:e.location,pageResources:t})})}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){n.page.path===p.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){return this.props.page?this.state.pageResources?(0,i.createElement)(this.state.pageResources.component,u({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:g,u({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(c.default.Component);b.propTypes={page:d.default.bool,layout:d.default.bool,location:d.default.object},n.default=b,e.exports=n.default},"./.cache/emitter.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=t("./node_modules/mitt/dist/mitt.js"),a=o(s),r=(0,a.default)();e.exports=r},"./.cache/find-page.js":function(e,n,t){"use strict";var o=t("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=t.slice(n.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),s[a])return s[a];var r=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(a,{path:e.path})||(0,o.matchPath)(a,{path:e.matchPath}))return r=e,s[a]=e,!0}else if((0,o.matchPath)(a,{path:e.path,exact:!0}))return r=e,s[a]=e,!0;return!1}),r}}},"./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/layout-index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---page-2!./.cache/json/page-2.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0x7b71d9db271c,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/page-2.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-preset-stage-0/lib/index.js","/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js')})})}},"./.cache/loader.js":function(e,n,t){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=t("./node_modules/react/react.js"),a=(o(s),t("./.cache/find-page.js")),r=o(a),u=t("./.cache/emitter.js"),i=o(u),c=void 0,l={},d={},m={},p={},f={},h=[],g=[],b={},j=[],y={},v=function(e){return e&&e.default||e},x=void 0,_=!0;x=t("./.cache/prefetcher.js")({getNextQueuedResources:function(){return j.slice(-1)[0]},createResourceDownload:function(e){w(e,function(){j=j.filter(function(n){return n!==e}),x.onResourcedFinished(e)})}}),i.default.on("onPreLoadPageResources",function(e){x.onPreLoadPageResources(e)}),i.default.on("onPostLoadPageResources",function(e){x.onPostLoadPageResources(e)});var R=function(e,n){return y[e]>y[n]?1:y[e]<y[n]?-1:0},P=function(e,n){return b[e]>b[n]?1:b[e]<b[n]?-1:0},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(p[e])n.nextTick(function(){t(null,p[e])});else{var o="component---"===e.slice(0,12)?d.components[e]||d.layouts[e]:d.json[e];o(function(n,o){p[e]=o,t(n,o)})}},D=function(e,t){f[e]?n.nextTick(function(){t(null,f[e])}):w(e,function(n,o){if(n)t(n);else{var s=v(o());f[e]=s,t(n,s)}})},W=1,S={empty:function(){g=[],b={},y={},j=[],h=[]},addPagesArray:function(e){h=e;var n="";c=(0,r.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){d=e},dequeue:function(e){return g.pop()},enqueue:function(e){if(!h.some(function(n){return n.path===e}))return!1;var n=1/W;W+=1,b[e]?b[e]+=1:b[e]=1,S.has(e)||g.unshift(e),g.sort(P);var t=c(e);return t.jsonName&&(y[t.jsonName]?y[t.jsonName]+=1+n:y[t.jsonName]=1+n,j.indexOf(t.jsonName)!==-1||p[t.jsonName]||j.unshift(t.jsonName)),t.componentChunkName&&(y[t.componentChunkName]?y[t.componentChunkName]+=1+n:y[t.componentChunkName]=1+n,j.indexOf(t.componentChunkName)!==-1||p[t.jsonName]||j.unshift(t.componentChunkName)),j.sort(R),x.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:j,resourcesCount:y}},getPages:function(){return{pathArray:g,pathCount:b}},getPage:function(e){return c(e)},has:function(e){return g.some(function(n){return n===e})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};_&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var s;if(t){if(o>=n.length)break;s=n[o++]}else{if(o=n.next(),o.done)break;s=o.value}var a=s;a.unregister()}window.location.reload()})),_=!1;var o=c(e);if(!o)return void console.log("A page wasn't found for \""+e+'"');if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var s=void 0,a=void 0,r=void 0,u=function(){if(s&&a&&(!o.layoutComponentChunkName||r)){m[e]={component:s,json:a,layout:r};var n={component:s,json:a,layout:r};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return D(o.componentChunkName,function(e,n){e&&console.log("Loading the component for "+o.path+" failed"),s=n,u()}),D(o.jsonName,function(e,n){e&&console.log("Loading the JSON for "+o.path+" failed"),a=n,u()}),void(o.layoutComponentChunkName&&D(o.layoutComponentChunkName,function(e,n){e&&console.log("Loading the Layout for "+o.path+" failed"),r=n,u()}))},peek:function(e){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(e){return g.length-g.indexOf(e)-1}};e.exports=S}).call(n,t("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,n){e.exports=[{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-page-2-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],s=[],a=function(){var e=n();e&&(s.push(e),t(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:s}},empty:function(){o=[],s=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t("./.cache/api-runner-browser.js"),r=t("./node_modules/react/react.js"),u=o(r),i=t("./node_modules/react-dom/index.js"),c=o(i),l=t("./node_modules/react-router-dom/index.js"),d=t("./node_modules/gatsby-react-router-scroll/index.js"),m=t("./node_modules/history/createBrowserHistory.js"),p=o(m),f=t("./node_modules/domready/ready.js"),h=o(f),g=t("./.cache/emitter.js"),b=o(g),j=t("./.cache/pages.json"),y=o(j),v=t("./.cache/redirects.json"),x=o(v),_=t("./.cache/component-renderer.js"),R=o(_),P=t("./.cache/async-requires.js"),w=o(P),D=t("./.cache/loader.js"),W=o(D);t("./node_modules/core-js/modules/es6.promise.js"),window.___emitter=b.default,W.default.addPagesArray(y.default),W.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=W.default,window.matchPath=l.matchPath;var S=(0,p.default)(),E=x.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),O=function(e){var n=E[e];if(null!=n){var t=W.default.getResourcesForPathname(e);return null!=t&&console.error('The route "'+e+'" matches both a page and a redirect; this is probably not intentional.'),S.replace(n.toPath),!0}return!1};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,n){O(e.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var s=e.location.pathname;if(s===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t("./.cache/register-service-worker.js");var o=function(e){function n(o){o.page.path===W.default.getPage(e).path&&(b.default.off("onPostLoadPageResources",n),clearTimeout(t),window.___history.push(e))}if(window.location.pathname!==e){var t=setTimeout(function(){b.default.off("onPostLoadPageResources",n),b.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);W.default.getResourcesForPathname(e)?(clearTimeout(t),window.___history.push(e)):b.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:S.location,action:S.action});var i=(0,a.apiRunner)("replaceRouterComponent",{history:S})[0],m=function(e){var n=e.children;return u.default.createElement(l.Router,{history:S},n)};W.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,r.createElement)(i?i:m,null,(0,r.createElement)(d.ScrollContext,{shouldUpdateScroll:n},(0,r.createElement)((0,l.withRouter)(R.default),{layout:!0,children:function(n){return(0,r.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return W.default.getPage(o.location.pathname)?(0,r.createElement)(R.default,s({page:!0},o)):(0,r.createElement)(R.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,h.default)(function(){return c.default.render(u.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},"./.cache/redirects.json":function(e,n){e.exports=[]},"./.cache/register-service-worker.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=t("./.cache/emitter.js"),a=o(s),r="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/domready/ready.js":function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,s="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(s,e=function(){for(t.removeEventListener(s,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},"./node_modules/gatsby-module-loader/patch.js":function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),s=t.e,a=t.s;t.e=function(o,r){var u=!1,i=!0,c=function(e){r&&(r(t,e),r=null)};return!a&&n&&n[o]?void c(!0):(s(o,function(){u||(u=!0,i?setTimeout(function(){c()}):c())}),void(u||(i=!1,e(function(){u||(u=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),c(!0))}))))}}o()},"./node_modules/hoist-non-react-statics/index.js":function(e,n){"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s=Object.defineProperty,a=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,c=i&&i(Object);e.exports=function e(n,l,d){if("string"!=typeof l){if(c){var m=i(l);m&&m!==c&&e(n,m,d)}var p=a(l);r&&(p=p.concat(r(l)));for(var f=0;f<p.length;++f){var h=p[f];if(!(t[h]||o[h]||d&&d[h])){var g=u(l,h);try{s(n,h,g)}catch(e){}}}return n}return n}},"./node_modules/mitt/dist/mitt.js":function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).map(function(e){e(t)}),(e["*"]||[]).map(function(e){e(n,t)})}}}e.exports=t},"./node_modules/process/browser.js":function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(n){try{return d.call(null,e)}catch(n){return d.call(this,e)}}}function r(){h&&p&&(h=!1,p.length?f=p.concat(f):g=-1,f.length&&u())}function u(){if(!h){var e=s(r);h=!0;for(var n=f.length;n;){for(p=f,f=[];++g<n;)p&&p[g].run();g=-1,n=f.length}p=null,h=!1,a(e)}}function i(e,n){this.fun=e,this.array=n}function c(){}var l,d,m=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var p,f=[],h=!1,g=-1;m.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];f.push(new i(e,n)),1!==f.length||h||s(u)},i.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=c,m.addListener=c,m.once=c,m.off=c,m.removeListener=c,m.removeAllListeners=c,m.emit=c,m.prependListener=c,m.prependOnceListener=c,m.listeners=function(e){return[]},m.binding=function(e){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(e){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0x9427c64ab85d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-preset-stage-0/lib/index.js","/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-preset-stage-0/lib/index.js","/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-page-2-js!./src/pages/page-2.js":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xc6c285f8fd10,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-preset-stage-0/lib/index.js","/Users/rizasatyabudhi/Documents/Web Development/Projects/Student Games/studentWeb/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/page-2.js')})})}}});
//# sourceMappingURL=app-32c0fa299aee8b9534cd.js.map