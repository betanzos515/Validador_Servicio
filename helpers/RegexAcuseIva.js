let saltosRegex =  /(\r\n|\n|\r)/gm;
let rfcRegex = /[A-ZÑ&]{3,4}\d{6}[A-V1-9][A-Z1-9][0-9A]/;
let periodoYFecha = /((Período de la declaración:)\w+(:[0-9]{4})){1,1}/;
let razonSocialRegex = /(social:|Nombre:)([\s+\w+]+|.+?)Tipo de declaración:(Normal|Complementaria)/

module.exports ={
    saltosRegex,
    rfcRegex,
    periodoYFecha,
    razonSocialRegex
}