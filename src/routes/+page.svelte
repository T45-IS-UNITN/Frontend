<main class="landing-page">
    <header class="hero-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="hero-title">Benvenuti su NovelNotes</h1>
                    <p class="hero-description">
                        Esplora le nostre recensioni e scopri i migliori libri
                        del momento.
                    </p>
                    <a href="/home" class="btn btn-primary">Scopri di più</a>
                </div>
            </div>
        </div>
    </header>

    <section class="features-section">
        <div class="container">
            <h2 class="section-title">Le nostre caratteristiche</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="card feature">
                        <div class="card-body">
                            <i class="bi bi-book" />
                            <h3 class="card-title feature-title">
                                Recensioni approfondite
                            </h3>
                            <p class="card-text feature-description">
                                Leggi recensioni dettagliate sui libri, scopri
                                punti di forza e critiche.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card feature">
                        <div class="card-body">
                            <i class="bi bi-star" />
                            <h3 class="card-title feature-title">
                                Classifiche dei migliori libri
                            </h3>
                            <p class="card-text feature-description">
                                Scopri i libri più apprezzati dagli utenti e dai
                                nostri esperti.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card feature">
                        <div class="card-body">
                            <i class="bi bi-people" />
                            <h3 class="card-title feature-title">
                                Community di lettori
                            </h3>
                            <p class="card-text feature-description">
                                Connettiti con altri appassionati di lettura,
                                condividi opinioni e consigli.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
    .landing-page {
        /* min-height: 100vh; */
        display: flex;
        flex-direction: column;
    }

    .hero-section {
        background-color: #f8f9fa;
        padding: 60px 0;
    }

    .hero-title {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .hero-description {
        font-size: 18px;
        margin-bottom: 30px;
    }

    .features-section {
        padding: 60px 0;
    }

    .section-title {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    .feature {
        text-align: center;
        margin-bottom: 30px;
    }

    .feature i {
        font-size: 36px;
        margin-bottom: 15px;
    }

    .feature-title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    .feature-description {
        font-size: 16px;
    }
</style>
