<script lang="ts">
	import { goto } from "$app/navigation";
	import auth from "$lib/stores/auth";
	import jwtDecode from "jwt-decode";
	import { onMount } from "svelte";
    import { get } from "svelte/store";
    export let restrictTo: string[]| null = null;

    let allow = true;
    try {
        const jwt: { exp: number, role: string } = jwtDecode(get(auth).access_token as string);
        const now = new Date();
        if (now.getTime() > jwt.exp * 1000) {
          auth.set({});
          throw new Error('Token expired');
        }
        if(restrictTo && !restrictTo.includes(jwt.role)){
            throw new Error('Unauthorized');
        }
        console.log(jwt)
      } catch (error) {
        allow = false;
      }
      onMount (() => {
        if(!allow){
            goto('/auth/login');
        }
      });
</script>
{#if !allow}
    <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-4xl font-bold">Unauthorized</h1>
        <button class="btn btn-primary" on:click={()=>goto('/auth/login')}>Login</button>
    </div>
{:else}
    <slot/>
{/if}
