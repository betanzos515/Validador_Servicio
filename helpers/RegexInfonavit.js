let saltosRegex = /(\r\n|\n|\r)/gm;
let rfcRegex = /([a-zA-Z]{3,4}-[0-9]{6}-(...))|[A-ZÑ&]{3,4}\d{6}[A-V1-9][A-Z1-9][0-9A]/;
let registroPatronalRegex = /(\w)[0-9]{2}-[0-9]{5}\s?-[0-9]{2}-[0-9]/
let fechasRegex = /[0-9]{2}-([1-2]0[1-2][1-2])/gms;

module.exports = {
    rfcRegex,
    registroPatronalRegex,
    fechasRegex
}