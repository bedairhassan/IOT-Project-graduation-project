<script>

import signedin from '../JS/store/signedin'
import SubmitForm from './SubmitForm.svelte'

let currentsignedin;
$: signedin.subscribe((lastsignedin) => (currentsignedin = lastsignedin));

</script>
{#if currentsignedin}
<SubmitForm/>
{:else}
Not Signed In
{/if}

<!-- <NotSignedIn/> -->
