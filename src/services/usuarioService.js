const usuarios = [
    {
        nombre: "Valentín Angulo",
        email: "valentin@gmail.com",
        dni: "40111222",
        rol: "Alumno",
        institucion: "Universidad Nacional de Bolivia",
        contraseña: "1234",
        horasTotales: 5
    },
    {
        nombre: "Gustavo Sosa",
        email: "gustavo@gmail.com",
        dni: "30111222",
        rol: "Docente",
        institucion: "Universidad Nacional de Jujuy",
        contraseña: "1234",
        horasTotales: 350
    },
    {
        nombre: "María Gómez",
        email: "maria@gmail.com",
        dni: "42111222",
        rol: "Alumno",
        institucion: "Universidad Tecnológica Nacional",
        contraseña: "1234",
        horasTotales: 80
    },
    {
        nombre: "Jose Lopez",
        email: "jose@gmail.com",
        dni: "43111222",
        rol: "Alumno",
        institucion: "Universidad Nacional de Córdoba",
        contraseña: "1234",
        horasTotales: 95
    }
];

const obtenerUsuarios = () => {
    return [...usuarios];
};

export default {
    obtenerUsuarios
};