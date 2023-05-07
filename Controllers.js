const {request,response} = require('express')
const {pool} =require('./DB/configDB')
const {} = require('pg')



// Obtencion de todos los usuarios de la tabla contactos 
const getUserAll = async(req = request, res = response) => { 
    try { 
   const userAll = await pool.query('SELECT * FROM "Contacts"')
   res.status(200).json({status: 'Ok', data: userAll.rows});
   console.log(userAll.rows);
   
    }catch(error) {
        res.status(400).json({ status:'Error', data: { error: 'Error'}})
    
}

}


module.exports = { 
    getUserAll
}