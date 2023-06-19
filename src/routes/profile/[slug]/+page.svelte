<script>
    import { onMount } from "svelte";

    let user = {};
    let favorites = [];
    let follow = [];

    onMount(async () => {
        //  Qui la richiesta API per ottenere i dati dell'utente, dei preferiti e dei follow

        user.name = "Nome Utente";
        user.email = "mail@mail.com";
        favorites = [
            { titolo: "Il nome del vento", autore: "Patrick Rothfuss" },
            { titolo: "1984", autore: "George Orwell" },
            { titolo: "Il signore degli anelli", autore: "J.R.R. Tolkien" },
        ];
        follow = [
            { name: "Alice", email: "alice@example.com" },
            { name: "Bob", email: "bob@example.com" },
            { name: "Charlie", email: "charlie@example.com" },
        ];
    });
</script>

<div class="container mt-4">
    <div class="my-5 d-flex justify-content-between">
        <h1>Profilo personale</h1>
        <h2>Ciao {user.name}!</h2>
    </div>
    <div class="row pt-3">
        <div class="col-md-6">
            <h3>Libri preferiti</h3>
            <ul class="list-group">
                {#each favorites as book}
                    <li class="list-group-item">{book.titolo}</li>
                {/each}
            </ul>
        </div>

        <div class="col-md-6">
            <h3>Utenti seguiti</h3>
            <ul class="list-group">
                {#each follow as user}
                    <li class="list-group-item">
                        <a href="/profile/{user.name}">{user.name}</a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>
