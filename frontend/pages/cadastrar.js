import React, { Component } from "react";
import Link from 'next/link'


class CadastrarCarro extends Component {
    constructor() {
        super();

        this.state = {
            carro: {
                marca: "",
                placa: "",
                renavan: "",
                cor: ""

            },
            
        };
    }
    render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Cadastro de Carros</legend>
                        <div>
                            <label htmlFor="marca">Marca </label>
                            <br />
                            <input
                                type="text"
                                id="marca"
                                name="marca"
                                placeholder="Marca"
                                value={this.state.carro.marca}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div >
                            <label htmlFor="placa">Placa </label>
                            <br />
                            <input
                                type="text"
                                id="placa"
                                name="placa"
                                placeholder="Placa"

                               
                                value={this.state.carro.placa}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div >
                            <label htmlFor="renavan">renavan </label>
                            <br />
                            <input
                                type="text"
                                id="renavan"
                                name="renavan"
                                placeholder="renavan"

                               
                                value={this.state.carro.renavan}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div >
                            <label htmlFor="cor">cor </label>
                            <br />
                            <input
                                type="text"
                                id="cor"
                                name="cor"
                                placeholder="cor"
 
                               
                                value={this.state.carro.cor}
                                onChange={this.handleInputChange}
                            />
                        </div>



                        <button type="submit" className="btn btn-primary">
                            Cadastrar
                        </button>
                        <Link href = '/'>
                         <button>Voltar</button>
                        </Link>
                    </fieldset>
                </form>
            );
        
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            carro: { ...prevState.carro, [name]: value }
        }));
    };


    handleSubmit = event => {
        fetch("http://localhost:3005/sistema/carroInsert", {
            method: "post",
            body: JSON.stringify(this.state.carro),
            headers: {
                "Content-Type": "application/json"
            }
        })


        event.preventDefault();
    };
}

export default CadastrarCarro;