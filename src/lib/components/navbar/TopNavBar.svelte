<script lang="ts">
	const navigations: topNav[] = [
		{
			name: 'Home',
			url: '/'
		},
		{
			name: 'About us',
			url: '/aboutus'
		},
		
	];
</script>

<nav class="list-nav">
	<ul class="flex justify-end gap-6">
		{#each navigations as nav}
			<li><a href="{nav.url}">{nav.name}</a></li>
		{/each}
	</ul>
</nav>

