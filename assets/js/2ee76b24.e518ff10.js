"use strict";(self.webpackChunki_3_documentation=self.webpackChunki_3_documentation||[]).push([[327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:f,groupId:h,className:y}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[T,O]=(0,r.useState)(k),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=N[h];null!=e&&e!==T&&v.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==T&&(E(t),O(a),null!=h&&w(h,String(a)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},y)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:P,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={},s="Location Alerts",u={unversionedId:"Geolocation/location-alerts",id:"Geolocation/location-alerts",title:"Location Alerts",description:"i3 Location Alerts allows us to get identify i3 Alerts that may affect a specific point of interest. This endpoint allows us to provide contextual location risk information to end users. By using the optional start_date querystring parameter, we can plan journeys in to the future with the current available information.",source:"@site/docs/Geolocation/location-alerts.mdx",sourceDirName:"Geolocation",slug:"/Geolocation/location-alerts",permalink:"/Geolocation/location-alerts",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Route Alerts",permalink:"/Geolocation/route-alerts"},next:{title:"Get Alert Details",permalink:"/Alerts/get-details"}},c={},p=[{value:"Request",id:"request",level:3},{value:"Accepted Parameters",id:"accepted-parameters",level:4},{value:"Response",id:"response",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"location-alerts"},"Location Alerts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http",metastring:'title="Endpoint"',title:'"Endpoint"'},"POST https://i3.safeandthecity.com/api/v1/alert/location?start_date={journey_time}\n")),(0,r.kt)("p",null,"i3 Location Alerts allows us to get identify i3 Alerts that may affect a specific point of interest. This endpoint allows us to provide contextual location risk information to end users. By using the optional ",(0,r.kt)("inlineCode",{parentName:"p"},"start_date")," querystring parameter, we can plan journeys in to the future with the current available information."),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import requests\nfrom geojson import Feature, Point, FeatureCollection\n\n# Send a FeatureCollection with a Point to identify alerts relating to this location\n\nlocation = Point((-0.127642, 51.530194))\nfeature = Feature(geometry=location)\ndata = FeatureCollection([feature])\n\nr = requests.post('https://i3.safeandthecity.com/api/v1/alert/location', headers={'Content-Type': 'application/json', 'Authorization': 'Bearer {YOUR_BEARER_TOKEN}'}, json=data)\n"))),(0,r.kt)(l.Z,{value:"Javascript",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import axios from \'axios\';\n\nconst data = { // Send a FeatureCollection with a Point to identify alerts relating to this location\n    "type": "FeatureCollection",\n    "features": [\n        {\n            "type": "Feature",\n            "geometry": {\n                "type": "Point",\n                "coordinates": [\n                    -0.127642, 51.530194\n                ]\n            }\n        ]\n    }\n}\n\nconst instance = axios.create({\n    baseURL: \'https://i3.safeandthecity.com/api\',\n    timeout: 1000,\n    headers: {\n        \'Content-Type\': \'application/json\'\n        \'Authorization\': \'Bearer {YOUR_BEARER_TOKEN}\'\n    }\n});\n\nlet response = instance.get(\'/v1/alert/point\');\n')))),(0,r.kt)("h4",{id:"accepted-parameters"},"Accepted Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"header")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"Bearer")," token to authenticate with the server"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"body")),(0,r.kt)("td",{parentName:"tr",align:null},"The body parameter expects a valid ",(0,r.kt)("inlineCode",{parentName:"td"},"geojson FeatureCollection")," with a ",(0,r.kt)("inlineCode",{parentName:"td"},"Point")," (",(0,r.kt)("a",{parentName:"td",href:"https://www.rfc-editor.org/rfc/rfc7946#section-3.1.2"},"See GeoJSON standard"),"). This ",(0,r.kt)("inlineCode",{parentName:"td"},"Point")," should represent a location of interest for which you wish to retrieve alerts"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"querystring")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"start_date")," querystring allows us to define a data and time in the future to facilitate journey planning. If left empty this will default to the current data and time"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")))),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Location Alerts Response"',title:'"Location',Alerts:!0,'Response"':!0},'{\n    "type": "FeatureCollection",\n    "features": [\n        {\n            "type": "Feature",\n            "geometry": {\n                "type": "Point",\n                "coordinates": [\n                    -0.127642, 51.530194\n                ]\n            },\n            "properties": {\n                "alerts": [\n                    {\n                        "id": "00cfdf37-8777-43de-b371-83afb1146cea",\n                        "location": [-0.125642, 51.500194],\n                        "start_date": "2022-04-20T12:00:00Z"\n                    }\n                ]\n            }\n        }\n    ]\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Should no alerts affect the requested location, the same ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureCollection")," you requested will be returned with no properties.")))}m.isMDXComponent=!0}}]);