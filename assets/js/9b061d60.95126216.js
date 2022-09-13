"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83352],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),g=i,h=m["".concat(u,".").concat(g)]||m[g]||d[g]||a;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8191:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={title:"Debugging High Memory Usage",weight:8},u=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage",id:"version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage",title:"Debugging High Memory Usage",description:"Every time series in Prometheus is uniquely identified by its metric name and optional key-value pairs called labels.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage.md",tags:[],version:"2.5",lastUpdatedAt:1663095305,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Debugging High Memory Usage",weight:8},sidebar:"tutorialSidebar",previous:{title:"Persistent Grafana Dashboards",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard"},next:{title:"Migrating to Rancher v2.5 Monitoring",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring"}},l={},d=[{value:"Reducing Memory Bursts",id:"reducing-memory-bursts",level:3}],m={toc:d};function g(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Every time series in Prometheus is uniquely identified by its ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/naming/#metric-names"},"metric name")," and optional key-value pairs called ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/naming/#labels"},"labels.")),(0,a.kt)("p",null,"The labels allow the ability to filter and aggregate the time series data, but they also multiply the amount of data that Prometheus collects."),(0,a.kt)("p",null,"Each time series has a defined set of labels, and Prometheus generates a new time series for all unique combinations of labels. If a metric has two labels attached, two time series are generated for that metric. Changing any label value, including adding or removing a label, will create a new time series."),(0,a.kt)("p",null,"Prometheus is optimized to store data that is index-based on series. It is designed for a relatively consistent number of time series and a relatively large number of samples that need to be collected from the exporters over time."),(0,a.kt)("p",null,"Inversely, Prometheus is not optimized to accommodate a rapidly changing number of time series. For that reason, large bursts of memory usage can occur when monitoring is installed on clusters where many resources are being created and destroyed, especially on multi-tenant clusters."),(0,a.kt)("h3",{id:"reducing-memory-bursts"},"Reducing Memory Bursts"),(0,a.kt)("p",null,"To reduce memory consumption, Prometheus can be configured to store fewer time series, by scraping fewer metrics or by attaching fewer labels to the time series. To see which series use the most memory, you can check the TSDB (time series database) status page in the Prometheus UI."),(0,a.kt)("p",null,"Distributed Prometheus solutions such as ",(0,a.kt)("a",{parentName:"p",href:"https://thanos.io/"},"Thanos")," and ",(0,a.kt)("a",{parentName:"p",href:"https://cortexmetrics.io/"},"Cortex")," use an alternate architecture in which multiple small Prometheus instances are deployed. In the case of Thanos, the metrics from each Prometheus are aggregated into the common Thanos deployment, and then those metrics are exported to a persistent store, such as S3. This more robust architecture avoids burdening any single Prometheus instance with too many time series, while also preserving the ability to query metrics on a global level."))}g.isMDXComponent=!0}}]);