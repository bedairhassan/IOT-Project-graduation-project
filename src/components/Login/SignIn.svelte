<script>
    import { db } from "../JS/firebase";
    import update_who_is_signed_in from "../JS/firebase_tools/update_who_is_signed_in";

    let username, password;

    const logMeIn = () => {
        console.log("logged in!");
        update_who_is_signed_in(username);
    };

    const tryAgain = () => {
        console.log("try again");
    };

    const buttonClick = () => {
        db.collection("login").onSnapshot((snaps) => {
            // function begins

            // if his credentials is correct, allow him to access his data!
            let ExistAtDatabase =
                snaps.docs.filter(
                    (item) =>
                        item.data().username === username &&
                        item.data().password === password
                ).length > 0;

            if (ExistAtDatabase) {
                // we got two checks!
                logMeIn();
            } else {
                tryAgain();
            }
        });
    };

    import signedin from "../JS/store/signedin";

    let currentsignedin;
    $: signedin.subscribe((lastsignedin) => (currentsignedin = lastsignedin));
</script>

{#if !currentsignedin}
    <main>
        SignIn<br />
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
        <button on:click={buttonClick}>SignIn</button>
    </main>
{/if}
