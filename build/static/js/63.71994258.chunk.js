(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[63],{1142:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(0),i=a.n(n),r=a(35),l=a(53),s=a(936),c=a.n(s),o=a(937),m=a.n(o),d=a(32),p=a.n(d),b=a(24),g=a(922),u=a(908),h=[{id:1,package_name:"in.itcstore",menu:"Incident Dashboard,Incident Report,Tickets",filter:"channel,category,publisher,country,brand,priority"},{id:2,package_name:"itc-wd-app",menu:"Incident Dashboard,Incident Report ,Tickets,Add User,Add Package,User Package Mapping,User Management,Verification,Address,Bank Verification,Black List Email,Black List,Company Search,Court Cases,Data Check,Domain Detail,Driving License,Email,Location,Number Data Check,Pan Card Check,Pan Gst Check,Passport Check,Phone,Policy,Vehicle Detail,World Watch Streeming,Bulk Verification",filter:"web_campaign,web_channel,web_creative_id,web_system_domain,web_placement_id,web_publisher_id,web_fraud_category,web_fraud_sub_category,web_placement_type,web_intermediate_seller,web_adstxt_exists"}],w=[{dataField:"package_name",text:"Package Name",style:{width:"10px"},headerStyle:{minWidth:"200px",width:"100px"}},{dataField:"menu",text:"Menu",style:{width:"10px"},headerStyle:{minWidth:"100px",width:"100px"},formatter:function(e,t){return i.a.createElement("div",{className:"text-ellipsis-250",style:{width:"250px"}},i.a.createElement(g.a,{placement:"top",overlay:i.a.createElement(u.a,{id:"tooltip-top"},t.menu)},i.a.createElement("span",null,t.menu)))}},{dataField:"filter",text:"Subject",style:{width:"10px"},headerStyle:{minWidth:"250px",width:"100px"},formatter:function(e,t){return i.a.createElement("div",{className:"text-ellipsis-50",style:{width:"200px"}},i.a.createElement(g.a,{placement:"top",overlay:i.a.createElement(u.a,{id:"tooltip-top"},t.filter)},i.a.createElement("span",null,t.filter)))}},{text:"Action",formatter:function(e,t){return i.a.createElement("div",null,i.a.createElement(r.b,{to:"edit",className:"btn btn-icon btn-light btn-sm mx-3"},i.a.createElement("span",{className:"svg-icon svg-icon-md svg-icon-primary"},i.a.createElement(p.a,{src:Object(b.b)("/media/svg/icons/Communication/Write.svg")}))),i.a.createElement(r.b,{className:"btn btn-icon btn-light btn-sm"},i.a.createElement("span",{className:"svg-icon svg-icon-md svg-icon-danger"},i.a.createElement(p.a,{src:Object(b.b)("/media/svg/icons/General/Trash.svg")}))))}}],x={paginationSize:4,alwaysShowAllBtns:!0,withFirstAndLast:!1,firstPageText:"First",prePageText:"Back",nextPageText:"Next",lastPageText:"Last",nextPageTitle:"First page",prePageTitle:"Pre page",firstPageTitle:"Next page",lastPageTitle:"Last page",showTotal:!0,paginationTotalRenderer:function(e,t,a){return i.a.createElement("span",{className:"react-bootstrap-table-pagination-total ml-3"},"Showing ",e," to ",t," of ",a," Results")},disablePageTitle:!0,sizePerPageList:[{text:"10",value:10},{text:"20",value:20}]};function f(){return i.a.createElement("div",{className:"card card-custom"},i.a.createElement(l.b,null,i.a.createElement(l.d,{title:"User Package Mapping"},i.a.createElement(l.e,null,i.a.createElement("div",{className:"card-toolbar"},i.a.createElement(r.b,{to:"/package-user",className:"btn btn-primary font-weight-bolder font-size-sm mr-3"},"Create")))),i.a.createElement(l.c,null,i.a.createElement("div",{className:"App"},i.a.createElement(c.a,{bootstrap4:!0,keyField:"id",data:h,columns:w,pagination:m()(x),wrapperClasses:"table-responsive",classes:"table table-head-custom table-vertical-center overflow-hidden",bordered:!1})))))}}}]);