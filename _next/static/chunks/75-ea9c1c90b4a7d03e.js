(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75],{7558:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var a=n(9499),r=n(29),i=n(6687),s=n(6690),u=n(7794),o=n.n(u),l=n(4119),d=n(714),p=n(5005),c=n(1358),y=n(5147),m=n(6968),f=n(7294),h=n(4893),x=n(2125),b=n(9485),v=n(1744),w=n(241),g=n(5261),j=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),T=n(5104),k=n(5893);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=(0,x.ZP)("div").withConfig({displayName:"batchQuery__ButtonBox",componentId:"sc-ir3ze6-0"})(["display:flex;align-items:center;flex-wrap:wrap;.example{margin:0 20px;}.rht{margin-right:20px;button{white-space:nowrap!important;}}.querybtn,.query{margin-right:20px;}@media(max-width:1000px){.query,.example,.switchBox{margin-top:20px;}.example{margin-left:0;}}"]),C=x.ZP.div.withConfig({displayName:"batchQuery__TableBox",componentId:"sc-ir3ze6-1"})(["margin-top:40px;.tableStyle{border-top:1px solid #eee;color:#666666;th{height:60px;line-height:60px;}.first{display:flex;justify-content:center;align-items:stretch;.form-check-inline{margin-right:0;display:flex;margin-top:13px;}}td{line-height:50px;word-break:break-all;&:nth-child(4){width:30%;}}tr:nth-child(2n+1) td{background:rgba(255,255,255,0.3)!important;color:#666666!important;}tr:hover td{background:rgba(0,0,0,0.01)!important;}}"]),N=(0,x.ZP)(l.Z).withConfig({displayName:"batchQuery__FloatBox",componentId:"sc-ir3ze6-2"})(["width:100%;margin-top:20px;"]),M=(0,x.ZP)(d.Z).withConfig({displayName:"batchQuery__AlertBox",componentId:"sc-ir3ze6-3"})(["margin-top:20px;"]);function P(){var e,t=(0,h.ds)().CSVReader,n=(0,f.useState)([]),a=n[0],u=n[1],l=(0,f.useState)(),d=l[0],x=l[1],O=(0,f.useState)([]),P=O[0],_=O[1],A=(0,f.useState)([]),E=A[0],B=A[1],I=(0,f.useState)([]),q=I[0],Q=I[1],R=(0,f.useState)(!1),V=R[0],z=R[1],D=(0,f.useState)(!1),F=D[0],J=D[1],U=(0,f.useState)(!1),H=U[0],W=U[1],Y=(0,f.useState)(""),G=Y[0],K=Y[1],L=(0,f.useState)(""),X=L[0],$=L[1];(0,f.useEffect)((function(){var e;if(null!==(e=window)&&void 0!==e&&e.ethereum){var t=new w.Q(window.ethereum);x(t)}}),[]),(0,f.useEffect)((function(){var e=a.filter((function(e){return!0===e.checked}));B(e)}),[V,a]),(0,f.useEffect)((function(){if(E.length){var e=JSON.parse(JSON.stringify(E));e.map((function(e){delete e.checked})),Q(e)}}),[E]);var ee=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r,s,l,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new T.CH(G,j),r=[],t.map((function(e,t){r.push(n.balanceOf(e.address))})),s=new T.zt(d),e.next=6,s.init();case 6:return e.next=8,s.all(r);case 8:l=e.sent,t.map((function(e,t){var n=l[t].toString();e.amount=v.dF(n)})),p=(0,i.Z)(Array(a.length)).fill(!1),_(p),u(t);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=(0,r.Z)(o().mark((function e(t){var n,a,r,l,p,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!1,a=!1,e.prev=2,l=o().mark((function e(){var n,a,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.value,a=(0,i.Z)(E),e.next=4,null===d||void 0===d?void 0:d.getBalance(n.address);case 4:r=e.sent,t.filter((function(e){return e.address===n.address}))[0].amount=v.dF(r.toString()),u(a);case 8:case"end":return e.stop()}}),e)})),p=(0,s.Z)(t);case 5:return e.next=7,p.next();case 7:if(!(n=!(c=e.sent).done)){e.next=12;break}return e.delegateYield(l(),"t0",9);case 9:n=!1,e.next=5;break;case 12:e.next=18;break;case 14:e.prev=14,e.t1=e.catch(2),a=!0,r=e.t1;case 18:if(e.prev=18,e.prev=19,!n||null==p.return){e.next=23;break}return e.next=23,p.return();case 23:if(e.prev=23,!a){e.next=26;break}throw r;case 26:return e.finish(23);case 27:return e.finish(18);case 28:case"end":return e.stop()}}),e,null,[[2,14,18,28],[19,,23,27]])})));return function(t){return e.apply(this,arguments)}}(),ne=function(e){var t=e.target,n=Number(t.value);a[n].checked=!0,z(!V)};return(0,k.jsxs)("div",{children:[(0,k.jsxs)(S,{children:[(0,k.jsx)(t,{onUploadAccepted:function(e){var t=function(e){var t={};return e.reduce((function(e,n){return!t[n.address]&&(t[n.address]=e.push(n)),e}),[])}(e.data.map((function(e){return b.UJ(e[0])?{address:e[0],amount:null,checked:!1}:null})).filter((function(e){return null!=e}))),n=(0,i.Z)(Array(t.length)).fill(!1);_(n),u(t)},children:function(e){var t=e.getRootProps;return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)("div",Z(Z({},t()),{},{className:"rht",children:(0,k.jsx)(p.Z,{variant:"flat",children:"Import CSV"})}))})}}),(0,k.jsx)(p.Z,{variant:"dark",onClick:function(){return function(){var e,t,n;return null!==(e=window)&&void 0!==e&&e.ethereum||($("Please install metamask"),W(!0)),a.length||($("Please Import CSV "),W(!0),setTimeout((function(){W(!1)}),2e3)),F&&""===G?(W(!0),$("ERC20 address is required"),void setTimeout((function(){W(!1)}),2e3)):F&&!b.UJ(G)?(W(!0),$("ERC20 address is not correct"),void setTimeout((function(){W(!1)}),2e3)):(E.length?(t=(0,i.Z)(E),n=(0,i.Z)(Array(a.length)).fill(!0),a.map((function(e,t){n[t]=e.checked}))):(t=(0,i.Z)(a),n=(0,i.Z)(Array(a.length)).fill(!0)),_(n),void(F?ee(t).then((function(e){console.log("=======",e)})):te(t).then((function(e){console.log("=======",e)}))))}()},className:"querybtn",children:" Query"}),(0,k.jsx)("div",{className:"query",children:!!q.length&&(0,k.jsxs)(g.Z,{datas:q,filename:"myWallets_".concat(F?"ERC20":"native","_").concat(null===(e=q[0])||void 0===e?void 0:e.address),extension:".csv",children:[" ",(0,k.jsx)(p.Z,{variant:"dark",children:"  Download"})]})}),(0,k.jsx)("a",{className:"example",href:"/batch-query/example.csv",children:"example(import)"}),(0,k.jsx)("div",{className:"switchBox",children:(0,k.jsx)(c.Z.Check,{type:"switch",id:"custom-switch",label:"Native / ERC20",checked:F,onChange:function(){return J(!F),B([]),Q([]),_([]),u([]),void W(!1)}})})]}),F&&(0,k.jsx)("div",{children:(0,k.jsx)(N,{controlId:"floatingInput",label:"Token Address",className:"mb-3",children:(0,k.jsx)(c.Z.Control,{type:"text",placeholder:"Token Address",onChange:function(e){var t=e.target;K(t.value)}})})}),H&&(0,k.jsx)(M,{variant:"danger",children:X}),(0,k.jsx)(C,{children:(0,k.jsxs)(y.Z,{striped:!0,borderless:!0,hover:!0,className:"tableStyle",children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{children:"#"}),(0,k.jsx)("th",{children:"index"}),(0,k.jsx)("th",{children:"Address"}),(0,k.jsx)("th",{children:"Amount"})]})}),(0,k.jsx)("tbody",{children:a.map((function(e,t){return(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:(0,k.jsx)("div",{className:"first",children:(0,k.jsx)(c.Z.Check,{inline:!0,type:"checkbox",id:"default-checkbox_".concat(t),value:t,name:"selectValue",onChange:ne})})}),(0,k.jsx)("td",{children:t+1}),(0,k.jsx)("td",{children:e.address}),(0,k.jsxs)("td",{children:[null==e.amount&&P[t]&&(0,k.jsx)(m.Z,{animation:"border",variant:"dark"}),e.amount]})]},t)}))})]})})]})}},6601:function(){}}]);