const express = require("express")

const regisRoutes = require('./routes/registros')
const app = express();
app.use(express.json())

app.use('/registros', regisRoutes);

app.get("/prueba",(req,res)=>{
    res.send("Prueba de servidor exitosa")
})

sequelize.sync()
    .then(
        app.listen(8080,()=>{
            console.log("Servidor online en el puerto 8080")
        })
    )
    .catch(err=>console.log(err))

