(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[29],{1195:function(e,t,a){"use strict";var r=a(1),n=a(0),c=a.n(n),s=a(20),o=a.n(s);t.a=function(e){return c.a.forwardRef((function(t,a){return c.a.createElement("div",Object(r.a)({},t,{ref:a,className:o()(t.className,e)}))}))}},1196:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return s}));var r=a(103),n=function(e){return console.log("Verification FETCH ",e),{type:r.f,body:e}},c=function(){return console.log("Verification INIT"),{type:r.f,body:{}}},s=function(e){return console.log("Bulk Verification INIT"),{type:r.c,body:e}}},1197:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(1),s=a(10),o=a(20),l=a.n(o),i=a(25),u=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.striped,d=e.bordered,m=e.borderless,f=e.hover,b=e.size,p=e.variant,v=e.responsive,_=Object(s.a)(e,u),x=Object(i.a)(a,"table"),y=l()(r,x,p&&x+"-"+p,b&&x+"-"+b,o&&x+"-striped",d&&x+"-bordered",m&&x+"-borderless",f&&x+"-hover"),E=n.a.createElement("table",Object(c.a)({},_,{className:y,ref:t}));if(v){var g=x+"-responsive";return"string"===typeof v&&(g=g+"-"+v),n.a.createElement("div",{className:g},E)}return E})),m=a(104);function f(e){return Object.keys(e).reduce((function(t,a){return function e(t,a,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=[n,a].filter((function(e){return e})).join(".");return"object"===typeof r&&null!=r&&"undefined"!==typeof r?Object.keys(r).reduce((function(t,a){return e(t,a,r[a],c)}),t):Object.assign(t,Object(m.a)({},c,r))}(t,a,e[a])}),{})}function b(e){var t=e.data,a=void 0===t?{}:t,r=e.column,c=void 0===r?[]:r,s=f(a);return console.log(s,"flat"),n.a.createElement("div",{style:{height:"40vh",overflow:"auto"}},n.a.createElement(d,null,n.a.createElement("thead",null,n.a.createElement("tr",{style:{color:"#B5B5C3"}},n.a.createElement("th",null,"Key"),n.a.createElement("th",null,"Value"))),n.a.createElement("tbody",null,c.map((function(e,t){var a,r,c;return n.a.createElement("tr",{key:t},n.a.createElement("td",null,null!==(a=e.Header)&&void 0!==a?a:""),n.a.createElement("td",{style:{maxWidth:"60%",minWidth:"20rem",width:"50vw"}},String(null!==(r=s[null!==(c=e.accessor)&&void 0!==c?c:""])&&void 0!==r?r:"NA")))})))))}a.d(t,"a",(function(){return b}))},1199:function(e,t,a){"use strict";var r=a(1),n=a(10),c=a(20),s=a.n(c),o=a(0),l=a.n(o),i=a(25),u=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],m=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.noGutters,m=e.as,f=void 0===m?"div":m,b=Object(n.a)(e,u),p=Object(i.a)(a,"row"),v=p+"-cols",_=[];return d.forEach((function(e){var t,a=b[e];delete b[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&_.push(""+v+r+"-"+t)})),l.a.createElement(f,Object(r.a)({ref:t},b,{className:s.a.apply(void 0,[c,p,o&&"no-gutters"].concat(_))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m},1200:function(e,t,a){"use strict";var r=a(1),n=a(10),c=a(20),s=a.n(c),o=a(0),l=a.n(o),i=a(25),u=a(128),d=a(1195),m=a(410),f=["bsPrefix","className","variant","as"],b=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,m=Object(n.a)(e,f),b=Object(i.a)(a,"card-img");return l.a.createElement(d,Object(r.a)({ref:t,className:s()(o?b+"-"+o:b,c)},m))}));b.displayName="CardImg",b.defaultProps={variant:null};var p=b,v=["bsPrefix","className","bg","text","border","body","children","as"],_=Object(d.a)("h5"),x=Object(d.a)("h6"),y=Object(u.a)("card-body"),E=Object(u.a)("card-title",{Component:_}),g=Object(u.a)("card-subtitle",{Component:x}),h=Object(u.a)("card-link",{Component:"a"}),N=Object(u.a)("card-text",{Component:"p"}),O=Object(u.a)("card-header"),j=Object(u.a)("card-footer"),H=Object(u.a)("card-img-overlay"),w=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,u=e.bg,d=e.text,f=e.border,b=e.body,p=e.children,_=e.as,x=void 0===_?"div":_,E=Object(n.a)(e,v),g=Object(i.a)(a,"card"),h=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return l.a.createElement(m.a.Provider,{value:h},l.a.createElement(x,Object(r.a)({ref:t},E,{className:s()(c,g,u&&"bg-"+u,d&&"text-"+d,f&&"border-"+f)}),b?l.a.createElement(y,null,p):p))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=p,w.Title=E,w.Subtitle=g,w.Body=y,w.Link=h,w.Text=N,w.Header=O,w.Footer=j,w.ImgOverlay=H;t.a=w},1360:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(411),s=a(115),o=a(68),l=a(1200),i=a(1199),u=a(565),d=a(548),m=a(30),f=a(1196),b=a(1197),p={rc:""},v=o.d().shape({rc:o.f().required()}),_=[{Header:"Gross Weight",accessor:"result.extraction_output.avg_gross_vehicle_weight"},{Header:"Axle Configuration",accessor:"result.extraction_output.axle_configuration"},{Header:"Chassis Number",accessor:"result.extraction_output.chassis_number"},{Header:"Color",accessor:"result.extraction_output.color"},{Header:"Emission Norms",accessor:"result.extraction_output.emission_norms"},{Header:"Engine Number",accessor:"result.extraction_output.engine_number"},{Header:"Fitness Upto",accessor:"result.extraction_output.fitness_upto"},{Header:"Fuel Type",accessor:"result.extraction_output.fuel_type"},{Header:"Insurance Details",accessor:"result.extraction_output.insurance_details"},{Header:"Insurance validity",accessor:"result.extraction_output.insurance_validity"},{Header:"Maker Model",accessor:"result.extraction_output.maker_model"},{Header:"Manufacturer",accessor:"result.extraction_output.manufacturer"},{Header:"Tax Upto",accessor:"result.extraction_output.mv_tax_upto"},{Header:"Owner Name",accessor:"result.extraction_output.owner_name"},{Header:"Owner Number",accessor:"result.extraction_output.owner_number"},{Header:"Permit Issue Date",accessor:"result.extraction_output.permit_issue_date"},{Header:"Permit Number",accessor:"result.extraction_output.permit_number"},{Header:"Permit Type",accessor:"result.extraction_output.permit_type"},{Header:"Permit Valitdity",accessor:"result.extraction_output.permit_validity"},{Header:"PUC Upto",accessor:"result.extraction_output.puc_number_upto"},{Header:"Registration Date",accessor:"result.extraction_output.registration_date"},{Header:"Registration Number",accessor:"result.extraction_output.registration_number"},{Header:"RTO Name",accessor:"result.extraction_output.rto_name"},{Header:"Vehicle Class",accessor:"result.extraction_output.vehicle_class"}];t.default=Object(m.b)((function(e){return{verification:e.verification}}))((function(e){var t=e.verification;console.log("IN GUI",t);var a=Object(m.d)();return Object(r.useEffect)((function(){a(Object(f.a)({}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{className:"reportfilter-Ctr"},n.a.createElement(l.a.Body,{className:"pt-4 pb-4"},n.a.createElement(s.c,{enableReinitialize:!0,validationSchema:v,initialValues:p,onSubmit:function(e,t){var r=t.resetForm,n={api_list:[{key:"verify_vehicle_rc",value:{rc_number:e.rc}}]};a(Object(f.c)(n)),r()}},(function(e){e.values,e.setFieldValue,e.handleBlur;return n.a.createElement("div",{className:"userform-Ctr"},n.a.createElement(s.b,null,n.a.createElement(i.a,{gutter:[20,20]},n.a.createElement(u.a,{xs:12,sm:12,md:12,lg:12,xl:12},n.a.createElement(s.a,{name:"rc",readonly:!1,component:c.a,placeholder:"Enter RC",label:"RC",type:"text"}))),n.a.createElement("div",{className:"text-left"},n.a.createElement(i.a,null,n.a.createElement(u.a,{xs:6,sm:6,md:6,lg:6,xl:6},n.a.createElement("div",{className:"w-100",style:{textAlign:"right"}},n.a.createElement(d.a,{type:"submit",className:"w-50"},"Search"))),n.a.createElement(u.a,{xs:6,sm:6,md:6,lg:6,xl:6},n.a.createElement("div",{className:"w-100",style:{textAlign:"left"}},n.a.createElement(d.a,{className:"w-50"},"Clear")))))))})))),t&&t.verification_response instanceof Array&&t.verification_response.length>0&&n.a.createElement(l.a,null,n.a.createElement(l.a.Header,null,n.a.createElement("h6",null,"Response")),n.a.createElement(l.a.Body,null,n.a.createElement("div",{className:"App"},n.a.createElement(b.a,{column:_,data:t.verification_response[0].verify_vehicle_rc})))))}))}}]);
//# sourceMappingURL=29.3f81ae11.chunk.js.map