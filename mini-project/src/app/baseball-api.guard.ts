import { CanActivateFn } from '@angular/router';

export const baseballApiGuard: CanActivateFn = (route, state) => {
  return true;
};
