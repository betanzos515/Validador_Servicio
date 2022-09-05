
let saltosRegex = /(\r\n|\n|\r)/gm;
let rfcRegex = /[A-ZÑ&]{3,4}\d{6}[A-V1-9][A-Z1-9][0-9A]/;
let razonSocialRegex = /((APELLIDO PATERNO)|(RAZÓN SOCIAL)).+?(DATOS)/;
let limpiarRazonSocial = /((APELLIDO\s+(PATERNO|MATERNO)|NOMBRE[^\d\sA-Z]\w[^\d\sA-Z])|RAZÓN\s+SOCIAL|DATOS)/mg;
let ejercicio = /EJERCICIO[0-9]{4}/;
let periodo = /PERIODO\w+\s+/;

module.exports = {
    saltosRegex,
    rfcRegex,
    razonSocialRegex,
    limpiarRazonSocial,
    ejercicio,
    periodo
}