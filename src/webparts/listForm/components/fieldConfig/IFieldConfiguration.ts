import { IFieldPermission } from "./IFieldPermission";

export interface IFieldConfiguration {
  key: string;
  fieldName: string;
  fieldPermissions: IFieldPermission[];
}
