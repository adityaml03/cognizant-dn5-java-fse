import { CanDeactivateFn } from '@angular/router';

export interface HasDirtyForm {
  enrollForm?: { dirty: boolean };
}

export const unsavedChangesGuard: CanDeactivateFn<HasDirtyForm> = (component) => {
  if (component.enrollForm?.dirty) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};