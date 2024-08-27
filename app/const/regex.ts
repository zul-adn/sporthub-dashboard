export const regexString = /[^a-zA-Z ]/g;
export const regexStringNumber = /[^ A-Za-z.,\\/'`-]/g;
export const regexNumber = /\D/g;
export const regexPassword = /[^a-zA-Z0-9!@#$%^&*.,/?;:'"]/g;
export const regexFileName = /^[\w\s-()_,]+\.[A-Za-z]{3,5}$/;
export const regexValidPassword = /^(?=.*[!@#$%^&*.,/?;:'"])(?=.*\d)(?=.*[A-Z]).{8,}$/;
export const regexValidNpwp = /[^0-9-. ]/g;
export const regexValidEmail = /\S+@\S+\.\S+/;
export const regexPhoneNumber = /[^0-9() ]|^0+|^(\+62|62)/g;
