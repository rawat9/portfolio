<script>
  import { Navbar, ThemeSwitch } from '$lib/components';
  import { Toaster } from 'svelte-french-toast';
</script>

<svelte:head>
  <title>Anurag Rawat | Software Engineer</title>
  <meta name="description" content="Software Engineer Portfolio" />
</svelte:head>

<Navbar />
<ThemeSwitch />
<slot />

<Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
