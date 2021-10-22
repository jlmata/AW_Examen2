const Sequelize = require('sequelize');
const {aplicarRelaciones} = require('./relations')

const sequelize = new Sequelize('ChaJosBD','user1','root',{
    dialect: 'mysql',
    host:'54.198.161.35',
    define:{
        timestamps: false,
        freezeTableName: true
    }
})

const modelsDifiners =[
    require('../models/ciudades'),
    require('../models/atractivos'),
    //require('../models/ContadorInteres')
]


for(const modelDefiner of modelDefiner){
    modelDefiner(sequelize)
}

aplicarRelaciones(sequelize)

module.exports = sequelize

