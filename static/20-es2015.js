(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{eyYB:function(t,o,r){"use strict";r.r(o),r.d(o,"ApprovalOptionModule",(function(){return w}));var e=r("ofXK"),a=r("3Pt+"),p=r("tyNb"),i=r("fXoL"),n=r("Mtp9"),l=r("7o2P");let s=(()=>{class t{constructor(t){this.commonService=t,this.approvalStageEndpoint="approval_stages/",this.processApprovalStageEndpoint="process_approval_stages/",this.deleteApprovalStageEndpoint="delete_approval_stages/",this.approvalRoleEndpoint="approval_roles/"}addApprovalOption(t){return new Promise((o,r)=>{this.commonService.post(this.approvalStageEndpoint,t).then(t=>{o(t)},t=>{r(t)})})}getApprovalOptions(){return new Promise((t,o)=>{this.commonService.get(this.approvalStageEndpoint).then(o=>{t(o)},t=>{o(t)})})}getApprovalOption(t){return new Promise((o,r)=>{this.commonService.get(this.approvalStageEndpoint+t+"/").then(t=>{o(t)},t=>{r(t)})})}editApprovalOption(t,o){return new Promise((r,e)=>{this.commonService.update(this.approvalStageEndpoint+t+"/",o).then(t=>{r(!0)},t=>{e(!1)})})}deleteApprovalOption(t){return new Promise((o,r)=>{this.commonService.delete(this.approvalStageEndpoint+t+"/").then(t=>{o(!0)},t=>{r(!1)})})}addProcessApprovalStage(t){return new Promise((o,r)=>{this.commonService.post(this.processApprovalStageEndpoint,t).then(t=>{o(t)},t=>{r(t)})})}deleteProcessApprovalStage(t){return new Promise((o,r)=>{this.commonService.get(this.deleteApprovalStageEndpoint+"?delete_stage="+t).then(t=>{o(t)},t=>{r(t)})})}getProcessApprovalStageByProcessId(t){return new Promise((o,r)=>{this.commonService.get(this.processApprovalStageEndpoint+"?fk_processid="+t).then(t=>{o(t)},t=>{r(t)})})}addApprovalRole(t){return new Promise((o,r)=>{this.commonService.post(this.approvalRoleEndpoint,t).then(t=>{o(t)},t=>{r(t)})})}getProcessApprovalStageRoles(t){return new Promise((o,r)=>{this.commonService.get(this.approvalRoleEndpoint+"?stageId="+t).then(t=>{o(t)},t=>{r(t)})})}}return t.\u0275fac=function(o){return new(o||t)(i.Zb(l.a))},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var c=r("njyG");function d(t,o){if(1&t){const t=i.Sb();i.Rb(0,"tr"),i.Rb(1,"td"),i.Hc(2),i.Qb(),i.Rb(3,"td"),i.Hc(4),i.Qb(),i.Rb(5,"td",10),i.Rb(6,"span",11),i.cc("click",(function(){i.wc(t);const r=o.$implicit;return i.gc(2).editApprovalOption(r.pk_approval_stageid)})),i.Nb(7,"i",12),i.Qb(),i.Rb(8,"span",13),i.cc("click",(function(){i.wc(t);const r=o.$implicit;return i.gc(2).deleteApprovalOption(r.pk_approval_stageid)})),i.Nb(9,"i",14),i.Qb(),i.Qb(),i.Qb()}if(2&t){const t=o.$implicit;i.zb(2),i.Ic(t.approval_stage),i.zb(2),i.Ic(t.approval_code)}}function b(t,o){if(1&t&&(i.Rb(0,"table",7),i.Rb(1,"thead"),i.Rb(2,"tr"),i.Rb(3,"th"),i.Hc(4,"Approval Options"),i.Qb(),i.Rb(5,"th"),i.Hc(6,"Code"),i.Qb(),i.Rb(7,"th",8),i.Hc(8,"Options"),i.Qb(),i.Qb(),i.Qb(),i.Rb(9,"tbody"),i.Fc(10,d,10,2,"tr",9),i.Qb(),i.Qb()),2&t){const t=i.gc();i.zb(10),i.mc("ngForOf",t.approvalOptions)}}let v=(()=>{class t{constructor(t,o,r){this.router=t,this.sidebarService=o,this.workflowService=r}getApprovalOptions(){this.workflowService.getApprovalOptions().then(t=>{this.approvalOptions=t},t=>{})}viewApprovalOption(t){this.router.navigate(["/approval-option",t])}editApprovalOption(t){this.router.navigate(["/edit-approval-option",t])}deleteApprovalOption(t){this.workflowService.deleteApprovalOption(t).then(t=>{this.getApprovalOptions()},t=>{})}addApprovalOption(){this.router.navigate(["/add-approval-option"])}ngOnInit(){this.getApprovalOptions(),this.sidebarService.setTitle("myRequests")}}return t.\u0275fac=function(o){return new(o||t)(i.Mb(p.b),i.Mb(n.a),i.Mb(s))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-approval-options"]],decls:10,vars:1,consts:[[1,"card","login-card","dropdown-all","w-100"],[1,"card-header","card-header-customer"],[1,"card-body","login-card-body"],[1,"text-left"],[1,"btn","btn-primary","btn-sm","mdi","mdi-plus-circle",3,"click"],[1,"table-responsive"],["datatable","","class","table table-striped table-bordered",4,"ngIf"],["datatable","",1,"table","table-striped","table-bordered"],[1,"text-right"],[4,"ngFor","ngForOf"],[1,"text-right","option-data"],["title","Edit Item",1,"control","text-secondary",3,"click"],[1,"mdi","mdi-lead-pencil","option-icon"],["title","Delete Item",1,"control","text-secondary",3,"click"],[1,"mdi","mdi-trash-can","option-icon"]],template:function(t,o){1&t&&(i.Rb(0,"div",0),i.Rb(1,"div",1),i.Rb(2,"strong"),i.Hc(3,"Approval Stages"),i.Qb(),i.Qb(),i.Rb(4,"div",2),i.Rb(5,"p",3),i.Rb(6,"button",4),i.cc("click",(function(){return o.addApprovalOption()})),i.Hc(7," Approval Stage "),i.Qb(),i.Qb(),i.Rb(8,"div",5),i.Fc(9,b,11,1,"table",6),i.Qb(),i.Qb(),i.Qb()),2&t&&(i.zb(9),i.mc("ngIf",o.approvalOptions))},directives:[e.l,c.a,e.k],styles:[""]}),t})();function m(t,o){1&t&&(i.Rb(0,"div",14),i.Hc(1,"Approval Stage is required"),i.Qb())}function u(t,o){1&t&&(i.Rb(0,"div",14),i.Hc(1,"Code is required"),i.Qb())}let h=(()=>{class t{constructor(t,o,r,e){this.formBuilder=t,this.router=o,this.workflowService=r,this.sidebarService=e,this.submitted=!1}addApprovalOption(){if(this.submitted=!0,!this.approvalOptionForm.invalid){const t=this.approvalOptionForm.value;this.categoryData={approval_stage:t.approval_stage,approval_code:t.approval_code},this.workflowService.addApprovalOption(this.categoryData).then(t=>{this.router.navigate(["/approval-options"])},t=>{})}}ngOnInit(){this.approvalOptionForm=this.formBuilder.group({approval_stage:["",a.r.compose([a.r.required])],approval_code:["",a.r.compose([a.r.required])]}),this.sidebarService.setTitle("manage")}get formValidation(){return this.approvalOptionForm.controls}}return t.\u0275fac=function(o){return new(o||t)(i.Mb(a.b),i.Mb(p.b),i.Mb(s),i.Mb(n.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-add-approval-option"]],decls:22,vars:5,consts:[[1,"card","login-card","dropdown-all","w-100"],[1,"card-header","card-header-customer"],[1,"card-body","login-card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"row"],[1,"col-4"],["for","amountInput"],["type","text","formControlName","approval_stage","placeholder","Approval Stage",1,"form-control"],["class","text-danger small",4,"ngIf"],[1,"col-3"],["type","text","formControlName","approval_code","placeholder","Approval Code",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","submit",1,"btn",3,"routerLink"],[1,"text-danger","small"]],template:function(t,o){1&t&&(i.Rb(0,"div",0),i.Rb(1,"div",1),i.Rb(2,"strong"),i.Hc(3,"Approval Stage Details"),i.Qb(),i.Qb(),i.Rb(4,"div",2),i.Rb(5,"form",3),i.cc("ngSubmit",(function(){return o.addApprovalOption()})),i.Rb(6,"div",4),i.Rb(7,"div",5),i.Rb(8,"div",6),i.Rb(9,"label",7),i.Hc(10,"Approval Stage"),i.Qb(),i.Nb(11,"input",8),i.Fc(12,m,2,0,"div",9),i.Qb(),i.Rb(13,"div",10),i.Rb(14,"label",7),i.Hc(15,"Code"),i.Qb(),i.Nb(16,"input",11),i.Fc(17,u,2,0,"div",9),i.Qb(),i.Qb(),i.Qb(),i.Rb(18,"button",12),i.Hc(19,"Submit"),i.Qb(),i.Rb(20,"button",13),i.Hc(21,"Cancel"),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&t&&(i.zb(5),i.mc("formGroup",o.approvalOptionForm),i.zb(7),i.mc("ngIf",o.submitted&&o.formValidation.approval_stage.errors),i.zb(5),i.mc("ngIf",o.submitted&&o.formValidation.approval_code.errors),i.zb(1),i.mc("disabled",!o.approvalOptionForm.valid),i.zb(2),i.mc("routerLink","/approval-options"))},directives:[a.t,a.k,a.e,a.a,a.j,a.d,e.l,p.c],styles:[""]}),t})(),g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["app-approval-option"]],decls:2,vars:0,template:function(t,o){1&t&&(i.Rb(0,"p"),i.Hc(1,"approval-option works!"),i.Qb())},styles:[""]}),t})();class f{}function O(t,o){1&t&&(i.Rb(0,"div",14),i.Hc(1,"Approval Stage is required"),i.Qb())}function R(t,o){1&t&&(i.Rb(0,"div",14),i.Hc(1,"Code is required"),i.Qb())}const S=[{path:"approval-options",component:v},{path:"add-approval-option",component:h},{path:"edit-approval-option/:id",component:(()=>{class t{constructor(t,o,r,e,a){this.formBuilder=t,this.router=o,this.workflowService=r,this.activatedRoute=e,this.sidebarService=a,this.submitted=!1,this.approvalOptionId=e.snapshot.params.id,this.initializeApprovalOptionForm()}getApprovalOption(t){this.workflowService.getApprovalOption(t).then(t=>{this.approvalOption=t,this.initializeApprovalOptionForm()},t=>{})}editApprovalOption(){if(this.submitted=!0,!this.approvalOptionForm.invalid){const t=this.approvalOptionForm.value;this.approvalOptionData={approval_stage:t.approval_stage,approval_code:t.approval_code},this.workflowService.editApprovalOption(this.approvalOptionId,this.approvalOptionData).then(t=>{this.router.navigate(["/approval-options"])},t=>{})}}initializeApprovalOptionForm(){null==this.approvalOption&&(this.approvalOption=new f,this.approvalOption.approval_stage=null,this.approvalOption.approval_code=null),this.approvalOptionForm=this.formBuilder.group({approval_stage:[this.approvalOption.approval_stage,a.r.compose([a.r.required])],approval_code:[this.approvalOption.approval_code,a.r.compose([a.r.required])]})}ngOnInit(){this.getApprovalOption(this.approvalOptionId),this.sidebarService.setTitle("manage")}get formValidation(){return this.approvalOptionForm.controls}}return t.\u0275fac=function(o){return new(o||t)(i.Mb(a.b),i.Mb(p.b),i.Mb(s),i.Mb(p.a),i.Mb(n.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-edit-approval-option"]],decls:22,vars:5,consts:[[1,"card","login-card","dropdown-all","w-100"],[1,"card-header","card-header-customer"],[1,"card-body","login-card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"row"],[1,"col-4"],["for","amountInput"],["type","text","formControlName","approval_stage","placeholder","Approval Stage",1,"form-control"],["class","text-danger small",4,"ngIf"],[1,"col-3"],["type","text","formControlName","approval_code","placeholder","Approval Code",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","submit",1,"btn",3,"routerLink"],[1,"text-danger","small"]],template:function(t,o){1&t&&(i.Rb(0,"div",0),i.Rb(1,"div",1),i.Rb(2,"strong"),i.Hc(3,"Approval Stage Details"),i.Qb(),i.Qb(),i.Rb(4,"div",2),i.Rb(5,"form",3),i.cc("ngSubmit",(function(){return o.editApprovalOption()})),i.Rb(6,"div",4),i.Rb(7,"div",5),i.Rb(8,"div",6),i.Rb(9,"label",7),i.Hc(10,"Approval Stage"),i.Qb(),i.Nb(11,"input",8),i.Fc(12,O,2,0,"div",9),i.Qb(),i.Rb(13,"div",10),i.Rb(14,"label",7),i.Hc(15,"Code"),i.Qb(),i.Nb(16,"input",11),i.Fc(17,R,2,0,"div",9),i.Qb(),i.Qb(),i.Qb(),i.Rb(18,"button",12),i.Hc(19,"Submit"),i.Qb(),i.Rb(20,"button",13),i.Hc(21,"Cancel"),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&t&&(i.zb(5),i.mc("formGroup",o.approvalOptionForm),i.zb(7),i.mc("ngIf",o.submitted&&o.formValidation.approval_stage.errors),i.zb(5),i.mc("ngIf",o.submitted&&o.formValidation.approval_code.errors),i.zb(1),i.mc("disabled",!o.approvalOptionForm.valid),i.zb(2),i.mc("routerLink","/approval-options"))},directives:[a.t,a.k,a.e,a.a,a.j,a.d,e.l,p.c],styles:[""]}),t})()},{path:"approval-option/:id",component:g}];let A=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(o){return new(o||t)},imports:[[p.f.forChild(S)],p.f]}),t})(),w=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(o){return new(o||t)},imports:[[e.b,A,a.o,c.b]]}),t})()}}]);