import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled'

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color:#fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
width: 100%;
display:block;
padding:1rem;
-webkit-appearance: none;
border-radius: 10px;
border: none;
font-size: 1.2rem;
`;

const useMoneda = (label, stateInicial, opciones) => {

    // state de nuestro custom hook
    const [state, actualizarState] = useState (stateInicial);

    const Seleccionar = () => (

        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange = { e => actualizarState (e.target.value)}
                value = {state} // para que se mantenga el valor en el select
            >
                <option value="">-- Seleccione --</option>
                {opciones.map(opcion =>( // para mapear siempre tener una key
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </Select>
        </Fragment>

    );

        // retornar state, interfaz y funcion que modifique state

        return [state, Seleccionar, actualizarState];

}

export default useMoneda;