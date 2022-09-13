"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[59925],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||l;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},30007:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=["components"],s={title:"Cluster Alerts",shortTitle:"Alerts",weight:2,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/alerts","/rancher/v2.0-v2.4/en/monitoring-alerting/legacy/alerts/cluster-alerts","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-alerts","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-alerts/"]},i=void 0,u={unversionedId:"pages-for-subheaders/cluster-alerts",id:"version-2.0-2.4/pages-for-subheaders/cluster-alerts",title:"Cluster Alerts",description:"To keep your clusters and applications healthy and driving your organizational productivity forward, you need to stay informed of events occurring in your clusters and projects, both planned and unplanned. When an event occurs, your alert is triggered, and you are sent a notification. You can then, if necessary, follow up with corrective actions.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/cluster-alerts.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/cluster-alerts",permalink:"/v2.0-v2.4/pages-for-subheaders/cluster-alerts",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/cluster-alerts.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663095305,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Cluster Alerts",shortTitle:"Alerts",weight:2,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/alerts","/rancher/v2.0-v2.4/en/monitoring-alerting/legacy/alerts/cluster-alerts","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-alerts","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-alerts/"]},sidebar:"tutorialSidebar",previous:{title:"Syslog",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/syslog"},next:{title:"Default Alerts for Cluster Monitoring",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-alerts/default-alerts"}},p={},c=[{value:"Alert Event Examples",id:"alert-event-examples",level:3},{value:"Alerts Triggered by Prometheus Queries",id:"alerts-triggered-by-prometheus-queries",level:3},{value:"Urgency Levels",id:"urgency-levels",level:3},{value:"Scope of Alerts",id:"scope-of-alerts",level:3},{value:"Managing Cluster Alerts",id:"managing-cluster-alerts",level:3},{value:"When a",id:"when-a",level:3},{value:"Is",id:"is",level:3},{value:"Send a",id:"send-a",level:3},{value:"Advanced Options",id:"advanced-options",level:3},{value:"When a",id:"when-a-1",level:3},{value:"Send a",id:"send-a-1",level:3},{value:"Advanced Options",id:"advanced-options-1",level:3},{value:"When a",id:"when-a-2",level:3},{value:"Is",id:"is-1",level:3},{value:"Send a",id:"send-a-2",level:3},{value:"Advanced Options",id:"advanced-options-2",level:3},{value:"When a",id:"when-a-3",level:3},{value:"Is",id:"is-2",level:3},{value:"Send a",id:"send-a-3",level:3},{value:"Advanced Options",id:"advanced-options-3",level:3},{value:"When a",id:"when-a-4",level:3},{value:"Is",id:"is-3",level:3},{value:"Send a",id:"send-a-4",level:3},{value:"Advanced Options",id:"advanced-options-4",level:3},{value:"When a",id:"when-a-5",level:3},{value:"Is",id:"is-4",level:3},{value:"For",id:"for",level:3},{value:"Send a",id:"send-a-5",level:3},{value:"Advanced Options",id:"advanced-options-5",level:3}],d={toc:c};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To keep your clusters and applications healthy and driving your organizational productivity forward, you need to stay informed of events occurring in your clusters and projects, both planned and unplanned. When an event occurs, your alert is triggered, and you are sent a notification. You can then, if necessary, follow up with corrective actions."),(0,l.kt)("h1",{id:"about-alerts"},"About Alerts"),(0,l.kt)("p",null,"Notifiers and alerts are built on top of the ",(0,l.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/alertmanager/"},"Prometheus Alertmanager"),". Leveraging these tools, Rancher can notify ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owners")," and ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project owners")," of events they need to address."),(0,l.kt)("p",null,"Before you can receive alerts, you must configure one or more notifier in Rancher."),(0,l.kt)("p",null,"When you create a cluster, some alert rules are predefined. You can receive these alerts if you configure a ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/notifiers"},"notifier")," for them."),(0,l.kt)("p",null,"For details about what triggers the predefined alerts, refer to the ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-alerts/default-alerts"},"documentation on default alerts.")),(0,l.kt)("h3",{id:"alert-event-examples"},"Alert Event Examples"),(0,l.kt)("p",null,"Some examples of alert events are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A Kubernetes master component entering an unhealthy state."),(0,l.kt)("li",{parentName:"ul"},"A node or workload error occurring."),(0,l.kt)("li",{parentName:"ul"},"A scheduled deployment taking place as planned."),(0,l.kt)("li",{parentName:"ul"},"A node's hardware resources becoming overstressed.")),(0,l.kt)("h3",{id:"alerts-triggered-by-prometheus-queries"},"Alerts Triggered by Prometheus Queries"),(0,l.kt)("p",null,"When you edit an alert rule, you will have the opportunity to configure the alert to be triggered based on a Prometheus expression. For examples of expressions, refer to ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/expression"},"this page.")),(0,l.kt)("p",null,"Monitoring must be ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-monitoring"},"enabled")," before you can trigger alerts with custom Prometheus queries or expressions."),(0,l.kt)("h3",{id:"urgency-levels"},"Urgency Levels"),(0,l.kt)("p",null,"You can set an urgency level for each alert. This urgency appears in the notification you receive, helping you to prioritize your response actions. For example, if you have an alert configured to inform you of a routine deployment, no action is required. These alerts can be assigned a low priority level. However, if a deployment fails, it can critically impact your organization, and you need to react quickly. Assign these alerts a high priority level."),(0,l.kt)("h3",{id:"scope-of-alerts"},"Scope of Alerts"),(0,l.kt)("p",null,"The scope for alerts can be set at either the cluster level or ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rancher-project-tools/project-alerts"},"project level"),"."),(0,l.kt)("p",null,"At the cluster level, Rancher monitors components in your Kubernetes cluster, and sends you alerts related to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The state of your nodes."),(0,l.kt)("li",{parentName:"ul"},"The system services that manage your Kubernetes cluster."),(0,l.kt)("li",{parentName:"ul"},"The resource events from specific system services."),(0,l.kt)("li",{parentName:"ul"},"The Prometheus expression cross the thresholds")),(0,l.kt)("h3",{id:"managing-cluster-alerts"},"Managing Cluster Alerts"),(0,l.kt)("p",null,"After you set up cluster alerts, you can manage each alert object. To manage alerts, browse to the cluster containing the alerts, and then select ",(0,l.kt)("strong",{parentName:"p"},"Tools > Alerts")," that you want to manage. You can:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Deactivate/Reactive alerts"),(0,l.kt)("li",{parentName:"ul"},"Edit alert settings"),(0,l.kt)("li",{parentName:"ul"},"Delete unnecessary alerts"),(0,l.kt)("li",{parentName:"ul"},"Mute firing alerts"),(0,l.kt)("li",{parentName:"ul"},"Unmute muted alerts")),(0,l.kt)("h1",{id:"adding-cluster-alerts"},"Adding Cluster Alerts"),(0,l.kt)("p",null,"As a ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner"),", you can configure Rancher to send you alerts for cluster events."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Prerequisite:")," Before you can receive cluster alerts, you must ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/notifiers"},"add a notifier"),".")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the ",(0,l.kt)("strong",{parentName:"p"},"Global")," view, navigate to the cluster that you want to configure cluster alerts for. Select ",(0,l.kt)("strong",{parentName:"p"},"Tools > Alerts"),". Then click ",(0,l.kt)("strong",{parentName:"p"},"Add Alert Group"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter a ",(0,l.kt)("strong",{parentName:"p"},"Name")," for the alert that describes its purpose, you could group alert rules for the different purpose.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Based on the type of alert you want to create, refer to the ",(0,l.kt)("a",{parentName:"p",href:"#cluster-alert-configuration"},"cluster alert configuration section."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Continue adding more ",(0,l.kt)("strong",{parentName:"p"},"Alert Rule")," to the group.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Finally, choose the ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/notifiers"},"notifiers")," to send the alerts to."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"You can set up multiple notifiers."),(0,l.kt)("li",{parentName:"ul"},"You can change notifier recipients on the fly."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Create.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," Your alert is configured. A notification is sent when the alert is triggered."),(0,l.kt)("h1",{id:"cluster-alert-configuration"},"Cluster Alert Configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#system-service-alerts"},"System Service Alerts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#resource-event-alerts"},"Resource Event Alerts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#node-alerts"},"Node Alerts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#node-selector-alerts"},"Node Selector Alerts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cis-scan-alerts"},"CIS Scan Alerts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#metric-expression-alerts"},"Metric Expression Alerts"))),(0,l.kt)("h1",{id:"system-service-alerts"},"System Service Alerts"),(0,l.kt)("p",null,"This alert type monitor for events that affect one of the Kubernetes master components, regardless of the node it occurs on."),(0,l.kt)("p",null,"Each of the below sections corresponds to a part of the alert rule configuration section in the Rancher UI."),(0,l.kt)("h3",{id:"when-a"},"When a"),(0,l.kt)("p",null,"Select the ",(0,l.kt)("strong",{parentName:"p"},"System Services")," option, and then select an option from the dropdown:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/components/#kube-controller-manager"},"controller-manager")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/components/#etcd"},"etcd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/components/#kube-scheduler"},"scheduler"))),(0,l.kt)("h3",{id:"is"},"Is"),(0,l.kt)("p",null,"The alert will be triggered when the selected Kubernetes master component is unhealthy."),(0,l.kt)("h3",{id:"send-a"},"Send a"),(0,l.kt)("p",null,"Select the urgency level of the alert. The options are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Critical"),": Most urgent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Warning"),": Normal urgency")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Info"),": Least urgent"),(0,l.kt)("p",{parentName:"li"},"Select the urgency level based on the importance of the service and how many nodes fill the role within your cluster. For example, if you're making an alert for the ",(0,l.kt)("inlineCode",{parentName:"p"},"etcd")," service, select ",(0,l.kt)("strong",{parentName:"p"},"Critical"),". If you're making an alert for redundant schedulers, ",(0,l.kt)("strong",{parentName:"p"},"Warning")," is more appropriate."))),(0,l.kt)("h3",{id:"advanced-options"},"Advanced Options"),(0,l.kt)("p",null,"By default, the below options will apply to all alert rules within the group. You can disable these advanced options when configuring a specific rule."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Group Wait Time"),": How long to wait to buffer alerts of the same group before sending initially, default to 30 seconds."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Group Interval Time"),": How long to wait before sending an alert that has been added to a group which contains already fired alerts, default to 30 seconds."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Repeat Wait Time"),": How long to wait before re-sending a given alert that has already been sent, default to 1 hour.")),(0,l.kt)("h1",{id:"resource-event-alerts"},"Resource Event Alerts"),(0,l.kt)("p",null,"This alert type monitors for specific events that are thrown from a resource type."),(0,l.kt)("p",null,"Each of the below sections corresponds to a part of the alert rule configuration section in the Rancher UI."),(0,l.kt)("h3",{id:"when-a-1"},"When a"),(0,l.kt)("p",null,"Choose the type of resource event that triggers an alert. The options are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Normal"),": triggers an alert when any standard resource event occurs."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Warning"),": triggers an alert when unexpected resource events occur.")),(0,l.kt)("p",null,"Select a resource type from the ",(0,l.kt)("strong",{parentName:"p"},"Choose a Resource")," drop-down that you want to trigger an alert."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/architecture/nodes/"},"Node")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod/"},"Pod")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSet"))),(0,l.kt)("h3",{id:"send-a-1"},"Send a"),(0,l.kt)("p",null,"Select the urgency level of the alert."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Critical"),": Most urgent"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Warning"),": Normal urgency"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Info"),": Least urgent")),(0,l.kt)("p",null,"Select the urgency level of the alert by considering factors such as how often the event occurs or its importance. For example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you set a normal alert for pods, you're likely to receive alerts often, and individual pods usually self-heal, so select an urgency of ",(0,l.kt)("strong",{parentName:"li"},"Info"),"."),(0,l.kt)("li",{parentName:"ul"},"If you set a warning alert for StatefulSets, it's very likely to impact operations, so select an urgency of ",(0,l.kt)("strong",{parentName:"li"},"Critical"),".")),(0,l.kt)("h3",{id:"advanced-options-1"},"Advanced Options"),(0,l.kt)("p",null,"By default, the below options will apply to all alert rules within the group. You can disable these advanced options when configuring a specific rule."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Group Wait Time"),": How long to wait to buffer alerts of the same group before sending initially, default to 30 seconds."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Group Interval Time"),": How long to wait before sending an alert that has been added to a group which contains already fired alerts, default to 30 seconds."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Repeat Wait Time"),": How long to wait before re-sending a given alert that has already been sent, default to 1 hour.")),(0,l.kt)("h1",{id:"node-alerts"},"Node Alerts"),(0,l.kt)("p",null,"This alert type monitors for events that occur on a specific node."),(0,l.kt)("p",null,"Each of the below sections corresponds to a part of the alert rule configuration section in the Rancher UI."),(0,l.kt)("h3",{id:"when-a-2"},"When a"),(0,l.kt)("p",null,"Select the ",(0,l.kt)("strong",{parentName:"p"},"Node")," option, and then make a selection from the ",(0,l.kt)("strong",{parentName:"p"},"Choose a Node")," drop-down."),(0,l.kt)("h3",{id:"is-1"},"Is"),(0,l.kt)("p",null,"Choose an event to trigger the alert."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Not Ready"),": Sends you an alert when the node is unresponsive."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CPU usage over"),": Sends you an alert when the node raises above an entered percentage of its processing allocation."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Mem usage over"),": Sends you an alert when the node raises above an entered percentage of its memory allocation.")),(0,l.kt)("h3",{id:"send-a-2"},"Send a"),(0,l.kt)("p",null,"Select the urgency level of the alert."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Critical"),": Most urgent"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Warning"),": Normal urgency"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Info"),": Least urgent")),(0,l.kt)("p",null,"Select the urgency level of the alert based on its impact on operations. For example, an alert triggered when a node's CPU raises above 60% deems an urgency of ",(0,l.kt)("strong",{parentName:"p"},"Info"),", but a node that is ",(0,l.kt)("strong",{parentName:"p"},"Not Ready")," deems an urgency of ",(0,l.kt)("strong",{parentName:"p"},"Critical"),"."),(0,l.kt)("h3",{id:"advanced-options-2"},"Advanced Options"),(0,l.kt)("p",null,"By default, the below options will apply to all alert rules within the group. You can disable these advanced options when configuring a specific rule."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Group Wait Time"),": How long to wait to buffer alerts of the same group before sending initially, default to 30 seconds."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Group Interval Time"),": How long to wait before sending an alert that has been added to a group which contains already fired alerts, default to 30 seconds."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Repeat Wait Time"),": How long to wait before re-sending a given alert that has already been sent, default to 1 hour.")),(0,l.kt)("h1",{id:"node-selector-alerts"},"Node Selector Alerts"),(0,l.kt)("p",null,"This alert type monitors for events that occur on any node on marked with a label. For more information, see the Kubernetes documentation for ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"Labels"),"."),(0,l.kt)("p",null,"Each of the below sections corresponds to a part of the alert rule configuration section in the Rancher UI."),(0,l.kt)("h3",{id:"when-a-3"},"When a"),(0,l.kt)("p",null,"Select the ",(0,l.kt)("strong",{parentName:"p"},"Node Selector")," option, and then click ",(0,l.kt)("strong",{parentName:"p"},"Add Selector")," to enter a key value pair for a label. This label should be applied to one or more of your nodes. Add as many selectors as you'd like."),(0,l.kt)("h3",{id:"is-2"},"Is"),(0,l.kt)("p",null,"Choose an event to trigger the alert."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Not Ready"),": Sends you an alert when selected nodes are unresponsive."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CPU usage over"),": Sends you an alert when selected nodes raise above an entered percentage of processing allocation."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Mem usage over"),": Sends you an alert when selected nodes raise above an entered percentage of memory allocation.")),(0,l.kt)("h3",{id:"send-a-3"},"Send a"),(0,l.kt)("p",null,"Select the urgency level of the alert."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Critical"),": Most urgent"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Warning"),": Normal urgency"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Info"),": Least urgent")),(0,l.kt)("p",null,"Select the urgency level of the alert based on its impact on operations. For example, an alert triggered when a node's CPU raises above 60% deems an urgency of ",(0,l.kt)("strong",{parentName:"p"},"Info"),", but a node that is ",(0,l.kt)("strong",{parentName:"p"},"Not Ready")," deems an urgency of ",(0,l.kt)("strong",{parentName:"p"},"Critical"),"."),(0,l.kt)("h3",{id:"advanced-options-3"},"Advanced Options"),(0,l.kt)("p",null,"By default, the below options will apply to all alert rules within the group. You can disable these advanced options when configuring a specific rule."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Group Wait Time"),": How long to wait to buffer alerts of the same group before sending initially, default to 30 seconds."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Group Interval Time"),": How long to wait before sending an alert that has been added to a group which contains already fired alerts, default to 30 seconds."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Repeat Wait Time"),": How long to wait before re-sending a given alert that has already been sent, default to 1 hour.")),(0,l.kt)("h1",{id:"cis-scan-alerts"},"CIS Scan Alerts"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v2.4.0")),(0,l.kt)("p",null,"This alert type is triggered based on the results of a CIS scan."),(0,l.kt)("p",null,"Each of the below sections corresponds to a part of the alert rule configuration section in the Rancher UI."),(0,l.kt)("h3",{id:"when-a-4"},"When a"),(0,l.kt)("p",null,"Select ",(0,l.kt)("strong",{parentName:"p"},"CIS Scan.")),(0,l.kt)("h3",{id:"is-3"},"Is"),(0,l.kt)("p",null,"Choose an event to trigger the alert:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Completed Scan"),(0,l.kt)("li",{parentName:"ul"},"Has Failure")),(0,l.kt)("h3",{id:"send-a-4"},"Send a"),(0,l.kt)("p",null,"Select the urgency level of the alert."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Critical"),": Most urgent"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Warning"),": Normal urgency"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Info"),": Least urgent")),(0,l.kt)("p",null,"Select the urgency level of the alert based on its impact on operations. For example, an alert triggered when a node's CPU raises above 60% deems an urgency of ",(0,l.kt)("strong",{parentName:"p"},"Info"),", but a node that is ",(0,l.kt)("strong",{parentName:"p"},"Not Ready")," deems an urgency of ",(0,l.kt)("strong",{parentName:"p"},"Critical"),"."),(0,l.kt)("h3",{id:"advanced-options-4"},"Advanced Options"),(0,l.kt)("p",null,"By default, the below options will apply to all alert rules within the group. You can disable these advanced options when configuring a specific rule."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Group Wait Time"),": How long to wait to buffer alerts of the same group before sending initially, default to 30 seconds."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Group Interval Time"),": How long to wait before sending an alert that has been added to a group which contains already fired alerts, default to 30 seconds."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Repeat Wait Time"),": How long to wait before re-sending a given alert that has already been sent, default to 1 hour.")),(0,l.kt)("h1",{id:"metric-expression-alerts"},"Metric Expression Alerts"),(0,l.kt)("p",null,"This alert type monitors for the overload from Prometheus expression querying, it would be available after you enable monitoring."),(0,l.kt)("p",null,"Each of the below sections corresponds to a part of the alert rule configuration section in the Rancher UI."),(0,l.kt)("h3",{id:"when-a-5"},"When a"),(0,l.kt)("p",null,"Input or select an ",(0,l.kt)("strong",{parentName:"p"},"Expression"),", the dropdown shows the original metrics from Prometheus, including:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/prometheus/node_exporter"},(0,l.kt)("strong",{parentName:"a"},"Node"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/google/cadvisor"},(0,l.kt)("strong",{parentName:"a"},"Container"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/op-guide/monitoring/"},(0,l.kt)("strong",{parentName:"a"},"ETCD"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/metrics"},(0,l.kt)("strong",{parentName:"a"},"Kubernetes Components"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kube-state-metrics"},(0,l.kt)("strong",{parentName:"a"},"Kubernetes Resources"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.fluentd.org/v1.0/articles/monitoring-prometheus"},(0,l.kt)("strong",{parentName:"a"},"Fluentd"))," (supported by ",(0,l.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/cluster-logging"},"Logging"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://docs.grafana.org/administration/metrics/"},(0,l.kt)("strong",{parentName:"a"},"Cluster Level Grafana"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cluster Level Prometheus"))),(0,l.kt)("h3",{id:"is-4"},"Is"),(0,l.kt)("p",null,"Choose a comparison:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Equal"),": Trigger alert when expression value equal to the threshold."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Not Equal"),": Trigger alert when expression value not equal to the threshold."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Greater Than"),": Trigger alert when expression value greater than to threshold."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Less Than"),": Trigger alert when expression value equal or less than the threshold."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Greater or Equal"),": Trigger alert when expression value greater to equal to the threshold."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Less or Equal"),": Trigger alert when expression value less or equal to the threshold.")),(0,l.kt)("p",null,"If applicable, choose a comparison value or a threshold for the alert to be triggered."),(0,l.kt)("h3",{id:"for"},"For"),(0,l.kt)("p",null,"Select a duration for a trigger alert when the expression value crosses the threshold longer than the configured duration."),(0,l.kt)("h3",{id:"send-a-5"},"Send a"),(0,l.kt)("p",null,"Select the urgency level of the alert."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Critical"),": Most urgent"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Warning"),": Normal urgency"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Info"),": Least urgent")),(0,l.kt)("p",null,"Select the urgency level of the alert based on its impact on operations. For example, an alert triggered when a node's load expression ",(0,l.kt)("inlineCode",{parentName:"p"},'sum(node_load5)  / count(node_cpu_seconds_total{mode="system"})')," raises above 0.6 deems an urgency of ",(0,l.kt)("strong",{parentName:"p"},"Info"),", but 1 deems an urgency of ",(0,l.kt)("strong",{parentName:"p"},"Critical"),"."),(0,l.kt)("h3",{id:"advanced-options-5"},"Advanced Options"),(0,l.kt)("p",null,"By default, the below options will apply to all alert rules within the group. You can disable these advanced options when configuring a specific rule."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Group Wait Time"),": How long to wait to buffer alerts of the same group before sending initially, default to 30 seconds."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Group Interval Time"),": How long to wait before sending an alert that has been added to a group which contains already fired alerts, default to 30 seconds."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Repeat Wait Time"),": How long to wait before re-sending a given alert that has already been sent, default to 1 hour.")))}h.isMDXComponent=!0}}]);