import { ControlMode } from "../../common/datatypes/ControlMode";
import { IFieldConfiguration } from "./components/fieldConfig/IFieldConfiguration";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IListFormWebPartProps {
  title: string;
  description: string;
  listUrl: string;
  formType: ControlMode;
  itemId?: string;
  showUnsupportedFields: boolean;
  redirectUrl?: string;
  fields?: IFieldConfiguration[];
  context: WebPartContext;
}
