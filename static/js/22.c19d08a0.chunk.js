(this["webpackJsonptogedoor-frontend"]=this["webpackJsonptogedoor-frontend"]||[]).push([[22],{524:function(e,a,t){"use strict";var s=t(5),c=t(7),r=t(0),l=t.n(r),n=t(2),i=t.n(n),o=t(3),d=t.n(o),b=t(4),j={children:i.a.node,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,size:i.a.string,tag:b.n,listTag:b.n,"aria-label":i.a.string},p=function(e){var a,t=e.className,r=e.listClassName,n=e.cssModule,i=e.size,o=e.tag,j=e.listTag,p=e["aria-label"],m=Object(c.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),u=Object(b.j)(d()(t),n),x=Object(b.j)(d()(r,"pagination",((a={})["pagination-"+i]=!!i,a)),n);return l.a.createElement(o,{className:u,"aria-label":p},l.a.createElement(j,Object(s.a)({},m,{className:x})))};p.propTypes=j,p.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=p},525:function(e,a,t){"use strict";var s=t(5),c=t(7),r=t(0),l=t.n(r),n=t(2),i=t.n(n),o=t(3),d=t.n(o),b=t(4),j={active:i.a.bool,children:i.a.node,className:i.a.string,cssModule:i.a.object,disabled:i.a.bool,tag:b.n},p=function(e){var a=e.active,t=e.className,r=e.cssModule,n=e.disabled,i=e.tag,o=Object(c.a)(e,["active","className","cssModule","disabled","tag"]),j=Object(b.j)(d()(t,"page-item",{active:a,disabled:n}),r);return l.a.createElement(i,Object(s.a)({},o,{className:j}))};p.propTypes=j,p.defaultProps={tag:"li"},a.a=p},526:function(e,a,t){"use strict";var s=t(5),c=t(7),r=t(0),l=t.n(r),n=t(2),i=t.n(n),o=t(3),d=t.n(o),b=t(4),j={"aria-label":i.a.string,children:i.a.node,className:i.a.string,cssModule:i.a.object,next:i.a.bool,previous:i.a.bool,first:i.a.bool,last:i.a.bool,tag:b.n},p=function(e){var a,t=e.className,r=e.cssModule,n=e.next,i=e.previous,o=e.first,j=e.last,p=e.tag,m=Object(c.a)(e,["className","cssModule","next","previous","first","last","tag"]),u=Object(b.j)(d()(t,"page-link"),r);i?a="Previous":n?a="Next":o?a="First":j&&(a="Last");var x,O=e["aria-label"]||a;i?x="\u2039":n?x="\u203a":o?x="\xab":j&&(x="\xbb");var h=e.children;return h&&Array.isArray(h)&&0===h.length&&(h=null),m.href||"a"!==p||(p="button"),(i||n||o||j)&&(h=[l.a.createElement("span",{"aria-hidden":"true",key:"caret"},h||x),l.a.createElement("span",{className:"sr-only",key:"sr"},O)]),l.a.createElement(p,Object(s.a)({},m,{className:u,"aria-label":O}),h)};p.propTypes=j,p.defaultProps={tag:"a"},a.a=p},600:function(e,a,t){"use strict";var s=t(5),c=t(7),r=t(0),l=t.n(r),n=t(2),i=t.n(n),o=t(3),d=t.n(o),b=t(4),j={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:b.n,responsiveTag:b.n,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},p=function(e){var a=e.className,t=e.cssModule,r=e.size,n=e.bordered,i=e.borderless,o=e.striped,j=e.dark,p=e.hover,m=e.responsive,u=e.tag,x=e.responsiveTag,O=e.innerRef,h=Object(c.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),g=Object(b.j)(d()(a,"table",!!r&&"table-"+r,!!n&&"table-bordered",!!i&&"table-borderless",!!o&&"table-striped",!!j&&"table-dark",!!p&&"table-hover"),t),N=l.a.createElement(u,Object(s.a)({},h,{ref:O,className:g}));if(m){var f=Object(b.j)(!0===m?"table-responsive":"table-responsive-"+m,t);return l.a.createElement(x,{className:f},N)}return N};p.propTypes=j,p.defaultProps={tag:"table",responsiveTag:"div"},a.a=p},684:function(e,a,t){"use strict";t.r(a);var s=t(11),c=(t(0),t(600)),r=t(19),l=t(160),n=t(8),i=t(1),o=function(e){var a=e.generalaccountlink,t=e.date,s=e.application,c=e.status,o=e.color;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("tr",{children:[Object(i.jsxs)("td",{className:"pb-3 pt-5 pt-4 pr-0  pl-5",children:[Object(i.jsx)("h6",{children:Object(i.jsx)(n.b,{to:a,children:" General Ledger Accountant"})}),Object(i.jsxs)("p",{className:"text-muted font-14",children:[Object(i.jsx)(r.a,{icon:l.a,className:"mr-2 text-primary"}),"Date posted : ",t]})]}),Object(i.jsx)("td",{className:"pb-3 pt-5 pt-4 pr-0  pl-5 d-none d-md-table-cell",children:Object(i.jsx)("p",{children:Object(i.jsxs)(n.b,{to:"#",className:"text-primary",children:[s," Applications"]})})}),Object(i.jsx)("td",{className:"pb-3 pt-5  d-none d-sm-table-cell ",children:Object(i.jsx)("p",{className:" ".concat(o," "),children:c})}),Object(i.jsx)("td",{className:"pb-3 pt-5  pr-0  pl-4 pr-2",children:Object(i.jsxs)("ul",{className:"d-inline-flex",children:[Object(i.jsx)("li",{className:"mr-3",children:Object(i.jsx)(n.b,{to:"#",children:Object(i.jsx)(r.a,{className:"font-14",icon:l.e})})}),Object(i.jsx)("li",{className:"mr-3",children:Object(i.jsx)(n.b,{to:"#",children:Object(i.jsx)(r.a,{className:"font-14",icon:l.c})})}),Object(i.jsx)("li",{className:"",children:Object(i.jsx)(n.b,{to:"#",children:Object(i.jsx)(r.a,{className:"font-14",icon:l.f})})})]})})]})})},d=t(524),b=t(525),j=t(526),p=function(){return Object(i.jsxs)(d.a,{"aria-label":"Page navigation example justify-content-center",children:[Object(i.jsx)(b.a,{disabled:!0,className:"mr-2",children:Object(i.jsx)(j.a,{className:"text-dark",previous:!0,href:"#"})}),Object(i.jsx)(b.a,{active:!0,className:"mr-2",children:Object(i.jsx)(j.a,{className:"bg-primary border-primary",href:"#",children:"1"})}),Object(i.jsx)(b.a,{className:"mr-2",children:Object(i.jsx)(j.a,{className:"text-dark",href:"#",children:"2"})}),Object(i.jsx)(b.a,{className:"mr-2",children:Object(i.jsx)(j.a,{className:"text-dark",href:"#",children:"3"})}),Object(i.jsx)(b.a,{className:"mr-2",children:Object(i.jsx)(j.a,{className:"text-dark",href:"#",children:"..."})}),Object(i.jsx)(b.a,{className:"mr-2",children:Object(i.jsx)(j.a,{className:"text-dark",href:"#",children:"6"})}),Object(i.jsx)(b.a,{className:"mr-2",children:Object(i.jsx)(j.a,{className:"text-dark",next:!0,href:"#"})})]})},m=[{generalaccountlink:"#",date:"02 Oct 2017",application:"24",status:"Active",color:"text-success"},{generalaccountlink:"#",date:"02 Oct 2017",application:"24",status:"Expired",color:"text-danger"},{generalaccountlink:"#",date:"02 Oct 2017",application:"24",status:"Pending",color:"text-warning"},{generalaccountlink:"#",date:"02 Oct 2017",application:"24",status:"Active",color:"text-success"},{generalaccountlink:"#",date:"02 Oct 2017",application:"24",status:"Pending",color:"text-warning"},{generalaccountlink:"#",date:"02 Oct 2017",application:"24",status:"Active",color:"text-success"}];a.default=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(c.a,{hover:!0,className:"manage-job-table",children:[Object(i.jsx)("thead",{className:"bg-primary text-white",children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"py-4 pl-5",children:"Project title"}),Object(i.jsx)("th",{className:"d-none d-md-table-cell   py-4 pr-6 text-center",children:"Applications"}),Object(i.jsx)("th",{className:" d-none d-sm-table-cell py-4 p-0 text-center ",children:"Status"}),Object(i.jsx)("th",{className:"py-4 pl-5 text-center",children:"Action"})]})}),Object(i.jsx)("tbody",{className:" border mb-30",children:m&&m.map((function(e,a){return Object(i.jsx)(o,Object(s.a)({},e),a)}))})]}),Object(i.jsx)(p,{})]})}}}]);
//# sourceMappingURL=22.c19d08a0.chunk.js.map