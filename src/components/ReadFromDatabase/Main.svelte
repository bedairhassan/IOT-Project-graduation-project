<!-- hello -->
<script>
    let room = undefined,
        device = undefined,
        action = undefined;

    let currentsignedin;
    import signedin from "../JS/store/signedin";
    $: signedin.subscribe((lastsignedin) => (currentsignedin = lastsignedin));

    let array,
        fetched = false;
    import ArrayDisplay from "./ArrayDisplay.svelte";
    import { db } from "../JS/firebase";
    $: db.collection("devices").onSnapshot((snaps) => {
        array = snaps.docs.map((item) => item.data());
        array = array.filter((item) => item.username === currentsignedin);

        arrayDisplay = array;
        fetched = true;
    });

    // filter by room
    let arrayDisplay;
    $: {
        if (room !== undefined) {
            arrayDisplay = array.filter((item) => item.room === room);
        }
    }

    $: {
        if (device !== undefined) {
            arrayDisplay = array.filter((item) => item.device === device);
        }
    }

    $: {
        if (action !== undefined) {
            arrayDisplay = array.filter((item) => item.action === action);
        }
    }
</script>

<input type="text" bind:value={room} placeholder="Filter by room" />
<input type="text" bind:value={device} placeholder="Filter by device" />
<input type="text" bind:value={action} placeholder="Filter by action" />
<button
    on:click={() => {
        room = undefined;
        device = undefined;
        action = undefined;
    }}>Clear</button
>
<br />

<ArrayDisplay fetched={fetched} arrayDisplay={arrayDisplay} />
