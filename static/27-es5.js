!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{Ji0x:function(t,n,r){"use strict";r.r(n),r.d(n,"MileageModule",(function(){return he}));var a=r("ofXK"),o=r("tyNb"),c=r("mrSG"),s=r("T2nI"),l=r("NiRy"),d=r("Jdlf"),b=r("fXoL"),m=r("a9NN"),u=r("4PCd"),f=r("Mtp9"),p=r("njyG"),g=function(){return["/add-mileage"]};function v(e,t){1&e&&(b.Rb(0,"button",7),b.Hc(1," Mileage Declaration "),b.Qb()),2&e&&b.mc("routerLink",b.pc(1,g))}function h(e,t){if(1&e){var i=b.Sb();b.Rb(0,"span",15),b.cc("click",(function(){b.wc(i);var e=b.gc().$implicit;return b.gc(2).view(e.workflow_id)})),b.Nb(1,"i",16),b.Qb()}}function k(e,t){if(1&e){var i=b.Sb();b.Rb(0,"span",17),b.cc("click",(function(){b.wc(i);var e=b.gc().$implicit;return b.gc(2).edit(e.workflow_id)})),b.Nb(1,"i",18),b.Qb()}}function R(e,t){if(1&e){var i=b.Sb();b.Rb(0,"span",19),b.cc("click",(function(){b.wc(i);var e=b.gc().$implicit;return b.gc(2).delete(e.workflow_id)})),b.Nb(1,"i",20),b.Qb()}}function Q(e,t){if(1&e&&(b.Rb(0,"tr"),b.Rb(1,"td"),b.Hc(2),b.hc(3,"date"),b.Qb(),b.Rb(4,"td"),b.Hc(5),b.Qb(),b.Rb(6,"td"),b.Hc(7,"In Progress"),b.Qb(),b.Rb(8,"td"),b.Hc(9),b.hc(10,"date"),b.Qb(),b.Rb(11,"td",11),b.Fc(12,h,2,0,"span",12),b.Fc(13,k,2,0,"span",13),b.Fc(14,R,2,0,"span",14),b.Qb(),b.Qb()),2&e){var i=t.$implicit,n=b.gc(2);b.zb(2),b.Kc(" TML/",i.process.process_code," ",b.jc(3,8,i.date,"yyyy")," "),b.zb(3),b.Kc(" ",i.profile.user.first_name," ",i.profile.user.last_name," "),b.zb(4),b.Ic(b.ic(10,11,i.date)),b.zb(3),b.mc("ngIf",n.checkButton("view-mileage")),b.zb(1),b.mc("ngIf",n.checkButton("edit-mileage")),b.zb(1),b.mc("ngIf",n.checkButton("edit-afp"))}}function M(e,t){if(1&e&&(b.Rb(0,"table",8),b.Rb(1,"thead"),b.Rb(2,"tr"),b.Rb(3,"th"),b.Hc(4,"Ref ID"),b.Qb(),b.Rb(5,"th"),b.Hc(6,"Requested By"),b.Qb(),b.Rb(7,"th"),b.Hc(8,"Status"),b.Qb(),b.Rb(9,"th"),b.Hc(10,"Date"),b.Qb(),b.Rb(11,"th",9),b.Hc(12,"Options"),b.Qb(),b.Qb(),b.Qb(),b.Rb(13,"tbody"),b.Fc(14,Q,15,13,"tr",10),b.Qb(),b.Qb()),2&e){var i=b.gc();b.mc("dtOptions",i.dtOptions),b.zb(14),b.mc("ngForOf",i.requests)}}var y,w,_,D=((y=function(){function t(i,n,r,a){e(this,t),this.requestService=i,this.route=n,this.rolePermissionsState=r,this.sidebarService=a,this.dtOptions=d.a}return i(t,[{key:"getRequests",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.requestService.getRequests("requests","process_code="+s.a.AddMileage);case 3:this.requests=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,this,[[0,6]])})))}},{key:"view",value:function(e){this.route.navigate(["mileage",e])}},{key:"delete",value:function(e){}},{key:"edit",value:function(e){this.route.navigate(["edit-mileage",e])}},{key:"checkButton",value:function(e){return Object(l.a)(this.rolePermissionsState,e)}},{key:"ngOnInit",value:function(){this.getRequests(),this.sidebarService.setTitle("myRequests")}}]),t}()).\u0275fac=function(e){return new(e||y)(b.Mb(m.a),b.Mb(o.b),b.Mb(u.a),b.Mb(f.a))},y.\u0275cmp=b.Gb({type:y,selectors:[["app-mileages"]],decls:9,vars:2,consts:[[1,"card","login-card","dropdown-all","w-100"],[1,"card-header","card-header-customer"],[1,"card-body","login-card-body"],[1,"text-left"],["class","btn btn-primary btn-sm mdi mdi-plus-circle",3,"routerLink",4,"ngIf"],[1,"table-responsive"],["class","table table-striped table-bordered","datatable","",3,"dtOptions",4,"ngIf"],[1,"btn","btn-primary","btn-sm","mdi","mdi-plus-circle",3,"routerLink"],["datatable","",1,"table","table-striped","table-bordered",3,"dtOptions"],[1,"text-right"],[4,"ngFor","ngForOf"],[1,"text-right","option-data"],["class","control text-secondary","title","View Item",3,"click",4,"ngIf"],["class","control text-secondary","title","Edit Item",3,"click",4,"ngIf"],["class","control text-secondary","title","Delete Item",3,"click",4,"ngIf"],["title","View Item",1,"control","text-secondary",3,"click"],[1,"mdi","mdi-eye","option-icon"],["title","Edit Item",1,"control","text-secondary",3,"click"],[1,"mdi","mdi-lead-pencil","option-icon"],["title","Delete Item",1,"control","text-secondary",3,"click"],[1,"mdi","mdi-trash-can","option-icon"]],template:function(e,t){1&e&&(b.Rb(0,"div",0),b.Rb(1,"div",1),b.Rb(2,"strong"),b.Hc(3,"Mileage Declarations "),b.Qb(),b.Qb(),b.Rb(4,"div",2),b.Rb(5,"p",3),b.Fc(6,v,2,2,"button",4),b.Qb(),b.Rb(7,"div",5),b.Fc(8,M,15,2,"table",6),b.Qb(),b.Qb(),b.Qb()),2&e&&(b.zb(6),b.mc("ngIf",t.checkButton("add-afp")),b.zb(2),b.mc("ngIf",t.requests))},directives:[a.l,o.c,p.a,a.k],pipes:[a.d],styles:[""]}),y),I=r("3Pt+"),x=r("YqHM"),H=r("7o2P"),S=((_=function(){function t(i){e(this,t),this.commonService=i,this.endpoint="mileages/"}return i(t,[{key:"addMileage",value:function(e){var t=this;return new Promise((function(i,n){t.commonService.post(t.endpoint,e).then((function(e){i(e)}),(function(e){n(e)}))}))}},{key:"getMileages",value:function(){var e=this;return new Promise((function(t,i){e.commonService.get(e.endpoint).then((function(e){t(e)}),(function(e){i(e)}))}))}},{key:"getMileage",value:function(e){var t=this;return new Promise((function(i,n){t.commonService.get(t.endpoint+e+"/").then((function(e){i(e)}),(function(e){n(e)}))}))}},{key:"editMileage",value:function(e,t){var i=this;return new Promise((function(n,r){i.commonService.update(i.endpoint+e+"/",t).then((function(e){n(!0)}),(function(e){r(!1)}))}))}},{key:"deleteMileage",value:function(e){var t=this;return new Promise((function(i,n){t.commonService.delete(t.endpoint+e+"/").then((function(e){i(!0)}),(function(e){n(!1)}))}))}}]),t}()).\u0275fac=function(e){return new(e||_)(b.Zb(H.a))},_.\u0275prov=b.Ib({token:_,factory:_.\u0275fac,providedIn:"root"}),_),q=((w=function(){function t(i){e(this,t),this.commonService=i,this.endpoint="mileage_details/"}return i(t,[{key:"addMileageDetail",value:function(e){var t=this;return new Promise((function(i,n){t.commonService.post(t.endpoint,e).then((function(e){i(e)}),(function(e){n(e)}))}))}},{key:"getMileageDetails",value:function(e){var t=this;return new Promise((function(i,n){t.commonService.get("".concat(t.endpoint,"?fk_mileageid=").concat(e)).then((function(e){i(e)}),(function(e){n(e)}))}))}},{key:"getMileageDetail",value:function(e){var t=this;return new Promise((function(i,n){t.commonService.get(t.endpoint+e+"/").then((function(e){i(e)}),(function(e){n(e)}))}))}},{key:"editMileageDetail",value:function(e,t){var i=this;return new Promise((function(n,r){i.commonService.update(i.endpoint+e+"/",t).then((function(e){n(e)}),(function(e){r(!1)}))}))}},{key:"deleteMileageDetail",value:function(e){var t=this;return new Promise((function(i,n){t.commonService.delete(t.endpoint+e+"/").then((function(e){i(!0)}),(function(e){n(!1)}))}))}}]),t}()).\u0275fac=function(e){return new(e||w)(b.Zb(H.a))},w.\u0275prov=b.Ib({token:w,factory:w.\u0275fac,providedIn:"root"}),w),O=r("SYt/");function F(e,t){if(1&e){var i=b.Sb();b.Rb(0,"tr"),b.Rb(1,"td"),b.Hc(2),b.Qb(),b.Rb(3,"td"),b.Hc(4),b.Qb(),b.Rb(5,"td"),b.Hc(6),b.Qb(),b.Rb(7,"td"),b.Hc(8),b.Qb(),b.Rb(9,"td"),b.Hc(10),b.Qb(),b.Rb(11,"td"),b.Hc(12),b.Qb(),b.Rb(13,"td",3),b.Rb(14,"span",4),b.cc("click",(function(){b.wc(i);var e=t.$implicit;return b.gc().edit(e.pk_mileage_detailid)})),b.Nb(15,"i",5),b.Qb(),b.Rb(16,"span",6),b.cc("click",(function(){b.wc(i);var e=t.$implicit;return b.gc().delete(e.pk_mileage_detailid)})),b.Nb(17,"i",7),b.Qb(),b.Qb(),b.Qb()}if(2&e){var n=t.$implicit;b.zb(2),b.Ic(n.date),b.zb(2),b.Ic(n.start_km),b.zb(2),b.Ic(n.end_km),b.zb(2),b.Ic(n.own_km),b.zb(2),b.Ic(n.company_km),b.zb(2),b.Ic(n.home_office)}}var z,N=((z=function(){function t(){e(this,t),this.editMileageEvent=new b.n,this.deleteMileageEvent=new b.n}return i(t,[{key:"edit",value:function(e){this.editMileageEvent.emit(e)}},{key:"delete",value:function(e){this.deleteMileageEvent.emit(e)}},{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||z)},z.\u0275cmp=b.Gb({type:z,selectors:[["app-mileage-details"]],inputs:{mileageDetails:"mileageDetails"},outputs:{editMileageEvent:"editMileageEvent",deleteMileageEvent:"deleteMileageEvent"},decls:19,vars:1,consts:[[1,"table","table-striped","table-bordered"],["width","80",1,"text-right"],[4,"ngFor","ngForOf"],[1,"text-right","option-data"],["title","Edit Item",1,"control","text-secondary",3,"click"],[1,"mdi","mdi-lead-pencil","option-icon"],["title","Delete Item",1,"control","text-secondary",3,"click"],[1,"mdi","mdi-trash-can","option-icon"]],template:function(e,t){1&e&&(b.Rb(0,"table",0),b.Rb(1,"thead"),b.Rb(2,"tr"),b.Rb(3,"th"),b.Hc(4,"Date"),b.Qb(),b.Rb(5,"th"),b.Hc(6,"Start KM"),b.Qb(),b.Rb(7,"th"),b.Hc(8,"End KM"),b.Qb(),b.Rb(9,"th"),b.Hc(10,"Own KM"),b.Qb(),b.Rb(11,"th"),b.Hc(12,"Office KM"),b.Qb(),b.Rb(13,"th"),b.Hc(14,"Home Office"),b.Qb(),b.Rb(15,"th",1),b.Hc(16,"Options"),b.Qb(),b.Qb(),b.Qb(),b.Rb(17,"tbody"),b.Fc(18,F,18,6,"tr",2),b.Qb(),b.Qb()),2&e&&(b.zb(18),b.mc("ngForOf",t.mileageDetails))},directives:[a.k],styles:[""]}),z);function E(e,t){1&e&&(b.Rb(0,"div",24),b.Hc(1," date is required "),b.Qb())}function K(e,t){1&e&&(b.Rb(0,"div",24),b.Hc(1," start km is required is required "),b.Qb())}function C(e,t){1&e&&(b.Rb(0,"div",24),b.Hc(1," End KM required "),b.Qb())}function j(e,t){1&e&&(b.Rb(0,"div",24),b.Hc(1," own KM required "),b.Qb())}function P(e,t){1&e&&(b.Rb(0,"div",24),b.Hc(1," End KM required "),b.Qb())}function V(e,t){1&e&&(b.Rb(0,"div",24),b.Hc(1," office km is required is required "),b.Qb())}function B(e,t){1&e&&(b.Rb(0,"div",24),b.Hc(1," Bank details is required "),b.Qb())}function G(e,t){1&e&&b.Nb(0,"i",25)}function T(e,t){1&e&&(b.Rb(0,"span"),b.Hc(1,"Update"),b.Qb())}var $,J=(($=function(){function t(i,n,r,a,o,c){e(this,t),this.formBuilder=i,this.mileageService=n,this.mileageDetailService=r,this.router=a,this.processService=o,this.sidebarService=c,this.mileageDetails=[]}return i(t,[{key:"editMileageDetail",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.mileageDetailService.editMileageDetail(e.pk_mileage_detailid,e);case 3:i=t.sent,this.mileageDetails.push(i),this.editMode=!1,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,this,[[0,7]])})))}},{key:"addMileageDetails",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=Object.assign(Object.assign({},this.addMileageForm.value),{fk_mileageid:this.mileage.pk_mileageid})).pk_mileage_detailid){e.next=5;break}this.editMileageDetail(t),e.next=14;break;case 5:return e.prev=5,e.next=8,this.mileageDetailService.addMileageDetail(t);case 8:i=e.sent,this.mileageDetails.push(i),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(5);case 14:case"end":return e.stop()}}),e,this,[[5,12]])})))}},{key:"addMileage",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.mileage){e.next=10;break}return console.log(this.processId),e.prev=2,e.next=5,this.mileageService.addMileage({fk_processid:this.processId});case 5:this.mileage=e.sent,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:this.addMileageDetails(),this.initForm();case 11:case"end":return e.stop()}}),e,this,[[2,8]])})))}},{key:"handleEditMileage",value:function(e){var t=this.mileageDetails.findIndex((function(t){return t.pk_mileage_detailid===e})),i=this.mileageDetails.splice(t,1);this.editMode=!0,this.initForm(i[0])}},{key:"handleDeleteMileage",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=this.mileageDetails.findIndex((function(t){return t.pk_mileage_detailid===e})),t.prev=1,t.next=4,this.mileageDetailService.deleteMileageDetail(e);case 4:this.mileageDetails.splice(i,1),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,this,[[1,7]])})))}},{key:"navigateToDetails",value:function(){this.router.navigate(["/mileage",this.mileage.pk_mileageid])}},{key:"ngOnInit",value:function(){var e=this;Object(x.a)(s.a.AddMileage,this.processService).then((function(t){e.processId=t})),this.initForm(),this.sidebarService.setTitle("myRequests")}},{key:"initForm",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.addMileageForm=this.formBuilder.group({pk_mileage_detailid:e.pk_mileage_detailid,start_km:[e.start_km,I.r.compose([I.r.required])],end_km:[e.end_km,I.r.compose([I.r.required])],company_km:[e.company_km,I.r.compose([I.r.required])],date:[e.date,I.r.compose([I.r.required])],home_office:[e.home_office,I.r.compose([I.r.required])],description:[e.description,[I.r.compose([I.r.required])]],own_km:[e.own_km,I.r.compose([I.r.required])],fk_mileageid:e.fk_mileageid})}},{key:"formValidation",get:function(){return this.addMileageForm.controls}}]),t}()).\u0275fac=function(e){return new(e||$)(b.Mb(I.b),b.Mb(S),b.Mb(q),b.Mb(o.b),b.Mb(O.a),b.Mb(f.a))},$.\u0275cmp=b.Gb({type:$,selectors:[["app-add-mileage"]],decls:54,vars:12,consts:[[1,"card","login-card","dropdown-all","w-100"],[1,"card-header","card-header-customer"],[1,"card-body","login-card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"row"],[1,"col-2"],["for","Date"],["type","date","formControlName","date","placeholder","Date",1,"form-control"],["class","text-danger small",4,"ngIf"],["type","text","formControlName","start_km","placeholder","Start KMs",1,"form-control"],["for","own"],["type","text","formControlName","end_km","placeholder","End Kms",1,"form-control"],["type","text","formControlName","own_km","placeholder","Own Kms",1,"form-control"],["type","text","formControlName","home_office","placeholder","Home Office",1,"form-control"],["type","text","formControlName","company_km","placeholder","Company Km",1,"form-control"],[1,"col-12"],["for","description"],["id","description","placeholder","Description . . . ","rows","3","formControlName","description",1,"form-control"],[1,"btn","btn-primary"],["class","mdi mdi-plus",4,"ngIf"],[4,"ngIf"],[3,"mileageDetails","editMileageEvent","deleteMileageEvent"],[1,"btn","btn-primary",3,"disabled","click"],[1,"text-danger","small"],[1,"mdi","mdi-plus"]],template:function(e,t){1&e&&(b.Rb(0,"div",0),b.Rb(1,"div",1),b.Rb(2,"strong"),b.Hc(3,"Mileage Creation Details"),b.Qb(),b.Qb(),b.Rb(4,"div",2),b.Rb(5,"form",3),b.cc("ngSubmit",(function(){return t.addMileage()})),b.Rb(6,"div",4),b.Rb(7,"div",5),b.Rb(8,"div",6),b.Rb(9,"label",7),b.Hc(10,"Date"),b.Qb(),b.Nb(11,"input",8),b.Fc(12,E,2,0,"div",9),b.Qb(),b.Rb(13,"div",6),b.Rb(14,"label",7),b.Hc(15,"Start Km"),b.Qb(),b.Nb(16,"input",10),b.Fc(17,K,2,0,"div",9),b.Qb(),b.Rb(18,"div",6),b.Rb(19,"label",11),b.Hc(20,"End KM"),b.Qb(),b.Nb(21,"input",12),b.Fc(22,C,2,0,"div",9),b.Qb(),b.Rb(23,"div",6),b.Rb(24,"label",11),b.Hc(25,"Own KM"),b.Qb(),b.Nb(26,"input",13),b.Fc(27,j,2,0,"div",9),b.Qb(),b.Rb(28,"div",6),b.Rb(29,"label",11),b.Hc(30,"Home Office"),b.Qb(),b.Nb(31,"input",14),b.Fc(32,P,2,0,"div",9),b.Qb(),b.Rb(33,"div",6),b.Rb(34,"label",7),b.Hc(35,"Company Km"),b.Qb(),b.Nb(36,"input",15),b.Fc(37,V,2,0,"div",9),b.Qb(),b.Rb(38,"div",16),b.Rb(39,"label",17),b.Hc(40,"Comment"),b.Qb(),b.Nb(41,"textarea",18),b.Fc(42,B,2,0,"div",9),b.Qb(),b.Qb(),b.Qb(),b.Rb(43,"button",19),b.Fc(44,G,1,0,"i",20),b.Fc(45,T,2,0,"span",21),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(46,"div",0),b.Rb(47,"div",1),b.Rb(48,"strong"),b.Hc(49,"Mileage Details"),b.Qb(),b.Qb(),b.Rb(50,"div",2),b.Rb(51,"app-mileage-details",22),b.cc("editMileageEvent",(function(e){return t.handleEditMileage(e)}))("deleteMileageEvent",(function(e){return t.handleDeleteMileage(e)})),b.Qb(),b.Rb(52,"button",23),b.cc("click",(function(){return t.navigateToDetails()})),b.Hc(53," Submit "),b.Qb(),b.Qb(),b.Qb()),2&e&&(b.zb(5),b.mc("formGroup",t.addMileageForm),b.zb(7),b.mc("ngIf",t.submitted&&t.formValidation.date.errors),b.zb(5),b.mc("ngIf",t.submitted&&t.formValidation.start_km.errors),b.zb(5),b.mc("ngIf",t.submitted&&t.formValidation.end_kms.errors),b.zb(5),b.mc("ngIf",t.submitted&&t.formValidation.own_km.errors),b.zb(5),b.mc("ngIf",t.submitted&&t.formValidation.end_kms.errors),b.zb(5),b.mc("ngIf",t.submitted&&t.formValidation.company_km.errors),b.zb(5),b.mc("ngIf",t.submitted&&t.formValidation.bank_details.errors),b.zb(2),b.mc("ngIf",!t.editMode),b.zb(1),b.mc("ngIf",t.editMode),b.zb(6),b.mc("mileageDetails",t.mileageDetails),b.zb(1),b.mc("disabled",!t.mileageDetails.length))},directives:[I.t,I.k,I.e,I.a,I.j,I.d,a.l,N],styles:[".card[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{margin-bottom:20px}"]}),$),L=r("m4K9"),A=r.n(L),U=r("DaQG"),X=r.n(U),Y=r("hE/2");function Z(e,t){if(1&e&&(b.Rb(0,"tr"),b.Rb(1,"td"),b.Hc(2),b.Qb(),b.Rb(3,"td"),b.Hc(4),b.Qb(),b.Rb(5,"td"),b.Hc(6),b.Qb(),b.Rb(7,"td"),b.Hc(8),b.Qb(),b.Rb(9,"td"),b.Hc(10),b.Qb(),b.Rb(11,"td"),b.Hc(12),b.Qb(),b.Qb()),2&e){var i=t.$implicit;b.zb(2),b.Ic(i.date),b.zb(2),b.Ic(i.start_km),b.zb(2),b.Ic(i.end_km),b.zb(2),b.Ic(i.company_km),b.zb(2),b.Ic(i.own_km),b.zb(2),b.Ic(i.home_office)}}function W(e,t){if(1&e&&(b.Rb(0,"table",4),b.Rb(1,"thead"),b.Rb(2,"tr"),b.Rb(3,"th"),b.Hc(4,"Date"),b.Qb(),b.Rb(5,"th"),b.Hc(6,"Start KM"),b.Qb(),b.Rb(7,"th"),b.Hc(8,"End KM"),b.Qb(),b.Rb(9,"th"),b.Hc(10,"Company KM"),b.Qb(),b.Rb(11,"th"),b.Hc(12,"Own KM"),b.Qb(),b.Rb(13,"th"),b.Hc(14,"Home Office"),b.Qb(),b.Qb(),b.Qb(),b.Rb(15,"tbody"),b.Fc(16,Z,13,6,"tr",5),b.Qb(),b.Qb()),2&e){var i=b.gc();b.zb(16),b.mc("ngForOf",i.mileageDetails)}}var ee,te=((ee=function(){function t(i,n,r,a,o){e(this,t),this.activatedRoute=i,this.mileageDetailService=n,this.sidebarService=r,this.processService=a,this.requestService=o,this.downloadPDF=function(){var e=new A.a("p","pt");e.text("Expense Sheet Details",35,20),X()(e,{html:"#table"}),X()(e,{html:"#table-2"}),e.save("mileage-details.pdf")},this.mileageId=this.activatedRoute.snapshot.params.id}return i(t,[{key:"getRequest",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.requestService.getRequests("requests","fk_processid=".concat(this.process.pk_processid,"&workflowid=").concat(this.mileageId));case 3:t=e.sent,this.request=t[0],e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,this,[[0,7]])})))}},{key:"getProcess",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.processService.getProcessesByCode(s.a.AddMileage);case 3:t=e.sent,this.process=t[0],this.getRequest(),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,this,[[0,7]])})))}},{key:"getMileageDetails",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.mileageDetailService.getMileageDetails(this.mileageId);case 3:this.mileageDetails=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,this,[[0,6]])})))}},{key:"ngOnInit",value:function(){this.getMileageDetails(),this.getProcess(),this.sidebarService.setTitle("myRequests")}}]),t}()).\u0275fac=function(e){return new(e||ee)(b.Mb(o.a),b.Mb(q),b.Mb(f.a),b.Mb(O.a),b.Mb(m.a))},ee.\u0275cmp=b.Gb({type:ee,selectors:[["app-mileage"]],decls:9,vars:6,consts:[[3,"title","downloadButtonClicked","processId","workflowid"],["id","table",1,"table","table-borderless","table-responsive"],["scope","row"],["datatable","","class","table table-bordered table-striped","id","table-2",4,"ngIf"],["datatable","","id","table-2",1,"table","table-bordered","table-striped"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(b.Rb(0,"app-view-card",0),b.Rb(1,"table",1),b.Rb(2,"tbody"),b.Rb(3,"tr"),b.Rb(4,"th",2),b.Hc(5,"Requested by :"),b.Qb(),b.Rb(6,"td"),b.Hc(7),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Fc(8,W,17,1,"table",3),b.Qb()),2&e&&(b.mc("title","Mileage Details")("downloadButtonClicked",t.downloadPDF)("processId",t.process&&t.process.pk_processid)("workflowid",t.mileageId),b.zb(7),b.Jc(" ",t.request&&t.request.profile.user.first_name+" "+t.request.profile.user.last_name," "),b.zb(1),b.mc("ngIf",t.mileageDetails))},directives:[Y.a,a.l,p.a,a.k],styles:[""]}),ee);function ie(e,t){1&e&&(b.Rb(0,"div",24),b.Hc(1," date is required "),b.Qb())}function ne(e,t){1&e&&(b.Rb(0,"div",24),b.Hc(1," start km is required is required "),b.Qb())}function re(e,t){1&e&&(b.Rb(0,"div",24),b.Hc(1," End KM required "),b.Qb())}function ae(e,t){1&e&&(b.Rb(0,"div",24),b.Hc(1," own KM required "),b.Qb())}function oe(e,t){1&e&&(b.Rb(0,"div",24),b.Hc(1," End KM required "),b.Qb())}function ce(e,t){1&e&&(b.Rb(0,"div",24),b.Hc(1," office km is required is required "),b.Qb())}function se(e,t){1&e&&(b.Rb(0,"div",24),b.Hc(1," Bank details is required "),b.Qb())}function le(e,t){1&e&&b.Nb(0,"i",25)}function de(e,t){1&e&&(b.Rb(0,"span"),b.Hc(1,"Update"),b.Qb())}var be,me,ue,fe=((be=function(){function t(i,n,r,a,o,c,s){e(this,t),this.formBuilder=i,this.mileageService=n,this.mileageDetailService=r,this.router=a,this.processService=o,this.sidebarService=c,this.activatedRoute=s,this.mileageDetails=[],this.mileageId=this.activatedRoute.snapshot.params.id}return i(t,[{key:"getMileage",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.mileageService.getMileage(this.mileageId);case 3:this.mileage=e.sent,this.mileageDetails=this.mileage.mileageDetails,console.log(this.mileage.mileageDetails),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,this,[[0,8]])})))}},{key:"editMileageDetail",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.mileageDetailService.editMileageDetail(e.pk_mileage_detailid,e);case 3:i=t.sent,this.mileageDetails.push(i),this.editMode=!1,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,this,[[0,7]])})))}},{key:"addMileageDetails",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=Object.assign(Object.assign({},this.addMileageForm.value),{fk_mileageid:this.mileage.pk_mileageid})).pk_mileage_detailid){e.next=5;break}this.editMileageDetail(t),e.next=14;break;case 5:return e.prev=5,e.next=8,this.mileageDetailService.addMileageDetail(t);case 8:i=e.sent,this.mileageDetails.push(i),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(5);case 14:case"end":return e.stop()}}),e,this,[[5,12]])})))}},{key:"addMileage",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.mileage){e.next=10;break}return console.log(this.processId),e.prev=2,e.next=5,this.mileageService.addMileage({fk_processid:this.processId});case 5:this.mileage=e.sent,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:this.addMileageDetails(),this.initForm();case 11:case"end":return e.stop()}}),e,this,[[2,8]])})))}},{key:"handleEditMileage",value:function(e){var t=this.mileageDetails.findIndex((function(t){return t.pk_mileage_detailid===e})),i=this.mileageDetails.splice(t,1);this.editMode=!0,this.initForm(i[0])}},{key:"handleDeleteMileage",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=this.mileageDetails.findIndex((function(t){return t.pk_mileage_detailid===e})),t.prev=1,t.next=4,this.mileageDetailService.deleteMileageDetail(e);case 4:this.mileageDetails.splice(i,1),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,this,[[1,7]])})))}},{key:"navigateToDetails",value:function(){this.router.navigate(["/mileage",this.mileage.pk_mileageid])}},{key:"ngOnInit",value:function(){var e=this;Object(x.a)(s.a.AddMileage,this.processService).then((function(t){e.processId=t})),this.getMileage(),this.initForm(),this.sidebarService.setTitle("myRequests")}},{key:"initForm",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.addMileageForm=this.formBuilder.group({pk_mileage_detailid:e.pk_mileage_detailid,start_km:[e.start_km,I.r.compose([I.r.required])],end_km:[e.end_km,I.r.compose([I.r.required])],company_km:[e.company_km,I.r.compose([I.r.required])],date:[e.date,I.r.compose([I.r.required])],home_office:[e.home_office,I.r.compose([I.r.required])],description:[e.description,[I.r.compose([I.r.required])]],own_km:[e.own_km,I.r.compose([I.r.required])],fk_mileageid:e.fk_mileageid})}},{key:"formValidation",get:function(){return this.addMileageForm.controls}}]),t}()).\u0275fac=function(e){return new(e||be)(b.Mb(I.b),b.Mb(S),b.Mb(q),b.Mb(o.b),b.Mb(O.a),b.Mb(f.a),b.Mb(o.a))},be.\u0275cmp=b.Gb({type:be,selectors:[["app-edit-mileage"]],decls:54,vars:12,consts:[[1,"card","login-card","dropdown-all","w-100"],[1,"card-header","card-header-customer"],[1,"card-body","login-card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"row"],[1,"col-2"],["for","Date"],["type","date","formControlName","date","placeholder","Date",1,"form-control"],["class","text-danger small",4,"ngIf"],["type","text","formControlName","start_km","placeholder","Start KMs",1,"form-control"],["for","own"],["type","text","formControlName","end_km","placeholder","End Kms",1,"form-control"],["type","text","formControlName","own_km","placeholder","Own Kms",1,"form-control"],["type","text","formControlName","home_office","placeholder","Home Office",1,"form-control"],["type","text","formControlName","company_km","placeholder","Company Km",1,"form-control"],[1,"col-12"],["for","description"],["id","description","placeholder","Description . . . ","rows","3","formControlName","description",1,"form-control"],[1,"btn","btn-primary"],["class","mdi mdi-plus",4,"ngIf"],[4,"ngIf"],[3,"mileageDetails","editMileageEvent","deleteMileageEvent"],[1,"btn","btn-primary",3,"disabled","click"],[1,"text-danger","small"],[1,"mdi","mdi-plus"]],template:function(e,t){1&e&&(b.Rb(0,"div",0),b.Rb(1,"div",1),b.Rb(2,"strong"),b.Hc(3,"Mileage Creation Details"),b.Qb(),b.Qb(),b.Rb(4,"div",2),b.Rb(5,"form",3),b.cc("ngSubmit",(function(){return t.addMileage()})),b.Rb(6,"div",4),b.Rb(7,"div",5),b.Rb(8,"div",6),b.Rb(9,"label",7),b.Hc(10,"Date"),b.Qb(),b.Nb(11,"input",8),b.Fc(12,ie,2,0,"div",9),b.Qb(),b.Rb(13,"div",6),b.Rb(14,"label",7),b.Hc(15,"Start Km"),b.Qb(),b.Nb(16,"input",10),b.Fc(17,ne,2,0,"div",9),b.Qb(),b.Rb(18,"div",6),b.Rb(19,"label",11),b.Hc(20,"End KM"),b.Qb(),b.Nb(21,"input",12),b.Fc(22,re,2,0,"div",9),b.Qb(),b.Rb(23,"div",6),b.Rb(24,"label",11),b.Hc(25,"Own KM"),b.Qb(),b.Nb(26,"input",13),b.Fc(27,ae,2,0,"div",9),b.Qb(),b.Rb(28,"div",6),b.Rb(29,"label",11),b.Hc(30,"Home Office"),b.Qb(),b.Nb(31,"input",14),b.Fc(32,oe,2,0,"div",9),b.Qb(),b.Rb(33,"div",6),b.Rb(34,"label",7),b.Hc(35,"Company Km"),b.Qb(),b.Nb(36,"input",15),b.Fc(37,ce,2,0,"div",9),b.Qb(),b.Rb(38,"div",16),b.Rb(39,"label",17),b.Hc(40,"Comment"),b.Qb(),b.Nb(41,"textarea",18),b.Fc(42,se,2,0,"div",9),b.Qb(),b.Qb(),b.Qb(),b.Rb(43,"button",19),b.Fc(44,le,1,0,"i",20),b.Fc(45,de,2,0,"span",21),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(46,"div",0),b.Rb(47,"div",1),b.Rb(48,"strong"),b.Hc(49,"Mileage Details"),b.Qb(),b.Qb(),b.Rb(50,"div",2),b.Rb(51,"app-mileage-details",22),b.cc("editMileageEvent",(function(e){return t.handleEditMileage(e)}))("deleteMileageEvent",(function(e){return t.handleDeleteMileage(e)})),b.Qb(),b.Rb(52,"button",23),b.cc("click",(function(){return t.navigateToDetails()})),b.Hc(53," Submit "),b.Qb(),b.Qb(),b.Qb()),2&e&&(b.zb(5),b.mc("formGroup",t.addMileageForm),b.zb(7),b.mc("ngIf",t.submitted&&t.formValidation.date.errors),b.zb(5),b.mc("ngIf",t.submitted&&t.formValidation.start_km.errors),b.zb(5),b.mc("ngIf",t.submitted&&t.formValidation.end_kms.errors),b.zb(5),b.mc("ngIf",t.submitted&&t.formValidation.own_km.errors),b.zb(5),b.mc("ngIf",t.submitted&&t.formValidation.end_kms.errors),b.zb(5),b.mc("ngIf",t.submitted&&t.formValidation.company_km.errors),b.zb(5),b.mc("ngIf",t.submitted&&t.formValidation.bank_details.errors),b.zb(2),b.mc("ngIf",!t.editMode),b.zb(1),b.mc("ngIf",t.editMode),b.zb(6),b.mc("mileageDetails",t.mileageDetails),b.zb(1),b.mc("disabled",!t.mileageDetails.length))},directives:[I.t,I.k,I.e,I.a,I.j,I.d,a.l,N],styles:[""]}),be),pe=[{path:"",component:r("jljr").a,children:[{path:"mileages",component:D},{path:"add-mileage",component:J},{path:"edit-mileage/:id",component:fe},{path:"mileage/:id",component:te}]}],ge=((me=function t(){e(this,t)}).\u0275mod=b.Kb({type:me}),me.\u0275inj=b.Jb({factory:function(e){return new(e||me)},imports:[[o.f.forChild(pe)],o.f]}),me),ve=r("WM+C"),he=((ue=function t(){e(this,t)}).\u0275mod=b.Kb({type:ue}),ue.\u0275inj=b.Jb({factory:function(e){return new(e||ue)},imports:[[a.b,ge,I.o,p.b,ve.a]]}),ue)}}])}();