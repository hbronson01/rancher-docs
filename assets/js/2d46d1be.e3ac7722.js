"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[54187],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=u(r),d=s,m=g["".concat(c,".").concat(d)]||g[d]||p[d]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},59712:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(87462),s=r(63366),o=(r(67294),r(3905)),a=["components"],i={title:"Creating Persistent Storage in Amazon's EBS",weight:3053},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/persistent-storage-in-amazon-ebs",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/persistent-storage-in-amazon-ebs",title:"Creating Persistent Storage in Amazon's EBS",description:"This section describes how to set up Amazon's Elastic Block Store in EC2.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/persistent-storage-in-amazon-ebs.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples",slug:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/persistent-storage-in-amazon-ebs",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/persistent-storage-in-amazon-ebs",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/persistent-storage-in-amazon-ebs.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663095305,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Creating Persistent Storage in Amazon's EBS",weight:3053},sidebar:"tutorialSidebar",previous:{title:"Provisioning Storage Examples",permalink:"/v2.0-v2.4/pages-for-subheaders/provisioning-storage-examples"},next:{title:"NFS Storage",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/nfs-storage"}},l={},p=[],g={toc:p};function d(e){var t=e.components,r=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section describes how to set up Amazon's Elastic Block Store in EC2."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the EC2 console, go to the ",(0,o.kt)("strong",{parentName:"li"},"ELASTIC BLOCK STORE")," section in the left panel and click ",(0,o.kt)("strong",{parentName:"li"},"Volumes.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create Volume.")),(0,o.kt)("li",{parentName:"ol"},"Optional: Configure the size of the volume or other options. The volume should be created in the same availability zone as the instance it will be attached to."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create Volume.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Close."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Persistent storage has been created."),(0,o.kt)("p",null,"For details on how to set up the newly created storage in Rancher, refer to the section on ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage"},"setting up existing storage.")))}d.isMDXComponent=!0}}]);