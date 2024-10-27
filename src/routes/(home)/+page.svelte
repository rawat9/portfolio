<script lang="ts">
  import { Intro, About, Projects, Skills, Experience, Contact, Footer } from '$lib/components';
  import { toast } from 'svelte-sonner';
  import type { ActionData } from './$types';

  async function launchToast(type: 'success' | 'error', message: string) {
    if (type === 'success') {
      toast.success(message);
    } else {
      toast.error(message);
    }
  }

  export let form: ActionData;

  if (form?.success) {
    launchToast('success', form.detail);
  } else if (form?.error) {
    launchToast('error', form.detail);
  }
</script>

<main class="flex flex-col items-center px-4 pt-40 sm:pt-60">
  <Intro />
  <About />
  <Projects />
  <Skills />
  <Experience />
  <Contact />
  <Footer />
</main>
