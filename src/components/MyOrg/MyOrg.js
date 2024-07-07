import { useState } from 'react';
import './MyOrg.css';

const MyOrg = (props) => {

    return <section className='orgSecction'>
        <h3 className='tittle'>Mi organizacion</h3>
        <img onClick={props.formSwitch} src='/img/add.png' alt='Añadir'></img>
    </section>
};

export default MyOrg;