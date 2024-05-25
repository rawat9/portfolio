<script>
  import { experiences } from '$lib/constants';
  import * as HoverCard from '$lib/components/ui/hover-card';
</script>

<section id="experience" class="scroll-mt-28 mb-28 sm:mb-40 max-w-[45rem] leading-8 px-4">
  <h2 class="text-3xl font-medium capitalize mb-8 text-center">Experience</h2>
  <ol class="relative border-l border-gray-200 dark:border-gray-700 mb-3">
    {#each experiences as experience}
      <li class="mb-10 ml-9">
        <div
          class="absolute w-3 h-3 bg-slate-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
        ></div>

        <h3 class="flex mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          {experience.title}
        </h3>
        <small class="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          <HoverCard.Root openDelay={0}>
            <HoverCard.Trigger class="hover:underline hover:underline-offset-4"
              >{experience.company}</HoverCard.Trigger
            >
            <HoverCard.Content align="start" class="w-80">
              <div class="flex justify-between space-x-4">
                <img src={experience.imageUrl} alt="Company logo" class="h-10 w-10" />
                <div class="space-y-1">
                  <h4 class="text-sm font-semibold">{experience.company}</h4>
                  <p class="text-sm">{experience.hoverCardContent}</p>
                </div>
              </div>
            </HoverCard.Content>
          </HoverCard.Root>
          , {experience.location} | {experience.date}
        </small>
        <ul class="list-disc">
          {#each experience.description as desc}
            <li class="text-sm mt-2 font-normal text-gray-500 dark:text-gray-400">{@html desc}</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ol>
</section>
