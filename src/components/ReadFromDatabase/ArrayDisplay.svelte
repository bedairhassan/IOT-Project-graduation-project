<script>
    export let fetched, arrayDisplay;

    import { db } from "../JS/firebase";
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
    <table border="1 px">
        <tr>
            <th>room</th>
            <th>device</th>
            <th>action</th>

            <th>signal</th>
            <th>Send Signal</th>
        </tr>

        {#each arrayDisplay as item}
            <tr>
                <td>{item.room}</td>
                <td>{item.device}</td>
                <td>{item.action}</td>
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
