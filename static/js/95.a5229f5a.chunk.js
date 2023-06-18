"use strict";(self.webpackChunkmessenger=self.webpackChunkmessenger||[]).push([[95],{3095:function(e,a,t){t.r(a),t.d(a,{default:function(){return se}});var o=t(9439),n=t(2791),c=t(7689),r=t(2759),l=t(3433),i=t(184),s=function(){var e=(0,c.UO)().chatId,a=(0,n.useState)(""),t=(0,o.Z)(a,2),r=t[0],s=t[1],d=(0,n.useState)([]),u=(0,o.Z)(d,2),p=u[0],v=u[1],m=(0,n.useState)(!1),f=(0,o.Z)(m,2),h=f[0],b=f[1];(0,n.useEffect)((function(){v([])}),[e]);return(0,i.jsxs)("div",{className:"text-container",children:[h&&(0,i.jsx)("div",{className:"text-error",children:"Please, enter text !"}),(0,i.jsx)("div",{className:"chat",children:p.map((function(e,a){return(0,i.jsx)("div",{className:"message-wrap",children:(0,i.jsx)("p",{children:e.text})},a)}))}),(0,i.jsxs)("form",{className:"chat-input",onSubmit:function(e){if(e.preventDefault(),!r)return b(!0),void setTimeout((function(){b(!1)}),2e3);var a={text:r};v((function(e){return[].concat((0,l.Z)(e),[a])})),s("")},children:[(0,i.jsx)("input",{type:"text",placeholder:"Enter a message",value:r,onChange:function(e){s(e.currentTarget.value)}}),(0,i.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})},d=t(9434),u=t(7462),p=t(3366),v=t(4942);var m=n.createContext(null);function f(){return n.useContext(m)}var h=t(1413),b="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var Z=function(e){var a=e.children,t=e.theme,o=f(),c=n.useMemo((function(){var e=null===o?t:function(e,a){return"function"===typeof a?a(e):(0,h.Z)((0,h.Z)({},e),a)}(o,t);return null!=e&&(e[b]=null!==o),e}),[t,o]);return(0,i.jsx)(m.Provider,{value:c,children:a})},g=t(2564),x=t(9120),y={};function C(e,a,t){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n.useMemo((function(){var n=e&&a[e]||a;if("function"===typeof t){var c=t(n),r=e?(0,u.Z)({},a,(0,v.Z)({},e,c)):c;return o?function(){return r}:r}return e?(0,u.Z)({},a,(0,v.Z)({},e,t)):(0,u.Z)({},a,t)}),[e,a,t,o])}var k=function(e){var a=e.children,t=e.theme,o=e.themeId,n=(0,x.Z)(y),c=f()||y,r=C(o,n,t),l=C(o,c,t,!0);return(0,i.jsx)(Z,{theme:l,children:(0,i.jsx)(g.T.Provider,{value:r,children:a})})},S=t(988),I=["theme"];function j(e){var a=e.theme,t=(0,p.Z)(e,I),o=a[S.Z];return(0,i.jsx)(k,(0,u.Z)({},t,{themeId:o?S.Z:void 0,theme:o||a}))}var w=t(4852),z=t(3126),N=t(653),O=t(3044),F=t(493),R=t(168),E=t(2554),P=t(7107),T=t(8182),D=t(4419),M=t(2065),V=(0,t(9201).Z)((0,i.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),L=t(2071),q=t(4036),W=t(3701),K=t(551),_=t(7630),H=t(5878),U=t(1217);function B(e){return(0,U.Z)("MuiChip",e)}var A=(0,H.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),G=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],J=(0,_.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState,o=t.color,n=t.iconColor,c=t.clickable,r=t.onDelete,l=t.size,i=t.variant;return[(0,v.Z)({},"& .".concat(A.avatar),a.avatar),(0,v.Z)({},"& .".concat(A.avatar),a["avatar".concat((0,q.Z)(l))]),(0,v.Z)({},"& .".concat(A.avatar),a["avatarColor".concat((0,q.Z)(o))]),(0,v.Z)({},"& .".concat(A.icon),a.icon),(0,v.Z)({},"& .".concat(A.icon),a["icon".concat((0,q.Z)(l))]),(0,v.Z)({},"& .".concat(A.icon),a["iconColor".concat((0,q.Z)(n))]),(0,v.Z)({},"& .".concat(A.deleteIcon),a.deleteIcon),(0,v.Z)({},"& .".concat(A.deleteIcon),a["deleteIcon".concat((0,q.Z)(l))]),(0,v.Z)({},"& .".concat(A.deleteIcon),a["deleteIconColor".concat((0,q.Z)(o))]),(0,v.Z)({},"& .".concat(A.deleteIcon),a["deleteIcon".concat((0,q.Z)(i),"Color").concat((0,q.Z)(o))]),a.root,a["size".concat((0,q.Z)(l))],a["color".concat((0,q.Z)(o))],c&&a.clickable,c&&"default"!==o&&a["clickableColor".concat((0,q.Z)(o),")")],r&&a.deletable,r&&"default"!==o&&a["deletableColor".concat((0,q.Z)(o))],a[i],a["".concat(i).concat((0,q.Z)(o))]]}})((function(e){var a,t=e.theme,o=e.ownerState,n="light"===t.palette.mode?t.palette.grey[700]:t.palette.grey[300];return(0,u.Z)((a={maxWidth:"100%",fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(t.vars||t).palette.text.primary,backgroundColor:(t.vars||t).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:t.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},(0,v.Z)(a,"&.".concat(A.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity,pointerEvents:"none"}),(0,v.Z)(a,"& .".concat(A.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:t.vars?t.vars.palette.Chip.defaultAvatarColor:n,fontSize:t.typography.pxToRem(12)}),(0,v.Z)(a,"& .".concat(A.avatarColorPrimary),{color:(t.vars||t).palette.primary.contrastText,backgroundColor:(t.vars||t).palette.primary.dark}),(0,v.Z)(a,"& .".concat(A.avatarColorSecondary),{color:(t.vars||t).palette.secondary.contrastText,backgroundColor:(t.vars||t).palette.secondary.dark}),(0,v.Z)(a,"& .".concat(A.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:t.typography.pxToRem(10)}),(0,v.Z)(a,"& .".concat(A.icon),(0,u.Z)({marginLeft:5,marginRight:-6},"small"===o.size&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&(0,u.Z)({color:t.vars?t.vars.palette.Chip.defaultIconColor:n},"default"!==o.color&&{color:"inherit"}))),(0,v.Z)(a,"& .".concat(A.deleteIcon),(0,u.Z)({WebkitTapHighlightColor:"transparent",color:t.vars?"rgba(".concat(t.vars.palette.text.primaryChannel," / 0.26)"):(0,M.Fq)(t.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:t.vars?"rgba(".concat(t.vars.palette.text.primaryChannel," / 0.4)"):(0,M.Fq)(t.palette.text.primary,.4)}},"small"===o.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==o.color&&{color:t.vars?"rgba(".concat(t.vars.palette[o.color].contrastTextChannel," / 0.7)"):(0,M.Fq)(t.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(t.vars||t).palette[o.color].contrastText}})),a),"small"===o.size&&{height:24},"default"!==o.color&&{backgroundColor:(t.vars||t).palette[o.color].main,color:(t.vars||t).palette[o.color].contrastText},o.onDelete&&(0,v.Z)({},"&.".concat(A.focusVisible),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.selectedChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,M.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}),o.onDelete&&"default"!==o.color&&(0,v.Z)({},"&.".concat(A.focusVisible),{backgroundColor:(t.vars||t).palette[o.color].dark}))}),(function(e){var a,t=e.theme,o=e.ownerState;return(0,u.Z)({},o.clickable&&(a={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.selectedChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,M.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}},(0,v.Z)(a,"&.".concat(A.focusVisible),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.selectedChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,M.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}),(0,v.Z)(a,"&:active",{boxShadow:(t.vars||t).shadows[1]}),a),o.clickable&&"default"!==o.color&&(0,v.Z)({},"&:hover, &.".concat(A.focusVisible),{backgroundColor:(t.vars||t).palette[o.color].dark}))}),(function(e){var a,t,o=e.theme,n=e.ownerState;return(0,u.Z)({},"outlined"===n.variant&&(a={backgroundColor:"transparent",border:o.vars?"1px solid ".concat(o.vars.palette.Chip.defaultBorder):"1px solid ".concat("light"===o.palette.mode?o.palette.grey[400]:o.palette.grey[700])},(0,v.Z)(a,"&.".concat(A.clickable,":hover"),{backgroundColor:(o.vars||o).palette.action.hover}),(0,v.Z)(a,"&.".concat(A.focusVisible),{backgroundColor:(o.vars||o).palette.action.focus}),(0,v.Z)(a,"& .".concat(A.avatar),{marginLeft:4}),(0,v.Z)(a,"& .".concat(A.avatarSmall),{marginLeft:2}),(0,v.Z)(a,"& .".concat(A.icon),{marginLeft:4}),(0,v.Z)(a,"& .".concat(A.iconSmall),{marginLeft:2}),(0,v.Z)(a,"& .".concat(A.deleteIcon),{marginRight:5}),(0,v.Z)(a,"& .".concat(A.deleteIconSmall),{marginRight:3}),a),"outlined"===n.variant&&"default"!==n.color&&(t={color:(o.vars||o).palette[n.color].main,border:"1px solid ".concat(o.vars?"rgba(".concat(o.vars.palette[n.color].mainChannel," / 0.7)"):(0,M.Fq)(o.palette[n.color].main,.7))},(0,v.Z)(t,"&.".concat(A.clickable,":hover"),{backgroundColor:o.vars?"rgba(".concat(o.vars.palette[n.color].mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,M.Fq)(o.palette[n.color].main,o.palette.action.hoverOpacity)}),(0,v.Z)(t,"&.".concat(A.focusVisible),{backgroundColor:o.vars?"rgba(".concat(o.vars.palette[n.color].mainChannel," / ").concat(o.vars.palette.action.focusOpacity,")"):(0,M.Fq)(o.palette[n.color].main,o.palette.action.focusOpacity)}),(0,v.Z)(t,"& .".concat(A.deleteIcon),{color:o.vars?"rgba(".concat(o.vars.palette[n.color].mainChannel," / 0.7)"):(0,M.Fq)(o.palette[n.color].main,.7),"&:hover, &:active":{color:(o.vars||o).palette[n.color].main}}),t))})),Q=(0,_.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,a){var t=e.ownerState.size;return[a.label,a["label".concat((0,q.Z)(t))]]}})((function(e){var a=e.ownerState;return(0,u.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===a.size&&{paddingLeft:8,paddingRight:8})}));function X(e){return"Backspace"===e.key||"Delete"===e.key}var Y,$,ee,ae=n.forwardRef((function(e,a){var t=(0,K.Z)({props:e,name:"MuiChip"}),o=t.avatar,c=t.className,r=t.clickable,l=t.color,s=void 0===l?"default":l,d=t.component,v=t.deleteIcon,m=t.disabled,f=void 0!==m&&m,h=t.icon,b=t.label,Z=t.onClick,g=t.onDelete,x=t.onKeyDown,y=t.onKeyUp,C=t.size,k=void 0===C?"medium":C,S=t.variant,I=void 0===S?"filled":S,j=t.tabIndex,w=t.skipFocusWhenDisabled,z=void 0!==w&&w,N=(0,p.Z)(t,G),O=n.useRef(null),F=(0,L.Z)(O,a),R=function(e){e.stopPropagation(),g&&g(e)},E=!(!1===r||!Z)||r,P=E||g?W.Z:d||"div",M=(0,u.Z)({},t,{component:P,disabled:f,size:k,color:s,iconColor:n.isValidElement(h)&&h.props.color||s,onDelete:!!g,clickable:E,variant:I}),_=function(e){var a=e.classes,t=e.disabled,o=e.size,n=e.color,c=e.iconColor,r=e.onDelete,l=e.clickable,i=e.variant,s={root:["root",i,t&&"disabled","size".concat((0,q.Z)(o)),"color".concat((0,q.Z)(n)),l&&"clickable",l&&"clickableColor".concat((0,q.Z)(n)),r&&"deletable",r&&"deletableColor".concat((0,q.Z)(n)),"".concat(i).concat((0,q.Z)(n))],label:["label","label".concat((0,q.Z)(o))],avatar:["avatar","avatar".concat((0,q.Z)(o)),"avatarColor".concat((0,q.Z)(n))],icon:["icon","icon".concat((0,q.Z)(o)),"iconColor".concat((0,q.Z)(c))],deleteIcon:["deleteIcon","deleteIcon".concat((0,q.Z)(o)),"deleteIconColor".concat((0,q.Z)(n)),"deleteIcon".concat((0,q.Z)(i),"Color").concat((0,q.Z)(n))]};return(0,D.Z)(s,B,a)}(M),H=P===W.Z?(0,u.Z)({component:d||"div",focusVisibleClassName:_.focusVisible},g&&{disableRipple:!0}):{},U=null;g&&(U=v&&n.isValidElement(v)?n.cloneElement(v,{className:(0,T.Z)(v.props.className,_.deleteIcon),onClick:R}):(0,i.jsx)(V,{className:(0,T.Z)(_.deleteIcon),onClick:R}));var A=null;o&&n.isValidElement(o)&&(A=n.cloneElement(o,{className:(0,T.Z)(_.avatar,o.props.className)}));var Y=null;return h&&n.isValidElement(h)&&(Y=n.cloneElement(h,{className:(0,T.Z)(_.icon,h.props.className)})),(0,i.jsxs)(J,(0,u.Z)({as:P,className:(0,T.Z)(_.root,c),disabled:!(!E||!f)||void 0,onClick:Z,onKeyDown:function(e){e.currentTarget===e.target&&X(e)&&e.preventDefault(),x&&x(e)},onKeyUp:function(e){e.currentTarget===e.target&&(g&&X(e)?g(e):"Escape"===e.key&&O.current&&O.current.blur()),y&&y(e)},ref:F,tabIndex:z&&f?-1:j,ownerState:M},H,N,{children:[A||Y,(0,i.jsx)(Q,{className:(0,T.Z)(_.label),ownerState:M,children:b}),U]}))})),te=t(2716),oe=(0,P.Z)({components:{MuiIcon:{styleOverrides:{root:{boxSizing:"content-box",padding:3,fontSize:"1.125rem"}}}}}),ne=(0,E.F4)(Y||(Y=(0,R.Z)(["\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }"]))),ce=(0,_.ZP)(ae)($||($=(0,R.Z)(["\n  cursor: pointer;\n  background-color: #ff5252; /* Red */\n  color: #ffffff;\n  border-color: #4caf50;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);\n  transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;\n\n  &:hover {\n    background-color: #ff4436; /* Darker Red */\n    border-color: #4caf50;\n    animation: "," 0.3s ease-in-out;\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);\n  }\n"])),ne),re=(0,_.ZP)(te.Z)(ee||(ee=(0,R.Z)(["\n  fill: #fff;\n  transition: color 0.2s;\n"]))),le=t(1971),ie=function(e){var a=e.contact,t=(0,d.I0)(),o=(0,c.TH)().state,r=(0,d.v9)((function(e){return e.contacts.avatarSrc}));return(0,n.useEffect)((function(){t((0,le._6)(o.num))}),[o.num]),(0,i.jsx)(F.Z,{sx:{width:"100%",maxWidth:350,bgcolor:"#F7F7F7",boxShadow:"0px 3px 6px rgba(0, 0, 0, 0.16)",borderRadius:"8px",overflow:"hidden"},children:a.map((function(e){var a=e.name,t=e.phone;e.id,e.email;return(0,i.jsxs)(w.ZP,{sx:{"&:not(:last-child)":{borderBottom:"1px solid #E0E0E0"}},children:[(0,i.jsx)(N.Z,{children:(0,i.jsx)(O.Z,{alt:"Travis Howard",src:"".concat(r)})}),(0,i.jsx)(z.Z,{primary:a,secondary:t,sx:{color:"#222222"}}),(0,i.jsx)(j,{theme:oe,children:(0,i.jsx)(ce,{icon:(0,i.jsx)(re,{}),label:"Call"})})]},a)}))})},se=function(){var e=(0,c.UO)().chatId,a=(0,n.useState)([]),t=(0,o.Z)(a,2),l=t[0],u=t[1],p=(0,n.useState)(!1),v=(0,o.Z)(p,2),m=v[0],f=v[1],h=(0,d.v9)((function(e){return e.contacts.contacts}));return(0,n.useEffect)((function(){!function(){f(!0);var a=h.filter((function(a){return a.name===e}));u(a),setTimeout((function(){f(!1)}),1e3)}()}),[e,h]),(0,i.jsx)(i.Fragment,{children:l.length>0&&(0,i.jsx)("div",{className:"item",children:m?(0,i.jsx)(r.a,{}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ie,{contact:l}),(0,i.jsx)(s,{})]})})})}},2759:function(e,a,t){t.d(a,{a:function(){return n}});t(2791);var o=t(184),n=function(){return(0,o.jsxs)("div",{className:"spinner",children:[(0,o.jsx)("div",{className:"part"}),(0,o.jsx)("div",{className:"part"}),(0,o.jsx)("div",{className:"part"})]})}},2716:function(e,a,t){var o=t(4836);a.Z=void 0;var n=o(t(5649)),c=t(184),r=(0,n.default)((0,c.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone");a.Z=r}}]);
//# sourceMappingURL=95.a5229f5a.chunk.js.map