(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[36],{1155:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),n=t(387),c=t(171),o=t(252),l=t(932),i=t(930),d=t(510),u=t(501),m=t(48),f=t(928),g=t(929),b={domain:""},v=o.c().shape({domain:o.e().required()}),y=[{Header:"Domain",accessor:"message.result.domain"},{Header:"Name",accessor:"message.result.name"},{Header:"Parrent Domain",accessor:"message.result.parent.domain"},{Header:"Industry Category",accessor:"message.result.category.industry"},{Header:"Industry Group",accessor:"message.result.category.industryGroup"},{Header:"NAICS Code",accessor:"message.result.category.naicsCode"},{Header:"Sector",accessor:"message.result.category.sector"},{Header:"Sic Code",accessor:"message.result.category.sicCode"},{Header:"Sub Industry",accessor:"message.result.category.subIndustry"},{Header:"Description",accessor:"message.result.description"},{Header:"City",accessor:"message.result.geo.city"},{Header:"Country",accessor:"message.result.geo.country"},{Header:"Country Code",accessor:"message.result.geo.countryCode"},{Header:"Latitude",accessor:"message.result.geo.lat"},{Header:"Logitude",accessor:"message.result.geo.lng"},{Header:"Postal Code",accessor:"message.result.geo.postalCode"},{Header:"State",accessor:"message.result.geo.state"},{Header:"State Code",accessor:"message.result.geo.stateCode"},{Header:"Street Name",accessor:"message.result.geo.streetName"},{Header:"Legal Name",accessor:"message.result.legalName"},{Header:"Facebook Handle",accessor:"message.result.facebook.handle"},{Header:"LinkdIn Handle",accessor:"message.result.linkedin.handle"},{Header:"Twitter Handle",accessor:"message.result.twitter.handle"},{Header:"Location",accessor:"message.result.location"},{Header:"Logo",accessor:"message.result.logo"},{Header:"Alexa Global Rank",accessor:"message.result.metrics.alexaGlobalRank"},{Header:"Alexa US Rank",accessor:"message.result.metrics.alexaUsRank"},{Header:"Google Rank",accessor:"message.result.metrics.googleRank"},{Header:"Number of Employees",accessor:"message.result.metrics.employees"},{Header:"Employee Range",accessor:"message.result.metrics.employeesRange"},{Header:"Estimated Annual Revenue",accessor:"message.result.metrics.estimatedAnnualRevenue"},{Header:"Anual Revenue",accessor:"message.result.metrics.annualRevenue"},{Header:"Fiscal Year End",accessor:"message.result.metrics.fiscalYearEnd"},{Header:"Tine Zone",accessor:"message.result.timeZone"}];a.default=Object(m.b)((function(e){return{verification:e.verification}}))((function(e){var a=e.verification;console.log("IN GUI",a);var t=Object(m.c)();return Object(r.useEffect)((function(){t(Object(f.a)({}))}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{className:"reportfilter-Ctr"},s.a.createElement(l.a.Body,{className:"pt-4 pb-4"},s.a.createElement(c.c,{enableReinitialize:!0,validationSchema:v,initialValues:b,onSubmit:function(e,a){var r=a.resetForm;console.log(e);var s={api_list:[{key:"verify_domain",value:{domain:e.domain}}]};t(Object(f.c)(s)),r()}},(function(e){e.values,e.setFieldValue,e.handleBlur;return s.a.createElement("div",{className:"userform-Ctr"},s.a.createElement(c.b,null,s.a.createElement(i.a,{gutter:[20,20]},s.a.createElement(d.a,{xs:12,sm:12,md:12,lg:12,xl:12},s.a.createElement(c.a,{name:"domain",readonly:!1,component:n.a,placeholder:"Enter Domain",label:"Domain",type:"text"}))),s.a.createElement("div",{className:"text-left"},s.a.createElement(i.a,null,s.a.createElement(d.a,{xs:6,sm:6,md:6,lg:6,xl:6},s.a.createElement("div",{className:"w-100",style:{textAlign:"right"}},s.a.createElement(u.a,{type:"submit",className:"w-50"},"Search"))),s.a.createElement(d.a,{xs:6,sm:6,md:6,lg:6,xl:6},s.a.createElement("div",{className:"w-100",style:{textAlign:"left"}},s.a.createElement(u.a,{className:"w-50"},"Clear")))))))})))),a&&a.verification_response instanceof Array&&a.verification_response.length>0&&s.a.createElement(l.a,null,s.a.createElement(l.a.Header,null,s.a.createElement("h6",null,"Response")),s.a.createElement(l.a.Body,null,s.a.createElement("div",{className:"App"},s.a.createElement(g.a,{column:y,data:a.verification_response[0].verify_domain})))))}))},927:function(e,a,t){"use strict";var r=t(4),s=t(0),n=t.n(s),c=t(28),o=t.n(c);a.a=function(e){return n.a.forwardRef((function(a,t){return n.a.createElement("div",Object(r.a)({},a,{ref:t,className:o()(a.className,e)}))}))}},928:function(e,a,t){"use strict";t.d(a,"c",(function(){return s})),t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return c}));var r=t(97),s=function(e){return console.log("Verification FETCH ",e),{type:r.f,body:e}},n=function(){return console.log("Verification INIT"),{type:r.f,body:{}}},c=function(e){return console.log("Bulk Verification INIT"),{type:r.c,body:e}}},929:function(e,a,t){"use strict";var r=t(0),s=t.n(r),n=t(4),c=t(11),o=t(28),l=t.n(o),i=t(30),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=s.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.striped,u=e.bordered,m=e.borderless,f=e.hover,g=e.size,b=e.variant,v=e.responsive,y=Object(c.a)(e,d),p=Object(i.a)(t,"table"),E=l()(r,p,b&&p+"-"+b,g&&p+"-"+g,o&&p+"-striped",u&&p+"-bordered",m&&p+"-borderless",f&&p+"-hover"),H=s.a.createElement("table",Object(n.a)({},y,{className:E,ref:a}));if(v){var N=p+"-responsive";return"string"===typeof v&&(N=N+"-"+v),s.a.createElement("div",{className:N},H)}return H})),m=t(56);function f(e){return Object.keys(e).reduce((function(a,t){return function e(a,t,r){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=[s,t].filter((function(e){return e})).join(".");return"object"===typeof r&&null!=r&&"undefined"!==typeof r?Object.keys(r).reduce((function(a,t){return e(a,t,r[t],n)}),a):Object.assign(a,Object(m.a)({},n,r))}(a,t,e[t])}),{})}function g(e){var a=e.data,t=void 0===a?{}:a,r=e.column,n=void 0===r?[]:r,c=f(t);return console.log(c,"flat"),s.a.createElement("div",{style:{height:"40vh",overflow:"auto"}},s.a.createElement(u,null,s.a.createElement("thead",null,s.a.createElement("tr",{style:{color:"#B5B5C3"}},s.a.createElement("th",null,"Key"),s.a.createElement("th",null,"Value"))),s.a.createElement("tbody",null,n.map((function(e,a){var t,r,n;return s.a.createElement("tr",{key:a},s.a.createElement("td",null,null!==(t=e.Header)&&void 0!==t?t:""),s.a.createElement("td",{style:{maxWidth:"60%",minWidth:"20rem",width:"50vw"}},String(null!==(r=c[null!==(n=e.accessor)&&void 0!==n?n:""])&&void 0!==r?r:"NA")))})))))}t.d(a,"a",(function(){return g}))},930:function(e,a,t){"use strict";var r=t(4),s=t(11),n=t(28),c=t.n(n),o=t(0),l=t.n(o),i=t(30),d=["bsPrefix","className","noGutters","as"],u=["xl","lg","md","sm","xs"],m=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.noGutters,m=e.as,f=void 0===m?"div":m,g=Object(s.a)(e,d),b=Object(i.a)(t,"row"),v=b+"-cols",y=[];return u.forEach((function(e){var a,t=g[e];delete g[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&y.push(""+v+r+"-"+a)})),l.a.createElement(f,Object(r.a)({ref:a},g,{className:c.a.apply(void 0,[n,b,o&&"no-gutters"].concat(y))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},a.a=m},932:function(e,a,t){"use strict";var r=t(4),s=t(11),n=t(28),c=t.n(n),o=t(0),l=t.n(o),i=t(30),d=t(116),u=t(927),m=l.a.createContext(null);m.displayName="CardContext";var f=m,g=["bsPrefix","className","variant","as"],b=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.variant,d=e.as,u=void 0===d?"img":d,m=Object(s.a)(e,g),f=Object(i.a)(t,"card-img");return l.a.createElement(u,Object(r.a)({ref:a,className:c()(o?f+"-"+o:f,n)},m))}));b.displayName="CardImg",b.defaultProps={variant:null};var v=b,y=["bsPrefix","className","bg","text","border","body","children","as"],p=Object(u.a)("h5"),E=Object(u.a)("h6"),H=Object(d.a)("card-body"),N=Object(d.a)("card-title",{Component:p}),j=Object(d.a)("card-subtitle",{Component:E}),h=Object(d.a)("card-link",{Component:"a"}),x=Object(d.a)("card-text",{Component:"p"}),O=Object(d.a)("card-header"),C=Object(d.a)("card-footer"),R=Object(d.a)("card-img-overlay"),k=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,d=e.bg,u=e.text,m=e.border,g=e.body,b=e.children,v=e.as,p=void 0===v?"div":v,E=Object(s.a)(e,y),N=Object(i.a)(t,"card"),j=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:N+"-header"}}),[N]);return l.a.createElement(f.Provider,{value:j},l.a.createElement(p,Object(r.a)({ref:a},E,{className:c()(n,N,d&&"bg-"+d,u&&"text-"+u,m&&"border-"+m)}),g?l.a.createElement(H,null,b):b))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=v,k.Title=N,k.Subtitle=j,k.Body=H,k.Link=h,k.Text=x,k.Header=O,k.Footer=C,k.ImgOverlay=R;a.a=k}}]);