(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{100:function(e,t,r){"use strict";var n=r(0),o=r(20);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},101:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r(100),o=r(102);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,c=void 0!==a&&a,l=i.absolute,s=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var u=!r.startsWith(t)?t+r.replace(/^\//,""):r;return s?e+u:u}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},102:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},105:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(21),o=r(4),i=r(0),a=r.n(i),c=function(e){Object(o.a)(t,e);Object(n.a)(t);function t(t){return e.call(this,t)||this}return t.prototype.render=function(){var e,t,r,n;return a.a.createElement("div",{style:{textAlign:null!==(e=this.props.txtAlign)&&void 0!==e?e:"center",padding:null!==(t=this.props.txtPadding)&&void 0!==t?t:"30px",backgroundColor:null!==(r=this.props.bgColor)&&void 0!==r?r:"#25c2a0",borderRadius:null!==(n=this.props.borderRadius)&&void 0!==n?n:"10px"}},a.a.createElement("h1",null,this.props.title))},t}(a.a.Component)},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(1),o=r(6),i=(r(0),r(99)),a=(r(101),r(105)),c={id:"Overview",title:"Overview",hide_title:!0},l={unversionedId:"Platform/Security/Overview",id:"Platform/Security/Overview",isDocsHomePage:!1,title:"Overview",description:"Essence",source:"@site/docs/Platform/Security/Overview.mdx",permalink:"/docs/Platform/Security/Overview",editUrl:"https://github.com/allors/allors.io/edit/master/docs/Platform/Security/Overview.mdx",sidebar:"Allors",previous:{title:"Demo",permalink:"/docs/Platform/Derivation/Demo"},next:{title:"Security",permalink:"/docs/Platform/Security/Security"}},s=[{value:"Why security",id:"why-security",children:[]},{value:"Security in Allors",id:"security-in-allors",children:[]}],u={rightToc:s};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)(a.a,{title:"Security in Allors",mdxType:"Header"}),Object(i.b)("h1",{id:"essence"},"Essence"),Object(i.b)("h2",{id:"why-security"},"Why security"),Object(i.b)("p",null,"To ensure that sensitive information is only accessible to the users who are entitled to it. An example where this is important is a company. In a company you usually don't want all users to be able to handle all contacts and invoices."),Object(i.b)("h2",{id:"security-in-allors"},"Security in Allors"),Object(i.b)("p",null,"In Allors we use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Role-based_access_control"}),"role based security"),"."),Object(i.b)("p",null,"This means that each user has one or more roleslen and based on this role(len) the user can do certain things or not."),Object(i.b)("p",null,'The most common roles are the admin and user. In a "role based security" an admin will usually be able to do anything in front of a user who will usually be able to do almost nothing.'),Object(i.b)("p",null,'In Allors, we distinguish between three types of access, "Read", "Write" and "Execute". These three rights shall be divided among all roles. In Allors it is also possible to exterminate different rights per class per role and for further security.'))}d.isMDXComponent=!0},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,b=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return r?o.a.createElement(b,c({ref:t},s,{components:r})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);