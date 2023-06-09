<script lang="ts">
    export let className = ""
    export let prefixIcon = ""
    export let suffixIcon = ""
</script>
<button class="btn variant-ringed-primary {className}">
    <span class="material-symbols-outlined">
        {prefixIcon}
        </span>
    <slot />
    <span class="material-symbols-outlined">
        {suffixIcon}
        </span>
</button>