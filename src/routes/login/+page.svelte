<script>
    import { doLoginRequest } from "./login";
    let email = "";
    let password = "";
    function handleSubmit(event) {
        event.preventDefault();
        doLoginRequest(email, password);
    }
</script>

<section class="h-100">
    <div class="container h-100">
        <div class="row justify-content-sm-center h-100">
            <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-9 col-sm-9">
                <div class="text-center my-5">
                    <img src="src/media/SVG/book.svg" alt="logo" width="100" />
                </div>
                <div class="card shadow-lg">
                    <div class="card-body p-5">
                        <h1 class="fs-4 card-title fw-bold mb-4">Login</h1>
                        <form
                            method="POST"
                            class="needs-validation"
                            novalidate=""
                            autocomplete="off"
                            on:submit|preventDefault={handleSubmit}
                        >
                            <div class="mb-3">
                                <label class="mb-2 text-muted" for="email"
                                    >Email</label
                                >
                                <input
                                    id="email"
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    bind:value={email}
                                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{'{'}2{'}'}"
                                    required
                                />
                                <div class="invalid-feedback">
                                    Email is invalid
                                </div>
                            </div>

                            <div class="mb-3">
                                <div class="mb-2 w-100">
                                    <label class="text-muted" for="password"
                                        >Password</label
                                    >
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    class="form-control"
                                    name="password"
                                    bind:value={password}
                                    required
                                />
                                <div class="invalid-feedback">
                                    Password is required
                                </div>
                            </div>

                            <div class="d-flex align-items-center">
                                <button
                                    type="submit"
                                    class="btn btn-primary ms-auto"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer py-3 border-0">
                        <div class="text-center">
                            Non sei registrato? <a
                                href="/signup"
                                class="text-dark">Registrati</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
