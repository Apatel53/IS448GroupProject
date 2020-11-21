Vue.component('nav-bar', {
  template: `
  <nav>
    <a href="./index.html">Home (logo here)</a>
    <div style="float: right">
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
    <p>© 2020 Retriever Café. All rights reserved.</p>
  </footer>
  `,
  data() {
    return {
      sites: ['facebook', 'instagram', 'youtube', 'twitter']
    }
  }
})