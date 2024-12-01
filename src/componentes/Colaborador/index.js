import "./Colaborador.css"
import { IoCloseCircleSharp } from "react-icons/io5";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaborador = (props) => {
    //destructuracion
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props

    //operador ternario condicion ? verdader : false

    return <div className="colaborador">
        <IoCloseCircleSharp className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} /> }
            
            
        </div>
    </div>
}

export default Colaborador