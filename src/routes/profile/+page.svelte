<script>
    export let data;

    $: console.log(data);
</script>

<div>welcome {JSON.stringify(data)}</div>