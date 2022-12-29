(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{Ft9A:function(t,e,i){"use strict";i.r(e),i.d(e,"StationeryModule",(function(){return nt}));var n=i("ofXK"),o=i("tyNb"),r=i("mrSG"),a=i("NiRy"),s=i("Jdlf"),c=i("T2nI"),d=i("fXoL"),l=i("Mtp9"),b=i("7o2P");let y=(()=>{class t{constructor(t){this.commonService=t,this.endpoint="stationery/"}addStationery(t){return new Promise((e,i)=>{this.commonService.post(this.endpoint,t).then(t=>{e(t)},t=>{i(t)})})}getStationeries(){return new Promise((t,e)=>{this.commonService.get(this.endpoint).then(e=>{t(e)},t=>{e(t)})})}getStationery(t){return new Promise((e,i)=>{this.commonService.get(this.endpoint+t+"/").then(t=>{e(t)},t=>{i(t)})})}editStationery(t,e){return new Promise((i,n)=>{this.commonService.update(this.endpoint+t+"/",e).then(t=>{i(!0)},t=>{n(!1)})})}deleteStationery(t){return new Promise((e,i)=>{this.commonService.delete(this.endpoint+t+"/").then(t=>{e(!0)},t=>{i(!1)})})}}return t.\u0275fac=function(e){return new(e||t)(d.Zb(b.a))},t.\u0275prov=d.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=i("a9NN"),p=i("4PCd"),u=i("njyG");function m(t,e){if(1&t){const t=d.Sb();d.Rb(0,"button",7),d.cc("click",(function(){return d.wc(t),d.gc().addStationery()})),d.Hc(1," Stationery Request "),d.Qb()}}const f=function(t){return["/stationery",t]};function S(t,e){if(1&t&&(d.Rb(0,"span",15),d.Nb(1,"i",16),d.Qb()),2&t){const t=d.gc().$implicit;d.mc("routerLink",d.qc(1,f,t.workflow_id))}}const v=function(t){return["/edit-stationery",t]};function g(t,e){if(1&t&&(d.Rb(0,"span",17),d.Nb(1,"i",18),d.Qb()),2&t){const t=d.gc().$implicit;d.mc("routerLink",d.qc(1,v,t.workflow_id))}}function R(t,e){1&t&&(d.Rb(0,"span",19),d.Nb(1,"i",20),d.Qb())}function D(t,e){if(1&t&&(d.Rb(0,"tr"),d.Rb(1,"td"),d.Hc(2),d.hc(3,"date"),d.Qb(),d.Rb(4,"td"),d.Hc(5),d.Qb(),d.Rb(6,"td"),d.Hc(7,"In Progress"),d.Qb(),d.Rb(8,"td"),d.Hc(9),d.hc(10,"date"),d.Qb(),d.Rb(11,"td",11),d.Fc(12,S,2,3,"span",12),d.Fc(13,g,2,3,"span",13),d.Fc(14,R,2,0,"span",14),d.Qb(),d.Qb()),2&t){const t=e.$implicit,i=d.gc(2);d.zb(2),d.Kc(" TML/",t.process.process_code," ",d.jc(3,8,t.date,"yyyy")," "),d.zb(3),d.Kc(" ",t.profile.user.first_name," ",t.profile.user.last_name," "),d.zb(4),d.Ic(d.ic(10,11,t.date)),d.zb(3),d.mc("ngIf",i.checkButton("view-stationery")),d.zb(1),d.mc("ngIf",i.checkButton("edit-stationery")),d.zb(1),d.mc("ngIf",i.checkButton("delete-stationery"))}}function Q(t,e){if(1&t&&(d.Rb(0,"table",8),d.Rb(1,"thead"),d.Rb(2,"tr"),d.Rb(3,"th"),d.Hc(4,"Ref ID"),d.Qb(),d.Rb(5,"th"),d.Hc(6,"Requested By"),d.Qb(),d.Rb(7,"th"),d.Hc(8,"Status"),d.Qb(),d.Rb(9,"th"),d.Hc(10,"Date"),d.Qb(),d.Rb(11,"th",9),d.Hc(12,"Options"),d.Qb(),d.Qb(),d.Qb(),d.Rb(13,"tbody"),d.Fc(14,D,15,13,"tr",10),d.Qb(),d.Qb()),2&t){const t=d.gc();d.mc("dtOptions",t.dtOptions),d.zb(14),d.mc("ngForOf",t.requests)}}let k=(()=>{class t{constructor(t,e,i,n,o){this.router=t,this.sidebarService=e,this.stationaryService=i,this.requestService=n,this.rolePermissionsState=o,this.dtOptions=s.a}getRequests(){return Object(r.a)(this,void 0,void 0,(function*(){try{this.requests=yield this.requestService.getRequests("requests","process_code="+c.a.AddStationery),console.log(this.requests)}catch(t){}}))}getStationeries(){this.stationaryService.getStationeries().then(t=>{this.stationeries=t,console.log(t)},t=>{})}viewStationery(t){this.router.navigate(["/stationery",t])}editStationery(t){this.router.navigate(["/edit-stationery",t])}deleteStationery(t){this.stationaryService.deleteStationery(t).then(t=>{this.getStationeries()},t=>{})}addStationery(){this.router.navigate(["/add-stationery"])}checkButton(t){return Object(a.a)(this.rolePermissionsState,t)}ngOnInit(){this.getRequests(),this.getStationeries(),this.sidebarService.setTitle("myRequests")}}return t.\u0275fac=function(e){return new(e||t)(d.Mb(o.b),d.Mb(l.a),d.Mb(y),d.Mb(h.a),d.Mb(p.a))},t.\u0275cmp=d.Gb({type:t,selectors:[["app-stationeries"]],decls:9,vars:2,consts:[[1,"card","login-card","dropdown-all","w-100"],[1,"card-header","card-header-customer"],[1,"card-body","login-card-body"],[1,"text-left"],["class","btn btn-primary btn-sm mdi mdi-plus-circle",3,"click",4,"ngIf"],[1,"table-responsive"],["class","table table-striped table-bordered","datatable","",3,"dtOptions",4,"ngIf"],[1,"btn","btn-primary","btn-sm","mdi","mdi-plus-circle",3,"click"],["datatable","",1,"table","table-striped","table-bordered",3,"dtOptions"],[1,"text-right"],[4,"ngFor","ngForOf"],[1,"text-right","option-data"],["class","control text-secondary","title","View Item",3,"routerLink",4,"ngIf"],["class","control text-secondary","title","Edit Item",3,"routerLink",4,"ngIf"],["class","control text-secondary","title","Delete Item",4,"ngIf"],["title","View Item",1,"control","text-secondary",3,"routerLink"],[1,"mdi","mdi-eye","option-icon"],["title","Edit Item",1,"control","text-secondary",3,"routerLink"],[1,"mdi","mdi-lead-pencil","option-icon"],["title","Delete Item",1,"control","text-secondary"],[1,"mdi","mdi-trash-can","option-icon"]],template:function(t,e){1&t&&(d.Rb(0,"div",0),d.Rb(1,"div",1),d.Rb(2,"strong"),d.Hc(3,"Stationery Requests"),d.Qb(),d.Qb(),d.Rb(4,"div",2),d.Rb(5,"p",3),d.Fc(6,m,2,0,"button",4),d.Qb(),d.Rb(7,"div",5),d.Fc(8,Q,15,2,"table",6),d.Qb(),d.Qb(),d.Qb()),2&t&&(d.zb(6),d.mc("ngIf",e.checkButton("add-stationery")),d.zb(2),d.mc("ngIf",e.requests))},directives:[n.l,u.a,n.k,o.c],pipes:[n.d],styles:[""]}),t})();var I=i("3Pt+"),_=i("YqHM"),w=i("6R1s");let F=(()=>{class t{constructor(t){this.commonService=t,this.endpoint="stationary_details/"}addStationeryDetail(t){return new Promise((e,i)=>{this.commonService.post(this.endpoint,t).then(t=>{e(t)},t=>{i(t)})})}getStationeryDetails(t){return new Promise((e,i)=>{this.commonService.get(`${this.endpoint}?fk_stationeryid=${t}`).then(t=>{e(t)},t=>{i(t)})})}getStationeryDetail(t){return new Promise((e,i)=>{this.commonService.get(this.endpoint+t+"/").then(t=>{e(t)},t=>{i(t)})})}editStationeryDetail(t,e){return new Promise((i,n)=>{this.commonService.update(this.endpoint+t+"/",e).then(t=>{i(t)},t=>{n(!1)})})}deleteStationeryDetail(t){return new Promise((e,i)=>{this.commonService.delete(this.endpoint+t+"/").then(t=>{e(!0)},t=>{i(!1)})})}}return t.\u0275fac=function(e){return new(e||t)(d.Zb(b.a))},t.\u0275prov=d.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var q=i("SYt/");function O(t,e){if(1&t){const t=d.Sb();d.Rb(0,"tr"),d.Rb(1,"td"),d.Hc(2),d.Qb(),d.Rb(3,"td"),d.Hc(4),d.Qb(),d.Rb(5,"td",4),d.Rb(6,"span",5),d.cc("click",(function(){d.wc(t);const i=e.$implicit;return d.gc(2).edit(i.pk_stationery_detailid)})),d.Nb(7,"i",6),d.Qb(),d.Rb(8,"span",7),d.cc("click",(function(){d.wc(t);const i=e.$implicit;return d.gc(2).delete(i.pk_stationery_detailid)})),d.Nb(9,"i",8),d.Qb(),d.Qb(),d.Qb()}if(2&t){const t=e.$implicit;d.zb(2),d.Ic(t.stationaryType.type),d.zb(2),d.Ic(t.quantity)}}function M(t,e){if(1&t&&(d.Rb(0,"table",1),d.Rb(1,"thead"),d.Rb(2,"tr"),d.Rb(3,"th"),d.Hc(4,"Stationary Type"),d.Qb(),d.Rb(5,"th"),d.Hc(6,"Quantity"),d.Qb(),d.Rb(7,"th",2),d.Hc(8,"Options"),d.Qb(),d.Qb(),d.Qb(),d.Rb(9,"tbody"),d.Fc(10,O,10,2,"tr",3),d.Qb(),d.Qb()),2&t){const t=d.gc();d.zb(10),d.mc("ngForOf",t.stationaryDetails)}}let H=(()=>{class t{constructor(){this.EditStationery=new d.n,this.DeleteStationery=new d.n}edit(t){this.EditStationery.emit(t)}delete(t){this.DeleteStationery.emit(t)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Gb({type:t,selectors:[["app-stationery-details"]],inputs:{stationaryDetails:"stationaryDetails"},outputs:{EditStationery:"EditStationery",DeleteStationery:"DeleteStationery"},decls:1,vars:1,consts:[["class","table table-striped table-bordered",4,"ngIf"],[1,"table","table-striped","table-bordered"],["width","80",1,"text-right"],[4,"ngFor","ngForOf"],[1,"text-right","option-data"],["title","Edit Item",1,"control","text-secondary",3,"click"],[1,"mdi","mdi-lead-pencil","option-icon"],["title","Delete Item",1,"control","text-secondary",3,"click"],[1,"mdi","mdi-trash-can","option-icon"]],template:function(t,e){1&t&&d.Fc(0,M,11,1,"table",0),2&t&&d.mc("ngIf",e.stationaryDetails)},directives:[n.l,n.k],styles:[""]}),t})();function z(t,e){if(1&t&&(d.Rb(0,"option",18),d.Hc(1),d.Qb()),2&t){const t=e.$implicit;d.nc("value",t.pk_stationery_typeid),d.zb(1),d.Jc(" ",t.type," ")}}function T(t,e){1&t&&d.Nb(0,"i",19)}function j(t,e){1&t&&(d.Rb(0,"span"),d.Hc(1,"update"),d.Qb())}function P(t,e){if(1&t){const t=d.Sb();d.Rb(0,"app-stationery-details",20),d.cc("DeleteStationery",(function(e){return d.wc(t),d.gc().deleteStationery(e)}))("EditStationery",(function(e){return d.wc(t),d.gc().editStationery(e)})),d.Qb()}if(2&t){const t=d.gc();d.mc("stationaryDetails",t.stationaryDetails)}}function x(t,e){1&t&&(d.Rb(0,"div",21),d.Hc(1," stationary not added "),d.Qb())}let N=(()=>{class t{constructor(t,e,i,n,o,r,a){this.formBuilder=t,this.stationeryTypeService=e,this.stationaryService=i,this.stationDetailService=n,this.router=o,this.processService=r,this.sidebarService=a,this.stationaryDetails=[],this.editMode=!1}initForm(t={}){this.addStationeryForm=this.formBuilder.group({pk_stationery_detailid:t.pk_stationery_detailid,fk_stationeryid:[t.fk_stationeryid,I.r.compose([])],fk_stationery_typeid:[t.fk_stationery_typeid,I.r.compose([I.r.required])],quantity:[t.quantity,I.r.compose([I.r.required])]})}checkIfAdded(t){return this.stationaryDetails.find(e=>e.fk_stationery_typeid===t)}editStationery(t){const e=this.stationaryDetails.findIndex(e=>e.pk_stationery_detailid===t),i=this.stationaryDetails.splice(e,1);this.editMode=!0,this.initForm(i[0])}deleteStationery(t){return Object(r.a)(this,void 0,void 0,(function*(){try{yield this.stationDetailService.deleteStationeryDetail(t);const e=this.stationaryDetails.findIndex(e=>e.pk_stationery_detailid===t);this.stationaryDetails.splice(e,1)}catch(e){}}))}getStationeryType(){return Object(r.a)(this,void 0,void 0,(function*(){this.stationeryTypes=yield this.stationeryTypeService.getStationeryTypes()}))}updateStationeryDetail(t){return Object(r.a)(this,void 0,void 0,(function*(){try{const e=yield this.stationDetailService.editStationeryDetail(t.pk_stationery_detailid,t);this.editMode=!1,this.stationaryDetails.push(e),this.initForm()}catch(e){}}))}addStationDetail(){return Object(r.a)(this,void 0,void 0,(function*(){const t=Object.assign(Object.assign({},this.addStationeryForm.value),{fk_stationeryid:this.stationary.pk_stationeryid});if(this.editMode)this.updateStationeryDetail(t);else try{const e=yield this.stationDetailService.addStationeryDetail(t);this.stationaryDetails.push(e),this.initForm()}catch(e){}}))}addStationery(){return Object(r.a)(this,void 0,void 0,(function*(){if(!this.stationary)try{this.stationary=yield this.stationaryService.addStationery({fk_processid:this.processId})}catch(t){}this.addStationDetail()}))}navigateToDetails(){this.router.navigate(["/stationery",this.stationaryDetails[0].fk_stationeryid])}ngOnInit(){Object(_.a)(c.a.AddStationery,this.processService).then(t=>this.processId=t),this.getStationeryType(),this.initForm(),this.sidebarService.setTitle("myRequests")}}return t.\u0275fac=function(e){return new(e||t)(d.Mb(I.b),d.Mb(w.a),d.Mb(y),d.Mb(F),d.Mb(o.b),d.Mb(q.a),d.Mb(l.a))},t.\u0275cmp=d.Gb({type:t,selectors:[["app-add-stationery"]],decls:24,vars:8,consts:[[1,"card","login-card","dropdown-all","w-100"],[1,"card-header","card-header-customer"],[1,"card-body","login-card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"row"],[1,"col-5"],["formControlName","fk_stationery_typeid","id","",1,"form-control"],["selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","quantity","placeholder","quantity",1,"form-control"],[1,"col-2"],["type","submit",1,"btn","btn-primary",3,"disabled"],["class","mdi mdi-plus",4,"ngIf"],[4,"ngIf"],[3,"stationaryDetails","DeleteStationery","EditStationery",4,"ngIf"],["class","alert alert-info","role","alert",4,"ngIf"],[1,"btn","btn-primary",3,"disabled","click"],[3,"value"],[1,"mdi","mdi-plus"],[3,"stationaryDetails","DeleteStationery","EditStationery"],["role","alert",1,"alert","alert-info"]],template:function(t,e){1&t&&(d.Rb(0,"div",0),d.Rb(1,"div",1),d.Rb(2,"strong"),d.Hc(3,"Stationery Request Details"),d.Qb(),d.Qb(),d.Rb(4,"div",2),d.Rb(5,"form",3),d.cc("ngSubmit",(function(){return e.addStationery()})),d.Rb(6,"div",4),d.Rb(7,"div",5),d.Rb(8,"div",6),d.Rb(9,"div",4),d.Rb(10,"select",7),d.Rb(11,"option",8),d.Hc(12,"Stationary Types"),d.Qb(),d.Fc(13,z,2,2,"option",9),d.Qb(),d.Qb(),d.Qb(),d.Rb(14,"div",6),d.Nb(15,"input",10),d.Qb(),d.Rb(16,"div",11),d.Rb(17,"button",12),d.Fc(18,T,1,0,"i",13),d.Fc(19,j,2,0,"span",14),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Fc(20,P,1,1,"app-stationery-details",15),d.Fc(21,x,2,0,"div",16),d.Rb(22,"button",17),d.cc("click",(function(){return e.navigateToDetails()})),d.Hc(23," Submit "),d.Qb(),d.Qb(),d.Qb()),2&t&&(d.zb(5),d.mc("formGroup",e.addStationeryForm),d.zb(8),d.mc("ngForOf",e.stationeryTypes),d.zb(4),d.mc("disabled",!e.addStationeryForm.valid),d.zb(1),d.mc("ngIf",!e.editMode),d.zb(1),d.mc("ngIf",e.editMode),d.zb(1),d.mc("ngIf",e.stationaryDetails.length),d.zb(1),d.mc("ngIf",!e.stationaryDetails.length),d.zb(1),d.mc("disabled",!e.stationaryDetails.length))},directives:[I.t,I.k,I.e,I.q,I.j,I.d,I.l,I.s,n.k,I.a,n.l,H],styles:[""]}),t})();var E=i("m4K9"),$=i.n(E),B=i("DaQG"),G=i.n(B),C=i("hE/2");function J(t,e){if(1&t&&(d.Rb(0,"tr"),d.Rb(1,"td"),d.Hc(2),d.Qb(),d.Rb(3,"td"),d.Hc(4),d.Qb(),d.Qb()),2&t){const t=e.$implicit;d.zb(2),d.Ic(t.stationaryType.type),d.zb(2),d.Ic(t.quantity)}}let L=(()=>{class t{constructor(t,e,i,n,o){this.activatedRoute=t,this.stationeryService=e,this.sidebarService=i,this.processService=n,this.requestService=o,this.downloadPDF=()=>{const t=new $.a("p","pt");t.text("Stationary Details",35,20),G()(t,{html:"#table"}),G()(t,{html:"#table-2"}),t.save(`stationary-${Date.now()}.pdf`)},this.stationeryId=this.activatedRoute.snapshot.params.id}getRequest(){return Object(r.a)(this,void 0,void 0,(function*(){try{const t=yield this.requestService.getRequests("requests",`fk_processid=${this.process.pk_processid}&workflowid=${this.stationeryId}`);this.request=t[0]}catch(t){}}))}getProcess(){return Object(r.a)(this,void 0,void 0,(function*(){try{const t=yield this.processService.getProcessesByCode(c.a.AddStationery);this.process=t[0],this.getRequest()}catch(t){}}))}getStationery(){return Object(r.a)(this,void 0,void 0,(function*(){try{this.stationeryDetails=yield this.stationeryService.getStationeryDetails(this.stationeryId),console.log(this.stationeryDetails)}catch(t){}}))}ngOnInit(){this.getStationery(),this.getProcess(),this.sidebarService.setTitle("myRequests")}}return t.\u0275fac=function(e){return new(e||t)(d.Mb(o.a),d.Mb(F),d.Mb(l.a),d.Mb(q.a),d.Mb(h.a))},t.\u0275cmp=d.Gb({type:t,selectors:[["app-stationery"]],decls:17,vars:6,consts:[[3,"title","downloadButtonClicked","processId","workflowid"],["id","table",1,"table","table-borderless","table-responsive"],["scope","row"],["id","table-2",1,"table","table-bordered","table-striped"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(d.Rb(0,"app-view-card",0),d.Rb(1,"table",1),d.Rb(2,"tbody"),d.Rb(3,"tr"),d.Rb(4,"th",2),d.Hc(5,"Requested by :"),d.Qb(),d.Rb(6,"td"),d.Hc(7),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(8,"table",3),d.Rb(9,"thead"),d.Rb(10,"tr"),d.Rb(11,"th"),d.Hc(12,"Stationery Type"),d.Qb(),d.Rb(13,"th"),d.Hc(14,"Quantity"),d.Qb(),d.Qb(),d.Qb(),d.Rb(15,"tbody"),d.Fc(16,J,5,2,"tr",4),d.Qb(),d.Qb(),d.Qb()),2&t&&(d.mc("title","Stationery Details")("downloadButtonClicked",e.downloadPDF)("processId",e.process&&e.process.pk_processid)("workflowid",e.stationeryId),d.zb(7),d.Jc(" ",e.request&&e.request.profile.user.first_name+" "+e.request.profile.user.last_name," "),d.zb(9),d.mc("ngForOf",e.stationeryDetails))},directives:[C.a,n.k],styles:[""]}),t})();function A(t,e){if(1&t&&(d.Rb(0,"option",18),d.Hc(1),d.Qb()),2&t){const t=e.$implicit;d.nc("value",t.pk_stationery_typeid),d.zb(1),d.Jc(" ",t.type," ")}}function K(t,e){1&t&&d.Nb(0,"i",19)}function V(t,e){1&t&&(d.Rb(0,"span"),d.Hc(1,"update"),d.Qb())}function X(t,e){if(1&t){const t=d.Sb();d.Rb(0,"app-stationery-details",20),d.cc("DeleteStationery",(function(e){return d.wc(t),d.gc().deleteStationery(e)}))("EditStationery",(function(e){return d.wc(t),d.gc().editStationery(e)})),d.Qb()}if(2&t){const t=d.gc();d.mc("stationaryDetails",t.stationaryDetails)}}function Y(t,e){1&t&&(d.Rb(0,"div",21),d.Hc(1," stationary not added "),d.Qb())}let Z=(()=>{class t{constructor(t,e,i,n,o,r,a,s){this.formBuilder=t,this.stationeryTypeService=e,this.stationaryService=i,this.stationDetailService=n,this.router=o,this.processService=r,this.sidebarService=a,this.activatedRoute=s,this.stationaryDetails=[],this.editMode=!1,this.stationaryId=this.activatedRoute.snapshot.params.id}getStationary(){this.stationaryService.getStationery(this.stationaryId).then(t=>{this.stationary=t,this.stationaryDetails=this.stationary.stationary_details},t=>{})}initForm(t={}){this.addStationeryForm=this.formBuilder.group({pk_stationery_detailid:t.pk_stationery_detailid,fk_stationeryid:[t.fk_stationeryid,I.r.compose([])],fk_stationery_typeid:[t.fk_stationery_typeid,I.r.compose([I.r.required])],quantity:[t.quantity,I.r.compose([I.r.required])]})}checkIfAdded(t){return this.stationaryDetails.find(e=>e.fk_stationery_typeid===t)}editStationery(t){const e=this.stationaryDetails.findIndex(e=>e.pk_stationery_detailid===t),i=this.stationaryDetails.splice(e,1);this.editMode=!0,this.initForm(i[0])}deleteStationery(t){return Object(r.a)(this,void 0,void 0,(function*(){try{yield this.stationDetailService.deleteStationeryDetail(t);const e=this.stationaryDetails.findIndex(e=>e.pk_stationery_detailid===t);this.stationaryDetails.splice(e,1)}catch(e){}}))}getStationeryType(){return Object(r.a)(this,void 0,void 0,(function*(){this.stationeryTypes=yield this.stationeryTypeService.getStationeryTypes()}))}updateStationeryDetail(t){return Object(r.a)(this,void 0,void 0,(function*(){try{const e=yield this.stationDetailService.editStationeryDetail(t.pk_stationery_detailid,t);this.editMode=!1,this.stationaryDetails.push(e),this.initForm()}catch(e){}}))}addStationDetail(){return Object(r.a)(this,void 0,void 0,(function*(){const t=Object.assign(Object.assign({},this.addStationeryForm.value),{fk_stationeryid:this.stationary.pk_stationeryid});if(this.editMode)this.updateStationeryDetail(t);else try{const e=yield this.stationDetailService.addStationeryDetail(t);this.stationaryDetails.push(e),this.initForm()}catch(e){}}))}addStationery(){return Object(r.a)(this,void 0,void 0,(function*(){if(!this.stationary)try{this.stationary=yield this.stationaryService.addStationery({fk_processid:this.processId})}catch(t){}this.addStationDetail()}))}navigateToDetails(){this.router.navigate(["/stationery",this.stationaryDetails[0].fk_stationeryid])}ngOnInit(){Object(_.a)(c.a.AddStationery,this.processService).then(t=>this.processId=t),this.getStationary(),this.getStationeryType(),this.initForm(),this.sidebarService.setTitle("myRequests")}}return t.\u0275fac=function(e){return new(e||t)(d.Mb(I.b),d.Mb(w.a),d.Mb(y),d.Mb(F),d.Mb(o.b),d.Mb(q.a),d.Mb(l.a),d.Mb(o.a))},t.\u0275cmp=d.Gb({type:t,selectors:[["app-edit-stationery"]],decls:24,vars:8,consts:[[1,"card","login-card","dropdown-all","w-100"],[1,"card-header","card-header-customer"],[1,"card-body","login-card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"row"],[1,"col-5"],["formControlName","fk_stationery_typeid","id","",1,"form-control"],["selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","quantity","placeholder","quantity",1,"form-control"],[1,"col-2"],["type","submit",1,"btn","btn-primary",3,"disabled"],["class","mdi mdi-plus",4,"ngIf"],[4,"ngIf"],[3,"stationaryDetails","DeleteStationery","EditStationery",4,"ngIf"],["class","alert alert-info","role","alert",4,"ngIf"],[1,"btn","btn-primary",3,"disabled","click"],[3,"value"],[1,"mdi","mdi-plus"],[3,"stationaryDetails","DeleteStationery","EditStationery"],["role","alert",1,"alert","alert-info"]],template:function(t,e){1&t&&(d.Rb(0,"div",0),d.Rb(1,"div",1),d.Rb(2,"strong"),d.Hc(3,"Stationery Request Details"),d.Qb(),d.Qb(),d.Rb(4,"div",2),d.Rb(5,"form",3),d.cc("ngSubmit",(function(){return e.addStationery()})),d.Rb(6,"div",4),d.Rb(7,"div",5),d.Rb(8,"div",6),d.Rb(9,"div",4),d.Rb(10,"select",7),d.Rb(11,"option",8),d.Hc(12,"Stationary Types"),d.Qb(),d.Fc(13,A,2,2,"option",9),d.Qb(),d.Qb(),d.Qb(),d.Rb(14,"div",6),d.Nb(15,"input",10),d.Qb(),d.Rb(16,"div",11),d.Rb(17,"button",12),d.Fc(18,K,1,0,"i",13),d.Fc(19,V,2,0,"span",14),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Fc(20,X,1,1,"app-stationery-details",15),d.Fc(21,Y,2,0,"div",16),d.Rb(22,"button",17),d.cc("click",(function(){return e.navigateToDetails()})),d.Hc(23," Submit "),d.Qb(),d.Qb(),d.Qb()),2&t&&(d.zb(5),d.mc("formGroup",e.addStationeryForm),d.zb(8),d.mc("ngForOf",e.stationeryTypes),d.zb(4),d.mc("disabled",!e.addStationeryForm.valid),d.zb(1),d.mc("ngIf",!e.editMode),d.zb(1),d.mc("ngIf",e.editMode),d.zb(1),d.mc("ngIf",e.stationaryDetails.length),d.zb(1),d.mc("ngIf",!e.stationaryDetails.length),d.zb(1),d.mc("disabled",!e.stationaryDetails.length))},directives:[I.t,I.k,I.e,I.q,I.j,I.d,I.l,I.s,n.k,I.a,n.l,H],styles:[""]}),t})();var W=i("jljr"),U=i("umRm");const tt=[{path:"",component:W.a,children:[{path:"stationeries",component:k},{path:"add-stationery",component:N},{path:"edit-stationery/:id",component:Z}]},{path:"",component:U.a,children:[{path:"stationery/:id",component:L}]}];let et=(()=>{class t{}return t.\u0275mod=d.Kb({type:t}),t.\u0275inj=d.Jb({factory:function(e){return new(e||t)},imports:[[o.f.forChild(tt)],o.f]}),t})();var it=i("WM+C");let nt=(()=>{class t{}return t.\u0275mod=d.Kb({type:t}),t.\u0275inj=d.Jb({factory:function(e){return new(e||t)},imports:[[n.b,I.o,et,u.b,it.a]]}),t})()}}]);