(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[17],{1195:function(e,t,a){"use strict";var r=a(1),s=a(0),n=a.n(s),l=a(20),c=a.n(l);t.a=function(e){return n.a.forwardRef((function(t,a){return n.a.createElement("div",Object(r.a)({},t,{ref:a,className:c()(t.className,e)}))}))}},1196:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return l}));var r=a(103),s=function(e){return console.log("Verification FETCH ",e),{type:r.f,body:e}},n=function(){return console.log("Verification INIT"),{type:r.f,body:{}}},l=function(e){return console.log("Bulk Verification INIT"),{type:r.c,body:e}}},1197:function(e,t,a){"use strict";var r=a(0),s=a.n(r),n=a(1),l=a(10),c=a(20),i=a.n(c),o=a(25),u=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,c=e.striped,d=e.bordered,m=e.borderless,b=e.hover,f=e.size,v=e.variant,h=e.responsive,p=Object(l.a)(e,u),E=Object(o.a)(a,"table"),y=i()(r,E,v&&E+"-"+v,f&&E+"-"+f,c&&E+"-striped",d&&E+"-bordered",m&&E+"-borderless",b&&E+"-hover"),O=s.a.createElement("table",Object(n.a)({},p,{className:y,ref:t}));if(h){var N=E+"-responsive";return"string"===typeof h&&(N=N+"-"+h),s.a.createElement("div",{className:N},O)}return O})),m=a(104);function b(e){return Object.keys(e).reduce((function(t,a){return function e(t,a,r){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=[s,a].filter((function(e){return e})).join(".");return"object"===typeof r&&null!=r&&"undefined"!==typeof r?Object.keys(r).reduce((function(t,a){return e(t,a,r[a],n)}),t):Object.assign(t,Object(m.a)({},n,r))}(t,a,e[a])}),{})}function f(e){var t=e.data,a=void 0===t?{}:t,r=e.column,n=void 0===r?[]:r,l=b(a);return console.log(l,"flat"),s.a.createElement("div",{style:{height:"40vh",overflow:"auto"}},s.a.createElement(d,null,s.a.createElement("thead",null,s.a.createElement("tr",{style:{color:"#B5B5C3"}},s.a.createElement("th",null,"Key"),s.a.createElement("th",null,"Value"))),s.a.createElement("tbody",null,n.map((function(e,t){var a,r,n;return s.a.createElement("tr",{key:t},s.a.createElement("td",null,null!==(a=e.Header)&&void 0!==a?a:""),s.a.createElement("td",{style:{maxWidth:"60%",minWidth:"20rem",width:"50vw"}},String(null!==(r=l[null!==(n=e.accessor)&&void 0!==n?n:""])&&void 0!==r?r:"NA")))})))))}a.d(t,"a",(function(){return f}))},1199:function(e,t,a){"use strict";var r=a(1),s=a(10),n=a(20),l=a.n(n),c=a(0),i=a.n(c),o=a(25),u=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],m=i.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.noGutters,m=e.as,b=void 0===m?"div":m,f=Object(s.a)(e,u),v=Object(o.a)(a,"row"),h=v+"-cols",p=[];return d.forEach((function(e){var t,a=f[e];delete f[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&p.push(""+h+r+"-"+t)})),i.a.createElement(b,Object(r.a)({ref:t},f,{className:l.a.apply(void 0,[n,v,c&&"no-gutters"].concat(p))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m},1200:function(e,t,a){"use strict";var r=a(1),s=a(10),n=a(20),l=a.n(n),c=a(0),i=a.n(c),o=a(25),u=a(128),d=a(1195),m=a(410),b=["bsPrefix","className","variant","as"],f=i.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.variant,u=e.as,d=void 0===u?"img":u,m=Object(s.a)(e,b),f=Object(o.a)(a,"card-img");return i.a.createElement(d,Object(r.a)({ref:t,className:l()(c?f+"-"+c:f,n)},m))}));f.displayName="CardImg",f.defaultProps={variant:null};var v=f,h=["bsPrefix","className","bg","text","border","body","children","as"],p=Object(d.a)("h5"),E=Object(d.a)("h6"),y=Object(u.a)("card-body"),O=Object(u.a)("card-title",{Component:p}),N=Object(u.a)("card-subtitle",{Component:E}),j=Object(u.a)("card-link",{Component:"a"}),g=Object(u.a)("card-text",{Component:"p"}),x=Object(u.a)("card-header"),H=Object(u.a)("card-footer"),D=Object(u.a)("card-img-overlay"),I=i.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,u=e.bg,d=e.text,b=e.border,f=e.body,v=e.children,p=e.as,E=void 0===p?"div":p,O=Object(s.a)(e,h),N=Object(o.a)(a,"card"),j=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:N+"-header"}}),[N]);return i.a.createElement(m.a.Provider,{value:j},i.a.createElement(E,Object(r.a)({ref:t},O,{className:l()(n,N,u&&"bg-"+u,d&&"text-"+d,b&&"border-"+b)}),f?i.a.createElement(y,null,v):v))}));I.displayName="Card",I.defaultProps={body:!1},I.Img=v,I.Title=O,I.Subtitle=N,I.Body=y,I.Link=j,I.Text=g,I.Header=x,I.Footer=H,I.ImgOverlay=D;t.a=I},1348:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(411),l=a(115),c=a(68),i=a(1200),o=a(1199),u=a(565),d=a(548),m=a(1196),b=a(30),f=a(1197),v={establishmentId:""},h=c.d().shape({establishmentId:c.f().required()}),p=[{Header:"Establishment ID",accessor:"result.establishmentId"},{Header:"Establishment Name",accessor:"result.establishmentName"},{Header:"Address",accessor:"result.establishmentDetails.address"},{Header:"City",accessor:"result.establishmentDetails.city"},{Header:"Region",accessor:"result.establishmentDetails.region"},{Header:"Zone",accessor:"result.establishmentDetails.zone"},{Header:"District",accessor:"result.establishmentDetails.district"},{Header:"State",accessor:"result.establishmentDetails.state"},{Header:"Country",accessor:"result.establishmentDetails.country"},{Header:"PIN Code",accessor:"result.establishmentDetails.pincode"},{Header:"Date Of Establishment",accessor:"result.establishmentDetails.dateOfSetupOfEstablishment"},{Header:"EPFO Office Address",accessor:"result.establishmentDetails.epfoOfficeAddress"},{Header:"EPFO Office Name",accessor:"result.establishmentDetails.epfoOfficeName"},{Header:"ESIC Code",accessor:"result.establishmentDetails.esicCode"},{Header:"Ownership Type",accessor:"result.establishmentDetails.ownershipType"},{Header:"PAN Status",accessor:"result.establishmentDetails.panStatus"},{Header:"Primary Business Activity",accessor:"result.establishmentDetails.primaryBusinessActivity"},{Header:"Sections Applicable",accessor:"result.establishmentDetails.sectionApplicable"},{Header:"Actionable Status",accessor:"result.establishmentStatus.actionableStatus"},{Header:"Exemption Status",accessor:"result.establishmentStatus.exemptionStatus"},{Header:"Working Status",accessor:"result.establishmentStatus.workingStatus"}];t.default=Object(b.b)((function(e){return{verification:e.verification}}))((function(e){var t,a=e.verification;console.log("IN GUI",a);var c=Object(b.d)();return Object(r.useEffect)((function(){c(Object(m.a)({}))}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{className:"reportfilter-Ctr"},s.a.createElement(i.a.Body,{className:"pt-4 pb-4"},s.a.createElement(l.c,{enableReinitialize:!0,validationSchema:h,initialValues:v,onSubmit:function(e,t){var a=t.resetForm,r={api_list:[{key:"basic_epfo_search",value:{establishmentId:e.establishmentId}}]};c(Object(m.c)(r)),a()}},(function(e){e.values,e.setFieldValue,e.handleBlur;return s.a.createElement("div",{className:"userform-Ctr"},s.a.createElement(l.b,null,s.a.createElement(o.a,{gutter:[20,20]},s.a.createElement(u.a,{xs:12,sm:12,md:12,lg:12,xl:12},s.a.createElement(l.a,{readonly:!1,name:"establishmentId",component:n.a,placeholder:"Enter Establishment ID",label:"Establishment ID",type:"text"}))),s.a.createElement("div",{className:"text-left"},s.a.createElement(o.a,null,s.a.createElement(u.a,{xs:6,sm:6,md:6,lg:6,xl:6},s.a.createElement("div",{className:"w-100",style:{textAlign:"right"}},s.a.createElement(d.a,{type:"submit",className:"w-50"},"Search"))),s.a.createElement(u.a,{xs:6,sm:6,md:6,lg:6,xl:6},s.a.createElement("div",{className:"w-100",style:{textAlign:"left"}},s.a.createElement(d.a,{className:"w-50"},"Clear")))))))})))),a&&a.verification_response instanceof Array&&a.verification_response.length>0&&s.a.createElement(i.a,null,s.a.createElement(i.a.Header,null,s.a.createElement("h6",null,"Response")),s.a.createElement(i.a.Body,null,s.a.createElement("div",{className:"App"},s.a.createElement(f.a,{column:p,data:null===a||void 0===a||null===(t=a.verification_response[0])||void 0===t?void 0:t.basic_epfo_search})))))}))}}]);
//# sourceMappingURL=17.ba420f61.chunk.js.map