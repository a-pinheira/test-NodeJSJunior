import React from 'react';
import ReactDOM from 'react-dom';
//import expRouter from express.expRouter;
import './index.css';
import logo from './logo.png';
//import { expression } from '@babel/template';

class Form extends React.Component {
    constructor(){
        super();
            
        this.state = {
            nome: "", tel: "", email: "", lang: "", code:"", cep:"",
            end1:"", end2:"", cidade:"", trkrs:"", boxes:"", disp:"", idMot:""
            
        };
    //Pega um objeto vazio e junta sempre q o this.state for aferido
    this.onChange = (evento) => {
        //console.log(evento.target.name); 
        const state = Object.assign({}, this.state);
        const campo = evento.target.name;
        state[campo] = evento.target.value;
        //if (campo === 'nome' && evento.target.value.includes ('')) { return;}
        this.setState(state);
    };

        this.onSubmit = (evento) => { 
            evento.preventDefault();
            console.log(this.state); 
        };

        /*Estado dos Objetos de check
        state = {
            isCheck1: false,
            isCheck2: false,
            isCheck3: false,
            isCheck4: false
            
          };
          onChangeCheck1 = () => {
            this.setState(initialState => ({
              isCheck1: !initialState.isCheck1,
            }));
          }*/

    }
    render() {
        return (
            <div className="container-fluid" >
            <header className="header col-12" >
                <img src={logo} alt="Page Logo" />
            </header>
        <div className="containerGrid">
            
        <p className="cardBloco d-flex pt-3">
        <label>
        
        <h2> Contact Information </h2>            
            <input name="nome" value={this.state.nome} onChange={this.onChange.nome} type="text" placeholder="First Name" size="25" 
            required autofocus tabindex="1" autocomplete="off" />
            <input name="lnome" value={this.state.lnome} onChange={this.onChange} type="text" placeholder="Last Name" size="25" /> 
            <input name="email" value={this.state.email} onChange={this.onChange} type="email" placeholder="Email Address" size="25" />
            <input name="tel" value={this.state.tel} onChange={this.onChange} type="email" placeholder="Phone" size="25"
                pattern="^\d{2}-\d{9}$" title="Telefone deve ser digitado neste padrão (xx xxxxxxxxx)" />
            <select name="lang" placeholder="Language">
                <option value={this.state.lang} selected> Language  </option>
                <option value={this.state.lang}> English </option>
		        <option value={this.state.lang}> Português Brasil </option>
			</select>               
            <select name="code" placeholder="Country">
                <option value={this.state.code} selected> Country  </option>
                <option value={this.state.code}> Português Brazil </option>
                <option value={this.state.code}> Norte Americano </option>
		        <option value={this.state.code}> Português Portugal </option>
			</select>               
           
        </label>
        </p>
        <p className="cardBloco">
        <label>
            <h2> Billing Address </h2>
                <input name="end1" value={this.state.end1} onChange={this.onChange} type="text" placeholder="Address One"size="60"/> 
                <input name="end2" value={this.state.end2} onChange={this.onChange} type="text" placeholder="Address Two" size="60" /><br/>
                <select name="cidade" placeholder="City" >
                    <option value="city" placeholder="City" selected> City </option>
                    <option value="city" placeholder="Santos"> Santos</option>
                    <option value="city"> Cubatão </option>
		            <option value="city"> Guarujá </option>
                </select>
                <select name="estd" placeholder="State" >
                <option value="text" placeholder="State"> State </option>/> 
                    <option value="text" placeholder="São Paulo"/> 
                    <option value="text" placeholder="MG"  />  
                    <option value="state"> Goiânia </option>
		            <option value="state"> Paranaá </option>
                </select>
                <input value={this.state.cep} placeholder="Zip Code" required pattern= "\d{5}-?\d{3}"/>
                <br/>
                <input type="checkbox" checked={this.state.isCheck4} onChange={this.onChangeCheck4} size="30"/>
                    Check Box - Use shipping address same as billing address.
            </label>
            </p>
        
            <p className="cardBloco">
            <label>
            <h2> Shipping Address </h2>
            
            <input name="end1" value={this.state.end1} onChange={this.onChange} type="text" placeholder="Address One" size="60" maxLength="30" /> 
                <input name="end2" value={this.state.end2} onChange={this.onChange} type="text" placeholder="Address Two" size="60" maxLength="30" /><br/>
                <select name="cidade" placeholder="City" >
                <option value="city" selected> City </option>
                    <option value="city"> Santos </option>
                    <option value="city"> Cubatão </option>
		            <option value="city"> Guarujá </option>
                </select>
                <select name="text" placeholder="State" >
                    <option value="state" > São Paulo </option>
                    <option value="state" selected> State</option>
                    <option value="state"> Goiânia </option>
		            <option value="state"> Paraná </option>
                </select>
                
                <select name="text" placeholder="Zip Code">
                    <option value={this.state.code} selected> ZIP Code </option>
                    <option value={this.state.code}> Brazil </option>
                    <option value={this.state.code}> Alemanhã </option>
		            <option value={this.state.code}> Suiça </option>
                </select>
            </label>
            </p>

            <p  className="cardBloco justify-contect-arount">
                <label>
                    <h2> Check the boxes bellow </h2>
            
                <input type="checkbox" checked={this.state.isCheck1} onChange={this.onChangeCheck1} className="form-checkIn" size="30"/>
                    Does any Vehicie need to be equiped with fuel cut off device? 
                <input type="checkbox" checked={this.state.isCheck2} onChange={this.onChangeCheck2} size="30"/> 
                    Does any vehicle need to be equiped widht a fiel cut off device? 
               <input type="checkbox" checked={this.state.isCheck3} onChange={this.onChangeCheck3} size="30"/>
                    Will any trackers be installed on a bike, truck or machinery? 
                            
                <select class="select" value={this.state.trkrs} onChange={this.onChange}>
                    <option selected> How Many trackers would you like to purchase </option>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                </select>
            </label>
            </p>
        
        <button type="submit" onClick={this.onSubimit} placeholder="Order Now" > Order Now </button>
    </div>
    </div>

    );
    }
};

ReactDOM.render (
    <Form />,
    document.getElementById('root')
    
);



