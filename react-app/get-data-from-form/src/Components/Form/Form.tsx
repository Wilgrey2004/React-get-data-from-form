import "./Form.css";

interface props {
  nombreid: string;
  apellidoid: string;
  abuttonid: string;
  cbuttonid: string;
}

export const Form = ({ nombreid, apellidoid, abuttonid, cbuttonid }: props) => {
  return (
    <div>
      <form className="formulario" action="">
        <input
          id={nombreid}
          className="nombre"
          type="text"
          placeholder="Ingresa Tu nombre"
        />
        <input
          id={apellidoid}
          className="apellido"
          type="text"
          placeholder="Ingresa Tu Apellido"
        />
        <button id={abuttonid} className="aceptar">
          Aceptar
        </button>
        <button id={cbuttonid} className="cancelar">
          Cancelar
        </button>
      </form>
    </div>
  );
};
