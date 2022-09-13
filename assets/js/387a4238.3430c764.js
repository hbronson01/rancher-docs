"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98285],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),u=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,h=p["".concat(l,".").concat(d)]||p[d]||g[d]||a;return r?i.createElement(h,o(o({ref:t},c),{},{components:r})):i.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},31310:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return g}});var i=r(87462),n=r(63366),a=(r(67294),r(3905)),o=["components"],s={title:"Configuring a Global Default Private Registry",weight:40},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry",title:"Configuring a Global Default Private Registry",description:"You might want to use a private container registry to share your custom base images within your organization. With a private registry, you can keep a private, consistent, and centralized source of truth for the container images that are used in your clusters.",source:"@site/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry.md",tags:[],version:"current",lastUpdatedAt:1663095305,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Configuring a Global Default Private Registry",weight:40},sidebar:"tutorialSidebar",previous:{title:"Pod Security Policies",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},next:{title:"Custom Branding",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/custom-branding"}},c={},g=[{value:"Setting a Private Registry with No Credentials as the Default Registry",id:"setting-a-private-registry-with-no-credentials-as-the-default-registry",level:2},{value:"Setting a Private Registry with Credentials when Deploying a Cluster",id:"setting-a-private-registry-with-credentials-when-deploying-a-cluster",level:2}],p={toc:g};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You might want to use a private container registry to share your custom base images within your organization. With a private registry, you can keep a private, consistent, and centralized source of truth for the container images that are used in your clusters."),(0,a.kt)("p",null,"There are two main ways to set up private registries in Rancher: by setting up the global default registry through the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," tab in the global view, and by setting up a private registry in the advanced options in the cluster-level settings. The global default registry is intended to be used for air-gapped setups, for registries that do not require credentials. The cluster-level private registry is intended to be used in all setups in which the private registry requires credentials."),(0,a.kt)("p",null,"This section is about configuring the global default private registry, and focuses on how to configure the registry from the Rancher UI after Rancher is installed."),(0,a.kt)("p",null,"For instructions on setting up a private registry with command line options during the installation of Rancher, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/air-gapped-helm-cli-install"},"air-gapped installation guide"),"."),(0,a.kt)("p",null,"If your private registry requires credentials, it cannot be used as the default registry. There is no global way to set up a private registry with authorization for every Rancher-provisioned cluster. Therefore, if you want a Rancher-provisioned cluster to pull images from a private registry with credentials, you will have to ",(0,a.kt)("a",{parentName:"p",href:"#setting-a-private-registry-with-credentials-when-deploying-a-cluster"},"pass in the registry credentials through the advanced cluster options")," every time you create a new cluster."),(0,a.kt)("h2",{id:"setting-a-private-registry-with-no-credentials-as-the-default-registry"},"Setting a Private Registry with No Credentials as the Default Registry"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log into Rancher and configure the default administrator password."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Global Settings"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the setting called ",(0,a.kt)("inlineCode",{parentName:"li"},"system-default-registry")," and choose ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit Setting"),"."),(0,a.kt)("li",{parentName:"ol"},"Change the value to your registry (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"registry.yourdomain.com:port"),"). Do not prefix the registry with ",(0,a.kt)("inlineCode",{parentName:"li"},"http://")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"https://"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Rancher will use your private registry to pull system images."),(0,a.kt)("h2",{id:"setting-a-private-registry-with-credentials-when-deploying-a-cluster"},"Setting a Private Registry with Credentials when Deploying a Cluster"),(0,a.kt)("p",null,"You can follow these steps to configure a private registry when you create a cluster:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Choose a cluster type."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Cluster Configuration")," go to the ",(0,a.kt)("strong",{parentName:"li"},"Registries")," tab and click ",(0,a.kt)("strong",{parentName:"li"},"Pull images for Rancher from a private registry"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter the registry hostname and credentials."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The new cluster will be able to pull images from the private registry."),(0,a.kt)("p",null,"The private registry cannot be configured after the cluster is created."))}d.isMDXComponent=!0}}]);