<script>
    // import "../app.css";
    import Navbar from "../lib/components/Navbar.svelte";
    import Footer from "../lib/components/Footer.svelte";
</script>

<main class="d-flex flex-column min-vh-100">
    <!-- navbar -->
    <Navbar />
    <div><slot /></div>
    <Footer />
    <!-- Footer -->
</main>
