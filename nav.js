Vue.component('nav-bar', {
  template: `
  <nav>
    <a href="./index.html"><img src="./images/logo.png"></a>
    <div class="nav-links">
      <a href="./Menu.html">Menu</a>
      <a href="./About.html">About</a>
      <a href="./Reviews.html">Reviews</a>
    </div>
  </nav>
  `
})

Vue.component('nav-footer', {
  template: `
  <footer>
    <a v-for="site of sites" :key="site" :href="'https://' + site + '.com'">
      <img :src="'images/' + site + '.png'"/>
    </a>
    <p>© 2020 Retriever Café. For class purposes. Images from Olive Garden</p>
  </footer>
  `,
  data() {
    return {
      sites: ['facebook', 'instagram', 'youtube', 'twitter']
    }
  }
})