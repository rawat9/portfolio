<script lang="ts">
  import Icon from '@iconify/svelte';
  import { browser } from '$app/environment';
  import { setContext } from 'svelte';

  let darkMode = true;

  function handleSwitchDarkMode() {
    darkMode = !darkMode;

    localStorage.setItem('theme', darkMode ? 'dark' : 'light');

    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }

  if (browser) {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      darkMode = true;
      setContext('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      darkMode = false;
      setContext('theme', 'light');
    }
  }
</script>

<button
  class="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
  on:click={handleSwitchDarkMode}
  aria-label="Toggle dark mode"
>
  {#if !darkMode}
    <Icon icon="radix-icons:sun" class="text-2xl" />
  {:else}
    <Icon icon="radix-icons:moon" class="text-2xl" />
  {/if}
</button>
