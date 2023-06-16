import axios from "axios";

export async function doSignupRequest(name, email, password) {
    try {
        const response = await axios.post("http://localhost:3000/user", {
            name,
            email,
            password,
        });

        // Elabora la risposta dal server
        console.log(response.data);

        // Resto del codice di gestione della risposta
    } catch (error) {
        // Gestione degli errori
        console.error(error);
    }
}