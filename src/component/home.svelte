<script lang="ts">
  import { html } from "../content/home.md";
</script>

<div class="home">
  <picture class="home-picture">
    <source srcset="/images/cath.avif" type="image/avif">
    <source srcset="/images/cath.webp" type="image/webp">
    <img
      class="home-picture"
      src="/images/cath.jpg"
      alt="Catherine Dorion"
    />
  </picture>
  <div class="content">
    {@html html}
  </div>
  <video
    class="home-video"
    src="/videos/renouer.mp4"
    autoplay
    muted
    playsinline
    loop
    on:ended={() => {
      this.currentTime = 0;
      this.play();
    }}
  />
</div>

<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > * {
      margin-bottom: 3rem;
    }

    &:last-child {
      margin-bottom: 0;
    }

    .home-video {
      width: 100%;
      overflow: hidden;
    }

    .home-picture {
      height: auto;
      width: 100%;
      max-width: 30rem;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 50rem;
      width: 100%;

      :global(p) {
        width: 75%;
      }
    }
  }
</style>
