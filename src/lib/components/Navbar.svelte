<script lang="ts">
  import { links } from '$lib/constants';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let visible = false;

  let activeSection = 'Home';

  onMount(() => {
    visible = true;
  });
</script>

{#if visible}
  <header class="z-[999] relative">
    <div
      transition:fade={{ delay: 200, duration: 300 }}
      class="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none -translate-x-1/2 border border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
    >
      <nav
        class="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 sm:my-[-1.5rem]"
      >
        <ul
          class="flex w-[22rem] flex-wrap md:items-center md:w-auto items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {#each links as link}
            <li class="h-3/4 flex items-center justify-center relative">
              <a
                class="flex w-full px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
                href={link.hash}
                on:click={() => (activeSection = link.name)}
              >
                {link.name}
              </a>

              {#if link.name === activeSection}
                <span class="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800" />
              {/if}
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  </header>
{/if}
