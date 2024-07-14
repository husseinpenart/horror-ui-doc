"use strict";(self.webpackChunkhorror_ui=self.webpackChunkhorror_ui||[]).push([[7314],{5048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(4848),l=n(8453);const i={sidebar_position:5},s=void 0,d={id:"tutorail-layouts/FlashScreen",title:"FlashScreen",description:"flashScreen",source:"@site/docs/tutorail-layouts/FlashScreen.md",sourceDirName:"tutorail-layouts",slug:"/tutorail-layouts/FlashScreen",permalink:"/horror-ui-doc/docs/tutorail-layouts/FlashScreen",draft:!1,unlisted:!1,editUrl:"https://github.com/husseinpenart/horror-ui/docs/tutorail-layouts/FlashScreen.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"text",permalink:"/horror-ui-doc/docs/tutorail-layouts/text"},next:{title:"Box \ud83c\udd95",permalink:"/horror-ui-doc/docs/tutorail-layouts/Box"}},o={},c=[{value:"flashScreen",id:"flashscreen",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"flashscreen",children:"flashScreen"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:"or tsx or js",children:'const product = [\r\n  {\r\n    name: "T-shirt",\r\n    price: 100,\r\n    image:\r\n      "https://a.cdn-hotels.com/gdcs/production157/d1079/b215ff33-0c46-4f08-8d34-cd992d722e9d.jpg?impolicy=fcrop&w=800&h=533&q=medium"\r\n  },\r\n  {\r\n    name: "jeans",\r\n    price: 50,\r\n    image:\r\n      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Souk_in_Tunisia_1.jpg/640px-Souk_in_Tunisia_1.jpg"\r\n  },\r\n  {\r\n    name: "shoes",\r\n    price: 200,\r\n    image:\r\n      "https://a.cdn-hotels.com/gdcs/production157/d1079/b215ff33-0c46-4f08-8d34-cd992d722e9d.jpg?impolicy=fcrop&w=800&h=533&q=medium"\r\n  },\r\n  {\r\n    name: "Boot",\r\n    price: 300,\r\n    image:\r\n      "https://www.cuddlynest.com/blog/wp-content/uploads/2022/08/shopping-in-san-francisco-scaled.jpg"\r\n  }\r\n];\r\n<FlashScreen\r\n  data={product}\r\n  horizontal\r\n  disableHorizontal={false}\r\n  renderItem={(item) => (\r\n    <CardView el={4} sc="black" ws={100} ht="auto" style={{ margin: 10 }}>\r\n      <Images uri={item.image} imgS={80} imgH={80} style={{ margin: 10 }} />\r\n      <TextView txp="center" fs={14}>\r\n        {item.name}\r\n      </TextView>\r\n      <TextView txp="center" fs={12}>\r\n        {item.price}\r\n      </TextView>\r\n    </CardView>\r\n  )}\r\n/>;\n'})}),"\n",(0,r.jsx)(t.h1,{id:"api-references",children:"Api References"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"inverted"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"invert element"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"horizontal"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"make element horizontal"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"disableVertical"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"disabling scroll navigator down of element vertically"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"disableHorizontal"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"disabling scroll navigator down of element horizontally"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"data"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"any"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"data"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"renderItem"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"render item in any form you want"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"numColumns"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"number of gallery columns"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"invertStickyHeaders"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"If sticky headers should stick at the bottom instead of the top of the ScrollView. This is usually used with inverted ScrollViews."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"style"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"any"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"your custom styles"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var r=n(6540);const l={},i=r.createContext(l);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);