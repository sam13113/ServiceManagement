(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{O6Wr:function(l,n,u){"use strict";u.r(n);var r=u("8Y7J");class t{}var a=u("pMnS"),o=u("SVse"),e=u("LZcD");class s{constructor(l,n,u){this.data=l,this.router=n,this.facade=u}ngOnInit(){this.data.getSubProjects().subscribe(l=>this.subProjects$=l)}showDatasourcing(l){this.facade.setRoutingConstant(e.b.SERVICE),this.router.navigateByUrl(this.facade.getRoutingObject().url,{skipLocationChange:!0})}}var c=u("EnSQ"),i=u("iInd"),b=u("t6nJ"),d=r.pb({encapsulation:0,styles:[[".sub-project-card[_ngcontent-%COMP%]{border-radius:.15rem}"]],data:{}});function h(l){return r.Jb(0,[(l()(),r.rb(0,0,null,null,18,"tr",[],null,[[null,"click"]],function(l,n,u){var r=!0;return"click"===n&&(r=!1!==l.component.showDatasourcing(u)&&r),r},null,null)),(l()(),r.rb(1,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),r.rb(2,0,null,null,1,"div",[["class","small text-muted"]],null,null,null,null,null)),(l()(),r.Ib(3,null,[" "," "])),(l()(),r.rb(4,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),r.rb(5,0,null,null,1,"div",[["class","small text-muted"]],null,null,null,null,null)),(l()(),r.Ib(6,null,[" "," "])),(l()(),r.rb(7,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),r.rb(8,0,null,null,1,"div",[["class","small text-muted"]],null,null,null,null,null)),(l()(),r.Ib(9,null,[" "," "])),(l()(),r.rb(10,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),r.rb(11,0,null,null,1,"div",[["class","bg-success small text-white sub-project-card"]],null,null,null,null,null)),(l()(),r.Ib(12,null,[" "," "])),(l()(),r.rb(13,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),r.rb(14,0,null,null,1,"div",[["class","bg-warning small text-white sub-project-card"]],null,null,null,null,null)),(l()(),r.Ib(15,null,[" "," "])),(l()(),r.rb(16,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),r.rb(17,0,null,null,1,"div",[["class","bg-danger small text-white sub-project-card"]],null,null,null,null,null)),(l()(),r.Ib(18,null,[" "," "]))],null,function(l,n){l(n,3,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.domain),l(n,9,0,n.context.$implicit.manager),l(n,12,0,n.context.$implicit.activeSLA),l(n,15,0,n.context.$implicit.atRiskSLA),l(n,18,0,n.context.$implicit.breachedSLA)})}function p(l){return r.Jb(0,[(l()(),r.rb(0,0,null,null,17,"table",[["class","table table-responsive-sm table-hover table-outline mb-0"]],null,null,null,null,null)),(l()(),r.rb(1,0,null,null,13,"thead",[["class","thead-light"]],null,null,null,null,null)),(l()(),r.rb(2,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),r.rb(3,0,null,null,1,"th",[["class","small"]],null,null,null,null,null)),(l()(),r.Ib(-1,null,["Service"])),(l()(),r.rb(5,0,null,null,1,"th",[["class","small"]],null,null,null,null,null)),(l()(),r.Ib(-1,null,["Domain"])),(l()(),r.rb(7,0,null,null,1,"th",[["class","small"]],null,null,null,null,null)),(l()(),r.Ib(-1,null,["Manager"])),(l()(),r.rb(9,0,null,null,1,"th",[["class","small"]],null,null,null,null,null)),(l()(),r.Ib(-1,null,["Completed"])),(l()(),r.rb(11,0,null,null,1,"th",[["class","small"]],null,null,null,null,null)),(l()(),r.Ib(-1,null,["In progress"])),(l()(),r.rb(13,0,null,null,1,"th",[["class","small"]],null,null,null,null,null)),(l()(),r.Ib(-1,null,["Breached"])),(l()(),r.rb(15,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),r.gb(16777216,null,null,1,null,h)),r.qb(17,278528,null,0,o.i,[r.O,r.L,r.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,17,0,n.component.subProjects$)},null)}var g=u("hrfs");class f{constructor(){this.lineChartData=[{data:[65,59,80,81,56,55,40],label:"Kraft"},{data:[28,48,40,19,86,27,90],label:"Leben"},{data:[18,48,77,9,100,47,80],label:"CFS"},{data:[14,53,60,90,13,66,60],label:"PMS"}],this.lineChartLabels=["January","February","March","April","May","June","July"],this.lineChartOptions={animation:!1,responsive:!0},this.lineChartColours=[{backgroundColor:"rgba(255, 110, 84, 0.1)",borderColor:"#ff6e54",pointBackgroundColor:"#ff6e54",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"rgba(255, 166, 0, 0.1)",borderColor:"#ffa600",pointBackgroundColor:"#ffa600",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(77,83,96,1)"},{backgroundColor:"rgba(221, 81, 130, 0.1)",borderColor:"#dd5182",pointBackgroundColor:"#dd5182",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"rgba(149, 81, 150, 0.1)",borderColor:"#955196",pointBackgroundColor:"#955196",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(77,83,96,1)"}],this.lineChartLegend=!0,this.lineChartType="line"}ngOnInit(){}chartHovered(l){}chartClicked(l){}}var C=r.pb({encapsulation:0,styles:[["p[_ngcontent-%COMP%]{font-family:Lato}"]],data:{}});function v(l){return r.Jb(0,[(l()(),r.rb(0,0,null,null,2,"div",[["style","display: block;  height: 400px; width: 400px"]],null,null,null,null,null)),(l()(),r.rb(1,0,null,null,1,"canvas",[["baseChart",""],["class","chart"]],null,[[null,"chartHover"],[null,"chartClick"]],function(l,n,u){var r=!0,t=l.component;return"chartHover"===n&&(r=!1!==t.chartHovered(u)&&r),"chartClick"===n&&(r=!1!==t.chartClicked(u)&&r),r},null,null)),r.qb(2,999424,null,0,g.a,[r.k,g.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],colors:[4,"colors"],legend:[5,"legend"]},{chartClick:"chartClick",chartHover:"chartHover"})],function(l,n){var u=n.component;l(n,2,0,u.lineChartData,u.lineChartLabels,u.lineChartOptions,u.lineChartType,u.lineChartColours,u.lineChartLegend)},null)}class m{constructor(){this.doughnutChartLabels=["Kraft","Leben","CFS","PMS"],this.doughnutChartData=[350,450,100,255],this.doughnutChartType="doughnut",this.donutColors=[{backgroundColor:["#ff6e54","#ffa600","#dd5182","#955196"]}]}ngOnInit(){}}var k=r.pb({encapsulation:0,styles:[["p[_ngcontent-%COMP%]{font-family:Lato}"]],data:{}});function y(l){return r.Jb(0,[(l()(),r.rb(0,0,null,null,2,"div",[["style","display: block; height: 400px; width: 400px "]],null,null,null,null,null)),(l()(),r.rb(1,0,null,null,1,"canvas",[["baseChart",""]],null,null,null,null,null)),r.qb(2,999424,null,0,g.a,[r.k,g.c],{data:[0,"data"],labels:[1,"labels"],chartType:[2,"chartType"],colors:[3,"colors"]},null)],function(l,n){var u=n.component;l(n,2,0,u.doughnutChartData,u.doughnutChartLabels,u.doughnutChartType,u.donutColors)},null)}class B{constructor(){}ngOnInit(){}}var x=r.pb({encapsulation:0,styles:[[""]],data:{}});function I(l){return r.Jb(0,[(l()(),r.rb(0,0,null,null,3,"div",[["class","card"]],null,null,null,null,null)),(l()(),r.rb(1,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),r.rb(2,0,null,null,1,"app-project-table",[],null,null,null,p,d)),r.qb(3,114688,null,0,s,[c.a,i.o,b.a],null,null),(l()(),r.rb(4,0,null,null,19,"div",[["class","card"]],null,null,null,null,null)),(l()(),r.rb(5,0,null,null,18,"div",[["class","row"]],null,null,null,null,null)),(l()(),r.rb(6,0,null,null,8,"div",[["class","card-body col-sm-12 col-lg-6"]],null,null,null,null,null)),(l()(),r.rb(7,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),r.rb(8,0,null,null,2,"div",[["class","col-sm-5"]],null,null,null,null,null)),(l()(),r.rb(9,0,null,null,1,"div",[["class","small text-muted"]],null,null,null,null,null)),(l()(),r.Ib(-1,null,["# Breached SLAs Trends"])),(l()(),r.rb(11,0,null,null,0,"div",[["class","col-sm-7 d-none d-md-block"]],null,null,null,null,null)),(l()(),r.rb(12,0,null,null,2,"div",[["class","chart-wrapper"],["style","height:300px;margin-top:40px;"]],null,null,null,null,null)),(l()(),r.rb(13,0,null,null,1,"app-linechartcomponent",[],null,null,null,v,C)),r.qb(14,114688,null,0,f,[],null,null),(l()(),r.rb(15,0,null,null,8,"div",[["class","card-body col-sm-12 col-lg-6"]],null,null,null,null,null)),(l()(),r.rb(16,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),r.rb(17,0,null,null,2,"div",[["class","col-sm-5"]],null,null,null,null,null)),(l()(),r.rb(18,0,null,null,1,"div",[["class","small text-muted"]],null,null,null,null,null)),(l()(),r.Ib(-1,null,["# SLA Breach by Service Pacakages"])),(l()(),r.rb(20,0,null,null,0,"div",[["class","col-sm-7 d-none d-md-block"]],null,null,null,null,null)),(l()(),r.rb(21,0,null,null,2,"div",[["class","chart-wrapper"],["style","height:300px;margin-top:40px;"]],null,null,null,null,null)),(l()(),r.rb(22,0,null,null,1,"app-doughnutchartcomponent",[],null,null,null,y,k)),r.qb(23,114688,null,0,m,[],null,null)],function(l,n){l(n,3,0),l(n,14,0),l(n,23,0)},null)}function w(l){return r.Jb(0,[(l()(),r.rb(0,0,null,null,1,"app-dashboard-project-content",[],null,null,null,I,x)),r.qb(1,114688,null,0,B,[],null,null)],function(l,n){l(n,1,0)},null)}var L=r.nb("app-dashboard-project-content",B,w,{},{},[]);const S={animation:"DashboardPage"};class j{}u.d(n,"DashboardProjectModuleNgFactory",function(){return H});var H=r.ob(t,[],function(l){return r.Ab([r.Bb(512,r.j,r.Z,[[8,[a.a,L]],[3,r.j],r.w]),r.Bb(4608,o.l,o.k,[r.t,[2,o.A]]),r.Bb(1073742336,o.b,o.b,[]),r.Bb(1073742336,g.b,g.b,[]),r.Bb(1073742336,i.p,i.p,[[2,i.u],[2,i.o]]),r.Bb(1073742336,j,j,[]),r.Bb(1073742336,t,t,[]),r.Bb(1024,i.m,function(){return[[{path:"",component:B,data:S}]]},[])])})}}]);