import {ValidatorFn, FormGroup, ValidationErrors} from '@angular/forms';

export const passwordConfirmValidator:  ValidatorFn = (control: FormGroup): ValidationErrors | null => { {
    const password = control.get('password');
    const passwordConfirm = control.get('passwordConfirm');

    console.log(password && passwordConfirm && password.value !== passwordConfirm.value ? { 'passwordConfirm': false } : null);

    return password && passwordConfirm && password.value !== passwordConfirm.value ? { 'passwordConfirm': false } : null;
  };
}