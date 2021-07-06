<script>
    import { db } from "../JS/firebase";

    // variables
    let username;
    let password;
    const collection = "login"; // constant

    const submit = () =>
        db.collection(collection).doc(username).set({ username, password });

    const buttonClick = () => {
        db.collection(collection).onSnapshot((snaps) => {
            // function begins

            let ExistAtDatabase =
                snaps.docs.filter((item) => item.data().username === username)
                    .length > 0;

            if (!ExistAtDatabase) {
                submit();
            }
        });
    };

    import signedin from "../JS/store/signedin";

    let currentsignedin;
    $: signedin.subscribe((lastsignedin) => (currentsignedin = lastsignedin));
</script>

{#if !currentsignedin}
    <main>
        SignUp<br />
        <input
            type="text"
            bind:value={username}
            placeholder="Enter your username"
        /> <br />
        <input
            type="password"
            bind:value={password}
            placeholder="Enter your password"
        /> <br />
        <button on:click={buttonClick}>SignUp</button>
    </main>
{/if}
