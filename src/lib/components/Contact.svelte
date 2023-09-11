<script>
  import Icon from '@iconify/svelte';
</script>

<section id="contact" class="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
  <h2 class="text-3xl font-medium capitalize mb-8 text-center">Contact</h2>

  <p class="text-gray-700 -mt-6 dark:text-white/80">
    Please contact me directly at
    <a class="underline" href="mailto:example@gmail.com"> anurag.rawat0201@gmail.com </a>
    or through this form.
  </p>

  <form class="mt-10 flex flex-col dark:text-white">
    <input
      class="h-14 px-4 rounded-lg borderBlack dark:bg-slate-800 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
      name="senderEmail"
      type="email"
      required
      maxLength={100}
      placeholder="Your email"
    />
    <textarea
      class="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-slate-800 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
      name="message"
      placeholder="Your message"
      required
      maxLength={5000}
    />
  </form>
  <button
    type="submit"
    class="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
  >
    Submit
    <Icon
      icon="ion:paper-plane"
      class="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </button>
</section>
