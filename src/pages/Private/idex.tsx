import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Private = () => {
    const auth = useContext(AuthContext);
    return (
        <div>
            <div>Página Privada</div>
            <h2>Olá {auth.user?.name} </h2>
        </div>
    );
}