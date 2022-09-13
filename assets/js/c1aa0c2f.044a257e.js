"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[69595],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),g=o,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},29218:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={title:"Uninstall Monitoring",weight:2},s=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring",id:"version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring",title:"Uninstall Monitoring",description:"1. From the Cluster Explorer, click Apps & Marketplace.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring.md",tags:[],version:"2.5",lastUpdatedAt:1663095305,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Uninstall Monitoring",weight:2},sidebar:"tutorialSidebar",previous:{title:"Enable Monitoring",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring"},next:{title:"Setting up Monitoring for a Workload",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads"}},c={},d=[],p={toc:d};function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the ",(0,i.kt)("strong",{parentName:"li"},"Cluster Explorer,")," click Apps & Marketplace."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Installed Apps.")),(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," namespace and check the boxes for ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-monitoring-crd")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-monitoring"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Delete.")),(0,i.kt)("li",{parentName:"ol"},"Confirm ",(0,i.kt)("strong",{parentName:"li"},"Delete."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," is uninstalled."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note on Persistent Grafana Dashboards:")," For users who are using Monitoring V2 v9.4.203 or below, uninstalling the Monitoring chart will delete the cattle-dashboards namespace, which will delete all persisted dashboards, unless the namespace is marked with the annotation ",(0,i.kt)("inlineCode",{parentName:"p"},'helm.sh/resource-policy: "keep"'),". This annotation is added by default in Monitoring V2 v14.5.100+ but can be manually applied on the cattle-dashboards namespace before an uninstall if an older version of the Monitoring chart is currently installed onto your cluster.")))}g.isMDXComponent=!0}}]);