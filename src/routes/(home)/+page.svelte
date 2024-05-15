<script lang="ts">
  import { Intro, About, Projects, Skills, Experience, Contact, Footer } from '$lib/components';
  import toast from 'svelte-french-toast';
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

<main class="flex flex-col items-center px-4 pt-28 sm:pt-36">
  <Intro />
  <About />
  <Projects />
  <Skills />
  <Experience />
  <Contact />
  <Footer />
</main>
