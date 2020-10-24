Vue.component('nav-bar', {
  template: `
  <nav>
    <a href="./home">Home (logo here)</a>
    <div style="float: right">
      <a href="./menu">Menu</a>
      <a href="./about">About</a>
      <a href="./reviews">Reviews</a>
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
    <p>© 2020 Idk Our Company. All rights reserved.</p>
  </footer>
  `,
  data() {
    return {
      sites: ['facebook', 'instagram', 'youtube', 'twitter']
    }
  }
})