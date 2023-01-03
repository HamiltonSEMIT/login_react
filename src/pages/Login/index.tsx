import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [passsword, setPassword] = useState('');
    const auth = useContext(AuthContext);
    const navigation = useNavigate();

    const handleLogin = async() => {
        if(email && passsword){
            const isLoged = await auth.signin(email, passsword);
            if(isLoged){
                navigation('/');
            }else{
                alert("Falta a API funcionar");
            }
        }
    }

    return (
        <div>
            <h2>Página Fechada</h2>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu email"/>
            <input type="text" value={passsword} onChange={e=> setPassword(e.target.value)} placeholder="Digite sua senha" />
            <button type="submit" onClick={handleLogin}>Logar</button>
        </div>
    );
}