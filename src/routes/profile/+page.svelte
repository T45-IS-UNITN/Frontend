<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let user = {
        _id: "6488abeb602b55a1eddccb7f",
        name: "Alvaro Vitali",
        email: "alvaro@mail.com",
        password:
            "$2b$10$l9gQplibbvjErfG9NXvPe.tfuZlLzBQ59Fnt/XlCn91RBiKHmoU1W",
        libriPreferiti: [],
        follow: [],
        __v: 0,
    };
</script>

<div>
    <h2>{user.name}</h2>
    <p>{user.email}</p>
</div>
