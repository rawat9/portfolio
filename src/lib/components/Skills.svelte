<script>
  import { skills } from '$lib/constants';
  import Icon from '@iconify/svelte';
  import * as Tooltip from '$lib/components/ui/tooltip';
  import * as Tabs from '$lib/components/ui/tabs';
  import Button from './ui/button/button.svelte';
</script>

<section id="skills" class="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
  <h2 class="text-3xl font-medium capitalize mb-8 text-center">Skills</h2>
  <Tabs.Root value="languages" class="w-[400px]">
    <Tabs.List>
      <Tabs.Trigger value="languages">Languages</Tabs.Trigger>
      <Tabs.Trigger value="frameworks">Frameworks</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content class="mt-5" value="languages">
      <ul class="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {#each skills.languages as language}
          <li>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <Button variant="outline" size="icon" class="rounded-full p-3 w-16 h-16">
                  <Icon icon="logos-{language.icon}" class="text-3xl" />
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p>{language.title}</p>
              </Tooltip.Content>
            </Tooltip.Root>
          </li>
        {/each}
      </ul>
    </Tabs.Content>

    <Tabs.Content class="mt-5" value="frameworks">
      <ul class="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {#each skills.frameworks as framework}
          <li>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <Button variant="outline" size="icon" class="rounded-full p-3 w-16 h-16">
                  <Icon icon="logos-{framework.icon}" class="text-3xl" />
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p>{framework.title}</p>
              </Tooltip.Content>
            </Tooltip.Root>
          </li>
        {/each}
      </ul>
    </Tabs.Content>
  </Tabs.Root>
</section>
