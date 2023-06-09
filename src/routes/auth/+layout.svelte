
<div class="oval-image relative h-screen overflow-hidden flex gap-3">
	<div class="relative h-full hidden md:block w-[40%]">
		<div
			class="mask absolute top-[-10%] bottom-[-10%] left-0 w-full overflow-hidden rounded-br-[80%] rounded-tr-[80%]"
		>
			<img class="block w-full h-full object-cover" src="/images/furniture01.jpg" alt="Oval" />
		</div>
		<strong class="text-xl uppercase absolute top-6 left-6">Furniture</strong>
	</div>
	<div class="max-w-[60%] w-full mx-auto">
		<slot />
	</div>
</div>
