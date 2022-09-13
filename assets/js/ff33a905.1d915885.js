"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[42820],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),c=n(7094),u=n(12466),s="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,d=e.defaultValue,h=e.values,k=e.groupId,N=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.l)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,c.U)(),C=b.tabGroupChoices,w=b.setTabGroupChoices,E=(0,r.useState)(y),V=E[0],x=E[1],I=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var O=C[k];null!=O&&O!==V&&f.some((function(e){return e.value===O}))&&x(O)}var S=function(e){var t=e.currentTarget,n=I.indexOf(t),a=f[n].value;a!==V&&(T(t),x(a),null!=k&&w(k,String(a)))},U=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=I.indexOf(e.currentTarget)+1;n=null!=(a=I[r])?a:I[0];break;case"ArrowLeft":var l,o=I.indexOf(e.currentTarget)-1;n=null!=(l=I[o])?l:I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},N)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:V===t?0:-1,"aria-selected":V===t,key:t,ref:function(e){return I.push(e)},onKeyDown:U,onFocus:S,onClick:S},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":V===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===V}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==V})}))))}function d(e){var t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},59973:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(65488),i=n(85162),c=["components"],u={title:"NeuVector Integration",weight:22},s=void 0,p={unversionedId:"explanations/integrations-in-rancher/neuvector",id:"explanations/integrations-in-rancher/neuvector",title:"NeuVector Integration",description:"NeuVector Integration in Rancher",source:"@site/docs/explanations/integrations-in-rancher/neuvector.md",sourceDirName:"explanations/integrations-in-rancher",slug:"/explanations/integrations-in-rancher/neuvector",permalink:"/explanations/integrations-in-rancher/neuvector",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/neuvector.md",tags:[],version:"current",lastUpdatedAt:1663095305,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"NeuVector Integration",weight:22},sidebar:"tutorialSidebar",previous:{title:"PromQL Expression Reference",permalink:"/explanations/integrations-in-rancher/monitoring-and-alerting/promql-expressions"},next:{title:"OPA Gatekeeper",permalink:"/explanations/integrations-in-rancher/opa-gatekeeper"}},m={},d=[{value:"NeuVector Integration in Rancher",id:"neuvector-integration-in-rancher",level:3},{value:"Installing NeuVector with Rancher",id:"installing-neuvector-with-rancher",level:3},{value:"Accessing NeuVector from the Rancher UI",id:"accessing-neuvector-from-the-rancher-ui",level:3},{value:"Uninstalling NeuVector from the Rancher UI",id:"uninstalling-neuvector-from-the-rancher-ui",level:3},{value:"GitHub Repository",id:"github-repository",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Architecture",id:"architecture",level:3},{value:"CPU and Memory Allocations",id:"cpu-and-memory-allocations",level:3},{value:"Hardened Cluster Support - Calico and Canal",id:"hardened-cluster-support---calico-and-canal",level:3},{value:"SELinux-enabled Cluster Support - Calico and Canal",id:"selinux-enabled-cluster-support---calico-and-canal",level:3},{value:"Cluster Support in an Air-Gapped Environment",id:"cluster-support-in-an-air-gapped-environment",level:3},{value:"Support Limitations",id:"support-limitations",level:3},{value:"Other Limitations",id:"other-limitations",level:3}],h={toc:d};function k(e){var t=e.components,u=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"neuvector-integration-in-rancher"},"NeuVector Integration in Rancher"),(0,l.kt)("p",null,"New in Rancher v2.6.5, ",(0,l.kt)("a",{parentName:"p",href:"https://open-docs.neuvector.com/"},"NeuVector 5.x")," is an open-source container-centric security platform that is now integrated into Rancher. NeuVector offers real-time compliance, visibility, and protection for critical applications and data during runtime. NeuVector provides a firewall, container process/file system monitoring, security auditing with CIS benchmarks, and vulnerability scanning. For more information on Rancher security, please see the ",(0,l.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-security"},"security documentation"),"."),(0,l.kt)("p",null,"NeuVector can be enabled through a Helm chart that may be installed either through ",(0,l.kt)("strong",{parentName:"p"},"Apps & Marketplace")," or through the ",(0,l.kt)("strong",{parentName:"p"},"Cluster Tools")," button in the Rancher UI. Once the Helm chart is installed, users can easily ",(0,l.kt)("a",{parentName:"p",href:"https://open-docs.neuvector.com/deploying/rancher#deploy-and-manage-neuvector-through-rancher-apps-marketplace"},"deploy and manage NeuVector clusters within Rancher"),"."),(0,l.kt)("h3",{id:"installing-neuvector-with-rancher"},"Installing NeuVector with Rancher"),(0,l.kt)("p",null,"The Harvester Helm Chart is used to manage access to the NeuVector UI in Rancher where users can navigate directly to deploy and manage their NeuVector clusters."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To navigate to and install the NeuVector chart through Apps & Marketplace:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,l.kt)("li",{parentName:"ol"},"On the Clusters page, go to the cluster where you want to deploy NeuVector, and click ",(0,l.kt)("strong",{parentName:"li"},"Explore"),"."),(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("strong",{parentName:"li"},"Apps & Marketplace > Charts"),", and install ",(0,l.kt)("strong",{parentName:"li"},"NeuVector")," from the chart repo."),(0,l.kt)("li",{parentName:"ol"},"Different cluster types require different container runtimes. When configuring Helm chart values, go to the ",(0,l.kt)("strong",{parentName:"li"},"Container Runtime")," section, and select your runtime in accordance with the cluster type. Finally, click ",(0,l.kt)("strong",{parentName:"li"},"Install")," again.")),(0,l.kt)("p",null,"Some examples are as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"RKE1: ",(0,l.kt)("inlineCode",{parentName:"p"},"docker"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"K3s and RKE2: ",(0,l.kt)("inlineCode",{parentName:"p"},"k3scontainerd"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"AKS: ",(0,l.kt)("inlineCode",{parentName:"p"},"containerd")," for v1.19 and up")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"EKS: ",(0,l.kt)("inlineCode",{parentName:"p"},"docker")," for v1.22 and below; ",(0,l.kt)("inlineCode",{parentName:"p"},"containerd")," for v1.23 and up")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GKE: ",(0,l.kt)("inlineCode",{parentName:"p"},"containerd")," (see the ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/using-containerd"},"Google docs")," for more)"),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Only one container runtime engine may be selected at a time during installation."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To navigate to and install the NeuVector chart through Cluster Tools:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,l.kt)("li",{parentName:"ol"},"On the Clusters page, go to the cluster where you want to deploy NeuVector, and click ",(0,l.kt)("strong",{parentName:"li"},"Explore"),"."),(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("strong",{parentName:"li"},"Cluster Tools")," at the bottom of the left navigation bar."),(0,l.kt)("li",{parentName:"ol"},"Repeat step 4 above to select your container runtime accordingly, then click ",(0,l.kt)("strong",{parentName:"li"},"Install")," again.")),(0,l.kt)("h3",{id:"accessing-neuvector-from-the-rancher-ui"},"Accessing NeuVector from the Rancher UI"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Navigate to the cluster explorer of the cluster where NeuVector is installed. In the left navigation bar, click ",(0,l.kt)("strong",{parentName:"li"},"NeuVector"),"."),(0,l.kt)("li",{parentName:"ol"},"Click the external link to go to the NeuVector UI. Once the link is selected, users must accept the ",(0,l.kt)("inlineCode",{parentName:"li"},"END USER LICENSE AGREEMENT")," to access the NeuVector UI.")),(0,l.kt)("h3",{id:"uninstalling-neuvector-from-the-rancher-ui"},"Uninstalling NeuVector from the Rancher UI"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To uninstall from Apps & Marketplace:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,l.kt)("li",{parentName:"ol"},"Under ",(0,l.kt)("strong",{parentName:"li"},"Apps & Marketplace"),", click ",(0,l.kt)("strong",{parentName:"li"},"Installed Apps"),"."),(0,l.kt)("li",{parentName:"ol"},"Under ",(0,l.kt)("inlineCode",{parentName:"li"},"cattle-neuvector-system"),", select both the NeuVector app (and the associated CRD if desired), then click ",(0,l.kt)("strong",{parentName:"li"},"Delete"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To uninstall from Cluster Tools:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("strong",{parentName:"li"},"Cluster Tools")," at the bottom-left of the screen, then click on the trash can icon under the NeuVector chart. Select ",(0,l.kt)("inlineCode",{parentName:"li"},"Delete the CRD associated with this app")," if desired, then click ",(0,l.kt)("strong",{parentName:"li"},"Delete"),".")),(0,l.kt)("h3",{id:"github-repository"},"GitHub Repository"),(0,l.kt)("p",null,"The NeuVector project is available ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/neuvector/neuvector"},"here"),"."),(0,l.kt)("h3",{id:"documentation"},"Documentation"),(0,l.kt)("p",null,"The NeuVector documentation is ",(0,l.kt)("a",{parentName:"p",href:"https://open-docs.neuvector.com/"},"here"),"."),(0,l.kt)("h3",{id:"architecture"},"Architecture"),(0,l.kt)("p",null,"The NeuVector security solution contains four types of security containers: Controllers, Enforcers, Managers, and Scanners. A special container called an All-in-One is also provided to combine the Controller, Enforcer, and Manager functions all in one container, primarily for Docker-native deployments. There is also an Updater which, when run, will update the CVE database."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Controller:")," Manages the NeuVector Enforcer container; provides REST APIs for the management console."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Enforcer:")," Enforces security policies."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Manager:")," Provides a web-UI and CLI console to manage the NeuVector platform."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"All-in-One:")," Includes the Controller, Enforcer, and Manager."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Scanner:")," Performs the vulnerability and compliance scanning for images, containers, and nodes."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Updater:")," Updates the CVE database for Neuvector (when run); redeploys scanner pods.")),(0,l.kt)("figcaption",null,"**NeuVector Security Containers:**"),"![NeuVector Security Containers](/img/neuvector-security-containers.png)",(0,l.kt)("figcaption",null,"**NeuVector Architecture:**"),"![NeuVector Architecture](/img/neuvector-architecture.png)",(0,l.kt)("p",null,"To learn more about NeuVector's architecture, please refer ",(0,l.kt)("a",{parentName:"p",href:"https://open-docs.neuvector.com/basics/overview#architecture"},"here"),"."),(0,l.kt)("h3",{id:"cpu-and-memory-allocations"},"CPU and Memory Allocations"),(0,l.kt)("p",null,"Below are the minimum recommended computing resources for the NeuVector chart installation in a default deployment. Note that the resource limit is not set."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Container"),(0,l.kt)("th",{parentName:"tr",align:null},"CPU - Request"),(0,l.kt)("th",{parentName:"tr",align:null},"Memory - Request"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Controller"),(0,l.kt)("td",{parentName:"tr",align:null},"3 (1GB 1vCPU needed per controller)"),(0,l.kt)("td",{parentName:"tr",align:null},"*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enforcer"),(0,l.kt)("td",{parentName:"tr",align:null},"On all nodes (500MB .5vCPU)"),(0,l.kt)("td",{parentName:"tr",align:null},"1GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manager"),(0,l.kt)("td",{parentName:"tr",align:null},"1 (500MB .5vCPU)"),(0,l.kt)("td",{parentName:"tr",align:null},"*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Scanner"),(0,l.kt)("td",{parentName:"tr",align:null},"3 (100MB .5vCPU)"),(0,l.kt)("td",{parentName:"tr",align:null},"*")))),(0,l.kt)("p",null,"*"," Minimum 1GB of memory total required for Controller, Manager, and Scanner containers combined."),(0,l.kt)("h3",{id:"hardened-cluster-support---calico-and-canal"},"Hardened Cluster Support - Calico and Canal"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"RKE1",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"All NeuVector components are deployable if PSP is set to true."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"New in v2.6.7"))),(0,l.kt)("p",{parentName:"li"},"You will need to set additional configuration for your hardened cluster environment as follows:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,l.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,l.kt)("strong",{parentName:"li"},"Explore"),"."),(0,l.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,l.kt)("strong",{parentName:"li"},"Apps & Marketplace"),"."),(0,l.kt)("li",{parentName:"ol"},"Install (or upgrade to) NeuVector version ",(0,l.kt)("inlineCode",{parentName:"li"},"100.0.1+up2.2.2"),".")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Under ",(0,l.kt)("strong",{parentName:"p"},"Edit Options")," > ",(0,l.kt)("strong",{parentName:"p"},"Other Configuration"),", enable ",(0,l.kt)("strong",{parentName:"p"},"Pod Security Policy")," by checking the box (no other config needed):"),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("img",{alt:"Enable PSP for RKE1 Hardened Cluster",src:n(25475).Z,width:"946",height:"557"})))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Install")," at the bottom-right to complete."))),(0,l.kt)(i.Z,{value:"RKE2",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NeuVector components Controller and Enforcer are deployable if PSP is set to true.")),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Applicable to NeuVector chart version 100.0.0+up2.2.0 only:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For Manager, Scanner, and Updater components, additional configuration is required as shown below:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'kubectl patch deploy neuvector-manager-pod -n cattle-neuvector-system --patch \'{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}\'\nkubectl patch deploy neuvector-scanner-pod -n cattle-neuvector-system --patch \'{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}\'\nkubectl patch cronjob neuvector-updater-pod -n cattle-neuvector-system --patch \'{"spec":{"jobTemplate":{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}}}\'\n')),(0,l.kt)("br",null),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"New in v2.6.7"))),(0,l.kt)("p",{parentName:"li"},"You will need to set additional configuration for your hardened cluster environment."),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," You must update your config in both RKE2 and K3s hardened clusters as shown below.")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,l.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,l.kt)("strong",{parentName:"li"},"Explore"),"."),(0,l.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,l.kt)("strong",{parentName:"li"},"Apps & Marketplace"),"."),(0,l.kt)("li",{parentName:"ol"},"Install (or upgrade to) NeuVector version ",(0,l.kt)("inlineCode",{parentName:"li"},"100.0.1+up2.2.2"),".")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Under ",(0,l.kt)("strong",{parentName:"p"},"Edit Options")," > ",(0,l.kt)("strong",{parentName:"p"},"Other Configuration"),", enable ",(0,l.kt)("strong",{parentName:"p"},"Pod Security Policy")," by checking the box. Note that you must also enter a value greater than ",(0,l.kt)("inlineCode",{parentName:"p"},"zero")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"Manager runAsUser ID"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Scanner runAsUser ID"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"Updater runAsUser ID"),":"),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("img",{alt:"Enable PSP for RKE2 and K3s Hardened Clusters",src:n(21447).Z,width:"942",height:"562"})))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Install")," at the bottom-right to complete.")))),(0,l.kt)("h3",{id:"selinux-enabled-cluster-support---calico-and-canal"},"SELinux-enabled Cluster Support - Calico and Canal"),(0,l.kt)("p",null,"To enable SELinux on RKE2 clusters, follow the steps below:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NeuVector components Controller and Enforcer are deployable if PSP is set to true.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Applicable to NeuVector chart version 100.0.0+up2.2.0 only:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For Manager, Scanner, and Updater components, additional configuration is required as shown below:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'kubectl patch deploy neuvector-manager-pod -n cattle-neuvector-system --patch \'{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}\'\nkubectl patch deploy neuvector-scanner-pod -n cattle-neuvector-system --patch \'{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}\'\nkubectl patch cronjob neuvector-updater-pod -n cattle-neuvector-system --patch \'{"spec":{"jobTemplate":{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}}}\'\n')),(0,l.kt)("h3",{id:"cluster-support-in-an-air-gapped-environment"},"Cluster Support in an Air-Gapped Environment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"All NeuVector components are deployable on a cluster in an air-gapped environment without any additional configuration needed.")),(0,l.kt)("h3",{id:"support-limitations"},"Support Limitations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Only admins and cluster owners are currently supported.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fleet multi-cluster deployment is not supported.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"NeuVector is not supported on a Windows cluster."))),(0,l.kt)("h3",{id:"other-limitations"},"Other Limitations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Currently, NeuVector feature chart installation fails when a NeuVector partner chart already exists. To work around this issue, uninstall the NeuVector partner chart and reinstall the NeuVector feature chart.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Sometimes when the controllers are not ready, the NeuVector UI is not accessible from the Rancher UI. During this time, controllers will try to restart, and it takes a few minutes for the controllers to be active.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Container runtime is not auto-detected for different cluster types when installing the NeuVector chart. To work around this, you can specify the runtime manually."))))}k.isMDXComponent=!0},25475:function(e,t,n){t.Z=n.p+"assets/images/psp-nv-rke-d87045c466a93d8487507a469d32d0db.png"},21447:function(e,t,n){t.Z=n.p+"assets/images/psp-nv-rke2-a0eabc8b8a5e8d0476d885c29ca55017.png"}}]);