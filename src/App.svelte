<script>
	import Login from "./components/Login/Login.svelte";
	import NavBar from "./components/NavBar/Main.svelte";
	import DEVSignIn from "./components/DEV/DevSignIn.svelte";

	import UserChoice from "./components/UserChooseView/Main.svelte";

	import signedin from "./components/JS/store/signedin";
	let currentsignedin;
	$: signedin.subscribe((lastsignedin) => (currentsignedin = lastsignedin));
</script>

<main>
	<DEVSignIn />
	<NavBar />
	<Login />
	{#if currentsignedin}
		<UserChoice />
	{/if}
</main>
