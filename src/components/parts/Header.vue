<template>
  <header class="header">
    <h1 class="header__title">FirstVet Case</h1>
    <button
      class="header__hamburger"
      v-on:click="OpenNav()"
      v-bind:class="{ open: IsNavOpen }"
    >
      <div class="header__hamburger-line"></div>
      <div class="header__hamburger-line"></div>
      <div class="header__hamburger-line"></div>
    </button>
    <nav class="header__nav" v-bind:class="{ open: IsNavOpen }">
      <a
        class="header__nav-links" 
        href="/"
        v-on:click="OpenNav()"
      >Hem</a>
      <a
        class="header__nav-links"
        href="/list"
        v-on:click="OpenNav()"
      >Lista</a>
      <a
        class="header__nav-links"
        href="/contact"
        v-on:click="OpenNav()"
      >Kontakt</a> 
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      IsNavOpen: false
    }
  },
  methods: {
    OpenNav() {
      // Checks if nav is open, set true or false
      (!this.IsNavOpen) ? this.IsNavOpen = true : this.IsNavOpen = false
    }
  }
}
</script>

<style scoped>

.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 9rem;
  padding: 0 1rem;
}

.header__title {
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
}

.header__hamburger {
  position: relative;
  background: none;
  z-index: 100;
}

.header__hamburger .header__hamburger-line {
  margin: 0.5rem 0;
  width: 3rem;
  height: 0.3rem;
  background: black;  
  transition: 100ms;
}

.header__hamburger.open .header__hamburger-line {
  position: absolute;
  top: -2rem;
  right: 2rem;
}

.header__hamburger.open .header__hamburger-line:nth-child(1) {
  width: 0.3rem;
  height: 3.3rem;
  background: white;
  transform: rotate(45deg);
}

.header__hamburger.open .header__hamburger-line:nth-child(2) {
  width: 0.3rem;
  height: 3.3rem;
  background: white;
  transform: rotate(-45deg);
}

.header__hamburger.open .header__hamburger-line:nth-child(3) {
  display: none;
}

.header__nav {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40rem;
  margin: auto;
  padding-top: 10rem;
  background: rgba(0,0,0,0.9);
  z-index: -1;
  opacity: 0;
  transition: 200ms;
}

.header__nav.open {
  opacity: 1;
  z-index: 10;
}

.header__nav-links {
  margin-left: 7rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
}

.header__nav-links:hover {
  text-decoration: underline;
}

</style>
