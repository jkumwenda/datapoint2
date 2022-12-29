!function(){function t(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function o(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{eyYB:function(o,n,i){"use strict";i.r(n),i.d(n,"ApprovalOptionModule",(function(){return z}));var a,r=i("ofXK"),p=i("3Pt+"),c=i("tyNb"),l=i("fXoL"),s=i("Mtp9"),v=i("7o2P"),d=((a=function(){function o(e){t(this,o),this.commonService=e,this.approvalStageEndpoint="approval_stages/",this.processApprovalStageEndpoint="process_approval_stages/",this.deleteApprovalStageEndpoint="delete_approval_stages/",this.approvalRoleEndpoint="approval_roles/"}return e(o,[{key:"addApprovalOption",value:function(t){var o=this;return new Promise((function(e,n){o.commonService.post(o.approvalStageEndpoint,t).then((function(t){e(t)}),(function(t){n(t)}))}))}},{key:"getApprovalOptions",value:function(){var t=this;return new Promise((function(o,e){t.commonService.get(t.approvalStageEndpoint).then((function(t){o(t)}),(function(t){e(t)}))}))}},{key:"getApprovalOption",value:function(t){var o=this;return new Promise((function(e,n){o.commonService.get(o.approvalStageEndpoint+t+"/").then((function(t){e(t)}),(function(t){n(t)}))}))}},{key:"editApprovalOption",value:function(t,o){var e=this;return new Promise((function(n,i){e.commonService.update(e.approvalStageEndpoint+t+"/",o).then((function(t){n(!0)}),(function(t){i(!1)}))}))}},{key:"deleteApprovalOption",value:function(t){var o=this;return new Promise((function(e,n){o.commonService.delete(o.approvalStageEndpoint+t+"/").then((function(t){e(!0)}),(function(t){n(!1)}))}))}},{key:"addProcessApprovalStage",value:function(t){var o=this;return new Promise((function(e,n){o.commonService.post(o.processApprovalStageEndpoint,t).then((function(t){e(t)}),(function(t){n(t)}))}))}},{key:"deleteProcessApprovalStage",value:function(t){var o=this;return new Promise((function(e,n){o.commonService.get(o.deleteApprovalStageEndpoint+"?delete_stage="+t).then((function(t){e(t)}),(function(t){n(t)}))}))}},{key:"getProcessApprovalStageByProcessId",value:function(t){var o=this;return new Promise((function(e,n){o.commonService.get(o.processApprovalStageEndpoint+"?fk_processid="+t).then((function(t){e(t)}),(function(t){n(t)}))}))}},{key:"addApprovalRole",value:function(t){var o=this;return new Promise((function(e,n){o.commonService.post(o.approvalRoleEndpoint,t).then((function(t){e(t)}),(function(t){n(t)}))}))}},{key:"getProcessApprovalStageRoles",value:function(t){var o=this;return new Promise((function(e,n){o.commonService.get(o.approvalRoleEndpoint+"?stageId="+t).then((function(t){e(t)}),(function(t){n(t)}))}))}}]),o}()).\u0275fac=function(t){return new(t||a)(l.Zb(v.a))},a.\u0275prov=l.Ib({token:a,factory:a.\u0275fac,providedIn:"root"}),a),u=i("njyG");function b(t,o){if(1&t){var e=l.Sb();l.Rb(0,"tr"),l.Rb(1,"td"),l.Hc(2),l.Qb(),l.Rb(3,"td"),l.Hc(4),l.Qb(),l.Rb(5,"td",10),l.Rb(6,"span",11),l.cc("click",(function(){l.wc(e);var t=o.$implicit;return l.gc(2).editApprovalOption(t.pk_approval_stageid)})),l.Nb(7,"i",12),l.Qb(),l.Rb(8,"span",13),l.cc("click",(function(){l.wc(e);var t=o.$implicit;return l.gc(2).deleteApprovalOption(t.pk_approval_stageid)})),l.Nb(9,"i",14),l.Qb(),l.Qb(),l.Qb()}if(2&t){var n=o.$implicit;l.zb(2),l.Ic(n.approval_stage),l.zb(2),l.Ic(n.approval_code)}}function f(t,o){if(1&t&&(l.Rb(0,"table",7),l.Rb(1,"thead"),l.Rb(2,"tr"),l.Rb(3,"th"),l.Hc(4,"Approval Options"),l.Qb(),l.Rb(5,"th"),l.Hc(6,"Code"),l.Qb(),l.Rb(7,"th",8),l.Hc(8,"Options"),l.Qb(),l.Qb(),l.Qb(),l.Rb(9,"tbody"),l.Fc(10,b,10,2,"tr",9),l.Qb(),l.Qb()),2&t){var e=l.gc();l.zb(10),l.mc("ngForOf",e.approvalOptions)}}var m,h=((m=function(){function o(e,n,i){t(this,o),this.router=e,this.sidebarService=n,this.workflowService=i}return e(o,[{key:"getApprovalOptions",value:function(){var t=this;this.workflowService.getApprovalOptions().then((function(o){t.approvalOptions=o}),(function(t){}))}},{key:"viewApprovalOption",value:function(t){this.router.navigate(["/approval-option",t])}},{key:"editApprovalOption",value:function(t){this.router.navigate(["/edit-approval-option",t])}},{key:"deleteApprovalOption",value:function(t){var o=this;this.workflowService.deleteApprovalOption(t).then((function(t){o.getApprovalOptions()}),(function(t){}))}},{key:"addApprovalOption",value:function(){this.router.navigate(["/add-approval-option"])}},{key:"ngOnInit",value:function(){this.getApprovalOptions(),this.sidebarService.setTitle("myRequests")}}]),o}()).\u0275fac=function(t){return new(t||m)(l.Mb(c.b),l.Mb(s.a),l.Mb(d))},m.\u0275cmp=l.Gb({type:m,selectors:[["app-approval-options"]],decls:10,vars:1,consts:[[1,"card","login-card","dropdown-all","w-100"],[1,"card-header","card-header-customer"],[1,"card-body","login-card-body"],[1,"text-left"],[1,"btn","btn-primary","btn-sm","mdi","mdi-plus-circle",3,"click"],[1,"table-responsive"],["datatable","","class","table table-striped table-bordered",4,"ngIf"],["datatable","",1,"table","table-striped","table-bordered"],[1,"text-right"],[4,"ngFor","ngForOf"],[1,"text-right","option-data"],["title","Edit Item",1,"control","text-secondary",3,"click"],[1,"mdi","mdi-lead-pencil","option-icon"],["title","Delete Item",1,"control","text-secondary",3,"click"],[1,"mdi","mdi-trash-can","option-icon"]],template:function(t,o){1&t&&(l.Rb(0,"div",0),l.Rb(1,"div",1),l.Rb(2,"strong"),l.Hc(3,"Approval Stages"),l.Qb(),l.Qb(),l.Rb(4,"div",2),l.Rb(5,"p",3),l.Rb(6,"button",4),l.cc("click",(function(){return o.addApprovalOption()})),l.Hc(7," Approval Stage "),l.Qb(),l.Qb(),l.Rb(8,"div",5),l.Fc(9,f,11,1,"table",6),l.Qb(),l.Qb(),l.Qb()),2&t&&(l.zb(9),l.mc("ngIf",o.approvalOptions))},directives:[r.l,u.a,r.k],styles:[""]}),m);function g(t,o){1&t&&(l.Rb(0,"div",14),l.Hc(1,"Approval Stage is required"),l.Qb())}function y(t,o){1&t&&(l.Rb(0,"div",14),l.Hc(1,"Code is required"),l.Qb())}var O,R,S=((R=function(){function o(e,n,i,a){t(this,o),this.formBuilder=e,this.router=n,this.workflowService=i,this.sidebarService=a,this.submitted=!1}return e(o,[{key:"addApprovalOption",value:function(){var t=this;if(this.submitted=!0,!this.approvalOptionForm.invalid){var o=this.approvalOptionForm.value;this.categoryData={approval_stage:o.approval_stage,approval_code:o.approval_code},this.workflowService.addApprovalOption(this.categoryData).then((function(o){t.router.navigate(["/approval-options"])}),(function(t){}))}}},{key:"ngOnInit",value:function(){this.approvalOptionForm=this.formBuilder.group({approval_stage:["",p.r.compose([p.r.required])],approval_code:["",p.r.compose([p.r.required])]}),this.sidebarService.setTitle("manage")}},{key:"formValidation",get:function(){return this.approvalOptionForm.controls}}]),o}()).\u0275fac=function(t){return new(t||R)(l.Mb(p.b),l.Mb(c.b),l.Mb(d),l.Mb(s.a))},R.\u0275cmp=l.Gb({type:R,selectors:[["app-add-approval-option"]],decls:22,vars:5,consts:[[1,"card","login-card","dropdown-all","w-100"],[1,"card-header","card-header-customer"],[1,"card-body","login-card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"row"],[1,"col-4"],["for","amountInput"],["type","text","formControlName","approval_stage","placeholder","Approval Stage",1,"form-control"],["class","text-danger small",4,"ngIf"],[1,"col-3"],["type","text","formControlName","approval_code","placeholder","Approval Code",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","submit",1,"btn",3,"routerLink"],[1,"text-danger","small"]],template:function(t,o){1&t&&(l.Rb(0,"div",0),l.Rb(1,"div",1),l.Rb(2,"strong"),l.Hc(3,"Approval Stage Details"),l.Qb(),l.Qb(),l.Rb(4,"div",2),l.Rb(5,"form",3),l.cc("ngSubmit",(function(){return o.addApprovalOption()})),l.Rb(6,"div",4),l.Rb(7,"div",5),l.Rb(8,"div",6),l.Rb(9,"label",7),l.Hc(10,"Approval Stage"),l.Qb(),l.Nb(11,"input",8),l.Fc(12,g,2,0,"div",9),l.Qb(),l.Rb(13,"div",10),l.Rb(14,"label",7),l.Hc(15,"Code"),l.Qb(),l.Nb(16,"input",11),l.Fc(17,y,2,0,"div",9),l.Qb(),l.Qb(),l.Qb(),l.Rb(18,"button",12),l.Hc(19,"Submit"),l.Qb(),l.Rb(20,"button",13),l.Hc(21,"Cancel"),l.Qb(),l.Qb(),l.Qb(),l.Qb()),2&t&&(l.zb(5),l.mc("formGroup",o.approvalOptionForm),l.zb(7),l.mc("ngIf",o.submitted&&o.formValidation.approval_stage.errors),l.zb(5),l.mc("ngIf",o.submitted&&o.formValidation.approval_code.errors),l.zb(1),l.mc("disabled",!o.approvalOptionForm.valid),l.zb(2),l.mc("routerLink","/approval-options"))},directives:[p.t,p.k,p.e,p.a,p.j,p.d,r.l,c.c],styles:[""]}),R),w=((O=function(){function o(){t(this,o)}return e(o,[{key:"ngOnInit",value:function(){}}]),o}()).\u0275fac=function(t){return new(t||O)},O.\u0275cmp=l.Gb({type:O,selectors:[["app-approval-option"]],decls:2,vars:0,template:function(t,o){1&t&&(l.Rb(0,"p"),l.Hc(1,"approval-option works!"),l.Qb())},styles:[""]}),O),k=function o(){t(this,o)};function A(t,o){1&t&&(l.Rb(0,"div",14),l.Hc(1,"Approval Stage is required"),l.Qb())}function Q(t,o){1&t&&(l.Rb(0,"div",14),l.Hc(1,"Code is required"),l.Qb())}var _,I,F,H=[{path:"approval-options",component:h},{path:"add-approval-option",component:S},{path:"edit-approval-option/:id",component:(_=function(){function o(e,n,i,a,r){t(this,o),this.formBuilder=e,this.router=n,this.workflowService=i,this.activatedRoute=a,this.sidebarService=r,this.submitted=!1,this.approvalOptionId=a.snapshot.params.id,this.initializeApprovalOptionForm()}return e(o,[{key:"getApprovalOption",value:function(t){var o=this;this.workflowService.getApprovalOption(t).then((function(t){o.approvalOption=t,o.initializeApprovalOptionForm()}),(function(t){}))}},{key:"editApprovalOption",value:function(){var t=this;if(this.submitted=!0,!this.approvalOptionForm.invalid){var o=this.approvalOptionForm.value;this.approvalOptionData={approval_stage:o.approval_stage,approval_code:o.approval_code},this.workflowService.editApprovalOption(this.approvalOptionId,this.approvalOptionData).then((function(o){t.router.navigate(["/approval-options"])}),(function(t){}))}}},{key:"initializeApprovalOptionForm",value:function(){null==this.approvalOption&&(this.approvalOption=new k,this.approvalOption.approval_stage=null,this.approvalOption.approval_code=null),this.approvalOptionForm=this.formBuilder.group({approval_stage:[this.approvalOption.approval_stage,p.r.compose([p.r.required])],approval_code:[this.approvalOption.approval_code,p.r.compose([p.r.required])]})}},{key:"ngOnInit",value:function(){this.getApprovalOption(this.approvalOptionId),this.sidebarService.setTitle("manage")}},{key:"formValidation",get:function(){return this.approvalOptionForm.controls}}]),o}(),_.\u0275fac=function(t){return new(t||_)(l.Mb(p.b),l.Mb(c.b),l.Mb(d),l.Mb(c.a),l.Mb(s.a))},_.\u0275cmp=l.Gb({type:_,selectors:[["app-edit-approval-option"]],decls:22,vars:5,consts:[[1,"card","login-card","dropdown-all","w-100"],[1,"card-header","card-header-customer"],[1,"card-body","login-card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"row"],[1,"col-4"],["for","amountInput"],["type","text","formControlName","approval_stage","placeholder","Approval Stage",1,"form-control"],["class","text-danger small",4,"ngIf"],[1,"col-3"],["type","text","formControlName","approval_code","placeholder","Approval Code",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","submit",1,"btn",3,"routerLink"],[1,"text-danger","small"]],template:function(t,o){1&t&&(l.Rb(0,"div",0),l.Rb(1,"div",1),l.Rb(2,"strong"),l.Hc(3,"Approval Stage Details"),l.Qb(),l.Qb(),l.Rb(4,"div",2),l.Rb(5,"form",3),l.cc("ngSubmit",(function(){return o.editApprovalOption()})),l.Rb(6,"div",4),l.Rb(7,"div",5),l.Rb(8,"div",6),l.Rb(9,"label",7),l.Hc(10,"Approval Stage"),l.Qb(),l.Nb(11,"input",8),l.Fc(12,A,2,0,"div",9),l.Qb(),l.Rb(13,"div",10),l.Rb(14,"label",7),l.Hc(15,"Code"),l.Qb(),l.Nb(16,"input",11),l.Fc(17,Q,2,0,"div",9),l.Qb(),l.Qb(),l.Qb(),l.Rb(18,"button",12),l.Hc(19,"Submit"),l.Qb(),l.Rb(20,"button",13),l.Hc(21,"Cancel"),l.Qb(),l.Qb(),l.Qb(),l.Qb()),2&t&&(l.zb(5),l.mc("formGroup",o.approvalOptionForm),l.zb(7),l.mc("ngIf",o.submitted&&o.formValidation.approval_stage.errors),l.zb(5),l.mc("ngIf",o.submitted&&o.formValidation.approval_code.errors),l.zb(1),l.mc("disabled",!o.approvalOptionForm.valid),l.zb(2),l.mc("routerLink","/approval-options"))},directives:[p.t,p.k,p.e,p.a,p.j,p.d,r.l,c.c],styles:[""]}),_)},{path:"approval-option/:id",component:w}],P=((F=function o(){t(this,o)}).\u0275mod=l.Kb({type:F}),F.\u0275inj=l.Jb({factory:function(t){return new(t||F)},imports:[[c.f.forChild(H)],c.f]}),F),z=((I=function o(){t(this,o)}).\u0275mod=l.Kb({type:I}),I.\u0275inj=l.Jb({factory:function(t){return new(t||I)},imports:[[r.b,P,p.o,u.b]]}),I)}}])}();