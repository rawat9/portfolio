<script>
  import { experiences } from '$lib/constants';
  import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineDot,
    TimelineSeparator,
    TimelineOppositeContent
  } from 'svelte-vertical-timeline';
  import Icon from '@iconify/svelte';
  import { getContext } from 'svelte';

  let theme = getContext('theme');
</script>

<section id="experience" class="scroll-mt-28 mb-28 sm:mb-40">
  <h2 class="text-3xl font-medium capitalize mb-8 text-center">Experience</h2>
  <Timeline position="alternate">
    {#each experiences as exp}
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          <p>{exp.date}</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style="background: white; font-size: 1.5rem; border: none;">
            <Icon icon="mdi-light:home" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          style="background: {theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)'}; 
            box-shadow: none; border: 1px solid rgba(0, 0, 0, 0.05); padding: 1.3rem 2rem;"
        >
          <h3 class="font-semibold capitalize">{exp.title}</h3>
          <p class="font-normal !mt-0">{exp.location}</p>
          <p class="!mt-1 !font-normal text-gray-700 dark:text-white/75">
            {exp.description}
          </p>
        </TimelineContent>
      </TimelineItem>
    {/each}
  </Timeline>
</section>
