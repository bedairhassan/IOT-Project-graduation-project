<script>
    import signedin from "../JS/store/signedin";

    let currentsignedin;
    $: signedin.subscribe((lastsignedin) => (currentsignedin = lastsignedin));


    const signOut = ()=>{
        signedin.update(()=>undefined)
    }
</script>

{#if currentsignedin}
Welcome, {currentsignedin} <button on:click={signOut}>Sign Out</button>
<br/>
<hr>
<br/><br/>
{:else}
Please login.
{/if}

