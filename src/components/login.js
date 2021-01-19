
import React from 'react';

class Login extends React.Component {
    state = {
        player1: "",
        player2: "",
    };
/* asigno state a player1 y player2 con un string vacio por defecto para cambiarlos mas adelante */
    handleChange = (event) => {
        console.log(event.target.value);
        /* handleChange recibe el evento Onchange, lo imprime por consola */

        let player = event.target.id;
        this.setState({ [player]: event.target.value });
    };
    /* declaro una variable player igual a el id del evento */
    handleClick = (event) => {
        event.preventDefault();
        const { player1, player2 } = this.state;
        this.props.names(player1, player2);
    };
    render() {
        return( 
        <div className="wrapper container-fluid">
            <div className="screen">
                <p>Please Login</p>
                <form>
                    <div className="form-group row">
                        <div className="col-md">
                        <input
                            type="name"
                            id="player1"
                            className="form-control"
                            onChange={this.handleChange}
                            placeholder="player1"
                        />
                        </div>
                        <div className="col-md">
                        <input
                            type="name"
                            id="player2"
                            className="form-control"
                            onChange={this.handleChange}
                            placeholder="Player2"
                        />
                        </div>
                        </div>
                        <div className="btnWrapper row ">
                        <button type="button" className="btn btn-light"><i className="fas fa-times"></i></button>
                        <button type="button" className="btn btn-light ml-2"><i className="far fa-circle"></i></button>

                        </div>

                        <div className="btnPlay">
                        <button  onClick={this.handleClick} className="btn btn-success mt-3">Play</button>
                        </div>
                </form>
            </div>
        </div>);
    }
}
export default Login;