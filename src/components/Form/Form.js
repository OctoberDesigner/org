import './Form.css';
import InputField from '../InputField/InputField';
import OptionsList from '../OptionsList/OptionsList';
import Button from '../Button/Button';
import { useState } from 'react';

const Form = (props) => {
    const [nombre, updateNombre] = useState('');
    const [puesto, updatePuesto] = useState('');
    const [foto, updateFoto] = useState('');
    const [equipo, updateEquipo] = useState('');
    const [teamName, updateTeamName] = useState('');
    const [hexValue, updateHexValue] = useState('');
    const {getCollaborators, createTeam} = props;
    
    const sendData = (e) => { e.preventDefault() /* Evitar que se recargue la pagina */
        let formData = {
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        };
        getCollaborators(formData);
    }; 

    const teamCreator = (e) => {
        e.preventDefault();
        createTeam({ tittle:teamName, mainColor:hexValue });
    };

    return <section className='form'>
        <form onSubmit={sendData}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <InputField
                data = 'Nombre'
                placeholder ='Ingresar nombre' 
                required
                value = {nombre}
                setValue = {updateNombre}
            />
            <InputField
                data = 'Puesto'
                placeholder = 'Ingresar puesto'
                required
                value = {puesto}
                setValue = {updatePuesto}
            />
            <InputField
                data = 'Foto'
                placeholder = 'Ingresar enlace de foto'
                required
                value = {foto}
                setValue = {updateFoto}
            />
            <OptionsList
                value = {equipo}
                setValue = {updateEquipo}
                equipments = {props.equipments}
            />
            <Button buttonText='Crear colaborador'/>
        </form>
        <form onSubmit={teamCreator}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <InputField
                data = 'Nombre de equipo'
                placeholder ='Ingresar nombre de equipo' 
                required
                value = {teamName}
                setValue = {updateTeamName}
            />
            <InputField
                className= 'input-field-color'
                data = 'Color'
                placeholder = 'Ingresar color en HEX'
                required
                value = {hexValue}
                setValue = {updateHexValue}
                type = 'color'
            />
            <Button buttonText='Registrar equipo'/>
        </form>
    </section>
}

export default Form;