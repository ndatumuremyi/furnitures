<script lang="ts">
	import CreateCategoryForm from '$lib/parties/categories/CreateCategoryForm.svelte';
  import keys from '$lib/constants/keys';

	import { modalStore, type ModalSettings, type ModalComponent } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

  export let data: PageData;





  const modalComponent: ModalComponent = {
	ref: CreateCategoryForm,
  props: { formData: data.form }
};

  const modal: ModalSettings = {
	type: 'component',
  component: modalComponent ,
	title: 'Create Category',
};
let search = "";
let categories = data.categories;
$: {
  categories = data.categories.filter((category:any) => category.name.toLowerCase().includes(search.toLowerCase()));
}

</script>

<section>
    <header class="space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
      <div class="flex items-center justify-between">
        <h2 class="font-semibold text-white">Categories</h2>
        <button on:click={() => {
          modalStore.trigger(modal);
        }} class="hover:bg-secondary-900 group flex items-center rounded-md bg-secondary-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
          <svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
          </svg>
          New
        </button>
      </div>
      <form class="group relative">
        <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
        </svg>
        <input bind:value={search} class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 bg-secondary-50 ring-slate-200 shadow-sm" type="text" aria-label="Filter Categories" placeholder="Filter Categories...">
      </form>
    </header>
    <ul class=" justify-center flex flex-wrap gap-6 px-12">
      {#each categories as category }
         <li class="card flex justify-start items-center gap-4 min-w-[350px] min-h-[100px] px-4 py-4">
          <img class="w-16 h-16 rounded-full flex-shrink-0" src={`${keys.BACKEND_URL}${category.image}`} alt="">
          <p>{category.name}</p>

      </li>
      {/each}

      <li class="flex min-w-[350px] min-h-[100px]">
        <button on:click={() => {
          modalStore.trigger(modal);
        }}  class="bg-secondary-50 hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
          <svg class="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
          </svg>
          New Category
        </button>
      </li>
    </ul>
  </section>
