<script>
  import { Navbar, ThemeSwitch } from '$lib/components';
  import '../app.css';
  import { Toaster } from 'svelte-french-toast';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
  <title>Anurag Rawat | Software Engineer</title>
  <meta name="description" content="Software Engineer portfolio" />
</svelte:head>

<Navbar />
<ThemeSwitch />
<slot />

<Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
