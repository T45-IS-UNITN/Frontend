<script>
    import { onMount } from "svelte";
    import reviews from "./dummyReview.js";

    let bookReviews = [];

    onMount(() => {
        bookReviews = reviews;
    });
</script>

<div class="container mt-4">
    <h1 class="my-5">Recensioni recenti</h1>
    {#each bookReviews as review}
        <div class="card mb-4">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="card-title">{review.titolo}</h5>
                        <p class="card-text">{review.autore}</p>
                    </div>
                    <div>
                        {#each Array(review.voto) as _, index}
                            <i class="bi bi-star-fill" />
                        {/each}
                    </div>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text">{review.contenuto}</p>
            </div>
        </div>
    {/each}
</div>
