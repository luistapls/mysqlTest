const pool = require('./pool');

class MySql {
  async readAllCarreras() {
    return pool.query('SELECT nombre_carrera FROM carreras;');
  }

  async readAllMaterias() {
    return pool.query(
      'SELECT nombre_materia, nombre_carrera, horario_materia FROM materias INNER JOIN carreras ON materias.id_carrera = carreras.id_carrera;',
    );
  }

  async readAllEstudiantes() {
    return pool.query(
      'SELECT nombre_estudiante, apellido_estudiante, nombre_carrera FROM carreras INNER JOIN estudiantes ON carreras.id_carrera = estudiantes.id_carrera;',
    );
  }
}

module.exports = MySql;
