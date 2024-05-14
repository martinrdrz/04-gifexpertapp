import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) return;
        onNewCategory(inputValue.trim());
        //setCategories((categories) => [...categories, inputValue]);  //primer version
        setInputValue('');
        //console.log(inputValue);
    };
    //Las siguiente instrucciones son equivalentes:
    //<form onSubmit={(event) => onSubmit(event)}>
    //<form onSubmit={onSubmit}>
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} />;
        </form>
    );
};

//Recordar que la linea de abajo no es necesario enviar el parametro event, ayque por defecto JavaScript lo hace solo cuando se tiene un solo parametro. Al no colocar ese parametro no significa que no s e envia, sino que JavaScript lo envia igual, por eso enel codigode arriba se puede minimizar dicha instrucción
//onChange={(event) => [onInputChange(event)]} />
