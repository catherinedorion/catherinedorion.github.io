<script lang="ts">
  import Router from 'svelte-spa-router';
  import { routes } from './routes';

  import Social from './component/social.svelte';
</script>

<main>
  <Router {routes} />
  <div class="footer">
    <Social />
  </div>
</main>

<style lang="scss">
  main {
    margin: 1rem 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .footer {
      width: 100vw;
      position: sticky;
      bottom: 0;
      right: 0;
      background-color: #edf5f0;
    }
  }
</style>