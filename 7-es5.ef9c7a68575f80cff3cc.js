(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{O6Wr:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),r=function(){},o=u("pMnS"),a=u("SVse"),e=u("LZcD"),c=function(){function l(l,n,u){this.data=l,this.router=n,this.facade=u}var n=l.prototype;return n.ngOnInit=function(){var l=this;this.data.getSubProjects().subscribe(function(n){return l.subProjects$=n})},n.showDatasourcing=function(l){this.facade.setRoutingConstant(e.b.SERVICE),this.router.navigateByUrl(this.facade.getRoutingObject().url,{skipLocationChange:!0})},l}(),i=u("EnSQ"),s=u("iInd"),b=u("t6nJ"),d=t.pb({encapsulation:0,styles:[[".sub-project-card[_ngcontent-%COMP%]{border-radius:.15rem}"]],data:{}});function p(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,18,"tr",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showDatasourcing(u)&&t),t},null,null)),(l()(),t.rb(1,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,1,"div",[["class","small text-muted"]],null,null,null,null,null)),(l()(),t.Ib(3,null,[" "," "])),(l()(),t.rb(4,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,1,"div",[["class","small text-muted"]],null,null,null,null,null)),(l()(),t.Ib(6,null,[" "," "])),(l()(),t.rb(7,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.rb(8,0,null,null,1,"div",[["class","small text-muted"]],null,null,null,null,null)),(l()(),t.Ib(9,null,[" "," "])),(l()(),t.rb(10,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.rb(11,0,null,null,1,"div",[["class","bg-success small text-white sub-project-card"]],null,null,null,null,null)),(l()(),t.Ib(12,null,[" "," "])),(l()(),t.rb(13,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.rb(14,0,null,null,1,"div",[["class","bg-warning small text-white sub-project-card"]],null,null,null,null,null)),(l()(),t.Ib(15,null,[" "," "])),(l()(),t.rb(16,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.rb(17,0,null,null,1,"div",[["class","bg-danger small text-white sub-project-card"]],null,null,null,null,null)),(l()(),t.Ib(18,null,[" "," "]))],null,function(l,n){l(n,3,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.domain),l(n,9,0,n.context.$implicit.manager),l(n,12,0,n.context.$implicit.activeSLA),l(n,15,0,n.context.$implicit.atRiskSLA),l(n,18,0,n.context.$implicit.breachedSLA)})}function h(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,17,"table",[["class","table table-responsive-sm table-hover table-outline mb-0"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,13,"thead",[["class","thead-light"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,1,"th",[["class","small"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Service"])),(l()(),t.rb(5,0,null,null,1,"th",[["class","small"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Domain"])),(l()(),t.rb(7,0,null,null,1,"th",[["class","small"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Manager"])),(l()(),t.rb(9,0,null,null,1,"th",[["class","small"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Completed"])),(l()(),t.rb(11,0,null,null,1,"th",[["class","small"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["In progress"])),(l()(),t.rb(13,0,null,null,1,"th",[["class","small"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Breached"])),(l()(),t.rb(15,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,p)),t.qb(17,278528,null,0,a.i,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,17,0,n.component.subProjects$)},null)}var f=u("hrfs"),g=function(){function l(){this.lineChartData=[{data:[65,59,80,81,56,55,40],label:"Kraft"},{data:[28,48,40,19,86,27,90],label:"Leben"},{data:[18,48,77,9,100,47,80],label:"CFS"},{data:[14,53,60,90,13,66,60],label:"PMS"}],this.lineChartLabels=["January","February","March","April","May","June","July"],this.lineChartOptions={animation:!1,responsive:!0},this.lineChartColours=[{backgroundColor:"rgba(255, 110, 84, 0.1)",borderColor:"#ff6e54",pointBackgroundColor:"#ff6e54",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"rgba(255, 166, 0, 0.1)",borderColor:"#ffa600",pointBackgroundColor:"#ffa600",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(77,83,96,1)"},{backgroundColor:"rgba(221, 81, 130, 0.1)",borderColor:"#dd5182",pointBackgroundColor:"#dd5182",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"rgba(149, 81, 150, 0.1)",borderColor:"#955196",pointBackgroundColor:"#955196",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(77,83,96,1)"}],this.lineChartLegend=!0,this.lineChartType="line"}var n=l.prototype;return n.ngOnInit=function(){},n.chartHovered=function(l){},n.chartClicked=function(l){},l}(),C=t.pb({encapsulation:0,styles:[["p[_ngcontent-%COMP%]{font-family:Lato}"]],data:{}});function v(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["style","display: block;  height: 400px; width: 400px"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"canvas",[["baseChart",""],["class","chart"]],null,[[null,"chartHover"],[null,"chartClick"]],function(l,n,u){var t=!0,r=l.component;return"chartHover"===n&&(t=!1!==r.chartHovered(u)&&t),"chartClick"===n&&(t=!1!==r.chartClicked(u)&&t),t},null,null)),t.qb(2,999424,null,0,f.a,[t.k,f.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],colors:[4,"colors"],legend:[5,"legend"]},{chartClick:"chartClick",chartHover:"chartHover"})],function(l,n){var u=n.component;l(n,2,0,u.lineChartData,u.lineChartLabels,u.lineChartOptions,u.lineChartType,u.lineChartColours,u.lineChartLegend)},null)}var m=function(){function l(){this.doughnutChartLabels=["Kraft","Leben","CFS","PMS"],this.doughnutChartData=[350,450,100,255],this.doughnutChartType="doughnut",this.donutColors=[{backgroundColor:["#ff6e54","#ffa600","#dd5182","#955196"]}]}return l.prototype.ngOnInit=function(){},l}(),y=t.pb({encapsulation:0,styles:[["p[_ngcontent-%COMP%]{font-family:Lato}"]],data:{}});function k(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["style","display: block; height: 400px; width: 400px "]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"canvas",[["baseChart",""]],null,null,null,null,null)),t.qb(2,999424,null,0,f.a,[t.k,f.c],{data:[0,"data"],labels:[1,"labels"],chartType:[2,"chartType"],colors:[3,"colors"]},null)],function(l,n){var u=n.component;l(n,2,0,u.doughnutChartData,u.doughnutChartLabels,u.doughnutChartType,u.donutColors)},null)}var B=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),x=t.pb({encapsulation:0,styles:[[""]],data:{}});function I(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,3,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,1,"app-project-table",[],null,null,null,h,d)),t.qb(3,114688,null,0,c,[i.a,s.o,b.a],null,null),(l()(),t.rb(4,0,null,null,19,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,18,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(6,0,null,null,8,"div",[["class","card-body col-sm-12 col-lg-6"]],null,null,null,null,null)),(l()(),t.rb(7,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(8,0,null,null,2,"div",[["class","col-sm-5"]],null,null,null,null,null)),(l()(),t.rb(9,0,null,null,1,"div",[["class","small text-muted"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["# Breached SLAs Trends"])),(l()(),t.rb(11,0,null,null,0,"div",[["class","col-sm-7 d-none d-md-block"]],null,null,null,null,null)),(l()(),t.rb(12,0,null,null,2,"div",[["class","chart-wrapper"],["style","height:300px;margin-top:40px;"]],null,null,null,null,null)),(l()(),t.rb(13,0,null,null,1,"app-linechartcomponent",[],null,null,null,v,C)),t.qb(14,114688,null,0,g,[],null,null),(l()(),t.rb(15,0,null,null,8,"div",[["class","card-body col-sm-12 col-lg-6"]],null,null,null,null,null)),(l()(),t.rb(16,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(17,0,null,null,2,"div",[["class","col-sm-5"]],null,null,null,null,null)),(l()(),t.rb(18,0,null,null,1,"div",[["class","small text-muted"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["# SLA Breach by Service Pacakages"])),(l()(),t.rb(20,0,null,null,0,"div",[["class","col-sm-7 d-none d-md-block"]],null,null,null,null,null)),(l()(),t.rb(21,0,null,null,2,"div",[["class","chart-wrapper"],["style","height:300px;margin-top:40px;"]],null,null,null,null,null)),(l()(),t.rb(22,0,null,null,1,"app-doughnutchartcomponent",[],null,null,null,k,y)),t.qb(23,114688,null,0,m,[],null,null)],function(l,n){l(n,3,0),l(n,14,0),l(n,23,0)},null)}var w=t.nb("app-dashboard-project-content",B,function(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,1,"app-dashboard-project-content",[],null,null,null,I,x)),t.qb(1,114688,null,0,B,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),L={animation:"DashboardPage"},S=function(){};u.d(n,"DashboardProjectModuleNgFactory",function(){return j});var j=t.ob(r,[],function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[o.a,w]],[3,t.j],t.w]),t.Bb(4608,a.l,a.k,[t.t,[2,a.A]]),t.Bb(1073742336,a.b,a.b,[]),t.Bb(1073742336,f.b,f.b,[]),t.Bb(1073742336,s.p,s.p,[[2,s.u],[2,s.o]]),t.Bb(1073742336,S,S,[]),t.Bb(1073742336,r,r,[]),t.Bb(1024,s.m,function(){return[[{path:"",component:B,data:L}]]},[])])})}}]);