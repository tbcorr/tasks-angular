import {ValidatorFn, FormGroup, ValidationErrors} from '@angular/forms';

export const passwordConfirmValidator:  ValidatorFn = (control: FormGroup): ValidationErrors | null => { {
    const password = control.get('password');
    const passwordConfirm = control.get('passwordConfirm');

    return password && passwordConfirm && password.value !== passwordConfirm.value ? { 'passwordConfirm': false } : null;
  };
}