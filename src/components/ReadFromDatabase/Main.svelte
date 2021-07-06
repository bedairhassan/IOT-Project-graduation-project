<script>
    let room = undefined,
        device = undefined,
        action = undefined;

    let currentsignedin;
    import signedin from "../JS/store/signedin";
    $: signedin.subscribe((lastsignedin) => (currentsignedin = lastsignedin));

    let array,
        fetched = false;
    import { db } from "../JS/firebase";
    $: db.collection("devices").onSnapshot((snaps) => {
        array = snaps.docs.map((item) => item.data());
        arrayDisplay = array;
        fetched = true;
    });

    // signal is id!
    const sendSignalToNodeMcu = (signal) => {
        db.collection("nodemcu")
            .doc("receiveFromCloud")
            .set({
                date: `${new Date()}`,
                description: "receiveFromCloud",
                signal,
            });
    };

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

{#if fetched}
    <table>
        {#each arrayDisplay as item}
            <tr>
                <td>{item.room}</td>
                <td>{item.device}</td>
                <td>{item.action}</td>
                <td>{item.room}</td>
                <td><input placeholder={item.signal} disabled /></td>
                <td
                    ><button on:click={() => sendSignalToNodeMcu(item.signal)}
                        >Send Signal</button
                    ></td
                >
            </tr>
        {/each}
    </table>
{/if}
