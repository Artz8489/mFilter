(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[23],{1195:function(e,a,t){"use strict";var r=t(1),n=t(0),c=t.n(n),l=t(20),o=t.n(l);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:o()(a.className,e)}))}))}},1196:function(e,a,t){"use strict";t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return l}));var r=t(103),n=function(e){return console.log("Verification FETCH ",e),{type:r.f,body:e}},c=function(){return console.log("Verification INIT"),{type:r.f,body:{}}},l=function(e){return console.log("Bulk Verification INIT"),{type:r.c,body:e}}},1197:function(e,a,t){"use strict";var r=t(0),n=t.n(r),c=t(1),l=t(10),o=t(20),s=t.n(o),i=t(25),u=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.striped,d=e.bordered,m=e.borderless,f=e.hover,b=e.size,v=e.variant,p=e.responsive,E=Object(l.a)(e,u),h=Object(i.a)(t,"table"),y=s()(r,h,v&&h+"-"+v,b&&h+"-"+b,o&&h+"-striped",d&&h+"-bordered",m&&h+"-borderless",f&&h+"-hover"),g=n.a.createElement("table",Object(c.a)({},E,{className:y,ref:a}));if(p){var j=h+"-responsive";return"string"===typeof p&&(j=j+"-"+p),n.a.createElement("div",{className:j},g)}return g})),m=t(104);function f(e){return Object.keys(e).reduce((function(a,t){return function e(a,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=[n,t].filter((function(e){return e})).join(".");return"object"===typeof r&&null!=r&&"undefined"!==typeof r?Object.keys(r).reduce((function(a,t){return e(a,t,r[t],c)}),a):Object.assign(a,Object(m.a)({},c,r))}(a,t,e[t])}),{})}function b(e){var a=e.data,t=void 0===a?{}:a,r=e.column,c=void 0===r?[]:r,l=f(t);return console.log(l,"flat"),n.a.createElement("div",{style:{height:"40vh",overflow:"auto"}},n.a.createElement(d,null,n.a.createElement("thead",null,n.a.createElement("tr",{style:{color:"#B5B5C3"}},n.a.createElement("th",null,"Key"),n.a.createElement("th",null,"Value"))),n.a.createElement("tbody",null,c.map((function(e,a){var t,r,c;return n.a.createElement("tr",{key:a},n.a.createElement("td",null,null!==(t=e.Header)&&void 0!==t?t:""),n.a.createElement("td",{style:{maxWidth:"60%",minWidth:"20rem",width:"50vw"}},String(null!==(r=l[null!==(c=e.accessor)&&void 0!==c?c:""])&&void 0!==r?r:"NA")))})))))}t.d(a,"a",(function(){return b}))},1199:function(e,a,t){"use strict";var r=t(1),n=t(10),c=t(20),l=t.n(c),o=t(0),s=t.n(o),i=t(25),u=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],m=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.noGutters,m=e.as,f=void 0===m?"div":m,b=Object(n.a)(e,u),v=Object(i.a)(t,"row"),p=v+"-cols",E=[];return d.forEach((function(e){var a,t=b[e];delete b[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&E.push(""+p+r+"-"+a)})),s.a.createElement(f,Object(r.a)({ref:a},b,{className:l.a.apply(void 0,[c,v,o&&"no-gutters"].concat(E))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},a.a=m},1200:function(e,a,t){"use strict";var r=t(1),n=t(10),c=t(20),l=t.n(c),o=t(0),s=t.n(o),i=t(25),u=t(128),d=t(1195),m=t(410),f=["bsPrefix","className","variant","as"],b=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,m=Object(n.a)(e,f),b=Object(i.a)(t,"card-img");return s.a.createElement(d,Object(r.a)({ref:a,className:l()(o?b+"-"+o:b,c)},m))}));b.displayName="CardImg",b.defaultProps={variant:null};var v=b,p=["bsPrefix","className","bg","text","border","body","children","as"],E=Object(d.a)("h5"),h=Object(d.a)("h6"),y=Object(u.a)("card-body"),g=Object(u.a)("card-title",{Component:E}),j=Object(u.a)("card-subtitle",{Component:h}),O=Object(u.a)("card-link",{Component:"a"}),N=Object(u.a)("card-text",{Component:"p"}),x=Object(u.a)("card-header"),w=Object(u.a)("card-footer"),_=Object(u.a)("card-img-overlay"),P=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,u=e.bg,d=e.text,f=e.border,b=e.body,v=e.children,E=e.as,h=void 0===E?"div":E,g=Object(n.a)(e,p),j=Object(i.a)(t,"card"),O=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return s.a.createElement(m.a.Provider,{value:O},s.a.createElement(h,Object(r.a)({ref:a},g,{className:l()(c,j,u&&"bg-"+u,d&&"text-"+d,f&&"border-"+f)}),b?s.a.createElement(y,null,v):v))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=v,P.Title=g,P.Subtitle=j,P.Body=y,P.Link=O,P.Text=N,P.Header=x,P.Footer=w,P.ImgOverlay=_;a.a=P},1354:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(411),l=t(115),o=t(68),s=t(1200),i=t(1199),u=t(565),d=t(548),m=t(30),f=t(1196),b=t(1197),v={aadhar:""},p=o.d().shape({aadhar:o.f().required()}),E=[{Header:"Age Band Lower Limit",accessor:"result.source_output.age_band.lower_limit"},{Header:"Age Band Upper Limit",accessor:"result.source_output.age_band.upper_limit"},{Header:"Gender",accessor:"result.source_output.gender"},{Header:"Mobile Number",accessor:"result.source_output.mobile_number"},{Header:"State",accessor:"result.source_output.state"}];a.default=Object(m.b)((function(e){return{verification:e.verification}}))((function(e){var a=e.verification;console.log("IN GUI",a);var t=Object(m.d)();return Object(r.useEffect)((function(){t(Object(f.a)({}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{className:"reportfilter-Ctr"},n.a.createElement(s.a.Body,{className:"pt-4 pb-4"},n.a.createElement(l.c,{enableReinitialize:!0,validationSchema:p,initialValues:v,onSubmit:function(e,a){var r=a.resetForm;console.log(e);var n={api_list:[{key:"verify_aadhar",value:{aadhaar_number:e.aadhar}}]};t(Object(f.c)(n)),r()}},(function(e){e.values,e.setFieldValue,e.handleBlur;return n.a.createElement("div",{className:"userform-Ctr"},n.a.createElement(l.b,null,n.a.createElement(i.a,{gutter:[20,20]},n.a.createElement(u.a,{xs:12,sm:12,md:12,lg:12,xl:12},n.a.createElement(l.a,{readonly:!1,name:"aadhar",component:c.a,placeholder:"Enter Aadhar",label:"Aadhar",type:"text"}))),n.a.createElement("div",{className:"text-left"},n.a.createElement(i.a,null,n.a.createElement(u.a,{xs:6,sm:6,md:6,lg:6,xl:6},n.a.createElement("div",{className:"w-100",style:{textAlign:"right"}},n.a.createElement(d.a,{type:"submit",className:"w-50"},"Search"))),n.a.createElement(u.a,{xs:6,sm:6,md:6,lg:6,xl:6},n.a.createElement("div",{className:"w-100",style:{textAlign:"left"}},n.a.createElement(d.a,{className:"w-50"},"Clear")))))))})))),a&&a.verification_response instanceof Array&&a.verification_response.length>0&&n.a.createElement(s.a,null,n.a.createElement(s.a.Header,null,n.a.createElement("h6",null,"Response")),n.a.createElement(s.a.Body,null,n.a.createElement("div",{className:"App"},n.a.createElement(b.a,{column:E,data:a.verification_response[0].verify_aadhar})))))}))}}]);
//# sourceMappingURL=23.5c7c0044.chunk.js.map