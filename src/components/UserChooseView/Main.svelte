<script>
    import WtD from "../WriteToDatabase/Main.svelte";
    import RFD from "../ReadFromDatabase/Main.svelte";

    import { db } from "../JS/firebase";


    let choice = {
        choice0: "writetodatabase",
        choice1: "readfromdatabase",
    };
    let userChoice = choice.choice1;

    const setUserChoice = () => {

        // userChoice = guest;

        if (userChoice===choice.choice0){
            userChoice=choice.choice1;
        }else{
            userChoice=choice.choice0;
        }

        console.log(userChoice)
    }

    let notification = 0; // value

    $: db.collection("nodemcu").onSnapshot((snaps) => {
        // let q = '';
        // q==>

        let signals = snaps.docs.map((item) => item.data());
        // console.log(signals);
        signals = signals.filter(
            (item) => item.description === "receiveFromCloud"
        );
        let signal = signals[0].signal;

        if (signal.length !== 0) {
            notification = true;
        }
        // console.log(signal)
    });
</script>

<table>
    <tr>
        <!-- <td
            ><button on:click={() => setUserChoice(choice.choice1)}
                >Send An Action</button
            >
        </td> -->
        <td>
            {#if notification}
                <button on:click={() => setUserChoice()}
                    ><b>New Signal🔔</b>
                </button>
            {/if}
        </td>
    </tr>
</table>

{#if userChoice === choice.choice0}
    <WtD />
{:else if userChoice === choice.choice1}
    <RFD />
{/if}
