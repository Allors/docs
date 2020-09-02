(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{100:function(e,t,r){"use strict";var s=r(0),c=r(20);t.a=function(){var e=Object(s.useContext)(c.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},101:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return n}));var s=r(100),c=r(102);function i(){var e=Object(s.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,s){var i=void 0===s?{}:s,n=i.forcePrependBaseUrl,o=void 0!==n&&n,a=i.absolute,l=void 0!==a&&a;if(!r)return r;if(r.startsWith("#"))return r;if(Object(c.b)(r))return r;if(o)return t+r;var u=!r.startsWith(t)?t+r.replace(/^\//,""):r;return l?e+u:u}(i,r,e,t)}}}function n(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},102:function(e,t,r){"use strict";function s(e){return!0===/^(\w*:|\/\/)/.test(e)}function c(e){return void 0!==e&&!s(e)}r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return c}))},71:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var s=r(1),c=r(6),i=(r(0),r(99)),n=r(101),o={},a={unversionedId:"Platform/Security/Security",id:"Platform/Security/Security",isDocsHomePage:!1,title:"Security",description:"Security in Allors",source:"@site/docs/Platform/Security/Security.mdx",permalink:"/docs/Platform/Security/Security",editUrl:"https://github.com/allors/allors.io/edit/master/docs/Platform/Security/Security.mdx",sidebar:"Allors",previous:{title:"Overview",permalink:"/docs/Platform/Security/Overview"},next:{title:"Configure",permalink:"/docs/Platform/Security/Configure"}},l=[{value:"Why security",id:"why-security",children:[]},{value:"Security in Allors",id:"security-in-allors-1",children:[]},{value:"Diagram of class consistency",id:"diagram-of-class-consistency",children:[]},{value:"Go over the security process by class + code",id:"go-over-the-security-process-by-class--code",children:[{value:"AccessControlLists.cs",id:"accesscontrollistscs",children:[]},{value:"Roles.cs",id:"rolescs",children:[]},{value:"Permissions.cs",id:"permissionscs",children:[]},{value:"SecurityToken.cs",id:"securitytokencs",children:[]},{value:"UserGroups.cs",id:"usergroupscs",children:[]}]}],u={rightToc:l};function d(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"security-in-allors"},"Security in Allors"),Object(i.b)("h1",{id:"essence"},"Essence"),Object(i.b)("h2",{id:"why-security"},"Why security"),Object(i.b)("p",null,"To ensure that sensitive information is only accessible to the users who are entitled to it. An example where this is important is a company. In a company you usually don","'","t want all users to be able to handle all contacts and invoices."),Object(i.b)("h2",{id:"security-in-allors-1"},"Security in Allors"),Object(i.b)("p",null,"In Allors we use '",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Role-based_access_control"}),"role based security."),"'. This means that each user has one or more roleslen and based on this role(len) the user can do certain things or not. The most common roles are the admin and user. In a \"role based security\" an admin will usually be able to do anything in front of a user who will usually be able to do almost nothing. In Allors, we distinguish between three types of access, 'Read','Write' and 'Execute'. These three rights shall be divided among all roles. In Allors it is also possible to exterminate different rights per class per role and for further security."),Object(i.b)("h1",{id:"example"},"Example"),Object(i.b)("h1",{id:"extended"},"Extended"),Object(i.b)("h2",{id:"diagram-of-class-consistency"},"Diagram of class consistency"),Object(i.b)("img",{alt:"Security Process",src:Object(n.a)("img/security/interfaces-security-process.png")}),Object(i.b)("p",null,"This diagram shows all the interfaces that control the security process."),Object(i.b)("img",{alt:"Security Process",src:Object(n.a)("img/security/security-process.png")}),Object(i.b)("h2",{id:"go-over-the-security-process-by-class--code"},"Go over the security process by class + code"),Object(i.b)("h3",{id:"accesscontrollistscs"},"AccessControlLists.cs"),Object(i.b)("p",null,"The 'AccessControlLists' class aims to request all 'AccessControlList' from a particular user."),Object(i.b)("p",null,"The 'this","[IObject @object]","' method is going to create and add an 'AccessControlList' object to 'AclByObject'. At the latest, 'AccessControlList' item will be returned."),Object(i.b)("p",null,"AccessControlList.cs"),Object(i.b)("img",{alt:"Security Process",src:Object(n.a)("img/security/access-control-list-cs.png")}),Object(i.b)("p",null,"The 'AccessControlLists' class aims to see if that a user has access to do a particular operation on a particular class variable."),Object(i.b)("p",null,"The 'CanRead' method is going to see if the user has access to read the variable class. By calling the method 'IsPermitted' with the parameters the 'propertyType' and 'Operations'."),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-csharp"}),"")),Object(i.b)("p",null,"The 'IsPermitted' method calls for the 'lazyload' method. After that, we will see whether this is a permission for the particular class of varaibele. Then we will see if that permission exists with the particular operation. If that permission id is included in the 'deniedPermissions', false returns will be returned. If the permission id is in 'EffectivePermissionIdsByAccessControl' collection, true will be returned."),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-csharp"}),"")),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-csharp"}),"")),Object(i.b)("p",null,"The 'Lazyload' method is used to request all 'deniedPermissions',', 'accessControls' and 'permissionIdByOperationByOperandTypeId' of class variable. . The method can only be called once in its lifetime.. If the object is a 'DelegatedAccessControlledObject'. Then the 'deniedPermissions' and 'securityTokens' of the superclass are caught. If the object is not a 'DelegatedAccessControlledObject', the 'deniedPermissions' and 'securityTokens' will be taken from the object itself. If no securityTokens could be retrieved, the 'DefaultSecurityToken' is used. The 'accessControls' will be requested by looking at which 'EffectivePermissionIdsByAccessControl' has the right 'securityToken'. Only the 'permissionIdByOperationByOperandTypeId' are retrieved with the correct 'classId' of the cache."),Object(i.b)("h3",{id:"rolescs"},"Roles.cs"),Object(i.b)("img",{alt:"Security Process",src:Object(n.a)("img/security/roles-cs.png")}),Object(i.b)("p",null,"The role class defines a role that has different permissions."),Object(i.b)("h3",{id:"permissionscs"},"Permissions.cs"),Object(i.b)("img",{alt:"Security Process",src:Object(n.a)("img/security/permission-cs.png")}),Object(i.b)("p",null,"Permissions determines what rights each user has."),Object(i.b)("h3",{id:"securitytokencs"},"SecurityToken.cs"),Object(i.b)("img",{alt:"Security Process",src:Object(n.a)("img/security/security-token-cs.png")}),Object(i.b)("h3",{id:"usergroupscs"},"UserGroups.cs"),Object(i.b)("p",null,"User groups are used to group users with a group name."))}d.isMDXComponent=!0},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var s=r(0),c=r.n(s);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,s,c=function(e,t){if(null==e)return{};var r,s,c={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},d=function(e){var t=u(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=Object(s.forwardRef)((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,n=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),p=s,h=d["".concat(n,".").concat(p)]||d[p]||b[p]||i;return r?c.a.createElement(h,o({ref:t},l,{components:r})):c.a.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,n=new Array(i);n[0]=p;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:s,n[1]=o;for(var l=2;l<i;l++)n[l]=r[l];return c.a.createElement.apply(null,n)}return c.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);