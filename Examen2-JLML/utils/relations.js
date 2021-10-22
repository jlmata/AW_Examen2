function aplicarRelaciones(sequelize){
    console.log(sequelize.models)

    const Ciudad = sequelize.models.ciudad
    const Atractivo = sequelize.models.atractivo
    //const ContadorInteres = sequelize.models.contadorinters

    Atractivo.belongsTo(Ciudad)

}

module.exports = {aplicarRelaciones}