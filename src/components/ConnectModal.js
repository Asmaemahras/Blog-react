import React, { useState } from 'react';
import Login from "./Login";
import SignUp from "./SignUp";


const ConnectModal = () => {
    // est-ce qu'on est entrain de se connecter , si signup se trouve donc on veut s'inscrire sinon 
    //on veut se connecter 
    //
    const [signUp, setSignUp] = useState(true); // true => on propose à l'user à s"inscrire



    return (
        <div className="connect-modal">
            <div className="header-btn">
                <button style={{background: signUp ? "rgb(28,28,28)" : "rgb(83,83,83)"}}
                onClick={() => setSignUp(true)}
                >S'inscrire</button>
                <button style={{background: signUp ? "rgb(83,83,83)" : "rgb(28,28,28)"}}
                onClick={() => setSignUp(false)}
                >Se connecter</button>
            </div>
            { signUp ? <SignUp/> : <Login/> }
        </div>
    );
};

export default ConnectModal;