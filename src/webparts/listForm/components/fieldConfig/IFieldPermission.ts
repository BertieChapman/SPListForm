export enum FieldPermissionLevel {
  Edit,
  View,
}

export interface IFieldPermission {
  group: string;
  permission: FieldPermissionLevel;
}
