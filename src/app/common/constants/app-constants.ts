export enum RoutingEnumConstants {
  HOME,
  DASHBOARD,
  PORTFOLIO,
  CONTRACTS,
  SERVICE
}
export interface IRouteObject {
  key: string;
  url: string;
}
export class RouteConfig {
  public static homePageKey = 'home';
  public static portfolioPageKey = 'portfolio';
  public static projectsPageKey = 'projects';
  public static dashboardPageKey = 'projectDashboard';
  public static ServicePageKey = 'service';
  public static contractsPageKey = 'contracts';

  public static homePageUrl = '';
    public static pathMatchFull = 'full';
    public static anyPageUrl = '**';
    public static portfolioPageUrl = 'portfolio';
    public static projectsPageUrl = 'portfolio/projects';
    public static dashboardPageUrl = 'portfolio/projects/dashboard';
    public static servicesPageUrl = 'portfolio/projects/dashboard/service';
    public static contractsPageUrl = 'portfolio/projects/dashboard/contracts';



 public static getRouteObject(
  routingEnum: RoutingEnumConstants
): IRouteObject {
  switch (routingEnum) {
    case RoutingEnumConstants.HOME:
      return { key: RouteConfig.homePageKey, url: RouteConfig.homePageUrl };
    case RoutingEnumConstants.DASHBOARD:
      return { key: RouteConfig.dashboardPageKey, url: RouteConfig.dashboardPageUrl };
    case RoutingEnumConstants.PORTFOLIO:
      return { key: RouteConfig.portfolioPageKey, url: RouteConfig.portfolioPageUrl };
    case RoutingEnumConstants.CONTRACTS:
      return { key: RouteConfig.contractsPageKey, url: RouteConfig.contractsPageUrl };
    case RoutingEnumConstants.SERVICE:
      return { key: RouteConfig.ServicePageKey, url: RouteConfig.servicesPageUrl };
  }
}
}
