"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61465],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},46287:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={title:"Checklist for Production-Ready Clusters",weight:2,aliases:["/rancher/v2.x/en/cluster-provisioning/production/"]},l=void 0,u={unversionedId:"pages-for-subheaders/checklist-for-production-ready-clusters",id:"version-2.5/pages-for-subheaders/checklist-for-production-ready-clusters",title:"Checklist for Production-Ready Clusters",description:"In this section, we recommend best practices for creating the production-ready Kubernetes clusters that will run your apps and services.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/checklist-for-production-ready-clusters.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/checklist-for-production-ready-clusters",permalink:"/v2.5/pages-for-subheaders/checklist-for-production-ready-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/checklist-for-production-ready-clusters.md",tags:[],version:"2.5",lastUpdatedAt:1663095305,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Checklist for Production-Ready Clusters",weight:2,aliases:["/rancher/v2.x/en/cluster-provisioning/production/"]},sidebar:"tutorialSidebar",previous:{title:"Node Requirements for Rancher Managed Clusters",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},next:{title:"Recommended Cluster Architecture",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture"}},c={},d=[{value:"Node Requirements",id:"node-requirements",level:3},{value:"Back up etcd",id:"back-up-etcd",level:3},{value:"Cluster Architecture",id:"cluster-architecture",level:3},{value:"Logging and Monitoring",id:"logging-and-monitoring",level:3},{value:"Reliability",id:"reliability",level:3},{value:"Networking",id:"networking",level:3}],p={toc:d};function h(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, we recommend best practices for creating the production-ready Kubernetes clusters that will run your apps and services."),(0,i.kt)("p",null,"For a list of requirements for your cluster, including the requirements for OS/Docker, hardware, and networking, refer to the section on ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"node requirements.")),(0,i.kt)("p",null,"This is a shortlist of best practices that we strongly recommend for all production clusters."),(0,i.kt)("p",null,"For a full list of all the best practices that we recommend, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/best-practices"},"best practices section.")),(0,i.kt)("h3",{id:"node-requirements"},"Node Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure your nodes fulfill all of the ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"node requirements,")," including the port requirements.")),(0,i.kt)("h3",{id:"back-up-etcd"},"Back up etcd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable etcd snapshots. Verify that snapshots are being created, and run a disaster recovery scenario to verify the snapshots are valid. etcd is the location where the state of your cluster is stored, and losing etcd data means losing your cluster. Make sure you configure recurring snapshots of etcd for your cluster(s), and make sure the snapshots are stored externally (off the node) as well.")),(0,i.kt)("h3",{id:"cluster-architecture"},"Cluster Architecture"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nodes should have one of the following role configurations:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"etcd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"controlplane")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"etcd")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"controlplane")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"worker")," (the ",(0,i.kt)("inlineCode",{parentName:"li"},"worker")," role should not be used or added on nodes with the ",(0,i.kt)("inlineCode",{parentName:"li"},"etcd")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"controlplane")," role)"))),(0,i.kt)("li",{parentName:"ul"},"Have at least three nodes with the role ",(0,i.kt)("inlineCode",{parentName:"li"},"etcd")," to survive losing one node. Increase this count for higher node fault toleration, and spread them across (availability) zones to provide even better fault tolerance."),(0,i.kt)("li",{parentName:"ul"},"Assign two or more nodes the ",(0,i.kt)("inlineCode",{parentName:"li"},"controlplane")," role for master component high availability."),(0,i.kt)("li",{parentName:"ul"},"Assign two or more nodes the ",(0,i.kt)("inlineCode",{parentName:"li"},"worker")," role for workload rescheduling upon node failure.")),(0,i.kt)("p",null,"For more information on what each role is used for, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes"},"section on roles for nodes in Kubernetes.")),(0,i.kt)("p",null,"For more information about the\nnumber of nodes for each Kubernetes role, refer to the section on ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/rancher-manager-architecture/architecture-recommendations"},"recommended architecture.")),(0,i.kt)("h3",{id:"logging-and-monitoring"},"Logging and Monitoring"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure alerts/notifiers for Kubernetes components (System Service)."),(0,i.kt)("li",{parentName:"ul"},"Configure logging for cluster analysis and post-mortems.")),(0,i.kt)("h3",{id:"reliability"},"Reliability"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Perform load tests on your cluster to verify that its hardware can support your workloads.")),(0,i.kt)("h3",{id:"networking"},"Networking"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Minimize network latency. Rancher recommends minimizing latency between the etcd nodes. The default setting for ",(0,i.kt)("inlineCode",{parentName:"li"},"heartbeat-interval")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"500"),", and the default setting for ",(0,i.kt)("inlineCode",{parentName:"li"},"election-timeout")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"5000"),". These ",(0,i.kt)("a",{parentName:"li",href:"https://coreos.com/etcd/docs/latest/tuning.html"},"settings for etcd tuning")," allow etcd to run in most networks (except really high latency networks)."),(0,i.kt)("li",{parentName:"ul"},"Cluster nodes should be located within a single region. Most cloud providers provide multiple availability zones within a region, which can be used to create higher availability for your cluster. Using multiple availability zones is fine for nodes with any role. If you are using ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes Cloud Provider")," resources, consult the documentation for any restrictions (i.e. zone storage restrictions).")))}h.isMDXComponent=!0}}]);