"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[72406],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17548:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"vSphere Storage",weight:3055,aliases:["/rancher/v2.0-v2.4/en/tasks/clusters/adding-storage/provisioning-storage/vsphere/"]},l=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage",title:"vSphere Storage",description:"To provide stateful workloads with vSphere storage, we recommend creating a vSphereVolume StorageClass. This practice dynamically provisions vSphere storage when workloads request volumes through a persistent volume claim.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples",slug:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663095305,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"vSphere Storage",weight:3055,aliases:["/rancher/v2.0-v2.4/en/tasks/clusters/adding-storage/provisioning-storage/vsphere/"]},sidebar:"tutorialSidebar",previous:{title:"NFS Storage",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/nfs-storage"},next:{title:"Projects and Kubernetes Namespaces with Rancher",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Creating a StorageClass",id:"creating-a-storageclass",level:3},{value:"Creating a Workload with a vSphere Volume",id:"creating-a-workload-with-a-vsphere-volume",level:3},{value:"Verifying Persistence of the Volume",id:"verifying-persistence-of-the-volume",level:3},{value:"Why to Use StatefulSets Instead of Deployments",id:"why-to-use-statefulsets-instead-of-deployments",level:3},{value:"Related Links",id:"related-links",level:3}],d={toc:c};function m(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To provide stateful workloads with vSphere storage, we recommend creating a vSphereVolume StorageClass. This practice dynamically provisions vSphere storage when workloads request volumes through a ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/create-kubernetes-persistent-storage"},"persistent volume claim"),"."),(0,o.kt)("p",null,"In order to dynamically provision storage in vSphere, the vSphere provider must be ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/vsphere"},"enabled.")),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"In order to provision vSphere volumes in a cluster created with the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Kubernetes Engine (RKE)"),", the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/vsphere"},"vSphere cloud provider")," must be explicitly enabled in the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"cluster options"),"."),(0,o.kt)("h3",{id:"creating-a-storageclass"},"Creating a StorageClass"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",{parentName:"blockquote"},"The following steps can also be performed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," command line tool. See ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"Kubernetes documentation on persistent volumes")," for details.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the Global view, open the cluster where you want to provide vSphere storage.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the main menu, select ",(0,o.kt)("strong",{parentName:"p"},"Storage > Storage Classes"),". Then click ",(0,o.kt)("strong",{parentName:"p"},"Add Class"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for the class.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under ",(0,o.kt)("strong",{parentName:"p"},"Provisioner"),", select ",(0,o.kt)("strong",{parentName:"p"},"VMWare vSphere Volume"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:r(55792).Z,width:"750",height:"473"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Optionally, specify additional properties for this storage class under ",(0,o.kt)("strong",{parentName:"p"},"Parameters"),". Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://vmware.github.io/vsphere-storage-for-kubernetes/documentation/storageclass.html"},"vSphere storage documentation")," for details.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."))),(0,o.kt)("h3",{id:"creating-a-workload-with-a-vsphere-volume"},"Creating a Workload with a vSphere Volume"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the cluster where you configured vSphere storage, begin creating a workload as you would in ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"Deploying Workloads"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For ",(0,o.kt)("strong",{parentName:"p"},"Workload Type"),", select ",(0,o.kt)("strong",{parentName:"p"},"Stateful set of\xa01\xa0pod"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Expand the ",(0,o.kt)("strong",{parentName:"p"},"Volumes")," section and click ",(0,o.kt)("strong",{parentName:"p"},"Add Volume"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose ",(0,o.kt)("strong",{parentName:"p"},"Add a new persistent volume (claim)"),". This option will implicitly create the claim once you deploy the workload.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Assign a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for the claim, ie. ",(0,o.kt)("inlineCode",{parentName:"p"},"test-volume")," and select the vSphere storage class created in the previous step.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the required ",(0,o.kt)("strong",{parentName:"p"},"Capacity")," for the volume. Then click ",(0,o.kt)("strong",{parentName:"p"},"Define"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:r(47601).Z,width:"750",height:"416"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Assign a path in the ",(0,o.kt)("strong",{parentName:"p"},"Mount Point")," field. This is the full path where the volume will be mounted in the container file system, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/persistent"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Launch")," to create the workload."))),(0,o.kt)("h3",{id:"verifying-persistence-of-the-volume"},"Verifying Persistence of the Volume"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the context menu of the workload you just created, click ",(0,o.kt)("strong",{parentName:"p"},"Execute Shell"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Note the directory at root where the volume has been mounted to (in this case ",(0,o.kt)("inlineCode",{parentName:"p"},"/persistent"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a file in the volume by executing the command ",(0,o.kt)("inlineCode",{parentName:"p"},"touch /<volumeMountPoint>/data.txt"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Close")," the shell window.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the name of the workload to reveal detail information.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the context menu next to the Pod in the ",(0,o.kt)("em",{parentName:"p"},"Running")," state.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete the Pod by selecting ",(0,o.kt)("strong",{parentName:"p"},"Delete"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Observe that the pod is deleted. Then a new pod is scheduled to replace it so that the workload maintains its configured scale of a single stateful pod.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the replacement pod is running, click ",(0,o.kt)("strong",{parentName:"p"},"Execute Shell"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Inspect the contents of the directory where the volume is mounted by entering ",(0,o.kt)("inlineCode",{parentName:"p"},"ls -l /<volumeMountPoint>"),". Note that the file you created earlier is still present."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"workload-persistent-data",src:r(62803).Z,width:"750",height:"508"})))),(0,o.kt)("h3",{id:"why-to-use-statefulsets-instead-of-deployments"},"Why to Use StatefulSets Instead of Deployments"),(0,o.kt)("p",null,"You should always use ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSets")," for workloads consuming vSphere storage, as this resource type is designed to address a VMDK block storage caveat."),(0,o.kt)("p",null,"Since vSphere volumes are backed by VMDK block storage, they only support an ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims"},"access mode")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"ReadWriteOnce"),". This setting restricts the volume so that it can only be mounted to a single pod at a time, unless all pods consuming that volume are co-located on the same node. This behavior makes a deployment resource unusable for scaling beyond a single replica if it consumes vSphere volumes."),(0,o.kt)("p",null,"Even using a deployment resource with just a single replica may result in a deadlock situation while updating the deployment. If the updated pod is scheduled to a node different from where the existing pod lives, it will fail to start because the VMDK is still attached to the other node."),(0,o.kt)("h3",{id:"related-links"},"Related Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vmware.github.io/vsphere-storage-for-kubernetes/documentation/"},"vSphere Storage for Kubernetes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"Kubernetes Persistent Volumes"))))}m.isMDXComponent=!0},55792:function(e,t,r){t.Z=r.p+"assets/images/vsphere-storage-class-c509e79beccf22b63a7d65c4d72ad247.png"},47601:function(e,t,r){t.Z=r.p+"assets/images/workload-add-volume-8c2902a03cf2eb3ca719a81248809d2f.png"},62803:function(e,t,r){t.Z=r.p+"assets/images/workload-persistent-data-5a49807c13b871ee5026e3f8123075a1.png"}}]);