<template>
  <div class="layout flex flex-col h-screen justify-between">
    <div class="mb-auto">
      <header class="header">
        <div class="text-center my-5">
          <g-link to="/" id="title" class="no-underline text-3xl sm:text-5xl sm:title hover:no-underline">{{ $static.metadata.siteName }}</g-link> <!-- transition-all duration-100 ease-linear -->
          <p id="subtitle" class="font-bold text-sm mb-5">{{ $static.metadata.siteDescription }}</p>
        </div>
        <Navbar />
      </header>
      <div class="lg:flex lg:flex-row lg:justify-between max-w-6xl m-auto	">
        <div id="slot-container" class="mx-4 md:w-9/12 md:mx-auto mb-4 lg:mb-0 lg:mr-10 lg:ml-10"> <!-- bg-blue-100 -->
          <slot />
        </div>
        <div id="sidebar" class="mx-4 md:w-9/12 md:mx-auto lg:mr-10"> <!-- bg-purple-100 -->
          <p class="border border-black w-56 pt-2 pb-3 px-4 mb-5 italic font-sans text-base">The Official Website of The Lord Reverend Wizard of Alchemical Despair</p>
          <!-- <div class="my-5">
            <h2>Recent Posts</h2>
            <ul>
              <li>The Philosophical and Spiritual Value of Music</li>
              <li>She Likes It Heavy Review</li>
              <li>Chicago Doom Confederacy Review</li>
              <li>The Spirit of the Band</li>
              <li>About</li>
            </ul>
          </div>
          <div class="mb-5">
            <h2>Categories</h2>
            <ul>
              <li>December 2019 (1)</li>
              <li>November 2019 (1)</li>
              <li>October 2019 (1)</li>
              <li>September 2019 (12)</li>
              <li>December 2018 (1)</li>
            </ul>
          </div> -->
          <div>
            <h2>Favorites</h2>
            <ul class="mb-5">
              <li><g-link class="no-underline hover:underline" to="/theyll-come-for-you">They'll Come For You</g-link></li>
              <li><g-link class="no-underline hover:underline" to="/the-ceremony-of-forgiveness">The Ceremony of Forgiveness</g-link></li>
              <li><g-link class="no-underline hover:underline" to="/a-voice-in-the-distance">A Voice in the Distance</g-link></li>
              <li><g-link class="no-underline hover:underline" to="/apathy-equals-freedom">Apathy = Freedom</g-link></li>
              <li><g-link class="no-underline hover:underline" to="/the-ritual">The Ritual</g-link></li>
              <li><g-link class="no-underline hover:underline" to="/cloudships-from-magonia">Cloudships From Magonia</g-link></li>
            </ul>
          </div>
          <div>
            <h2>Links</h2>
            <ul class="mb-5">
              <li><a class="no-underline hover:underline" href="https://victorsarchive.com/" target="_blank">Victor's Archive (New version of this website)</a></li>
              <li><a class="no-underline hover:underline" href="https://victorfisher.music/" target="_blank">Victor's Music Page</a></li>
              <li><a class="no-underline hover:underline" href="https://reenchantment.bandcamp.com/" target="_blank">Bandcamp</a></li>
              <li><a class="no-underline hover:underline" href="https://www.youtube.com/@reenchantment/" target="_blank">YouTube</a></li>
              <li><a class="no-underline hover:underline" href="https://twitter.com/magicrockmusic/" target="_blank">Twitter</a></li>
              <li><a class="no-underline hover:underline" href="https://www.facebook.com/reenchantmentmusic/" target="_blank">Facebook</a></li>
              <li><a class="no-underline hover:underline" href="https://www.instagram.com/reenchantmentmusic/" target="_blank">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h2>Related Projects</h2>
            <ul class="mb-0">
              <li><a class="no-underline hover:underline" href="https://patershrouder.bandcamp.com/" target="_blank">Pater Shrouder</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <footer class="w-full text-center py-5">© {{ new Date().getFullYear() }} Victor Fisher</footer>
    <!-- <footer class="fixed bottom-0 w-full text-center my-5">© {{ new Date().getFullYear() }} Victor Fisher</footer> -->
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<style>
@import './default.css';

#title {
  font-family: 'Merienda One', Merriweather, lato,'helvetica neue', helvetica, arial, serif;
}

#subtitle {
  font-family: 'Gilda Display', lato,'helvetica neue', helvetica, arial, sans-serif;
}

p, ul {
  font-family: 'Amiko','lato', lato, 'helvetica neue', helvetica, arial, sans-serif;
}

@media (min-width: 640px) {
  #subtitle {
    font-size: 22px;
  }
}

@media (min-width: 1024px) {
  #sidebar {
    min-width: 18rem;
    max-width: 18rem;
  }
}

#slot-container:empty {
  margin-bottom: 0;
}

/* a:focus, button:focus, input:focus, select:focus {
   outline: 0 !important
} */

a:focus, button:focus, input:focus, select:focus, audio:focus, video:focus {
  /* box-shadow: 0 0 0 2px black;
  -webkit-box-shadow: 0 0 0 2px black;
	-moz-box-shadow: 0 0 0 2px black;
  border-radius: 0px;
  outline: 2px; */
  @apply outline-none;
  @apply shadow-outline;
}

a, button, input, select, audio, video {
  transition: all 100ms linear;
  -webkit-transition: all 100ms linear !important;
  -moz-transition: all 100ms linear !important;
  -ms-transition: all 100ms linear !important;
  -o-transition: all 100ms linear !important;
}

a {
  padding: 1px;
}

html {
  scroll-behavior: smooth;
}

audio{
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

/* body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
} */
</style>
