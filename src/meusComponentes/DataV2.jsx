import {useState, useEffect} from 'react';

//useEffect é um hook que permite gerenciar o ciclo de vida
// do componente quando ele é desenvolvido utilizando
// a sintaxe JSX

/*
a sintaxe do useEffect

useEffect( function () {

    return function () <-- willUnmount
}, [] didMount //executa uma vez só )
   [lista de valores observados] didUpdate para cada valor que foi atualizado 
*/

export default function DataV2(props){
    const [dataAtual, setDataAtual] = useState("");

    function pegaDataDe(timeZone){
        const dataAtual = new Date();
        let timeZoneFromDB = parseInt(timeZone); 
        let diferencaTempo = timeZoneFromDB * 60 + dataAtual.getTimezoneOffset();
        let milisegundos = parseInt(dataAtual.getTime() + (diferencaTempo * 60 * 1000));
        const data = new Date(milisegundos);
        return data
    }

    //exemplo de didMount
    useEffect(()=>{
        setDataAtual(new Date().toLocaleString());
        return ()=>{} //willUnmount
    }, [])

    //exemplo de didUpdate
    useEffect(()=>{
        setTimeout(()=>{
            setDataAtual(pegaDataDe(props.timeZone).toLocaleString()); 
        },1000);
    },[dataAtual]); //<-- O que observar para executar a função a cada atualização do que está sendo observado            

    return (
        <h1>{props.texto || " "}{dataAtual}</h1>
    );
}