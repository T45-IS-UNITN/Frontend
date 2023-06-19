<script>
    import { onMount } from "svelte";

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Recensione pubblicata");
    };

    let book = {
        titolo: "",
        autore: "",
        annoPubblicazione: null,
        generi: [],
        descrizione: "",
    };

    let coverURL =
        "https://images.manning.com/360/480/resize/book/5/d3ed2a4-e017-493e-beb6-776c7e2c5cbe/Volkmann-Svelte-HI.png";

    onMount(() => {
        // simulo una richiesta GET
        book = {
            titolo: "Lorem Ipsum",
            autore: "Nome Autore",
            annoPubblicazione: 2007,
            generi: ["Fantasy", "Avventura"],
            descrizione:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus convallis nibh non viverra. Morbi suscipit neque in placerat fermentum. Curabitur sed lobortis magna, ac rutrum magna. Duis blandit eleifend dolor, nec sodales massa imperdiet vel. Fusce nec sollicitudin lectus, sit amet dignissim magna. Nulla cursus, lorem et rutrum suscipit, est purus ullamcorper tortor, nec vestibulum purus mi ut lectus. Sed sit amet odio at erat ultrices ullamcorper. Vivamus imperdiet lobortis nunc, blandit viverra lectus mollis non. Etiam a ipsum sed lorem efficitur commodo. Praesent suscipit elit mattis metus tincidunt semper sit amet sit amet turpis. Morbi non pellentesque arcu. Duis consectetur augue quis sagittis molestie. Phasellus mollis a nisi a commodo. Vivamus dictum felis eget nulla convallis pretium. Aenean sit amet porta turpis. Ut laoreet viverra metus, pulvinar condimentum tortor. Vivamus lacinia in leo non mollis. Quisque orci ante, vehicula sed odio quis, vehicula euismod risus. Nunc feugiat diam nisi, non imperdiet felis tempus sed.",
        };
    });
</script>

<div class="container mt-4">
    <div class="row justify-content-md-center pb-4">
        <div class="col-xxl-10 col-xl-9 col-lg-10 col-md-12 col-sm-12">
            <div
                class="image-container d-flex align-items-center justify-content-center rounded"
            >
                <img class="background-image" src={coverURL} alt="copertina" />
                <img class="foreground-image" src={coverURL} alt="copertina" />
            </div>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-xxl-10 col-xl-9 col-lg-10 col-md-12 col-sm-12">
            <div class="card">
                <div class="card-header">
                    <h2>{book.titolo}</h2>
                    <h4 class="text-muted">
                        {book.autore} • {book.annoPubblicazione}
                    </h4>
                </div>
                <div class="card-body">
                    <h5>Generi:</h5>
                    <p>{book.generi.join(", ")}</p>
                    <h5>Trama</h5>
                    <p>{book.descrizione}</p>
                </div>
                <div class="card-footer">
                    <h5 class="py-3">Pubblica la tua recensione</h5>
                    <form on:submit={handleSubmit}>
                        <div class="mb-3">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Titolo recensione"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Valutazione</label>
                            <select class="form-select">
                                <option value="1">1 stella</option>
                                <option value="2">2 stelle</option>
                                <option value="3">3 stelle</option>
                                <option value="4">4 stelle</option>
                                <option value="5">5 stelle</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <textarea
                                class="form-control"
                                rows="5"
                                placeholder="Scrivi..."
                                required
                            />
                        </div>
                        <button type="submit" class="btn btn-primary"
                            >Pubblica</button
                        >
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .image-container {
        position: relative;
        overflow: hidden;
    }

    .background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 30vh;
        filter: blur(20px); /* Sfocatura dello sfondo */
        z-index: -1;
    }

    .foreground-image {
        /* position: relative; */
        width: auto;
        height: 30vh;
        /* object-fit: cover; */
    }
</style>
