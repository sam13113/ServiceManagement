import { trigger, transition, animate, state, style, query, group, animateChild } from '@angular/animations';

export let fade = trigger('fade', [state('void', style({ opacity: 0 })), transition(':enter', [animate(2000)])]);
const forwardAnimation = [
  style({
    position: 'relative',
    height: '!'
  }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  //
  query(':enter', [
    style({ transform: 'translateX(100%)' })
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('500ms cubic-bezier(.92,0,.32,.92)', style({ transform: 'translateX(-100%)' }))
    ]),
    query(':enter', [
      animate('500ms cubic-bezier(.92,0,.32,.92)', style({ transform: 'translateX(0%)' }))
    ])
  ]),
  query(':enter', animateChild()),
];
const reverseAnimation = [
  style({ position: 'relative', height: '!' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  //
  query(':enter', [
    style({ transform: 'translateX(-100%)' })
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('500ms cubic-bezier(.92,0,.32,.92)', style({ transform: 'translateX(100%)' }))
    ]),
    query(':enter', [
      animate('500ms cubic-bezier(.92,0,.32,.92)', style({ transform: 'translateX(0%)' }))
    ])
  ]),
  query(':enter', animateChild()),
];

export let  routerTransition =
   trigger('routerTransition',
   [

    transition('HomePage => PortfolioPage', forwardAnimation),

    // transition('PortfolioProjectsPage => PortfolioPage', reverseAnimation),
    // transition('PortfolioPage => PortfolioProjectsPage', forwardAnimation),

    // transition('DashboardPage => PortfolioProjectsPage', reverseAnimation),
    // transition('PortfolioProjectsPage => DashboardPage', forwardAnimation),

    transition('DashboardPage => PortfolioPage', reverseAnimation),
    transition('PortfolioPage => DashboardPage', forwardAnimation),

    transition('ContractsPage => DashboardPage', reverseAnimation),
    transition('DashboardPage => ContractsPage', forwardAnimation),

    transition('DatasourcingPage => DashboardPage', reverseAnimation),
    transition('DashboardPage => DatasourcingPage', forwardAnimation),

    transition('ContractsPage => DatasourcingPage', reverseAnimation),
    transition('DatasourcingPage => ContractsPage', forwardAnimation),
//clicking home from anywhere
    transition('DashboardPage => HomePage', reverseAnimation),
    transition('PortfolioPage => HomePage', reverseAnimation),
    transition('DatasourcingPage => HomePage', reverseAnimation),
    transition('ContractsPage => HomePage', reverseAnimation)
  ]
  )
;





