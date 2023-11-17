<script>
  import { Navbar, ThemeSwitch } from '$lib/components';
  import '../app.css';
  import { Toasts } from 'svoast';
</script>

<svelte:head>
  <title>Anurag Rawat</title>
  <meta name="description" content="Software Engineer" />
</svelte:head>

<Navbar />
<ThemeSwitch />
<slot />

<Toasts position="top-center" />
