export interface RouteDataModel {
    name: string
}

export interface LinkModel {
    text: string
}

export interface NavigationLinkModel extends LinkModel {
    route: RouteDataModel
}
