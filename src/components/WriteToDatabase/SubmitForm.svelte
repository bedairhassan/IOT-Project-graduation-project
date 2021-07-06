<script>
    import { db } from "../JS/firebase";

    let room, device, action;
    let signal ; // from cloud

    import signedin from '../JS/store/signedin'
    let currentsignedin;
    $: signedin.subscribe(lastSignedIn=>currentsignedin=lastSignedIn)

    $:db.collection("nodemcu").onSnapshot((snaps) => {
        
        let signals = snaps.docs.map(item=>item.data());
        signals = signals.filter(item=>item.description==='receiveFromCloud')
        signal=signals[0].signal
        console.log(signal)
    });

    const Submit = () => {

        let date = new Date()+``;
        db.collection("devices").doc(`${currentsignedin} ${date}`).set({
            username:currentsignedin,
            room,device,action,signal
        })
    };
</script>

{#if signal}
New Signal Has Been Introduced.
<input placeholder={signal} disabled/>
<input placeholder="room" bind:value={room} />
<input placeholder="device" bind:value={device} />
<input placeholder="action" bind:value={action} />

<button on:click={Submit}>Submit</button>
{:else}
No Signal yet.
{/if}

