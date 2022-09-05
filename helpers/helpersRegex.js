const expresionesRegulares = {
    saltosRegex : /(\r\n|\n|\r)/gm,
    RFCRegex : /[A-ZÑ&]{3,4}\d{6}[A-V1-9][A-Z1-9][0-9A]/,
    repseRegex: /AR[0-9]{3,6}\/[0-9]{4}/,
    espaciosRegex :/\s+/g,
    eliminarInicio:/por parte de|\sla\spersona:\s|\(Moral\)|\(Física\)/gmi,
    eliminarFinal:/(\scon\sRegistro|,con\sRegistro)|\sCon Curp/gmi,
    periodoAcuseIva: /Período de.+([0-9]{4})/
}

module.exports = {
    expresionesRegulares
}