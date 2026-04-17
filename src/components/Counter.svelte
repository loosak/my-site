<!-- src/components/Counter.svelte -->

<script>

    let count = 0

</script>

<button on:click={() => count++}>

    Count: {count}

</button>