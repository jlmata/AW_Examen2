const Sequelize = require('sequelize');
const Ciudad = (sequelize)=>{
    sequelize.define('ciudad', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: Sequelize.STRING,
        nacion: Sequelize.STRING,
    })
}
module.exports = Ciudad