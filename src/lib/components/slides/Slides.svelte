<script lang="ts">
  import { onMount } from 'svelte';

  import Reveal from 'reveal.js';
  import Highlight from 'reveal.js/plugin/highlight/highlight';
  import Markdown from 'reveal.js/plugin/markdown/markdown';
  import Notes from 'reveal.js/plugin/notes/notes';

  import 'reveal.js/dist/reveal.css';
  import 'reveal.js/dist/theme/white.css';
  import 'reveal.js/plugin/highlight/monokai.css';

  import Presentation from './Presentation.svelte';

  onMount(() => {
    const deck = new Reveal({
      plugins: [Markdown, Highlight, Notes],
      autoAnimateEasing: 'ease',
      autoAnimateDuration: 1,
      hash: true
      // controls: false,
      // progress: false
    });

    deck.initialize({ slideNumber: true, embedded: true });
  });
</script>

<div class="reveal">
  <div class="slides">
    <Presentation />
  </div>
</div>

<style>
  .reveal {
    width: 100%;
    height: 700px;
    box-shadow:
      rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
</style>
