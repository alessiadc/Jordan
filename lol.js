// Funzione di validazione campo
   function validateInput(input, regex) {
      if (regex.test(input.value.trim())) {
         input.classList.add('valid');
         input.classList.remove('invalid');
         return true;
      } else {
         input.classList.add('invalid');
         input.classList.remove('valid');
         return false;
      }
   }