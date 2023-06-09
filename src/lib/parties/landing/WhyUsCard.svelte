<script lang="ts">
    export let icon = "";
    export let title = "";
</script>


<div class="flex flex-col items-center max-w-xs gap-4 card card-hover p-4">
    <span class="material-symbols-outlined text-primary-900   text-4xl">{icon}</span>
    <h3 class="h3 mt-6 text-center">{title}</h3>
    <p class="text-center">
    <slot/>    
    </p>
</div>