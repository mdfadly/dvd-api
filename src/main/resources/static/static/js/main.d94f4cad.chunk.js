(this["webpackJsonpdvd-app"]=this["webpackJsonpdvd-app"]||[]).push([[0],{535:function(e,t,a){},536:function(e,t,a){},537:function(e,t,a){},542:function(e,t,a){},547:function(e,t,a){},622:function(e,t,a){},623:function(e,t,a){},828:function(e,t,a){},829:function(e,t,a){"use strict";a.r(t);var n=a(6),s=a(0),i=a.n(s),l=a(19),c=a.n(l),r=(a(535),a(865)),o=a(862),d=a(132),h=(a(536),a.p+"static/media/download.981ea63b.jpg"),u=a(417),m=(a(537),function(e){var t=e.text,a=e.icon;return Object(n.jsx)(u.a,{className:"custom_btn",endIcon:a?Object(n.jsx)("div",{className:"btn_icon_container",children:a}):null,children:Object(n.jsx)("span",{className:"btn_text",children:t})})}),j=a(505),b=a.n(j),g=function(){return Object(n.jsxs)("div",{className:"sidebar container_shadow",children:[Object(n.jsx)("div",{className:"app_name",children:Object(n.jsx)(d.a,{className:"name",children:"DVD Rental"})}),Object(n.jsx)("figure",{className:"app_image",children:Object(n.jsx)("img",{src:h,alt:""})}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"button_container",children:Object(n.jsx)(m,{text:"Rent",icon:Object(n.jsx)(b.a,{})})})]})},f=a(867),x=a(868),p=(a(541),a(176)),O=a(41),v=a(855),C=(a(542),Object(O.f)((function(e){var t,a=null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.pathname;return Object(n.jsxs)(f.a,{expand:"lg",sticky:"top",className:"header",children:[Object(n.jsx)(x.a.Link,{as:p.b,to:"/",className:"header_navlink",children:Object(n.jsx)(f.a.Brand,{className:"header_home",children:Object(n.jsx)(v.a,{})})}),Object(n.jsx)(f.a.Toggle,{}),Object(n.jsx)(f.a.Collapse,{children:Object(n.jsxs)(x.a,{children:[Object(n.jsx)(x.a.Link,{as:p.b,to:"/",className:"/"===a?"header_link_active":"header_link",children:"Actor"}),Object(n.jsx)(x.a.Link,{as:p.b,to:"/film",className:"/film"===a?"header_link_active":"header_link",children:"Film"})]})})]})}))),N=(a(547),function(){return Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsx)("div",{className:"footer_left",children:Object(n.jsx)(d.a,{className:"footer_name",children:"Dvd Rental"})}),Object(n.jsx)("div",{className:"footer_right",children:Object(n.jsxs)(d.a,{className:"footer_copyright",children:["Design and Developed by "," ",Object(n.jsx)("a",{href:"/",target:"_blank",children:"Mochamad Dwi Fadly"}),Object(n.jsx)("br",{}),"Clone idea from "," ",Object(n.jsx)("a",{href:"https:///themeforest.net/user/travonline",target:"_blank",children:"Travonline"})]})})]})}),y=a(177),F=a(272),S=a(273),k=a(172),I=a(287),D=a(285),R=a(436),w=a(348),A=a.n(w),P=a(866),T=a(274),_=a(513),B=a.n(_),Y=a(512),L=a.n(Y),U=a(511),G=a.n(U).a.create({baseURL:"https://dvdapprental.herokuapp.com/api/"}),q=(a(321),Object(R.a)({table:{minWidth:650,"& thead th":{fontWeight:"600",color:"white",backroundColor:"#ffc500"}}}),a(321));var E=function(e){var t=e.allData,a=e.allColumns,s=e.startEditing,i=e.handleRemove,l=e.formData,c=e.title;return Object(n.jsx)(P.a,{component:T.a,children:Object(n.jsx)(A.a,{columns:a,data:t,title:c,actions:[{icon:"edit",tooltip:"Edit User",onClick:function(e,t){return s("actor"===l?t.actorId:t.filmId)}},{icon:"delete",tooltip:"Delete User",onClick:function(e,t){return i("actor"===l?t.actorId:t.filmId)}}],components:{Action:function(e){return"edit"===e.action.icon?Object(n.jsx)(u.a,{children:Object(n.jsx)(L.a,{style:{color:"#ffc500"},onClick:function(t){return e.action.onClick(t,e.data)}})}):"delete"===e.action.icon?Object(n.jsx)(u.a,{style:{color:"#ff5252"},children:Object(n.jsx)(B.a,{onClick:function(t){return e.action.onClick(t,e.data)}})}):void 0}},options:{actionsColumnIndex:-1,exportButton:!0,exportCsv:function(e,t){var a=e.filter((function(e){return!1!==e.export})),n=t.map((function(t){return e.map((function(e){if("function"===typeof e.customExport)return e.customExport(t);var a=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e[t.field];return t.lookup&&a&&(n=t.lookup[n]),n}(t,e);return Array.isArray(a)&&(a=a.join(",")),a}))}));new q.CsvBuilder("filename_.csv").setColumns(a.map((function(e){return e.title}))).addRows(n).exportFile()},exportAllData:!0}})})},M=(a(622),a(433)),W=a(74),J=a.n(W),V=a(283),z=a.n(V),H=a(282),K=a.n(H),Q=function(e){Object(I.a)(a,e);var t=Object(D.a)(a);function a(e){var n;return Object(F.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(y.a)({},e.target.name,e.target.value))},n.handleSubmitSave=function(e){var t={firstName:n.state.firstName,lastName:n.state.lastName};J.a.fire({icon:"question",text:"Your input data is correct?",showCancelButton:!0,confirmButtonText:"Save"}).then((function(e){e.isConfirmed&&("Add"===n.state.stateForm?G.post("actor",t).then((function(e){console.log(e),J.a.fire({icon:"success",title:"Successfully!",text:"You submit a new Actor!"}).then((function(e){n.setState({firstName:"",lastName:"",conditions:!0})}))})):G.put("actor/id/"+n.state.actorId,t).then((function(e){console.log(e),J.a.fire({icon:"success",title:"Successfully!",text:"You submit a new Actor!"}).then((function(e){n.setState({firstName:"",lastName:"",conditions:!0,stateForm:"Add"})}))})))}))},n.handleRemove=function(e){console.log(e),J.a.fire({icon:"warning",text:"Do you want to delete this data?",showDenyButton:!0,confirmButtonText:"Yes",denyButtonText:"Cancel"}).then((function(t){t.isConfirmed?G.delete("actor/id/"+e).then((function(e){console.log(e),J.a.fire({icon:"success",title:"Successfully!",text:"You submit a new Actor!"}).then((function(e){n.setState({firstName:"",lastName:"",conditions:!0,stateForm:"Add"})}))})).catch((function(e){var t=this;e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.header),J.a.fire({icon:"error",title:"Oops...",text:e.response.data.message}).then((function(e){t.setState({firstName:"",lastName:"",conditions:!0,stateForm:"Add"})})))})):t.isDenied}))},n.handleBackToAdd=function(){n.setState({firstName:"",lastName:"",stateForm:"Add"})},n.handleUpdate=function(e){console.log(e),G.get("actor/id/"+e).then((function(e){console.log(e),n.setState({actorId:e.data.actorId,firstName:e.data.firstName,lastName:e.data.lastName,stateForm:"Update"})})),n.setState({editIdx:e})},n.handleSearch=function(e){n.setState(Object(y.a)({},e.target.name,e.target.value)),console.log(e.target.value),""!==e.target.value?G.get("actor/search/"+e.target.value).then((function(e){console.log(e),n.setState({actors:e.data})})).catch((function(e){e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.header)),this.findActor()})):n.findActor()},n.state={actors:[],actorId:"",firstName:"",lastName:"",searchActor:"",editIdx:-1,conditions:!1,stateForm:"Add",columns:[{field:"actorId",title:"Actor Id"},{field:"firstName",title:"First Name"},{field:"lastName",title:"Last Name"},{field:"lastUpdate",title:"Last Update",render:function(e){return K()(e.lastUpdate,"mmmm dS, yyyy")}}]},n.handleChange=n.handleChange.bind(Object(k.a)(n)),n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){this.findActor()}},{key:"componentDidUpdate",value:function(e,t,a){this.state.conditions&&(this.findActor(),this.setState({conditions:!1}))}},{key:"findActor",value:function(){var e=this;G.get("actor").then((function(t){console.log(t),e.setState({actors:t.data})}))}},{key:"render",value:function(){var e=this;Object(R.a)((function(e){return{card:{width:500,maxWidth:300,margin:"auto",transition:"0.3s",boxShadow:"0 8px 40px -12px rgba(0,0,0,0.3)","&:hover":{boxShadow:"0 16px 70px -12.125px rgba(0,0,0,0.3)"}}}}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o.a,{container:!0,className:"section",children:Object(n.jsx)(o.a,{item:!0,className:"section_title",xs:12,children:Object(n.jsx)(d.a,{variant:"h6",children:"Actor Page"})})}),Object(n.jsx)("br",{}),Object(n.jsxs)(o.a,{container:!0,className:"",children:[Object(n.jsxs)(d.a,{style:{alignItems:"center"},children:["Form ",this.state.stateForm]}),Object(n.jsx)("br",{}),Object(n.jsx)(T.a,{style:{padding:16,width:"100%"},children:Object(n.jsxs)(o.a,{container:!0,alignItems:"flex-start",spacing:2,children:[Object(n.jsx)(o.a,{item:!0,xs:6,children:Object(n.jsx)(M.a,{style:{width:"100%"},id:"standard-basic",label:"First Name",name:"firstName",required:!0,value:this.state.firstName,onChange:this.handleChange})}),Object(n.jsx)(o.a,{item:!0,xs:6,children:Object(n.jsx)(M.a,{style:{width:"100%"},id:"standard-basic",label:"Last Name",name:"lastName",required:!0,value:this.state.lastName,onChange:this.handleChange})}),Object(n.jsx)(o.a,{item:!0,xs:12,style:{marginTop:16},children:Object(n.jsxs)(u.a,{variant:"contained",color:"primary",disabled:!this.state.firstName||!this.state.lastName,style:{width:"100%"},onClick:this.handleSubmitSave,children:[this.state.stateForm," Actor"]})}),function(){if("Update"===e.state.stateForm)return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(o.a,{item:!0,xs:12,children:Object(n.jsxs)(u.a,{variant:"contained",color:"secondary",style:{width:"100%"},onClick:e.handleBackToAdd,children:[Object(n.jsx)(z.a,{})," Back to add data"]})})})}()]})})]}),Object(n.jsx)("br",{}),Object(n.jsx)(o.a,{container:!0,className:"",children:Object(n.jsx)(o.a,{item:!0,xs:8,children:Object(n.jsx)(d.a,{children:"List Actor"})})}),Object(n.jsx)("br",{}),Object(n.jsx)(o.a,{container:!0,className:"",children:Object(n.jsx)(E,{allData:this.state.actors,allColumns:this.state.columns,startEditing:this.handleUpdate,handleRemove:this.handleRemove,formData:"actor",title:"Table Actor"})})]})}}]),a}(s.Component),X=a(516),Z=(a(623),a(438)),$=a(357),ee=a.n($),te=a(514),ae=a.n(te),ne=a(515),se=a.n(ne),ie=a(421),le=a(841),ce=a(435),re=a(500),oe=function(e){Object(I.a)(a,e);var t=Object(D.a)(a);function a(e){var n;return Object(F.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(y.a)({},e.target.name,e.target.value))},n.handleSubmitSave=function(e){var t={title:n.state.title,description:n.state.description,languageId:n.state.languageId,length:n.state.length,rating:n.state.rating,releaseYear:n.state.releaseYear,rentalDuration:n.state.rentalDuration,rentalRate:n.state.rentalRate,replacementCost:n.state.replacementCost,specialFeature:n.state.specialFeature};console.log(t),J.a.fire({icon:"question",text:"Your input data is correct?",showCancelButton:!0,confirmButtonText:"Save"}).then((function(e){e.isConfirmed&&("Add"===n.state.stateForm?G.post("film",t).then((function(e){console.log(e),J.a.fire({icon:"success",title:"Successfully!",text:"You submit a new Actor!"}).then((function(e){n.setState({title:"",description:"",languageId:"",length:"",rating:"",releaseYear:"",rentalDuration:"",rentalRate:"",replacementCost:"",specialFeature:"",conditions:!0,featureCheck:[{status:!1,label:"Commentaries"},{status:!1,label:"Behind the Scenes"},{status:!1,label:"Deleted Scenes"},{status:!1,label:"Trailers"}]})}))})):G.put("film/id/"+n.state.filmId,t).then((function(e){console.log(e),J.a.fire({icon:"success",title:"Successfully!",text:"You submit a new Actor!"}).then((function(e){n.setState({title:"",description:"",languageId:"",length:"",rating:"",releaseYear:"",rentalDuration:"",rentalRate:"",replacementCost:"",specialFeature:"",conditions:!0,featureCheck:[{status:!1,label:"Commentaries"},{status:!1,label:"Behind the Scenes"},{status:!1,label:"Deleted Scenes"},{status:!1,label:"Trailers"}]})}))})))}))},n.handleRemove=function(e){console.log(e),J.a.fire({icon:"warning",text:"Do you want to delete this data?",showDenyButton:!0,confirmButtonText:"Yes",denyButtonText:"Cancel"}).then((function(t){t.isConfirmed?G.delete("film/id/"+e).then((function(e){console.log(e),J.a.fire({icon:"success",title:"Successfully!",text:"You submit a new Actor!"}).then((function(e){n.setState({conditions:!0,stateForm:"Add"})}))})).catch((function(e){var t=this;e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.header),J.a.fire({icon:"error",title:"Oops...",text:e.response.data.message}).then((function(e){t.setState({conditions:!0,stateForm:"Add"})})))})):t.isDenied}))},n.handleBackToAdd=function(){n.setState({firstName:"",lastName:"",stateForm:"Add"})},n.handleUpdate=function(e){console.log(e),G.get("film/id/"+e).then((function(e){console.log(e),n.setState({filmId:e.data.filmId,title:e.data.title,description:e.data.description,releaseYear:e.data.releaseYear,languageId:e.data.languageId.languageId,rentalDuration:e.data.rentalDuration,rentalRate:e.data.rentalRate,replacementCost:e.data.replacementCost,length:e.data.length,rating:e.data.rating,specialFeature:e.data.specialFeature,stateForm:"Update"})}))},n.handleSearch=function(e){n.setState(Object(y.a)({},e.target.name,e.target.value)),console.log(e.target.value),""!==e.target.value?G.get("film/search/"+e.target.value).then((function(e){console.log(e),n.setState({films:e.data})})).catch((function(e){e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.header)),this.findFilm()})):n.findFilm()},n.handleChangeCheck=function(e){console.log(e.target.name),n.setState({specialFeature:[].concat(Object(X.a)(n.state.specialFeature),[e.target.name])})},n.state={films:[],filmId:"",description:"",title:"",releaseYear:"",languageName:"",rentalDuration:"",rentalRate:"",length:"",replacementCost:"",rating:"",ratings:[{id:"G",label:"G"},{id:"PG",label:"PG"},{id:"PG13",label:"PG-13"},{id:"NC17",label:"NC-17"},{id:"R",label:"R"}],features:["Commentaries","Behind the Scenes","Deleted Scenes","Trailers"],featureCheck:[{status:!1,label:"Commentaries"},{status:!1,label:"Behind the Scenes"},{status:!1,label:"Deleted Scenes"},{status:!1,label:"Trailers"}],specialFeature:[],languageId:"",editIdx:-1,headCells:[{id:"filmId",numeric:!0,disablePadding:!1,label:"Film Id"},{id:"title",numeric:!1,disablePadding:!0,label:"Title"},{id:"description",numeric:!1,disablePadding:!0,label:"Description"},{id:"releaseYear",numeric:!1,disablePadding:!0,label:"Release Year"},{id:"languageId",numeric:!1,disablePadding:!0,label:"Language"},{id:"rentalDuration",numeric:!1,disablePadding:!0,label:"Rental Duration"},{id:"rentalRate",numeric:!1,disablePadding:!0,label:"Rental Rate"},{id:"length",numeric:!1,disablePadding:!0,label:"Length"},{id:"replacementCost",numeric:!1,disablePadding:!0,label:"Cost"},{id:"rating",numeric:!1,disablePadding:!0,label:"Rating"},{id:"specialFeature",numeric:!1,disablePadding:!0,label:"Special Features"},{id:"lastUpdate",numeric:!1,disablePadding:!0,label:"Last Update"},{id:"actions",numeric:!1,disablePadding:!0,label:"Actions"}],columns:[{field:"filmId",title:"Film Id"},{field:"title",title:"Title"},{field:"description",title:"Description"},{field:"releaseYear",title:"Release Year"},{field:"languageId.name",title:"Language",render:function(e){return e.languageId.name},customExport:function(e){return e.languageId.name}},{field:"rentalDuration",title:"Rental Duration"},{field:"rentalRate",title:"Rental Rate"},{field:"length",title:"Length"},{field:"replacementCost",title:"Cost"},{field:"rating",title:"Rating",lookup:{G:"G",PG:"PG",NC17:"NC-17",PG13:"PG-13",R:"R"}},{field:"specialFeature",title:"Special Features",render:function(e){return e.specialFeature.join(", ")}},{field:"lastUpdate",title:"Last Update",render:function(e){return K()(e.lastUpdate,"mmmm dS, yyyy")}}],dataTable:[],conditions:!1,stateForm:"Add",searchFilm:"",languages:[]},n.handleChange=n.handleChange.bind(Object(k.a)(n)),n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){this.findFilm(),this.findLanguage()}},{key:"componentDidUpdate",value:function(e,t,a){this.state.conditions&&(this.findFilm(),this.setState({conditions:!1}))}},{key:"findFilm",value:function(){var e=this;G.get("film").then((function(t){console.log(t.data),e.setState({films:t.data})}))}},{key:"findLanguage",value:function(){var e=this;G.get("language").then((function(t){console.log(t),e.setState({languages:t.data})}))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o.a,{container:!0,className:"section",children:Object(n.jsx)(o.a,{item:!0,className:"section_title",xs:12,children:Object(n.jsx)(d.a,{variant:"h6",children:"Film Page"})})}),Object(n.jsx)("br",{}),Object(n.jsxs)(o.a,{container:!0,className:"",children:[Object(n.jsxs)(d.a,{style:{alignItems:"center"},children:["Form ",this.state.stateForm]}),Object(n.jsx)("br",{}),Object(n.jsx)(T.a,{style:{padding:16,width:"100%"},children:Object(n.jsxs)(o.a,{container:!0,alignItems:"flex-start",spacing:2,children:[Object(n.jsx)(o.a,{item:!0,xs:4,children:Object(n.jsx)(M.a,{style:{width:"100%"},id:"standard-basic",label:"Title",name:"title",required:!0,value:this.state.title,onChange:this.handleChange})}),Object(n.jsx)(o.a,{item:!0,xs:4,children:Object(n.jsx)(M.a,{id:"standard-select-language",select:!0,label:"Language",name:"languageId",value:this.state.languageId,onChange:this.handleChange,helperText:"Please select your language",style:{width:"100%"},children:this.state.languages.map((function(e){return Object(n.jsx)(ie.a,{value:e.languageId,children:e.name},e.languageId)}))})}),Object(n.jsx)(o.a,{item:!0,xs:4,children:Object(n.jsx)(M.a,{id:"standard-select-rating",select:!0,label:"Rating",name:"rating",value:this.state.rating,onChange:this.handleChange,helperText:"Please select your Rating",style:{width:"100%"},children:this.state.ratings.map((function(e){return Object(n.jsx)(ie.a,{value:e.id,children:e.label},e.id)}))})}),Object(n.jsx)(o.a,{item:!0,xs:12,children:Object(n.jsx)(M.a,{style:{width:"100%"},label:"Description",name:"description",required:!0,value:this.state.description,onChange:this.handleChange,multiline:!0,rows:2})}),Object(n.jsx)(o.a,{item:!0,xs:6,children:Object(n.jsx)(M.a,{style:{width:"100%"},id:"standard-basic",label:"Release Year",name:"releaseYear",required:!0,value:this.state.releaseYear,onChange:this.handleChange,InputProps:{startAdornment:Object(n.jsx)(Z.a,{position:"start",children:Object(n.jsx)(ae.a,{})})}})}),Object(n.jsx)(o.a,{item:!0,xs:6,children:Object(n.jsx)(M.a,{style:{width:"100%"},id:"standard-basic",label:"Length",name:"length",required:!0,value:this.state.length,onChange:this.handleChange})}),Object(n.jsx)(o.a,{item:!0,xs:4,children:Object(n.jsx)(M.a,{style:{width:"100%"},id:"standard-basic",label:"Rental Duration",name:"rentalDuration",required:!0,value:this.state.rentalDuration,onChange:this.handleChange,InputProps:{startAdornment:Object(n.jsx)(Z.a,{position:"start",children:Object(n.jsx)(se.a,{})})}})}),Object(n.jsx)(o.a,{item:!0,xs:4,children:Object(n.jsx)(M.a,{style:{width:"100%"},id:"standard-basic",label:"Rental Rate",name:"rentalRate",required:!0,value:this.state.rentalRate,onChange:this.handleChange,InputProps:{startAdornment:Object(n.jsx)(Z.a,{position:"start",children:Object(n.jsx)(ee.a,{})})}})}),Object(n.jsx)(o.a,{item:!0,xs:4,children:Object(n.jsx)(M.a,{style:{width:"100%"},id:"standard-basic",label:"Replacement Cost",name:"replacementCost",required:!0,value:this.state.replacementCost,onChange:this.handleChange,InputProps:{startAdornment:Object(n.jsx)(Z.a,{position:"start",children:Object(n.jsx)(ee.a,{})})}})}),Object(n.jsxs)(o.a,{item:!0,xs:12,children:[Object(n.jsx)(le.a,{component:"legend",children:"Special Features"}),this.state.featureCheck.map((function(t,a){return Object(n.jsx)(ce.a,{control:Object(n.jsx)(re.a,{checked:!0===e.state.specialFeature.includes(t.label)||t.status,onChange:e.handleChangeCheck,name:t.label}),label:t.label})}))]}),Object(n.jsx)(o.a,{item:!0,xs:12,style:{marginTop:16},children:Object(n.jsxs)(u.a,{variant:"contained",color:"primary",disabled:!this.state.title||!this.state.description||!this.state.languageId||!this.state.rating||!this.state.length||!this.state.releaseYear||!this.state.rentalDuration||!this.state.rentalRate||!this.state.replacementCost||this.state.specialFeature.length<1,style:{width:"100%"},onClick:this.handleSubmitSave,children:[this.state.stateForm," Film"]})}),function(){if("Update"===e.state.stateForm)return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(o.a,{item:!0,xs:12,children:Object(n.jsxs)(u.a,{variant:"contained",color:"secondary",style:{width:"100%"},onClick:e.handleBackToAdd,children:[Object(n.jsx)(z.a,{})," Back to add data"]})})})}()]})})]}),Object(n.jsx)("br",{}),Object(n.jsx)(o.a,{container:!0,className:"",children:Object(n.jsx)(o.a,{item:!0,xs:8,children:Object(n.jsx)(d.a,{children:"List Film"})})}),Object(n.jsx)("br",{}),Object(n.jsx)(o.a,{container:!0,className:"",children:Object(n.jsx)(E,{allData:this.state.films,allColumns:this.state.columns,startEditing:this.handleUpdate,handleRemove:this.handleRemove,formData:"film",title:"Table Film"})})]})}}]),a}(s.Component);var de=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("h1",{children:"Test"})})};a(624),a(828);var he=function(){return Object(n.jsx)(r.a,{className:"top_60",children:Object(n.jsxs)(o.a,{container:!0,spacing:5,children:[Object(n.jsx)(o.a,{item:!0,xs:12,sm:12,md:4,lg:3,children:Object(n.jsx)(g,{})}),Object(n.jsxs)(o.a,{item:!0,xs:!0,children:[Object(n.jsxs)(p.a,{children:[Object(n.jsx)(C,{}),Object(n.jsx)("div",{className:"main-content container_shadow",children:Object(n.jsxs)(O.c,{children:[Object(n.jsx)(O.a,{path:"/dataTable",children:Object(n.jsx)(de,{})}),Object(n.jsx)(O.a,{path:"/film",children:Object(n.jsx)(oe,{})}),Object(n.jsx)(O.a,{path:"/",children:Object(n.jsx)(Q,{})})]})})]}),Object(n.jsx)(N,{})]})]})})},ue=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,1243)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),i(e),l(e)}))};c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(he,{})}),document.getElementById("root")),ue()}},[[829,1,2]]]);
//# sourceMappingURL=main.d94f4cad.chunk.js.map