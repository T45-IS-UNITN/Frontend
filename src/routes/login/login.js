import axios from "axios";

export async function doLoginRequest(email, password) {
    const data = {
        email: email,
        password: password,
    };

    try {
        const response = await axios.post(
            "http://localhost:3000/auth/login",
            data
        );
        // console.log(response.data);
        console.log(response); // 200 se va bene

        // token e userId dati come risposta
        if (response.status) {
            window.location.href = "/home";
        }

    } catch (error) {
        console.error("Errore nella richiesta:", error.message);
        alert("Problemone 😔")
    }
}