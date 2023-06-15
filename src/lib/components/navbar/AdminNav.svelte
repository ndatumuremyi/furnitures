<script lang="ts">
	const navigations = [
		{
			name: 'About us',
			url: '/admin/categories',
			icon: 'category'
		}
	];
</script>

<nav class="flex flex-col h-full border-r-4 border-primary-200 gap-6 px-8 py-8 rounded-md">
	{#each navigations as nav}
		<a href={nav.url} class="">
			<span class="material-symbols-outlined rounded-xl text-3xl p-4 bg-secondary-300 hover:bg-secondary-50 text-primary-900">
				{nav.icon}
			</span>
			
		</a>
		{/each}
</nav>
