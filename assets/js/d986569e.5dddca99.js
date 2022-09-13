"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[34756],{3905:function(e,a,r){r.d(a,{Zo:function(){return u},kt:function(){return g}});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),d=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},u=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(r),g=n,y=c["".concat(s,".").concat(g)]||c[g]||p[g]||o;return r?t.createElement(y,l(l({ref:a},u),{},{components:r})):t.createElement(y,l({ref:a},u))}));function g(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},66291:function(e,a,r){r.r(a),r.d(a,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var t=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],i={title:"Layer 4 and Layer 7 Load Balancing",description:"Kubernetes supports load balancing in two ways: Layer-4 Load Balancing and Layer-7 Load Balancing. Learn about the support for each way in different deployments",weight:3041},s=void 0,d={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing",title:"Layer 4 and Layer 7 Load Balancing",description:"Kubernetes supports load balancing in two ways: Layer-4 Load Balancing and Layer-7 Load Balancing. Learn about the support for each way in different deployments",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing.md",tags:[],version:"current",lastUpdatedAt:1663095305,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Layer 4 and Layer 7 Load Balancing",description:"Kubernetes supports load balancing in two ways: Layer-4 Load Balancing and Layer-7 Load Balancing. Learn about the support for each way in different deployments",weight:3041},sidebar:"tutorialSidebar",previous:{title:"Set Up Load Balancer and Ingress Controller within Rancher",permalink:"/pages-for-subheaders/load-balancer-and-ingress-controller"},next:{title:"Adding Ingresses",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses"}},u={},p=[{value:"Layer-4 Load Balancer",id:"layer-4-load-balancer",level:2},{value:"Support for Layer-4 Load Balancing",id:"support-for-layer-4-load-balancing",level:3},{value:"Layer-7 Load Balancer",id:"layer-7-load-balancer",level:2},{value:"Support for Layer-7 Load Balancing",id:"support-for-layer-7-load-balancing",level:3},{value:"Host Names in Layer-7 Load Balancer",id:"host-names-in-layer-7-load-balancer",level:3},{value:"Related Links",id:"related-links",level:2}],c={toc:p};function g(e){var a=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kubernetes supports load balancing in two ways: Layer-4 Load Balancing and Layer-7 Load Balancing."),(0,o.kt)("h2",{id:"layer-4-load-balancer"},"Layer-4 Load Balancer"),(0,o.kt)("p",null,"Layer-4 load balancer (or the external load balancer) forwards traffic to Nodeports. Layer-4 load balancer allows you to forward both HTTP and TCP traffic."),(0,o.kt)("p",null,"Often, the Layer-4 load balancer is supported by the underlying cloud provider, so when you deploy RKE clusters on bare-metal servers and vSphere clusters, Layer-4 load balancer is not supported. However, a single ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/exposing-tcp-udp-services/"},"globally managed config-map")," can be used to expose services on NGINX or third-party ingress."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is possible to deploy a cluster with a non-cloud load balancer, such as ",(0,o.kt)("a",{parentName:"p",href:"https://metallb.universe.tf/"},"MetalLB.")," However, that use case is more advanced than the Layer-4 load balancer supported by a cloud provider, and it is not configurable in Rancher or RKE."))),(0,o.kt)("h3",{id:"support-for-layer-4-load-balancing"},"Support for Layer-4 Load Balancing"),(0,o.kt)("p",null,"Support for layer-4 load balancer varies based on the underlying cloud provider."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Cluster Deployment"),(0,o.kt)("th",{parentName:"tr",align:null},"Layer-4 Load Balancer Support"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Amazon EKS"),(0,o.kt)("td",{parentName:"tr",align:null},"Supported by AWS cloud provider")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Google GKE"),(0,o.kt)("td",{parentName:"tr",align:null},"Supported by GCE cloud provider")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Azure AKS"),(0,o.kt)("td",{parentName:"tr",align:null},"Supported by Azure cloud provider")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RKE on EC2"),(0,o.kt)("td",{parentName:"tr",align:null},"Supported by AWS cloud provider")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RKE on DigitalOcean"),(0,o.kt)("td",{parentName:"tr",align:null},"Limited NGINX or third-party Ingress*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RKE on vSphere"),(0,o.kt)("td",{parentName:"tr",align:null},"Limited NGINX or third party-Ingress*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RKE on Custom Hosts",(0,o.kt)("br",null),"(e.g. bare-metal servers)"),(0,o.kt)("td",{parentName:"tr",align:null},"Limited NGINX or third-party Ingress*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Third-party MetalLB"),(0,o.kt)("td",{parentName:"tr",align:null},"Limited NGINX or third-party Ingress*")))),(0,o.kt)("p",null,"*"," Services can be exposed through a single ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/exposing-tcp-udp-services/"},"globally managed config-map.")),(0,o.kt)("h2",{id:"layer-7-load-balancer"},"Layer-7 Load Balancer"),(0,o.kt)("p",null,"Layer-7 load balancer (or the ingress controller) supports host and path-based load balancing and SSL termination. Layer-7 load balancer only forwards HTTP and HTTPS traffic and therefore they listen on ports 80 and 443 only. Cloud providers such as Amazon and Google support layer-7 load balancer. In addition, RKE clusters deploys the Nginx Ingress Controller."),(0,o.kt)("h3",{id:"support-for-layer-7-load-balancing"},"Support for Layer-7 Load Balancing"),(0,o.kt)("p",null,"Support for layer-7 load balancer varies based on the underlying cloud provider."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Cluster Deployment"),(0,o.kt)("th",{parentName:"tr",align:null},"Layer-7 Load Balancer Support"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Amazon EKS"),(0,o.kt)("td",{parentName:"tr",align:null},"Supported by AWS cloud provider")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Google GKE"),(0,o.kt)("td",{parentName:"tr",align:null},"Supported by GKE cloud provider")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Azure AKS"),(0,o.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RKE on EC2"),(0,o.kt)("td",{parentName:"tr",align:null},"Nginx Ingress Controller")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RKE on DigitalOcean"),(0,o.kt)("td",{parentName:"tr",align:null},"Nginx Ingress Controller")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RKE on vSphere"),(0,o.kt)("td",{parentName:"tr",align:null},"Nginx Ingress Controller")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RKE on Custom Hosts",(0,o.kt)("br",null),"(e.g. bare-metal servers)"),(0,o.kt)("td",{parentName:"tr",align:null},"Nginx Ingress Controller")))),(0,o.kt)("h3",{id:"host-names-in-layer-7-load-balancer"},"Host Names in Layer-7 Load Balancer"),(0,o.kt)("p",null,"Some cloud-managed layer-7 load balancers (such as the ALB ingress controller on AWS) expose DNS addresses for ingress rules. You need to map (via CNAME) your domain name to the DNS address generated by the layer-7 load balancer."),(0,o.kt)("p",null,"Other layer-7 load balancers, such as the Google Load Balancer or Nginx Ingress Controller, directly expose one or more IP addresses. Google Load Balancer provides a single routable IP address. Nginx Ingress Controller exposes the external IP of all nodes that run the Nginx Ingress Controller. You can do either of the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure your own DNS to map (via A records) your domain name to the IP addresses exposes by the Layer-7 load balancer."),(0,o.kt)("li",{parentName:"ol"},"Ask Rancher to generate an xip.io host name for your ingress rule. Rancher will take one of your exposed IPs, say ",(0,o.kt)("inlineCode",{parentName:"li"},"a.b.c.d"),", and generate a host name ",(0,o.kt)("inlineCode",{parentName:"li"},"<ingressname>.<namespace>.a.b.c.d.xip.io"),".")),(0,o.kt)("p",null,"The benefit of using xip.io is that you obtain a working entrypoint URL immediately after you create the ingress rule. Setting up your own domain name, on the other hand, requires you to configure DNS servers and wait for DNS to propagate."),(0,o.kt)("h2",{id:"related-links"},"Related Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/"},"Create an External Load Balancer"))))}g.isMDXComponent=!0}}]);