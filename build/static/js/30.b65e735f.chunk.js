(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[30],{1195:function(e,t,a){"use strict";var r=a(1),n=a(0),c=a.n(n),o=a(20),s=a.n(o);t.a=function(e){return c.a.forwardRef((function(t,a){return c.a.createElement("div",Object(r.a)({},t,{ref:a,className:s()(t.className,e)}))}))}},1196:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return o}));var r=a(103),n=function(e){return console.log("Verification FETCH ",e),{type:r.f,body:e}},c=function(){return console.log("Verification INIT"),{type:r.f,body:{}}},o=function(e){return console.log("Bulk Verification INIT"),{type:r.c,body:e}}},1197:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(1),o=a(10),s=a(20),l=a.n(s),u=a(25),i=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.striped,d=e.bordered,m=e.borderless,f=e.hover,b=e.size,v=e.variant,p=e.responsive,E=Object(o.a)(e,i),_=Object(u.a)(a,"table"),y=l()(r,_,v&&_+"-"+v,b&&_+"-"+b,s&&_+"-striped",d&&_+"-bordered",m&&_+"-borderless",f&&_+"-hover"),N=n.a.createElement("table",Object(c.a)({},E,{className:y,ref:t}));if(p){var h=_+"-responsive";return"string"===typeof p&&(h=h+"-"+p),n.a.createElement("div",{className:h},N)}return N})),m=a(104);function f(e){return Object.keys(e).reduce((function(t,a){return function e(t,a,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=[n,a].filter((function(e){return e})).join(".");return"object"===typeof r&&null!=r&&"undefined"!==typeof r?Object.keys(r).reduce((function(t,a){return e(t,a,r[a],c)}),t):Object.assign(t,Object(m.a)({},c,r))}(t,a,e[a])}),{})}function b(e){var t=e.data,a=void 0===t?{}:t,r=e.column,c=void 0===r?[]:r,o=f(a);return console.log(o,"flat"),n.a.createElement("div",{style:{height:"40vh",overflow:"auto"}},n.a.createElement(d,null,n.a.createElement("thead",null,n.a.createElement("tr",{style:{color:"#B5B5C3"}},n.a.createElement("th",null,"Key"),n.a.createElement("th",null,"Value"))),n.a.createElement("tbody",null,c.map((function(e,t){var a,r,c;return n.a.createElement("tr",{key:t},n.a.createElement("td",null,null!==(a=e.Header)&&void 0!==a?a:""),n.a.createElement("td",{style:{maxWidth:"60%",minWidth:"20rem",width:"50vw"}},String(null!==(r=o[null!==(c=e.accessor)&&void 0!==c?c:""])&&void 0!==r?r:"NA")))})))))}a.d(t,"a",(function(){return b}))},1199:function(e,t,a){"use strict";var r=a(1),n=a(10),c=a(20),o=a.n(c),s=a(0),l=a.n(s),u=a(25),i=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],m=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.noGutters,m=e.as,f=void 0===m?"div":m,b=Object(n.a)(e,i),v=Object(u.a)(a,"row"),p=v+"-cols",E=[];return d.forEach((function(e){var t,a=b[e];delete b[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&E.push(""+p+r+"-"+t)})),l.a.createElement(f,Object(r.a)({ref:t},b,{className:o.a.apply(void 0,[c,v,s&&"no-gutters"].concat(E))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m},1200:function(e,t,a){"use strict";var r=a(1),n=a(10),c=a(20),o=a.n(c),s=a(0),l=a.n(s),u=a(25),i=a(128),d=a(1195),m=a(410),f=["bsPrefix","className","variant","as"],b=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.variant,i=e.as,d=void 0===i?"img":i,m=Object(n.a)(e,f),b=Object(u.a)(a,"card-img");return l.a.createElement(d,Object(r.a)({ref:t,className:o()(s?b+"-"+s:b,c)},m))}));b.displayName="CardImg",b.defaultProps={variant:null};var v=b,p=["bsPrefix","className","bg","text","border","body","children","as"],E=Object(d.a)("h5"),_=Object(d.a)("h6"),y=Object(i.a)("card-body"),N=Object(i.a)("card-title",{Component:E}),h=Object(i.a)("card-subtitle",{Component:_}),j=Object(i.a)("card-link",{Component:"a"}),O=Object(i.a)("card-text",{Component:"p"}),g=Object(i.a)("card-header"),x=Object(i.a)("card-footer"),H=Object(i.a)("card-img-overlay"),w=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.bg,d=e.text,f=e.border,b=e.body,v=e.children,E=e.as,_=void 0===E?"div":E,N=Object(n.a)(e,p),h=Object(u.a)(a,"card"),j=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return l.a.createElement(m.a.Provider,{value:j},l.a.createElement(_,Object(r.a)({ref:t},N,{className:o()(c,h,i&&"bg-"+i,d&&"text-"+d,f&&"border-"+f)}),b?l.a.createElement(y,null,v):v))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=v,w.Title=N,w.Subtitle=h,w.Body=y,w.Link=j,w.Text=O,w.Header=g,w.Footer=x,w.ImgOverlay=H;t.a=w},1359:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(411),o=a(115),s=a(68),l=a(1200),u=a(1199),i=a(565),d=a(548),m=a(30),f=a(1196),b=a(1197),v={voteid:"",name:""},p=s.d().shape({voteid:s.f().required(),name:s.f().required()}),E=[{Header:"ACNO",accessor:"result.source_output.ac_no"},{Header:"Date Of Birth",accessor:"result.source_output.date_of_birth"},{Header:"District",accessor:"result.source_output.district"},{Header:"Gender",accessor:"result.source_output.gender"},{Header:"House Number",accessor:"result.source_output.house_no"},{Header:"ID Number",accessor:"result.source_output.id_number"},{Header:"Last Updated",accessor:"result.source_output.last_update"},{Header:"Name on the card",accessor:"result.source_output.name_on_card"},{Header:"Part Number",accessor:"result.source_output.part_no"},{Header:"Latitude, Longitude",accessor:"result.source_output.ps_lat_long"},{Header:"Primary School Name",accessor:"result.source_output.ps_name"},{Header:"RLN Name",accessor:"result.source_output.rln_name"},{Header:"Section Number",accessor:"result.source_output.section_no"},{Header:"Source",accessor:"result.source_output.source"},{Header:"State Code",accessor:"result.source_output.st_code"},{Header:"State",accessor:"result.source_output.state"}];t.default=Object(m.b)((function(e){return{verification:e.verification}}))((function(e){var t=e.verification;console.log("IN GUI",t);var a=Object(m.d)();return Object(r.useEffect)((function(){a(Object(f.a)({}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{className:"reportfilter-Ctr"},n.a.createElement(l.a.Body,{className:"pt-4 pb-4"},n.a.createElement(o.c,{enableReinitialize:!0,validationSchema:p,initialValues:v,onSubmit:function(e,t){var r=t.resetForm,n={api_list:[{key:"verify_sol_ind_voter_id",value:{voter_id:e.voteid,name_on_card:e.name}}]};a(Object(f.c)(n)),r()}},(function(e){e.values,e.setFieldValue,e.handleBlur;return n.a.createElement("div",{className:"userform-Ctr"},n.a.createElement(o.b,null,n.a.createElement(u.a,{gutter:[20,20]},n.a.createElement(i.a,{xs:12,sm:12,md:12,lg:12,xl:12},n.a.createElement(o.a,{name:"voteid",readonly:!1,component:c.a,placeholder:"Enter Voter id",label:"Voter ID",type:"text"})),n.a.createElement(i.a,{xs:12,sm:12,md:12,lg:12,xl:12},n.a.createElement(o.a,{name:"name",readonly:!1,component:c.a,placeholder:"Enter Name",label:"Name",type:"text"}))),n.a.createElement("div",{className:"text-left"},n.a.createElement(u.a,null,n.a.createElement(i.a,{xs:6,sm:6,md:6,lg:6,xl:6},n.a.createElement("div",{className:"w-100",style:{textAlign:"right"}},n.a.createElement(d.a,{type:"submit",className:"w-50"},"Search"))),n.a.createElement(i.a,{xs:6,sm:6,md:6,lg:6,xl:6},n.a.createElement("div",{className:"w-100",style:{textAlign:"left"}},n.a.createElement(d.a,{className:"w-50"},"Clear")))))))})))),t&&t.verification_response instanceof Array&&t.verification_response.length>0&&n.a.createElement(l.a,null,n.a.createElement(l.a.Header,null,n.a.createElement("h6",null,"Response")),n.a.createElement(l.a.Body,null,n.a.createElement("div",{className:"App"},n.a.createElement(b.a,{column:E,data:t.verification_response[0].verify_sol_ind_voter_id})))))}))}}]);
//# sourceMappingURL=30.b65e735f.chunk.js.map