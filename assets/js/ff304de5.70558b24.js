"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[99816],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),i=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(r),k=n,g=d["".concat(u,".").concat(k)]||d[k]||c[k]||a;return r?o.createElement(g,s(s({ref:t},p),{},{components:r})):o.createElement(g,s({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var i=2;i<a;i++)s[i]=r[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97778:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),s=["components"],l={title:"Rolling Back Workloads",weight:3027},u=void 0,i={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads",title:"Rolling Back Workloads",description:"Sometimes there is a need to rollback to the previous version of the application, either for debugging purposes or because an upgrade did not go as planned.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads.md",tags:[],version:"current",lastUpdatedAt:1663095305,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Rolling Back Workloads",weight:3027},sidebar:"tutorialSidebar",previous:{title:"Deploying Workloads",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},next:{title:"Upgrading Workloads",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads"}},p={},c=[],d={toc:c};function k(e){var t=e.components,r=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sometimes there is a need to rollback to the previous version of the application, either for debugging purposes or because an upgrade did not go as planned."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the cluster where you want to upgrade a workload and click ",(0,a.kt)("strong",{parentName:"p"},"Explore"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,a.kt)("strong",{parentName:"p"},"Workload"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find the workload that you want to rollback and select ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > Rollback"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose the revision that you want to roll back to. Click ",(0,a.kt)("strong",{parentName:"p"},"Rollback"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Your workload reverts to the previous version that you chose. Wait a few minutes for the action to complete."))}k.isMDXComponent=!0}}]);