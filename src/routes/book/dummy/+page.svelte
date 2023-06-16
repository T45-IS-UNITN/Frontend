<script>
    import { onMount } from "svelte";

    let book = {
        titolo: "",
        autore: "",
        annoPubblicazione: null,
        generi: [],
        descrizione: "",
    };

    let coverURL =
        "https://m.media-amazon.com/images/I/51Y485elf3L._SY346_.jpg";

    onMount(() => {
        // simulo una richiesta GET
        book = {
            titolo: "Il nome del vento",
            autore: "Patrick Rothfuss",
            annoPubblicazione: 2007,
            generi: ["Fantasy", "Avventura"],
            descrizione:
                "\"Il nome del vento\" è un romanzo scritto da Patrick Rothfuss, pubblicato nel 2007. Ambientato in un mondo fantastico, il libro segue la vita di Kvothe, un ragazzo con un dono straordinario per la musica e la magia. La trama ruota attorno alla ricerca di Kvothe per scoprire la verità dietro l'assassinio dei suoi genitori, avvenuto quando era solo un bambino. Attraverso il suo viaggio, Kvothe affronta avventure mozzafiato, incontri con creature misteriose e intrighi politici. Il libro esplora i temi della magia, dell'amore, dell'amicizia e della vendetta, mentre Kvothe lotta per sopravvivere in un mondo pieno di pericoli e intrighi. Con una prosa avvincente e ricca di dettagli, Patrick Rothfuss dipinge un mondo immaginario vivido e coinvolgente, catturando l'immaginazione dei lettori e facendo emergere i dilemmi morali e le sfide emotive del protagonista.",
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
                    <form>
                        <div class="mb-3">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Titolo recensione"
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
