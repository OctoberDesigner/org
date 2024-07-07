import hexToRgba from 'hex-to-rgba';
import './Equipment.css';
import Collaborator from '../Collaborator/Collaboratos';

const Equipment = (props) => {
    const {mainColor, tittle, dataCollaborator, removeCollaborator, updateColors, id, like} = props; /* props list */
    const bgColor = { backgroundColor: hexToRgba(mainColor, '0.1') };
    const bderColor = { borderColor: mainColor };

    return <>{dataCollaborator.length > 0 && <section className='equipment' key = {props.tittle} style={bgColor}>
        <input
            className='input-color'
            type='color'
            style={bderColor}
            value={mainColor}
            onChange={ (e) => {
                updateColors(e.target.value, id)
            }}    
        />
        <h3 style={bderColor} >{tittle}</h3>
        <div className='collaborators'>
            {
            dataCollaborator.map((collaborator, index) =>
                <Collaborator
                value = {collaborator} 
                key = {index}
                mainColor={mainColor}
                removeCollaborator = {removeCollaborator}
                like={like}
                />
            )}
        </div>
    </section>}
    </> 
};

export default Equipment;