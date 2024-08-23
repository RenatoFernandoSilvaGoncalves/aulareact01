import { Component }from "react";

export default class Data extends Component{

    constructor(props){
        super(); //executa o construtor do pai
        this.props = props;
        this.state = {
                        dataAtual : new Date().toLocaleString()
                     }       
    }

    pegaDataDe(timeZone){
        const dataAtual = new Date();
        let timeZoneFromDB = parseInt(timeZone); 
        let diferencaTempo = timeZoneFromDB * 60 + dataAtual.getTimezoneOffset();
        let milisegundos = parseInt(dataAtual.getTime() + (diferencaTempo * 60 * 1000));
        const data = new Date(milisegundos);
        return data
    }

    //fase de montagem
    componentDidMount(){
        //Não é permitido atualizar o estado do componente de forma direta
        //this.state =  ...
        this.setState({
           dataAtual: new Date().toLocaleString() 
        });
    }

    componentDidUpdate(){
        setTimeout(()=>{
        this.setState({
                dataAtual: this.pegaDataDe(this.props.timeZone).toLocaleString() 
        });
        },1000);
    }
    //sobrescrita de método
    render(){
        return (
            <h1>{ this.props.texto || ""}{this.state.dataAtual}</h1>
        )
    }
}