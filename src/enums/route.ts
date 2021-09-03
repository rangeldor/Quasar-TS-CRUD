export enum UserRouteName {
  List = 'USER_LIST',
  Create = 'USER_CREATE',
  Update = 'USER_UPDATE',
  View = 'USER_VIEW',
  Delete = 'USER_DELETE'
}

export enum UserRoutePath {
  List = '/user',
  Create = 'register',
  Update = 'update/:id',
  View = 'view/:id',
  Delete = 'remove/:id'
}
