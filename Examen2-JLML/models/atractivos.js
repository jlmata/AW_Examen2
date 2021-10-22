const Sequelize = require('sequelize');
const Atractivo = (sequelize)=>{
    sequelize.define('atractivo', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        atractivo: Sequelize.STRING
    })
}
module.exports = Atractivo