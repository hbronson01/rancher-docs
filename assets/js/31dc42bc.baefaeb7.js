"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[876],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},k=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,c=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(c,o(o({ref:t},k),{},{components:n})):a.createElement(c,o({ref:t},k))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},29983:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={title:"API Tokens",weight:1},s=void 0,u={unversionedId:"reference-guides/about-the-api/api-tokens",id:"reference-guides/about-the-api/api-tokens",title:"API Tokens",description:"By default, some cluster-level API tokens are generated with infinite time-to-live (ttl=0). In other words, API tokens with ttl=0 never expire unless you invalidate them. Tokens are not invalidated by changing a password.",source:"@site/docs/reference-guides/about-the-api/api-tokens.md",sourceDirName:"reference-guides/about-the-api",slug:"/reference-guides/about-the-api/api-tokens",permalink:"/reference-guides/about-the-api/api-tokens",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/about-the-api/api-tokens.md",tags:[],version:"current",lastUpdatedAt:1663095305,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"API Tokens",weight:1},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/pages-for-subheaders/about-the-api"},next:{title:"Cluster Tools for Logging, Monitoring, and Visibility",permalink:"/reference-guides/rancher-cluster-tools"}},k={},d=[{value:"Deleting tokens",id:"deleting-tokens",level:3},{value:"Setting TTL on Kubeconfig Tokens",id:"setting-ttl-on-kubeconfig-tokens",level:3},{value:"Disable Tokens in Generated Kubeconfigs",id:"disable-tokens-in-generated-kubeconfigs",level:3},{value:"Token Hashing",id:"token-hashing",level:3},{value:"Token Settings",id:"token-settings",level:3},{value:"auth-user-session-ttl-minutes",id:"auth-user-session-ttl-minutes",level:4},{value:"kubeconfig-default-token-TTL-minutes",id:"kubeconfig-default-token-ttl-minutes",level:4},{value:"kubeconfig-token-ttl-minutes",id:"kubeconfig-token-ttl-minutes",level:4},{value:"auth-token-max-ttl-minutes",id:"auth-token-max-ttl-minutes",level:4},{value:"kubeconfig-generate-token",id:"kubeconfig-generate-token",level:4}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, some cluster-level API tokens are generated with infinite time-to-live (",(0,r.kt)("inlineCode",{parentName:"p"},"ttl=0"),"). In other words, API tokens with ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl=0")," never expire unless you invalidate them. Tokens are not invalidated by changing a password."),(0,r.kt)("p",null,"You can deactivate API tokens by deleting them or by deactivating the user account."),(0,r.kt)("h3",{id:"deleting-tokens"},"Deleting tokens"),(0,r.kt)("p",null,"To delete a token,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the list of all tokens in the Rancher API view at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP>/v3/tokens"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Access the token you want to delete by its ID. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP>/v3/tokens/kubectl-shell-user-vqkqt"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Delete"),"."))),(0,r.kt)("p",null,"Here is the complete list of tokens that are generated with ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl=0"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Token"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubeconfig-*")),(0,r.kt)("td",{parentName:"tr",align:null},"Kubeconfig token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubectl-shell-*")),(0,r.kt)("td",{parentName:"tr",align:null},"Access to ",(0,r.kt)("inlineCode",{parentName:"td"},"kubectl")," shell in the browser")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"agent-*")),(0,r.kt)("td",{parentName:"tr",align:null},"Token for agent deployment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"compose-token-*")),(0,r.kt)("td",{parentName:"tr",align:null},"Token for compose")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"helm-token-*")),(0,r.kt)("td",{parentName:"tr",align:null},"Token for Helm chart deployment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*-pipeline*")),(0,r.kt)("td",{parentName:"tr",align:null},"Pipeline token for project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"telemetry-*")),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"drain-node-*")),(0,r.kt)("td",{parentName:"tr",align:null},"Token for drain (we use ",(0,r.kt)("inlineCode",{parentName:"td"},"kubectl")," for drain because there is no native Kubernetes API)")))),(0,r.kt)("h3",{id:"setting-ttl-on-kubeconfig-tokens"},"Setting TTL on Kubeconfig Tokens"),(0,r.kt)("p",null,"Admins can set a global time-to-live (TTL) on Kubeconfig tokens. Changing the default kubeconfig TTL can be done by navigating to global settings and setting ",(0,r.kt)("a",{parentName:"p",href:"#kubeconfig-default-token-ttl-minutes"},(0,r.kt)("inlineCode",{parentName:"a"},"kubeconfig-default-token-ttl-minutes"))," to the desired duration in minutes. The default value of ",(0,r.kt)("a",{parentName:"p",href:"#kubeconfig-default-token-ttl-minutes"},(0,r.kt)("inlineCode",{parentName:"a"},"kubeconfig-default-token-ttl-minutes"))," is 0, which means tokens never expire."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This setting is used by all kubeconfig tokens except those created by the CLI to ",(0,r.kt)("a",{parentName:"p",href:"#disable-tokens-in-generated-kubeconfigs"},"generate kubeconfig tokens"),"."))),(0,r.kt)("h3",{id:"disable-tokens-in-generated-kubeconfigs"},"Disable Tokens in Generated Kubeconfigs"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig-generate-token")," setting to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". This setting instructs Rancher to no longer automatically generate a token when a user clicks on download a kubeconfig file. Once this setting is deactivated, a generated kubeconfig will reference the ",(0,r.kt)("a",{parentName:"p",href:"/reference-guides/cli-with-rancher/kubectl-utility#authentication-with-kubectl-and-kubeconfig-tokens-with-ttl"},"Rancher CLI")," to retrieve a short-lived token for the cluster. When this kubeconfig is used in a client, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),", the Rancher CLI needs to be installed to complete the log in request.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig-token-ttl-minutes")," setting to the desired duration in minutes. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig-token-ttl-minutes")," is 960 (16 hours)."))),(0,r.kt)("h3",{id:"token-hashing"},"Token Hashing"),(0,r.kt)("p",null,"Users can enable token hashing, where tokens will undergo a one-way hash using the SHA256 algorithm. This is a non-reversible process, once enabled, this feature cannot be disabled. It is advisable to take backups prior to enabling and/or evaluating in a test environment first."),(0,r.kt)("p",null,"To enable token hashing, refer to ",(0,r.kt)("a",{parentName:"p",href:"/pages-for-subheaders/enable-experimental-features"},"this section"),"."),(0,r.kt)("p",null,"This feature will affect all tokens which include, but are not limited to, the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubeconfig tokens"),(0,r.kt)("li",{parentName:"ul"},"Bearer tokens API keys/calls"),(0,r.kt)("li",{parentName:"ul"},"Tokens used by internal operations")),(0,r.kt)("h3",{id:"token-settings"},"Token Settings"),(0,r.kt)("p",null,"These global settings affect Rancher token behavior."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#auth-user-session-ttl-minutes"},(0,r.kt)("inlineCode",{parentName:"a"},"auth-user-session-ttl-minutes"))),(0,r.kt)("td",{parentName:"tr",align:null},"TTL in minutes on a user auth session token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#kubeconfig-default-token-ttl-minutes"},(0,r.kt)("inlineCode",{parentName:"a"},"kubeconfig-default-token-TTL-minutes"))),(0,r.kt)("td",{parentName:"tr",align:null},"Default TTL applied to all kubeconfig tokens except those ",(0,r.kt)("a",{parentName:"td",href:"#disable-tokens-in-generated-kubeconfigs"},"generated by Rancher CLI"),". ",(0,r.kt)("strong",{parentName:"td"},"Introduced in version 2.6.6."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#kubeconfig-token-ttl-minutes"},(0,r.kt)("inlineCode",{parentName:"a"},"kubeconfig-token-ttl-minutes"))),(0,r.kt)("td",{parentName:"tr",align:null},"TTL used for tokens generated via the CLI.  ",(0,r.kt)("strong",{parentName:"td"},"Deprecated since version 2.6.6, and will be removed in 2.8.0.")," This setting will be removed, and ",(0,r.kt)("inlineCode",{parentName:"td"},"kubeconfig-default-token-TTL-minutes")," will be used for all kubeconfig tokens.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#auth-token-max-ttl-minutes"},(0,r.kt)("inlineCode",{parentName:"a"},"auth-token-max-ttl-minutes"))),(0,r.kt)("td",{parentName:"tr",align:null},"Max TTL for all tokens except those controlled by ",(0,r.kt)("a",{parentName:"td",href:"#auth-user-session-ttl-minutes"},(0,r.kt)("inlineCode",{parentName:"a"},"auth-user-session-ttl-minutes")),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#kubeconfig-generate-token"},(0,r.kt)("inlineCode",{parentName:"a"},"kubeconfig-generate-token"))),(0,r.kt)("td",{parentName:"tr",align:null},"If true, automatically generate tokens when a user downloads a kubeconfig.")))),(0,r.kt)("h4",{id:"auth-user-session-ttl-minutes"},"auth-user-session-ttl-minutes"),(0,r.kt)("p",null,"Time to live (TTL) duration in minutes used to determine when a user auth session token expires. When expired, the user will be required to log in and obtain a new token. This setting is not affected by ",(0,r.kt)("a",{parentName:"p",href:"#auth-token-max-ttl-minutes"},(0,r.kt)("inlineCode",{parentName:"a"},"auth-token-max-ttl-minutes")),". Session tokens are created when a user logs into Rancher."),(0,r.kt)("h4",{id:"kubeconfig-default-token-ttl-minutes"},"kubeconfig-default-token-TTL-minutes"),(0,r.kt)("p",null,"Time to live (TTL) duration in minutes used to determine when a kubeconfig token expires. When the token is expired, the API will reject the token. This setting can not be larger than ",(0,r.kt)("a",{parentName:"p",href:"#auth-token-max-ttl-minutes"},(0,r.kt)("inlineCode",{parentName:"a"},"auth-token-max-ttl-minutes")),". This setting applies to a token generated in a requested kubeconfig file. Except those ",(0,r.kt)("a",{parentName:"p",href:"#disable-tokens-in-generated-kubeconfigs"},"generated by Rancher CLI"),".\n",(0,r.kt)("strong",{parentName:"p"},"Introduced in version 2.6.6"),"."),(0,r.kt)("h4",{id:"kubeconfig-token-ttl-minutes"},"kubeconfig-token-ttl-minutes"),(0,r.kt)("p",null,"Time to live (TTL) duration in minutes used to determine when a kubeconfig token that was generated by the CLI expires. Tokens are generated by the CLI when ",(0,r.kt)("a",{parentName:"p",href:"#kubeconfig-generate-token"},(0,r.kt)("inlineCode",{parentName:"a"},"kubeconfig-generate-token"))," is false. When the token is expired, the API will reject the token. This setting can not be larger than ",(0,r.kt)("a",{parentName:"p",href:"#auth-token-max-ttl-minutes"},(0,r.kt)("inlineCode",{parentName:"a"},"auth-token-max-ttl-minutes")),".\n",(0,r.kt)("strong",{parentName:"p"},"Deprecated since version 2.6.6, and will be removed in 2.8.0: This setting will be replaced with the value of ",(0,r.kt)("a",{parentName:"strong",href:"#kubeconfig-default-token-ttl-minutes"},(0,r.kt)("inlineCode",{parentName:"a"},"kubeconfig-default-token-TTL-minutes")),".")),(0,r.kt)("h4",{id:"auth-token-max-ttl-minutes"},"auth-token-max-ttl-minutes"),(0,r.kt)("p",null,"Maximum Time to Live (TTL) in minutes allowed for auth tokens. If a user attempts to create a token with a TTL greater than ",(0,r.kt)("inlineCode",{parentName:"p"},"auth-token-max-ttl-minutes"),", Rancher will set the token TTL to the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"auth-token-max-ttl-minutes"),". Auth tokens are tokens created for authenticating API requests.\n",(0,r.kt)("strong",{parentName:"p"},"Changed in version 2.6.6: Applies to all kubeconfig tokens and api tokens.")),(0,r.kt)("h4",{id:"kubeconfig-generate-token"},"kubeconfig-generate-token"),(0,r.kt)("p",null,"When true, kubeconfigs requested through the UI will contain a valid token. When false, the kubeconfig will contain a command that uses the Rancher CLI to prompt the user to log in. ",(0,r.kt)("a",{parentName:"p",href:"/reference-guides/cli-with-rancher/kubectl-utility#authentication-with-kubectl-and-kubeconfig-tokens-with-ttl"},"The CLI then will retrieve and cache a token for the user"),"."))}m.isMDXComponent=!0}}]);