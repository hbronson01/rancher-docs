"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30382],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(h,s(s({ref:n},c),{},{components:t})):r.createElement(h,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(67294),a=t(86010),o="tabItem_Ymn6";function s(e){var n=e.children,t=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(87462),a=t(67294),o=t(86010),s=t(72389),i=t(67392),u=t(7094),l=t(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,t,s=e.lazy,p=e.block,m=e.defaultValue,h=e.values,f=e.groupId,g=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.l)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(n=null!=m?m:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),N=y.tabGroupChoices,x=y.setTabGroupChoices,q=(0,a.useState)(w),R=q[0],C=q[1],O=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var T=N[f];null!=T&&T!==R&&b.some((function(e){return e.value===T}))&&C(T)}var _=function(e){var n=e.currentTarget,t=O.indexOf(n),r=b[t].value;r!==R&&(E(n),C(r),null!=f&&x(f,String(r)))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=O.indexOf(e.currentTarget)+1;t=null!=(r=O[a])?r:O[0];break;case"ArrowLeft":var o,s=O.indexOf(e.currentTarget)-1;t=null!=(o=O[s])?o:O[O.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},g)},b.map((function(e){var n=e.value,t=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:R===n?0:-1,"aria-selected":R===n,key:n,ref:function(e){return O.push(e)},onKeyDown:S,onFocus:_,onClick:_},s,{className:(0,o.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":R===n})}),null!=t?t:n)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==R})}))))}function m(e){var n=(0,s.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},99393:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=t(65488),i=t(85162),u=["components"],l={title:"Node Requirements for Rancher Managed Clusters",weight:1},c=void 0,d={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",title:"Node Requirements for Rancher Managed Clusters",description:"This page describes the requirements for the Rancher managed Kubernetes clusters where your apps and services will be installed. These downstream clusters should be separate from the three-node cluster running Rancher.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md",tags:[],version:"current",lastUpdatedAt:1663095305,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Node Requirements for Rancher Managed Clusters",weight:1},sidebar:"tutorialSidebar",previous:{title:"Setting up Kubernetes Clusters in Rancher",permalink:"/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},next:{title:"Checklist for Production-Ready Clusters",permalink:"/pages-for-subheaders/checklist-for-production-ready-clusters"}},p={},m=[{value:"Operating Systems and Container Runtime Requirements",id:"operating-systems-and-container-runtime-requirements",level:2},{value:"Oracle Linux and RHEL Derived Linux Nodes",id:"oracle-linux-and-rhel-derived-linux-nodes",level:3},{value:"SUSE Linux Nodes",id:"suse-linux-nodes",level:3},{value:"Flatcar Container Linux Nodes",id:"flatcar-container-linux-nodes",level:3},{value:"Windows Nodes",id:"windows-nodes",level:3},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Networking Requirements",id:"networking-requirements",level:2},{value:"Optional: Security Considerations",id:"optional-security-considerations",level:2}],h={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page describes the requirements for the Rancher managed Kubernetes clusters where your apps and services will be installed. These downstream clusters should be separate from the three-node cluster running Rancher."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If Rancher is installed on a high-availability Kubernetes cluster, the Rancher server three-node cluster and downstream clusters have different requirements. For Rancher installation requirements, refer to the node requirements in the ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"installation section.")))),(0,o.kt)("h2",{id:"operating-systems-and-container-runtime-requirements"},"Operating Systems and Container Runtime Requirements"),(0,o.kt)("p",null,"Rancher should work with any modern Linux distribution and any modern Docker version. Linux is required for the etcd and controlplane nodes of all downstream clusters. Worker nodes may run Linux or ",(0,o.kt)("a",{parentName:"p",href:"#windows-nodes"},"Windows Server.")),(0,o.kt)("p",null,"For details on which OS and Docker versions were tested with each Rancher version, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,o.kt)("p",null,"All supported operating systems are 64-bit x86."),(0,o.kt)("p",null,"If you plan to use ARM64, see ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64"},"Running on ARM64 (Experimental).")),(0,o.kt)("p",null,"For information on how to install Docker, refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker documentation.")),(0,o.kt)("h3",{id:"oracle-linux-and-rhel-derived-linux-nodes"},"Oracle Linux and RHEL Derived Linux Nodes"),(0,o.kt)("p",null,"Some distributions of Linux derived from RHEL, including Oracle Linux, may have default firewall rules that block communication with Helm. We recommend disabling firewalld. For Kubernetes 1.19, firewalld must be turned off."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In RHEL 8.4, two extra services are included on the NetworkManager: ",(0,o.kt)("inlineCode",{parentName:"p"},"nm-cloud-setup.service")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nm-cloud-setup.timer"),". These services add a routing table that interferes with the CNI plugin's configuration. If these services are enabled, you must disable them using the command below, and then reboot the node to restore connectivity:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"systemctl disable nm-cloud-setup.service nm-cloud-setup.timer\nreboot\n")))),(0,o.kt)("h3",{id:"suse-linux-nodes"},"SUSE Linux Nodes"),(0,o.kt)("p",null,"SUSE Linux may have a firewall that blocks all ports by default. In that situation, follow ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/installation-requirements/port-requirements#opening-suse-linux-ports"},"these steps")," to open the ports needed for adding a host to a custom cluster."),(0,o.kt)("h3",{id:"flatcar-container-linux-nodes"},"Flatcar Container Linux Nodes"),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"Launching Kubernetes with Rancher")," using Flatcar Container Linux nodes, it is required to use the following configuration in the ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#rke-cluster-config-file-reference"},"Cluster Config File")),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Canal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  network:\n    plugin: canal\n    options:\n      canal_flex_volume_plugin_dir: /opt/kubernetes/kubelet-plugins/volume/exec/nodeagent~uds\n      flannel_backend_type: vxlan\n\n  services:\n    kube-controller:\n      extra_args:\n        flex-volume-plugin-dir: /opt/kubernetes/kubelet-plugins/volume/exec/\n"))),(0,o.kt)(i.Z,{value:"Calico",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  network:\n    plugin: calico\n    options:\n      calico_flex_volume_plugin_dir: /opt/kubernetes/kubelet-plugins/volume/exec/nodeagent~uds\n      flannel_backend_type: vxlan\n\n  services:\n    kube-controller:\n      extra_args:\n        flex-volume-plugin-dir: /opt/kubernetes/kubelet-plugins/volume/exec/\n")))),(0,o.kt)("p",null,"It is also required to enable the Docker service, you can enable the Docker service using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"systemctl enable docker.service\n")),(0,o.kt)("p",null,"The Docker service is enabled automatically when using ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/about-provisioning-drivers#node-drivers"},"Node Drivers"),"."),(0,o.kt)("h3",{id:"windows-nodes"},"Windows Nodes"),(0,o.kt)("p",null,"Nodes with Windows Server must run Docker Enterprise Edition."),(0,o.kt)("p",null,"Windows nodes can be used for worker nodes only. See ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-windows-clusters"},"Configuring Custom Clusters for Windows")),(0,o.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,o.kt)("p",null,"The hardware requirements for nodes with the ",(0,o.kt)("inlineCode",{parentName:"p"},"worker")," role mostly depend on your workloads. The minimum to run the Kubernetes node components is 1 CPU (core) and 1GB of memory."),(0,o.kt)("p",null,"Regarding CPU and memory, it is recommended that the different planes of Kubernetes clusters (etcd, controlplane, and workers) should be hosted on different nodes so that they can scale separately from each other."),(0,o.kt)("p",null,"For hardware recommendations for large Kubernetes clusters, refer to the official Kubernetes documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/best-practices/cluster-large/"},"building large clusters.")),(0,o.kt)("p",null,"For hardware recommendations for etcd clusters in production, refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/op-guide/hardware/"},"etcd documentation.")),(0,o.kt)("h2",{id:"networking-requirements"},"Networking Requirements"),(0,o.kt)("p",null,"For a production cluster, we recommend that you restrict traffic by opening only the ports defined in the port requirements below."),(0,o.kt)("p",null,"The ports required to be open are different depending on how the user cluster is launched. Each of the sections below list the ports that need to be opened for different ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"cluster creation options"),"."),(0,o.kt)("p",null,"For a breakdown of the port requirements for etcd nodes, controlplane nodes, and worker nodes in a Kubernetes cluster, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/os/#ports"},"port requirements for the Rancher Kubernetes Engine.")),(0,o.kt)("p",null,"Details on which ports are used in each situation are found under ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/installation-requirements/port-requirements#downstream-kubernetes-cluster-nodes"},"Downstream Cluster Port Requirements"),"."),(0,o.kt)("h2",{id:"optional-security-considerations"},"Optional: Security Considerations"),(0,o.kt)("p",null,"If you want to provision a Kubernetes cluster that is compliant with the CIS (Center for Internet Security) Kubernetes Benchmark, we recommend to following our hardening guide to configure your nodes before installing Kubernetes."),(0,o.kt)("p",null,"For more information on the hardening guide and details on which version of the guide corresponds to your Rancher and Kubernetes versions, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-security#rancher-hardening-guide"},"security section.")))}f.isMDXComponent=!0}}]);