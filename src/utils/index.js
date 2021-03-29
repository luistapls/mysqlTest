const MySql = require('../config/MySQL');
const mySql = new MySql();

const returnAllCarreras = async (response) => {
  const allCarreras = await mySql.readAllCarreras();
  response.send(allCarreras);
};

const returnAllMaterias = async (response) => {
  const allMaterias = await mySql.readAllMaterias();
  response.send(allMaterias);
};

const returnAllEstudiantes = async (response) => {
  const allEstudiantes = await mySql.readAllEstudiantes();
  response.send(allEstudiantes);
};

module.exports = { returnAllCarreras, returnAllMaterias, returnAllEstudiantes };
