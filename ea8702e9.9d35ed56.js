(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{100:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r(99),o=r(102);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,c=void 0!==a&&a,l=i.absolute,u=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var s=!r.startsWith(t)?t+r.replace(/^\//,""):r;return u?e+s:s}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},102:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return d})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return f})),r.d(t,"default",(function(){return y}));var n=r(1),o=r(6),i=r(0),a=r.n(i),c=r(98),l=(r(100),r(25)),u=r(4),s=function(e){Object(u.a)(t,e);Object(l.a)(t);function t(t){return e.call(this,t)||this}return t.prototype.render=function(){return a.a.createElement("div",{style:{textAlign:"center",padding:"30px",backgroundColor:"#25c2a0",borderRadius:"10px"}},a.a.createElement("h1",null,this.props.title))},t}(a.a.Component),d={id:"Overview",title:"Overview",hide_title:!0},p={unversionedId:"Platform/Security/Overview",id:"Platform/Security/Overview",isDocsHomePage:!1,title:"Overview",description:"Essence",source:"@site/docs/Platform/Security/Overview.mdx",permalink:"/docs/Platform/Security/Overview",editUrl:"https://github.com/allors/allors.io/edit/master/docs/Platform/Security/Overview.mdx",sidebar:"Allors",previous:{title:"Demo",permalink:"/docs/Platform/Derivation/Demo"},next:{title:"Security",permalink:"/docs/Platform/Security/Security"}},f=[{value:"Why security",id:"why-security",children:[]},{value:"Security in Allors",id:"security-in-allors",children:[]}],b={rightToc:f};function y(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)(s,{title:"Security in Allors",mdxType:"Header"}),Object(c.b)("h1",{id:"essence"},"Essence"),Object(c.b)("h2",{id:"why-security"},"Why security"),Object(c.b)("p",null,"To ensure that sensitive information is only accessible to the users who are entitled to it. An example where this is important is a company. In a company you usually don't want all users to be able to handle all contacts and invoices."),Object(c.b)("h2",{id:"security-in-allors"},"Security in Allors"),Object(c.b)("p",null,"In Allors we use ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Role-based_access_control"}),"role based security"),"."),Object(c.b)("p",null,"This means that each user has one or more roleslen and based on this role(len) the user can do certain things or not."),Object(c.b)("p",null,'The most common roles are the admin and user. In a "role based security" an admin will usually be able to do anything in front of a user who will usually be able to do almost nothing.'),Object(c.b)("p",null,'In Allors, we distinguish between three types of access, "Read", "Write" and "Execute". These three rights shall be divided among all roles. In Allors it is also possible to exterminate different rights per class per role and for further security.'))}y.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,b=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return r?o.a.createElement(b,c({ref:t},u,{components:r})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";var n=r(0),o=r(20);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}}}]);