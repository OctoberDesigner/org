import './Collaborator.css';
import { FaWindowClose, FaHeart, FaRegHeart } from "react-icons/fa";

const Collaborator = (props) => {
    /* States */
    const {nombre, puesto, foto, equipo, id, fav} = props.value;
    const {mainColor, removeCollaborator, like} = props


    return <div className='collaborator' style={{backgroundColor : mainColor}}>
        <FaWindowClose className='closeButton' onClick={() =>removeCollaborator(id) } />
        <div className='collaboratorHeader'>
            <img src={foto} alt={nombre}/>
            <h3>{nombre}</h3>
            <p>{puesto}</p>
            {fav ? <FaHeart 
                className='fullHeart'
                onClick={() => like(id)}
                /> :
                <FaRegHeart
                className='emptyHeart'
                onClick={() => like(id)}
                />}
        </div>
    </div>
};

export default Collaborator;