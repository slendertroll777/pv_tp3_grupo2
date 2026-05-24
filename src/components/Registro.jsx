function RegistroActividad(fecha) {

    let dia = fecha.toLocaleDateString();
    let hora = fecha.toLocaleTimeString();
    let cambios = [];
    let cambio = "Se registró un cambio a las " + hora + " del día " + dia;

    cambios.push(cambio);

    const control = () => {

        if (cambios.length === 0) {
            return <p>No se han registrado cambios</p>;
        }

        return cambios.map((cambio, index) =>
            <p key={index}>{cambio}</p>
        );
    };
    return (
        <div>
            <h3>Registro de Actividades</h3>
            {control()}
        </div>
    );
}
export default RegistroActividad;