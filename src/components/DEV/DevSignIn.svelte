<script>
    import signedin from '../JS/store/signedin'

    let currentsignedin;
    $: signedin.subscribe(lastSignedIn=>{
        currentsignedin=lastSignedIn
        console.log(lastSignedIn)
    })

    const SignIn=()=>{
        signedin.update(()=>'hassan')
        
    }
</script>

{#if !currentsignedin}
<button on:click={SignIn}>Sign In As Hassan</button>
<!-- {:else} -->

{/if}