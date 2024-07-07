import './OptionsList.css';

const OptionsList = (props) => {
const changeEquip = (e) => {
    props.setValue(e.target.value)
};

    return <div className='optionsList'>
        <label>Equipos</label>
        <select value={props.value} onChange={changeEquip}>
            <option value='' disabled defaultValue='' hidden>Selecciona un equipo</option>
            { props.equipments.map((teams, index) => <option value={teams} key={index}>{teams}</option>) }
        </select>
    </div>
};

export default OptionsList;