(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(9921)}])},9921:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return _}});var n=i(5893),l=i(7294),r=i(4110),o=i.n(r);let c=e=>(0,n.jsx)("div",{className:o().cell,onClick:e.onClick,children:0!==e.color&&(0,n.jsx)("div",{className:o().stone,style:{background:3===e.color?"#ffdc00":1===e.color?"#000":"#fff"}})});var s=i(2729),a=i.n(s);let f=()=>{let[e,t]=(0,l.useState)(1),[i,r]=(0,l.useState)([[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,2,1,0,0,0],[0,0,0,1,2,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]),[o,s]=(0,l.useState)({black:-1,white:-1});(0,l.useEffect)(()=>{if(-1===o.black){let e=!1,t=0,n=0;for(let l of i){for(let i of l){if(0===i||3===i){e=!0;break}1===i&&t++,2===i&&n++}if(e)break}e||s({black:t,white:n})}},[i,o.black]);let[f,_]=(0,l.useState)(!1);(0,l.useEffect)(()=>{if(-1===o.black){for(let e=0;e<8;e++)for(let t=0;t<8;t++)if(u(t,e,!0))return;if(alert("パス"),f){alert("これ以上置く場所がないのでゲームを終了しました");let e=0,t=0;for(let n of i)for(let i of n)1===i&&t++,2===i&&e++;s({black:t,white:e});return}_(!0),t(3-e)}},[i]);let d=(e,t)=>{u(e,t,!1)};(0,l.useEffect)(()=>{let e=JSON.parse(JSON.stringify(i)),t=e.map((e,t)=>e.map((e,i)=>u(i,t,!0)?3:3===e?0:e));r(t)},[i]);let u=(n,l,o)=>{let c=!1,s=JSON.parse(JSON.stringify(i)),a=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]],f=!1;for(let r of a)if((0===i[l][n]||3===i[l][n])&&void 0!==i[l+r[1]]&&void 0!==i[l+r[1]][n+r[0]]&&(0!==i[l+r[1]][n+r[0]]||3!==i[l+r[1]][n+r[0]])&&i[l+r[1]][n+r[0]]!==e){for(let t of a){let r=[];for(let a=1;a<8&&void 0!==i[l+t[1]*a]&&void 0!==i[l+t[1]*a][n+t[0]*a]&&0!==i[l+t[1]*a][n+t[0]*a]&&3!==i[l+t[1]*a][n+t[0]*a]&&(1!==a||i[l+t[1]*a][n+t[0]*a]!==e);a++){if(i[l+t[1]*a][n+t[0]*a]===e&&1!==a){if(s[l][n]=e,f=!0,c=!0,o)return c;for(let t of r)s[t[0]][t[1]]=e;break}r.push([l+t[1]*a,n+t[0]*a])}}f&&t(3-e),f&&_(!1)}return o||r(s),c};return(0,n.jsxs)("div",{className:a().container,children:[-1!==o.black&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h2",{className:a().win,children:["結果:",o.black===o.white?"引き分け":o.black>o.white?"黒の勝ち":"白の勝ち"]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["黒: ",o.black]}),(0,n.jsxs)("li",{children:["白: ",o.white]})]})]}),-1===o.black&&(0,n.jsxs)("p",{children:[1===e?"黒":"白","のターン"]}),(0,n.jsx)("div",{className:a().board,children:i.map((e,t)=>e.map((e,i)=>(0,n.jsx)(c,{color:e,onClick:()=>d(i,t)},"".concat(i,"-").concat(t))))})]})};var _=f},4110:function(e){e.exports={cell:"cell_cell__VTQkI",stone:"cell_stone__pDME7"}},2729:function(e){e.exports={container:"index_container__gnN1f",main:"index_main__kAcUb",footer:"index_footer__qq_p6",title:"index_title__gEapU",description:"index_description__087sm",code:"index_code__VeCgy",grid:"index_grid__FmmIe",card:"index_card__kAxi6",logo:"index_logo__FcDOZ",board:"index_board__2d6xe",win:"index_win__FgYxT"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);