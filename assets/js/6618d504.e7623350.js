"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[32959],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),i=n(67392),s=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function h(e){var t,n,l=e.lazy,h=e.block,d=e.defaultValue,m=e.values,f=e.groupId,k=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,I=w.setTabGroupChoices,O=(0,r.useState)(y),T=O[0],R=O[1],E=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=N[f];null!=C&&C!==T&&g.some((function(e){return e.value===C}))&&R(C)}var _=function(e){var t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==T&&(x(t),R(a),null!=f&&I(f,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var o,l=E.indexOf(e.currentTarget)-1;n=null!=(o=E[l])?o:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":h},k)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:_,onClick:_},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,l.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},3605:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(65488),i=n(85162),s=["components"],u={title:"Helm CLI Quick Start",weight:300},c=void 0,p={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/helm-cli",id:"getting-started/quick-start-guides/deploy-rancher-manager/helm-cli",title:"Helm CLI Quick Start",description:"These instructions capture a quick way to set up a proof-of-concept Rancher installation.",source:"@site/docs/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli.md",tags:[],version:"current",lastUpdatedAt:1663095305,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Helm CLI Quick Start",weight:300},sidebar:"tutorialSidebar",previous:{title:"Rancher Equinix Metal Quick Start",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal"},next:{title:"Deploying Workloads",permalink:"/pages-for-subheaders/deploy-rancher-workloads"}},h={},d=[{value:"Install K3s on Linux",id:"install-k3s-on-linux",level:2},{value:"Save the kubeconfig to your workstation",id:"save-the-kubeconfig-to-your-workstation",level:2},{value:"Edit the Rancher server URL in the kubeconfig",id:"edit-the-rancher-server-url-in-the-kubeconfig",level:2},{value:"Install Rancher with Helm",id:"install-rancher-with-helm",level:2}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These instructions capture a quick way to set up a proof-of-concept Rancher installation."),(0,o.kt)("p",null,"These instructions assume you have a Linux virtual machine that you will communicate with from your local workstation. Rancher will be installed on the Linux machine. You will need to retrieve the IP address of that machine so that you can access Rancher from your local workstation. Rancher is designed to manage Kubernetes clusters remotely, so any Kubernetes cluster that Rancher manages in the future will also need to be able to reach this IP address."),(0,o.kt)("p",null,"We don't recommend installing Rancher locally because it creates a networking problem. Installing Rancher on localhost does not allow Rancher to communicate with downstream Kubernetes clusters, so on localhost you wouldn't be able to test Rancher's cluster provisioning or cluster management functionality."),(0,o.kt)("p",null,"Your Linux machine can be anywhere. It could be an Amazon EC2 instance, a Digital Ocean droplet, or an Azure virtual machine, to name a few examples. Other Rancher docs often use 'node' as a generic term for all of these. One possible way to deploy a Linux machine is by setting up an Amazon EC2 instance as shown in ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"this tutorial"),"."),(0,o.kt)("p",null,"The full installation requirements are ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"here"),"."),(0,o.kt)("h2",{id:"install-k3s-on-linux"},"Install K3s on Linux"),(0,o.kt)("p",null,"Install a K3s cluster by running this command on the Linux machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION="***" sh -s - server --cluster-init\n')),(0,o.kt)("p",null,"Rancher needs to be installed on a supported Kubernetes version. To specify the K3s version, use the INSTALL_K3S_VERSION environment variable when running the K3s installation script. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms"),"."),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"--cluster-init")," allows K3s to use embedded etcd as the datastore and has the ability to convert to an HA setup. Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/ha-embedded/"},"High Availability with Embedded DB"),"."),(0,o.kt)("p",null,"Save the IP of the Linux machine."),(0,o.kt)("h2",{id:"save-the-kubeconfig-to-your-workstation"},"Save the kubeconfig to your workstation"),(0,o.kt)("p",null,"The kubeconfig file is important for accessing the Kubernetes cluster. Copy the file at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/k3s.yaml")," from the Linux machine and save it to your local workstation in the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),". One way to do this is by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"scp")," tool and run this command on your local machine:"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Mac and Linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"scp root@<IP_OF_LINUX_MACHINE>:/etc/rancher/k3s/k3s.yaml ~/.kube/config\n"))),(0,o.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,o.kt)("p",null,'By default, "scp" is not a recognized command, so we need to install a module first.'),(0,o.kt)("p",null,"In Windows Powershell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Find-Module Posh-SSH\nInstall-Module Posh-SSH\n\n## Get the remote kubeconfig file\nscp root@<IP_OF_LINUX_MACHINE>:/etc/rancher/k3s/k3s.yaml $env:USERPROFILE\\.kube\\config\n")))),(0,o.kt)("h2",{id:"edit-the-rancher-server-url-in-the-kubeconfig"},"Edit the Rancher server URL in the kubeconfig"),(0,o.kt)("p",null,"In the kubeconfig file, you will need to change the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," field to ",(0,o.kt)("inlineCode",{parentName:"p"},"<IP_OF_LINUX_NODE>:6443"),". The Kubernetes API server will be reached at port 6443, while the Rancher server will be reached at ports 80 and 443. This edit is needed so that when you run Helm or kubectl commands from your local workstation, you will be able to communicate with the Kubernetes cluster that Rancher will be installed on."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Mac and Linux",mdxType:"TabItem"},(0,o.kt)("p",null,"One way to open the kubeconfig file for editing is to use Vim:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vi ~/.kube/config\n")),(0,o.kt)("p",null,"Press ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," to put Vim in insert mode. To save your work, press ",(0,o.kt)("inlineCode",{parentName:"p"},"Esc"),". Then press ",(0,o.kt)("inlineCode",{parentName:"p"},":wq")," and press ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter"),".")),(0,o.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,o.kt)("p",null,"In Windows Powershell, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"notepad.exe")," for editing the kubeconfig file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"notepad.exe $env:USERPROFILE\\.kube\\config\n")),(0,o.kt)("p",null,"Once edited, either press ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl+s")," or go to ",(0,o.kt)("inlineCode",{parentName:"p"},"File > Save")," to save your work."))),(0,o.kt)("h2",{id:"install-rancher-with-helm"},"Install Rancher with Helm"),(0,o.kt)("p",null,"Then from your local workstation, run the following commands. You will need to have ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," and ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"helm.")," installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n\nkubectl create namespace cattle-system\n\nkubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.7.1/cert-manager.crds.yaml\n\nhelm repo add jetstack https://charts.jetstack.io\n\nhelm repo update\n\nhelm install cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --create-namespace \\\n  --version v1.7.1\n\n# Windows Powershell\nhelm install cert-manager jetstack/cert-manager `\n  --namespace cert-manager `\n  --create-namespace `\n  --version v1.7.1\n")),(0,o.kt)("p",null,"The final command to install Rancher is below. The command requires a domain name that forwards traffic to the Linux machine. For the sake of simplicity in this tutorial, you can use a fake domain name to create your proof-of-concept. An example of a fake domain name would be ",(0,o.kt)("inlineCode",{parentName:"p"},"<IP_OF_LINUX_NODE>.sslip.io"),"."),(0,o.kt)("p",null,"To install a specific Rancher version, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--version")," flag (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"--version 2.6.6"),"). Otherwise, the latest Rancher is installed by default. Refer to ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"},"Choosing a Rancher Version"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm install rancher rancher-latest/rancher \\\n  --namespace cattle-system \\\n  --set hostname=<IP_OF_LINUX_NODE>.sslip.io \\\n  --set replicas=1 \\\n  --set bootstrapPassword=<PASSWORD_FOR_RANCHER_ADMIN>\n\n# Windows Powershell\nhelm install rancher rancher-latest/rancher `\n  --namespace cattle-system `\n  --set hostname=<IP_OF_LINUX_NODE>.sslip.io `\n  --set replicas=1 `\n  --set bootstrapPassword=<PASSWORD_FOR_RANCHER_ADMIN>\n")),(0,o.kt)("p",null,"Now if you navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"<IP_OF_LINUX_NODE>.sslip.io")," in a web browser, you should see the Rancher UI."),(0,o.kt)("p",null,"To make these instructions simple, we used a fake domain name and self-signed certificates to do this installation. Therefore, you will probably need to add a security exception to your web browser to see the Rancher UI. Note that for production installs, you would need a high-availability setup with a load balancer, a real domain name and real certificates."),(0,o.kt)("p",null,"These instructions also left out the full installation requirements and other installation options. If you have any issues with these steps, refer to the full ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"Helm CLI installation docs.")),(0,o.kt)("p",null,"To launch new Kubernetes clusters with your new Rancher server, you may need to set up cloud credentials in Rancher. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"Launching Kubernetes clusters with Rancher.")))}f.isMDXComponent=!0}}]);