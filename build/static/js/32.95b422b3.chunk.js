(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[32],{1151:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),c=a(387),n=a(171),i=a(252),o=a(932),l=a(930),u=a(510),d=a(501),m=a(48),p=a(928),f=a(929),b={ipdetail:""},v=i.c().shape({ipdetail:i.e().required()}),_=[{Header:"City",accessor:"result.source_output.ip_location_details.ip_city"},{Header:"Country Code",accessor:"result.source_output.ip_location_details.ip_country_code"},{Header:"Latitude",accessor:"result.source_output.ip_location_details.ip_latitude"},{Header:"Longitude",accessor:"result.source_output.ip_location_details.ip_longitude"},{Header:"Region",accessor:"result.source_output.ip_location_details.ip_region"},{Header:"Region",accessor:"result.source_output.ip_location_details.ip_region"},{Header:"Time Zone",accessor:"result.source_output.ip_location_details.ip_timezone"},{Header:"Is Bot",accessor:"result.source_output.is_bot"},{Header:"Is Recent Abuse",accessor:"result.source_output.is_recent_abuse"},{Header:"Is Success",accessor:"result.source_output.is_success"},{Header:"ASN",accessor:"result.source_output.service_details.ASN_details"},{Header:"Connection Details",accessor:"result.source_output.service_details.connection_details"},{Header:"HOST IP",accessor:"result.source_output.service_details.host_ip"},{Header:"Is Crawler",accessor:"result.source_output.service_details.is_crawler"},{Header:"Is Mobile",accessor:"result.source_output.service_details.is_mobile"},{Header:"ISP",accessor:"result.source_output.service_details.isp_details"},{Header:"ISP Details",accessor:"result.source_output.service_details.org_details"},{Header:"Is TOR Active",accessor:"result.source_output.vpn_details.is_active_tor"},{Header:"Is VPN Active",accessor:"result.source_output.vpn_details.is_active_vpn"}];t.default=Object(m.b)((function(e){return{verification:e.verification}}))((function(e){var t=e.verification,a=Object(m.c)();return Object(r.useEffect)((function(){a(Object(p.a)({}))}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{className:"reportfilter-Ctr"},s.a.createElement(o.a.Body,{className:"pt-4 pb-4"},s.a.createElement(n.c,{enableReinitialize:!0,validationSchema:v,initialValues:b,onSubmit:function(e,t){var r=t.resetForm,s={api_list:[{key:"ip_address_details",value:{device_ip:e.ipdetail}}]};a(Object(p.c)(s)),r()}},(function(e){e.values,e.setFieldValue,e.handleBlur;return s.a.createElement("div",{className:"userform-Ctr"},s.a.createElement(n.b,null,s.a.createElement(l.a,{gutter:[20,20]},s.a.createElement(u.a,{xs:12,sm:12,md:12,lg:12,xl:12},s.a.createElement(n.a,{readonly:!1,name:"ipdetail",component:c.a,placeholder:"Enter IP",label:"IP Deatil",type:"text"}))),s.a.createElement("div",{className:"text-left"},s.a.createElement(l.a,null,s.a.createElement(u.a,{xs:6,sm:6,md:6,lg:6,xl:6},s.a.createElement("div",{className:"w-100",style:{textAlign:"right"}},s.a.createElement(d.a,{type:"submit",className:"w-50"},"Search"))),s.a.createElement(u.a,{xs:6,sm:6,md:6,lg:6,xl:6},s.a.createElement("div",{className:"w-100",style:{textAlign:"left"}},s.a.createElement(d.a,{className:"w-50"},"Clear")))))))})))),t&&t.verification_response instanceof Array&&t.verification_response.length>0&&s.a.createElement(o.a,null,s.a.createElement(o.a.Header,null,s.a.createElement("h6",null,"Response")),s.a.createElement(o.a.Body,null,s.a.createElement("div",{className:"App"},s.a.createElement(f.a,{column:_,data:t.verification_response[0].ip_address_details})))))}))},927:function(e,t,a){"use strict";var r=a(4),s=a(0),c=a.n(s),n=a(28),i=a.n(n);t.a=function(e){return c.a.forwardRef((function(t,a){return c.a.createElement("div",Object(r.a)({},t,{ref:a,className:i()(t.className,e)}))}))}},928:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return n}));var r=a(97),s=function(e){return console.log("Verification FETCH ",e),{type:r.f,body:e}},c=function(){return console.log("Verification INIT"),{type:r.f,body:{}}},n=function(e){return console.log("Bulk Verification INIT"),{type:r.c,body:e}}},929:function(e,t,a){"use strict";var r=a(0),s=a.n(r),c=a(4),n=a(11),i=a(28),o=a.n(i),l=a(30),u=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.striped,d=e.bordered,m=e.borderless,p=e.hover,f=e.size,b=e.variant,v=e.responsive,_=Object(n.a)(e,u),E=Object(l.a)(a,"table"),y=o()(r,E,b&&E+"-"+b,f&&E+"-"+f,i&&E+"-striped",d&&E+"-bordered",m&&E+"-borderless",p&&E+"-hover"),g=s.a.createElement("table",Object(c.a)({},_,{className:y,ref:t}));if(v){var j=E+"-responsive";return"string"===typeof v&&(j=j+"-"+v),s.a.createElement("div",{className:j},g)}return g})),m=a(56);function p(e){return Object.keys(e).reduce((function(t,a){return function e(t,a,r){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=[s,a].filter((function(e){return e})).join(".");return"object"===typeof r&&null!=r&&"undefined"!==typeof r?Object.keys(r).reduce((function(t,a){return e(t,a,r[a],c)}),t):Object.assign(t,Object(m.a)({},c,r))}(t,a,e[a])}),{})}function f(e){var t=e.data,a=void 0===t?{}:t,r=e.column,c=void 0===r?[]:r,n=p(a);return console.log(n,"flat"),s.a.createElement("div",{style:{height:"40vh",overflow:"auto"}},s.a.createElement(d,null,s.a.createElement("thead",null,s.a.createElement("tr",{style:{color:"#B5B5C3"}},s.a.createElement("th",null,"Key"),s.a.createElement("th",null,"Value"))),s.a.createElement("tbody",null,c.map((function(e,t){var a,r,c;return s.a.createElement("tr",{key:t},s.a.createElement("td",null,null!==(a=e.Header)&&void 0!==a?a:""),s.a.createElement("td",{style:{maxWidth:"60%",minWidth:"20rem",width:"50vw"}},String(null!==(r=n[null!==(c=e.accessor)&&void 0!==c?c:""])&&void 0!==r?r:"NA")))})))))}a.d(t,"a",(function(){return f}))},930:function(e,t,a){"use strict";var r=a(4),s=a(11),c=a(28),n=a.n(c),i=a(0),o=a.n(i),l=a(30),u=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],m=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.noGutters,m=e.as,p=void 0===m?"div":m,f=Object(s.a)(e,u),b=Object(l.a)(a,"row"),v=b+"-cols",_=[];return d.forEach((function(e){var t,a=f[e];delete f[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&_.push(""+v+r+"-"+t)})),o.a.createElement(p,Object(r.a)({ref:t},f,{className:n.a.apply(void 0,[c,b,i&&"no-gutters"].concat(_))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m},932:function(e,t,a){"use strict";var r=a(4),s=a(11),c=a(28),n=a.n(c),i=a(0),o=a.n(i),l=a(30),u=a(116),d=a(927),m=o.a.createContext(null);m.displayName="CardContext";var p=m,f=["bsPrefix","className","variant","as"],b=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.variant,u=e.as,d=void 0===u?"img":u,m=Object(s.a)(e,f),p=Object(l.a)(a,"card-img");return o.a.createElement(d,Object(r.a)({ref:t,className:n()(i?p+"-"+i:p,c)},m))}));b.displayName="CardImg",b.defaultProps={variant:null};var v=b,_=["bsPrefix","className","bg","text","border","body","children","as"],E=Object(d.a)("h5"),y=Object(d.a)("h6"),g=Object(u.a)("card-body"),j=Object(u.a)("card-title",{Component:E}),O=Object(u.a)("card-subtitle",{Component:y}),N=Object(u.a)("card-link",{Component:"a"}),h=Object(u.a)("card-text",{Component:"p"}),x=Object(u.a)("card-header"),H=Object(u.a)("card-footer"),C=Object(u.a)("card-img-overlay"),I=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,u=e.bg,d=e.text,m=e.border,f=e.body,b=e.children,v=e.as,E=void 0===v?"div":v,y=Object(s.a)(e,_),j=Object(l.a)(a,"card"),O=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return o.a.createElement(p.Provider,{value:O},o.a.createElement(E,Object(r.a)({ref:t},y,{className:n()(c,j,u&&"bg-"+u,d&&"text-"+d,m&&"border-"+m)}),f?o.a.createElement(g,null,b):b))}));I.displayName="Card",I.defaultProps={body:!1},I.Img=v,I.Title=j,I.Subtitle=O,I.Body=g,I.Link=N,I.Text=h,I.Header=x,I.Footer=H,I.ImgOverlay=C;t.a=I}}]);