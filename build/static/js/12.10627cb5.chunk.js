(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[12],{1195:function(e,t,a){"use strict";var r=a(1),n=a(0),l=a.n(n),i=a(20),c=a.n(i);t.a=function(e){return l.a.forwardRef((function(t,a){return l.a.createElement("div",Object(r.a)({},t,{ref:a,className:c()(t.className,e)}))}))}},1196:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i}));var r=a(103),n=function(e){return console.log("Verification FETCH ",e),{type:r.f,body:e}},l=function(){return console.log("Verification INIT"),{type:r.f,body:{}}},i=function(e){return console.log("Bulk Verification INIT"),{type:r.c,body:e}}},1199:function(e,t,a){"use strict";var r=a(1),n=a(10),l=a(20),i=a.n(l),c=a(0),s=a.n(c),d=a(25),o=["bsPrefix","className","noGutters","as"],m=["xl","lg","md","sm","xs"],u=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.noGutters,u=e.as,p=void 0===u?"div":u,f=Object(n.a)(e,o),x=Object(d.a)(a,"row"),b=x+"-cols",h=[];return m.forEach((function(e){var t,a=f[e];delete f[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&h.push(""+b+r+"-"+t)})),s.a.createElement(p,Object(r.a)({ref:t},f,{className:i.a.apply(void 0,[l,x,c&&"no-gutters"].concat(h))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u},1200:function(e,t,a){"use strict";var r=a(1),n=a(10),l=a(20),i=a.n(l),c=a(0),s=a.n(c),d=a(25),o=a(128),m=a(1195),u=a(410),p=["bsPrefix","className","variant","as"],f=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.variant,o=e.as,m=void 0===o?"img":o,u=Object(n.a)(e,p),f=Object(d.a)(a,"card-img");return s.a.createElement(m,Object(r.a)({ref:t,className:i()(c?f+"-"+c:f,l)},u))}));f.displayName="CardImg",f.defaultProps={variant:null};var x=f,b=["bsPrefix","className","bg","text","border","body","children","as"],h=Object(m.a)("h5"),v=Object(m.a)("h6"),y=Object(o.a)("card-body"),g=Object(o.a)("card-title",{Component:h}),E=Object(o.a)("card-subtitle",{Component:v}),w=Object(o.a)("card-link",{Component:"a"}),N=Object(o.a)("card-text",{Component:"p"}),O=Object(o.a)("card-header"),j=Object(o.a)("card-footer"),P=Object(o.a)("card-img-overlay"),T=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,o=e.bg,m=e.text,p=e.border,f=e.body,x=e.children,h=e.as,v=void 0===h?"div":h,g=Object(n.a)(e,b),E=Object(d.a)(a,"card"),w=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return s.a.createElement(u.a.Provider,{value:w},s.a.createElement(v,Object(r.a)({ref:t},g,{className:i()(l,E,o&&"bg-"+o,m&&"text-"+m,p&&"border-"+p)}),f?s.a.createElement(y,null,x):x))}));T.displayName="Card",T.defaultProps={body:!1},T.Img=x,T.Title=g,T.Subtitle=E,T.Body=y,T.Link=w,T.Text=N,T.Header=O,T.Footer=j,T.ImgOverlay=P;t.a=T},1361:function(e,t,a){},1367:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(411),i=a(115),c=a(68),s=a(1200),d=a(1199),o=a(565),m=a(548),u=a(30),p=a(1196),f=a(1205),x=a.n(f),b=a(413),h=a.n(b),v=a(1207),y=a.n(v),g={paginationSize:4,alwaysShowAllBtns:!0,withFirstAndLast:!1,firstPageText:"First",prePageText:"Back",nextPageText:"Next",lastPageText:"Last",nextPageTitle:"First page",prePageTitle:"Pre page",firstPageTitle:"Next page",lastPageTitle:"Last page",showTotal:!0,paginationTotalRenderer:function(e,t,a){return n.a.createElement("span",{className:"react-bootstrap-table-pagination-total ml-3"},"Showing ",e," to ",t," of ",a," Results")},disablePageTitle:!0,sizePerPageList:[{text:"10",value:10},{text:"20",value:20},{text:"30",value:30},{text:"40",value:40},{text:"50",value:50},{text:"100",value:100}]},E=a(1188),w=a(1170),N=[{dataField:"id",text:"ID",headerStyle:{minWidth:"50px",width:"50px"}},{dataField:"aliasNames",text:"Name",headerStyle:{minWidth:"50px",width:"50px"}},{dataField:"countryId",text:"Country ID",headerStyle:{minWidth:"50px",width:"50px"}},{dataField:"dataUrl",text:"Data URL",style:{width:"15rem"},headerStyle:{minWidth:"50px",width:"50px"}},{dataField:"dob",text:"Date Of Birth",style:{width:"100px"},headerStyle:{minWidth:"50px",width:"100px"}},{dataField:"excerpts",text:"Excrepts",headerStyle:{minWidth:"50px",width:"50px"},formatter:function(e,t){return n.a.createElement("div",{className:"text-ellipsis"},n.a.createElement(E.a,{placement:"left",overlay:n.a.createElement(w.a,{id:"tooltip-left"},t.excerpts)},n.a.createElement("span",null,t.excerpts)))}},{dataField:"gender",text:"Gender",headerStyle:{minWidth:"50px",width:"50px"}},{dataField:"resultTitle",text:"Title State",headerStyle:{minWidth:"50px",width:"50px"},formatter:function(e,t){return n.a.createElement("div",{className:"text-ellipsis"},n.a.createElement(E.a,{placement:"left",overlay:n.a.createElement(w.a,{id:"tooltip-left"},t.resultTitle)},n.a.createElement("span",null,t.resultTitle)))}},{dataField:"sourceAgency",text:"Source",headerStyle:{minWidth:"50px",width:"50px"}},{dataField:"sourceEntity",text:"Source Entity",headerStyle:{minWidth:"50px",width:"50px"}}];a(1361);function O(e){var t=e.data,a=void 0===t?[]:t;return n.a.createElement("div",null,n.a.createElement(x.a,{bootstrap4:!0,keyField:"mfe_id",data:a,columns:N,pagination:h()(g),wrapperClasses:"table-responsive",classes:"table table-vertical-center header-class",bordered:!1,condensed:!0,responsive:!0,overlay:y()({spinner:!0,background:"black"}),headerClasses:"header-class",striped:!0,hover:!0}))}var j={name:"",type:""},P=c.d().shape({name:c.f().required(),type:c.f().required().oneOf(["individual","entity"])});t.default=Object(u.b)((function(e){return{verification:e.verification}}))((function(e){var t=e.verification;console.log("IN GUI",t);var a=Object(u.d)();return Object(r.useEffect)((function(){a(Object(p.a)({}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{className:"reportfilter-Ctr"},n.a.createElement(s.a.Body,{className:"pt-4 pb-4"},n.a.createElement(i.c,{enableReinitialize:!0,validationSchema:P,initialValues:j,onSubmit:function(e,t){var r=t.resetForm,n={api_list:[{key:"world_watch_risk_screening",value:{name:e.name,type:e.type}}]};a(Object(p.c)(n)),r()}},(function(e){e.values,e.setFieldValue,e.handleBlur;return n.a.createElement("div",{className:"userform-Ctr"},n.a.createElement(i.b,null,n.a.createElement(d.a,{gutter:[20,20]},n.a.createElement(o.a,{xs:6,sm:6,md:6,lg:6,xl:6},n.a.createElement(i.a,{name:"name",readonly:!1,component:l.a,placeholder:"Enter Name",label:"Name",type:"text"})),n.a.createElement(o.a,{xs:6,sm:6,md:6,lg:6,xl:6},n.a.createElement(i.a,{name:"type",readonly:!1,component:l.a,placeholder:"Enter type(individual/entity)",label:"Type",type:"text"}))),n.a.createElement("div",{className:"text-left"},n.a.createElement(d.a,null,n.a.createElement(o.a,{xs:6,sm:6,md:6,lg:6,xl:6},n.a.createElement("div",{className:"w-100",style:{textAlign:"right"}},n.a.createElement(m.a,{type:"submit",className:"w-50"},"Search"))),n.a.createElement(o.a,{xs:6,sm:6,md:6,lg:6,xl:6},n.a.createElement("div",{className:"w-100",style:{textAlign:"left"}},n.a.createElement(m.a,{className:"w-50"},"Clear")))))))})))),t&&t.verification_response instanceof Array&&t.verification_response.length>0&&n.a.createElement(s.a,null,n.a.createElement(s.a.Body,null,n.a.createElement(O,{data:t.verification_response[0].world_watch_risk_screening.result.response.negativeMedia[0].matchDetails}))))}))}}]);
//# sourceMappingURL=12.10627cb5.chunk.js.map