(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"8J0v":function(t,s,e){"use strict";e.r(s),e.d(s,"AssetDisposalModule",(function(){return B}));var i=e("ofXK"),o=e("tyNb"),a=e("mrSG"),r=e("NiRy"),c=e("Jdlf"),n=e("fXoL"),d=e("7o2P");let b=(()=>{class t{constructor(t){this.commonService=t,this.endpoint="asset_disposals/"}addAssetDisposal(t){return new Promise((s,e)=>{this.commonService.post(this.endpoint,t).then(t=>{s(t)},t=>{e(t)})})}getAssetDisposals(){return new Promise((t,s)=>{this.commonService.get(this.endpoint).then(s=>{t(s)},t=>{s(t)})})}getAssetDisposal(t){return new Promise((s,e)=>{this.commonService.get(this.endpoint+t+"/").then(t=>{s(t)},t=>{e(t)})})}editAssetDisposal(t,s){return new Promise((e,i)=>{this.commonService.update(this.endpoint+t+"/",s).then(t=>{e(t)},t=>{i(!1)})})}deleteAssetDisposal(t){return new Promise((s,e)=>{this.commonService.delete(this.endpoint+t+"/").then(t=>{s(!0)},t=>{e(!1)})})}}return t.\u0275fac=function(s){return new(s||t)(n.Zb(d.a))},t.\u0275prov=n.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=e("4PCd"),p=e("Mtp9"),m=e("njyG");const u=function(){return["/add-asset-disposal"]};function h(t,s){1&t&&(n.Rb(0,"button",6),n.Hc(1," Asset Disposal "),n.Qb()),2&t&&n.mc("routerLink",n.pc(1,u))}function f(t,s){if(1&t){const t=n.Sb();n.Rb(0,"span",14),n.cc("click",(function(){n.wc(t);const s=n.gc().$implicit;return n.gc(2).view(s.pk_asset_disposalid)})),n.Nb(1,"i",15),n.Qb()}}function v(t,s){if(1&t){const t=n.Sb();n.Rb(0,"span",16),n.cc("click",(function(){n.wc(t);const s=n.gc().$implicit;return n.gc(2).edit(s.pk_asset_disposalid)})),n.Nb(1,"i",17),n.Qb()}}function y(t,s){if(1&t){const t=n.Sb();n.Rb(0,"span",18),n.cc("click",(function(){n.wc(t);const s=n.gc().$implicit;return n.gc(2).delete(s.pk_asset_disposalid)})),n.Nb(1,"i",19),n.Qb()}}function R(t,s){if(1&t&&(n.Rb(0,"tr"),n.Rb(1,"td"),n.Hc(2),n.Qb(),n.Rb(3,"td"),n.Hc(4),n.Qb(),n.Rb(5,"td"),n.Hc(6),n.Qb(),n.Rb(7,"td"),n.Hc(8),n.Qb(),n.Rb(9,"td",10),n.Fc(10,f,2,0,"span",11),n.Fc(11,v,2,0,"span",12),n.Fc(12,y,2,0,"span",13),n.Qb(),n.Qb()),2&t){const t=s.$implicit,e=n.gc(2);n.zb(2),n.Jc("TML/AD ",t.pk_asset_disposalid,""),n.zb(2),n.Ic(t.assetType.asset_type),n.zb(2),n.Ic(t.date),n.zb(2),n.Ic(t.comment),n.zb(2),n.mc("ngIf",e.checkButton("view-asset-disposal")),n.zb(1),n.mc("ngIf",e.checkButton("edit-asset-disposal")),n.zb(1),n.mc("ngIf",e.checkButton("delete-asset-disposal"))}}function g(t,s){if(1&t&&(n.Rb(0,"table",7),n.Rb(1,"thead"),n.Rb(2,"tr"),n.Rb(3,"th"),n.Hc(4,"Ref ID"),n.Qb(),n.Rb(5,"th"),n.Hc(6,"Asset"),n.Qb(),n.Rb(7,"th"),n.Hc(8,"Date"),n.Qb(),n.Rb(9,"th"),n.Hc(10,"Comment"),n.Qb(),n.Rb(11,"th",8),n.Hc(12,"Options"),n.Qb(),n.Qb(),n.Qb(),n.Rb(13,"tbody"),n.Fc(14,R,13,7,"tr",9),n.Qb(),n.Qb()),2&t){const t=n.gc();n.mc("dtOptions",t.dtOptions),n.zb(14),n.mc("ngForOf",t.assetDisposals)}}let Q=(()=>{class t{constructor(t,s,e,i){this.assetDisposalService=t,this.router=s,this.rolePermissionsState=e,this.sidebarService=i,this.dtOptions=c.a}getAssetDisposal(){return Object(a.a)(this,void 0,void 0,(function*(){try{this.assetDisposals=yield this.assetDisposalService.getAssetDisposals()}catch(t){}}))}checkButton(t){return Object(r.a)(this.rolePermissionsState,t)}view(t){this.router.navigate(["asset-disposal",t])}edit(t){this.router.navigate(["edit-asset-disposal",t])}delete(t){}ngOnInit(){this.getAssetDisposal(),this.sidebarService.setTitle("myRequests")}}return t.\u0275fac=function(s){return new(s||t)(n.Mb(b),n.Mb(o.b),n.Mb(l.a),n.Mb(p.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-asset-disposals"]],decls:8,vars:2,consts:[[1,"card","login-card","dropdown-all","w-100"],[1,"card-header","card-header-customer"],[1,"card-body","login-card-body"],[1,"text-left"],["class","btn btn-primary btn-sm mdi mdi-plus-circle",3,"routerLink",4,"ngIf"],["datatable","","class","table table-striped table-bordered",3,"dtOptions",4,"ngIf"],[1,"btn","btn-primary","btn-sm","mdi","mdi-plus-circle",3,"routerLink"],["datatable","",1,"table","table-striped","table-bordered",3,"dtOptions"],["width","80",1,"text-right"],[4,"ngFor","ngForOf"],[1,"text-right","option-data"],["class","control text-secondary","title","View Item",3,"click",4,"ngIf"],["class","control text-secondary","title","Edit Item",3,"click",4,"ngIf"],["class","control text-secondary","title","Delete Item",3,"click",4,"ngIf"],["title","View Item",1,"control","text-secondary",3,"click"],[1,"mdi","mdi-eye","option-icon"],["title","Edit Item",1,"control","text-secondary",3,"click"],[1,"mdi","mdi-lead-pencil","option-icon"],["title","Delete Item",1,"control","text-secondary",3,"click"],[1,"mdi","mdi-trash-can","option-icon"]],template:function(t,s){1&t&&(n.Rb(0,"div",0),n.Rb(1,"div",1),n.Rb(2,"strong"),n.Hc(3,"Asset Disposal"),n.Qb(),n.Qb(),n.Rb(4,"div",2),n.Rb(5,"p",3),n.Fc(6,h,2,2,"button",4),n.Qb(),n.Fc(7,g,15,2,"table",5),n.Qb(),n.Qb()),2&t&&(n.zb(6),n.mc("ngIf",s.checkButton("add-role")),n.zb(1),n.mc("ngIf",s.assetDisposals))},directives:[i.l,o.c,m.a,i.k],styles:[""]}),t})();var D=e("3Pt+"),w=e("YqHM"),k=e("T2nI"),S=e("bUWO"),I=e("SYt/");function _(t,s){if(1&t&&(n.Rb(0,"option",16),n.Hc(1),n.Qb()),2&t){const t=s.$implicit;n.nc("value",t.pk_asset_typeid),n.zb(1),n.Ic(t.asset_type)}}let A=(()=>{class t{constructor(t,s,e,i,o,a){this.formBuider=t,this.assetDisposalService=s,this.assetTypeService=e,this.router=i,this.processService=o,this.sidebarService=a}getAssetTypes(){return Object(a.a)(this,void 0,void 0,(function*(){try{this.assetTypes=yield this.assetTypeService.getAssetTypes()}catch(t){}}))}submit(){return Object(a.a)(this,void 0,void 0,(function*(){const t=Object.assign(Object.assign({},this.assetDisposalForm.value),{fk_processid:this.processId});try{const{pk_asset_disposalid:s}=yield this.assetDisposalService.addAssetDisposal(t);this.router.navigate(["asset-disposal",s])}catch(s){}}))}initForm(){this.assetDisposalForm=this.formBuider.group({fk_asset_typeid:["",D.r.compose([D.r.required])],date:[Date.now,D.r.compose([D.r.required])],comment:["",D.r.compose([D.r.required])]})}ngOnInit(){Object(w.a)(k.a.AddAssetDisposal,this.processService).then(t=>this.processId=t),this.initForm(),this.getAssetTypes(),this.sidebarService.setTitle("myRequests")}}return t.\u0275fac=function(s){return new(s||t)(n.Mb(D.b),n.Mb(b),n.Mb(S.a),n.Mb(o.b),n.Mb(I.a),n.Mb(p.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-add-asset-disposal"]],decls:26,vars:3,consts:[[1,"card","login-card","dropdown-all","w-100"],[1,"card-header","card-header-customer"],[1,"card-body","login-card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-5","col-md-5"],[1,"form-group"],["for","day"],["formControlName","fk_asset_typeid","id","day",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["for","date"],["type","date","formControlName","date","placeholder","date","id","date",1,"form-control"],[1,"col-lg-10","col-md-10"],["for","description"],["name","description","formControlName","comment","id","","rows","3",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[3,"value"]],template:function(t,s){1&t&&(n.Rb(0,"div",0),n.Rb(1,"div",1),n.Rb(2,"strong"),n.Hc(3,"Asset Disposal"),n.Qb(),n.Qb(),n.Rb(4,"div",2),n.Rb(5,"form",3),n.cc("ngSubmit",(function(){return s.submit()})),n.Rb(6,"div",4),n.Rb(7,"div",5),n.Rb(8,"div",6),n.Rb(9,"label",7),n.Hc(10,"Asset Type"),n.Qb(),n.Rb(11,"select",8),n.Fc(12,_,2,2,"option",9),n.Qb(),n.Qb(),n.Qb(),n.Rb(13,"div",5),n.Rb(14,"div",6),n.Rb(15,"label",10),n.Hc(16,"Date"),n.Qb(),n.Nb(17,"input",11),n.Qb(),n.Qb(),n.Qb(),n.Rb(18,"div",4),n.Rb(19,"div",12),n.Rb(20,"div",6),n.Rb(21,"label",13),n.Hc(22,"Description"),n.Qb(),n.Nb(23,"textarea",14),n.Qb(),n.Qb(),n.Qb(),n.Rb(24,"button",15),n.Hc(25," Submit "),n.Qb(),n.Qb(),n.Qb(),n.Qb()),2&t&&(n.zb(5),n.mc("formGroup",s.assetDisposalForm),n.zb(7),n.mc("ngForOf",s.assetTypes),n.zb(12),n.mc("disabled",!s.assetDisposalForm.valid))},directives:[D.t,D.k,D.e,D.q,D.j,D.d,i.k,D.a,D.l,D.s],styles:[""]}),t})();var F=e("m4K9"),H=e.n(F),O=e("DaQG"),M=e.n(O),T=e("a9NN"),q=e("hE/2");function z(t,s){if(1&t&&(n.Rb(0,"table",2),n.Rb(1,"tbody"),n.Rb(2,"tr"),n.Rb(3,"th",3),n.Hc(4,"Requested by :"),n.Qb(),n.Rb(5,"td"),n.Hc(6),n.Qb(),n.Qb(),n.Rb(7,"tr"),n.Rb(8,"th",3),n.Hc(9,"Asset Type:"),n.Qb(),n.Rb(10,"td"),n.Hc(11),n.Qb(),n.Qb(),n.Rb(12,"tr"),n.Rb(13,"th",3),n.Hc(14,"Date:"),n.Qb(),n.Rb(15,"td"),n.Hc(16),n.Qb(),n.Qb(),n.Rb(17,"tr"),n.Rb(18,"th",3),n.Hc(19,"Comment:"),n.Qb(),n.Rb(20,"td"),n.Hc(21),n.Qb(),n.Qb(),n.Qb(),n.Qb()),2&t){const t=n.gc();n.zb(6),n.Jc(" ",t.request&&t.request.profile.user.first_name+" "+t.request.profile.user.last_name," "),n.zb(5),n.Jc(" ",t.assetDisposal.assetType.asset_type," "),n.zb(5),n.Jc(" ",t.assetDisposal.date," "),n.zb(5),n.Jc(" ",t.assetDisposal.comment," ")}}let j=(()=>{class t{constructor(t,s,e,i){this.assetDisposalService=t,this.activatedRoute=s,this.sidebarService=e,this.requestService=i,this.downloadPDF=()=>{const t=new H.a("p","pt");t.text("Asset Disposal",35,20),M()(t,{html:"#table"}),t.save(`asset-disposal-${Date.now()}.pdf`)},this.assetDisposalId=this.activatedRoute.snapshot.params.id}getRequest(){return Object(a.a)(this,void 0,void 0,(function*(){try{const t=yield this.requestService.getRequests("requests",`fk_processid=${this.assetDisposal.fk_processid}&workflowid=${this.assetDisposalId}`);this.request=t[0]}catch(t){}}))}getAssetDisposal(){return Object(a.a)(this,void 0,void 0,(function*(){try{this.assetDisposal=yield this.assetDisposalService.getAssetDisposal(this.assetDisposalId),this.getRequest()}catch(t){}}))}ngOnInit(){this.getAssetDisposal(),this.sidebarService.setTitle("myRequests")}}return t.\u0275fac=function(s){return new(s||t)(n.Mb(b),n.Mb(o.a),n.Mb(p.a),n.Mb(T.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-asset-disposal"]],decls:2,vars:5,consts:[[3,"title","processId","workflowid","downloadButtonClicked"],["class","table table-borderless table-responsive","id","table",4,"ngIf"],["id","table",1,"table","table-borderless","table-responsive"],["scope","row"]],template:function(t,s){1&t&&(n.Rb(0,"app-view-card",0),n.Fc(1,z,22,4,"table",1),n.Qb()),2&t&&(n.mc("title","Asset disposal")("processId",s.assetDisposal&&s.assetDisposal.fk_processid)("workflowid",s.assetDisposalId)("downloadButtonClicked",s.downloadPDF),n.zb(1),n.mc("ngIf",s.assetDisposal))},directives:[q.a,i.l],styles:[""]}),t})();function N(t,s){if(1&t&&(n.Rb(0,"option",16),n.Hc(1),n.Qb()),2&t){const t=s.$implicit;n.nc("value",t.pk_asset_typeid),n.zb(1),n.Jc(" ",t.asset_type," ")}}let C=(()=>{class t{constructor(t,s,e,i,o,a,r){this.formBuider=t,this.assetDisposalService=s,this.assetTypeService=e,this.router=i,this.processService=o,this.sidebarService=a,this.activatedRoute=r,this.assetDisposalId=this.activatedRoute.snapshot.params.id}getAssetDisposal(){return Object(a.a)(this,void 0,void 0,(function*(){try{this.assetDisposal=yield this.assetDisposalService.getAssetDisposal(this.assetDisposalId),this.initForm(this.assetDisposal)}catch(t){}}))}getAssetTypes(){return Object(a.a)(this,void 0,void 0,(function*(){try{this.assetTypes=yield this.assetTypeService.getAssetTypes()}catch(t){}}))}submit(){return Object(a.a)(this,void 0,void 0,(function*(){const t=Object.assign(Object.assign({},this.assetDisposalForm.value),{fk_processid:this.processId});try{const{pk_asset_disposalid:s}=yield this.assetDisposalService.editAssetDisposal(this.assetDisposal.pk_asset_disposalid,t);this.router.navigate(["asset-disposal",s])}catch(s){}}))}initForm(t={}){this.assetDisposalForm=this.formBuider.group({fk_asset_typeid:[t.fk_asset_typeid,D.r.compose([D.r.required])],date:[t.date,D.r.compose([D.r.required])],comment:[t.comment,D.r.compose([D.r.required])]})}ngOnInit(){Object(w.a)(k.a.AddAssetDisposal,this.processService).then(t=>this.processId=t),this.initForm(),this.getAssetDisposal(),this.getAssetTypes(),this.sidebarService.setTitle("myRequests")}}return t.\u0275fac=function(s){return new(s||t)(n.Mb(D.b),n.Mb(b),n.Mb(S.a),n.Mb(o.b),n.Mb(I.a),n.Mb(p.a),n.Mb(o.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-edit-asset-disposal"]],decls:26,vars:3,consts:[[1,"card","login-card","dropdown-all","w-100"],[1,"card-header","card-header-customer"],[1,"card-body","login-card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-3"],[1,"form-group"],["for","day"],["formControlName","fk_asset_typeid","id","day",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["for","date"],["type","date","formControlName","date","placeholder","date","id","date",1,"form-control"],[1,"col-6"],["for","description"],["name","description","formControlName","comment","id","","rows","3",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[3,"value"]],template:function(t,s){1&t&&(n.Rb(0,"div",0),n.Rb(1,"div",1),n.Rb(2,"strong"),n.Hc(3,"Asset Disposal"),n.Qb(),n.Qb(),n.Rb(4,"div",2),n.Rb(5,"form",3),n.cc("ngSubmit",(function(){return s.submit()})),n.Rb(6,"div",4),n.Rb(7,"div",5),n.Rb(8,"div",6),n.Rb(9,"label",7),n.Hc(10,"Asset Type"),n.Qb(),n.Rb(11,"select",8),n.Fc(12,N,2,2,"option",9),n.Qb(),n.Qb(),n.Qb(),n.Rb(13,"div",5),n.Rb(14,"div",6),n.Rb(15,"label",10),n.Hc(16,"Date"),n.Qb(),n.Nb(17,"input",11),n.Qb(),n.Qb(),n.Qb(),n.Rb(18,"div",4),n.Rb(19,"div",12),n.Rb(20,"div",6),n.Rb(21,"label",13),n.Hc(22,"Description"),n.Qb(),n.Nb(23,"textarea",14),n.Qb(),n.Qb(),n.Qb(),n.Rb(24,"button",15),n.Hc(25," Update "),n.Qb(),n.Qb(),n.Qb(),n.Qb()),2&t&&(n.zb(5),n.mc("formGroup",s.assetDisposalForm),n.zb(7),n.mc("ngForOf",s.assetTypes),n.zb(12),n.mc("disabled",!s.assetDisposalForm.valid))},directives:[D.t,D.k,D.e,D.q,D.j,D.d,i.k,D.a,D.l,D.s],styles:[""]}),t})();const x=[{path:"",component:e("jljr").a,children:[{path:"asset-disposals",component:Q},{path:"add-asset-disposal",component:A},{path:"edit-asset-disposal/:id",component:C},{path:"asset-disposal/:id",component:j}]}];let J=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(s){return new(s||t)},imports:[[o.f.forChild(x)],o.f]}),t})();var P=e("WM+C");let B=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(s){return new(s||t)},imports:[[i.b,J,D.o,P.a,m.b]]}),t})()}}]);