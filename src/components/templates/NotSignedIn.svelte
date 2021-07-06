<script>


// const signedin= require('../JS/store/signedin')
import signedin from '../JS/store/signedin'

let currentsignedin;
$: signedin.subscribe((lastsignedin) => (currentsignedin = lastsignedin));

</script>

{#if currentsignedin===undefined}
<h1>Not Signed In</h1>
{/if}