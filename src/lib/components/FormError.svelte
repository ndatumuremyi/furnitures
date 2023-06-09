<script lang="ts">

	export let error: string[] | undefined

</script>
{#if error}
    <p class="text-red-500">{error}</p>
{/if}