<script>
    import { onMount } from "svelte";
    import dummyBooks from "./dummyBooks.js";

    let Genere = "Avventura";

    let books = [];
    let commonCover = "/src/media/bookcover.png";

    onMount(() => {
        books = dummyBooks;
    });
</script>

<div class="container">
    <h1 class="mb-4">{Genere}</h1>

    <div class="row">
        {#each books as book}
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img
                        src={commonCover}
                        class="card-img-top"
                        alt={book.titolo}
                    />
                    <div class="card-body">
                        <h5 class="card-title">{book.titolo}</h5>
                        <p class="card-text">
                            {book.autore}, {book.annoPubblicazione}
                        </p>
                        <a href="/book/dummy" class="btn btn-primary"
                            >Dettagli</a
                        >
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .container {
        margin-top: 40px;
    }
</style>
