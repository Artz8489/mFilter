(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[35],{1154:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(387),l=t(171),o=t(252),s=t(932),i=t(930),u=t(510),d=t(501),m=t(48),f=t(928),b=t(929),v={aadhar:""},p=o.c().shape({aadhar:o.e().required()}),E=[{Header:"Age Band Lower Limit",accessor:"result.source_output.age_band.lower_limit"},{Header:"Age Band Upper Limit",accessor:"result.source_output.age_band.upper_limit"},{Header:"Gender",accessor:"result.source_output.gender"},{Header:"Mobile Number",accessor:"result.source_output.mobile_number"},{Header:"State",accessor:"result.source_output.state"}];a.default=Object(m.b)((function(e){return{verification:e.verification}}))((function(e){var a=e.verification;console.log("IN GUI",a);var t=Object(m.c)();return Object(r.useEffect)((function(){t(Object(f.a)({}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{className:"reportfilter-Ctr"},n.a.createElement(s.a.Body,{className:"pt-4 pb-4"},n.a.createElement(l.c,{enableReinitialize:!0,validationSchema:p,initialValues:v,onSubmit:function(e,a){var r=a.resetForm;console.log(e);var n={api_list:[{key:"verify_aadhar",value:{aadhaar_number:e.aadhar}}]};t(Object(f.c)(n)),r()}},(function(e){e.values,e.setFieldValue,e.handleBlur;return n.a.createElement("div",{className:"userform-Ctr"},n.a.createElement(l.b,null,n.a.createElement(i.a,{gutter:[20,20]},n.a.createElement(u.a,{xs:12,sm:12,md:12,lg:12,xl:12},n.a.createElement(l.a,{readonly:!1,name:"aadhar",component:c.a,placeholder:"Enter Aadhar",label:"Aadhar",type:"text"}))),n.a.createElement("div",{className:"text-left"},n.a.createElement(i.a,null,n.a.createElement(u.a,{xs:6,sm:6,md:6,lg:6,xl:6},n.a.createElement("div",{className:"w-100",style:{textAlign:"right"}},n.a.createElement(d.a,{type:"submit",className:"w-50"},"Search"))),n.a.createElement(u.a,{xs:6,sm:6,md:6,lg:6,xl:6},n.a.createElement("div",{className:"w-100",style:{textAlign:"left"}},n.a.createElement(d.a,{className:"w-50"},"Clear")))))))})))),a&&a.verification_response instanceof Array&&a.verification_response.length>0&&n.a.createElement(s.a,null,n.a.createElement(s.a.Header,null,n.a.createElement("h6",null,"Response")),n.a.createElement(s.a.Body,null,n.a.createElement("div",{className:"App"},n.a.createElement(b.a,{column:E,data:a.verification_response[0].verify_aadhar})))))}))},927:function(e,a,t){"use strict";var r=t(4),n=t(0),c=t.n(n),l=t(28),o=t.n(l);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:o()(a.className,e)}))}))}},928:function(e,a,t){"use strict";t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return l}));var r=t(97),n=function(e){return console.log("Verification FETCH ",e),{type:r.f,body:e}},c=function(){return console.log("Verification INIT"),{type:r.f,body:{}}},l=function(e){return console.log("Bulk Verification INIT"),{type:r.c,body:e}}},929:function(e,a,t){"use strict";var r=t(0),n=t.n(r),c=t(4),l=t(11),o=t(28),s=t.n(o),i=t(30),u=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.striped,d=e.bordered,m=e.borderless,f=e.hover,b=e.size,v=e.variant,p=e.responsive,E=Object(l.a)(e,u),h=Object(i.a)(t,"table"),y=s()(r,h,v&&h+"-"+v,b&&h+"-"+b,o&&h+"-striped",d&&h+"-bordered",m&&h+"-borderless",f&&h+"-hover"),g=n.a.createElement("table",Object(c.a)({},E,{className:y,ref:a}));if(p){var j=h+"-responsive";return"string"===typeof p&&(j=j+"-"+p),n.a.createElement("div",{className:j},g)}return g})),m=t(56);function f(e){return Object.keys(e).reduce((function(a,t){return function e(a,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=[n,t].filter((function(e){return e})).join(".");return"object"===typeof r&&null!=r&&"undefined"!==typeof r?Object.keys(r).reduce((function(a,t){return e(a,t,r[t],c)}),a):Object.assign(a,Object(m.a)({},c,r))}(a,t,e[t])}),{})}function b(e){var a=e.data,t=void 0===a?{}:a,r=e.column,c=void 0===r?[]:r,l=f(t);return console.log(l,"flat"),n.a.createElement("div",{style:{height:"40vh",overflow:"auto"}},n.a.createElement(d,null,n.a.createElement("thead",null,n.a.createElement("tr",{style:{color:"#B5B5C3"}},n.a.createElement("th",null,"Key"),n.a.createElement("th",null,"Value"))),n.a.createElement("tbody",null,c.map((function(e,a){var t,r,c;return n.a.createElement("tr",{key:a},n.a.createElement("td",null,null!==(t=e.Header)&&void 0!==t?t:""),n.a.createElement("td",{style:{maxWidth:"60%",minWidth:"20rem",width:"50vw"}},String(null!==(r=l[null!==(c=e.accessor)&&void 0!==c?c:""])&&void 0!==r?r:"NA")))})))))}t.d(a,"a",(function(){return b}))},930:function(e,a,t){"use strict";var r=t(4),n=t(11),c=t(28),l=t.n(c),o=t(0),s=t.n(o),i=t(30),u=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],m=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.noGutters,m=e.as,f=void 0===m?"div":m,b=Object(n.a)(e,u),v=Object(i.a)(t,"row"),p=v+"-cols",E=[];return d.forEach((function(e){var a,t=b[e];delete b[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&E.push(""+p+r+"-"+a)})),s.a.createElement(f,Object(r.a)({ref:a},b,{className:l.a.apply(void 0,[c,v,o&&"no-gutters"].concat(E))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},a.a=m},932:function(e,a,t){"use strict";var r=t(4),n=t(11),c=t(28),l=t.n(c),o=t(0),s=t.n(o),i=t(30),u=t(116),d=t(927),m=s.a.createContext(null);m.displayName="CardContext";var f=m,b=["bsPrefix","className","variant","as"],v=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,m=Object(n.a)(e,b),f=Object(i.a)(t,"card-img");return s.a.createElement(d,Object(r.a)({ref:a,className:l()(o?f+"-"+o:f,c)},m))}));v.displayName="CardImg",v.defaultProps={variant:null};var p=v,E=["bsPrefix","className","bg","text","border","body","children","as"],h=Object(d.a)("h5"),y=Object(d.a)("h6"),g=Object(u.a)("card-body"),j=Object(u.a)("card-title",{Component:h}),O=Object(u.a)("card-subtitle",{Component:y}),N=Object(u.a)("card-link",{Component:"a"}),x=Object(u.a)("card-text",{Component:"p"}),w=Object(u.a)("card-header"),_=Object(u.a)("card-footer"),C=Object(u.a)("card-img-overlay"),P=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,u=e.bg,d=e.text,m=e.border,b=e.body,v=e.children,p=e.as,h=void 0===p?"div":p,y=Object(n.a)(e,E),j=Object(i.a)(t,"card"),O=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return s.a.createElement(f.Provider,{value:O},s.a.createElement(h,Object(r.a)({ref:a},y,{className:l()(c,j,u&&"bg-"+u,d&&"text-"+d,m&&"border-"+m)}),b?s.a.createElement(g,null,v):v))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=p,P.Title=j,P.Subtitle=O,P.Body=g,P.Link=N,P.Text=x,P.Header=w,P.Footer=_,P.ImgOverlay=C;a.a=P}}]);