"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61251],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(i,".").concat(d)]||h[d]||p[d]||l;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},82218:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),s=["components"],o={title:"Installing Rancher on Amazon EKS",shortTitle:"Amazon EKS",weight:3},i=void 0,u={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks",id:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks",title:"Installing Rancher on Amazon EKS",description:"This page covers two ways to install Rancher on EKS.",source:"@site/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks",permalink:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks.md",tags:[],version:"current",lastUpdatedAt:1663095305,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Installing Rancher on Amazon EKS",shortTitle:"Amazon EKS",weight:3},sidebar:"tutorialSidebar",previous:{title:"Rendering the Helm Template in an Air-Gapped Environment",permalink:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades"},next:{title:"Installing Rancher on Azure Kubernetes Service",permalink:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks"}},c={},p=[{value:"Automated Quickstart using AWS Best Practices",id:"automated-quickstart-using-aws-best-practices",level:2},{value:"Creating an EKS Cluster for the Rancher Server",id:"creating-an-eks-cluster-for-the-rancher-server",level:2},{value:"1. Prepare your Workstation",id:"1-prepare-your-workstation",level:3},{value:"2. Configure the AWS CLI",id:"2-configure-the-aws-cli",level:3},{value:"3. Create the EKS Cluster",id:"3-create-the-eks-cluster",level:3},{value:"4. Test the Cluster",id:"4-test-the-cluster",level:3},{value:"5. Install an Ingress",id:"5-install-an-ingress",level:3},{value:"6. Get Load Balancer IP",id:"6-get-load-balancer-ip",level:3},{value:"7. Set up DNS",id:"7-set-up-dns",level:3},{value:"8. Install the Rancher Helm Chart",id:"8-install-the-rancher-helm-chart",level:3}],h={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page covers two ways to install Rancher on EKS."),(0,l.kt)("p",null,"The first is a guide for deploying the Rancher server on an EKS cluster using CloudFormation. This guide was created in collaboration with Amazon Web Services to show how to deploy Rancher following best practices."),(0,l.kt)("p",null,"The second is a guide for installing an EKS cluster with an ingress by using command line tools. This guide may be useful if you want to use fewer resources while trying out Rancher on EKS."),(0,l.kt)("p",null,"If you already have an EKS Kubernetes cluster, skip to the step about ",(0,l.kt)("a",{parentName:"p",href:"#5-install-an-ingress"},"installing an ingress.")," Then install the Rancher Helm chart following the instructions on ",(0,l.kt)("a",{parentName:"p",href:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#install-the-rancher-helm-chart"},"this page.")),(0,l.kt)("h2",{id:"automated-quickstart-using-aws-best-practices"},"Automated Quickstart using AWS Best Practices"),(0,l.kt)("p",null,"Rancher and Amazon Web Services collaborated on a quick start guide for deploying Rancher on an EKS cluster following AWS best practices. The deployment guide is ",(0,l.kt)("a",{parentName:"p",href:"https://aws-quickstart.github.io/quickstart-eks-rancher/"},"here.")),(0,l.kt)("p",null,"The quick start guide provides three options for deploying Rancher on EKS:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Deploy Rancher into a new VPC and new Amazon EKS cluster"),". This option builds a new AWS environment consisting of the VPC, subnets, NAT gateways, security groups, bastion hosts, Amazon EKS cluster, and other infrastructure components. It then deploys Rancher into this new EKS cluster."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Deploy Rancher into an existing VPC and a new Amazon EKS cluster"),". This option provisions Rancher in your existing AWS infrastructure."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Deploy Rancher into an existing VPC and existing Amazon EKS cluster"),". This option provisions Rancher in your existing AWS infrastructure.")),(0,l.kt)("p",null,"Deploying this Quick Start for a new virtual private cloud (VPC) and new Amazon EKS cluster using default parameters builds the following Rancher environment in the AWS Cloud:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A highly available architecture that spans three Availability Zones.*"),(0,l.kt)("li",{parentName:"ul"},"A VPC configured with public and private subnets, according to AWS best practices, to provide you with your own virtual network on AWS.*"),(0,l.kt)("li",{parentName:"ul"},"In the public subnets:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Managed network address translation (NAT) gateways to allow outbound internet access for resources.*"),(0,l.kt)("li",{parentName:"ul"},"Linux bastion hosts in an Auto Scaling group to allow inbound Secure Shell (SSH) access to Amazon Elastic Compute Cloud (Amazon EC2) instances in public and private subnets.*"))),(0,l.kt)("li",{parentName:"ul"},"In the private subnets:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Kubernetes nodes in an Auto Scaling group.*"),(0,l.kt)("li",{parentName:"ul"},"A Network Load Balancer (not shown) for accessing the Rancher console."))),(0,l.kt)("li",{parentName:"ul"},"Rancher deployment using AWS Systems Manager automation."),(0,l.kt)("li",{parentName:"ul"},"Amazon EKS service for the EKS cluster, which provides the Kubernetes control plane.*"),(0,l.kt)("li",{parentName:"ul"},"An Amazon Route 53 DNS record for accessing the Rancher deployment.")),(0,l.kt)("p",null,"*"," The CloudFormation template that deploys the Quick Start into an existing Amazon EKS cluster skips the components marked by asterisks and prompts you for your existing VPC configuration."),(0,l.kt)("h2",{id:"creating-an-eks-cluster-for-the-rancher-server"},"Creating an EKS Cluster for the Rancher Server"),(0,l.kt)("p",null,"In this section, you'll install an EKS cluster with an ingress by using command line tools. This guide may be useful if you want to use fewer resources while trying out Rancher on EKS."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites:")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"You should already have an AWS account."),(0,l.kt)("li",{parentName:"ul"},"It is recommended to use an IAM user instead of the root AWS account. You will need the IAM user's access key and secret key to configure the AWS command line interface."),(0,l.kt)("li",{parentName:"ul"},"The IAM user needs the minimum IAM policies described in the official ",(0,l.kt)("a",{parentName:"li",href:"https://eksctl.io/usage/minimum-iam-policies/"},"eksctl documentation."))))),(0,l.kt)("h3",{id:"1-prepare-your-workstation"},"1. Prepare your Workstation"),(0,l.kt)("p",null,"Install the following command line tools on your workstation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"The AWS CLI v2:")," For help, refer to these ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"installation steps.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"eksctl:")," For help, refer to these ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html"},"installation steps.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"kubectl:")," For help, refer to these ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html"},"installation steps.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"helm:")," For help, refer to these ",(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"installation steps."))),(0,l.kt)("h3",{id:"2-configure-the-aws-cli"},"2. Configure the AWS CLI"),(0,l.kt)("p",null,"To configure the AWS CLI, run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"aws configure\n")),(0,l.kt)("p",null,"Then enter the following values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AWS Access Key ID"),(0,l.kt)("td",{parentName:"tr",align:null},"The access key credential for the IAM user with EKS permissions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AWS Secret Access Key"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret key credential for the IAM user with EKS permissions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default region name"),(0,l.kt)("td",{parentName:"tr",align:null},"An ",(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Regions"},"AWS region")," where the cluster nodes will be located.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default output format"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter ",(0,l.kt)("inlineCode",{parentName:"td"},"json"),".")))),(0,l.kt)("h3",{id:"3-create-the-eks-cluster"},"3. Create the EKS Cluster"),(0,l.kt)("p",null,"To create an EKS cluster, run the following command. Use the AWS region that applies to your use case. When choosing a Kubernetes version, be sure to first consult the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-matrix/"},"support matrix")," to find the highest version of Kubernetes that has been validated for your Rancher version."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," If the version of Kubernetes is updated to v1.22 or later, the version of ingress-nginx would also need to be ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/#faq-migration-to-apiversion-networkingk8siov1"},"updated"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"eksctl create cluster \\\n  --name rancher-server \\\n  --version <VERSION> \\\n  --region us-west-2 \\\n  --nodegroup-name ranchernodes \\\n  --nodes 3 \\\n  --nodes-min 1 \\\n  --nodes-max 4 \\\n  --managed\n")),(0,l.kt)("p",null,"The cluster will take some time to be deployed with CloudFormation."),(0,l.kt)("h3",{id:"4-test-the-cluster"},"4. Test the Cluster"),(0,l.kt)("p",null,"To test the cluster, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"eksctl get cluster\n")),(0,l.kt)("p",null,"The result should look like the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"eksctl get cluster\n2021-03-18 15:09:35 [\u2139]  eksctl version 0.40.0\n2021-03-18 15:09:35 [\u2139]  using region us-west-2\nNAME        REGION      EKSCTL CREATED\nrancher-server-cluster      us-west-2   True\n")),(0,l.kt)("h3",{id:"5-install-an-ingress"},"5. Install an Ingress"),(0,l.kt)("p",null,"The cluster needs an Ingress so that Rancher can be accessed from outside the cluster."),(0,l.kt)("p",null,"The following command installs an ",(0,l.kt)("inlineCode",{parentName:"p"},"nginx-ingress-controller")," with a LoadBalancer service. This will result in an ELB (Elastic Load Balancer) in front of NGINX:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\nhelm repo update\nhelm upgrade --install \\\n  ingress-nginx ingress-nginx/ingress-nginx \\\n  --namespace ingress-nginx \\\n  --set controller.service.type=LoadBalancer \\\n  --version 4.0.18 \\\n  --create-namespace\n")),(0,l.kt)("h3",{id:"6-get-load-balancer-ip"},"6. Get Load Balancer IP"),(0,l.kt)("p",null,"To get the address of the load balancer, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl get service ingress-nginx-controller --namespace=ingress-nginx\n")),(0,l.kt)("p",null,"The result should look similar to the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME                       TYPE           CLUSTER-IP     EXTERNAL-IP                                                              PORT(S)\n AGE\ningress-nginx-controller   LoadBalancer   10.100.90.18   a904a952c73bf4f668a17c46ac7c56ab-962521486.us-west-2.elb.amazonaws.com   80:31229/TCP,443:31050/TCP\n 27m\n")),(0,l.kt)("p",null,"Save the ",(0,l.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP"),"."),(0,l.kt)("h3",{id:"7-set-up-dns"},"7. Set up DNS"),(0,l.kt)("p",null,"External traffic to the Rancher server will need to be directed at the load balancer you created."),(0,l.kt)("p",null,"Set up a DNS to point at the external IP that you saved. This DNS will be used as the Rancher server URL."),(0,l.kt)("p",null,"There are many valid ways to set up the DNS. For help, refer to the AWS documentation on ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer.html"},"routing traffic to an ELB load balancer.")),(0,l.kt)("h3",{id:"8-install-the-rancher-helm-chart"},"8. Install the Rancher Helm Chart"),(0,l.kt)("p",null,"Next, install the Rancher Helm chart by following the instructions on ",(0,l.kt)("a",{parentName:"p",href:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#install-the-rancher-helm-chart"},"this page.")," The Helm instructions are the same for installing Rancher on any Kubernetes distribution."),(0,l.kt)("p",null,"Use that DNS name from the previous step as the Rancher server URL when you install Rancher. It can be passed in as a Helm option. For example, if the DNS name is ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher.my.org"),", you could run the Helm installation command with the option ",(0,l.kt)("inlineCode",{parentName:"p"},"--set hostname=rancher.my.org"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"New in v2.6.7"))),(0,l.kt)("p",null,"When installing Rancher on top of this setup, you will also need to pass the value below into the Rancher Helm install command in order to set the name of the ingress controller to be used with Rancher's ingress resource:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--set ingress.ingressClassName=nginx\n")),(0,l.kt)("p",null,"Refer ",(0,l.kt)("a",{parentName:"p",href:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#5-install-rancher-with-helm-and-your-chosen-certificate-option"},"here for the Helm install command")," for your chosen certificate option."))}d.isMDXComponent=!0}}]);