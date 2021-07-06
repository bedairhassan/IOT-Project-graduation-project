<script>
    export let fetched,arrayDisplay;

    import { db } from "../JS/firebase"
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

</script>


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
