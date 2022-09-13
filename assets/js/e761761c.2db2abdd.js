"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[35761],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),h=u(r),d=a,f=h["".concat(i,".").concat(d)]||h[d]||p[d]||s;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,c=new Array(s);c[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<s;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},28026:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),c=["components"],o={title:"Cluster Access",weight:1,aliases:["/rancher/v2.x/en/cluster-admin/cluster-access/"]},i=void 0,u={unversionedId:"pages-for-subheaders/access-clusters",id:"version-2.5/pages-for-subheaders/access-clusters",title:"Cluster Access",description:"This section is about what tools can be used to access clusters managed by Rancher.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/access-clusters.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/access-clusters",permalink:"/v2.5/pages-for-subheaders/access-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/access-clusters.md",tags:[],version:"2.5",lastUpdatedAt:1663095305,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Cluster Access",weight:1,aliases:["/rancher/v2.x/en/cluster-admin/cluster-access/"]},sidebar:"tutorialSidebar",previous:{title:"Cluster Administration",permalink:"/v2.5/pages-for-subheaders/manage-clusters"},next:{title:"Access a Cluster with Kubectl and kubeconfig",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"}},l={},p=[{value:"Rancher UI",id:"rancher-ui",level:3},{value:"kubectl",id:"kubectl",level:3},{value:"Rancher CLI",id:"rancher-cli",level:3},{value:"Rancher API",id:"rancher-api",level:3}],h={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section is about what tools can be used to access clusters managed by Rancher."),(0,s.kt)("p",null,"For information on how to give users permission to access a cluster, see the section on ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters"},"adding users to clusters.")),(0,s.kt)("p",null,"For more information on roles-based access control, see ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/manage-role-based-access-control-rbac"},"this section.")),(0,s.kt)("p",null,"For information on how to set up an authentication system, see ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/about-authentication"},"this section.")),(0,s.kt)("h3",{id:"rancher-ui"},"Rancher UI"),(0,s.kt)("p",null,"Rancher provides an intuitive user interface for interacting with your clusters. All options available in the UI use the Rancher API. Therefore any action possible in the UI is also possible in the Rancher CLI or Rancher API."),(0,s.kt)("h3",{id:"kubectl"},"kubectl"),(0,s.kt)("p",null,"You can use the Kubernetes command-line tool, ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/overview/"},"kubectl"),", to manage   your clusters. You have two options for using kubectl:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Rancher kubectl shell:")," Interact with your clusters by launching a kubectl shell available in the Rancher UI. This option requires no configuration actions on your part. For more information, see ",(0,s.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"Accessing Clusters with kubectl Shell"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Terminal remote connection:")," You can also interact with your clusters by installing ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")," on your local desktop and then copying the cluster's kubeconfig file to your local ",(0,s.kt)("inlineCode",{parentName:"li"},"~/.kube/config")," directory. For more information, see ",(0,s.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"Accessing Clusters with kubectl and a kubeconfig File"),".")),(0,s.kt)("h3",{id:"rancher-cli"},"Rancher CLI"),(0,s.kt)("p",null,"You can control your clusters by downloading Rancher's own command-line interface, ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/cli-with-rancher"},"Rancher CLI"),". This CLI tool can interact directly with different clusters and projects or pass them ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," commands."),(0,s.kt)("h3",{id:"rancher-api"},"Rancher API"),(0,s.kt)("p",null,"Finally, you can interact with your clusters over the Rancher API. Before you use the API, you must obtain an ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/user-settings/api-keys"},"API key"),". To view the different resource fields and actions for an API object, open the API UI, which can be accessed by clicking on ",(0,s.kt)("strong",{parentName:"p"},"View in API")," for any Rancher UI object."))}d.isMDXComponent=!0}}]);