import * as React from "react";
import {
  PeoplePicker,
  PrincipalType,
} from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IFieldEditorProps {
  context: WebPartContext;
}

export interface IFieldEditorState {}

export class FieldEditorComponent extends React.Component<
  IFieldEditorProps,
  IFieldEditorState
> {
  render() {
    return (
      <div>
        This is a test
        <PeoplePicker
          context={this.props.context}
          titleText="People Picker"
          personSelectionLimit={3}
          //groupName={} // Leave this blank in case you want to filter from all users
          showtooltip={true}
          isRequired={true}
          disabled={false}
          selectedItems={this._getPeoplePickerItems}
          showHiddenInUI={false}
          principalTypes={[PrincipalType.User]}
          resolveDelay={1000}
        />
        <PrimaryButton
          disabled={false}
          text={strings.SaveButtonText}
          onClick={() => this.saveItem()}
        />
      </div>
    );
  }

  private _getPeoplePickerItems(items: any[]) {
    console.log("Items:", items);
  }
}
