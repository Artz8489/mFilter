(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[40],{1158:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(387),l=a(171),s=a(252),o=a(932),i=a(930),u=a(510),d=a(501),m=a(48),f=a(928),b=a(929),p={passport_file_number:"",dob:""},v=s.c().shape({passport_file_number:s.e().required(),dob:s.e().required()}),E=[{Header:"Name",accessor:"result.source_output.name"},{Header:"Date Of Birth",accessor:"result.source_output.date_of_birth"},{Header:"Surname",accessor:"result.source_output.surname"},{Header:"Application Date",accessor:"result.source_output.application_date"},{Header:"File Number",accessor:"result.source_output.file_number"},{Header:"Passport Status",accessor:"result.source_output.passport_status"},{Header:"Status",accessor:"result.source_output.status"}];t.default=Object(m.b)((function(e){return{verification:e.verification}}))((function(e){var t=e.verification;console.log("IN GUI",t);var a=Object(m.c)();return Object(r.useEffect)((function(){a(Object(f.a)({}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{className:"reportfilter-Ctr"},n.a.createElement(o.a.Body,{className:"pt-4 pb-4"},n.a.createElement(l.c,{enableReinitialize:!0,validationSchema:v,initialValues:p,onSubmit:function(e,t){var r=t.resetForm;console.log(e);var n={api_list:[{key:"verify_passport",value:{passport_file_number:e.passport_file_number,date_of_birth:e.dob}}]};a(Object(f.c)(n)),r()}},(function(e){e.values,e.setFieldValue,e.handleBlur;return n.a.createElement("div",{className:"userform-Ctr"},n.a.createElement(l.b,null,n.a.createElement(i.a,{gutter:[20,20]},n.a.createElement(u.a,{xs:12,sm:12,md:12,lg:12,xl:12},n.a.createElement(l.a,{name:"passport_file_number",readonly:!1,component:c.a,placeholder:"Enter Passport File Num",label:"Passport",type:"text"})),n.a.createElement(u.a,{xs:12,sm:12,md:12,lg:12,xl:12},n.a.createElement(l.a,{name:"dob",readonly:!1,component:c.a,placeholder:"Enter DOB",label:"DOB",type:"text"}))),n.a.createElement("div",{className:"text-left"},n.a.createElement(i.a,null,n.a.createElement(u.a,{xs:6,sm:6,md:6,lg:6,xl:6},n.a.createElement("div",{className:"w-100",style:{textAlign:"right"}},n.a.createElement(d.a,{type:"submit",className:"w-50"},"Search"))),n.a.createElement(u.a,{xs:6,sm:6,md:6,lg:6,xl:6},n.a.createElement("div",{className:"w-100",style:{textAlign:"left"}},n.a.createElement(d.a,{className:"w-50"},"Clear")))))))})))),t&&t.verification_response instanceof Array&&t.verification_response.length>0&&n.a.createElement(o.a,null,n.a.createElement(o.a.Header,null,n.a.createElement("h6",null,"Response")),n.a.createElement(o.a.Body,null,n.a.createElement("div",{className:"App"},n.a.createElement(b.a,{column:E,data:t.verification_response[0].verify_passport})))))}))},927:function(e,t,a){"use strict";var r=a(4),n=a(0),c=a.n(n),l=a(28),s=a.n(l);t.a=function(e){return c.a.forwardRef((function(t,a){return c.a.createElement("div",Object(r.a)({},t,{ref:a,className:s()(t.className,e)}))}))}},928:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l}));var r=a(97),n=function(e){return console.log("Verification FETCH ",e),{type:r.f,body:e}},c=function(){return console.log("Verification INIT"),{type:r.f,body:{}}},l=function(e){return console.log("Bulk Verification INIT"),{type:r.c,body:e}}},929:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(4),l=a(11),s=a(28),o=a.n(s),i=a(30),u=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.striped,d=e.bordered,m=e.borderless,f=e.hover,b=e.size,p=e.variant,v=e.responsive,E=Object(l.a)(e,u),y=Object(i.a)(a,"table"),O=o()(r,y,p&&y+"-"+p,b&&y+"-"+b,s&&y+"-striped",d&&y+"-bordered",m&&y+"-borderless",f&&y+"-hover"),h=n.a.createElement("table",Object(c.a)({},E,{className:O,ref:t}));if(v){var j=y+"-responsive";return"string"===typeof v&&(j=j+"-"+v),n.a.createElement("div",{className:j},h)}return h})),m=a(56);function f(e){return Object.keys(e).reduce((function(t,a){return function e(t,a,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=[n,a].filter((function(e){return e})).join(".");return"object"===typeof r&&null!=r&&"undefined"!==typeof r?Object.keys(r).reduce((function(t,a){return e(t,a,r[a],c)}),t):Object.assign(t,Object(m.a)({},c,r))}(t,a,e[a])}),{})}function b(e){var t=e.data,a=void 0===t?{}:t,r=e.column,c=void 0===r?[]:r,l=f(a);return console.log(l,"flat"),n.a.createElement("div",{style:{height:"40vh",overflow:"auto"}},n.a.createElement(d,null,n.a.createElement("thead",null,n.a.createElement("tr",{style:{color:"#B5B5C3"}},n.a.createElement("th",null,"Key"),n.a.createElement("th",null,"Value"))),n.a.createElement("tbody",null,c.map((function(e,t){var a,r,c;return n.a.createElement("tr",{key:t},n.a.createElement("td",null,null!==(a=e.Header)&&void 0!==a?a:""),n.a.createElement("td",{style:{maxWidth:"60%",minWidth:"20rem",width:"50vw"}},String(null!==(r=l[null!==(c=e.accessor)&&void 0!==c?c:""])&&void 0!==r?r:"NA")))})))))}a.d(t,"a",(function(){return b}))},930:function(e,t,a){"use strict";var r=a(4),n=a(11),c=a(28),l=a.n(c),s=a(0),o=a.n(s),i=a(30),u=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],m=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.noGutters,m=e.as,f=void 0===m?"div":m,b=Object(n.a)(e,u),p=Object(i.a)(a,"row"),v=p+"-cols",E=[];return d.forEach((function(e){var t,a=b[e];delete b[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&E.push(""+v+r+"-"+t)})),o.a.createElement(f,Object(r.a)({ref:t},b,{className:l.a.apply(void 0,[c,p,s&&"no-gutters"].concat(E))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m},932:function(e,t,a){"use strict";var r=a(4),n=a(11),c=a(28),l=a.n(c),s=a(0),o=a.n(s),i=a(30),u=a(116),d=a(927),m=o.a.createContext(null);m.displayName="CardContext";var f=m,b=["bsPrefix","className","variant","as"],p=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.variant,u=e.as,d=void 0===u?"img":u,m=Object(n.a)(e,b),f=Object(i.a)(a,"card-img");return o.a.createElement(d,Object(r.a)({ref:t,className:l()(s?f+"-"+s:f,c)},m))}));p.displayName="CardImg",p.defaultProps={variant:null};var v=p,E=["bsPrefix","className","bg","text","border","body","children","as"],y=Object(d.a)("h5"),O=Object(d.a)("h6"),h=Object(u.a)("card-body"),j=Object(u.a)("card-title",{Component:y}),N=Object(u.a)("card-subtitle",{Component:O}),x=Object(u.a)("card-link",{Component:"a"}),g=Object(u.a)("card-text",{Component:"p"}),_=Object(u.a)("card-header"),w=Object(u.a)("card-footer"),P=Object(u.a)("card-img-overlay"),C=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,u=e.bg,d=e.text,m=e.border,b=e.body,p=e.children,v=e.as,y=void 0===v?"div":v,O=Object(n.a)(e,E),j=Object(i.a)(a,"card"),N=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return o.a.createElement(f.Provider,{value:N},o.a.createElement(y,Object(r.a)({ref:t},O,{className:l()(c,j,u&&"bg-"+u,d&&"text-"+d,m&&"border-"+m)}),b?o.a.createElement(h,null,p):p))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=v,C.Title=j,C.Subtitle=N,C.Body=h,C.Link=x,C.Text=g,C.Header=_,C.Footer=w,C.ImgOverlay=P;t.a=C}}]);