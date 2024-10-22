/*! For license information please see main.352bc229.js.LICENSE.txt */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  cursor: pointer;
  background-color: transparent;
  border-bottom: 1px solid ${e=>e.theme.colors.primary};
  border-top: 0px solid ${e=>e.theme.colors.primary};
  border-left-width: 0px;
  border-right-width: 0px;
  flex: 1;
  width: 90%;
  color: ${e=>e.theme.colors.light};
  font-size: 12px;

  &:hover {
    background-color: ${e=>e.theme.colors.primaryLight};
  }
`,cw=e=>{const{floatingCamera:n,scrollElement:r,setFloatingCamera:i}=wy((e=>e)),a=(0,t.useCallback)(((t=0)=>{null==r||r.scroll({top:t*r.scrollHeight,behavior:"smooth"}),null==e||e.onRequestClose()}),[r,e]);return t.createElement(ow(),Jg({ariaHideApp:!1,closeTimeoutMS:500,style:{overlay:{backgroundColor:"rgba(0,0,0,0.9)",zIndex:1},content:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderWidth:0,backgroundColor:"rgba(0,0,0,0.0)",height:"80%"}}},e),lw.map((e=>t.createElement(uw,{onClick:()=>a(e.position)},e.name))))},{navTitle:hw}=lb,dw=Le.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: ${e=>e.windowWidth-30}px;
  margin-left: 15px;
  height: 50px;
  z-index: 1;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${e=>e.theme.colors.primary}; */
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${e=>e.theme.colors.light};
  border-image-source: ${e=>`linear-gradient(to left, transparent, ${e.theme.colors.primary}, transparent)`};
`,fw=Le.button`
  display: flex;
  align-items: center;
  height: 100%;
  width: 60px;
  border: 1px none;
  justify-content: center;
  border-right-width: 0px;
  background-color: transparent;

  &:hover {
    background-color: ${e=>e.theme.colors.primaryLight};
  }
`,pw=Le.div`
  color: ${e=>e.theme.colors.primary};
`,mw=()=>{const[e,n]=(0,t.useState)(!1),{innerWidth:r}=function(){var e=(0,t.useState)((function(){return"undefined"===typeof window?iw:aw()})),n=e[0],r=e[1];function i(){r(aw())}return rw((function(){return"undefined"===typeof window?function(){}:(window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)})}),[]),n}(),[i,a]=(0,t.useState)(r),[s,o]=(0,t.useState)(!0),l=(0,t.useRef)();let u=0;return(0,t.useEffect)((()=>{l.current||(l.current=new Audio("audio/music.mp3"),l.current.loop=!0,document.addEventListener("click",(()=>{u||(u++,l.current.play(),o(!l.current.paused))})))}),[]),(0,t.useEffect)((()=>{a(r)}),[r]),t.createElement(jb.CSSTransitionGroup,{transitionName:"example",transitionAppearTimeout:500,transitionAppear:!0,transitionEnter:!0,transitionLeave:!0},t.createElement(cw,{isOpen:e,onRequestClose:()=>n(!1)}),t.createElement(dw,{windowWidth:i},t.createElement(pw,{onClick:()=>{l.current.paused?l.current.play():l.current.pause(),o(!l.current.paused)}},s?t.createElement(tw,{color:D_.colors.primary,size:30}):t.createElement(ew,{color:D_.colors.primary,size:30})),t.createElement("div",null,hw),t.createElement(fw,{onClick:()=>n(!0)},t.createElement(nw,{color:D_.colors.primary,size:30}))))},{relevantStops:gw}=lb,qw=Le.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: ${e=>e.windowWidth-30}px;
  height: 40px;
  padding: 0px 40px;
  z-index: 19999;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${e=>e.theme.colors.primary}; */
  width: 100%;
  bottom: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${e=>e.theme.colors.light};
  font-size: 25px;
  font-weight: bold;
  border-image-source: ${e=>`linear-gradient(to left, transparent, ${e.theme.colors.primary}, transparent)`};
`,vw=Le.button`
  padding: 5px 10px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: transparent;
  border-bottom: 1px solid ${e=>e.theme.colors.primary};
  border-top: 0px solid ${e=>e.theme.colors.primary};
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${e=>e.theme.colors.light};
  font-size: 12px;

  &:hover {
    background-color: ${e=>e.theme.colors.primaryLight};
  }
`,xw=Le.div`
  display: flex;
  justify-content: space-between;
  background-color: ${e=>e.theme.colors.contrast};
  opacity: 0.4;
  align-items: center;
  position: fixed;
  width: ${e=>e.windowWidth-30}px;
  height: 50px;
  z-index: 99999;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${e=>e.theme.colors.primary}; */
  width: 100%;
  bottom: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${e=>e.theme.colors.dark};
  font-size: 29px;
  font-weight: bold;
  border-image-source: ${e=>`linear-gradient(to left, transparent, ${e.theme.colors.primary}, transparent)`};

  &:hover {
    opacity: 1;
  }
`,yw=Le.div`
  position: absolute;
  height: 100%;
  background-color: ${e=>e.theme.colors.primary};
  opacity: 0.2;
  z-index: -1;
  width: ${e=>100*e.progress}%;
`;const _w=function(){const{floatingCamera:e,setFloatingCamera:n,scrollElement:r}=wy(),[i,a]=(0,t.useState)(0);(0,t.useEffect)((()=>{r&&(r.onscroll=()=>{const{scrollTop:e,scrollHeight:t}=r;a(1.125*e/t)})}),[r]);const s=(0,t.useCallback)(((e=0)=>null==r?void 0:r.scroll({top:e*r.scrollHeight,behavior:"smooth"})),[r]);return e?t.createElement(xw,{onClick:()=>n(!1)},t.createElement("div",null),t.createElement("div",null,"Go Back."),t.createElement("div",null)):t.createElement(qw,null,t.createElement("div",null),t.createElement(vw,{onClick:()=>{let e=Math.floor(i*gw.length-.3);i*gw.length===8&&(e=6),e>=0&&s(gw[e].position)},className:"controls"},"Prev page"),t.createElement(vw,{onClick:()=>{let e=Math.ceil(i*gw.length+.69);e<=gw.length&&s(gw[e].position)},className:"controls"},"Next page"),t.createElement("div",null),t.createElement(yw,{progress:i}))};const bw=function(){return t.createElement(Te,{theme:D_},t.createElement(mw,null),t.createElement(_w,null),t.createElement(Vb,null))},ww=e=>{e&&e instanceof Function&&n.e(27).then(n.bind(n,4027)).then((({getCLS:t,getFID:n,getFCP:r,getLCP:i,getTTFB:a})=>{t(e),n(e),r(e),i(e),a(e)}))};r.createRoot(document.getElementById("root")).render(t.createElement(t.StrictMode,null,t.createElement(bw,null))),ww()})()})();