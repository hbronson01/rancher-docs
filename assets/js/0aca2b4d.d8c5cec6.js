"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[16914],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,f=h["".concat(l,".").concat(d)]||h[d]||c[d]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41660:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={title:"Questions about Upgrading to Rancher v2.x",weight:1,aliases:["/rancher/v2.x/en/faq/upgrades-to-2x/"]},l=void 0,u={unversionedId:"faq/upgrades-to-2x",id:"version-2.0-2.4/faq/upgrades-to-2x",title:"Questions about Upgrading to Rancher v2.x",description:"This page contains frequently asked questions about the changes between Rancher v1.x and v2.x, and how to upgrade from Rancher v1.x to v2.x.",source:"@site/versioned_docs/version-2.0-2.4/faq/upgrades-to-2x.md",sourceDirName:"faq",slug:"/faq/upgrades-to-2x",permalink:"/v2.0-v2.4/faq/upgrades-to-2x",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/faq/upgrades-to-2x.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663095305,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Questions about Upgrading to Rancher v2.x",weight:1,aliases:["/rancher/v2.x/en/faq/upgrades-to-2x/"]},sidebar:"tutorialSidebar",previous:{title:"Telemetry",permalink:"/v2.0-v2.4/faq/telemetry"},next:{title:"Networking",permalink:"/v2.0-v2.4/faq/networking"}},p={},c=[],h={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page contains frequently asked questions about the changes between Rancher v1.x and v2.x, and how to upgrade from Rancher v1.x to v2.x."),(0,a.kt)("h1",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What does it mean when you say Rancher v2.x is built on Kubernetes?")),(0,a.kt)("p",null,"Rancher v2.x is a complete container management platform built 100% on Kubernetes leveraging its Custom Resource and Controller framework.  All features are written as a CustomResourceDefinition (CRD) which extends the existing Kubernetes API and can leverage native features such as RBAC."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do you plan to implement upstream Kubernetes, or continue to work on your own fork?")),(0,a.kt)("p",null,"We're still going to provide our distribution when you select the default option of having us create your Kubernetes cluster, but it will be very close to upstream."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Does this release mean that we need to re-train our support staff in Kubernetes?")),(0,a.kt)("p",null,"Yes.  Rancher will offer the native Kubernetes functionality via ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," but will also offer our own UI dashboard to allow you to deploy Kubernetes workload without having to understand the full complexity of Kubernetes.  However, to fully leverage Kubernetes, we do recommend understanding Kubernetes.  We do plan on improving our UX with subsequent releases to make Kubernetes easier to use."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Is a Rancher compose going to make a Kubernetes pod? Do we have to learn both now? We usually use the filesystem layer of files, not the UI.")),(0,a.kt)("p",null,"No.  Unfortunately, the differences were enough such that we cannot support Rancher compose anymore in 2.x.  We will be providing both a tool and guides to help with this migration."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If we use Kubernetes native YAML files for creating resources, should we expect that to work as expected, or do we need to use Rancher/Docker compose files to deploy infrastructure?")),(0,a.kt)("p",null,"Absolutely."),(0,a.kt)("h1",{id:"cattle"},"Cattle"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How does Rancher v2.x affect Cattle?")),(0,a.kt)("p",null,"Cattle will not supported in v2.x as Rancher has been re-architected to be based on Kubernetes. You can, however, expect majority of Cattle features you use will exist and function similarly on Kubernetes. We will develop migration tools in Rancher v2.1 to help you transform your existing Rancher Compose files into Kubernetes YAML files."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Can I migrate existing Cattle workloads into Kubernetes?")),(0,a.kt)("p",null,"Yes. In the upcoming Rancher v2.1 release we will provide a tool to help translate existing Cattle workloads in Compose format to Kubernetes YAML format.  You will then be able to deploy those workloads on the v2.x platform."),(0,a.kt)("h1",{id:"feature-changes"},"Feature Changes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Can we still add our own infrastructure services, which had a separate view/filter in 1.6.x?")),(0,a.kt)("p",null,"Yes. You can manage Kubernetes storage, networking, and its vast ecosystem of add-ons."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Are there changes to default roles available now or going forward? Will the Kubernetes alignment impact plans for roles/RBAC?")),(0,a.kt)("p",null,"The default roles will be expanded to accommodate the new Rancher 2.x features, and will also take advantage of the Kubernetes RBAC (Role-Based Access Control) capabilities to give you more flexibility."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Will there be any functions like network policies to separate a front-end container from a back-end container through some kind of firewall in v2.x?")),(0,a.kt)("p",null,"Yes. You can do so by leveraging Kubernetes' network policies."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What about the CLI? Will that work the same way with the same features?")),(0,a.kt)("p",null,"Yes. Definitely."),(0,a.kt)("h1",{id:"environments--clusters"},"Environments & Clusters"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Can I still create templates for environments and clusters?")),(0,a.kt)("p",null,"Starting with 2.0, the concept of an environment has now been changed to a Kubernetes cluster as going forward, only the Kubernetes orchestration engine is supported."),(0,a.kt)("p",null,"Kubernetes RKE Templates is on our roadmap for 2.x. Please refer to our Release Notes and documentation for all the features that we currently support."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Can you still add an existing host to an environment? (i.e. not provisioned directly from Rancher)")),(0,a.kt)("p",null,"Yes. We still provide you with the same way of executing our Rancher agents directly on hosts."),(0,a.kt)("h1",{id:"upgradingmigrating"},"Upgrading/Migrating"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How would the migration from v1.x to v2.x work?")),(0,a.kt)("p",null,'Due to the technical difficulty in transforming a Docker container into a pod running Kubernetes, upgrading will require users to "replay" those workloads from v1.x into new v2.x environments. We plan to ship with a tool in v2.1 to translate existing Rancher Compose files into Kubernetes YAML files.  You will then be able to deploy those workloads on the v2.x platform.'),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Is it possible to upgrade from Rancher v1.x to v2.x without any disruption to Cattle and Kubernetes clusters?")),(0,a.kt)("p",null,"At this time, we are still exploring this scenario and taking feedback. We anticipate that you will need to launch a new Rancher instance and then relaunch on v2.x. Once you've moved to v2.x, upgrades will be in place, as they are in v1.6."),(0,a.kt)("h1",{id:"support"},"Support"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Are you planning some long-term support releases for Rancher v1.6?")),(0,a.kt)("p",null,"That is definitely the focus of the v1.6 stream. We're continuing to improve that release, fix bugs, and maintain it. New releases of the v1.6 stream are announced in the ",(0,a.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements"},"Rancher forums.")," The Rancher wiki contains the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/wiki/Rancher-1.6"},"v1.6 release notes.")))}d.isMDXComponent=!0}}]);