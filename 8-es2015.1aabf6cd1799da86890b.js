(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"YK+w":function(l,t,n){"use strict";n.r(t);var e=n("8Y7J");class o{}var s=n("pMnS");class i{constructor(l){this.data=l}ngOnInit(){this.data.getProject().subscribe(l=>this.project$=l)}}var a=n("EnSQ"),u=e.pb({encapsulation:0,styles:[[".tile-icon[_ngcontent-%COMP%]{font-size:2em}.card-body[_ngcontent-%COMP%]{flex:.6 1 auto;padding-top:0!important}.tile[_ngcontent-%COMP%]{height:75px}@media(max-width:992px){.tile-icon[_ngcontent-%COMP%]{display:none}}@media(max-width:768px){.tile-icon[_ngcontent-%COMP%]{font-size:3em}}@media(max-width:576px){.tile-icon[_ngcontent-%COMP%]{display:block;font-size:2em}.tile-text[_ngcontent-%COMP%]{margin-top:3%}}"]],data:{}});function r(l){return e.Jb(0,[(l()(),e.rb(0,0,null,null,30,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,9,"div",[["class","col-sm-4 col-lg-4"]],null,null,null,null,null)),(l()(),e.rb(2,0,null,null,8,"div",[["class","card text-white bg-success tile"]],null,null,null,null,null)),(l()(),e.rb(3,0,null,null,7,"div",[["class","row tile-text"]],null,null,null,null,null)),(l()(),e.rb(4,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.rb(5,0,null,null,1,"div",[["class","text-value"]],null,null,null,null,null)),(l()(),e.Ib(6,null,["",""])),(l()(),e.rb(7,0,null,null,1,"div",[["class","card-"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Active SLAs"])),(l()(),e.rb(9,0,null,null,1,"div",[["class","tile-icon"]],null,null,null,null,null)),(l()(),e.rb(10,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-clock-o"]],null,null,null,null,null)),(l()(),e.rb(11,0,null,null,9,"div",[["class","col-sm-4 col-lg-4"]],null,null,null,null,null)),(l()(),e.rb(12,0,null,null,8,"div",[["class","card text-white bg-warning tile"]],null,null,null,null,null)),(l()(),e.rb(13,0,null,null,7,"div",[["class","row tile-text"]],null,null,null,null,null)),(l()(),e.rb(14,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.rb(15,0,null,null,1,"div",[["class","text-value"]],null,null,null,null,null)),(l()(),e.Ib(16,null,["",""])),(l()(),e.rb(17,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["At Risk SLAs"])),(l()(),e.rb(19,0,null,null,1,"div",[["class","tile-icon"]],null,null,null,null,null)),(l()(),e.rb(20,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-exclamation-circle"]],null,null,null,null,null)),(l()(),e.rb(21,0,null,null,9,"div",[["class","col-sm-4 col-lg-4"]],null,null,null,null,null)),(l()(),e.rb(22,0,null,null,8,"div",[["class","card text-white bg-danger tile"]],null,null,null,null,null)),(l()(),e.rb(23,0,null,null,7,"div",[["class","row tile-text"]],null,null,null,null,null)),(l()(),e.rb(24,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.rb(25,0,null,null,1,"div",[["class","text-value"]],null,null,null,null,null)),(l()(),e.Ib(26,null,["",""])),(l()(),e.rb(27,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Breached SLAs"])),(l()(),e.rb(29,0,null,null,1,"div",[["class","tile-icon"]],null,null,null,null,null)),(l()(),e.rb(30,0,null,null,0,"i",[["aria-hidden","true"],["class","fa  fa-ban"]],null,null,null,null,null))],null,function(l,t){var n=t.component;l(t,6,0,null==n.project$?null:n.project$.activeSLA),l(t,16,0,null==n.project$?null:n.project$.atRiskSLA),l(t,26,0,null==n.project$?null:n.project$.activeSLA)})}var p=n("LZcD");class y{constructor(l,t){this.router=l,this.facade=t}ngOnInit(){}showContractsPage(){this.facade.setRoutingConstant(p.b.CONTRACTS),this.router.navigateByUrl(this.facade.getRoutingObject().url,{skipLocationChange:!0})}}var c=n("iInd"),m=n("t6nJ"),f=e.pb({encapsulation:0,styles:[[""]],data:{}});function b(l){return e.Jb(0,[(l()(),e.rb(0,0,null,null,9,"div",[["class","row dashboardbtn"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,8,"div",[["class","btn-group btn-group-toggle mr-3 col-sm-12 "],["data-toggle","buttons"],["style","align-content: bottom;"]],null,null,null,null,null)),(l()(),e.rb(2,0,null,null,1,"label",[["btnRadio","1"],["class","btn btn-outline-secondary bg-white"],["id","option1"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Governance"])),(l()(),e.rb(4,0,null,null,1,"label",[["btnRadio","2"],["class","btn btn-outline-secondary bg-white"],["id","option2"]],null,[[null,"click"]],function(l,t,n){var e=!0;return"click"===t&&(e=!1!==l.component.showContractsPage()&&e),e},null,null)),(l()(),e.Ib(-1,null,["Contracts"])),(l()(),e.rb(6,0,null,null,1,"label",[["btnRadio","3"],["class","btn btn-outline-secondary bg-white"],["id","option3"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Knowledge Repository"])),(l()(),e.rb(8,0,null,null,1,"label",[["btnRadio","4"],["class","btn btn-outline-secondary bg-white"],["id","option4"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Organisation & Contacts"]))],null,null)}class d{ngOnInit(){}prepareDashBoardRoute(l){return l.activatedRouteData.animation}}var g=e.pb({encapsulation:0,styles:[['[_nghost-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:20px;color:#333;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.dashboardbtn[_ngcontent-%COMP%]{position:absolute;bottom:0;margin-bottom:1.5rem}']],data:{animation:[{type:7,name:"routerTransition",definitions:[{type:1,expr:"HomePage => PortfolioPage",animation:[{type:6,styles:{position:"relative",height:"!"},offset:null},{type:11,selector:":enter, :leave",animation:[{type:6,styles:{position:"absolute",top:0,left:0,width:"100%"},offset:null}],options:null},{type:11,selector:":enter",animation:[{type:6,styles:{transform:"translateX(100%)"},offset:null}],options:null},{type:11,selector:":leave",animation:{type:9,options:null},options:null},{type:3,steps:[{type:11,selector:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(-100%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null},{type:11,selector:":enter",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(0%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null}],options:null},{type:11,selector:":enter",animation:{type:9,options:null},options:null}],options:null},{type:1,expr:"DashboardPage => PortfolioPage",animation:[{type:6,styles:{position:"relative",height:"!"},offset:null},{type:11,selector:":enter, :leave",animation:[{type:6,styles:{position:"absolute",top:0,left:0,width:"100%"},offset:null}],options:null},{type:11,selector:":enter",animation:[{type:6,styles:{transform:"translateX(-100%)"},offset:null}],options:null},{type:11,selector:":leave",animation:{type:9,options:null},options:null},{type:3,steps:[{type:11,selector:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(100%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null},{type:11,selector:":enter",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(0%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null}],options:null},{type:11,selector:":enter",animation:{type:9,options:null},options:null}],options:null},{type:1,expr:"PortfolioPage => DashboardPage",animation:[{type:6,styles:{position:"relative",height:"!"},offset:null},{type:11,selector:":enter, :leave",animation:[{type:6,styles:{position:"absolute",top:0,left:0,width:"100%"},offset:null}],options:null},{type:11,selector:":enter",animation:[{type:6,styles:{transform:"translateX(100%)"},offset:null}],options:null},{type:11,selector:":leave",animation:{type:9,options:null},options:null},{type:3,steps:[{type:11,selector:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(-100%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null},{type:11,selector:":enter",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(0%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null}],options:null},{type:11,selector:":enter",animation:{type:9,options:null},options:null}],options:null},{type:1,expr:"ContractsPage => DashboardPage",animation:[{type:6,styles:{position:"relative",height:"!"},offset:null},{type:11,selector:":enter, :leave",animation:[{type:6,styles:{position:"absolute",top:0,left:0,width:"100%"},offset:null}],options:null},{type:11,selector:":enter",animation:[{type:6,styles:{transform:"translateX(-100%)"},offset:null}],options:null},{type:11,selector:":leave",animation:{type:9,options:null},options:null},{type:3,steps:[{type:11,selector:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(100%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null},{type:11,selector:":enter",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(0%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null}],options:null},{type:11,selector:":enter",animation:{type:9,options:null},options:null}],options:null},{type:1,expr:"DashboardPage => ContractsPage",animation:[{type:6,styles:{position:"relative",height:"!"},offset:null},{type:11,selector:":enter, :leave",animation:[{type:6,styles:{position:"absolute",top:0,left:0,width:"100%"},offset:null}],options:null},{type:11,selector:":enter",animation:[{type:6,styles:{transform:"translateX(100%)"},offset:null}],options:null},{type:11,selector:":leave",animation:{type:9,options:null},options:null},{type:3,steps:[{type:11,selector:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(-100%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null},{type:11,selector:":enter",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(0%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null}],options:null},{type:11,selector:":enter",animation:{type:9,options:null},options:null}],options:null},{type:1,expr:"DatasourcingPage => DashboardPage",animation:[{type:6,styles:{position:"relative",height:"!"},offset:null},{type:11,selector:":enter, :leave",animation:[{type:6,styles:{position:"absolute",top:0,left:0,width:"100%"},offset:null}],options:null},{type:11,selector:":enter",animation:[{type:6,styles:{transform:"translateX(-100%)"},offset:null}],options:null},{type:11,selector:":leave",animation:{type:9,options:null},options:null},{type:3,steps:[{type:11,selector:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(100%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null},{type:11,selector:":enter",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(0%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null}],options:null},{type:11,selector:":enter",animation:{type:9,options:null},options:null}],options:null},{type:1,expr:"DashboardPage => DatasourcingPage",animation:[{type:6,styles:{position:"relative",height:"!"},offset:null},{type:11,selector:":enter, :leave",animation:[{type:6,styles:{position:"absolute",top:0,left:0,width:"100%"},offset:null}],options:null},{type:11,selector:":enter",animation:[{type:6,styles:{transform:"translateX(100%)"},offset:null}],options:null},{type:11,selector:":leave",animation:{type:9,options:null},options:null},{type:3,steps:[{type:11,selector:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(-100%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null},{type:11,selector:":enter",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(0%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null}],options:null},{type:11,selector:":enter",animation:{type:9,options:null},options:null}],options:null},{type:1,expr:"ContractsPage => DatasourcingPage",animation:[{type:6,styles:{position:"relative",height:"!"},offset:null},{type:11,selector:":enter, :leave",animation:[{type:6,styles:{position:"absolute",top:0,left:0,width:"100%"},offset:null}],options:null},{type:11,selector:":enter",animation:[{type:6,styles:{transform:"translateX(-100%)"},offset:null}],options:null},{type:11,selector:":leave",animation:{type:9,options:null},options:null},{type:3,steps:[{type:11,selector:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(100%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null},{type:11,selector:":enter",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(0%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null}],options:null},{type:11,selector:":enter",animation:{type:9,options:null},options:null}],options:null},{type:1,expr:"DatasourcingPage => ContractsPage",animation:[{type:6,styles:{position:"relative",height:"!"},offset:null},{type:11,selector:":enter, :leave",animation:[{type:6,styles:{position:"absolute",top:0,left:0,width:"100%"},offset:null}],options:null},{type:11,selector:":enter",animation:[{type:6,styles:{transform:"translateX(100%)"},offset:null}],options:null},{type:11,selector:":leave",animation:{type:9,options:null},options:null},{type:3,steps:[{type:11,selector:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(-100%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null},{type:11,selector:":enter",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(0%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null}],options:null},{type:11,selector:":enter",animation:{type:9,options:null},options:null}],options:null},{type:1,expr:"DashboardPage => HomePage",animation:[{type:6,styles:{position:"relative",height:"!"},offset:null},{type:11,selector:":enter, :leave",animation:[{type:6,styles:{position:"absolute",top:0,left:0,width:"100%"},offset:null}],options:null},{type:11,selector:":enter",animation:[{type:6,styles:{transform:"translateX(-100%)"},offset:null}],options:null},{type:11,selector:":leave",animation:{type:9,options:null},options:null},{type:3,steps:[{type:11,selector:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(100%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null},{type:11,selector:":enter",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(0%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null}],options:null},{type:11,selector:":enter",animation:{type:9,options:null},options:null}],options:null},{type:1,expr:"PortfolioPage => HomePage",animation:[{type:6,styles:{position:"relative",height:"!"},offset:null},{type:11,selector:":enter, :leave",animation:[{type:6,styles:{position:"absolute",top:0,left:0,width:"100%"},offset:null}],options:null},{type:11,selector:":enter",animation:[{type:6,styles:{transform:"translateX(-100%)"},offset:null}],options:null},{type:11,selector:":leave",animation:{type:9,options:null},options:null},{type:3,steps:[{type:11,selector:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(100%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null},{type:11,selector:":enter",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(0%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null}],options:null},{type:11,selector:":enter",animation:{type:9,options:null},options:null}],options:null},{type:1,expr:"DatasourcingPage => HomePage",animation:[{type:6,styles:{position:"relative",height:"!"},offset:null},{type:11,selector:":enter, :leave",animation:[{type:6,styles:{position:"absolute",top:0,left:0,width:"100%"},offset:null}],options:null},{type:11,selector:":enter",animation:[{type:6,styles:{transform:"translateX(-100%)"},offset:null}],options:null},{type:11,selector:":leave",animation:{type:9,options:null},options:null},{type:3,steps:[{type:11,selector:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(100%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null},{type:11,selector:":enter",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(0%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null}],options:null},{type:11,selector:":enter",animation:{type:9,options:null},options:null}],options:null},{type:1,expr:"ContractsPage => HomePage",animation:[{type:6,styles:{position:"relative",height:"!"},offset:null},{type:11,selector:":enter, :leave",animation:[{type:6,styles:{position:"absolute",top:0,left:0,width:"100%"},offset:null}],options:null},{type:11,selector:":enter",animation:[{type:6,styles:{transform:"translateX(-100%)"},offset:null}],options:null},{type:11,selector:":leave",animation:{type:9,options:null},options:null},{type:3,steps:[{type:11,selector:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(100%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null},{type:11,selector:":enter",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(0%)"},offset:null},timings:"500ms cubic-bezier(.92,0,.32,.92)"}],options:null}],options:null},{type:11,selector:":enter",animation:{type:9,options:null},options:null}],options:null}],options:{}}]}});function v(l){return e.Jb(0,[(l()(),e.rb(0,0,null,null,18,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,17,"main",[["class","main"]],null,null,null,null,null)),(l()(),e.rb(2,0,null,null,5,"div",[["class","card card-header"]],null,null,null,null,null)),(l()(),e.rb(3,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.rb(4,0,null,null,1,"div",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["ABBS :: Data sourcing"])),(l()(),e.rb(6,0,null,null,1,"div",[["class","col-sm-8"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Service Pacakage Dashboard "])),(l()(),e.rb(8,0,null,null,10,"div",[["class","animated fadeIn"]],null,null,null,null,null)),(l()(),e.rb(9,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.rb(10,0,null,null,2,"div",[["class","col-sm-12 col-md-8 col-lg-8"]],null,null,null,null,null)),(l()(),e.rb(11,0,null,null,1,"dashboard-tiles",[],null,null,null,r,u)),e.qb(12,114688,null,0,i,[a.a],null,null),(l()(),e.rb(13,0,null,null,2,"div",[["class","col-sm-8 col-md-4  col-lg-4"]],null,null,null,null,null)),(l()(),e.rb(14,0,null,null,1,"dashboard-buttongrp",[],null,null,null,b,f)),e.qb(15,114688,null,0,y,[c.o,m.a],null,null),(l()(),e.rb(16,0,null,null,2,"div",[["class","routeContainer"]],[[24,"@routerTransition",0]],null,null,null,null)),(l()(),e.rb(17,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.qb(18,212992,[["outlet",4]],0,c.q,[c.b,e.O,e.j,[8,null],e.h],null,null)],function(l,t){l(t,12,0),l(t,15,0),l(t,18,0)},function(l,t){l(t,16,0,t.component.prepareDashBoardRoute(e.Db(t,18)))})}function h(l){return e.Jb(0,[(l()(),e.rb(0,0,null,null,1,"app-dashboard",[],null,null,null,v,g)),e.qb(1,114688,null,0,d,[],null,null)],function(l,t){l(t,1,0)},null)}var P=e.nb("app-dashboard",d,h,{},{},[]),w=n("SVse"),X=n("hrfs");const x={animation:"DashboardPage"};class z{}n.d(t,"DashboardModuleNgFactory",function(){return C});var C=e.ob(o,[],function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[s.a,P]],[3,e.j],e.w]),e.Bb(4608,w.l,w.k,[e.t,[2,w.A]]),e.Bb(1073742336,w.b,w.b,[]),e.Bb(1073742336,X.b,X.b,[]),e.Bb(1073742336,c.p,c.p,[[2,c.u],[2,c.o]]),e.Bb(1073742336,z,z,[]),e.Bb(1073742336,o,o,[]),e.Bb(1024,c.m,function(){return[[{path:"",component:d,children:[{path:"contracts",loadChildren:"../contracts/contracts.module#ContractsModule"},{path:"service",loadChildren:"../service-record/service-record.module#ServiceRecordModule"},{path:"",loadChildren:"../dashboard-project/dashboard-project.module#DashboardProjectModule"}],data:x}]]},[])])})}}]);