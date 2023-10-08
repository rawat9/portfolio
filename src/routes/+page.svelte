<script lang="ts">
  import { Navbar, ThemeSwitch } from '$lib/components';
  import { Toasts } from 'svoast';
  import { Intro, About, Projects, Skills, Experience, Contact, Footer } from '$lib/components';
  import type { ActionData } from './$types';

  import { toast } from 'svoast';

  async function launchToast(type: string, message: string) {
    if (type === 'success') {
      toast.success(message, { duration: 3000, closable: true });
    } else {
      toast.error(message, { duration: 3000, closable: true });
    }
  }

  export let form: ActionData;
  if (form?.success) {
    launchToast('success', form.detail);
  } else if (form?.error) {
    launchToast('error', form.detail);
  }
</script>

<Navbar />
<ThemeSwitch />

<main class="flex flex-col items-center px-4 pt-28 sm:pt-36">
  <Intro />
  <About />
  <Projects />
  <Skills />
  <Experience />
  <Contact />
  <Footer />
</main>

<Toasts position="top-center" />
