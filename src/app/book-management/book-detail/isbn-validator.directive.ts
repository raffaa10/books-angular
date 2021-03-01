import {AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const isbnValidator: ValidatorFn = (isbn: AbstractControl): ValidationErrors | null => {
  // Les expressions régulières
  const reg10: RegExp = /^[0-9]{10}$/;
  const reg13: RegExp = /^[0-9]{13}$/;

  return isbn && (reg10.test(isbn.value) || reg13.test(isbn.value))  ?
    null :  { isbnValidator: true };
};
