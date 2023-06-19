<script>
    let searchQuery = "";
    let searchResults = []; // Array per memorizzare i risultati di ricerca

    function handleSearch() {
        // console.log("Search query:", searchQuery);
        alert(`Termine cercato: ${searchQuery}`);
        // Esegui la logica di ricerca qui
    }
</script>

<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">NovelNotes</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/home"
                        >Home</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/recensioni">Recensioni</a>
                </li>
                <li class="nav-item dropdown">
                    <span
                        class="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Generi
                    </span>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="/generi/avventura"
                                >Avventura</a
                            >
                        </li>
                    </ul>
                </li>
            </ul>
            <form
                class="d-flex px-2"
                role="search"
                on:submit|preventDefault={handleSearch}
            >
                <input
                    class="form-control me-2"
                    type="search"
                    placeholder=""
                    aria-label="Search"
                    id="searchInput"
                    bind:value={searchQuery}
                />
                <label for="searchInput" class="visually-hidden">Search</label>
                <button class="btn btn-outline-success" type="submit"
                    >Cerca</button
                >
            </form>

            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/signup">Signup</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/profile">Profilo</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
