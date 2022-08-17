<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';

    import { html } from '../content/social.md';
</script>

<style lang="scss">
  .social {
    width: 100%;
  }
  :global(ul) {
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    list-style: none
  }
  :global(li) {
    height: 2rem;
    width: 2rem;
  }
</style>

<div class="social">
  {@html html}
</div>