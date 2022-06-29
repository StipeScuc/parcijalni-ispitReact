import React from "react";
import MainData from "./MainData";
import RepoData from "./RepoData";



class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            korisnickoIme: "",
            dohvatiPodatke: false
        };
    }

    onSearchChange = event => {
        const searchValue = event.target.value;
        this.setState({ korisnickoIme: searchValue });
    }

    povratak = () => {
        window.location.reload(false);
    }



    handleSubmit = event => {
        const ime = this.state.korisnickoIme;
        event.preventDefault();
        if(ime === "facebook" || ime === "reduxjs"){
            this.setState({dohvatiPodatke: true})
        }
        else{
            alert('Wrong input: enter "facebook" or "reduxjs"')
        }
    }

    render(){
        if(!this.state.dohvatiPodatke){
            return(
                <div className="formDiv">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <label>GitHub username:</label>
                        <input className="inputKorisnik" type="text" placeholder="e.g.facebook" onChange={this.onSearchChange}/>
                        <br /><br />
                        <input className="btnGo" type="submit" value="GO!" />
                    </form>
                </div>
    
            )
        }
        else{
            return (
                <div className="sviPodaci">
                    <MainData korisnickoIme={this.state.korisnickoIme}/>
                    <RepoData korisnickoIme={this.state.korisnickoIme}/>
                    <button className="btnReset" onClick={this.povratak} >Reset</button>
                </div>
            )
        }
    }

}


export default Form;