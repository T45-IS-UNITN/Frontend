<script>
    import { onMount } from "svelte";
    import users from "./dummyUsers";
    import favs from "./dummyFavs";

    let username = "NomeUtente";
    let favoriteBooks = [];
    let followedUsers = [];

    onMount(() => {
        favoriteBooks = favs;
        followedUsers = users;
    });
</script>

<div class="container mt-4">
    <div class="my-5 d-flex justify-content-between">
        <h1>Profilo personale</h1>
        <h2>Ciao {username}!</h2>
    </div>
    <div class="row pt-3">
        <div class="col-md-6">
            <h3>Libri preferiti</h3>
            <ul class="list-group">
                {#each favoriteBooks as book}
                    <li class="list-group-item">{book.titolo}</li>
                {/each}
            </ul>
        </div>

        <div class="col-md-6">
            <h3>Utenti seguiti</h3>
            <ul class="list-group">
                {#each followedUsers as user}
                    <li class="list-group-item">
                        <a href="/profile/{user.name}">{user.name}</a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>
